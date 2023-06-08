---
title: Insight to Visual Regression Testing
authorName: Talank Baral
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110976-crop-col-800.jpg
authorLink: https://github.com/Talank
createdAt: Nov 3, 2021
tags: vrt, testing, image-processing
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
seriesTitle: Visual Regression Testing (VRT)
episode: 1
---

"What you see is what you get" -Flip Wilson

Web UI is advancing every day, and so is test automation. But, there might be several bugs in your application's UI that automated functional testing often misses. Some of these are called visual errors. Visual errors do not mean logical faults in the software. These are the aesthetic flaws that cause interfaces to be displayed incorrectly and make the UX worse. Visual regression tests ensure that there isn't any unintended change in UI. For this, an initial screenshot (called baseline) of the application is captured then, in each successive test, the screenshot of the same component in the current state is compared with the baseline image. If any distinguished changes are encountered, then the test is marked as failed.

It is crucial to know that VRT intends to specify the deviations in appearance only, and failed VRT does not imply that the application is functionally incorrect. For instance, while testing for the responsiveness of a web page, even if automation tools like nightwatch.js can find all the components, it can not be ensured that all those components are aligned properly. So, in the aforementioned scenario, VRT fails even though the functional regression test passes.

## How does it work?
The primal concept behind VRT is a comparison between two images. Some visual testing tools do pixel to pixel comparison only, whereas some others are more innovative and make use of computer vision to automatically manage the baseline. However, the UI does not appear exactly the same in all displays and pixel-to-pixel comparison becomes flakier. So to avoid zero-tolerance, QA Engineers normally set the threshold to more than 0 differences. In most of the VRT tools such as `nightwatch-vrt`, the value of the threshold ranges from `0` to `1` where a smaller value means more sensitive comparison.

After comparing the latest state of the UI elements with the baseline image, if some difference is found by the VRT tool, a difference image is produced so that testers can easily see the difference after the test failure. For example, as shown in the image below, the change in color of the `Add` button is detected by `nightwatch-vrt`.

![image](/src/assets/VisualRegressionTesting/images/howVRTWorks.png)

## Cons of VRT
- By automating the VRT, there will be a rise in maintenance cost as we need to keep screenshots of the web interface updated with respect to different browsers, devices, operating systems, etc.
- Image comparison takes more time than normal assertions used in functional testing.
- Image comparison can lead to false-positive and unreliable results.

## Limitation of Automated VRT
CSS animations are very important artifacts for the enhancement of UX. No matter how minor it is, functional animations such as ripple effect in buttons, text animations, animation in loading sign, etc promote user engagements and make an application interactive. But VRT tools that are currently available ignore these animations by either freezing frames, disabling animations, or simply ignoring the CSS transitions.

## Tools
There are several free and commercially available tools for VRT. [Here](https://visualregressiontesting.com/tools.html), you can find a bigger list of these tools. In this blog, I am going to discuss only 3 tools (nightwatch-vrt, percy, and applitools)

### Nightwatch-vrt
Nightwatch-vrt is an open-source library to perform VRT. It is an extension to `nightwatch.js` with some additional custom commands that compare the screenshot of a DOM element identified by a selector with the baseline image. If there is no baseline image for a particular DOM element, it creates one and uses that for future assertions.

The working mechanism of nightwatch-vrt is quite straightforward. It uses JavaScript Image Manipulation Program [Jimp](https://www.npmjs.com/package/jimp), which is an image processing tool written in Javascript, to compare the current screenshot of a DOM element with the baseline image. The percentage difference in the two images is then compared with the threshold value to get the result of VRT.

To know more about nightwatch-vrt, you can refer to [their github repo](https://github.com/Crunch-io/nightwatch-vrt), or you can stay tuned for my next blog.

### Percy
Percy is a commercial tool that can be used for VRT and its working mechanism is pretty advanced compared to nightwatch-vrt. It has a screenshot stabilization technique by freezing animated GIFs on the first frame and disables CSS animation and transition styles. For automated visual testing, web animations are responsible for false-positive results in many cases. There are 3 other methods (Handling dynamic data, Third-party fonts, and ignoring 1px diffs) that Percy uses for stabilization of screenshots and you can read details about it in [this documentation](https://docs.percy.io/docs/freezing-dynamic-data). Another advantage of this tool is that it provides SDKs that can be integrated with UI tests in several languages and testing tools like cypress, puppeteer, etc.

### Applitools
Like Percy, Applitools is also a commercial platform that provides several functionalities for automated visual testing. Its visual testing library is called Applitools Eyes which can be implemented with different languages like Javascript, Java, PHP, etc. With its visual AI algorithm, `Applitools Eyes` tries to distinguish visual bugs that are only visible to human eyes. By using the `layout algorithm`, if testers specify certain regions on the page that contain `dynamic contents` like date and time, Applitools can check only for layout but not the actual contents. Similarly, if you have some elements in your UI that contain animated GIFs or CSS animations, you can specify those regions as layouts and Applitools will only check for the element to be visible, but ignores the animation.

To learn more about its visual AI algorithms, you can refer to [this documentation](https://applitools.com/applitools-ai-and-deep-learning/).

I hope you get some basic ideas about VRT, its pros, cons, and shortcomings. In my next blog, I will show you how to start implementing VRT using `nightwatch-vrt`. Until then, happy coding.
