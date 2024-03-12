---
title: Options Vs Composition API in Vue JS
authorName: Sagar Gurung
authorAvatar: https://avatars.githubusercontent.com/u/46086950?v=4
authorLink: https://github.com/SagarGi
createdAt: March 11, 2024
tags: Vue, Options API, Composition API, Framework, Frontend
banner: https://blog.jankaritech.com/src/assets/VueOptionVsCompositionAPI/images/OptionsVsCompositionAPI.png
---

## Background
When it comes to defining or creating a component in `Vue.js`, we probably have heard about the `Options API`. Using `Options API` not only we can create specific aspects or behaviors of a component but also allows us how we want to build components.
It provides different properties (or options) such as `data`, `methods`, `computed`, and `watch` through which we can organize the behavior of a component systematically. But since `Vue 3`, we have
another API called `Composition API` through which we can achieve the same thing. The `Composition API` is a new highlight for many Vue developers, but both approaches to define components have their
unique pros and cons. So debating which among these two is better would be a difficult one.

In this blog, we will learn how we can convert a component defined in `Options API` to `Composition API` and we will also discuss the comparison of both APIs. Also at the end, we will know how we can define the component with `Composition API`.
To demonstrate this, I have created a simple application called [`Voting Details`](https://github.com/SagarGi/OptionsVsCompositionVue), which we will be examining together in this blog.

## Play around with ****Voting Details****
I have put this section in this blog since it's better to know some information about what we are building. The `Voting Details` demo application stores the user's details and checks whether a user is eligible to vote or not.
I have implemented two separate components with the same functionalities, one is using `Options API` and the other is using `Composition API`. We will go through a bit in brief how we can change the functionality of a component same as in `Options API` with `Composition API`.
>Note: To get the application up and running, make sure [Node.js](https://nodejs.org/en/download) version 16 or above is installed into your system.
```console
git clone https://github.com/SagarGi/OptionsVsCompositionVue
cd OptionsVsCompositionVue
npm install
npm run dev
```
We can access it through URL http://localhost:8000 and the application looks something like this.

![Application In Browser](/src/assets/VueOptionVsCompositionAPI/images/OptionsAPIVsCompositionAPIWebUI.png)


## What's in ****Options API****?
For the demo application, in `Voting Details` I have defined a component using `Options API` as:

```js
<script>
  export default {
    data() {
      return {
        name: 'Sagar Gurung',
        age: 18,
        bornYear: 2005,
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
In this demo app the properties `data`, `methods`, `computed`, and `watch` have been defined using `Options API`. I will explain the meaning of each of them in the `Composition API` section since we are converting component defined in `Options API` with `Composition API`.

## Converting to ****Composition API****

### 1. Defining ****data****
When defining the data necessary for a component, in `Composition API`, we have to make it reactive to mutate or change values with `ref` or `reactive` provided by Vue.js.
So data property can be defined as:
  ```js
   // data
    const data = reactive({
      name: 'Sagar Gurung',
      age: 18,
      votingStatus: "Eligible",
      bornYear: 2005
    })
   ```

### 2. Defining ****methods****
Defining the methods is very simple. It is just as easy as defining functions in JavaScript.
  ```js
    // methods
    function increaseAge() {
      data.age++
    }

    function decreaseAge() {
      data.age--
    }
   ```
   The above function changes the `age` property of the data defined in `data` which is reactive.

### 3. Defining ****computed****
To define the computed property Vue provides the method called `computed` through which we can explicitly define the computed function.
   ```js
   //computed
    const getVotingStatus = computed(() => {
      return (data.age >= 18) ? 'Eligible' : 'Not Eligible'
    })
   ```
   Here the operation `getVotingStatus` returns the voting status based on value of age.

### 4. Defining ****watch****
Similarly, Vue has provided a `watch` function to watch the change in any data properties defined.
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

The whole script code snippet looks like this at last for the `Composition API`:
```js
import { reactive, toRefs, computed , watch} from "vue";
export default {
  setup() {
    // data
    const data = reactive({
      name: 'Sagar Gurung',
      age: 18,
      votingStatus: "Eligible",
      bornYear: 2005
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
In the final code, we have imported `reactive`, `toRefs`, `computed`, and `watch` which are needed for building components with the `Composition API`. `toRefs` is used to convert the data created with `reactive` to plain objects. Also, when using `Composition API` we need to define all those `data`, `computed`, `watch`, and `methods` inside of function `setup()` as done above.
At last, all the things that have been defined such as `data`, `computed`, and `methods` need to be returned to be exposed to the template.

In this demo application we have learnt the basics of how to convert a component defined with `Options API` to `Composition API`. However, there are lots of other things that we can perform using the `Composition API`.
I hope this blog gave you some insights on how to use the `Composition API` and also how you can replace your component defined in `Options API` with it.
If you want to learn more about both `Options API` and `Composition API` then you can learn more from [here](https://vuejs.org/api/composition-api-setup.html).

But before finishing the blog I would like to highlight some points regarding both `Options API` and `Composition API` so that you can relate which one to prefer before building up your projects.

## ****Options API**** and ****Composition API****

You can find a lot of points regarding the comparison between these two APIs, both approaches for building up components have their benefits and drawbacks. I will only highlight five differences which I consider most relevant for choosing whether to use the `Options API` or `Composition API` in your own project:

1. `Composition API` is new to Vue which can be called a modern way to define components whereas on the other hand `Options API` is a proven, traditional way to build up components in Vue.
2. Also, the structure and syntax for the `Options API` seems a bit simpler and easier to understand than that of the `Composition API`. It's a good choice for small projects and also for beginners. But for large and more complex projects, a better choice would be `Composition API` since it has a more flexible and modular structure that enhances better code maintainability.
3. In addition to this, since `Composition API` is fully based on functional, reactive programming it can be difficult for learners who are not familiar with this approach. In this case, `Options API` could be a suitable choice.
4. Moreover, `Composition API` having a function based structure with better type inference, `Typescript` support is better than that of `Options API`.
5. `Composition API` supports better code reusability as it has functions and modular composition preventing complex code, which ultimately leads to more intuitive code.
