---
title: CodeceptJs - Setup & BDD
authorName: Hari Bhandari
authorAvatar: https://avatars.githubusercontent.com/u/34328907?v=4
authorLink: https://github.com/HariBhandari07
createdAt: June 2, 2020
tags: k6, load, performance, testing
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
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
