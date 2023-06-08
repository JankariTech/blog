---
title: Configure Cypress
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: testing, javaScript, cypress, automation
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
seriesTitle: E2E Testing with Cypress
episode: 3
---

When a project is added to Cypress, a `cypress.json` file is created in the project. This file is used to store the `projectId` (after configuring your tests to record) and any configuration values you supply.

> Change Configuration File
>
> You can change the configuration file or turn off the use of a configuration file by using the `--config-file` flag.

## Options

The default behavior of Cypress can be modified by supplying any of the following configuration options.

- Global

  | OPTION                  | DEFAULT                        | DESCRIPTION                                                  |
  | ----------------------- | ------------------------------ | ------------------------------------------------------------ |
  | `baseUrl`               | `null`                         | URL used as prefix for `cy.visit()` or `cy.request()` command. |
  | `env`                   | `{}`                           | Any values to be set as [environment variables] |
  | `retries`               | `{“runMode”: 0, “openMode: 0}` | The number of times to retry a failing test.  See [Test Retries] for more information. |
  | `defaultCommandTimeout` | `4000`                         | Time, in milliseconds, to wait until most DOM based commands are considered timed out. |

- Timeouts

  | OPTION                  | DEFAULT | DESCRIPTION                                                  |
  | ----------------------- | ------- | ------------------------------------------------------------ |
  | `defaultCommandTimeout` | `4000`  | Time, in milliseconds, to wait until most DOM based commands are considered timed out. |
  | `pageLoadTimeout`       | `6000`  | Time, in milliseconds, to wait for page transition events or `cy.visit()`, `cy.go()`, `cy.reload()` commands to fire their page load events. |
  | `requestTimeout`        | `5000`  | Time, in milliseconds to wait for an XHR request to go out in a `cy.wait()` command |



- Folders / Files

  | OPTION              | DEFAULT              | DESCRIPTION                                                  |
  | ------------------- | -------------------- | ------------------------------------------------------------ |
  | `testFiles`         | `**/*.*`             | A String or Array of glob patterns of the test files to load |
  | `ignoreTestFiles`   | `*.hot-update.js`    | A String or Array of glob patterns used to ignore test files that would otherwise be shown in your list of tests. |
  | `screenshotsFolder` | `cypress/screenshot` | Path to folder where screenshots will be saved from `cy.screenshot()` command or after a test fails during `cypress run` |

- Browser

  | OPTION                       | DEFAULT | DESCRIPTION                                                  |
  | ---------------------------- | ------- | ------------------------------------------------------------ |
  | `chromeWebSecurity`          | `true`  | Whether to enable Chromium-based browser’s Web Security for same-origin policy and insecure mixed content. |
  | `blockHosts`                 | `null`  | A String or Array of hosts that you wish to block traffic for. |
  | `viewportHeight`             | `660`   | Default height in pixels for the application under tests’ viewport (Override with `cy.viewport()` command) |
  | `viewportWidth`              | `1000`  | Default width in pixels for the application under tests’ viewport. (Override with `cy.viewport()` command) |
  | `animationDistanceThreshold` | `5`     | The distance in pixels an element must exceed over time to be considered animating |
  | `waitForAnimations`          | `true`  | Whether to wait for elements to finish animating before executing commands |

## Overriding Options

Cypress gives you the option to dynamically alter configuration values. This is helpful when running Cypress in multiple environments and on multiple developer machines. This gives you the option to do things like override the `baseUrl` or environment variables.

### Command Line

When running Cypress from the Command Line you can pass a `--config` flag.

Examples:

```bash
cypress open --config pageLoadTimeout=30000,baseUrl=https://myapp.com
```

```bash
cypress run --config integrationFolder=tests,videoUploadOnPasses=false
```

```bash
cypress run --browser firefox --config viewportWidth=1280,viewportHeight=720
```

### Environment Variables

You can also use environment variables to override configuration values. This is especially useful in Continuous Integration or when working locally. This gives you the ability to change configuration options without modifying any code or build scripts.

By default, any environment variable that matches a corresponding configuration key will override the configuration file (`cypress.json` ) by default value.

```bash
export CYPRESS_VIEWPORT_WIDTH=800
export CYPRESS_VIEWPORT_HEIGHT=600

# Both options below are valid
export CYPRESS_pageLoadTimeout=100000
export CYPRESS_PAGE_LOAD_TIMEOUT=100000
```

Now, Cypress will strip off the `CYPRESS_`, camel-case any keys and automatically convert values into `Number` or `Boolean`. Make sure to prefix your environment variables with `CYPRESS_` else they will be ignored.

## `Cypress.config()`

You can also override configuration values within your test using `Cypress.config()`.

> Configuration set using `Cypress.config` is only in scope for the current spec file.

```js
Cypress.config('pageLoadTimeout', 10000) // set value
Cypress.config('pageLoadTimeout') // => 100000 (get value)
```

## Run in CI

You can easily integrate Cypress with your current CI provider. According to the official documentation, Cypress works with any CI Provider.

## Features

- Optimize tests

  - See detailed insights into the performance of individual tests and specs to identify potential bottlenecks
  - Automatic load balancing and parallelization ensure tests run as fast as possible

- Maximize efficiency with parallelization

  Split your tests across multiple CI machines and drastically reduce your run times

  ![Parallelization in Cypress]



## Slack Integration

The Cypress Slack application provides real-time results for your Cypress tests, all in one place—improving remote collaboration and giving wider visibility into test behavior.

- Improve cross-team collaboration by instantly surfacing Cypress results to the teams that need visibility
- Confirm that key tests pass prior to launching new products or features
- Reduce the time it takes to catch failed tests

![Cypress Slack Integration]

## Github Integration

Cypress Dashboard tightly integrates your Cypress test runs with your `GitHub` work flow via commit status checks and pull-request comments.

> Merge Confidently with Status Checks

Cypress Dashboard will report status of test runs as `GitHub` commit status checks for every run group or every spec file in your test-suite so that you can prevent PR merges until all your tests pass.

> Test Results in Your Work flow via Pull-Request Comments

Detailed test run information conveniently posted as PR comments that include tests run statistics, specific test failures, related screenshots and deep links to the Cypress Dashboard to help you quickly resolve problems.

![GitHub Integration]



[Parallelization in Cypress]: /src/assets/TestingWithCypress/images/cypress_parallelization.png "Parallelization in Cypress!"
[GitHub Integration]: /src/assets/TestingWithCypress/images/cypress_github_comment.png "Cypress bot comment in a GitHub PR."
[Cypress Slack Integration]: /src/assets/TestingWithCypress/images/cypress_slack_integration.png "Cypress channel inside Slack Application."
[environment variables]: https://docs.cypress.io/guides/guides/environment-variables.html#Setting "Environment Variables in Cypress"
[Test Retries]: https://docs.cypress.io/guides/guides/test-retries.html "Retrying test with Cypress"
