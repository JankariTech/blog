---
title: E2E Testing using TestCafe
authorName: Sagar Gurung
authorAvatar: https://avatars.githubusercontent.com/u/46086950?v=4
authorLink: https://github.com/SagarGi
createdAt: Nov 30, 2022
tags: test-cafe, testing, webUI-testing, javascript, automation
banner: https://raw.githubusercontent.com/DevExpress/testcafe-gh-page-assets/master/src/images/testcafe-ogp-icon.png
---
## Background

Are you one of those who is still struggling to write your first End-to-End (E2E) test for your web application?

So what may be the reasons that you are struggling?

- difficult to set up a test framework with your web application?
- difficult to learn?
- lengthy implementation of code?

If the above points are exactly of your concern then `test-cafe` can be your go-to test automation framework for testing your web application.

In this blog post, we will look into the concept of `test-cafe`, a modern solution to sort out E2E testing for your web application. At the end of this blog hopefully, you will be able to set up `test-cafe` for your web application and run your first end-to-end test.

## Brief about TestCafe
Let's start this blog with a brief understanding of `test-cafe`. It is an open-source test automation framework or tool built with Node Js. This framework basically supports two programming languages i.e., Javascript and Typescript. So you are required to have at least the basics of Javascript to use this tool. [DevExpress](https://www.devexpress.com/) is in charge of managing TestCafe, which is made available under an open-source MIT license.

## Why to use TestCafe?
Before moving to installation and set-up, let's understand some points why to use `test-cafe`.

- It is very easy to set up
- No dependencies (with other libraries)
- Writing tests is easy and with less code
- Cross-browser testing is made easy
- Free and Open Source

*Note: I will be doing the whole setup with Ubuntu 20.04.3 LTS, but it will be similar for other OS too*

## Prerequisites

At first, we need `Node JS` installed into our system. You can download `Node JS` version 12 or above. [Download Node JS](https://nodejs.org/en/download/).

## Installation and setup
Now let's move into installing `test-cafe` which is really easy. Follow the following steps:

- Create a folder `E2EWithTestCafe`.
- Open the folder you created with a code editor. In my case I am using `Visual Studio Code`.
- Create a `package.json` file with command `npm init` through command line. (using terminal)
- Now use `npm install testcafe` command to install TestCafe.

After this, your `package.json` file should contain `dependencies` as

```json
// package.json file

"dependencies": {
"testcafe": "^2.1.0"
}
```

## What to test?

For this blog, we will be writing an E2E test for this `https://devexpress.github.io/testcafe/example` website (provided by devexpress). You can go to this website and check what it looks like. We will automate a simple form submit scenario using `test-cafe`

##  Writing Test

At first inside `E2EWithTestCafe` project, make your file structure as

```
📦tests
┗ 📂e2e
  ┣ 📂fixtures
    ┗ 📜firste2etest.js

```
And then at the root level of your project which is `E2EWithTestCafe` create a file `.testcaferc.json`. This file includes all the configuration required to test the application.

The configuration should look like this:
```json
// testcaferc.json

{
  "browsers": "chrome", // means your test will be automated in chrome browser
  "baseUrl": "https://devexpress.github.io/testcafe/example/", // URL for your web application to be tested or automated
  "src": "tests/e2e/fixtures/firste2etest.js" // path to your test code to execute
}

```

I assume that you have checked `https://devexpress.github.io/testcafe/example` website. On that website, if we fill up the username and submit the form, it redirects us to another page saying thank you. So this will be our simple test case, and we will be automating it with `test-cafe`
I have implemented the test code And it looks like this.

```js
// firste2etest.js

import { Selector, t } from "testcafe";
fixture`My First E2E test with test-cafe`.page;

const inputNameFieldSelector = Selector("#developer-name");
const submitButtonSelector = Selector("#submit-button");
const headingSelector = Selector("#article-header");

test("Submitting a form should browse to thank you page", async (t) => {
  const yourName = "JankariTech";
  // fills name input field
  await t.typeText(inputNameFieldSelector, yourName);
  // clicks the submit button
  await t.click(submitButtonSelector);

  // check for the thankyou page after form has been submitted with name
  const actualThankyouMessage = await headingSelector.innerText;
  await t.expect("Thank you, " + yourName + "!").eql(actualThankyouMessage);
});


```

I will not be explaining the whole implementation, but I have put comments on each action in the code. And probably the code is easy to understand which is exactly what `test-cafe` has aimed for.

## Running Test

Huh, now finally the time has come to run our test script and see it magically running. To run our test, we need some adjustments in the `package.json` file. Put the test scripts as

```json
// package.json file

 "scripts": {
    "test": "testcafe"
  },

```

Now one final command needed to run our test i.e.

```bash
npm run test
```

With the above command being executed, you should see the browser (chrome) automating the actions that we have implemented. (Submitting a form with a name that redirects to Thank You page)

And your output in the console should look like this

```console
❯ npm run test

> e2ewithtestcafe@1.0.0 test
> testcafe

 Running tests in:
 - Chrome 105.0.0.0 / Ubuntu 20.04

 My First E2E test with test-cafe
 ✓ Submitting a form should browse to thank you page


 1 passed (8s)

```

## Conclusion

So far I have used `test-cafe`, it is definitely a go-to automation tool for modern web End-To-End testing.
You can use it on your own project quickly with ease and less code. Also, it has many more features to explore. You can start exploring [test-cafe](https://testcafe.io/) now.
