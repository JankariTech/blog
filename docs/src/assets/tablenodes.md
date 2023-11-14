---
title: Datatables used in a Gherkin Feature File
authorName: Jasmine Baral
authorAvatar: https://avatars.githubusercontent.com/u/40829116?v=4
authorLink: https://github.com/jasson99/
createdAt: Feb 20, 2020
tags: testing, cucumber, gherkin, bdd
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
---

As we are familiar with the basic gherkin syntax such as `feature`, `scenario`, `Scenario Outline`, `background`, `given`, `when` and `then` steps already, let us discuss the `table` or `tablenodes` used in the steps of a gherkin feature file.

## Tables

`Tables` or `tablenodes` or `Datatables` are used for specifying a larger data set as an argument in the steps of a scenario in a feature file. These tables are handy for passing a list of values to a step definition. The data tables are passed to the step definition of a specific step as its last argument. Let us understand with the help of an example below.

#### A scenario for logging in without using a data table

```gherkin
 Scenario: login with valid credentials
   Given a user has been created with email "user@email.com" and username "user" and password "password"
   And the user has browsed to the login page
   When the user enters email "user@email.com" and username "user" and password "password" in the login form
   And the user logs in
   Then the user should be redirected to the homepage
```

There are cases where a large amount of data needs to be set in the steps. It can be done using a number of "ands" in the step text as shown in the example above. However, good practice would be to use data tables to provide the data.

#### A scenario for logging in using a data table

 ```gherkin
  Scenario: login with valid credentials
    Given a user has been created with the following details:
       | email          | username  | password |
       | user@email.com | user      | password |
    And the user has browsed to the login page
    When the user enters the following details in the login form:
       | email          | username  | password |
       | user@email.com | user      | password |
    And the user logs in
    Then the user should be redirected to the homepage
```

Please do not confuse data tables with the example table used in a scenario outline. Even if they look alike, they have completely different purposes. Please refer to this blog to learn more about the `Scenario Outline`: `https://dev.to/jankaritech/scenario-outline-in-gherkin-feature-file-16jh`

### *Data tables*

Unlike the examples table, a table node provides all the data in the data table at once, in the specific step where the table is provided.

Let us look at another example of a data table. To be more clear about its significance, let us first write a scenario without using a data table as below.

```gherkin
Scenario: view and delete files
  Given user "testuser" has been created
  And user "testuser" has logged in
  When the user browses to the files page
  Then file "myCollegeProject" should be listed
  And file "interviewQuestions" should be listed
  And file "picnicCollections" should be listed
  And file "presentation" should be listed
  When the user deletes file "myCollegeProject"
  And the user deletes file "interviewQuestions"
  Then file "myCollegeProject" should not be listed
  And file "interviewQuestions" should not be listed
  But file "picnicCollection" should be listed
  And file "presentation" should be listed
```

When observed closely, we can see that the listing of several files, continuous deletion of several files, non-listing of deleted files and listing of non-deleted files has been written using several repetitive steps. The steps seem difficult to maintain this way. Moreover, more effort is required to understand the scenario when reading it. To improve this, we can use the data tables. The example below illustrates the use of data tables in the steps where multiple data are to be passed at once. For example, multiple files are to be listed, multiple files are to be deleted, and again multiple files are expected not to be listed and to be listed respectively.
```gherkin
 Scenario: view and delete files
   Given user "testuser" has been created
   And user "testuser" has logged in
   When the user browses to the files page
   Then the following files should be listed:
      | files              |
      | myCollegeProject   |
      | interviewQuestions |
      | picnicCollections  |
      | presentation       |
   When the user deletes the following files
      | files              |
      | myCollegeProject   |
      | interviewQuestions |
   Then the following files should not be listed:
      | files              |
      | myCollegeProject   |
      | interviewQuestions |
   But the following files should be listed:
      | files              |
      | picnicCollections  |
      | presentation       |
```

The data set provided using the data table should be hashed in the step definition of the particular steps in order to transform the cucumber data table into either an array of data or object.

 for example:
 In nightwatch, to transform a cucumber data table to an array, we use `hashes`
