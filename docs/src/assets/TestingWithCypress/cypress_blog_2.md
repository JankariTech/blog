---
title: Writing Tests
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: testing, javascript, automation, cypress
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--wD1Dk_BA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/472k6ih1n456rtvn4xb3.png
seriesTitle: E2E Testing with Cypress
episode: 2
---

## Setting up test

There are no servers, drivers, or any other dependencies to install or configure. You can write your first passing test in seconds.

## Add a test file

Assuming you've successfully installed the Test Runner and opened the Cypress application, now it's time to write our first test. We are going to:

1. Create a `sample_spec.js` file.
2. Watch Cypress update the list of specs
3. Launch the Cypress Test Runner

Let’s create a new file in the cypress/integration folder that was created for us:

```sh
touch {your_project}/cypress/integration/sample_spec.js
```

Once we’ve created that file, we should see the Cypress Test Runner immediately display it in the list of Integration Tests. Cypress monitors your spec files for any changes and automatically displays any changes.

Even though we haven’t written any tests yet - that’s okay - let’s click on `sample_spec.js` and watch Cypress launch your browser.

We are now officially in the Cypress Test Runner. This is where we will spend the majority of our time testing.

>**Notice:** Cypress displays the message that it couldn't find any tests. This is normal - we haven’t written any tests! Sometimes you’ll also see this message if there was an error parsing your test file. You can always open your `Dev Tools` to inspect the Console for any syntax or parsing errors that prevented Cypress from reading your tests.

![No tests Found!][noTestsFound]

## Add your test

### Let's add our first passing test

Open up your favorite `IDE` and add the code below to our `sample_spec.js` test file.

```js
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
```

Once you save this file you should see the browser reload.

Although it does not do anything useful, this is our first passing test! ✅

Over in the Command Log you’ll see Cypress display the suite, the test and your first assertion (which should be passing in green).

### Now let’s write our first failing test.

```js
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})
```

Once you save again, you’ll see Cypress display the failing test in red since `true` does not equal `false`.

Cypress also displays the `stack trace` and the `code frame` where the assertion failed (when available). You can click on the blue `file` link to open the file where the error occurred in your preferred file opener.

Cypress provides a nice `Test Runner` that gives you a visual structure of `suites`, `tests`, and `assertions`.

## Dig Deeper Into Cypress World

### Writing and Organizing Tests

#### Folder Structure

After adding a new project, Cypress will automatically scaffold out a suggested folder structure. All test artifacts are wrapped inside a folder named `cypress`. See in detail [here][cypressFolderStructure] but these are always configurable. You can modify the folder configuration in your configuration file.

##### Types

Generally two types of files are used inside cypress.

- `Fixtures`:

  These `JSON` fixture files are used as external pieces of static data that can be used by your test. It is placed in `cypress/fixtures` by default, but can be configured to another directory.

- `TestFiles`:

  The actual test files are located in `cypress/integration` by default, but as always, it is configurable. Test files may be written as: `.js`, `.jsx`, `.coffee`, `.cjsx`.

#### Basic Test Syntax

```js
describe(name, config, fn)
context(name, config, fn)
it(name, config, fn)
specify(name, config, fn)
```

#### Other Artifacts

- You can always tweak your test with `before` and `after` [hooks][testHooksInCypress].

  ```
  beforeEach(() => {
  	// root-level hook
  	// runs before every test
  })
  describe("Hooks", () => {
  	before(() => {}) // runs once before all tests in the block
  	beforeEach(() => {}) // runs before each test in the block
  	afterEach(() => {}) // runs after each test in the block
  	after(() => {}) // runs once after all tests in the block
  })
  ```



- You can run a specified `suite` or `test`. [Excluding and including tests][excludeIncludeTest] is made easier. To skip a specified suite or test, append `.skip()` to the function. All nested suites will also be skipped.

  ```js
  it.skip('returns "fizz" when number is multiple of 3', () => {
    numsExpectedToEq([9, 12, 18], 'fizz')
  })
  ```



### Cypress Commands

#### Querying Elements

If you’ve used jQuery before, you may be used to querying for elements like this:

```js
$('.my-selector')
```

In Cypress, querying elements is the same:

```js
cy.get('.my-selector')
```

In fact, Cypress bundles jQuery and exposes many of its DOM traversal methods to you so you can work with complex HTML structures with ease using APIs you’re already familiar with.

```js
// Each method is equivalent to its jQuery counterpart. Use what you know!
cy.get('#main-content')
  .find('.article')
  .children('img[src^="/static"]')
  .first()
```

> Interested in the best practices for selecting elements? [Read here][selectingElementsInCypress]

Cypress wraps all DOM queries with robust retry-and-timeout logic that better suits how real web apps work. We trade a minor change in how we find DOM elements for a major stability upgrade to all of our tests. Banishing flake for good!

In Cypress, when you want to interact with a DOM element directly, call `.then()` with a callback function that receives the element as its first argument. When you want to skip the retry-and-timeout functionality entirely and perform traditional synchronous work, use `Cypress.$`!

