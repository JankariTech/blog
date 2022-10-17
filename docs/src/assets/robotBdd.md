---
title: Setup and run tests with robot framework
authorName: Jasmine Baral
authorAvatar: https://avatars.githubusercontent.com/u/40829116?v=4
authorLink: https://github.com/jasson99/
createdAt: April 6, 2020
tags: testing, bdd, robotframework, python
banner: https://blog.testproject.io/wp-content/uploads/2020/06/23-06-A.jpg
---
## Robot Framework

Robot framework is a generic open source test automation framework for acceptance testing. It is a keyword-driven testing framework that uses tabular test data syntax. It has easy syntax, using human-readable keywords. This framework is independent of operating system and application. The core framework is implemented using Python and also runs on Jython(JVM) and IronPython(.NET). This framework provides support for external libraries, tools which are open source and can be used for test automation.

The test data is in simple tabular format. When started, the robot framework processes the data, executes the test cases, and generates logs and reports.

 ### Installation and setup of robot framework
1. Preconditions:
   * Python installation
   * Pip
   * make virtual environment

2. Installing robot framework with pip
    * `python -m pip install robotframework`
    * `python3 -m pip install  robotframework`

   After the successful installation, you should be able to execute the created runner scripts (robot and rebot) with --version option and get both Robot Framework and interpreter versions as a result:

        $ robot --version
        Robot Framework 3.0 (Python 2.7.10 on linux2)

        $ rebot --version
        Rebot 3.0 (Python 2.7.10 on linux2)

3. Upgrade[optional]
   * `pip install --upgrade robotframework`

4. Using robot and rebot scripts

   Starting from Robot Framework 3.0, tests are executed using the robot script and results post-processed with the rebot script:

        robot tests.robot
        rebot output.xml
5. Installing required libraries
    * `pip install requests robotframework-selenium2library robotframework-pageobjectlibrary`

6. Installation of IDE
    * Install pycharm or any preferred IDE

7. Import required libraries in the IDE. In pycharm,
    * To add the project interpreter, Go to `Files` => `Settings` => `Project: <your_Project>` => `Project Interpreter` and then add the python version available through your virtual environment.
    * Also add the required libraries such as : `Selenium`, `robotframework-seleniumLibrary`, `robotframework-pageObjectLibrary`.

8. Make a robot file inside a test folder eg: `robotBDDExample/test/login.robot`

### Test Data Sections
The data used is defined in different sections in robot framework. These sections are often called tables.

 1. Settings: This section is used for importing test libraries, resource files and variable files.
 2. Variables: The variables that can be used in other parts of the test data are defined in this section.
 3. Test Cases: In this section, test cases are created from available keywords.
 4. Tasks: In this section, tasks are created using available keywords.
 5. Keywords: User keywords are created using existing lower-level keywords.
 6. Comments: This section contains additional comments or data which are ignored by robot framework.

 These sections are recognized by their header row. The recommended header format is `*** Settings ***`. However, the header is case-insensitive, the surrounding spaces are optional, and the number of asterisk characters can vary as long as there is one asterisk at the beginning.

Robot framework test cases can be written in space separated plain text format. In a space separated format, two or more spaces are used as a separator between different data items.

```
*** Settings ***
Documentation    Example using the space separated plain text format.
Library          OperatingSystem

*** Variables ***
${MESSAGE}       Hello, i am robo!

*** Test Cases ***
My Test
    [Documentation]    Example robot test
    Log    ${MESSAGE}
    My keyword    /lorem.txt

Another Test
    Should Be Equal    ${MESSAGE}    Hello, i am robo!

*** Keywords ***
My Keyword
    [Arguments]    ${path}
    File Should Exist    ${path}
```

In order to make the separations more clear, pipe separated format can be used.

```
| *** Settings ***   |
| Documentation      | Example using the pipe separated plain text format.
| Library            | OperatingSystem

| *** Variables ***  |
| ${MESSAGE}         | Hello, i am robo!

| *** Test Cases *** |                 |                   |
| My Test            | [Documentation] | Example robo test |
|                    | Log             | ${MESSAGE}        |
|                    | My Keyword      | /lorem.txt        |
| Another Test       | Should Be Equal | ${MESSAGE}        | Hello, i am robo!

| *** Keywords ***   |                    |         |
| My Keyword         | [Arguments]        | ${path} |
|                    | File Should Exist  | ${path} |
```

