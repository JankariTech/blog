---
title: Playwright and GitHub Actions - Run tests in CI
authorName: Nabin Ale
authorAvatar : https://avatars.githubusercontent.com/u/61624650?v=4
authorLink: https://github.com/nabim777
createdAt: Apr 8, 2025
tags: continuous integration, continuous delivery, continuous deployment, github actions, ci, cd, playwright
banner: https://blog.jankaritech.com/src/assets/RunPlaywrightOnCI/images/githubaction_with_playwright_banner
---

This is a blog about how we can run Playwright UI tests in GitHub Actions. If you are not familiar and new to UI testing using Playwright, then it would be good to check at this blog about [Playwright](https://blog.jankaritech.com/#/blog/E2E%20Testing%20using%20BDD%20with%20Playwright/Behavior%20Driven%20Development%20(BDD)%20using%20Playwright). Similarly, if you are unfamiliar with GitHub Actions, you can check another blog about [Introduction to GitHub Actions](https://blog.jankaritech.com/#/blog/Introduction%20to%20GitHub%20Actions%20-%20CI%20%26%20CD).

## 🤔 Why to run tests on CI?
Tests are run on CI(continuous integration) because it ensures that code runs properly every time you make a change and is in an isolated, clean environment. Here are some reasons:

**1. Early bug detection:**
By automatically running tests after every code commit, you can quickly identify issues as they arise, preventing them from accumulating and causing larger problems later on.

**2. Fast feedback loop:**
Developers get immediate notification for failing tests. That way they can fix bugs immediately and iterate quickly.

**3. Consistent testing environment:**
The CI servers run tests in a uniform environment, and therefore there is no correlation between the developer configurations.

**4. Improved code quality:**
Regular testing done in CI, ensure existing functionality does not become unusable if changes are made.

**5. Reduced integration issues:**
By regularly integrating code and testing that code in a CI environment you reduce the risk of conflicts when merging large patches of code.

**6. Automated process:**
CI systems enable developers to save time and effort testing things.

## 📘 About the Project

![Login page of the Project](/src/assets/githubAction/images/project_login_page.png "momo application")

In this blog, I have taken simple applications built using Vue.js. Let me introduce the app that the CI will run tests on. The GitHub repository is available at: https://github.com/nabim777/momo-restro-list.git

This is a basic application that includes login and logout functionality. A UI test has been written using Playwright to verify the login feature.

## 🛠️ Running App Locally
To run the application locally, follow these steps:

**1. Project Setup**

Install all dependencies:

```bash
npm install
```

**2. Compile and hot-reload for development**

To run both the frontend and backend locally:

```bash
npm run serve              # Start frontend
npm run backend            # Start backend
```

## 🧪 Running Tests Locally

> **_NOTE:_** Make sure the application and backend are running before you start the tests.

To run the UI tests locally, use the following command:

```bash
npm run test:e2e tests
```



## ⚙️ Setting Up CI in GitHub Actions
Like locally we will now set up the system in CI. for that first of all, create a file `ci.yml` in a project using the following folder structure:

```
📦momo-restro-list
┗ 📂.github
┃ ┣ 📂workflows
┃ ┃ ┗ 📜ci.yml
```

Then, add below code in the `ci.yml`.

```yml
name: Run-project

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master

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

      - name: Run the project
        run: |
          npm run serve &
          npm run backend &

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


## 🔍 What this Workflow Does?
This GitHub Actions file runs when you push to the master branch or create a pull request to master

It has one job called run-Restro-project with these steps:
1. **Checkout repo code** - Gets the project code from GitHub.
2. **Set up node** - Installs Node.js version 20.
3. **Run the project** - Starts the Vue app, and starts the backend using json-server.
4. **Wait for services** - Waits for the frontend (port 8080) and backend (port 3000) to be ready.
5. **Run web-ui tests** - Installs Playwright and runs the UI tests.

## 📝 Conclusion
Using GitHub Actions to run your Playwright UI tests ensures your app is always tested in a clean, repeatable environment. It helps catch bugs early, improves collaboration, and keeps your project in a healthy state.
