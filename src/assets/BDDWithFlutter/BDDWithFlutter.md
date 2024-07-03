---
title: BDD (Behavior Driven Development) with Flutter
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: June 3, 2020
tags: bdd, testing, flutter, dart
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
seriesTitle: Behaviour Driven Development
episode: 2
---

This tutorial will first show how to test a Flutter app using the [Gherkin](https://cucumber.io/docs/gherkin/reference/) language and in the second part walk through an example of BDD (Behavior Driven Development) in the same app.

Flutter uses different types of tests [(unit, widget, integration)](https://flutter.dev/docs/testing/overview). You should have all types of tests in your app, most of your tests should be unit tests, less widget and a few integration tests. The [test pyramid](https://martinfowler.com/bliki/TestPyramid.html) explains the principle well (using different words for the test-types).

In this tutorial, I want to help you to start with integration tests but go a step further than the description in the [Flutter documentation](https://flutter.dev/docs/testing#integration-tests) and use the Gherkin language to describe the expected behavior.
The basic idea behind Gherkin is to have a semi-structured language to be able to define the expected behaviour and requirements in a way that all stakeholders of the project (customer, management, developer, QA, etc.) understand them. Using Gherkin helps to reduce misunderstandings, wasted resources and conflicts by improving communication. Additionally, you get a documentation of your project, and finally you can use the Gherkin files to run automated tests.

If you write the Gherkin files before you write the code, you have reached the final level. This is called BDD!

Here are some readings about BDD and Gherkin:
- [Introducing BDD](https://dannorth.net/introducing-bdd/), by Dan North (2006)
- [Wikipedia article on BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
- [The beginner's guide to BDD (behaviour-driven development)](https://inviqa.com/blog/bdd-guide), by Konstantin Kudryashov, Alistair Stead, Dan North (2015)
- [Behaviour-Driven Development](https://cucumber.io/docs/bdd/)

But enough theory, lets get our hands dirty. You can find all the code of this tutorial [here](https://github.com/JankariTech/flutterBDDexample).

## Feature Files

To start, you should install the Flutter tools stack and create a Flutter test-drive app as explained in the [get-started document](https://flutter.dev/docs/get-started/test-drive?tab=androidstudio).

Inside the app folder create a folder called `test_driver` and inside another one called `features`. In `features` we will place all the Gherkin descriptions of the expected app behavior. So create here a file called: `increment_counter.feature`

We start the feature file with a very general description of the feature:
```gherkin
Feature: Increment Counter

  As the good shepherd
  I want to be able to count my sheep
  So that I notice if one is missing
```

The first line is just a title of the feature; the other three lines should answer the questions [Who wants to achieve what and why with this particular feature](https://www.bibleserver.com/ESV/Luke15%3A4). If you cannot answer those questions for a particular feature of your app, then you should not implement that feature; there is no use case for it.

Next, we have to describe the specific behavior of the app. For that, Gherkin provides 3 different keywords:
- **Given** - prerequisites for the scenario
- **When** - the action to be tested
- **Then** - the desired observable outcome

Add a scenario to the feature file.
```gherkin
Scenario: Counter increases when the button is pressed
  Given the counter is set to "0"
  When I tap the "increment" button 10 times
  Then I expect the "counter" to be "10"
```

Later we will add more scenarios to the app, the feature might be the same, but in different scenarios it might have to react differently.

Now we can start the app and use our behavior description to check if it works as it should.

## Test-automation

Running manual tests from a description is nice, but not enough for us, we want to save time and reduce possible mistakes by running the tests automatically.

To interpret the Gherkin file and interact with the app we are using the `flutter_gherkin` package. Install it by placing `flutter_gherkin:` in the `pubspec.yaml` inside the `dev_depencencies` section as shown below:
```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_gherkin:
```

and run `flutter pub get`.

Now we also need some glue-code and configuration.

Inside `test_driver` create a file called `app.dart` with the content
```dart
import '../lib/main.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_driver/driver_extension.dart';

void main() {
  enableFlutterDriverExtension();
  runApp(MyApp());
}
```

and a file called `app_test.dart` with the content:
```dart
import 'dart:async';
import 'package:flutter_gherkin/flutter_gherkin.dart';
import 'package:gherkin/gherkin.dart';
import 'package:glob/glob.dart';

Future<void> main() {
  final config = FlutterTestConfiguration()
    ..features = [Glob(r"test_driver/features/**.feature")]
    ..reporters = [
      ProgressReporter(),
      TestRunSummaryReporter(),
      JsonReporter(path: './report.json')
    ]
    ..stepDefinitions = []
    ..customStepParameterDefinitions = []
    ..restartAppBetweenScenarios = true
    ..targetAppPath = "test_driver/app.dart";
  return GherkinRunner().execute(config);
}
```

That was all we need to do for the installation, now we have to tell the test-software what actually to do with our Given, When and Then steps.
The library gives us some built-in steps that should work "out-of-the-box" but others we need to implement ourselves.
In our example, the Then step is a built-in step but the Given and the When step have to be implemented. So let's do that. Inside `test_driver` create a folder called `steps` and in there create a file called `tap_button_n_times_step.dart` with the content:
```dart
import 'package:flutter_driver/flutter_driver.dart';
import 'package:flutter_gherkin/flutter_gherkin.dart';
import 'package:gherkin/gherkin.dart';

class GivenCounterIsSetTo extends Given1WithWorld<String, FlutterWorld> {
  @override
  RegExp get pattern => RegExp(r"the counter is set to {string}");

  @override
  Future<void> executeStep(String expectedCounter) async {
    final locator = find.byValueKey("counter");
    final actualCount = await FlutterDriverUtils.getText(world.driver!, locator);
    expectMatch(actualCount, expectedCounter);
  }
}

class TapButtonNTimesStep extends When2WithWorld<String, int, FlutterWorld> {
  @override
  RegExp get pattern => RegExp(r"I tap the {string} button {int} times");

  @override
  Future<void> executeStep(String buttonKey, int amount) async {
    final locator = find.byValueKey(buttonKey);
    for (var i = 0; i < amount; i += 1) {
      await FlutterDriverUtils.tap(world.driver, locator, timeout: timeout);
    }
  }
}
```

In this file we have two classes, one for every step we want to implement. Every class extends an abstract class. The Given step extends a class which name starts with `Given` and analogously the When step extends a class which name starts with `When`. Then there is a number in the class name. That number tells how many parameters we can pass from the step to the implementation. In `Given the counter is set to "0"` there is one parameter (the `0`) and in `When I tap the "increment" button 10 times` there are two parameters (the button name, and the number of taps).

The last part of the class to extend is `WithWorld` that gives us access to the Flutter context.

Next there is a variable called `pattern` with a regular expression, that is used to associate the step in the feature file with the class.

Last there is a function `executeStep`. This function receives the parameters from the feature file and finally does all the hard work.
In both cases it finds the element on the screen we want to interact with by using the `find.byValueKey()` method and then in the case of the Given step, gets the text of the element and checks if its as expected or, in the case of the When step, taps the button.

Similarly, our Then step (remember it's a built-in step) will use the same `find.byValueKey()` method to get the value and assert the content. If you are interested in the implementation, the step is defined in `flutter_gherkin-<version>/lib/src/flutter/steps/then_expect_element_to_have_value_step.dart`.

The issue now is that the example code does not have any keys defined in the widgets. The test-code would not be able to locate the elements.
So edit the `main.dart` file and add `key: Key('counter'),` to the counter widget and `key: Key('increment'),` to the button widget.

You could also use `find.byTooltip`, `find.Type` or `find.bySemanticsLabel`.

Next the new .dart file with the step definitions need to be imported in `app_test.dart`:
`import 'steps/tap_button_n_times_step.dart';`

Additionally, every class we add in the step definitions we also have to register in the `stepDefinitions` array in `app_test.dart`, the line has to be:
`..stepDefinitions = [TapButtonNTimesStep(), GivenCounterIsSetTo()]`

Remember: The step `Then I expect the "counter" to be "10"` is a built-in-step. So we don't need to write any code for it, it will look for a text-widget with the key `counter` and assert its value.

## run the tests
1. connect your phone or start the emulator
2. run `dart test_driver/app_test.dart`

After a while, you should see output like:
```console
Running scenario: Counter increases when the button is pressed # ./test_driver/features/increment_counter.feature:5
   √ Given the counter is set to "0" # ./test_driver/features/increment_counter.feature:6 took 146ms
   √ When I tap the "increment" button 10 times # ./test_driver/features/increment_counter.feature:7 took 6420ms
   √ Then I expect the "counter" to be "10" # ./test_driver/features/increment_counter.feature:8 took 72ms
PASSED: Scenario Counter increases when the button is pressed # ./test_driver/features/increment_counter.feature:5
Restarting Flutter app under test
1 scenario (1 passed)
3 steps (3 passed)
0:00:16.767000
```

and the app working on the phone screen.

![first test run](/src/assets/BDDWithFlutter/images/flutter-run1.gif)

## BDD (this time for real)

We know now how to write feature files and how to run automated tests from them, but that hasn't been BDD yet. We have only written a test for an existing feature in the app. To do BDD, we have first to write the expected behavior and then start coding.

### 1. write down the expected behaviour

Let's say we not only want to have a button to increment the counter, but also be able to decrement it. So in `features` create a file called `decrement_counter.feature` with this content:

```gherkin
Feature: Decrement Counter
  As the good shepherd
  I want to be able to decrement the count of my sheep when one is lost
  So that I can have extra joy incrementing the counter when I find the lost sheep

  Scenario: Counter decreases when the (-) button is pressed
    Given the counter is set to "10"
    When I tap the "decrement" button 1 time
    Then I expect the "counter" to be "9"
```

Trying to run this test, we will have multiple issues:
1. the `Given` step only asserts the counter, but does not set it to a specific value
2. the regex will not match the `When` step because it says `time` and not `times`
3. there is no functionality and no button to decrement the counter

### 2. make the tests pass

For the first issue, we would need to pre-set the counter with a value, but as we are doing end-to-end tests and acting as a user, the only way for the user to get the counter up to a specific value is to press the (+) button. Our test-code will do the same. (Side note: that will take time during test-execution, the faster option would be to have a back-channel to pre-set the value e.g. `Data Handlers`, but I could not make it work).

So let's refactor our step definition, so that the Given step pre-sets the counter to the expected value:
```diff
index e4eea51..e2e1a38 100644
--- a/myapp/test_driver/steps/tap_button_n_times_step.dart
+++ b/myapp/test_driver/steps/tap_button_n_times_step.dart
@@ -8,6 +8,7 @@ class GivenCounterIsSetTo extends Given1WithWorld<String, FlutterWorld> {

   @override
   Future<void> executeStep(String expectedCounter) async {
+    await tapButton(world, timeout, "increment", int.parse(expectedCounter));
     final locator = find.byValueKey("counter");
     final actualCount = await FlutterDriverUtils.getText(world.driver, locator);
     expectMatch(actualCount, expectedCounter);
@@ -20,9 +21,13 @@ class TapButtonNTimesStep extends When2WithWorld<String, int, FlutterWorld> {

   @override
   Future<void> executeStep(String buttonKey, int amount) async {
-    final locator = find.byValueKey(buttonKey);
-    for (var i = 0; i < amount; i += 1) {
-      await FlutterDriverUtils.tap(world.driver, locator, timeout: timeout);
-    }
+    await tapButton(world, timeout, buttonKey, amount);
+  }
+}
+
+Future<void> tapButton(FlutterWorld world, Duration timeout, String buttonKey, int amount) async {
 +  final locator = find.byValueKey(buttonKey);
 +  for (var i = 0; i < amount; i += 1) {
 +    await FlutterDriverUtils.tap(world.driver, locator, timeout: timeout);
    }
```

The second issue should be fixed easily with some regex-magic. Just place the `s` of `times` in a non-capturing regex group:
`RegExp get pattern => RegExp(r"I tap the {string} button {int} time(?:s|)");`
Non-capturing because a normal group would be passed as argument to `TapButtonNTimesStep`.

To fix the last issue, we actually need to implement a new functionality in the app. We need a decrement button in `main.dart`.

```diff
index 8795daa..068f558 100644
--- a/myapp/lib/main.dart
+++ b/myapp/lib/main.dart
@@ -63,6 +63,12 @@ class _MyHomePageState extends State<MyHomePage> {
     });
   }

+  void _decrementCounter() {
+    setState(() {
+      _counter--;
+    });
+  }
+
   @override
   Widget build(BuildContext context) {
     // This method is rerun every time setState is called, for instance as done
@@ -95,7 +101,7 @@ class _MyHomePageState extends State<MyHomePage> {
           // center the children vertically; the main axis here is the vertical
           // axis because Columns are vertical (the cross axis would be
           // horizontal).
-          mainAxisAlignment: MainAxisAlignment.center,
+          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
           children: <Widget>[
             Text(
               'You have pushed the button this many times:',
@@ -105,15 +111,28 @@ class _MyHomePageState extends State<MyHomePage> {
               key: Key('counter'),
               style: Theme.of(context).textTheme.headline4,
             ),
+            Row(
+              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
+                children: <Widget>[
+                  FloatingActionButton(
+                    onPressed: _decrementCounter,
+                    key: Key('decrement'),
+                    tooltip: 'decrement',
+                    child: Icon(Icons.remove),
+                  ),
+                  FloatingActionButton(
+                    // Provide a Key to this button. This allows finding this
+                    // specific button inside the test suite, and tapping it.
+                    key: Key('increment'),
+                    onPressed: _incrementCounter,
+                    tooltip: 'Increment',
+                    child: Icon(Icons.add),
+                  ),
+                ]
+            )
           ],
         ),
       ),
-      floatingActionButton: FloatingActionButton(
-        onPressed: _incrementCounter,
-        key: Key('increment'),
-        tooltip: 'Increment',
```

Now the tests should pass:

```console
Running scenario: Counter decreases when the (-) button is pressed # ./test_driver/features/decrement_counter.feature:5
   √ Given the counter is set to "10" # ./test_driver/features/decrement_counter.feature:6 took 2877ms
   √ When I tap the "decrement" button 1 time # ./test_driver/features/decrement_counter.feature:7 took 255ms
   √ Then I expect the "counter" to be "9" # ./test_driver/features/decrement_counter.feature:8 took 43ms
PASSED: Scenario Counter decreases when the (-) button is pressed # ./test_driver/features/decrement_counter.feature:5
Restarting Flutter app under test
...
Running scenario: Counter increases when the button is pressed # ./test_driver/features/increment_counter.feature:5
   √ Given the counter is set to "0" # ./test_driver/features/increment_counter.feature:6 took 46ms
   √ When I tap the "increment" button 10 times # ./test_driver/features/increment_counter.feature:7 took 2835ms
   √ Then I expect the "counter" to be "10" # ./test_driver/features/increment_counter.feature:8 took 84ms
PASSED: Scenario Counter increases when the button is pressed # ./test_driver/features/increment_counter.feature:5
Restarting Flutter app under test
2 scenarios (2 passed)
6 steps (6 passed)
0:00:22.451000
```

### 3. multiply the scenarios by using an example table
Now we might want to test more cases than only tapping the (-) button once. For that we can just copy and paste the existing scenario, or more elegantly we add an example table:
```gherkin
Scenario Outline: Counter decreases when the (-) button is pressed
  Given the counter is set to "<initial-counter>"
  When I tap the "decrement" button <decrement> time
  Then I expect the "counter" to be "<final-counter>"
  Examples:
    | initial-counter | decrement | final-counter |
    | 10              | 1         | 9             |
    | 10              | 9         | 1             |
    | 3               | 3         | 0             |
```

This will run the same scenario three different times with the values in the table substituted into the steps.

```console
Running scenario: Counter decreases when the (-) button is pressed (Example 1) # ./test_driver/features/decrement_counter.feature:5
   √ Given the counter is set to "10" # ./test_driver/features/decrement_counter.feature:6 took 2658ms
   √ When I tap the "decrement" button 1 time # ./test_driver/features/decrement_counter.feature:7 took 243ms
   √ Then I expect the "counter" to be "9" # ./test_driver/features/decrement_counter.feature:8 took 60ms
PASSED: Scenario Counter decreases when the (-) button is pressed (Example 1) # ./test_driver/features/decrement_counter.feature:5

...

Running scenario: Counter decreases when the (-) button is pressed (Example 2) # ./test_driver/features/decrement_counter.feature:5
   √ Given the counter is set to "10" # ./test_driver/features/decrement_counter.feature:6 took 3325ms
   √ When I tap the "decrement" button 9 time # ./test_driver/features/decrement_counter.feature:7 took 2457ms
   √ Then I expect the "counter" to be "1" # ./test_driver/features/decrement_counter.feature:8 took 25ms
PASSED: Scenario Counter decreases when the (-) button is pressed (Example 2) # ./test_driver/features/decrement_counter.feature:5

...

Running scenario: Counter decreases when the (-) button is pressed (Example 3) # ./test_driver/features/decrement_counter.feature:5
   √ Given the counter is set to "3" # ./test_driver/features/decrement_counter.feature:6 took 878ms
   √ When I tap the "decrement" button 3 time # ./test_driver/features/decrement_counter.feature:7 took 877ms
   √ Then I expect the "counter" to be "0" # ./test_driver/features/decrement_counter.feature:8 took 63ms
PASSED: Scenario Counter decreases when the (-) button is pressed (Example 3) # ./test_driver/features/decrement_counter.feature:5
```

### 4. repeat

What about negative values? If a shepherd is using this app to count the sheep, there is no point having a negative counter. To say it in Gherkin:
```gherkin
Scenario: Counter should not be negative
  Given the counter is set to "0"
  When I tap the "decrement" button 1 time
  Then I expect the "counter" to be "0"
```

You also could add that to the previous table, but I would argue that it is another requirement, and it's easier to understand the feature file if it's written out in a separate Scenario.

Running this test fails with:

```console
 × Then I expect the "counter" to be "0" # ./test_driver/features/decrement_counter.feature:18 took 97ms
    Expected: '0'
Actual: '-1'
 Which: is different.
        Expected: 0
          Actual: -1
                  ^
         Differ at offset 0
```

The counter becomes negative. Let's fix it:

```diff
index 068f558..5e0d8d0 100644
--- a/myapp/lib/main.dart
+++ b/myapp/lib/main.dart
@@ -65,7 +65,9 @@ class _MyHomePageState extends State<MyHomePage> {

   void _decrementCounter() {
     setState(() {
-      _counter--;
+      if (_counter > 0) {
+        _counter--;
+      }
     });
   }
```

## Conclusion

You have seen how to write Gherkin files and how to run them as automated tests for a Flutter application.
I personally find flutter_gherkin a bit more complicated than other BDD frameworks, but it's possible, and I believe using BDD will improve the quality of your project greatly.

If you need any help with the test-coverage of your app, BDD or other test-related topics, please contact us [@JankariTech](https://www.jankaritech.com)
