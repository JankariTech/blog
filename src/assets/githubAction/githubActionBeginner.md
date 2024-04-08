---
title: Introduction to GitHub Actions - CI & CD
authorName: Nabin Ale
authorAvatar : https://avatars.githubusercontent.com/u/61624650?v=4
authorLink: https://github.com/nabim777
createdAt: Apr 24, 2024
tags: continuous integration, continuous delivery, continuous deployment, github actions, ci, cd
banner: https://blog.jankaritech.com/src/assets/githubAction/images/githubaction_banner.png
---
GitHub Actions is an automation and CI/CD (Continuous Integration/Continuous Delivery or Deployment) service provided by GitHub, allowing us to automate our software development processes or workflows, from building and testing code to deploying it to different environments. It's an effective tool that can enhance software quality and save our time.

## Some features of GitHub Actions:
- It allows you to automate various stages of SDLC (Software Development Life Cycle), such as building, testing, deploying, and releasing software.
- It simplifies CI/CD integration, facilitating seamless DevOps practices.

## Components of GitHub Actions:
1. Workflows
2. Events
3. Jobs
4. Steps
5. Actions
6. Runners

![components](/src/assets/githubAction/images/components_of_github_action.png)


### 1. Workflows
Workflows are automated procedures that you add to your repository. They will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule. They can be used to build, test, package, release, or deploy a project on GitHub.

### 2. Events
Events are specific activities such as code push, pull request creation, issue creation, comments on pull requests or issues, etc., that trigger a workflow.

### 3. Jobs
Jobs are sets of steps that are executed in the same runner. A workflow with multiple jobs will run in parallel by default, but it can be configured so that jobs run sequentially.

### 4. Steps
A step is an individual task that can run the commands in a job. These can be actions or commands.

### 5. Actions
Actions are the standalone commands for the GitHub Actions platform that perform complex but frequently repeated tasks. Actions help to reduce repetitive code in workflows.

### 6. Runner
A runner is a GitHub Actions server where our workflows run. It listens for available jobs, runs multiple jobs at a time, and reports the progress, logs, and results back to GitHub. GitHub hosted runners are based on Ubuntu, Linux, Microsoft Windows, and Mac OS.

Note:
One event can trigger many workflows, a workflow can contain many jobs, and a job can contain many steps.

## Process in GitHub Actions:

![process_in_githubActions](/src/assets/githubAction/images/process.png)

## Getting started:

Before we dive into an example, make sure you have a repository where you want to set up your CI/CD workflow. If you don't have one, create a new repository, for example, named `action-hero`.

Step 1: Clone your repository into your system
```bash
git clone <your_github_repo_url>
```

Step 2: Go to path `action-hero` and create a folder named `.github`
```bash
cd action-hero
mkdir .github
```

Step 3: Go to path `.github` and create a folder named `workflows`
```bash
cd .github
mkdir workflows
```

Step 4: Inside the folder `workflows`, create a file named `hello_world.yml`
```bash
cd workflows
touch hello_world.yml
```
Our file structure should look like this:

```
📦action-hero
┗ 📂.github
┃ ┣ 📂workflows
┃ ┃ ┗ 📜hello_world.yml
```

Step 5: Add the following code snippet to your `hello_world.yml` file:

```yml
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
- The first step checks out the repository using the `actions/checkout` action.
- The second step simply prints a message using the `echo` command.

## GitHub Actions activity:

![github activity](/src/assets/githubAction/images/output.png)

The image above is the output from our GitHub Actions workflow run. It shows that the workflow was successful and completed the `Hello world workflow` job, which consisted of two steps: `Checkout repository` and `Print a message`.

The `Print a message` step executed the command `echo "Hello, GitHub Actions!"`, resulting in the output `Hello, GitHub Actions!` being displayed in the workflow log.

## Conclusion
In this blog, we've explored GitHub Actions, an automation and CI/CD service provided by GitHub. We've learned about its key components and how they work together to automate software development workflows.

GitHub Actions enables us to automate tasks like building, testing, and deploying code, leading to improved software quality and time savings.

With a practical example, we've seen how easy it is to set up a basic workflow.

In summary, GitHub Actions is a powerful tool for speedy development processes, making it easier to deliver high-quality software efficiently.
