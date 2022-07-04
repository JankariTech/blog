---
title: Cucumber - Gherkin Integration
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: vue, jest, unit, testing
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--t1Oxkc_O--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffkifasq4al1c75uculu.png
seriesTitle: E2E Testing with Cypress
episode: 4
---

There is no official `gherkin` support available for Cypress, but there are nice libraries that add support for using feature files when testing with Cypress. Among them, we’re using `cypress-cucumber-preprocessor` in our project for automation testing.

To get started in Cypress with cucumber preprocessor, follow these simple steps:

## Installation

```bash
npm install --save-dev cypress-cucumber-preprocessor
```

## Cypress Configuration

Add it to your plugins `cypress/plugins/index.js`:

```js
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Add support for feature files to your Cypress configuration `cypress.json`

```json
{
  "testFiles": "**/*.feature"
}
```

## Pre-processor Configuration

It lets you define the path to a folder containing step definitions required for your tests.

### Where to define? :thinking:

You can use [cosmiconfig][cosmiconfigGitHub] which helps to search for and loading configuration for your program. Or you can configure simply by adding this to your `package.json`.

```json
{
    "cypress-cucumber-preprocessor": {
      "nonGlobalStepDefinitions": true
  }
}
```

#### Available Configurations

| OPTION                     | DEFAULT                                                      | DESCRIPTION                                                  |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `commonPath`               | `cypress/integration/common` when `nonGlobalStepDefinitions` is *true*<br/>`cypress/support/step_definitions` when `nonGlobalStepDefinitions` is *false*<br/>`${nonGlobalStepBaseDir}/common` when `nonGlobalStepBaseDir` is defined | define the path to a folder containing all common step definitions of your tests. |
| `nonGlobalStepDefinitions` | `false`                                                      | If true use the Cypress Cucumber Preprocessor Style pattern for placing step definitions files. |
| `nonGlobalStepBaseDir`     | `undefined`                                                  | If defined and `nonGlobalStepDefinitions` is also true then step definition searches for folders with the features name will start from the directory provided here. |
| `stepDefinitions`          | `cypress/integration` when `nonGlobalStepDefinitions` is true<br/>`cypress/support/step_definitions` when `nonGlobalStepDefinitions` is false | Path to the folder containing our step definitions.          |



## Organize Tests

### Single feature files

After adding `.feature` support in cypress configuration, you can add feature files in `cypress/integration/`

You can easily integrate `Background`, `Scenario Outlines`, `DataTables` within a feature file.

### Bundled feature files

When running Cypress tests in the headless mode, the execution time can get pretty bloated, this happens because by default Cypress will relaunch the browser between every feature file. The cypress-cucumber-preprocessor gives you the option to bundle all feature files before running the tests, therefore reducing the execution time.

You can take advantage of this by creating `.features` files. You choose to have only one in the root of the directory `cypress/integrations` or per directory.

Adding support for `.features` files to your Cypress configuration

`cypress.json`

```json
{
  "testFiles": "**/*.{feature,features}"
}
```

### Step Definitions

The steps in `.feature` file look for their implementation inside a directory configured from preprocessor configuration. Step definitions files are by default in: `cypress/support/step_definitions`. If you want to put them somewhere else please use `cosmiconfig` format. For example, add to your `package.json`.

```json
{
  "cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/step_definitions/"
  }
}
```

An example of some step definitions done in the cypress way is as follows:

```js
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})
Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
```

### Before and After hooks

The cypress-cucumber-preprocessor supports both Mocha’s `before/beforeEach/after/afterEach` hooks and Cucumber’s `Before` and `After` hooks.

The cucumber hooks implementation fully supports tagging as described in the `cucumberJs` documentation. So they can be conditionally selected based on the tags applied to the Scenario. This is not possible with Mocha hooks.

Example:

```js
const { Before, After, Given, Then }
  = require("cypress-cucumber-preprocessor/steps");

// this will get called before each scenario
Before(() => {
  beforeCounter += 1;
  beforeWithTagCounter = 0;
});

// this will only get called before scenarios tagged with @foo
Before({ tags: "@foo" }, () => {
  beforeWithTagCounter += 1;
});

Given("My Step Definition", () => {
  // ...test code here
})
```

> **Note:** to avoid confusion with the similarly named *Mocha* `before` and `after` hooks, the *Cucumber* hooks are not exported onto global scope. So they need explicit importing as shown above.

### Smart Tagging

Start your tests without setting any tags and then put a @focus on the scenario (or scenarios) you want to focus on while development or bug fixing.

```gherkin
Feature: Smart Tagging

  As a cucumber cypress plugin which handles Tags
  I want to allow people to select tests to run if focused
  So they can work more efficiently and have a shorter feedback loop

  Scenario: This scenario should not run if @focus is on another scenario
    Then this unfocused scenario should not run

  @focus
  Scenario: This scenario is focused and should run
    Then this focused scenario should run

  @this-tag-affects-nothing
  Scenario: This scenario should also not run
    Then this unfocused scenario should not run

  @focus
  Scenario: This scenario is also focused and also should run
    Then this focused scenario should run
```

### Run tests

Run your Cypress Launcher the way you would usually do.

```bash
yarn run cypress open
```

Then click on a `.feature` file on the list of specs, and see the magic happening!

- Running tagged tests

  ```bash
  ./node_modules/.bin/cypress-tags run -e TAGS='not @foo and (@bar or @zap)'
  ```

- Limiting to a subset of feature files

  ```sh
    ./node_modules/.bin/cypress-tags run -e GLOB='cypress/integration/**/*.feature'
  ```

  You can also configure these from cypress configuration `env` property with `TAGS` sub-property.

  ```json
  {
      "env": {
          "TAGS": "not @ignore"
      },
      "baseUrl": "yourBaseUrl",
      "ignoreTestFiles": "*.js"
  }
  ```

Cool! 😎  I’m sure this will get you started with cypress running your test in Gherkin theme.

<!-- links -->

[cosmiconfigGitHub]: https://github.com/davidtheclark/cosmiconfig "Cosmiconfig GitHub Homepage"
