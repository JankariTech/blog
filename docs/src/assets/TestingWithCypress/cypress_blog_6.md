---
title: Cypress - Gherkin / Parallelization
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: cypress, gherkin, parallelization, testing
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
seriesTitle: E2E Testing with Cypress
episode: 6
---

In the previous part of the series, we have disused how Cypress is so flexible with multiple CI providers, how it manages balanced strategies on parallel runs, and an example of a CircleCi configuration file. As long as tests are written in Cypress file/folder structure, the configuration of parallel tests run is simple as documented. But if you use feature files in your e2e tests, then you're a bit unlucky using Cypress.

As I've mentioned in the earlier part of the series, Cypress does not have a cucumber preprocessor by default, and we have to add some tweaks to get tests containing features files running. It's perfectly fine while running our tests on our own machine. We can properly tag, run, and debug our scenarios with different required hooks if necessary. But in CI/CD we do not want to run our tests as we run in our local machine.

According to some cypress users, using Cypress Dashboard along with cucumber preprocessors, they can run over 200 scenarios in 13 minutes. Parallelization is so effective with dashboard service but, it is a `PAID` service. But do not worry, we can achieve it for free.

## Parallelization with cucumber-preprocessor and Cypress
```
Folder Structure
cypress/integration/features/
  |- Login/login.feature
  |- Register/register.feature
```
Let us assume, we have two features as shown above. Our goal is to run these two features in parallel in our CI/CD. With the Cypress Dashboard service, our test files are automatically separated into different suites according to their previous run lengths to maintain minimum test run time. Since we're not using any dashboard, so we've to do this by ourselves. Simple!

So the first thing needed is we've to create suites. Where to create? Inside your `features` directory. Each folder you create can be used as a separate suite for your CI/CD.

Next, we've to configure our CI configuration to give the above suite's life.

I am currently using the `GitLab CI/CD` service, so here is an example of a config file running the above tests in parallel.

##### Example `.gitlab-ci.yml`
```yaml
image: cypress/base:12
stages:
  - automation

# this is the actual suite name that will appear in you CI/CD
Register:
    stage: automation
    script:
      - npm ci
      - $(npm bin)/cypress run "cypress/integration/features/Register/*.feature"

Login:
    stage: automation
    script:
      - npm ci
      - $(npm bin)/cypress run "cypress/integration/features/Login/*.feature"
```

That's it. You just have to run the features you want in the suite you want.

Now add and push the changes to your repository. You should see two jobs have been started under a pipeline on the `CI/CD` section of the repository. Check the run from the GitLab jobs section and find out the test result.

### Test Results and Debugging
With the `Cypress Dashboard` service enabled you can get a detailed test run summary (for the whole test run and specific tests) with so much ease. Since we're not using it, Do we get in trouble while troubleshooting? Absolutely False. Your CI/CD runner log is just enough to debug through your tests if it fails.

Here are screenshots of the GitLab CI test runner with Cypress-Gherkin-Parallelization:
- Success log sample
![SuccessLog][successLog]
- Error log sample
![ErrorLog][errorLog]

[successLog]: /src/assets/TestingWithCypress/images/cypress_success_log_gitlab_ci.jpg 'Success Log'
[errorLog]: /src/assets/TestingWithCypress/images/cypress_error_log_gitlab_ci.jpg 'Error Log'
