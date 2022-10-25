import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber"
import { chromium, firefox, webkit } from "@playwright/test"
import { timeout, headless, reportTracing, reportDir, recordVideo, monitorXHRs, browserToUse, slowMo } from "./config"
import path from "path"
import { unlinkSync } from "fs"
import v8toIstanbul from "v8-to-istanbul"

setDefaultTimeout(timeout * 1000)

let browser

BeforeAll(async function () {
  const browserConfiguration = {
    slowMo,
    firefoxUserPrefs: {
      "media.navigator.streams.fake": true,
      "media.navigator.permission.disabled": true
    },
    headless
  }

  global.browser = await (async () => {
    switch (browserToUse) {
    case "firefox":
      return firefox.launch(browserConfiguration)
    case "safari":
      return webkit.launch(browserConfiguration)
    case "msedge":
      return chromium.launch({ ...browserConfiguration, channel: "msedge" })
    case "chromium":
      return chromium.launch(browserConfiguration)
    default:
      return chromium.launch({ ...browserConfiguration, channel: "chrome" })
    }
  })()
})

AfterAll(async function () {
  await global.browser.close()
})

Before(async function () {
  const config = {}

  if (recordVideo) {
    config["recordVideo"] = {
      dir: reportDir + "/videos",
      size: { width: 1920, height: 1080 }
    }
  }

  global.context = await browser.newContext(config)
  if (reportTracing) {
    await global.context.tracing.start({ screenshots: true, snapshots: true, sources: true })
  }

  global.page = await global.context.newPage()
  global.coverage = await global.page.coverage.startJSCoverage()

  if (monitorXHRs) {
    global.page.on("request", (request) => console.debug(">>", request.method(), request.url()))
    global.page.on("response", (response) => console.debug("<<", response.status(), response.url()))
  }
})

After(async function (iWorld, scenarioResult) {
  if (scenarioResult?.result?.status === "FAILED") {
    if (reportTracing) {
      const currentScenario = scenarioResult.pickle.name.trim().replace(/\s/g, "_")
      const timestamp = new Date().toISOString().replace(/:/g, "-")

      await global.context.tracing.stop({
        path: path.join(reportDir, "tracing", `${currentScenario}_${timestamp}.zip`)
      })
    }
  } else {
    if (recordVideo) {
      // delete recorded video for passed scenarios
      const vPath = await this.page.video().path()

      if (vPath) {
        unlinkSync(vPath)
      }
    }
  }
  const coverage = await global.page.coverage.stopJSCoverage()
  console.debug(coverage)
  for (const entry of coverage) {
    const converter = v8toIstanbul("", 0, { source: entry.source })
    await converter.load()
    converter.applyCoverage(entry.functions)
    console.debug(JSON.stringify(converter.toIstanbul()))
  }
  await global.page.close()
  await global.context.close()
})
