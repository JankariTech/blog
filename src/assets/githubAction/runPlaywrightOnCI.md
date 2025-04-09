---
title: Playwright and GitHub Actions - Run tests in CI
authorName: Nabin Ale
authorAvatar : https://avatars.githubusercontent.com/u/61624650?v=4
authorLink: https://github.com/nabim777
createdAt: Apr 8, 2025
tags: continuous integration, continuous delivery, continuous deployment, github actions, ci, cd, playwright
banner: https://blog.jankaritech.com/src/assets/RunPlaywrightOnCI/images/githubaction_with_playwright_banner
---

This is a blog about how to run Playwright UI tests in GitHub Actions. If you are not familiar and new to UI testing using Playwright, then it would be good to check out this blog about [Playwright](https://blog.jankaritech.com/#/blog/E2E%20Testing%20using%20BDD%20with%20Playwright/Behavior%20Driven%20Development%20(BDD)%20using%20Playwright). Similarly, if you are unfamiliar with GitHub Actions, you can check another blog about [Introduction to GitHub Actions](https://blog.jankaritech.com/#/blog/Introduction%20to%20GitHub%20Actions%20-%20CI%20%26%20CD).

## 🤔 Why to run tests on CI?
Tests are run on CI(Continuous Integration) to ensure the code works properly in a clean and an isolated environment every time a change is made. Here are some reasons:

**1. Early bug detection:**
By automatically running tests after every code commit, you can quickly identify issues as they arise, preventing them from accumulating and causing larger problems later on.

**2. Fast feedback loop:**
Developers get immediate notification for failing tests. That way they can fix bugs immediately and iterate quickly.

**3. Consistent testing environment:**
The CI servers run tests in an uniform environment. Therefore, there is no correlation between the developer configurations.

**4. Improved code quality:**
Regular running tests in CI ensures existing functionality does not become unusable if changes are made.

**5. Reduced integration issues:**
By regularly integrating and testing the code in CI, you reduce the risk of conflicts when merging large patches of code.

**6. Automated process:**
CI systems enable developers to save time and effort testing things.

## 📘 About the Project

![Login page of the Project](/src/assets/githubAction/images/project_login_page.png "momo application")

In this blog, I have taken simple applications built using Vue.js. The GitHub repository is available at: https://github.com/nabim777/momo-restro-list.git

This is a basic application that includes login and logout functionality. E2E test is written using Playwright to verify the login feature.

## 🛠️ Running App Locally
Before setting up CI, let's run the application and tests locally.

**1.  Install dependencies**

```bash
npm install
```

**2. Start the frontend and backend servers**


```bash
npm run serve              # Start frontend
npm run backend            # Start backend
```

## 🧪 Running UI Tests Locally

> **_NOTE:_** Make sure both the frontend and backend are running before running the tests.

To run the UI tests locally, use the following command:

```bash
npm run test:e2e tests
```



## ⚙️ Setting Up CI in GitHub Actions
After verifying the app locally, the next step is to set up CI using GitHub Actions. First, create a file named `ci.yml` in a project using the following folder structure:

```
📦momo-restro-list
┗ 📂.github
┃ ┣ 📂workflows
┃ ┃ ┗ 📜ci.yml
```

Then, add the following code in the `ci.yml`.

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

      - name: Set up node
        uses: actions/setup-node@v3
        with:
          node-version: 20.x

      - name: Run the project
        run: |
          npm run serve &
          npm run backend &

      - name: Wait for services
        run: |
          sudo apt-get install wait-for-it -y
          wait-for-it -h localhost -p 8080 -t 10
          wait-for-it -h localhost -p 3000 -t 10

      - name: Install playwright and run web-ui tests
        run: |
          npx playwright install
          npm run test:e2e tests
```


## 🔍 What this Workflow Does?
This GitHub Actions file runs when you push to the `master` branch or create a pull request to `master`

It has one job called `run-Restro-project` with these steps:
1. **Checkout repo code** - Gets the project code from GitHub.
2. **Set up node** - Installs Node.js version 20.
3. **Run the project** - Starts the Vue app, and starts the backend using json-server.
4. **Wait for services** - Waits for the frontend (port 8080) and backend (port 3000) to be ready.
5. **Install playwright and run web-ui tests** - Installs Playwright and runs e2e tests to check if the UI works properly.

## 📝 Conclusion
Using GitHub Actions to run your Playwright UI tests ensures your app is always tested in a clean, repeatable environment. It helps catch bugs early, improves collaboration, and keeps your project in a healthy state.