```js
 When('the user deletes the following files', (dataTable) => {
  const filesToDelete = dataTable.hashes()
  console.log(filesToDelete);
  /* It returns :
  [ {files: 'myCollegeProject'},
    {files: 'interviewQuestions'} ]
  */

  for (const file in filesToDelete) {
    this.delete(file)
  }
})
```
Now, to transform a cucumber data table to an object, we use `rowsHash`. However, rowsHash can only be called on a data table where all rows have `exactly two columns`.

for example:
```gherkin
When the user sets the price for the following items
   | book      | 500 |
   | sharpener | 30  |
   | pencil    | 15  |
```

The step definition for this step can parse the data table using `rowsHash` as follows:

```js
When('the user sets the price for the following items', (dataTable) => {
  const priceOfItems = dataTable.rowsHash()
  console.log(priceOfItems)
    /* It returns :
    { book : '500',
      sharpener : '30',
      pencil : '15' }
    */
})
```
Let us see what happens if we use `hashes` for this example.
```js
When('the user sets the price for the following items', (dataTable) => {
  const priceOfItems = dataTable.hashes()
  console.log(priceOfItems)
   /* It returns :
   [ { book : 'sharpener', '500' : '30' },
     { book : 'pencil', '500' : '15'} ]
   */
})
```

However, if we provide data in the steps as follows, then `hashes` can be used. For example:
```gherkin
When the user sets the price for the following items
   | item      | price |
   | book      | 500   |
   | sharpener | 30    |
   | pencil    | 15    |
```
```js
When('the user sets the price for the following items', (dataTable) => {
  const priceOfItems = dataTable.hashes()
  console.log(priceOfItems)
   /* It returns :
   [ { item : 'book', price : '500' },
     { item : 'sharpener', price : '30' },
     { item : 'pencil', price : '15'} ]
   */
})
```


 ### Combination
It is also possible to combine data tables with a scenario outline as well when needed. Let us see an example below:
```gherkin
Scenario Outline: User tries to signup with improper combination of password
   Given the user has browsed to the signup page
   When the user tries to signup entering the following details
      | email           |  william@xyz.com   |
      | password        | <Password>         |
      | confirmPassword | <ConfirmPassword>  |
   Then an error message "<validation>" should be shown above the "password" field
   Examples:
      | Password    | ConfirmPassword  | validation                         |
      | 234567569   | 234567569        | This password is entirely numeric  |
      | 123456789   | 123456789        | This password is too common.       |
      | abcde       | abcde            | This password is too short.        |
```

The values in the examples table get substituted into the steps which require the parameter values. The substitution takes place one row at a time. The values from the data table are passed to its step definition at once. For the above example, since there are 3 data rows in the `examples table`, this scenario runs thrice with a specific combination of data values as provided in the example table. Let us be clear about how the above example executes.

In the first scenario, a set of data is used from the first row of the examples table, as below.

```gherkin
Given the user has browsed to the signup page
When the user tries to signup entering the following details
    | email           | william@xyz.com    |
    | password        | 234567569          |
    | confirmPassword | 234567569          |
Then an error message "This password is entirely numeric" should be shown above the "password" field
```

For the step definition of a when step, the data table is parsed as follows:

```js
When('the user tries to signup entering the following details', (dataTable) => {
const userDetails = dataTable.rowsHash()
  /* It returns: {
    email : 'william@xyz.com',
    password : '234567569',
    confirmPassword : '234567569'
  } */

  return client.setValue(emailField, userDetails['email'])
    .setValue(passwordField, userDetails['password'])
    .setValue(confirmPasswordField, userDetail['confirmPassword'])
    .click(signupButton)
})
```

In the next run of the scenario, the next single row of data is used as follows.

```gherkin
Given the user has browsed to the signup page
When the user tries to signup entering the following details
   | email           | william@xyz.com    |
   | password        | 123456789          |
   | confirmPassword | 123456789          |
Then an error message "This password is too common" should be shown above the "password" field
```

Similarly, the third run of the scenario uses the third row of the examples table as follows.

```gherkin
Given the user has browsed to the signup page
When the user tries to signup entering the following details
   | email           | william@xyz.com    |
   | password        | abcde              |
   | confirmPassword | abcde              |
Then an error message "This password is too short" should be shown above the "password" field
```
