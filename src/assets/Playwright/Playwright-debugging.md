---
title: Playwright debugging and error tracing
authorName: Swikriti Tripathi
authorAvatar: https://avatars.githubusercontent.com/u/41103328?v=4
authorLink: https://github.com/SwikritiT
createdAt: Feb 7, 2022
tags: playwright, testing, e2e, javascript , debugging
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--M3gPfKHX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swetkwdnkxp39lkevjea.png
seriesTitle: E2E Testing using BBD with Playwright
episode: 2
---

How many times has it happened, that you wrote blocks of code thinking they work but the reality was otherwise? I think it's safe to assume that this has happened quite a lot. Sometimes it might be easy to find the mistake but it's not always the case, so in this blog I'm going to try to explain some of the debugging methods in playwright that we can incorporate in our project to make our life a little bit easier. This might be the right time to mention that you might want to read part one of the series <link here> as we are going to use the same code here.


# Headed mode
The first method would be to run the tests in headed mode. Playwright by default runs in headless mode. Use `headless:false` while launching the browser. Additionally you can also use `slowMo` option to slow down the test execution process.

```js
await chromium.launch({ headless: false, slowMo: 100 }); // or firefox, webkit
```


# Playwright Inspector
Playwright comes with a default GUI tool that we can use to inspect our scripts. Through this tool you'll be able to stepover each script and evaluate them in real time. There are few ways through which we can open the playwright inspector.

## 1. PWDEBUG
Playwright provides us with an environment variable that'll configure it in debugging mode and opens the inspector. Set `PWDEBUG` variable to `1` or `console`.

In my case I'm running the e2e test in debug mode by setting `PWDEBUG=1` .
```bash
PWDEBUG=1 npm run test:e2e tests/acceptance/features/todo.feature
```

This will open up a inspector like so 

![Playwright Inspector](/src/assets/Playwright/images/playwright-instector.png "Playwright Instector")

As you can see this gives me the test scripts, now I can either step over each script or run everything at once 


**step over each script**
 
![Playwright Inspector](/src/assets/Playwright/images/step-over.png "Step over script")

**run all at once**

![Playwright Inspector](/src/assets/Playwright/images/run-all.png "run-all script")