From the above examples, it is clear that the test cases are created in the test case tables from the available keywords. Keywords can be imported from the test libraries or resource files, or created in the keyword table of the test case itself.

Let us now see a practical example where a user logs in.

```
*** Settings ***
Documentation       Test for user login
Library             SeleniumLibrary
Library             PageObjectLibrary


Test Setup           Open test browser
Test Teardown        Close all test browsers

*** Variables ***
${SERVER}           localhost:8080
${ROOT}             http://${SERVER}/myApp
${BROWSER}          chrome
${SELENIUM_URL}     http://localhost:4444
${PLATFORM}         linux
${VERSION}          latest
${USERNAME}         admin
${PASSWORD}         password
${username_field}   id=usernametext
${password_field}   id=passwordtext
${signIn_Button}    id=submit
${LOGIN_URL}        http://${SERVER}/myApp/login
${WELCOME_URL}      http://${SERVER}/myApp/welcome.html

*** Test Cases ***
Valid Login
  [Documentation]       Test valid login
  Open Login Page
  Input Username        ${USERNAME}
  Input Password        ${PASSWORD}
  Submit Credentials
  Welcome page is open

*** Keywords ***
Open test browser
   Open browser  ${ROOT}  ${BROWSER}
    ...  remote_url=${SELENIUM_URL}/wd/hub
    ...  desired_capabilities=browserName:${BROWSER},version:${VERSION},platform:${PLATFORM}

Open Login Page
   Go To        ${LOGIN_URL}
   Login Page Should Be Open

Login Page Should Be Open
   Title Should Be    Login Page

Input Username
   [Arguments]    ${USERNAME}
   Input Text    ${username_field}    ${USERNAME}

Input Password
   [Arguments]    ${PASSWORD}
   Input Text    ${password_field}    ${PASSWORD}

Submit Credentials
   Click Button    ${signIn_Button}

Welcome Page Is Open
   Location Should Be    ${WELCOME_URL}
   Title Should Be    Welcome Page

Close all test browsers
    Close all browsers
```
Now, let us understand the above example. The test case has a scenario for valid user login. This test case uses a number of keywords, which can be either the predefined keywords imported from the libraries, or can be self created using available low-level keywords. In the keyword section, all the self created keywords are defined using available keywords. For example: 'Input Username' is a user created keyword which uses an existing keyword 'Input Text'. Similarly, 'Welcome Page Is Open' is a user created keyword which is created using pre-existing keywords 'Location Should Be' and 'Title Should Be'.

The keyword 'Title Should Be' uses the page title such as 'Welcome Page' and 'Login Page' as in example above. These page titles are defined in the page object classes, which will be discussed below.

### Using page objects in robot framework
Page objects provide an additional layer of abstraction for test case creation. Using page objects results in easier maintenance of the tests.

PageObjectLibrary is a Robot Framework keyword library that makes it possible to use the Page Object pattern when testing web pages with the keyword based approach of robot framework. Page Object classes are implemented as standard robot keyword libraries. When you use PageObjectLibrary keywords to go to a page or assert you are on a specific page, the keyword will automatically load the library for that page and put it at the front of the library search order, guaranteeing that the Page Object keywords are available to your test case.

#### Writing a page object class
Page Objects are simple python classes that inherit from `PageObjectLibrary.PageObject`. There are only a couple of requirements for the class:

 1. The class should define a variable named `PAGE_TITLE`
 2. The class should define a variable named `PAGE_URL` which is a URI relative to the site root.

By inheriting from `PageObjectLibrary.PageObject`, methods have access to the following special object attributes:


1. `self.selib` : a reference to an instance of `SeleniumLibrary`. With this you can call any of the SeleniumLibrary keywords via their python method names (eg: `self.selib.input_text`)

2. `self.browser` : a reference to the webdriver object created when a browser was opened by `SeleniumLibrary`. With this you can bypass SeleniumLibrary and directly call all of the functions provided by the core selenium library.

