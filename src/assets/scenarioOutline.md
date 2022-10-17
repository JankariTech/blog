---
title: Scenario Outline in a Gherkin Feature File
authorName: Jasmine Baral
authorAvatar: https://avatars.githubusercontent.com/u/40829116?v=4
authorLink: https://github.com/jasson99/
createdAt: Feb 20, 2020
tags: testing, cucumber, gherkin, bdd
banner: https://static.javatpoint.com/tutorial/cucumber/images/scenario-in-cucumber-testing.png
---

As we are familiar with the basic gherkin syntax such as `feature`, `scenario`, `background`, `given`, `when` and `then` steps already, let us discuss about the `Scenario Outline` used in a gherkin feature file.

### *Scenario Outline*

Let us start with a very simple feature where the remaining candies should be calculated based on the total candies and the candies consumed. However, there can be different scenarios for the different combinations of total candies, consumed candies, and the remaining candies.

```gherkin
 Scenario: calculate remaining candies when all candies are consumed
   Given I have 10 candies
   When I eat 10 candies
   Then I should have 0 candies remaining


 Scenario: calculate remaining candies when some candies are consumed
   Given I have 60 candies
   When I eat 23 candies
   Then I should have 37 candies remaining


 Scenario: calculate remaining candies when no candies are consumed
   Given I have 93 candies
   When I eat 0 candies
   Then I should have 93 candies remaining
```

It can be very time consuming to write repetitive scenarios with different permutations of data values. It can also be difficult for the reader to understand many seperate but similar scenarios. This can be improved by using the `scenario outline` and its example table, thus combining similar scenarios with different combinations of similar data values into one Scenario Outline. A Scenario Outline is always followed by an example table: `Examples`. The example table in scenario outline is used to combine multiple similar scenarios into a single scenario in the feature file. It provides one set of data per scenario. Each new row of the example table is run as a different scenario. The data values in single row of data are passed to the step definition at the run time of a scenario.

A scenario outline replaces variables with the value from the examples table. Each row in the examples table is considered to be a scenario.

In the scenario outline, the data values do not need to be hard coded in the step definition. Rather the values are replaced with the name of the parameter <parameter_name> itself.

In the above example of candies, if we observe closely, all three scenarios have the same statements, only the parameter value (total/consumed/remaining number of candies) is changing. This is where the significance of the scenario outline comes into the picture.

When we define a scenario using a scenario outline, we can specify a single test scenario for all the similar scenarios and then provide an example table at the end of the test scenario. The test scenario is always specified by `Scenario Outline` and is always followed by a table : `Examples`. This scenario will thus be executed as many times as the number of data inputs (data rows) provided in the examples table

```gherkin
 Scenario Outline: calculate remaining candies
   Given I have <total> candies
   When I eat <eaten> candies
   Then I should have <remaining> candies
   Examples:
     | total | eaten | remaining  |
     | 10    | 10    | 0          |
     | 60    | 23    | 37         |
     | 93    | 0     | 93         |
```

Now, let us continue with more realistic scenarios. The scenarios of user login with valid credentials (login for different valid users) can be implemented using Scenario Outline as follows:

```gherkin
 Scenario Outline: login with valid credentials
   Given a user has been created with email "<email>" and password "<password>"
   And the user has browsed to the login page
   When the user enters email "<email>" and password "<password>" in the login form
   And the user logs in
   Then the user should be redirected to the homepage
   Examples:
     | email            | password     |
     | user1@email.com  | firstpass    |
     | second@email.com | password12   |
     | test@gmail.com   | testpassword |
```

Here, each row of the example table provides the email and password used in the given and when steps. Even if this scenario looks like a single scenario, it runs 3 times in this example with different email and password set in the step definition, one at a time. The first scenario takes the first row of email and password and completes the test (hopefully passed). Then the 2nd scenario takes the data in the second row independent of other data present in other rows. After this is completed, it's turn for the 3rd row of data sets.

Let us be more clear. The above scenario outline consists of 3 similar scenarios which run uniquely with their own set of data. Let us see how it happens.

The first row of data acts as first scenario and runs as :


```gherkin
Given a user has been created with email "user1@email.com" and password "firstpass"
And the user has browsed to the login page
When the user enters email "user1@email.com" and password "firstpass" in the login form
And the user logs in
Then the user should be redirected to the homepage
```


Similarly, the next two scenarios run as below respectively.

```gherkin
Given a user has been created with email "second@email.com" and password "password12"
And the user has browsed to the login page
When the user enters email "second@email.com" and password "password12" in the login form
And the user logs in
Then the user should be redirected to the homepage
```

```gherkin
Given a user has been created with email "test@gmail.com" and password "testpassword"
And the user has browsed to the login page
When the user enters email "test@gmail.com" and password "testpassword" in the login form
And the user logs in
Then the user should be redirected to the homepage
```

To sum up, when there are cases where the scenarios are similar with same statements but with varying data values as parameters, it is advisable to use Scenario Outline with different sets of values provided through the examples table.
