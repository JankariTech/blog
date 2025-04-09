---
title: Run tests in CI
authorName: Nabin Ale
authorAvatar : https://avatars.githubusercontent.com/u/61624650?v=4
authorLink: https://github.com/nabim777
createdAt: Apr 8, 2025
tags: continuous integration, continuous delivery, continuous deployment, github actions, ci, cd, playwright
banner: https://blog.jankaritech.com/src/assets/githubAction/images/githubaction_banner.png
---

This is a blog about how we can run Playwright UI tests in GitHub Actions. If you are not familiar and have never written UI tests using Playwright, then it would be good to check at this blog about Playwright. Similarly, if you are unfamiliar with GitHub Actions, you can check another blog about GitHub Actions for beginners.

## Why to run tests on CI (continuous integration)?
Tests are run on CI because it ensures that code runs properly every time you make a change and is in an isolated, clean environment. Here are some reasons:

**- Early bug detection:**
By automatically running tests after every code commit, you can quickly identify issues as they arise, preventing them from accumulating and causing larger problems later on.

**- Fast feedback loop:**
Developers get immediate notification for failing tests. That way they can fix bugs immediately and iterate quickly.

**- Consistent testing environment:**
The CI servers run tests in a uniform environment, and therefore there is no correlation between the developer configurations.

**- Improved code quality:**
Regular testing done in CI, ensure existing functionality does not become unusable if changes are made.

**- Reduced integration issues:**
By regularly integrating code and testing that code in a CI environment you reduce the risk of conflicts when merging large patches of code.

**- Automated process:**
CI systems enable developers to save time and effort testing things.

## About the Project

![Login page of the Project](/src/assets/RunPlaywrightOnCI/images/projectLoginPage.png "momo application")

In this blog, I have taken simple applications built using Vue.js. Let me introduce the app that the CI will run tests on. The GitHub repository is available at: https://github.com/nabim777/momo-restro-list.git

This is a basic application that includes login and logout functionality. A UI test has been written using Playwright to verify the login feature.

## Running App Locally
To run the application locally, follow these steps:

**Project Setup**

```bash
npm install
```

**Compile and hot-reload for development**

```bash
npm install -g json-server
json-server db.json
```

## Running Tests Locally

To run the UI tests locally, use the following command:

```bash
npm run test:e2e tests
```

Like this, running the tests locally needs to run the following commands:

```bash
npm run test:e2e tests
```

## Setting Up CI in GitHub Actions
Like locally we will now set up the system in CI like running locally:


```yml
name: Run-project

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
  workflow_dispatch:

jobs:
  run-Restro-project:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo code
        uses: actions/checkout@v3

      - name: set up node
        uses: actions/setup-node@v3
        with:
          node-version: 20.x

      - name: Build and run the project
        run: |
          npm install
          npm run serve &
          npm install -g json-server
          json-server db.json &

      - name: wait for services
        run: |
          sudo apt-get install wait-for-it -y
          wait-for-it -h localhost -p 8080 -t 10
          wait-for-it -h localhost -p 3000 -t 10

      - name: run web-ui tests
        run: |
          npx playwright install
          npm run test:e2e tests
```


## What this Workflow Does?
This GitHub Actions file runs when you:
- Push to the master branch
- Create a pull request to master
- Run the workflow manually

It has one job called run-Restro-project with these steps:
1. **Checkout repo code** - Gets the project code from GitHub.
2. **Set up node** - Installs Node.js version 20.
3. **Build and run the project** - Installs dependencies, starts the Vue app, and starts the backend using json-server.
4. **Wait for services** - Waits for the frontend (port 8080) and backend (port 3000) to be ready.
5. **Run web-ui tests** - Installs Playwright and runs the UI tests.

## Conclusion
Using GitHub Actions to run your Playwright UI tests ensures your app is always tested in a clean, repeatable environment. It helps catch bugs early, improves collaboration, and keeps your project in a healthy state.
