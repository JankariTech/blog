---
title: Different Approaches (Protocols) to Automate the Browser
authorName: Sawjan Gurung
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110923-crop-col-800.jpg
authorLink: https://github.com/saw-jan
createdAt: 22/11/2022
tags: browser automation, testing, playwright, selenium, webdriver, cypress, protocols, chrome devtools
banner: https://some.link.jpg
---

**TLDR**: _WebDriver_ and _Chrome DevTools Protocol_ are the two main protocols that are used to automate the browser and most of the browser automation tools are based on one of them. WebDriver BiDi is said to be the future of cross-browser automation.

> 💡 Your browser is an automation tool in itself.

Have you ever wondered how browser automation works behind the scene? I have, and I am still trying to learn more about each key players in the browser automation process.

In this blogpost, I try to explain the different protocols we can use to automate the browser. But first let's do a quick recall of what we know about the browser automation.

**What is Browser automation?**

_Simply put, **Browser automation** is the process of automating the browser to perform repetitive and tedious tasks._

**Why Browser automation?**

- **Testing**: _Browser automation is a great way to test your webapps or websites before you deploy it to production. It can be used for various testing such as **e2e testing**, **performance testing**, etc._
- **Data Extraction**: _Automated web scraping is a great and effecient way to extract data from websites._

## Automating the browser

The simplest way to automate any browser is to use the available automation libraries such as selenium, playwright, cypress, and many more. However, today we are not going to learn about those automation tools. Instead, we are here to learn about the different approaches we can use to directly control the browser without the use of any automation libraries.

In order to automate the browser, there are mainly three protocols or let's say approaches in practice.

1. WebDriver (Selenium WebDriver)
2. Chrome DevTools Protocol
3. Native Scripting (Embedded JavaScript)

### WebDriver

WebDriver is a remote control interface for controlling the browsers, developed by Selenium HQ and later standarized by W3C. It provides platform and language neutral interface and supports almost all the major browsers such as Chrome, Firefox, Safari, Edge, Opera, etc.

Communication with the browser is done through the JSON Wire protocol, a RESTful web service using JSON over HTTP. The server side implementation of this protocol is known as the webdriver (aka browser driver); examples are chromedriver, geckodriver, etc. And the client side implementation can be done in any preferred languages and patterns. Some examples of webdriver client are selenium, nightwatch, webdriverio, etc.

![WebDriver Protocol](/src/assets/BrowserAutomationProtocol/images/webdriver_ill.jpg)

### Chrome DevTools Protocol

The Chrome DevTools Protocol (CDP) is a debugging protocol used by Chromium based browsers such as Chrome, Edge, Opera, etc. Although it is not designed for testing purpose, it is a great tool for automating the browser and some automation tools such as puppeteer and playwright have proven that.

There is no middleman like webdriver server (browser driver) between client and the browser in this approach. Instead, the browser is directly controlled by the client using CDP. The communication with the browser is done through the socket connection and hence also enables the bi-directional communcation.

![Chrome DevTools Protocol](/src/assets/BrowserAutomationProtocol/images/cdp_ill.jpg)

### Native Scripting

This approach is different from above two protocols. In the above two approaches, the automation script (client) and the browser are separated and run in different processes. In contrast, in this approach, the automation script is embedded in the browser itself and hence the browser is directly controlled by the injected script.

This comes with some trade-offs such as unable to support multiple browser tabs and more than one browser cannot be controlled at a time. But it has its own uniqueness and strengths.

Automation tools like Cypress and TestCafe use this pattern.

![Native Scripting Approach](/src/assets/BrowserAutomationProtocol/images/native_ill.jpg)