```js
cy
  // cy.get() looks for '#element-does-not-exist', repeating the query until...
  // ...it times out without finding the element.
  // Cypress halts and fails the test.
  .get('#element-does-not-exist')

  // ...this code is never run...
  .then(($myElement) => {
    doSomething($myElement)
  })
```

##### When Elements Are Missing

Cypress anticipates the asynchronous nature of web applications and doesn't fail immediately the first time an element is not found. Instead, Cypress gives your application `a window of time` to finish whatever it may be doing!

This is a known `timeout`, and most commands can be customized with specific timeout periods. These commands will list a timeout option in their API documentation, detailing how to set the number of milliseconds you want to continue to try finding the element.

```js
// Give this element 10 seconds to appear
cy.get('.my-slow-selector', { timeout: 10000 })
```

You can also set the `timeout` globally via the configuration setting: `defaultCommandTimeout`.

#### Querying by Text Content

Another way to locate things - a more human way - is to look them up by their content, by what the user would see on the page. For this, there’s the handy `cy.contains()` command, for example:

```js
// Find an element in the document containing the text 'New Post'
cy.contains('New Post')

// Find an element within '.main' containing the text 'New Post'
cy.get('.main').contains('New Post')
```

#### Interacting With Elements

Cypress allows you to click on and type into elements on the page by using `.click()` and `.type()` commands with a `cy.get()` or `cy.contains()` command. This is a great example of chaining in action. Let’s see it again:

```js
cy.get('textarea.post-body')
  .clear()
  .type('This is an excellent post.')
  .should('have.text', 'This is an excellent post.')
```

Some more commands in Cypress for interacting with the DOM are:

`.blur()`, `.focus()`, `.check()`, `.uncheck()`, `.select()`, `.click()`, `.dblclick()`, `.rightclick()`

#### Asserting About Elements

Assertions let you do things like ensuring an element is visible or has a particular attribute, CSS class or state. Assertions are commands that enable you to describe the desired state of your application.

There are two ways to write assertions in Cypress:

1. Implicit Subjects:

    Using `.should()` or `.and()` commands is the preferred way of making assertions. These are typical Cypress commands, which means they apply to the currently yielded subject in the command chain.

   ```js
   // the implicit subject here is the first <tr>
   // this asserts that the <tr> has an .active class
   cy.get('tbody tr:first').should('have.class', 'active')
   // you can chain multiple assertions as
   cy.get('#header a')
     .should('have.class', 'active')
     .and('have.attr', 'href', '/users')
     .and('not.have.descendants')
   ```

2. Explicit Subjects:

   Using `expect` allows you to pass in a specific subject and make an assertion about it. This is probably how you’re used to seeing assertions written in unit tests:

   ```js
   expect(true).to.be.true
   ```

   Explicit assertions are great when you want to:

   - Perform custom logic prior to making the assertion.
   - Make multiple assertions against the same subject.

In each of these examples, it’s important to note that Cypress will automatically wait until these assertions passes or fail the test if the assertions don’t pass. See more about Cypress assertions [here][introductionToCypressAssertions].

### Cypress Commands are Asynchronous

It is very important to understand that Cypress commands don’t do anything at the moment they are invoked, but rather enqueue themselves to be run later.

Let's understand with an example:

#### ❌ Incorrect Usage

In the example below, the check on the `username` value gets evaluated immediately, before `cy.visit()` has executed, so will always evaluate to `undefined`.

```js
it('test', () => {
  let username = undefined     // evaluates immediately as undefined
  cy.visit('https://app.com') // Nothing happens yet
  cy.get('.user-name')        // Still, nothing happens yet
    .then(($el) => {          // Nothing happens yet
      // this line evaluates after the .then executes
      username = $el.text()
    })
  // this evaluates before the .then() above
  // so the username is still undefined
  if (username) {             // evaluates immediately as undefined
    cy.contains(username).click()
  } else {
    // this will always run
    // because username will always
    // evaluate to undefined
    cy.contains('My Profile').click()
  }
})
```

####  ✅ Correct Usage:

Below is one way the code above could be rewritten in order to ensure the commands run as expected.

```js
it('test', () => {
  let username = undefined     // evaluates immediately as undefined
  cy.visit('https://app.com') // Nothing happens yet
  cy.get('.user-name')        // Still, nothing happens yet
    .then(($el) => {          // Nothing happens yet
      // this line evaluates after the .then() executes
      username = $el.text()
      // evaluates after the .then() executes
      // it's the correct value gotten from the $el.text()
      if (username) {
        cy.contains(username).click()
      } else {
        cy.get('My Profile').click()
      }
    })
})
// Ok, the test function has finished executing...
// We've queued all of these commands and now
// Cypress will begin running them in order!
```

#### Commands are Promises

This is one of the big secrets of Cypress. We’ve said above, cypress enqueues actions to be taken later, we could restate that as “adding Promises to a chain of Promises”.

##### Noisy Promise demonstration. Not valid code

