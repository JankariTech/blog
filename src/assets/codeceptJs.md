---
title: CodeceptJs Setup & BDD
authorName: Hari Bhandari
authorAvatar: https://avatars.githubusercontent.com/u/34328907?v=4
authorLink: https://github.com/HariBhandari07
createdAt: June 2, 2020
tags: k6, load, performance, testing
banner: data:image/jpeg;base64,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
---

CodeceptJS is a modern end to end testing framework. In this tutorial we will setup BDD end-to-end testing using CodeceptJS along with Puppeteer.

## Requirements:
1. `npm`
2. An app to write tests to: If you already have an app you can use that OR
 you can just clone this basic todo app https://github.com/taniarascia/react-hooks and follow along

    If you cloned the above app please browse inside the cloned directory and run the following commands to set it up:

a. `npm install`

b. `npm run start`

## CodeceptJS Setup
Browse inside your project directory
1. Install CodeceptJS with Puppeteer

    `npm install codeceptjs puppeteer --save-dev`

2. Initialize CodeceptJS in the current directory by running:

    `npx codeceptjs init`

You will be asked some questions as shown below:
![2](https://user-images.githubusercontent.com/34328907/80667879-04605f00-8ac0-11ea-9c2c-40f5ddf3180c.png)

When asked to select helpers choose `Puppeteer` but in other cases take the default (i.e. hit `Enter`).
![1](https://user-images.githubusercontent.com/34328907/82856381-8dd34780-9f2d-11ea-9c47-7c9fe7a0fd55.png)

3. The above initialization of codeceptjs will create some files:
- `codecept.conf.js` : main configuration file
- `_test.js`
- `jsconfig.json`
- `steps.d.ts`
- `steps_file.js`
- `output`: a directory that will contain screenshot of failed tests

  We only need `condecept.conf.js` as it is the main configuration file. The rest of the files are not needed so you can delete them.

4. We can enable Gherkin for the current project by running:

    `npx codeceptjs gherkin:init`

    It will add a gherkin section to the  `codecept.conf.js` file and create directories for features and step definitions.

5. Now edit `codecept.conf.js` file according to your testing infrastructure so it looks similar to:

    ```js
    exports.config = {
      output: './output', // screenshot directory and contains screenshot of failed tests
      helpers: {
        Puppeteer: {
          url: 'http://localhost:3000', // host url
          show: true,
          windowSize: '1200x900'
        }
      },
      gherkin: {
        features: './features/*.feature',   // feature files location
        steps: ['./step_definitions/steps.js']  // step definitions location
      },
      plugins: {
        screenshotOnFail: { // if true take screenshot of failed scenarios
          enabled: true
        },
        retryFailedStep: { // if true rerun failed tests
          enabled: true
        }
      },
      name: 'react-hooks' // name of the application folder
    }
    ```
    <strong>Note</strong>: React applications by default run on port `3000`. So, if you cloned the application from `Requirements` section don't forget to include the port in `url` section of `Puppeteer` object.

6. After you create a feature file and write some scenarios, to generate gherkin snippets run:

    `npx codeceptjs gherkin:snippets`


## Writing Tests with CodeceptJS
1. Let's create a basic test scenario to add a user

    File: `features/basic.feature`

    ```gherkin
    Feature: add user
      As a user
      I want to be able to create other users
      So that different people can have individual data

      Scenario: signup a user
        Given the user has browsed to the homepage
        When the user adds user with name "Hari Bhandari" and username "hari" using the webUI
        Then user with name "Hari Bhandari" and username "hari" should be listed on users table
    ```

2. After you wrote some scenarios, to generate gherkin snippets run:

    `npx codeceptjs gherkin:snippets`

    Now edit the generated step definitions so that it looks like:

    File: `step_definitions/steps.js`

    ```js
    const { I } = inject();

    Given('the user has browsed to the homepage', () => I.amOnPage('/'));

    When('the user adds user with name {string} and username {string} using the webUI', (name, username) => {
        I.waitForVisible("//input[@name='name']");
        I.fillField("name", name)
        I.fillField("username", username)
        I.click("//button[contains(text(),'Add new user')]")
    });

    Then('user with name {string} and username {string} should be listed on users table', (name, username) => {
        I.see(name);
        I.see(username);
    });
    ```
    In CodeceptJS tests are written as a sequence of actions performed by an actor. So, the `I` object is an actor, an abstraction for a testing user. The `I` is also a proxy object for the currently enabled Helper(Puppeteer).

    So basically in the above step definitions, `I` browse to the homepage(http://localhost:3000), wait until the `name` input field is visible, fill the fields, click on the `Add new user` button and check if the user I added is listed on the `View users` table.

3. To run the test and see step-by step output use --steps option:

    `npx codeceptjs run --steps`

    To see not only the business steps but the actual performed steps use the --debug flag:

    `npx codeceptjs run --debug`

    By using the `debug` flag you can see the execution of step definitions and it is very useful for debugging purposes.

## Page object
A page object is basically a wrapper around an HTML page, or a fragment of the page that provides an access to the state of the underlying page/fragment. A page object provides a separation between the test code and the locators and makes our code more DRY.

If an application has different pages (login, admin, etc.) you should use a page object. Even though our example app doesn't have different pages we are going to create a page object.

To get more ideas about page objects and page objects in CodeceptJS check the following links:

- https://github.com/SeleniumHQ/selenium/wiki/PageObjects
- https://codecept.io/pageobjects/


CodeceptJS can generate a sample template for a page object with the command:

`npx codeceptjs gpo`

![3](https://user-images.githubusercontent.com/34328907/82879880-511f4480-9f5d-11ea-9ddf-0b29067d7b3e.png)

In the above screenshot, I am creating a page object with the name `dashboardPage.js`

Now, include the page object section in your config file. `codecept.conf.js` should now look similar to:
```
exports.config = {
  .....
  include: {
    Page: './pages/dashboardPage.js'  // page object location
  },
  .....
}
```

Edit `pages/dashboardPage.js` so that it looks like:

```js
const { I } = inject();

module.exports = {
  elements: {
    addNewUserButton: '//button[contains(text(),"Add new user")]',
    name: String('name'),
    username: String('username')
  },
  addUser(name, username) {
    I.waitForVisible(this.elements.addNewUserButton);
    I.fillField(this.elements.name, name)
    I.fillField(this.elements.username, username)
    I.click(this.elements.addNewUserButton)
  }
}
```

CodeceptJS provides flexible strategies for locating elements. Here, I have used `xpath` for `Add new user` button and semantic locator(name) for `name` and `username`.

Edit the `When` step in `step_definitions/steps.js` to include the pageObject's function

File:  `step_definitions/steps.js`

```js
....
const dashboard = require('../pages/dashboardPage');
....

When('the user adds user with name {string} and username {string} using the webUI', (name, username) => {
    dashboard.addUser(name, username)
});
...
```

Now, run your test again with `npx codeceptjs run --steps`

In this way we have set up BDD end-to-end testing using CodeceptJS. Happy Testing.
