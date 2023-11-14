---
title: Behavior Driven Development (BDD) using Playwright
authorName: Swikriti Tripathi
authorAvatar: https://avatars.githubusercontent.com/u/41103328?v=4
authorLink: https://github.com/SwikritiT
createdAt: Feb 7, 2022
tags: playwright, testing, e2e, javascript
banner: https://blog.jankaritech.com/src/assets/Playwright/images/banner.png
seriesTitle: E2E Testing using BDD with Playwright
episode: 1
---
Playwright is an open-source NodeJS framework for browser automation. It is developed by Microsoft and the development team has members that were involved in developing [Puppeteer](https://github.com/puppeteer/puppeteer) for Google.

One of the main features of Playwright is that it can automate Chromium, Webkit, and Firefox browsers with a single API. Along with being cross-browser, it is cross-platform and cross-language, supporting the major OS like Windows, Linux, Mac and languages like TypeScript, JavaScript, Python, .NET, Java. Playwright also comes with tools like codgen — which let you generate automatic code by recording your actions. You can find out more about Playwright on their [official website](https://playwright.dev/).

For this blog, we will be implementing BDD in Playwright. I have a small to-do web app, and I'm going to be setting up Playwright in the same. If you want to follow through, you can fork and clone the project from [here](https://github.com/SwikritiT/todo). If you have your web application, you can set up Playwright there as well. Let's get started!

*Note: the whole setup is done in Ubuntu 20.04.3 LTS, so some setup steps might differ depending on your platform*

## Prerequisites

- Node.js version 12 or above. If you don't already have node installed in your system, you can use this [blog as a guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

*Note Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported.*


## Installation

*Run from your project's root directory*
```bash
npm i -D @playwright/test
npm i -D playwright
npx playwright install
```
Playwright doesn't come with the built-in support for BDD, so we are going to use the help of another tool [Cucumber](https://cucumber.io/)

```bash
npm i -D @cucumber/cucumber@7.3.1 @cucumber/pretty-formatter
```

After this, `devDependencies` in your `package.json` should look something like this

```json
// package.json file

"devDependencies": {
  "@cucumber/cucumber": "^7.3.1",
  "@cucumber/pretty-formatter": "^1.0.0-alpha.1",
  "@playwright/test": "^1.18.0",
  "playwright": "^1.18.1"
}
```

## Configuration
We are going to use `Cucumber` to run our tests, so we need to have a configuration file for it. At the root level of your project create a file `cucumber.conf.js`

First of all, we are going to require the following:

```js
// cucumber.conf.js file
const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
// you can choose other browsers like webkit or firefox according to your requirement
const { chromium } = require("playwright");
```

Set default timeout to some reasonable amount of time
```js
// cucumber.conf.js file

// in milliseconds
setDefaultTimeout(60000)
```
Add the following code snippet to your file
```js
// cucumber.conf.js file

// launch the browser
BeforeAll(async function () {
  global.browser = await chromium.launch({
      headless: false,
      slowMo: 1000,
  });
});

// close the browser
AfterAll(async function () {
  await global.browser.close();
});
```
In the above snippet of code, we launch a `chrome` browser where our tests will be automated. You can launch a different one as per your requirement, just make sure you import the correct browser. We run the browser in the headed mode which can be done by setting `headless:false`, this means that when the test is running we can see it being automated in the browser. You can set it to `true` if you don't want to see the test running but where is the fun in that? Another option is `slowMo` which slows down Playwright operations by the specified number of milliseconds and can be helpful to watch the test run. There are various options that can be set while launching the browser, you can go through all of them [here](https://playwright.dev/docs/api/class-browsertype#browser-type-launch). After we've finished our operations, we will close the browser. This configuration is for before/after all the tests are run. Now we need to configure what happens when each test scenario is run. For this look at the snippet below:

```js
// cucumber.conf.js file

// Create a new browser context and page per scenario
Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
  await global.page.close();
  await global.context.close();
});

```
After we've launched our browser, we need to create a new browser context. Playwright allows creating `incognito` browser contexts with `browser.newContext([options])` method. Each browser context has its page that provides methods to interact with a single tab in a browser. We can create a page with `context.newPage()` method. Similar to launching a browser we can set a lot of options while creating a `browser context` as well as screenshots, record video, geolocation, and more. You can go through all of them [here](https://playwright.dev/docs/api/class-browser#browser-new-context). After we've finished with our operations, we close the `page` and `context`.

*Voila*, we're done with the configuration part. The whole `cucumber.conf.js` file looks like this :

```js
// cucumber.conf.js file

const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000)

// launch the browser
BeforeAll(async function () {
  global.browser = await chromium.launch({
      headless: false,
      slowMo: 1000,
  });
});

// close the browser
AfterAll(async function () {
   await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
  await global.page.close();
  await global.context.close();
});

```
## Writing Tests

**Now some fun stuff, we start writing tests!**

Our file structure will look like this

```
📦tests
┗ 📂acceptance
┃ ┣ 📂features
┃ ┃ ┗ 📜todo.feature
┃ ┗ 📂stepDefinitions
┃ ┃ ┗ 📜todoContext.js

```

Following the above tree create file `tests/acceptance/features/todo.feature`. As we are using BDD, we are going to start by writing a feature file, and we are going to be using `Gherkin` language to do so. If you don't know how to write a feature file or what `Gherkin` is you can take the help of the following blogs as it's out of the scope of this blog and won't be explained in detail.

- [cucumber BDD](https://cucumber.io/docs/gherkin/reference/)
- [BDD – An introduction to feature files](https://www.modernanalyst.com/Resources/Articles/tabid/115/ID/3871/BDD-An-introduction-to-feature-files.aspx)

Here's a basic syntax of what a feature file looks like
```feature
Feature: a short description of a software feature
As a user
I want to do this
So I can achieve that

Scenario: name of the scenario
Given [Preconditions or initial context of the system ]
When [Event or action]
Then [Expected output]
```

Now, assuming you've got some knowledge of feature files and how to write them, we proceed further.

The application that I'm going to be testing is a todo app and the UI looks like this.

![Homepage of the app](/src/assets/Playwright/images/todo1.png "Todo application")

I want to test if the item I've added is displayed on the UI or not. And the feature file looks like this.

```feature
// todo.feature

Feature: todo
  As a user
  I want to add an item to the todo list
  So that I can organize tasks

  Scenario: Add item to the todo list
    Given a user has navigated to the homepage
    # the text inside the quote works as a variable that can be passed to a function
    When the user adds "test" to the todo list using the webUI
    Then card "test" should be displayed on the webUI
```
Now we implement each step of the scenario using Playwright! Create a context file `tests/acceptance/stepDefinitions/todoContext.js`. We can get a boilerplate for each step in the scenario where we can provide our implementation. For that add the following script in your `package.json` file.

```json
"test:e2e": "cucumber-js --require cucumber.conf.js --require tests/acceptance/stepDefinitions/**/*.js --format @cucumber/pretty-formatter"

```
We will be using the `test:e2e` script for running the test. Now go to your terminal and run the script

```bash
npm run test:e2e tests/acceptance/features/todo.feature
```

This will run your feature file. As the steps aren't implemented, yet you will get something like this on your screen.

```console
? Given a user has navigated to the homepage
    Undefined. Implement with the following snippet:

      Given('a user has navigated to the homepage', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

? When the user adds "test" to the todo list using the webUI
    Undefined. Implement with the following snippet:

      When('the user adds {string} to the todo list using the webUI', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

? Then card "test" should be displayed on the webUI
    Undefined. Implement with the following snippet:

      Then('card {string} should be displayed on the webUI', function (string) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
      });

```
You can now add the generated snippets into your context file and start implementing them.

Import following:

```js
// todoContext.js file

const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");
```

Define your launch url and selectors for different UI elements as per need, these are project-specific. Playwright supports CSS and Xpath selectors. You can find the detailed information about them [here](https://playwright.dev/docs/selectors)

```js
// todoContext.js file

//launch url
const url = 'http://localhost:3000'

//define selectors
const homepageElement = '.borderTodo'
const todoInput = '.todo-input';
const todoButton = '.todo-button';
const todoItem = '.todo .todo-item ';
```

Now we can implement the individual test steps, like so

```js
// todoContext.js file

Given('a user has navigated to the homepage', async function () {
   // navigate to the app
  await page.goto(url)
  // locate the element in the webUI
  const locator = page.locator(homepageElement)
  // assert that it's visible
  expect(locator).toBeVisible()
})

When('the user adds {string} to the todo list using the webUI',async function (item) {
  // fill the item that was input from the feature file , to the inputText field in the UI
  await page.fill(todoInput , item)
  // click the button
  await page.click(todoButton)
})

Then('card {string} should be displayed on the webUI',async function (item) {
  // get text of the item that is visible in the UI
  const text = await page.innerText(todoItem)
  // assert that its name is similar to what we provided
  expect(text).toBe(item)
})

```
You can find different methods available to interact with UI elements like click, fill, and so on in [Playwright's official documentation](https://playwright.dev/docs/api/class-playwright), it's very nicely explained how the function works along with the example code.

We use the `page` that we created in the `before` hook to interact with various web elements. Playwright performs [autowait](https://playwright.dev/docs/actionability) and performs a range of actionability checks on elements and ensures that elements are ready to perform the expected operation. This is one of its plus points.

This is the whole context file
```js
// todoContext.js file

const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'http://localhost:3000'

//define selectors
const homepageElement = '.borderTodo'
const todoInput = '.todo-input'
const todoButton = '.todo-button'
const todoItem = '.todo .todo-item '


Given('a user has navigated to the homepage', async function () {
  // navigate to the app
  await page.goto(url)
  // locate the element in the webUI
  const locator = page.locator(homepageElement)
  // assert that it's visible
  expect(locator).toBeVisible()
})

When('the user adds {string} to the todo list using the webUI',async function (item) {
  // fill the item that was input from the feature file , to the inputText field in the UI
  await page.fill(todoInput , item)
  // click the button
  await page.click(todoButton)
})

Then('card {string} should be displayed on the webUI',async function (item) {
  // get text of the item that is visible in the UI
  const text = await page.innerText(todoItem)
  // assert that its name is similar to what we provided
  expect(text).toBe(item)
})

```

## Run the test
First of all, you need to run your application, in my case

```bash
npm run start
```
Now run the test and watch it in the browser

```bash
npm run test:e2e tests/acceptance/features/todo.feature
```
You should get a log similar to this one.

```console
Feature: todo # tests/acceptance/features/todo.feature:1

As a user
I want to add an item to the todo list
So that I can organize tasks

Scenario: Add item to the todo list # tests/acceptance/features/todo.feature:6
  Given a user has navigated to the homepage
  When the user adds "test" to the todo list using the webUI
  Then card "test" should be displayed on the webUI

1 scenario (1 passed)
3 steps (3 passed)
0m04.266s (executing steps: 0m04.010s)
```

Hopefully, your test also passed like mine, and you got to learn about a new library.
You can extend the feature file to add more scenarios or add multiple feature files, implement the Page Object Model as per your requirement, and it should all work the same.

You can find the source code of this implementation [here](https://github.com/SwikritiT/todo/tree/playwright-blog)

