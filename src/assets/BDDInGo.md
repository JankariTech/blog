---
title: Demonstrating BDD (Behavior-driven development) in Go
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Feb 5, 2020
tags: testing, bdd, go, qa
banner: https://github.com/JankariTech/blog/blob/master/src/BDDInGo.png
seriesTitle: Behaviour Driven Development
episode: 1
---

In [Demonstrating TDD (Test-driven development) in Go](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0) I've written about TDD and this time I want to demonstrate BDD (Behavior-driven development) with Go.

I will not explain all principles of BDD upfront, but explain some of them as I use them in the example. You can read more about them here:
- ["Introducing BDD", by Dan North (2006)](http://blog.dannorth.net/introducing-bdd)
- [Wikipedia](https://en.wikipedia.org/wiki/Behavior-driven_development)
- ["The beginner's guide to BDD (behaviour-driven development)", By Konstantin Kudryashov, Alistair Stead, Dan North](https://inviqa.com/blog/bdd-guide)
- [Behaviour-Driven Development](https://cucumber.io/docs/bdd/)

If you have more good resources, please post them in the comment section.

## The basic idea
I'm a fan of explaining things with real examples, that's why in [Demonstrating TDD (Test-driven development) in Go](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0) I've created that small library to convert from Bikram Sambat (BS) (also called Vikram Samvat) dates to Gregorian dates and vice-versa. Now I want to use that library to create an API-driven service to do the conversion. (The project can be found on [github](https://github.com/JankariTech/bsDateServer))

One could now give that "requirement" to a developer and see what happens. With that kind of small project, chances are, something good will come out, but bad things might also happen:
- the API will be super-complex and over-engineered
- the API does the conversion, but does not handle errors correctly
- etc.

So there is a lot of potential for wasted resources, conflicts, misunderstandings etc. So it would be better to write down the requirements in more detail, because:

1. As customer you want your application to behave correctly (sometimes without knowing exactly what that means).
2. As developer your want to develop exactly what is requested and needed (to save time) and get paid afterwards.
3. As as QA-person, you want to know what you have to test, and you want to know what is a bug and what is a feature.

So basically the goal is to get all the stakeholders (there might be more than the listed 3) to communicate and agree on what should be the acceptable behavior of the application. And that is in a nutshell the idea of BDD: improve the communication between stakeholders so that everybody knows what is talked about.

But how to do that? The customer might think that the one-line explanation: "API to convert dates from BS to AD and vice-versa" is enough, the manager wants to write a contract and the developer says: "code is documentation enough".
A good way to bring everybody on the same page is to describe the features of an application using the Gherkin language. Its a semi-structured language, that is so simple a cucumber could understand.

## Who wants to achieve what and why?
In the project folder we create a new file called `bs-to-ad-conversion.feature`. Here we want to describe the feature to convert the dates in one direction. The description of every feature of the app is supposed to go into a separate file.

_Side note: there is always the discussion what is a "feature"? In our example: is the conversion in both directions one or two features? Is the error-handling a separate feature or a part of the conversion feature? If you are not sure, be practical and simply make sure the file does not get too long._

We start the feature file with a very general description of the feature:
```gherkin
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps
```

These lines are very important. They answer the question of WHO wants to achieve WHAT with that feature and WHY. If you don't know who will use that feature, why do you implement it? If there is nothing to achieve with that feature, you actually don't have a feature. And if there is no reason to use that feature, it doesn't have a business value. So if the stakeholders (developer, customer, manager, QA, etc.) cannot answer these 3 questions, nobody really should spend time and money to implement it.

## Scenarios
Every feature has different scenarios. A "add item to shopping basket"-feature in an online-shop could have scenarios like:
- adding item to the basket while user is logged in
- adding item to the basket while user is not logged in
- adding item to the basket when the card is empty
- adding item to the basket when there is already the same item in the basket
- adding multiple items to the basket at once
- etc.

In every scenario your app might behave differently. If that specific behavior in that scenario matters for one or more stakeholders, better describe it.

In Gherkin we have to start the scenario description with the `Scenario:` keyword and a short free-text sentence:

```gherkin
  Scenario: converting a valid BS date

  Scenario: converting an invalid BS date
```

## Given, When, Then
Now we want to describe the specific behavior of the app in that scenario. For that Gherkin provides 3 different keywords:
- **Given** - prerequisites for the scenario
- **When** - the action to be tested
- **Then** - the desired observable outcome

Additionally, there is **And**, if you have multiple of one of the above, you don't need to write
```gherkin
When doing A
When doing B
```

but you can use `And` (it just sounds and reads nicer)
 ```gherkin
 When doing A
 And doing B
 ```

For a complex application there will be most-likely some steps to bring the application into the state that you want to test (e.g. create users, navigate to a specific page, etc), for those prerequisites you should use the `Given` keyword.
For our app, I cannot really think of anything. So I skip over to the `When` keyword.

The `When` keyword is for the action (or multiple) you really want to test.
```gherkin
  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-13-01"
```

Now, what should happen in those specific scenarios? What is the observable outcome? Use the `Then` keyword to describe that (if there are different outcomes connect multiple `Then`s with `And`s)

```gherkin
  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"
```

So as pieces of our description we have:
1. features - one feature per file
2. scenarios - different ways that the feature should behave
3. steps - detailed description of every scenario. Every step starts with `Given`, `When` or `Then`

All these pieces have to be written in a natural language, that all stakeholders can understand. What that means in detail would be a whole own post. In our case the "customer", requested an API, so IMO using technical terms like "HTTP-response code" should be OK. If you describe a GUI, the descriptions should be probably even less technical. The bottom line is: use words that all understand. Remember: BDD is all about improving communication!


For more information about how to phrase the steps definitions see: https://cucumber.io/docs/gherkin/reference/

After specifying one feature (or even one scenario) the developer could start developing. In SCRUM-terms: one feature is one user-story, so you do all your agile development cycle with it. Create one or multiple, put them in sprints, work on them, test them, etc. The description is not only the ToDo list for the developer, but also the test-procedure for QA and the documentation.

## Test it automatically
We could stop there, but there is a great bonus-point: let's use these descriptions to run automatic tests.

For that we need software that interprets the Gherkin language and runs code that executes the tests. For Go there is the [godog package](https://github.com/cucumber/godog).

To install godog we fist have to create a simple `go.mod` file with the content
```golang
module github.com/JankariTech/bsDateServer

go 1.19
```

and then run

```shell
go get github.com/cucumber/godog@v0.12.6
```

(The version number `@v0.12.6` is optional, if it's not given the latest version will be installed. I set the version here to make sure this blog-post stays valid also when s.th. changes in godog)

We also, need the godog cli command to run our tests. Run the following command to add the godog cli to `$GOPATH/bin`

```shell
go install github.com/cucumber/godog/cmd/godog@v0.12.6
```

Now you should be able to run godog with `$GOPATH/bin/godog *.feature` and the output would be something like:

```gherkin
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"

2 scenarios (2 undefined)
6 steps (6 undefined)
281.282µs

You can implement step definitions for undefined steps with these snippets:

func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
	return godog.ErrPending
}

func theHTTPresponseCodeShouldBe(arg1 string) error {
	return godog.ErrPending
}

func theResponseContentShouldBe(arg1 string) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$`, aRequestIsSentToTheEndpoint)
	ctx.Step(`^the HTTP-response code should be "([^"]*)"$`, theHTTPresponseCodeShouldBe)
	ctx.Step(`^the response content should be "([^"]*)"$`, theResponseContentShouldBe)
}
```

Godog lists all the scenarios we want to run and tells us that it has no idea what to do with them, because we haven't implemented any of the steps. Now we actually need to write code to tell godog how to execute our scenarios.

For that create a file with the name `bsdateServer_test.go` and the content:

```go
package main

import (
    "github.com/cucumber/godog"
)

func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
	return godog.ErrPending
}

func theHTTPresponseCodeShouldBe(arg1 string) error {
	return godog.ErrPending
}

func theResponseContentShouldBe(arg1 string) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$`, aRequestIsSentToTheEndpoint)
	ctx.Step(`^the HTTP-response code should be "([^"]*)"$`, theHTTPresponseCodeShouldBe)
	ctx.Step(`^the response content should be "([^"]*)"$`, theResponseContentShouldBe)
}
```

In the `InitializeScenario` function we have the link between the human-readable Gherkin, and the function that the computer has to execute for that step. The output of `$GOPATH/bin/godog` now looks a bit different:
```gherkin
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:8 -> aRequestIsSentToTheEndpoint
      TODO: write pending definition
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:12 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:16 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:8 -> aRequestIsSentToTheEndpoint
      TODO: write pending definition
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:12 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:16 -> theResponseContentShouldBe

