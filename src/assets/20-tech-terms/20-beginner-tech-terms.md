---
title: 20 Useful and Exciting Technical Terms for Junior Programmers 🚀💻
authorName: Pradip Subedi
authorAvatar: https://avatars.githubusercontent.com/u/27019402?v=4
authorLink: https://github.com/anon-pradip/
createdAt: Jul 09, 2024
tags: tech trends, programming, junior developers, software development, emerging technologies
banner: https://blog.jankaritech.com/src/assets/20-tech-terms/images/tech-pic.png
---
Many junior-level techies, especially the newcomers in coding, can admit to the fact that sometimes attending their first stand-up meeting in a professional setup can be pretty shaky simply because you have no idea what they are talking about. In this blog post, I am going to share 20 different and cool terminologies that can give you an extra edge in your knowledge and domain. With that in mind, we will delve into these key terms, allowing you to navigate the rapidly changing tech-world landscape. Let's go through these one by one:

## Development Practices
### 1. Scrum
Scrum can be your life raft if you ever feel like any of your projects are stuck in a never-ending waterfall, with deadlines constantly whooshing away. It depicts a software development process that breaks down big tasks into manageable pieces, with regular feedback and adjustments along the way. It is all about teamwork and flexibility, allowing us to adapt to changes very quickly. You can think of it as a team sport - everyone works together in short bursts (called `sprints`) to deliver a specific chunk of the project. Regular follow-ups and reviews keep everyone on the same path, ensuring the final product delivers what clients truly need. Scrum is all about agility and drop-shipping value fast, making it a popular choice for software development!

### 2. Backlog
A backlog is a secret weapon for a company having tasks and ideas overflowing and keeping them well organized. It is mostly a prioritized to-do list for features, bug fixes and anything else that needs tackling. The most important are listed at the top, ensuring the team focuses on what matters the most. You can imagine it as a constantly evolving board of lists - new tasks get added, some get tackled and deleted, while others get rearranged based on urgency. This dynamic approach makes the development process very attentive and ensures the team delivers the most valuable features first!

### 3. Retrospective
A retrospective is one of the key meetings in Agile Software Development. Conducted after a project, or a sprint, it is a meeting where the team contemplates what they did right, and what they need to improve. When improvements are identified they should be documented and put in place, then revisited in future retrospectives to see if they made a difference. Generally, the participants are developers, product owners/clients and scrum master(s). Retrospectives are a priceless tool for boosting team dynamics, workflows and productivity.

### 4. YAGNI
`YAGNI (You Aren't Gonna Need It)` - It is a practice in extreme programming and other agile practices that tells not to implement any functionality until it is needed.
YAGNI tells developers to only concentrate on features that are demanded in the present task. This is to prevent solutions from being built that will never be used, and keep a codebase clean during its life. There might be some situations when you get a `YAGNI` comment from seniors.😸

**Practical example:**

Suppose you were creating a task management app. Even though you were tempted to include everything during the first iteration like email notifications, calendar integrations etc., `YAGNI` suggests that you should only put them into action when they are needed. The foremost priority should be core functionalities: adding, editing and deleting tasks. If users ask for those advanced features in the future, those can be added only at that time.
In this way, embracing `YAGNI` helps you keep your development process lean and deliver just what is needed without overengineering the list of features to be covered.

## Version Control

### 5. Version Control System (VCS)
`VCS` is a platform where changes to a codebase are logged using a tool. Sometimes we may get worried that continuously rewriting the same code and one small mistake could destroy the entire project. But there's a superhero in the developer world ready to save our day: `Version Control Systems (VCS)`! This feature allows any number of developers to work on the same project without clashing and records changes in a history with who did what, and why. Key features of `VCS` include:

- **Version Control**: Handles the history of the changes and keeps versioned.

- **Branching and merging**:  Allows developers to work separately on features or bug fixes.

- **Collaboration**: Leads to seamless integration of modifications across multiple developers working on the same codebase.

- **Backup & Restore**: If failures and errors occur, we can rollback to the previous version.

- **Solving Issues**: In case of overlapping changes, we are able to resolve discrepancies.

