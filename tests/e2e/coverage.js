const { chromium } = require("@playwright/test")
const v8toIstanbul = require("v8-to-istanbul");

(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.coverage.startJSCoverage()
  await page.goto("http://localhost:3000")
  const coverage = await page.coverage.stopJSCoverage()
  for (const entry of coverage) {
    const converter = v8toIstanbul("", 0, { source: entry.source })
    await converter.load()
    converter.applyCoverage(entry.functions)
    console.debug(JSON.stringify(converter.toIstanbul()))
  }
  await browser.close()
})()
