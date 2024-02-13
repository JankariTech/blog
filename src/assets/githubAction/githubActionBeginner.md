---
title: GitHub Actions - CI & CD
authorName: Nabin Ale
authorAvatar : https://avatars.githubusercontent.com/u/61624650?s=400&u=8f992a9ca189af19c40cb070a5af1e02669d3884&v=4
authorLink: https://github.com/nabim777
createdAt: Oct 30, 2023
tags: CI, CD, github, githubAction
banner: https://blog.jankaritech.com/src/assets/githubAction/images/githubaction_banner.png
---
GitHub Actions is an automation and CI/CD service provided by GitHub. It allows us to automate our software development process or workflows, from building and testing code to deploying it to different environments. It's a really effective tool that can both increase software quality and save us time.

## Some features of GitHub Actions:
- It allows you to automate your Software Development Life Cycle (SDLC) processes or workflows.
- It simplifies CI/CD integration, enabling seamless DevOps practices.

## Components of GitHub Actions:
1. Workflows
2. Events
3. Jobs
4. Steps
5. Actions
6. Runners

![components](/src/assets/githubAction/images/components_of_github_action.png)


### 1. Workflows:
Workflows are automated procedures that you add to your repository. Workflows will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule. It can be used to build, test, package, release, or deploy a project on GitHub.

### 2. Events:
Events are specific activities like code pushes, pull requests creation, issue creation, issue comments, etc. that triggers a workflow.

### 3. Jobs
Jobs are the set of steps that are executed in the same runner. A workflow with multiple jobs will run in parallel which is the default, but it can be configured so that jobs will run sequentially.


### 4. Steps
A step is an individual task that can run the commands in a job. These can be actions or commands.

### 5. Actions
Actions are the standalone commands for the GitHub Actions platform that perform a complex but frequently repeated task. Actions help to reduce the repetitive code in workflows.

### 6. Runner
A runner is a GitHub actions server where our workflows run. A runner listens for available jobs. Each runner runs multiple jobs at a time, and reports the progress, logs, and results back to GitHub. GitHub hosted runners are based on Ubuntu, Linux, Microsoft Windows, and Mac OS.

Note:
One event can trigger many workflows, a workflow can contain many jobs, and a job can contain many steps.

### Example:

![process_in_githubActions](/src/assets/githubAction/images/process.png)

## Getting started:

Before we dive into an example, make sure you have a repository where you want to set up your CI/CD workflow. If you don't have one, create a new repository for example named `action-hero`.

Step 1: Clone your repository into your system
```bash
git clone <your_github_repo_url>
```

Step 2: Go to path `action-hero` and make a folder `.github`
```bash
cd action-hero
mkdir .github
```

Step 4: Then, go to path `.github` and make a folder `workflows`
```bash
cd .github
mkdir workflows
```

Step 5: Inside the folder `workflows` create a `hello_world.yml` file
```bash
cd workflows
touch hello_world.yml
```
Our file structure will look like this
```
📦Action-hero
┗ 📂.github
┃ ┣ 📂workflows
┃ ┃ ┗ 📜hello_world.yml
```

Step 6: Add the following code snippet to your `hello_world.yml` file:

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

## GitHub Actions activity:

![github activity](/src/assets/githubAction/images/output.png)

Above image is an output from a GitHub Actions workflow run. The output shows that the workflow was successful and completed the `Hello world workflow` job, which consisted of two steps: `Checkout repository` and `Print a message`.

The `Print a message` step executed the command `echo "Hello, GitHub Actions!"`, resulting in the output `Hello, GitHub Actions!` being displayed in the workflow log.

## Conclusion:
In this blog, we've explored GitHub Actions, an automation and CI/CD service provided by GitHub. We've learned about its key components and how they work together to automate software development workflows.

GitHub Actions enables us to automate tasks like building, testing, and deploying code, leading to improved software quality and time savings.

With a practical example, we've seen how easy it is to set up a basic workflow.

In summary, GitHub Actions is a powerful tool for speedy development processes, making it easier to deliver high-quality software efficiently.
