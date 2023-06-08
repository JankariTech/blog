---
title: Visual Regression Test with Nigthwatch VRT
authorName: Talank Baral
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110976-crop-col-800.jpg
authorLink: https://github.com/Talank
createdAt: Nov 3, 2021
tags: visual-testing, testing, javascript
banner: https://github.com/JankariTech/blog/blob/master/src/imgs/fallback_banner.png
seriesTitle: Visual Regression Testing (VRT)
episode: 2
---

Firstly, if you don't have any idea about what Visual Regression Test (VRT) is then I would recommend that you read my previous blog [Insight to Visual Regression Testing](https://dev.to/jankaritech/insight-to-visual-regression-testing-25mh). If you have already read that one or you already have some idea about "What is VRT?", then you are now ready to read this blog. The figure below (By Galaxy Weblinks) also gives a basic idea about VRT and the various tools that can be used for automated VRT.

![image](/src/assets/VisualRegressionTesting/images/VRT_Galaxy_Weblinks.png)

The definition of `nightwatch-vrt` is quite clear from its name. It is a VRT tool that works as an extension to [nightwatch.js](https://nightwatchjs.org/). Using `nightwatch-vrt` is pretty straightforward. You only need to invoke the `screenshotIdenticalToBaseline` function to make a comparison of the current screenshot with the respective baseline image. And if you look at the internal [logic](https://github.com/Talank/nightwatch-vrt/blob/master/assertions/screenshotIdenticalToBaseline.js) of this function then you will find that all it does is wait for an element to be present, then capture the screenshot of that element, compare it with the baseline, and finally return the comparison result. And if you look further into the image comparison logic then you will notice that `nightwatch-vrt` actually uses [JIMP](https://www.npmjs.com/package/jimp) (JavaScript Image Manipulation Program) which is built with Javascript with no native dependencies.

## Configuration
As I already said that `nightwatch-vrt` is an extension to the `nightwatch.js`, you first need to setup nightwatch.js. And if you don't know how to setup `nightwatch.js` then you can refer to one of my previous blogs [Setup Nightwatch and run your first test
](https://dev.to/jankaritech/setup-nightwatch-and-run-your-first-test-o7o). Next, add nightwatch-vrt in the devDependencies of your project. You can do it using the following command using yarn.
```
yarn add --dev nightwatch-vrt
```
Now, you need to add/edit the `custom_commands_path` and `custom_assertions_path` in your nightwatch configuration file as follows.
```js
custom_commands_path: [
    'node_modules/nightwatch-vrt/commands'
],
custom_assertions_path: [
    'node_modules/nightwatch-vrt/assertions'
]
```
In addition to the above-mentioned setup, you also need to add `visual_regression_settings` to the nightwatch configuration file's `globals` section as follows.
```js
globals: {
    visual_regression_settings: {
        generate_screenshot_path: generateScreenshotFilePath,
        latest_screenshots_path: 'tests/vrt/latest',
        baseline_screenshots_path: 'tests/vrt/baseline',
        diff_screenshots_path: 'tests/vrt/diff',
        threshold: 0.02,
        prompt: false,
        always_save_diff_screenshot: false
    }
},
```

And you also need to define the function that you specified in `generate_screenshot_path`. For example, in the above configuration, I have used the function `generateScreenshotFilePath` which I defined as follows.
```js
function generateScreenshotFilePath(nightwatchClient, basePath, imagePath) {
    return path.join(process.cwd(), basePath, imagePath)
}
```
We pass a function to `generate_screenshot_path` because the VRT screenshot path generator option accepts a function that returns a string containing the full path based on the test properties. We can not provide a constant string instead of the path generator function because not all tests use the same screenshot.

So the above configuration stores the baseline, latest, and diff images in the subfolders `tests/vrt/baseline`, `tests/vrt/latest`, and `tests/vrt/diff` respectively. If we provide a common path for baseline, diff and latest images then we should provide some optional configurations such as suffix to distinguish the images. These optional configurations are `baseline_suffix`, `diff_suffix`, and `latest_suffix`.

The `threshold` option in the `visual_regression_settings` specifies how sensitive the image comparison will be. To understand what all other options mean, you can check out the README file of [nightwatch-vrt github repository](https://github.com/Crunch-io/nightwatch-vrt)

## Write Tests

As usual, we start writing our test by making the feature file at first, and the visual check can be done in the step definitions. For the demonstration, I am referencing [this project](https://github.com/Talank/vrt-demo) which is a simple to-do app in react.

One of the test scenarios in this app could be as follows:

```gherkin
Scenario: toDo task add test
    Given the user has opened the home page
    When the user adds a new task "New Task"
    Then the task "New Task" should appear in the toDo list
    And the toDo form should match the default baseline
```

Here, the step `And the toDo form should match the default baseline`, will perform the visual regression test, and so in the demonstration section, I will be done. And I will focus only on that step.

The implementation of this step can look like the following:

```js
const { Then } = require('cucumber');
const { client } = require('nightwatch-api');

const toDoFormSelector = "#to-do-form"

const assertScreenShot = async function(imgName) {
    await client.waitForElementVisible(toDoFormSelector)
    await client.assert.screenshotIdenticalToBaseline(
        toDoFormSelector,
        imgName,
        `Matched the ${imgName} of toDo page`
    )
}

Then(/^the toDo form should match the default baseline$/, function () {
    return assertScreenShot("todo-form")
});
```

The `assertScreenShot` function uses the command `screenshotIdenticalToBaseline()` that is defined in the `nightwatch-vrt` library. `screenshotIdenticalToBaseline` could take up to 4 parameters where only the first parameter is mandatory:
- The first one is a String which is the selector of the element that should be tested visually.
- The second one is also a String which is the name of the image that is used for the name of the baseline, diff, or latest image. The default name is the name of the selector provided as the first parameter.
- The third one is NightwatchVRToptions settings that override the defaults and `visual_regression_settings` of the nightwatch configuration file.
- And the fourth parameter is a String which is the message that is displayed in the console upon the successful completion of the test.

When the VRT is executed for the first time, the baseline images do not exist and so they are created. When the test finds the baseline image with the appropriate name, it will compare the screenshot of the element with the respective image in the baseline. So, if you are running the test for the first time, it will execute twice, once to create the baseline images and again to compare the current state with the baseline. Next time when you run the test, it will be executed only once as the baseline is created only once. However, if there are some changes in the UI and the test fails, then you need to change the baseline image as well.

There are mainly 2 ways to update your baseline image. The easiest way to do this is to set the configuration `always_save_diff_screenshot:` to `true` in the nightwatch configuration file's `globals` section. This will update all the failing screenshots at once. If you need to update only one screenshot then the appropriate method to update it is to delete the baseline screenshot and run the tests again which will take the updated screenshot and save it as the new baseline.

## Execute the test

You do not need any special commands to execute the VRT. You can execute the scenario containing the feature file like a normal nightwatch test and that's it. If you need help with setting up nightwatch and running the tests, you can read [this blog](https://dev.to/jankaritech/setup-nightwatch-and-run-your-first-test-o7o) of mine.
