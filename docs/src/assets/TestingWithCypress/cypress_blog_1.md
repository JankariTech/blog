---
title: Introduction
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: vue, jest, unit, testing
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--hbLLUL0d--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9amku7k0nxfs6vx9p8tk.jpg
seriesTitle: E2E Testing with Cypress
episode: 1
---

## Testing with Cypress

The web has evolved. Finally, testing has too. `Cypress` provides fast, easy and reliable testing for anything that runs in a browser.

### Introduction

Cypress provides a complete end-to-end testing experience. Until now, end-to-end testing was not easy. It was the part developers always hated but `not anymore`. Cypress makes setting up, writing, running and debugging tests easy.

#### Who uses Cypress?

`Cypress` users are typically developers or QA engineers building web applications using modern JavaScript frameworks.

Cypress enables you to write all type of tests:

- End-to-end tests
- Integration tests
- Unit tests

Cypress can test anything that runs in a browser.

####  How Cypress is different ?

![Cypress Architecture][architecture]

- ###### Cypress does not use Selenium

  The architecture is completely different. Most end-to-end testing tools operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application. Behind Cypress is a `Node.js` server process. Cypress and the Node.js process constantly communicate, synchronize and perform tasks on behalf of each other. Having access to both parts (front and back) gives us the ability to respond to your application’s events in real time, while at the same time, work outside of the browser for tasks that require a higher privilege.

- ###### Cypress tests are only written in JavaScript

  Cypress tests anything that runs in a web browser. All the architecture surrounding Cypress is built to handle modern JavaScript frameworks especially well. We have hundreds of projects using the latest `React`, `Angular`, `Vue`, `Elm`, etc. frameworks. Cypress also works equally well on older server rendered pages or applications.

- ###### Cypress is all in one

  Writing end-to-end tests takes a lot of different tools to work together. With Cypress, you get multiple tools in one. There is no need to install 10 separate tools and libraries to get your test suite set up. We have taken some best-in-class tools you are likely already familiar with and made them all work together seamlessly.

- ###### Cypress is for developers and QA Engineers

  One of our goals was to make test-driven development a reality for end-to-end testing. Cypress is at its best when you use it as you build your application. We give you the power to code as fast as possible.

- ###### Cypress runs much, much faster

  These architectural improvements unlock the ability to do TDD with full end-to-end tests for the very first time. Cypress has been built so that testing and development can happen simultaneously. You can develop faster while driving the entire dev process with tests because: you can see your application; you still have access to the developer tools; and changes are reflected in real time. The end result is that you will have developed more, your code will be better, and it will be completely tested. If you opt for our Dashboard Service, parallelization and automated load balancing will further supercharge your test speeds.

#### Features

- **Time Travel:**

  Yes, you heard it right. Time travel is finally possible. Cypress takes `snapshots` as your tests run. Hover over the commands in the `Command Log` to see exactly what happened at each step.

- **Real Time Reloads:**

  Cypress automatically reloads whenever you make changes to your tests. See commands execute in real time in your application.

- **Automatic Waiting:**

  Never add `waits` or `sleeps` to your tests. Cypress automatically waits for commands and assertions before moving on. No more `async` hell.

- **Spies, Stubs & Clocks:**

  Verify and control the behavior of `functions`, `server responses` or `timers`. The same functionality you love from unit testing is right at your fingertips.

- **Network Traffic Control:**

  Easily `control`, `stub`, and `test` edge cases without involving your server. You can stub network traffic however you like.

- **Screenshot and Videos:**

  View `screenshots` taken automatically on failure, or `videos` of your entire test suite when run from the `CLI`.

- **Cross Browser Testing:**

  ![Cross Browser Testing Platforms for Cypress][cypressCrossBrowserPlatforms]

  Run tests within `Firefox` and `Chrome-family` browsers (including `Edge` and `Electron`) locally and optimally in a continuous integration pipeline.

  ![Cross Browser Testing with Cypress][cypressCrossBrowserTesting]

### Installation And Requirements

- #### System Requirement

    - ##### OS

        Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

        - **macOS**: 10.9 and above (64-bit only)
        - **Linux**: `Ubuntu` 12.04 and above, Fedora 21 and `Debian` 8 (64-bit only)

            - For `Ubuntu`/`Debian`
                ```bash
                sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
                ```

            - For `CentOS`

                ```bash
                yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
                ```

        - **Windows**: 7 and above

- ##### Node.js

    If you're using `npm` to install Cypress, then
        ```
        Node.js 10 or 12 and above
        ```

- #### Installing

    The recommended approach is to install Cypress with `npm` because :

    - Cypress is versioned like any other dependency.

    - It simplifies running Cypress in Continuous Integration.

    ```sh
    cd /your/project/path
    npm install cypress --save-dev
    ```
    Or, you could always install with `yarn`
    ```sh
    cd /your/project/path
    yarn add cypress --dev
    ```

- #### Opening Cypress

     If you used `npm` to install, `Cypress` has now been installed to your `./node_modules` directory, with its binary executable accessible from `./node_modules/.bin`.

    Now you can open `Cypress` from your project root one of the following ways:

    - Use the shortcut using `npm bin`
        ```sh
        $(npm bin)/cypress open
        ```

    - Adding npm scripts

        Inside your `package.json` file:

        ```json
        {
            "scripts": {
            	"cypress:open": "cypress open"
            }
        }
        ```

        Now you can invoke the command from your project root like so:

        ```shell
        npm run cypress:open
        ```

    - You can always use other options like `yarn` or `npx` to open Cypress.

        ```bash
        # using yarn
        yarn run cypress open
        # using yarn
        npx cypress open
        ```

🎉 Great job! You can now write and run your test using Cypress Desktop Test Runner.  🥳 🙌

<!-- assets -->
[architecture]: /src/assets/TestingWithCypress/images/cypres_architecture.png "How cypress is different from existing selenium based tools?"
[cypressCrossBrowserPlatforms]: /src/assets/TestingWithCypress/images/cypress_cross_browser_platforms.png "Cross Browser Testing platforms supported by Cypress."
[cypressCrossBrowserTesting]: /src/assets/TestingWithCypress/images/cypress_cross_browser_testing.png "Cypress test runner provides dropdown to switch between browsers for test."
