---
title: Unit Testing with VueJS
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: May 6, 2022
tags: vue, jest, unit, testing
banner: https://raw.githubusercontent.com/JankariTech/blog/master/src/imgs/fallback_banner.png
---
## Unit Testing Vue Components

> This post only covers unit testing information for Vue.js v2 and earlier. If you're trying with VueJS v3, this post would not be helpful.

### Why Unit Testing?
When it comes to building reliable applications, tests can play a critical role in an individual or team's ability to build new features, refactor code, fix bugs, and much more.

Unit testing is a software testing technique in which a collection of software components or modules are individually tested.

Benefits:
- test individual units of code in complete isolation
- maps a system structure and creates documentation. It really helps us understand the unit's interface.
- early bug detection and easier to spot issues
- saves time with automation and avoids manual testing

### Vue Test Utils (VTU)
The [VTU](https://github.com/vuejs/vue-test-utils/ "VTU") is a set of utilities that simplifies testing VueJS components. The package exposes APIs for mounting and interacting with the Vue components independently.

#### Installation
There are various options for the installation of VTU. Please refer to the [official VTU docs](https://vue-test-utils.vuejs.org/installation/#installation "official VTU docs") for detailed information on how to install and configure VTU.

VueJS projects will already have a bundler set up for the development. So one thing I would suggest for the installation is please do not set up a different compiler or transformer system for the tests and the source code. This will only increase the project complexity and packages dependency. For example, if you're using `babel` for the source code, use the same for the tests too.

#### Writing Tests
With VTU, we can write our tests using `describe`, `it`, `test`. Similarly, hooks can be implemented under `before`, `beforeEach`, `after` and `afterEach`. And, for assertions, `expect` is also already bundled. Great!

```js
import {mount} from "@vue/test-utils"

// Normally a component to be tested is imported from elsewhere
const FabButton = {
  template: "<button type='button' :disabled='disabled'>{{text}}</button>",
  props: ["disabled", "text"]
}

describe("Fab button component", () => {
  describe("when prop 'disabled' is set to 'disabled'", () => {
    it("should be disabled", () => {
      const wrapper = mount(FabButton, {
        propsData: {
          disabled: "disabled",
          text: "My Button"
        }
      })

      // assertions after loading the component
      expect(wrapper.attributes('type').toBe('button'))
      expect(wrapper.attributes('disabled').toBe('disabled'))
      expect(wrapper.text()).toBe("My Button")
    })
  })
})
```

##### Knowing what to test
There can be multiple logic involved in our test files. However, not everything needs to be tested during unit testing.

Remember that we're only writing tests for a specific component. So we should only test the features provided by that specific unit.

So, is it necessary to test every feature in the component?

For the above component, we have two attributes inside the button element, i.e. `type` and `disabled`. We can see that the `type` attribute is set to the static value `button` and the `disabled` attribute is linked with the component prop `disabled`. So, we can avoid the test for static attributes and only test the computed properties.

```js
it("should be disabled", () => {
  const wrapper = mount(FabButton, {
    propsData: {
      disabled: "disabled",
      text: "My Button"
    }
  })

  // assertions after loading the component
  expect(wrapper.attributes('disabled').toBe('disabled'))
  expect(wrapper.text()).toBe("My Button")
})
```

Some points to remember:
- do not test other components' functionalities otherwise your tests would not be a **unit** test
- do not test functionalities from dependencies of your project
- do not test static values as they remain static in any situation
- do not focus on complete line-based coverage, as it tends to focus on the internal implementation details of the components, which could lead to brittle tests

##### `mount` and `shallowMount`
I mostly use `shallowMount` for unit testing because it does not bother about the other imported or external components used within the component being tested. Additional to that, it does allow us to assert the props provided to those external components. But, if we want to test the component's functionality, we can use `mount` instead. For example, if we have to click some element inside the component, we can choose `mount` instead of `shallowMount`.

##### Stubs
I try to stub the component when I'm testing as much as possible. For example, if I'm writing a unit test for a component that uses some other component, I can stub that dependency and then test the component.

While working with `shallowMount`, sometimes I get props or attributes set as `[Object][Object]`. I cannot parse this to object and further assertions cannot be made. In order to solve this, I use stubs more precisely. Provide the actual component for the stubs rather than just a boolean value.
```js
// Incorrect: this may not always work
shallowMount(Component, {
  stubs: {
    // default stub
    FabButton: true
  }
})
```
```js
// Correct: stub with the actual component
import { createLocalVue, shallowMount } from '@vue/test-utils'
import FabButton from "@/somelib/component/FabButton"

// if it should be used by vue
localVue.use(FabButton)

shallowMount(Component, {
  localVue,
  stubs: {
    // specific implementation
    'FabButton': FabButton
  }
})
```

##### Mocks
Mocks are very useful while unit testing. Our components usually use various methods from other components, mixins, libraries, etc. These are not our responsibility. So, we need to mock them.

Mocking is very easy. We have to remember a few things:
- mock before `mounting` the component
- reset or restore mocks after the test
- prefer mocking the return values for methods rather than the actual methods themselves

With jest, mocking is done in the following way:
```js
// mocks a module with an auto-mocked version
// 'factory' and 'options' parameters are optional
jest.mock(moduleName, factory, options)
// mock internal private functions
const myMockFn = jest.fn()
  .mockReturnValue(true) // default return value
  .mockReturnValueOnce(1) // return value for first call
  .mockReturnValueOnce(2) // return value for second call

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

// mock external library
jest.mock('@nextcloud/axios')
// mock external library methods
jest.mock('lodash', () => ({
  ...jest.requireActual('lodash'),
  debounce: fn => { fn.cancel = jest.fn(); return fn }
}))
```

##### Spying
It creates a mock function similar to `jest.fn` but also records calls to the mock function.

By default, `jest.spyOn` also calls the spied method. But if we want to overwrite the original function, we can use:
```js
jest.spyOn(object, methodName).mockImplementations(() => customImplementation)
```

##### User Interactions
These are well described in the documentation for the [vue-test-utils](https://v1.test-utils.vuejs.org).

Some points I want to mention:
- always use `await` while performing user interactions
  ```js
  await wrapper.find('button').trigger('click')
  ```
- always use `wrapper.vm` to access the component's instance
  ```js
  expect(wrapper.vm.searchResults).toEqual([])
  ```
- make sure to use `wrapper.vm.$nextTick` to wait for async operations to complete if needed
  ```js
  await wrapper.find('button').trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.content').exists()).toBeTruthy()
  ```
- make sure to re-query elements whose states are changed after some interactions:

  Assume a component with a button which toggles the existence of content in the DOM.
  ```js
  // Incorrect way:
  const content = wrapper.find('.content')
  await wrapper.find('button').trigger('click')
  expect(fab.exists()).toBeTruthy()
  ```
  Here the `content` element is queried before clicking the button. So at this stage, the content is not there. Now even if we click the toggler, the `content` element will remain unchanged for us. That's why we have to re-query for this element.
  ```js
  // Correct way:
  const content = wrapper.find('.content')
  expect(content.exists()).toBeFalsy()
  await wrapper.find('button').trigger('click')
  expect(content.exists()).toBeTruthy()
  ```

##### Snapshots
Snapshots are very useful while writing tests. We can use them to check the DOM structure of the component or any other data like objects, arrays, etc.

For example, let's say we have a component like this:
```vue
<template>
  <div class="card">
    <div class="title">{{card.title}}</div>
    <div class="subtitle">{{card.subtitle}}</div>
    <div class="author">{{card.author.username}}</div>
    <div class="actions">
      <button class="delete" :disabled="!card.canDelete()">Delete</button>
      <button class="edit" :disabled="!card.canEdit()">Edit</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>
```

It would be a bit more tedious to find and expect each detail from the component.
```js
it('should render the card correctly', () => {
  // mount the component with the card data
  const title = wrapper.find('.title').text()
  const subtitle = wrapper.find('.subtitle').text()
  const author = wrapper.find('.author').text()
  const deleteButton = wrapper.find('button.delete')
  const editButton = wrapper.find('button.edit')
  expect(title).toEqual('Hello World')
  expect(subtitle).toEqual('This is a subtitle')
  expect(author).toEqual('John Doe')
  expect(deleteButton.attributes().disabled).toBeTruthy()
  expect(editButton.attributes().disabled).toBeFalsy()
})
```
This is tedious and difficult to maintain. So we can use snapshots to check the whole DOM structure of the component.
```js
it('should render the card correctly', () => {
  // mount the component with the card data
  const card = wrapper.find('.card')
  expect(card).toMatchSnapshot()
})
```
That's it. All the card data is now checked, and it is much easier to maintain. If something changes in the component, we just need to update the snapshot.

> ##### Curious how snapshots are saved and maintained?
>
> When we introduce any test cases that make use of snapshots, at the first time of the test run, the test runner will generate and save the screenshot(s) in a folder `__snapshots__` just where the test file is located.
>
> Now, when we run the test again, the test runner compares the saved snapshot with the current DOM structure and fails if the two are different.
>
> To update the current snapshot, we can use the `--updateSnapshot` flag or just use the jest interactive mode.
> ```shell
> jest --updateSnapshot
> ```

This is also helpful to `assert` for large datasets like:
```js
expect(response).toMatchObject([
  {id: 1, name: 'Rose', color: {r: 255, g: 0, b: 0}},
  {id: 2, name: 'Lily', color: {r: 0, g: 255, b: 0}},
  {id: 3, name: 'Sunflower', color: {r: 0, g: 0, b: 255}}
])
```
can be written as:
```js
expect(response).toMatchSnapshot()
```
This will save the response object as a snapshot, and our test will look neater. Also, if something changes in the response, we just need to update the snapshot.

#### Final Thoughts
In a nutshell, unit testing with Vue components with Jest and vue-test-utils is fun. Do not try to get 100% coverage, rather try to test the actual features of the component. The Vue community has good documentation and guides on how to test Vue components. Thus, you're likely to have fewer problems testing your components and securing your path forward.
