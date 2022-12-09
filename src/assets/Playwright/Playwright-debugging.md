---
title: Debugging and Error Tracing in Playwright
authorName: Swikriti Tripathi
authorAvatar: https://avatars.githubusercontent.com/u/41103328?v=4
authorLink: https://github.com/SwikritiT
createdAt: Dec 5, 2022
tags: playwright, testing, e2e, javascript , debugging
banner: https://blog.jankaritech.com/src/assets/Playwright/images/banner.png
seriesTitle: E2E Testing using BDD with Playwright
episode: 2
---
How many times has it happened that you wrote blocks of code thinking they work but the reality was otherwise? I think it's safe to assume that this has happened quite often. Sometimes it might be easy to find the mistake but it's not always the case, so in this blog, I'm going to try to explain some of the debugging methods in Playwright that we can incorporate into our project to make our life a little bit easier. This might be the right time to mention that you might want to read [part one of the series](https://blog.jankaritech.com/#/blog/Behavior%20Driven%20Development%20(BDD)%20using%20Playwright) as we are going to use the same code here.
 

## Headed mode
The first method would be to run the tests in headed mode. Playwright by default runs in headless mode. Use `headless:false` while launching the browser. Additionally, you can also use the `slowMo` option to slow down the test execution process.
 
```js
await chromium.launch({ headless: false, slowMo: 100 });
```
 
 
## Playwright Inspector
Playwright comes with a default GUI tool that we can use to inspect our scripts. Through this tool, you'll be able to step-over each script and evaluate them in real-time. There are a few ways through which we can open Playwright inspector.
 
### 1. PWDEBUG
Playwright provides us with an environment variable that'll configure it in debugging mode and opens the inspector. Set the `PWDEBUG` variable to `1` or `console`.
 
In my case, I'm running the e2e test in debug mode by setting `PWDEBUG=1` .
```bash
PWDEBUG=1 npm run test:e2e tests/acceptance/features/todo.feature
```
 
This will open up an inspector like so
 
![Playwright Inspector](/src/assets/Playwright/images/playwright-inspector.png "Playwright Inspector")
 
As you can see this gives me the test scripts, now I can either step over each script or run everything at once
 
 
**step over each script**
![Playwright Inspector](/src/assets/Playwright/images/step-over.png "Step over script")
 
**run all at once**
 
![Playwright Inspector](/src/assets/Playwright/images/run-all.png "run-all script")
 
With each step-over, the inspector will step through each line of the test highlighting the selector as you go. You can also see the logs that display each action that the tests perform.
 
![Playwright Inspector](/src/assets/Playwright/images/trace_viewer2.png "highlight selector and logs")
 
Additionally, you'll also be able to access the browser developers' tools.
 
 
### 2. page.pause()
The next method to launch the inspector is to use `page.pause()` in the script.
 
```js
When('the user adds {string} to the todo list using the webUI',async function (item) {
   // fill the item that was input from the feature file, to the inputText field in the UI
   await page.fill(todoInput , item)
   // pauses the test execution and launches Playwright inspector
   await page.pause()
   // click the button
   await page.click(todoButton)
})
 
```
 
This will pause the execution of the test and launch Playwright inspector right before clicking the button.
 
![Playwright Inspector](/src/assets/Playwright/images/pause.png "page.pause")
 
Now, we can perform similar operations as explained above.
 
 
## Trace Viewer
Trace viewer is another GUI tool to explore the recorded Playwright traces of the tests after the tests have been executed. This is especially essential while running the tests in the Continuous Integration (CI) environment.
 
Let's see how we can set it up in our end-to-end tests. In the `cucumber.conf.js` file inside `before hook` we can add the following configuration
 
```js
Before(async function () {
   global.context = await global.browser.newContext();
   // start tracing the test execution by enabling the screenshots and snapshots
   await global.context.tracing.start({ screenshots: true, snapshots: true });
   global.page = await global.context.newPage();
});
```
 
This will start the tracing of the tests, to know about more options that can be configured while starting the trace you can go through this [documentation](https://playwright.dev/docs/api/class-tracing#tracing-start)
 
Now, in the `after hook` we can add the following code to stop tracing and store it in a certain specified path.
 
```js
After(async function () {
   await global.page.close();
   // stop tracing and store it in the given path
   await global.context.tracing.stop({ path: 'tests/acceptance/report/trace.zip' });
   await global.context.close();
});
 
```
 
Now, if we run the tests we should get a trace.
 
```bash
npm run test:e2e tests/acceptance/features/todo.feature
```
 
This should create the folder `report` inside of `tests/acceptance` and you should see a file called `trace.zip`.
 
If you extract the file then inside `trace/resources` you should be able to see the screenshots of the UI through various steps in test execution.
 
But the fun part is to view the trace which we can do by running the following command from the root of the project.
 
```bash
npx playwright show-trace tests/acceptance/report/trace.zip
```
 
This should open up the Playwright trace viewer GUI for you like this
 
![Playwright Trace Viewer](/src/assets/Playwright/images/traceviewerGui.png "Playwright Trace Viewer")
 
As you can see in the picture we can access a lot of functionalities through the trace viewer like Actions, Metadata, Console, Network, and so on. These will come in handy if we need to figure out or debug the test failure. If you want to know in detail about each of these functionalities you can go through this [documentation](https://playwright.dev/docs/trace-viewer)
 
 
These were the few ways in which we can debug and trace tests with tools provided by Playwright. I hope you found this helpful. In the next part of the series, we'll run the tests on CI and get traces for test failures.

