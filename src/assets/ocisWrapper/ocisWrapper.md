---
title: Automated Black-Box Tests for System Settings of a Microservice Application
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://www.linkedin.com/in/artur-neumann/
createdAt: May 22, 2023
tags: go, API, testing, microservice
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/assets/ocisWrapper/banner.png
---
oCIS is the new generation open source file-sync and sharing platform, built by [ownCloud GmbH](https://www.owncloud.com), who also created the ownCloud 10 server based on the LAMP stack. The team of [JankariTech](https://www.jankaritech.com) is part of that development and mainly writes and maintains the automated tests.

## The Challenge 🚀

Because a lot of APIs of oCIS still have to be compatible with ownCloud 10, we have used the existing API tests and (after some adjustments) ran them on oCIS to ensure backward compatibility. I have written about that process in [BDD on Software Rewrite](https://blog.jankaritech.com/#/blog/Behaviour%20Driven%20Development/BDD%20on%20Software%20Rewrite).

This worked well for a lot of test cases, and we could quickly reach good coverage. But there were some cases where the old tests could not be reused. One of those cases is specific system-wide settings. In ownCloud 10 those settings are often set by the UI, an API call, or the designated CLI tool. Also, the changes can be done during runtime and are immediately effective. This is great for an API test: change the setting => check the expected behaviour! Easy!

Because of the different architecture of oCIS, system-wide settings are set through YML files or [environment variables](https://doc.owncloud.com/ocis/next/deployment/services/env-var-note.html). This is great if you run the service in a container environment, but it makes automated testing harder. Logically, the settings are only read once during the start of the service and for any change to take effect, the service needs to be restarted. How to do that as an external black-box API test?
Not to test those settings or to rely only on manual tests was never an option.

## First Iteration 😵‍💫

We first started by creating different pipelines in CI that start oCIS with defined settings and ran specific tests against that instance. That gave quick results but soon became confusing because every combination of settings needs its own CI pipeline and a designated set of tests. Additionally, that system makes it hard for developers to run the tests in their environments.

## Second Iteration 🥳

The next iteration was to write a small wrapper for the server (of course, it's written in Go, the same as oCIS).

![Whiteboard](/src/assets/ocisWrapper/whiteboard.jpg)

This wrapper starts the oCIS server, monitors its state, and provides its own API that accepts lists of settings.
Whenever a test wants to change a system-wide setting of oCIS it sends the wrapper the desired environment variables. The wrapper then exposes those to oCIS, restarts oCIS and reports back the success of the reconfiguration. The test can then go on and contact oCIS through its APIs and check if the new behavior is as expected.

![Diagram](/src/assets/ocisWrapper/diagram.png)

To decouple test-cases from each other, the wrapper also provides a special endpoint to completely reset oCIS to its default state.

All the kudos for this work goes to [Sajan Gurung](https://github.com/saw-jan)!

## Future Challenges 🧑‍💻

As we move forward with extending the test-coverage to new APIs and various different use-cases of oCIS we face further challenges. For example, oCIS can be connected with different storage providers (POSIX filesystem, EOS, S3, ownCloud 10). We are currently exploring what would be the best way and layer to test the functionality of the storage drivers. Unit tests, Contract tests, E2E API tests, something else?

I will keep posting about interesting developments in this test automation area.
