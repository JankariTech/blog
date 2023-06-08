---
title: Testing with Jest and Puppeteer
authorName: Talank Baral
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110976-crop-col-800.jpg
authorLink: https://github.com/Talank
createdAt: Jul 22, 2020
tags: testing, javascript, jest, puppeteer
banner: https://github.com/JankariTech/blog/blob/master/src/imgs/fallback_banner.png
---

"In Jest, there is truth" -William Shakespeare.

By using Jest, you will know the truth about your application. The `Jest` is a javascript testing tool that is installed via NPM or Yarn and run via the command line. It is a great testing library and many react team members are involved building it, so it happens to work very well for testing react applications. Jest is built on top of Jasmine and Mocha but some additional features like snapshot testing and parallel test execution are provided by Jest. It also comes with built-in mocking and assertion abilities.

Puppeteer is a Node library that is used for browser automation. Puppeteer provides a high-level API to control the browser. It can work with Chrome, Chromium or Firefox. By default this library runs the browser in headless mode, but it can be also configured to run Chrome or Chromium fully (non-headless).

## Installation And Requirements
This guide is based on Ubuntu 18.04. Some commands will be different if you have another OS installed on your computer. Before getting started with Jest, You need to have `npm` and an app for which you will be writing tests.

If your app is not yet ready for testing then you can just clone this basic [todo app](https://github.com/Talank/todo-react) and follow along.

### Jest Versions
Jest is the test runner library for creating, executing, and structuring tests. Jest CLI is a tool that you use from the command line to run and provide configuration options to jest. It configures jest based on whatever argument you give while running jest. The version is important because jest is a dynamic library and different versions of jest might work differently. While writing this blog, I am using jest version `24.9.0`. So, some features might be different if you are using some other version.

### Jest installation and Running Tests
You can install the latest version of jest from NPM using
```
npm i jest --save-dev
```

Now, its time to configure the NPM script for running a test from the command line. For this, open your `package.json` and add the `test` script as follows:
```
"scripts": {
    "test": "jest"
  },
```

Tests are run by using the Jest CLI (typing `jest` followed by arguments in the command line).

For example, in the [todo app](https://github.com/Talank/todo-react) in my github, you can run the test with the command `npm run test` since I have added `"test": "jest"` in the script of my `package.json`

With the above-mentioned way, jest can be configured within your `package.json`. That is the easy way for jest configuration. Alternatively, you can also use the jest configuration file for which you should create a `jest.config.js` file and include that file in the command to run the test. For example, your package.json scripts section should include
```
"scripts": {
    "test": "jest --config ./jest.config.js"
  },
```
And, in the root path alongside the package.json, your `jest.config.js` should contain following configurations
```
module.exports = {
  verbose: true,
  roots: [
    "./__tests__"
  ]
}
```
By using the jest configuration file, you have many other options as well. You can find the details about that in the [jest documentation](https://jestjs.io/docs/en/configuration). However, in this blog, I will focus on configuring jest using the `package.json`

### Install Puppeteer
Use the following command to install puppeteer in your project.
```
npm i puppeteer --save-dev
```
Puppeteer will download the latest version of chrome. If you need to work with firefox then you need to install the `puppeteer-firefox` library. Refer to [Puppeteer for Firefox](https://www.npmjs.com/package/puppeteer-firefox) in the npmjs website for further details.

By the end of the installation of jest and puppeteer, you should have the following dependencies in the `devDependencies` section of your `package.json`.
```
"devDependencies": {
  "jest": "^24.9.0",
  "puppeteer": "^4.0.1"
}
```

### Creating Test Files
The jest command runs the test files inside `__tests__` folder or it will runs any files with `.spec.js` or `.test.js` in their filename. So, you have to write your test in a file that ends with `.spec.js` or `test.js`. Or you can simply put all your tests inside the `__tests__` folder.

### Jest Globals
There are a variety of jest Globals but we will mainly need 2 important globals called `describe` and `it`. The table below tells about these two globals in more detail.

| | it | describe |
|---|---|---|
| AKA | Tests | Test Suite |
| Syntax | it(name, fn) | describe(name, fn) |
| Description | `it()` global is a method in which you pass a function as an argument, that function is executed as a block of tests by the test runner. You describe your test logic inside `it()` block. | `describe` is an optional method for grouping any number of `it()` or test statements. `describe()` block contains related it blocks. |

In addition to `it()` and `describe()` methods, you might need the following methods to start testing with jest.
- afterAll(fn, timeout)
- afterEach(fn, timeout)
- beforeAll(fn, timeout)
- beforeEach(fn, timeout)

These functions are executed before and after the test scenarios. You can define these functions inside the `describe()` method to make it applicable for all tests in the scope of that particular `describe()` method.

## Demo:
Here I have added a test for adding a task in my react ToDo app.
```
const puppeteer = require('puppeteer');

describe('Todo React', () => {
  let browser
  let page

  beforeAll(async () => {
      browser = await puppeteer.launch()
  })

  afterEach(async () => {
      await page.close()
    })

  afterAll(async () => {
    await browser.close()
  })

  describe('add task to the list', () => {
    beforeEach(async () => {
      page = await browser.newPage()
      await page.goto('http://localhost:3000')
    })

    it('should be possible to add task to the list', async () => {
      const taskInputField = await page.$x('//input[@placeholder="Enter task"]')
      const taskToAdd = "New Task"
      await taskInputField[0].click()
      await taskInputField[0].type(taskToAdd)

      await page.keyboard.press('Enter')

      const lists = await page.$x("//div[@class='list']/p/input");

      let toDo;

      for( let list of lists ) {
        toDo = await page.evaluate(el => el.getAttribute("value"), list);
      }

      expect(toDo).toBe(taskToAdd)
    })
  })
})
```

### Explanation of Demo
In the above demo, I first imported the puppeteer library. And in before scenario, I launched the browser in headless mode. Before all the scenarios inside the first describe block, the browser is launched only once. And before each scenario, a new tab is opened in incognito mode. Similarly, after each scenario, the tab is closed and when all the scenarios are executed, the browser is closed.

The browser is launched in headless mode by default. However, if you want to launch the browser in non-headless mode then you can provide the browser launch option in `puppeteer.launch()`. For example:
```
browser = await puppeteer.launch({headless:false})
```

In Jest, there are plenty of functions to simulate UI activities. For example, in the above demo, you can see `click()` for clicking in an element, `type()` for typing, etc.

Similarly, for assert operation, you can use `expect()`. Many other matcher functions can be used with expect() such as `.toContain(item)` , `toBeTruthy()` etc. You can find more of these `jest matchers` in the [jest documentation](https://jestjs.io/docs/en/expect).

### Gherkin with Jest
In Jest, you do not have to write a feature file for your test cases. If you need to write features in a separate file then you can use [jest-cucumber](https://github.com/bencompton/jest-cucumber) library. By using this library, you can replace `describe` and `it` blocks by `Given`, `When`, and `Then` step definitions. The step definitions are linked with the respective steps in the feature files.

However, I would prefer `Codecept.js` or `nightwatch.js` instead of `jest` if I need to use features of `Cucumber.js` while testing my application. Because, with jest-cucumber, you need to specify which feature file is linked with a particular step definition file. While Codecept.js or nightwatch.js, you can write the step definition of a `given` step in one file and the `when` step of the same scenario in some other file. You might lose this kind of freedom if you are using jest-cucumber.

That's it for now. If you want to learn more about jest and it's commands, you can refer to [jestjs.io](https://jestjs.io/docs/en/api)

Hope you enjoy jesting.
ThankYou!
