---
title: Control Statements - Control Your Go
authorName: Prarup Gurung (प्रारुप गुरुङ्ग)
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110938-crop-colour-800.jpg
authorLink: https://github.com/grgprarup
createdAt: Dec 13, 2022
tags: branching statement, if-else, switch, looping statement, control flow statement
banner: https://blog.jankaritech.com/src/assets/JourneyWithGo-ABlogSeries/images/control-statements-banner.svg
seriesTitle: Journey With Go - A Blog Series
episode: 2
---

**[गो](https://go.dev "Go in Nepali")** **"Journey With Go - A Blog Series"** about the basics of Go `Go Basic`, advanced concepts in Go `Go Beyond Basics`, testing with go `Godog as Test Framework` and many more.

This is the second installment of the series. You are here which means you have already read the first blog of the series. If you haven't read the first blog, please read it first. It is available [here](https://blog.jankaritech.com/#/blog/Journey%20With%20Go%20-%20A%20Blog%20Series/Go%20Basics%20-%20The%20Starting%20Point "here"). In this blog, we will learn about the `Control Flow Statements in Go`. **So, let's get started.**

## **Control Flow Statements**

These statements are used to control the flow of the program. In other words, they control the execution of the program. There are two types of control flow statements in Go.

1. Branching Statements
2. Looping Statements

### **A. Branching Statements**

Branching statements divide the program into different branches on the basis of a given condition. Some blocks of code might execute and some might not. In Go, we have `if-else` and `switch` to control the flow of the program.

#### 1. if-else

If the condition is true, it executes the code inside the `if` block otherwise (i.e. the condition is false), it executes the code inside the `else` block. There are different forms of `if-else` pairs such as, `if`, `if-else`, `nested if-else`, and `else-if ladder`.

##### _a. if_

This can be used if you want to execute the code only if the condition is true. The syntax of `if` is as follows.

```go
if condition {
    // code to execute if the condition is true
}
```

![If Flowchart](/src/assets/JourneyWithGo-ABlogSeries/images/if.svg "If Flowchart")[{:width="200px" height="300px"}]

**Example:**

![If Example](/src/assets/JourneyWithGo-ABlogSeries/images/if-example.png "If Example")

**Output:**

```go
You are eligible to receive a Citizenship
```

##### _b. if-else_

When you want to execute codes either for true or false cases then `if-else` can be used. `if-else` executes the code inside of the `if` block if the condition is true otherwise, it executes the code inside of the `else` block. The syntax of `if-else` is as follows.

```go
if condition {
    // code to execute if the condition is true
} else {
    // code to execute if the condition is false
}
```

![If-Else Flowchart](/src/assets/JourneyWithGo-ABlogSeries/images/if-else.svg "If-Else Flowchart")

**Example:**

![If-Else Example](/src/assets/JourneyWithGo-ABlogSeries/images/if-else-example.png "If-Else Example")

**Output:**

```go
You are eligible to vote.
```

##### _c. nested if-else_

If the if-else statement is inside another if-else statement, it is called a nested if-else statement. We can use nested if-else statements to check other conditions if the previous condition is met. We have different variations of nested if-else statements. We will discuss only one of them.
The syntax of `nested if-else` is as follows.

```go
if condition {
    // code to execute if the condition is true
    if condition {
        // code to execute if the condition is true
    } else {
        // code to execute if the condition is false
    }
} else {
    if condition {
        // code to execute if the condition is true
    } else {
        // code to execute if the condition is false
    }
}
```

![Nested If-Else Flowchart](/src/assets/JourneyWithGo-ABlogSeries/images/nested-if.svg "Nested If-Else Flowchart")

**Example:**

![Nested If-Else Example](/src/assets/JourneyWithGo-ABlogSeries/images/nested-if-example.png "Nested If-Else Example")

**Output:**

```go
The greatest number is: 566
```

##### _d. else-if ladder_

Else-if ladder is a series of if-else statements. It is used when we have multiple conditions to check, when the previous condition is not met. The syntax of `else-if ladder` is as follows.

```go
if condition {
    // code to execute if the condition is true
} else if condition {
    // code to execute if the condition is true
} else if condition {
    // code to execute if the condition is true
} else {
    // code to execute if none of the conditions are true
}
```

![Else-If Ladder Flowchart](/src/assets/JourneyWithGo-ABlogSeries/images/else-if-ladder.svg "Else-If Ladder Flowchart")

**Example:**

![Else-If Ladder Example](/src/assets/JourneyWithGo-ABlogSeries/images/else-if-ladder-example.png "Else-If Ladder Example")

**Output:**

```go
It is Negative number
```

### 2. Switch

`switch` allows us to execute one block of code among several cases based on the value of a given expression. It can be used as an alternative to the `if-else` statement, when you have lots of conditions to be checked. If none of the cases match with the expression, the code inside of the `default` block gets executed. The syntax of `switch` is as follows.

```go
switch expression {
    case value1:
        // code to execute if the expression match with value1
    case value2:
        // code to execute if the expression match with value2
    case value3:
        // code to execute if the expression match with value3
    default:
        // code to execute if none of the cases match with the expression
}
```

![Switch Flowchart](/src/assets/JourneyWithGo-ABlogSeries/images/switch.svg "Switch Flowchart")

**Example:**

![Switch Example](/src/assets/JourneyWithGo-ABlogSeries/images/switch-example.png "Switch Example")

**Output:**

```go
Tuesday
```

The `break` keyword is not required, as the `switch` statement automatically breaks the execution of the code as soon as the first case is matched.

But, we can use `fallthrough` keyword to execute the code inside of the next case. The syntax of `fallthrough` is as follows.

```go
switch expression {
    case value1:
        // code to execute if the expression match with value1
        fallthrough
    case value2:
        // code to execute if the expression match with value2
    case value3:
        // code to execute if the expression match with value3
    default:
        // code to execute if none of the cases match with the expression
}
```

![Switch Fallthrough Flowchart](/src/assets/JourneyWithGo-ABlogSeries/images/switch-fallthrough.svg "Switch Fallthrough Flowchart")

**Example:**

![Switch Fallthrough Example](/src/assets/JourneyWithGo-ABlogSeries/images/switch-fallthrough-example.png "Switch Fallthrough Example")

**Output:**

```go
It's Weekday
```

### **B. Looping Statements**

If we want to execute the block of codes repeatedly, we can use looping statements. The block of codes executes repeatedly until the condition is met. In Go, we have two ways to use a loop in the codes. They are `for` and `range`.

#### 1. for

`for` loop allows a program to execute a block of code repeatedly if the condition is true. The syntax of `for` is as follows.

```go
for initialization; condition; increment/decrement {
  // code to execute if the condition is true
}
```

![For Loop Flowchart](/src/assets/JourneyWithGo-ABlogSeries/images/for.svg "For Loop Flowchart")

**Example:**

![For Example](/src/assets/JourneyWithGo-ABlogSeries/images/for-example.png "For Example")

**Output:**

```go
1
2
3
4
5
```

We don't have separate `while` loop in Go like other programming languages. We can use `for` loop as a `while` loop as follows.

```go
for condition {
    // code to execute if the condition is true
}
```

**Example:**

![While Example](/src/assets/JourneyWithGo-ABlogSeries/images/while-example.png "While Example")

**Output:**

```go
1
2
3
4
5
```

#### 2. range

`range` in Go language is used to iterate over arrays, slices, maps, and strings. The `range` is used along with the `for` loop. The syntax of `range` is as follows.

```go
for index, value := range collection {
    // code to execute until every element of the collection is iterated
}
```

**Example:**

![Range Example](/src/assets/JourneyWithGo-ABlogSeries/images/range-example.png "Range Example")

**Output:**

```go
Fruit at index 0 is Apple
Fruit at index 1 is Mango
Fruit at index 2 is Grape
Fruit at index 3 is Lichi
Fruit at index 4 is Strawberry
```
### **C. Other Statements**

Beside, if, switch, for, and range, Go language also provides some other statements. They are `break`, `continue`, `defer`, and `panic`.
#### 1. Break Statement

`break` statement terminates the loop or switch statement and transfers execution to the code immediately after the loop or switch. The keyword `break` is used.

**Example:**

![Break Example](/src/assets/JourneyWithGo-ABlogSeries/images/break-example.png "Break Example")

In the above example, the `break` statement terminates the `for` loop when the value of `i` is equal to 5. So, the output will be as follows.

**Output:**

```go
0
1
2
3
4
Done
```

#### 2. Continue Statement

`continue` statement skips the current iteration of the loop and continues with the next iteration. The keyword `continue` is used.

**Example:**

![Continue Example](/src/assets/JourneyWithGo-ABlogSeries/images/continue-example.png "Continue Example")

In the above example, the `continue` statement skips the current iteration of the loop when the value of `i` is equal to 5. So, the output will be as follows.

**Output:**

```go
0
1
2
3
4
6
7
8
9
Done
```

#### 3. Defer Statement

`defer` statement invokes the function after the surrounding function returns. This delays the execution of the function. If there are multiple `defer` statements, they are executed in the last-in-first-out order. This statement might be useful for cleanup task after the function has been executed. The syntax of `defer` is as follows.

```go
func functionToDoSomething() {
    defer deferFunction()
    // code to execute
}

func deferFunction(){
    // code to execute
}
```

**Example:**

![Defer Example](/src/assets/JourneyWithGo-ABlogSeries/images/defer-example.png "Defer Example")

In the above example, the defer statements are pushed into the stack. And the last defer statement is popped out first. The output will be as follows.

**Output:**

```go
Hello World, I am From Nepal.
```

#### 4. Panic Statement

`panic` statement in Go is used to stop the normal flow of the program and start panicking. The `panic` statement is used to throw an exception. `panic()` is either raised by the Go runtime or can be raised by the user. The syntax of `panic` is as follows.

```go
panic("error message")
```

**Example:**

![Panic Example](/src/assets/JourneyWithGo-ABlogSeries/images/panic-example.png "Panic Example")

In the above example, the `panic` statement is raised by the user. The program terminates as panic is raised. The output will be as follows.

**Output:**

```go
panic: Something went wrong

goroutine 1 [running]:
main.main()
	/home/prarup/JankariTech/playground/go-code/panic.go:7 +0x27
exit status 2
```

#### 5. Recover Statement

`recover` statement recovers from the `panic` state and resumes normal execution of the program if possible. The `recover` statement is used to catch the `panic` statement. The syntax of `recover` is as follows.

```go
recover()
```

**Example:**

![Recover Example](/src/assets/JourneyWithGo-ABlogSeries/images/recover-example.png "Recover Example")

In the above example, the `recover` statement is used to catch the `panic` statement. The output will be as follows.

**Output:**

```go
Something went wrong
```


## What we have learned so far

- Branching Statements
  - if-else
  - switch
- Looping Statements
  - for
  - range
- Break Statement
- Continue Statement
- Defer Statement
- Panic Statement
- Recover Statement

## Conclusion

In this blog, we have learned about the control flow in Go language. We have learned about the branching statements, and looping statements. We have also learned about the `break`, `continue`, `defer`, `panic`, and `recover` statements. In the next blog, we will learn about the functions, Arrays, Strings, Structures in Go language. *Keep learning and keep practicing*. **Stay tuned!!!**.

## References

- [Go Programming Language](https://go.dev/ "Go Programming Language")
- [Go by Example](https://gobyexample.com/ "Go by Example")
- [Go Documentation](https://go.dev/doc/ "Go Documentation")
- [Go Playground](https://play.golang.org/ "Go Playground")
- [Go Tour](https://tour.golang.org/welcome/1 "Go Tour")
