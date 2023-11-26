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
When it comes to defining or creating a component in the `Vue.js`, we definitely have heard about the `Option` API. We can create specific aspect or behaviour of a component how we want to build through it.
It provides different properties or options such as `data`, `methods`, `computed` and `watch` through which we can organize the behaviour of a component in a systematic manner. But since `Vue 3`, we have
another API called `Composition API` through which we can achieve the same thing. The `Composition API` is a new highlight for many vue developers but both approaches to define a component have their own
unique pros and cons. So debating which is best among these two would be a difficult one.

In this blog we would discuss how we can convert a component defined in `Option API` to `Composition API`. We would basically be discussion about how we can define the component with `Composition API`.
I have already created a simple application [Voting Details](https://github.com/SagarGi/OptionsVsCompositionVue). We will simply be discussing it for the blog.

## Play around with `Voting Details`
I have put this section in this blog since its better to know some information what we are building. This demo application simple stores the users details and check whether user is eligible to vote are not.
>Note: To get the application up and running, make sure [Node JS](https://nodejs.org/en/download) is installed into your system.
```console
git clone https://github.com/SagarGi/OptionsVsCompositionVue
cd OptionsVsCompositionVue
npm install
npm run dev
```
We can access it through url http://localhost:8000 and the application looks something like this.

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
Properties `data`, `methods`, 'computed' and `watch` have been defined for it. I would rather explain all the things in the `Composition API` section rather than here since we are converting the same thing using composition API.

### Converting to Composition API

1. ### Defining `data`
    To define the data necessary to a component, in composition api we have to make them reactive in order to mutate or change their value with `ref` or `reactive` provided by vue.
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
   Defining methods are very simple. It is just as easy as we simply define functions in javascript.
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
   To define the computed property vue provides the method called `computed` through which we can explicitly define computed function.
    ```js
   //computed
    const getVotingStatus = computed(() => {
      return (data.age >= 18) ? 'Eligible' : 'Not Eligible'
    })
   ```
   Here the operation `getVotingStatus` returns the voting status based on the value of data age.

4. ### Defining watch
    Similarly, vue has provided `watch` function in order to watch the change in any data properties defined.
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
   We have watched data `age` in such a way that when age is increased the data `bornYear` will get decreased and vice-versa.

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
In overall code, we have imported `reactive`, `toRefs`, `computed` , `watch` needed for building component with Composition API. Here, `toRefs` is used in order to convert the data created with `reactive` to plain objects. Also, In Composition API we need define all those `data`, `computed`, `watch` and `methods` inside of it as done above.
And at last all the thing that has been defined `data`, `computed` and `methods` needs to be returned in order to be exposed to the template.

In this way we can simply convert a component defined with `Option API` to `Composition API`. But This is just a basic example. There are lots of things that we can perform using composition api.
I hope this blog at least gave you some insight on `Composition API` and also how you can replace your component defined in `Option API` with it. But before finishing the blog i would like to highligh some
points regarding both `Option API` and `Composition API` so that you could relate which one to prefer before building up your projects.

## Option API and Composition API

You can find lots of points regarding the comparison among these two APIs. But still I would only like to highlight some of it as both approach for building up component has its own benefits and drawbacks.

1. Composition API is new to Vue which can be called as modern way to define components whereas on the other hand Option API is basically an old or traditional way to build up components in Vue.
2. Also, the structure and syntax for the Option API seems a bit simple and easy to understand than that of Composition API. It's a good choice for small projects and also for beginners. But for large and complex projects a better choice would be Composition API since it is more flexible and modular structure which enhance better code maintainability.
3. In addition to this since Composition API is fully based on functional, reactive programming which can be difficult for learners who are not familiar with such approach. In this case Option API is more captivating choice.
4. More over `Typescript` support is better in Composition API.
5. Composition API supports better code reuse as it has functions and modular composition preventing more complex code and leading more intuitive code.
