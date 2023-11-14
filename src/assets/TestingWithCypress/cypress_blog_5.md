---
title: Trade-offs In Cypress
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: cypress, selenium, comparison, testing
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
seriesTitle: E2E Testing with Cypress
episode: 5
---

### Key differences with other testing frameworks

- Cypress does not use Selenium

- Cypress tests are only written in JavaScript

- Cypress is all in one


These architectural improvements unlock the ability to do TDD with full e2e tests. You can develop faster while driving the entire dev process with tests because: you can see your application; you still have access to the developer tools, and changes are reflected in real-time. The end result is that you will have developed more, your code will be better, and it will be completely tested. If you opt for parallelization and automated load balancing will further supercharge your test speeds.

But there are some serious downsides to these architectural changes.

> The following permanent and temporary trade-offs are well discussed in Cypress documentation. Please follow the official documentation for more information. I've just listed out the main point just for an overview.

### Permanent trade-offs

- Automation Restrictions:
    - Indexing the web
    - Spidering links
    - Performance testing
    - Scripting 3rd party sites

    There are other excellent tools that are optimized for doing each item listed above.

- Inside the browser:
    In case you missed it before - Cypress tests run inside the browser! It makes it a little harder to communicate with the back end - like your server or database. You will not be able to connect or import those server-side libraries or modules directly.

- It will never have multi-tabs support.

- You cannot use Cypress to drive two browsers at the same time.

- Same Origin:
    Each test is limited to only visiting domains that are determined to be of the same-origin.
    What is same-origin? Two URLs have the same origin if the protocol, port (if specified), and host are the same for both. Cypress automatically handles hosts of the same super-domain by injecting `document.domain` into `text/html` pages, so a host of the same super domain is considered fine.

### Temporary trade-offs
IMO, Cypress has a pretty responsive issues section on GitHub. Many issues that are being worked on are listed below:
- Lack of a `cy.hover()` command.
- There is no `cy.tab()` command.
- There is no native or mobile event support.
- Testing file uploads is application-specific.
- Testing file downloads is application-specific.
- Iframe support is somewhat limited but does work.


### Problems I faced with my project's tests
- Cypress says the browser XHRs are properly tracked, and we can wait for them too. But it is not true for me. The test-runner does not log about the XHR requests triggered by the browser interaction, and I cannot wait dynamically for some time-consuming requests.

    ![NoXHRRecorded]

    At this point clicking the `Sign In` button should start a XHR request. But alas, no luck here.

- Testing inside iframes? Well, it's going to bother you. I am working on a project which uses iframes with large contents and takes some time to load properly. Following the documentation and [cypress blogs] were also not quite helpful. For now, I'm using static wait before diving inside any iframes. If somebody has a better idea, well, please share!

- I feel like why we choose Cypress while testing dropdown fields 😂. I find most of the official tips for dropdown testing is with `<select>...</select>`. But the recent web is mostly based on frameworks like `VueJs`, `ReactJs`, etc. which uses a different mechanism to render dropdowns (using classes rather than using `select` tag). Options are extracted from some API requests and may also have abilities like autocompletion. With these features included, the browser elements keep on changing (some get in, and some are removed out completely). Running tests with such form fields interactions, you'll surely encounter the `Element is detached from the DOM` error [ref] blog to handle this type of error.

- Test just terminates when it likes: Only half of the test runs and that particular test is marked as passed (sometimes, but can litter test result accuracy).

    ![HalfRunPassedScenario]


[HalfRunPassedScenario]: /src/assets/TestingWithCypress/images/cypress_incomplete_run_passed_scenario.png "Incomplete but passed scenario"
[NoXHRRecorded]: /src/assets/TestingWithCypress/images/cypress_no_xhr_recorded.png "No XHR request is recorded."

[cypress blogs]: https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/ "Working with iframes in Cypress"
[ref]: https://docs.cypress.io/guides/references/error-messages.html#cy-failed-because-the-element-you-are-chaining-off-of-has-become-detached-or-removed-from-the-dom "Explained error message for elements that has been detached or removed from the dom."
