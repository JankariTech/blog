---
title: Setup Nightwatch and run your first test
authorName: Talank Baral
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110976-crop-col-800.jpg
authorLink: https://github.com/Talank
createdAt: Feb 18, 2020
tags: testing, javascript, nihtwatch, selenium
banner:
---

`Nightwatch.js` is an open-source automated testing framework that aims at providing complete E2E (end to end) solutions to automate testing with `Selenium Javascript` for web-based applications, browser applications, and websites. It is written in `Node.js` and uses the `W3C WebDriver API` (formerly Selenium WebDriver) for interacting with various browsers.

## Installation And Requirements
This guide is based on Ubuntu 18.04. Some commands will be different if you have another OS installed on your computer. Also, we will be following the BDD approach in this blog. So, if you want to learn more about BDD first then please read our blog on [Demonstrating BDD (Behavior-driven development) in Go](https://dev.to/jankaritech/demonstrating-bdd-behavior-driven-development-in-go-1eci). Before getting started with Nightwatch we need to have the following installed on our computer.

### 1. Node.js:
- To install Node.js:
```
sudo apt install nodejs
```
- To verify the successful installation of nodejs and to check its version use the following command
```
nodejs -v
```

### 2. Node Package Manager(npm):
The nodejs package contains both the node and npm binaries. So, npm is also installed when you run the command to install nodejs. However, to verify that npm was also successfully installed, you can check the version of npm by running the command
```
npm -v
```

### 3. Java:
We need java to run the Selenium server which automates our browser. If your machine does not have java installed then install it using the following command
```
sudo apt install default-jdk
```
If you want to learn more about how to install Java, then you can follow this [link](https://linuxize.com/post/install-java-on-ubuntu-18-04/).

### 4.Selenium Server:
[Download](https://selenium.dev/downloads/) the latest stable version of the Selenium standalone server JAR file.

### 5.Chrome Driver:
Lastly, [download](https://chromedriver.chromium.org/) the `latest stable version` of `Chrome Driver`.

Once you have downloaded `Chrome Driver`, you need to unzip it by running the following command:
```
unzip chromedriver_linux64.zip
```
Once you have unzipped it, you need to move the chromedriver(shared library) and place it inside the <u>same folder</u> where you have placed the Selenium standalone server file.

## Setting up Nightwatch.js
Make a configuration file and name it `nightwatch.conf.js` inside the root directory of your project and inside the configuration file add the following content.
```js
module.exports = {
    src_folders: ['test'],
    test_settings: {
        default: {
            selenium_host: '127.0.0.1',
            launch_url: 'http://localhost:3000',
            globals: {},
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                chromeOptions: {
                    args: ['disable-gpu'],
                    w3c: false
                }
            }
        }
    }
}
```
You can also make a `nightwatch.json` configuration file as an alternative to the nightwatch.conf.js file. Please refer to the [nightwatch website](https://nightwatchjs.org/gettingstarted/configuration/#nightwatch-json) to learn how to write the nightwatch.json configuration file.

You need to define `src_folders` and `launch_url` inside the nightwatch.conf.js where `src_folders` is used to define the folder in which you have written your tests and `launch_url` is used to define the index URL of your project which is used as the main URL to load and run your tests.

`src_folders` and `launch_url` will be different for different projects.
```
src_folders: YOUR_SOURCE_FOLDER_FOR_TEST_FILES
launch_url: URL_OF_YOUR_WEBSITE
```
Run this command to install nightwatch and cucumber into your project dependencies which allow us to run automated tests using the gherkin language.
```
yarn add --dev nightwatch-api nightwatch cucumber
```
Or,
```
npm add --dev nightwatch-api nightwatch cucumber
```
Now the following information should be added inside package.json in devDependencies. But do remember that these versions may also vary depending upon the releases of these dependencies.
```
 "devDependencies": {
    "cucumber": "^6.0.5",
    "nightwatch": "^1.3.3",
    "nightwatch-api": "^3.0.1"
 }
 ```
You can use npm or yarn, whichever you prefer. However, if you want to use yarn but do not have it already installed then, you can install it by downloading the `.deb` file from the [yarn releases](https://github.com/yarnpkg/yarn/releases) and run the following command:
 ```
 sudo dpkg -i yarn[VERSION].deb
 ```
The .deb file might not be compatible with your machine. It only works for debian based linux distros.

For the rest of the setup process, I am using `npm`.

Now, create `index.js` inside `[root_dir]/test/acceptance` and add
```
const { setDefaultTimeout, After, Before } = require('cucumber')
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api')

setDefaultTimeout(60000)

Before(async () => {
    await startWebDriver();
    await createSession();
})

After(async () => {
    await closeSession();
    await stopWebDriver();
})
```
Here, we are using before() and after() hooks which will allow us to execute the code inside them before and after each test scenario.

Before starting the Selenium server you need to change your directory to where the selenium and chromedriver files are. After doing that you can now start the Selenium server with the command:
```
java -jar selenium-server-standalone-3.141.59.jar -port 4444
```

## Testing your Project
Create feature files inside `[root_dir]/test/acceptance/features` with an extension `.feature` for each feature of your project. Follow the [Gherkin reference](https://cucumber.io/docs/gherkin/reference/) to write your feature file.

We do not need to use gherkin language but I am using it because this is the same language that user and domain experts use while they talk about the domain. Also, it is easy to understand for both technical and non-technical personnel involved in the project.

A feature file written using gherkin language looks like this.

```
Feature: search using transliterated Latin characters
  As a user
  I want to find the literature by specifying Latin (English-style) script equivalent to the Nepali
  So I can find the literature without needing to use a Nepali keyboard

  Background:
    Given the user has browsed to the homepage

  Scenario: user should be able to search in English characters using transliterated text
    When the user enters the English characters "munaa madan"
    And the user selects the transliterated text
    And the user searches for the literature
    Then the search result should be displayed
```

Next, create a javascript file for the step-definitions inside `[root_dir]/test/acceptance/stepDefinitions` for each feature. For each step in the scenario of your feature file, a matching step definition is executed while running the test. Step definitions for the above search feature will look something like this.

```
const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');
const searchField = "//input[contains(@class, 'SearchBox')]";
const searchButton = "//button[contains(@class,'SearchBox__Button')]";
const searchResultFoundContainer = '.sk-hits';
const searchResultNotFoundContainer = '.sk-no-hits';

const userEntersTheEnglishOrNepaliCharacters = (searchTerm) => client.useXpath()
	.waitForElementVisible(searchField)
	.setValue(searchField, searchTerm)
	.useCss();

const userSearchesForTheLiterature = () => client.useXpath()
	.click(searchButton)
	.useCss();

Given('the user has entered the English/Nepali characters {string}', userEntersTheEnglishOrNepaliCharacters);
When('the user enters the English/Nepali characters {string}', userEntersTheEnglishOrNepaliCharacters);

Given('the user has searched for the literature', userSearchesForTheLiterature);
When('the user searches for the literature', userSearchesForTheLiterature);

Then('the search result should be displayed', () => client.waitForElementVisible(searchResultFoundContainer)
	.waitForElementNotPresent(searchResultNotFoundContainer));

Then('the search result should not be displayed', () => client.waitForElementVisible(searchResultNotFoundContainer)
	.waitForElementNotPresent(searchResultFoundContainer));
```

Finally, run the test from the root directory using the command:
```
cucumber-js --require test/acceptance/index.js --require test/acceptance/stepDefinitions test/acceptance/features/[YOUR_FEATURE_FILE].feature
```

Does the above command look long? I am sorry, but you have to use that command every time you run the test. But only the name of `your feature file` is different, while running different tests, the rest is all the same. So, let's assign an easy short name for the rest and put it inside the scripts section of `package.json`. I called it `test-e2e` and inside the scripts of `package.json`, I added
```
"test-e2e" : "cucumber-js --require test/acceptance/index.js --require test/acceptance/stepDefinitions"
```
Now, the above long command is shortened to
```
npm run test-e2e test/acceptance/features/[YOUR_FEATURE_FILE].feature
```
That's it. Now, you are ready to run test suites for your project. You can refer to [Nightwatch](https://nightwatchjs.org/) to read more about Nightwatch and its commands.

Hope you enjoy testing.
Thank You!