3. `self.locator` : a wrapper around the `_locators dictionary` of the page. This dictionary can contain all of the locators used by the Page Object keywords. self.locators adds the ability to access the locators with dot notation rather than the slightly more verbose dictionary syntax (eg: `self.locator.username` vs `self._locators["username"]`.

The above tests can be easy to understand when written in gherkin format. Let's get familiar with gherkin syntax and how the test can be written in this format.

### Gherkin Syntax
Gherkin format focuses on describing a feature to be implemented using the "Given", "When", "Then", "And", and "But" keywords. Writing requirements in this manner makes tests easier to understand, specially for non-technical people, as natural language is used to describe the test cases. Moreover, this format focuses on a clear separation between test-setup, test-actions, and test-results.

Given < some initial state or preconditions >
When < the action taken which triggers the scenario >
Then < the expected outcome >

for e.g.
```
*** Settings ***
Documentation       Test for user login
Library             SeleniumLibrary
Library             PageObjectLibrary

Test Setup           Open test browser
Test Teardown        Close all test browsers

*** Variables ***
${SERVER}           localhost:8080
${ROOT}             http://${SERVER}/myApp
${BROWSER}          chrome
${SELENIUM_URL}     http://localhost:4444
${PLATFORM}         linux
${VERSION}          latest
${USERNAME}         admin
${PASSWORD}         password
${LOGIN_URL}        http://${SERVER}/myApp/login
${WELCOME_URL}      http://${SERVER}/myApp/welcome.html

*** Test Cases ***
Valid Login
  [Documentation]                                     Test valid login
  Given the user has browsed to the login page
  When the user enters the username                   ${USERNAME}
  And the user enters the password                    ${PASSWORD}
  And the user submits the credentials
  Then the current page should be  FilesPage
```
 For clear separations and abstraction layers, we make context files for the test steps. Let us now create a `contexts` directory where all the context files are located. For the login step, let us create a login context file `contexts/LoginContext.py`.

 Note that: Prefixes `Given`, `When`, `Then`, `And` and `But` are dropped when matching keywords are searched, if no match with the full name is found. This works for both user keywords and library keywords

```py
from robot.api.deco import keyword

from LoginPage import LoginPage


class LoginContext:
    loginPage = LoginPage()

    @keyword(name="the user enters the username '${USERNAME}'")
    def enter_username(self, username):
        self.loginPage.enter_username(username)

    @keyword(name="the user enters the password '${PASSWORD}'")
    def enter_password(self, password):
        self.loginPage.enter_password(password)

    @keyword(name="the user has browsed to the login page")
    def browse_to_login_page(self):
        self.loginPage.browse_to_page()

    @keyword(name="the user submits the credentials")
    def submit_credentials(self):
        self.loginPage.submit_credentials()
```
The login context file uses the methods of the login page. So, we must write every needed functions in the login page. Let us create a page objects directory 'page_objects' and then a login page 'page_objects/LoginPage'.

```py
from PageObjectLibrary import PageObject, PageObjectLibraryKeywords


class LoginPage(PageObject):
    PAGE_URL = "/myApp/login"
    PAGE_TITLE = "myApp"

    _locators = {
        "username": "id=user",
        "password": "id=password",
        "form_id": "login",
        "login_form_xpath": "//form[@name='%s']"
    }

    keywords = PageObjectLibraryKeywords()

    def browse_to_page(self):
        self.keywords.go_to_page('LoginPage')

    def enter_username(self, username):
        """Type the given text into the username field """
        self.selib.input_text(self.locator.username, username)

    def enter_password(self, password):
        """Type the given text into the password field"""
        self.selib.input_text(self.locator.password, password)

    def submit_credentials(self):
        """Clicks the submit button on the form
        For illustrative purposes, this uses the low level selenium
        functions for submitting the form
        """
        form = self.driver.find_element_by_xpath( self.locator.login_form_xpath % self.locator.form_id)
        form.submit()
```
We create all other context files and page objects as per requirements. All the methods and elements related to a certain page are included in a specific page object and its own context file. This makes tests easier to understand and maintain.

FilesPage can be created in a similar manner as follows:

```PY
from PageObjectLibrary import PageObject


class FilesPage(PageObject):
    PAGE_URL = "/index.php/apps/files/"
    PAGE_TITLE = "Files - myApp"
```

### Go to : https://github.com/JankariTech/robotBDDExample for example test cases.
