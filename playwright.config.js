const { devices } = require("@playwright/test")

require("dotenv").config()

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "dot" : "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry"
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"]
      }
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"]
      }
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"]
      }
    }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  outputDir: "test-results/",
  webServer: {
    command: "npx nyc pnpm dev",
    port: 3000,
    env: {
      USE_BABEL_PLUGIN_ISTANBUL: "1"
    }
  }
}

module.exports = config