2 scenarios (2 pending)
6 steps (2 pending, 4 skipped)
576.1µs
```

Godog found the functions that correspond to every step, but those don't do anything yet, just returning an error.

Let's implement the first function to send the request:
```diff
index c8b0144..f7ee56d 100644
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -1,11 +1,26 @@
 package main

 import (
+    "fmt"
     "github.com/cucumber/godog"
+    "net/http"
+    "strings"
 )

-func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
-    return godog.ErrPending
+var host = "http://localhost:10000"
+var res *http.Response
+
+func aRequestIsSentToTheEndpoint(method, endpoint string) error {
+    var reader = strings.NewReader("")
+    var request, err = http.NewRequest(method, host+endpoint, reader)
+    if err != nil {
+        return fmt.Errorf("could not create request %s", err.Error())
+    }
+    res, err = http.DefaultClient.Do(request)
+    if err != nil {
+        return fmt.Errorf("could not send request %s", err.Error())
+    }
+    return nil
 }

 func theHTTPresponseCodeShouldBe(arg1 string) error {
```

Here we create a request and send it using the `net/http` package. The trick in godog is to return `nil` if everything goes well, that will make the step pass. If a step function returns something that implements the `error` interface the step will fail.

BTW: the `res` variable is defined outside the function because we need to access it from other steps also.

Running godog now gives us this result
```gherkin
...
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    could not send request Get "http://localhost:10000/ad-from-bs/2060-04-01": dial tcp 127.0.0.1:10000: connect: connection refused
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:31 -> theResponseContentShouldBe

...
```

It cannot connect to the server, because nothing is listening on that port. Let's change that. For a minimal implementation of a server waiting on the port put this code into `main.go` and run it with `go run main.go`
```go
package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func homePage(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Bikram Sambat Server")
}

func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/", homePage)
	log.Fatal(http.ListenAndServe(":10000", myRouter))
}

