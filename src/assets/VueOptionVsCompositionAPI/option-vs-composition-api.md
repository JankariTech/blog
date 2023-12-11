---
title: Option Vs Composition API
authorName: Sagar Gurung
authorAvatar: https://avatars.githubusercontent.com/u/46086950?v=4
authorLink: https://github.com/SagarGi
createdAt: Dec 13, 2023
tags: vue, option API, composition API, framework, frontend
banner: https://blog.jankaritech.com/src/assets/DockerCompose/images/OptionVsCompositionAPI.png
---

## Background
When it comes to defining or creating a component in the `Vue.js`, we have heard about the `Option API`. We can create specific aspects or behaviors of a component and how we want to build through it.
It provides different properties or options such as `data`, `methods`, `computed`, and `watch` through which we can organize the behavior of a component systematically. But since `Vue 3`, we have
another API called `Composition API` through which we can achieve the same thing. The `Composition API` is a new highlight for many vue developers but both approaches to define a component have their
unique pros and cons. So debating which is best among these two would be a difficult one.

In this blog, we will discuss how we can convert a component defined in `Option API` to `Composition API`. Also at the end, we will know how we can define the component with `Composition API`.
I have already created a simple application [Voting Details](https://github.com/SagarGi/OptionsVsCompositionVue). We will simply be examining it for the blog.

## Play around with `Voting Details`
I have put this section in this blog since it's better to know some information about what we are building. This demo application simply stores the user's details and checks whether a user is eligible to vote are not.
I have implemented two separate components but the functionality is the same for both i.e. one with Option API and another with Composition API, and we will go through a bit in brief how we can change the functionality of a component same as in Option API with Composition API.
>Note: To get the application up and running, make sure [Node.js](https://nodejs.org/en/download) is installed into your system.
```console
git clone https://github.com/SagarGi/OptionsVsCompositionVue
cd OptionsVsCompositionVue
npm install
npm run dev
```
We can access it through URL http://localhost:8000 and the application looks something like this.

![Application In Browser](/src/assets/VueOptionVsCompositionAPI/images/optionVsComposition.png)


### What's in Option API?
For the demo application, In `Voting Details` I have defined a component using option API as:

```js
<script>
  export default {
    data() {
      return {
        name: 'Sagar Gurung',
        age: 26,
        bornYear: 1997,
        votingStatus: 'Eligible!'
      }
    },
    methods: {
      increaseAge() {
        this.age++
      },
      decreaseAge() {
        this.age--
      }
    },
    computed: {
      getVotingStatus() {
        return (this.age >= 18) ? 'Eligible' : 'Not Eligible'
      }
    },
    watch: {
      age(oldAge, newAge) {
        if(oldAge > newAge) {
          this.bornYear--
        } else {
          this.bornYear++
        }
      }
    }
  }
</script>
```
Properties `data`, `methods`, 'computed', and `watch` has been defined for it. I would rather explain all the things in the `Composition API` section rather than here since we are converting the same thing using `Composition API`.

### Converting to Composition API

1. ### Defining `data`
    To define the data necessary for a component, in composition API, we have to make them reactive to mutate or change their value with `ref` or `reactive` provided by vue.
    So it seems something like this:
    ```js
   // data
    const data = reactive({
      name: 'Sagar Gurung',
      age: 26,
      votingStatus: "Not Eligible",
      bornYear: 1997
    })
   ```

2. ### Defining methods
    Defining the methods are very simple. It is just as easy as simply defining functions in JavaScript.
    ```js
    // methods
    function increaseAge() {
      data.age++
    }

    function decreaseAge() {
      data.age--
    }
   ```
   The above function changes the `age` of the data defined in the `data` which is reactive.

3. ### Defining computed
   To define the computed property vue provides the method called `computed` through which we can explicitly define the computed function.
    ```js
   //computed
    const getVotingStatus = computed(() => {
      return (data.age >= 18) ? 'Eligible' : 'Not Eligible'
    })
   ```
   Here the operation `getVotingStatus` returns the voting status based on the value of the data age.

4. ### Defining watch
    Similarly, vue has provided a `watch` function to watch the change in any data properties defined.
    ```js
   //watcher
    watch(mainData.age, (oldAge, newAge) => {
      if(oldAge > newAge) {
        data.bornYear--
      } else {
        data.bornYear++
      }
    })
   ```
   We have watched data `age` in such a way that when age is increased the data `bornYear` will decrease and vice-versa.

The overall script snippet code looks like this at last for the composition API:
```js
import { reactive, toRefs, computed , watch} from "vue";
export default {
  setup() {
    // data
    const data = reactive({
      name: 'Sagar Gurung',
      age: 26,
      votingStatus: "Not Eligible",
      bornYear: 1997
    })
    const mainData = toRefs(data)
    // methods
    function increaseAge() {
      data.age++
    }
    function decreaseAge() {
      data.age--
    }
    //computed
    const getVotingStatus = computed(() => {
      return (data.age >= 18) ? 'Eligible' : 'Not Eligible'
    })
    //watcher
    watch(mainData.age, (oldAge, newAge) => {
      if(oldAge > newAge) {
        data.bornYear--
      } else {
        data.bornYear++
      }
    })

    return {
      ...mainData,
      increaseAge,
      decreaseAge,
      getVotingStatus
    }
  }
}
```
In the overall code, we have imported `reactive`, `toRefs`, `computed`, and `watch` needed for building components with Composition API. The `toRefs` is used to convert the data created with `reactive` to plain objects. Also, In Composition API we need to define all those `data`, `computed`, `watch`, and `methods` inside of it as done above.
And at last, all the thing that has been defined `data`, `computed`, and `methods` needs to be returned to be exposed to the template.

In this way, we can simply convert a component defined with `Option API` to `Composition API`. But This is just a basic example. There are lots of things that we can perform using composition API.
I hope this blog at least gave you some insight on `Composition API` and also how you can replace your component defined in `Option API` with it. But before finishing the blog I would like to highlight some
points regarding both `Option API` and `Composition API` so that you can relate which one to prefer before building up your projects.

## Option API and Composition API

You can find lots of points regarding the comparison among these two APIs. Still, I would only like to highlight some of it as both approaches for building up components have their benefits and drawbacks.

1. Composition API is new to Vue which can be called a modern way to define components whereas on the other hand Option API is an old or traditional way to build up components in Vue.
2. Also, the structure and syntax for the Options API seem a bit simpler and easier to understand than that of the Composition API. It's a good choice for small projects and also for beginners. But for large and complex projects a better choice would be Composition API since it is a more flexible and modular structure that enhances better code maintainability.
3. In addition to this since Composition API is fully based on functional, reactive programming it can be difficult for learners who are not familiar with such approach. In this case, Option API is a more captivating choice.
4. Moreover `Typescript` support is better in Composition API.
5. Composition API supports better code reuse as it has functions and modular composition preventing more complex code and leading to more intuitive code.
