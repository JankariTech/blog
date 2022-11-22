---
title: Different Ways to Automate the Browser
authorName: Sawjan Gurung
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110923-crop-col-800.jpg
authorLink: https://github.com/saw-jan
createdAt: 22/11/2022
tags: browser automation, testing, playwright, nightwatch, selenium, webdriver, cypress
banner: https://some.link.jpg
---

**TLDR**: _W3C WebDriver_ and _Chrome DevTools Protocol_ are the two main protocols that are used to automate the browser and most of the browser automation tools are based on one of them.

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

1. W3C WebDriver
2. Chrome DevTools Protocol
3. Native Scripting (Embedded JavaScript)

### W3C WebDriver

WebDriver is a standard remote control interface formulated by W3C for controlling the browsers. It provides platform and language neutral interface and supports almost all the major browsers such as Chrome, Firefox, Safari, Edge, Opera, etc. Communication with the browser is done through the JSON Wire protocol, a RESTful web service using JSON over HTTP. The server side implementation of this protocol is known as the webdriver (aka browser driver); examples are chromedriver, geckodriver, etc. And the client side implementation can be done in any preferred languages and patterns. Some examples of webdriver client are selenium, nightwatch, webdriverio, etc.
