---
title: Github Actions - CI &CD
authorName: Nabin Ale
# authorAvatar : https://www.jankaritech.com/images/2023/06/06/nabin-800x800
authorAvatar : https://avatars.githubusercontent.com/u/61624650?s=400&u=8f992a9ca189af19c40cb070a5af1e02669d3884&v=4
authorLink: https://github.com/nabim777
createdAt: Oct 30, 2023
tags: CI, CD, githubAction
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
---
GitHub Actions is an automation and CI/CD service provided by GitHub. It allows us to automate our software development process or workflows, from building and testing code to deploying it to different environments. It's a really effective tool that can both increase software quality and save us time.

## Features in github actions:
- automate SDLC process or workflow
- implemnts CI/CD DevOps

Before we dive into an example, make sure we have a GitHub account and a repository where we want to set up your CI/CD workflow. If we don't have one, create a new repository.

## Components of github actions:
1. Workflows
2. Events
3. Jobs
4. Steps
5. Actions
6. Runners

### 1. Workflows:
Workflows are automated procedures that you add to your repository. Workflows  will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule. It can be used to build, test, package, release, or deploy a project on Github.

### 2. Events:
Events are specific activities like code pushes, pull requests creation, issue creation, issue comments etc that triggers a workflow.

### 3. Jobs
Jobs are the set of the steps that were executed in same runner. A workflow with multiple jobs will run in parallel which is default but it can be configure so that jobs will run sequentially.


### 4. steps
A step is an individual task that can run the commands in a job. These can be actions or command.

### 5. Actions
Actions are the standalone commands for github actions platform that performs a complex but frequently repeated task. Actions helps to reduce the repetitive code in workflows.

### 6. Runner
Runner is a github actions server where our workflows run. A runner listens for available jobs. Each runner runs jobs at a time, and reports the progress, logs, and results back to github. Github hosted runners are based on Ubuntu, Linux, Microsoft Windows, and macos.

Note:
One event can trigger many workflows, a workflow can contain many jobs, and a job can contain many steps

Before we dive into an example, make sure we have a repository where we want to set up your CI/CD workflow. If we don't have one, create a new repository.
Then create a folder `.github/workflows` and inside it make a file as `hello_world.yml`

```
name: Hello world workflow

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Print a message
      run: echo "Hello, GitHub Actions!"
```
In this example:
- The workflow is triggered by a push event on the main branch.
- The job named "build" runs on the latest version of Ubuntu.
- The first step checks out the repository using the actions/checkout action.
- The second step simply prints a message using the echo command.