```
it('changes the URL when "awesome" is clicked', () => {
  // THIS IS NOT VALID CODE.
  // THIS IS JUST FOR DEMONSTRATION.
  return cy.visit('/my/resource/path')
  .then(() => {
    return cy.get('.awesome-selector')
  })
  .then(($element) => {
    // not analogous
    return cy.click($element)
  })
  .then(() => {
    return cy.url()
  })
  .then((url) => {
    expect(url).to.eq('/my/resource/path#awesomeness')
  })
})
```

##### How Cypress really looks, Promises wrapped up and hidden from us

```js
it('changes the URL when "awesome" is clicked', () => {
  cy.visit('/my/resource/path')
  cy.get('.awesome-selector')
    .click()
  cy.url()
    .should('include', '/my/resource/path#awesomeness')
})
```

Big difference! In addition to reading much cleaner, Cypress does more than this, because Promises themselves have no concepts of retry-ability.

Without retry-ability, assertions would randomly fail. This would lead to flaky, inconsistent results. This is also why we cannot use new JS features like `async / await`.

#### Commands Are Not Promises

The Cypress API is not an exact `1:1` implementation of Promises. They have Promise like qualities and yet there are important differences you should be aware of.

1. You cannot race or run multiple commands at the same time (in parallel).
2. You cannot ‘accidentally’ forget to return or chain a command.
3. You cannot add a `.catch` error handler to a failed command.

### Variables and Aliases

#### Variables

Typically, in Cypress you hardly need to ever use `const`, `let`, or `var`. When using closures you’ll always have access to the objects that were yielded to you without assigning them.

The one exception to this rule is when you are dealing with mutable objects (that change state). When things change state you often want to compare an object’s previous value to the next value.

###### Demonstration

```html
<!-- app code -->
<html lang="en">
    ...
    <button id='increase'>increment</button>
    you clicked button <span id='num'>0</span> times!

    <script>
        let count = 0
        $('#increase').on('click', () => {
            $('#num').text(count += 1)
        })
    </script>
</html>
```

```js
// cypress test code
cy.get('#num').then(($span) => {
  // capture what num is right now
  const num1 = parseFloat($span.text())
  cy.get('button').click().then(() => {
    // now capture it again
    const num2 = parseFloat($span.text())
    // make sure it's what we expected
    expect(num2).to.eq(num1 + 1)
  })
})
```

#### Aliases

Using `.then()` callback functions to access the previous command values is great—but what happens when you’re running code in hooks like `before` or `beforeEach`?

We could make our code do some ugly back-flips using global variables but with cypress `NOT ANYMORE`.

Let's look at a cool example with aliases:

```js
beforeEach(() => {
  // alias the $btn.text() as 'text'
  cy.get('button').invoke('text').as('text')
  cy.fixture('users.json').as('users')
  // alias all of the tr's found in the table as 'rows'
  cy.get('table').find('tr').as('rows')
})

it('has access to text', function () {
  // is now available
  this.text
  // access the users property
  const user = this.users[0]
  // Cypress returns the reference to the <tr>'s which allows
  // us to continue to chain commands finding the 1st row.
  cy.get('@rows').first().click()
})
```

You can also easily alias network requests and access the properties later.

```js
cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')
// other test code here
cy.get('@comments').should((response) => {
  if (response.status === 200) {
      expect(response).to.have.property('duration')
    } else {
      // whatever you want to check here
    }
})
```

### References

- [Assertions][assertionLink]
  - [Chai][chaiLink]
  - [Adding New Assertions][addAssertionLink]
- [Configuration][configurationLink]
- [Best Practices][bestPracticesLink]
- [Error Messages][errorMessagesLink]
- [Cypress Documentation][documentationLink]

<!-- assets -->
[noTestsFound]: /src/assets/TestingWithCypress/images/cypress_no_test_found.png "This is a test runner preview while there is no any tests file to run."
<!-- links -->
[assertionLink]: https://docs.cypress.io/guides/references/assertions.html 'Assertions in Cypress'
[chaiLink]: https://github.com/chaijs/chai 'GitHub Homepage Chai'
[addAssertionLink]: https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions 'Adding New Assertions in Cypress'
[configurationLink]: https://docs.cypress.io/guides/references/configuration.html#Options  'Cypress Configuration'
[bestPracticesLink]: https://docs.cypress.io/guides/references/best-practices.html 'Best Practices in Cypress'
[errorMessagesLink]: https://docs.cypress.io/guides/references/error-messages.html 'Error Messages in Cypress'
[documentationLink]: https://docs.cypress.io/ 'Cypress Documentation'
[introductionToCypressAssertions]: https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Assertions 'Introduction to Cypress Assertions'
[selectingElementsInCypress]: https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements 'Selecting Elements in Cypress'
[excludeIncludeTest]: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Excluding-and-Including-Tests 'Excluding and Including tests in Cypress'
[testHooksInCypress]: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks 'Hooks available in Cypress'
[cypressFolderStructure]: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure 'Folder Structure in Cypress'
