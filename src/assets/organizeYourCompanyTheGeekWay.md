---
title: Organize your company the geek-way
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Oct 23, 2019
tags: startup, git, documents, organizing
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
---

## Organize your company the geek-way

How do you organize your documents in your department / company / startup ? Your policies, your minutes of meetings, your contracts, etc.?

Do you have a trillion Word documents that you share with your colleagues using your /.\*[cloud|share|box|sync|].\*/ tool? That is good, but how do you know what is the latest version of a document? What is the version you are currently working with a colleague on? How do you track changes? You send a document to a group to review, several people edit some lines, others just type comments into the document, some send it back to you by email, others put it in a file share. And how do you know who agreed on the changes? Pure chaos!

In our company we are using GIT as the solution for all that!

Advantages:
- easy to track every change of a document
- discussions are archived and can be retraced at any time
- no accidental changes can be made because the master branch is protected
- changes need to be approved before they become "official"
- the approvals can be traced back

OK, OK, there are also disadvantages:
- more difficult workflow, specially for non-techies => get them a GIT UI
- binary files (.odt, .docx, etc.) are hard to diff => use Markdown wherever possible
- limited formatting, no easy spreadsheet calculations

But overall it works pretty good for us. And here are the rules we are working with:

### Commandments

#### 1. use GIT
For official work (proposals, policy, procedures, etc.) use GIT  where-ever possible.
We like to use git as it makes it easy to know where the latest documents are and to track all changes.

#### 2. use text only
Where-ever possible use "text only" formats.
So use [Markup](https://guides.github.com/features/mastering-markdown/)
instead of DOC.

This makes it easier to compare files and track changes.

#### 3. master is law
  - Documents in the "master" branch are considered "official"
  - All changes to master need to be reviewed. The master branch is
  protected against direct edits, a change can only be merged after a review.
  Ask for reviews if you want to get changes into master.
  **An approved review is considered the same as a signature**
  - Do not have "Work in Process" in master

#### 4. use branches, create Pull Requests
Work in branches and make Pull Requests to the master branch. **You can work together with others in a branch if you need.**

#### 5. write good commit messages
The commit message has to explain what you have changed, in just a few words

#### 6. discuss Pull Requests
If you are asked for your opinion on a change or a review is requested use the GitHub comment function to express yourself.

#### 7. use GitHub Issues function for ToDos
The Issue function is great to write ToDos, assign work and discuss & track
progress.

#### 8. use Labels
The labels in GitHub should be used to tag different work staged.

**For Pull Requests**
- *Work in Process*
- *Help Needed*
- *To Review*

**For Issues**
- *priority:critical*
- *priority:high*
- *priority:normal*
- *priority:low*

#### 9. review and approve
If asked for a review, check the changes carefully and if you are happy
with them approve the Pull Request, other-wise request a change and/or
write a comment.

**An approved review is considered the same as a signature.**

As collaborators cannot review their own work, making a commit, starting a new Pull Request and asking for a review is considered as their own signature for that particular document.

This does not matter a great deal for a lot of work but occasionally might be very important. E.g. If you review&approve the Minutes of a meeting on GitHub it is the same as if you would approve and sign them during the next meeting.

#### 10. use squash & rebase
When merging a branch into master choose between "Squash & merge" and "Rebase & merge"
- If there are a lot of small changes choose "Squash" to put all changes into one big commit
- If there are changes where you care about the author use "Rebase"
- do not use "Merge & commit" as this creates unnecessary commit messages

### Workflow

#### If you want to make a change
1. pull the current master branch
2. create a new branch
3. work in your branch
4. when finished or when you need input/help from someone else
  - create a Pull Request
  - tag your Pull Request
  - ask for comments
5. when your work is ready to be reviewed ask for reviews and mark the
Pull Request as "To Review"
6. after everybody who needs to give their approval has done so, merge your work into the master branch
7. delete your work-branch

#### If you are asked for a review
1. check the changes carefully
2. comment, ask for changes and/or approve