`Git`, `Subversion (SVN)`, and `Mercurial` are some of the popular `VCS` tools. For instance, `Git` and platforms like `Github` or `GitLab` provide an opportunity to clone repositories, create branches and merge changes which helps to coordinate to work optimally in terms of teamwork as well as project management.
Want to geek out even more? Have fun exploring, [Git vs Mercurial vs SVN (Subversion)](https://stackshare.io/stackups/git-vs-mercurial-vs-svn)!

### 6. Porting Commits
Porting commits is where you move or "port" the changes from one Git branch to another. Usually, this is required if you have any commits in one branch that you want to add to another branch but not by merging the whole branch. Generally, there are two ways of porting commits which are:
- **Forward-Porting a commit**:
`Forward-porting` is the practice of moving changes from an older branch to a newer branch. That way any fix or update done will be in the main development branch. This includes finding appropriate commits, cherry-picking them to the branch created for it, resolving any conflicts and running tests thoroughly on these changes to make sure nothing broke during integration. This way, a version of the codebase is made consistent and stable across different implementations.

- **Backporting a commit**:
`Backporting` is when software has some patches or updates in a recent version and they need to be applied to an older version of the same software. It includes: identifying the patches to be done, adapting those patches to be compatible with older versions of the same product, dealing with any undesired side effects surfaced during the last step and finally deploying the backported patch.

### 7. Bump
In general, when developers increase the version number of the software they use the term `Bump`. Most of the time, this version number change also signals changes that have been made to the product. Think of it as updating the version of a book. A higher version number points to a newer version of the software, usually with bug fixes or new features and other improvements. Increasing the version number helps developers/users see that a change has been made and helps them ensure that they are using the most compatible and latest version.

## Testing

### 8. Quality Assurance (QA)
Imagine a team committed to ensuring software is flawless before it reaches clients or end users. That's the world of `Quality Assurance (QA)`! `QA` is not just about testing; it is a practice to ensure that defects are identified and prevented during the development lifecycle. Consider QA engineers the gatekeepers of software brilliance. They work in tandem to developers to make sure the software possesses the highest quality standards. From reading requirements to test case designing and early identification of issues, QAs play various roles in a project. Their goal? - delivering a user-friendly and seamless working final product that is close to being perfect.

### 9. Unit Testing
`Unit testing` is a testing method in which every component of software is tested to check if it is working accurately in those smaller components. It means catching bugs and other types of errors closer to the time they are introduced which results in having more reliable code and easier maintenance.
Key Points:
- **Isolation**: Tests are written for small units of code like functions/methods, separately from other parts of the application.
- **Automation**: With unit testing, tests are automated and can be executed continuously as often as required to fix issues immediately.
- **Refactoring Safety**: Verify that changes made don't break the previous functionality of the application.

### 10. Regression Testing
Suppose you've patched a bug or added any code/tests to your software. Great work! What if that fix/addition broke something else that previously worked fine?  That's where `Regression testing` shines. It's a safety net that ensures recently made changes haven't caused any unintended regressions, or reintroduced old bugs.

So, nearly like checking your work before saving your changes in a document, `regression testing` is performing old test cases on a new release to ensure that previously implemented functionality still works as it needs to, after changes have been made. This catches any regressions right away and prevents them from reaching users.

## Automation and Deployment

### 11. CI/CD (Continuous Integration/Continuous Deployment)
CI/CD sounds pretty complicated, but it will completely rock your world if you can manage to get it working. It automates the testing and deployment of your code using something called a `pipeline`. A `pipeline` is pretty much a conveyor belt for your code; it tests every change you make and makes it available for deployment to production. This automation helps to reduce time and minimize errors that can slow down your development process.

### 12. Docker
Docker helps you bundle your code and its dependencies into a package which is like a secret handshake. No matter where you deploy it, this package ensures that your code runs exactly as you designed. These packages are called `Docker images`. From a single image, you can create isolated environments called `Docker containers`. Each container acts like its mini-pc, sharing resources efficiently. This consistency makes the flow of development, testing and deployment so much easier - all a breeze!

### 13. Cron Jobs
Cron jobs are simply time-based tools used to automate repetitive tasks. You can also define the frequency and timing of an actionable task by using a specific syntax called the `cron expression`. This improves productivity and makes sure that critical procedures are carried out in a consistent way.
#### Some use-cases for Cron Jobs
- Automatically performing a nightly backup
- Automated weekly reporting
- Auto-installing software

## Coding Tools

### 14. cURL
cURL is a short term for "client URL" and is pronounced and typed as `curl`. It is an open-source software that is utilised in command lines or scripting to perform data transfers. `cURL` is built to support the transfer protocols like HTTP, HTTPS, IMAP and many others. It further gives the ability to use cookies, set proxies, provide authentication credentials and even headers while making requests. Thus it is an all-purpose tool for data transfer & network communication.

**Syntax for using cURL**:\
`curl [options] [URL]`

### 15. Linter
The process of analyzing the source code and reporting common syntactic and semantic errors or potential bugs is called `linting` and is done by using a `linter`.
Think of a project you are working on using JavaScript. Even though you are writing the code yourself, how do you guarantee your code to be without any errors or faults and also follow coding standards? That's where a linter like `ESLint` is important. It automatically checks the quality of your code such as checking typos and applying coding guidelines. For example, it can warn when a variable is declared but never used or normalize quotes to either single or double.


## Web Development

### 16. HTTP methods
Simply, `HTTP methods` are actions and provide a way to indicate the desired action to be performed on a given resource within a web server. They are crucial parts of the `HTTP protocol` that are used in communication on the web. Common `HTTP methods` are:
- `GET` method: The `GET` method is designed to request a specific resource.
- `POST` method: The POST method is designed to submit data to be processed by a specified resource. It is akin to completing and sending a form.
- `PUT` method: The `PUT` method is designed to replace an entire resource with new content. It's pretty much similar to saving an edited document.
- `DELETE` method: When the `DELETE` method is triggered, the server removes the resource identified by that request. This is like deleting a file.

**Example scenario:**

When you open any webpage, the browser sends a `GET` request to its server to get its page data. When you fill out a form it actually is sending your data over with a `POST` request.

### 17. API
An `API (Application Programming Interface)` is a set of specifications that allows different applications to communicate, and it provides an interface for developers to interact with other services. So we can picture it as a translator that helps two people speaking different languages understand each other.
Key Features:
- `Scalability`: Easy to extend and adapt for interoperation with other systems and applications
- `Efficiency`: Can be embedded in other applications with great ease, thus giving you the freedom to utilize present functionality again instead of writing code from scratch.
- `Security`: Ensures secure ways of accessing resources and a healthy trade of data.

### 18. Cookies and Sessions
`Cookies` and `sessions` are tools to store user data/state in our web applications. It enables websites to remember their own users so as to create a more personalized experience.

**Cookies**:
- **Meaning**: It is the tiny piece of data that is stored by a website on your browser.
- **Goal**: For the purpose of remembering user activity, login details and preferences.
- **Example**: Logging-in to certain websites, and checking the "remember me" box will store a cookie in your web browser.

**Sessions**:
- **Meaning**: Some type of temporary storage which includes server-side and client-side components that are used to store user data during the visit from the time a visitor sits on a page until when they leave (session).
- **Goal**: To maintain the state of the user and data during navigation across a website.
- **Example**: When you add items to a cart on an e-commerce site, a session is created to keep the item in the cart until payment is finalized or the user leaves the site.

## Authentication

### 19. Single Sign-On (SSO)
`SSO` is an authentication process which allows users to enter one set of login credentials for multiple applications. It simplifies the user experience by removing the requirement to remember unique usernames and passwords for each application. That is nice for users but it also improves the security of your application and makes controlling user access easier by having one central location where validation occurs.
Example Scenario:
Suppose, you are logging into your company's intranet. `SSO` allows you to log into email, project management accounts and some other tools without having to login for each.
`SSO` simplifies the log-in process and boosts user efficiency while increasing security as it centralizes credential management.

## Documentation

### 20. User Documentation
`User documentation` is a high level guide for assisting users to understand and utilize products or services. It provides examples, FAQs, explanations, and troubleshooting advice making the service easily navigable and user-friendly.

Picture yourself learning how to use a new code library for the first time as a developer and it would be overwhelming without clear instructions. This is where `User documentation` saves the day! It includes step-by-step guides for how to integrate the library, answers the most common questions and provides solutions for typical problems.

Proper documentation is like having the knowledge of a colleague sitting beside you to help solve any barriers to ensure you fully utilize the features of the service/product.

## Conclusion
Learning to code can be daunting, however understanding the jargon associated with it may help make the journey more interesting. With a grasp on these 20 crucial terms, you will be able to easily traverse the ever-evolving sphere of software development. Keep exploring, keep learning and most importantly; code away. Happy programming! 🚀💻

---

&nbsp;
>💡 **Note** \
>Image for the banner is taken from: [Undraw](https://undraw.co/)