func main() {
	handleRequests()
}
```

Now we are a step further:
```gherkin
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
      TODO: write pending definition
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:31 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
      TODO: write pending definition
    And the response content should be "not a valid date"               # bsdateServer_test.go:31 -> theResponseContentShouldBe

2 scenarios (2 pending)
6 steps (2 passed, 2 pending, 2 skipped)
1.849695ms
```

The `When` step passed, it sent the request, but the first `Then` step failed as expected, because it's not implemented yet.

Let's do that:
```diff
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -3,6 +3,7 @@ package main
 import (
     "fmt"
     "github.com/cucumber/godog"
+    "io/ioutil"
     "net/http"
     "strings"
 )
@@ -23,16 +24,23 @@ func aRequestIsSentToTheEndpoint(method, endpoint string) error {
     return nil
 }

-func theHTTPresponseCodeShouldBe(arg1 string) error {
-    return godog.ErrPending
+func theHTTPresponseCodeShouldBe(expectedCode int) error {
+    if expectedCode != res.StatusCode {
+        return fmt.Errorf("status code not as expected! Expected '%d', got '%d'", expectedCode, res.StatusCode)
+    }
+    return nil
 }

-func theResponseContentShouldBe(arg1 string) error {
-    return godog.ErrPending
+func theResponseContentShouldBe(expectedContent string) error {
+    body, _ := ioutil.ReadAll(res.Body)
+    if expectedContent != string(body) {
+        return fmt.Errorf("status code not as expected! Expected '%s', got '%s'", expectedContent, string(body))
+    }
+    return nil
 }

 func InitializeScenario(ctx *godog.ScenarioContext) {
     ctx.Step(`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$`, aRequestIsSentToTheEndpoint)
-    ctx.Step(`^the HTTP-response code should be "([^"]*)"$`, theHTTPresponseCodeShouldBe)
+    ctx.Step(`^the HTTP-response code should be "(\d+)"$`, theHTTPresponseCodeShouldBe)
     ctx.Step(`^the response content should be "([^"]*)"$`, theResponseContentShouldBe)
 }
```

Here we simply get the status code and the result body and compare it with the expectation. If it does not match, return an error. Make sure you show good error messages, the goal is to direct the developer as much as possible to the problem. The clearer the message is the quicker the developer will be able to fix the issue. Remember: these tests will not only be used during the initial development but also in the future to prevent regressions.

The regular-expression change in the `FeatureContext` just makes sure that we only accept decimal numbers in that step.

Now the tests fail with:
```gherkin
...
  Scenario: converting a valid BS date # bs-to-ad-conversion.feature:6
    Then the HTTP-response code should be "200" # bs-to-ad-conversion.feature:8
      Error: status code not as expected! Expected '200', got '404'

  Scenario: converting an invalid BS date # bs-to-ad-conversion.feature:11
    Then the HTTP-response code should be "400" # bs-to-ad-conversion.feature:13
      Error: status code not as expected! Expected '400', got '404'

2 scenarios (2 failed)
6 steps (2 passed, 2 failed, 2 skipped)
1.766438ms
```

Why? Because the endpoint does not exist! The server returns 404. It's time to write the software itself!

Here are the changes in `main.go` to do a simple conversion:

```diff
index ae01ed0..06299b0 100644
--- a/main.go
+++ b/main.go
@@ -2,18 +2,34 @@ package main

 import (
        "fmt"
+       "github.com/JankariTech/GoBikramSambat"
        "github.com/gorilla/mux"
        "log"
        "net/http"
+       "strconv"
+       "strings"
 )

+func getAdFromBs(w http.ResponseWriter, r *http.Request) {
+       vars := mux.Vars(r)
+       dateString := vars["date"]
+       var splitedDate = strings.Split(dateString, "-")
+       day, _ := strconv.Atoi(splitedDate[2])
+       month, _ := strconv.Atoi(splitedDate[1])
+       year, _ := strconv.Atoi(splitedDate[0])
+       date, _ := bsdate.New(day, month, year)
+       gregorianDate, _ := date.GetGregorianDate()
+       fmt.Fprintf(w, gregorianDate.Format("2006-01-02"))
+}
+
 func handleRequests() {
        myRouter := mux.NewRouter().StrictSlash(true)
        myRouter.HandleFunc("/", homePage)
+       myRouter.HandleFunc("/ad-from-bs/{date}", getAdFromBs)
        log.Fatal(http.ListenAndServe(":10000", myRouter))
 }
```

Basically: split the incoming string, send it to the `GoBikramSambat` lib and return the formatted result.

And with that the first scenario passes:
```gherkin
...
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:34 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    could not send request Get "http://localhost:10000/ad-from-bs/60-13-01": EOF
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:34 -> theResponseContentShouldBe

--- Failed steps:

  Scenario: converting an invalid BS date # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bs-to-ad-conversion.feature:12
      Error: could not send request Get "http://localhost:10000/ad-from-bs/60-13-01": EOF


2 scenarios (1 passed, 1 failed)
6 steps (3 passed, 1 failed, 2 skipped)
2.035601ms
```

With a bit of error-handling we should be able to make the other one pass also.

```diff
index 06299b0..a62eaf6 100644
--- a/main.go
+++ b/main.go
@@ -21,7 +21,11 @@ func getAdFromBs(w http.ResponseWriter, r *http.Request) {
        day, _ := strconv.Atoi(splitedDate[2])
        month, _ := strconv.Atoi(splitedDate[1])
        year, _ := strconv.Atoi(splitedDate[0])
-       date, _ := bsdate.New(day, month, year)
+       date, err := bsdate.New(day, month, year)
+       if err != nil {
+               http.Error(w, err.Error(), http.StatusBadRequest)
+               return
+       }
        gregorianDate, _ := date.GetGregorianDate()
        fmt.Fprintf(w, gregorianDate.Format("2006-01-02"))
 }


index 3156498..16c48ab 100644
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -35,7 +35,7 @@ func theHTTPresponseCodeShouldBe(expectedCode int) error {

 func theResponseContentShouldBe(expectedContent string) error {
     body, _ := ioutil.ReadAll(res.Body)
-    if expectedContent != string(body) {
+    if expectedContent != strings.TrimSpace(string(body)) {
         return fmt.Errorf("status code not as expected! Expected '%s', got '%s'", expectedContent, string(body))
     }
     return nil
```

In `main.go` we now spit out an Error if the conversion does not work and in the tests we trim the body, because `http.Error` likes to send an `\n` at the end of the body.

Finally, the scenarios pass:
```gherkin
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:34 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:34 -> theResponseContentShouldBe

2 scenarios (2 passed)
6 steps (6 passed)
1.343415ms
```

## Examples
The scenarios we have written down are pretty limited, probably there are more requirements of the software. Specially there will be those that have not been spoken about. To reduce the size of the feature-file Gherkin has the `Examples:` keyword.

```diff
index 5a00814..18db1ed 100644
--- a/features/bs-to-ad-convertion.feature
+++ b/features/bs-to-ad-convertion.feature
@@ -3,12 +3,25 @@ Feature: convert dates from BS to AD using an API
   I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
   So that I have a simple way to convert BS to AD dates, that can be used in other apps

-  Scenario: converting a valid BS date
-  When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
+  Scenario Outline: converting a valid BS date
+    When a "GET" request is sent to the endpoint "/ad-from-bs/<bs-date>"
     Then the HTTP-response code should be "200"
-    And the response content should be "2003-07-17"
+    And the response content should be "<ad-date>"
+    Examples:
+      | bs-date    | ad-date    |
+      | 2060-04-01 | 2003-07-17 |
+      | 2040-01-01 | 1983-04-14 |
+      | 2040-12-30 | 1984-04-12 |
```

Instead of `Scenario` we have to use `Scenario Outline` and at the bottom of the Outline we add a table. The headings of the table are used as "variables" and the table rows are substituted into the steps e.g. `<bs-date>` becomes `2060-04-01`.
Godog will run a single scenario for every line in the examples table. That way you can very easily multiply out the test cases.

## Conclusion
1. Writing down the expected behaviors using the Gherkin language can improve the communication between the different stakeholders and with that increase customer satisfaction, productivity and the chances to make the project a success.
2. The feature descriptions become the requirement documentation.
3. Additionally, the same feature descriptions can be used to run automatic tests.

If you need help with setting up BDD or you want to outsource your test-development, please contact us:
- https://www.jankaritech.com/
- https://www.linkedin.com/company/jankaritech/
