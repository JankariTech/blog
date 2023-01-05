---
title: Control Flow Statements - Control your Go
authorName: Prarup Gurung (प्रारुप गुरुङ्ग)
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110938-crop-colour-800.jpg
authorLink: https://github.com/grgprarup
createdAt: Dec 13, 2022
tags: branching statement, if-else, switch, looping statement, control flow statement
banner:
seriesTitle: Journey With Go - A Blog Series
episode: 2
---


**[गो](https://go.dev "Go in Nepali")** **"Journey With Go - A Blog Series"** about the basics of Go `Go Basic`, advanced concepts in Go `Go Beyond Basics`, testing with go `Godog as Test Framework` and many more. This is the second installment of the series. You are reading this blog because you have already read the first blog of the series. If you haven't read the first blog, please read it first. It is available [here](https://blog.jankaritech.com/#/blog/Journey%20With%20Go%20-%20A%20Blog%20Series/Go%20Basics%20-%20The%20Starting%20Point "here"). In this blog, we will learn about the control flow statements in Go. So, let's get started.

## Control Flow Statements

Control flow statements are the statements that control the flow of the program. In other words, they control the execution of the program. There are two types of control flow statements in Go. They are branching statements and looping statements.

## Branching Statements

Branching statements are the statements that control the flow of the program based on the condition. There are two types of branching statements in Go. They are `if-else` and `switch`.

### if-else

`if-else` is the branching statement that executes the code based on the condition. If the condition is true, it executes the code inside the `if` block. If the condition is false, it executes the code inside the `else` block. If there is no `else` block, it executes the code after the `if` block. The syntax of `if-else` is as follows.

```go
if condition {
    // code to execute if the condition is true
} else {
    // code to execute if the condition is false
}
```

The `if-else` statement can be used as a single statement. The syntax of the single statement `if-else` is as follows.

```go
if condition; condition {
    // code to execute if the condition is true
} else {
    // code to execute if the condition is false
}
```

The `if-else` statement can be used as a single statement without the `else` block. The syntax of the single statement `if-else` without the `else` block is as follows.

```go
if condition; condition {
    // code to execute if the condition is true
}
```

The `if-else` statement can be used as a single statement without the `else` block and the `if` block. The syntax of the single statement `if-else` without the `else` block and the `if` block is as follows.

```go
if condition; condition
```

The `if-else` statement can be used as a single statement without the `else` block and the `if` block and the condition. The syntax of the single statement `if-else` without the `else` block and the `if` block and the condition is as follows.

```go
if condition
```

The `if-else` statement can be used as a single statement without the `else` block and the `if` block and the condition and the semicolon. The syntax of the single statement `if-else` without the `else` block and the `if` block and the condition and the semicolon is as follows.

```go
if
```

### switch

`switch` is the branching statement that executes the code based on the condition. It is similar to the `if-else` statement. The syntax of `switch` is as follows.

```go
switch condition {
case condition1:
    // code to execute if the condition1 is true
case condition2:
    // code to execute if the condition2 is true
default:
    // code to execute if none of the conditions are true
}
```

The `switch` statement can be used as a single statement. The syntax of the single statement `switch` is as follows.

```go
switch condition; condition {
case condition1:
    // code to execute if the condition1 is true
case condition2:
    // code to execute if the condition2 is true
default:
    // code to execute if none of the conditions are true
}
```

The `switch` statement can be used as a single statement without the `default` block. The syntax of the single statement `switch` without the `default` block is as follows.

```go
switch condition; condition {
case condition1:
    // code to execute if the condition1 is true
case condition2:
    // code to execute if the condition2 is true
}
```

The `switch` statement can be used as a single statement without the `default` block and the `case` blocks. The syntax of the single statement `switch` without the `default` block and the `case` blocks is as follows.

```go
switch condition; condition
```

The `switch` statement can be used as a single statement without the `default` block and the `case` blocks and the condition. The syntax of the single statement `switch` without the `default` block and the `case` blocks and the condition is as follows.

```go
switch condition
```

The `switch` statement can be used as a single statement without the `default` block and the `case` blocks and the condition and the semicolon. The syntax of the single statement `switch` without the `default` block and the `case` blocks and the condition and the semicolon is as follows.

```go
switch
```

## Looping Statements

Looping statements are the statements that control the flow of the program based on the condition. There are two types of looping statements in Go. They are `for` and `range`.

### for

`for` is the looping statement that executes the code based on the condition. It is similar to the `if-else` statement. The syntax of `for` is as follows.

```go
for condition {
    // code to execute if the condition is true
}
```

The `for` statement can be used as a single statement. The syntax of the single statement `for` is as follows.

```go
for condition; condition {
    // code to execute if the condition is true
}
```

The `for` statement can be used as a single statement without the condition. The syntax of the single statement `for` without the condition is as follows.

```go
for condition
```

The `for` statement can be used as a single statement without the condition and the semicolon. The syntax of the single statement `for` without the condition and the semicolon is as follows.

```go
for
```

### range

`range` is the looping statement that executes the code based on the condition. It is similar to the `for` statement. The syntax of `range` is as follows.

```go
for index, value := range collection {
    // code to execute if the condition is true
}
```

The `range` statement can be used as a single statement. The syntax of the single statement `range` is as follows.

```go
for index, value := range collection; index, value := range collection {
    // code to execute if the condition is true
}
```

The `range` statement can be used as a single statement without the collection. The syntax of the single statement `range` without the collection is as follows.

```go
for index, value := range collection
```

The `range` statement can be used as a single statement without the collection and the semicolon. The syntax of the single statement `range` without the collection and the semicolon is as follows.

```go
for index, value := range
```

## Jump Statements

Jump statements are the statements that control the flow of the program based on the condition. There are three types of jump statements in Go. They are `break`, `continue`, and `goto`.

### break

`break` is the jump statement that executes the code based on the condition. It is similar to the `switch` statement. The syntax of `break` is as follows.

```go
break
```

### continue

`continue` is the jump statement that executes the code based on the condition. It is similar to the `break` statement. The syntax of `continue` is as follows.

```go
continue
```

### goto

`goto` is the jump statement that executes the code based on the condition. It is similar to the `continue` statement. The syntax of `goto` is as follows.

```go
goto label
```

## Defer Statement

`defer` is the statement that executes the code based on the condition. It is similar to the `goto` statement. The syntax of `defer` is as follows.

```go
defer function()
```

## Panic Statement

`panic` is the statement that executes the code based on the condition. It is similar to the `defer` statement. The syntax of `panic` is as follows.

```go
panic("error message")
```

## Recover Statement

`recover` is the statement that executes the code based on the condition. It is similar to the `panic` statement. The syntax of `recover` is as follows.

```go
recover()
```


## What we have learned so far
- Control Flow
    - Branching Statements
        - if
        - switch
    - Looping Statements
        - for
        - range
    - Jump Statements
        - break
        - continue
        - goto
    - Defer Statement
    - Panic Statement
    - Recover Statement

## Conclusion

## References
- [Go Programming Language](https://go.dev/ "Go Programming Language")
- [Go by Example](https://gobyexample.com/ "Go by Example")
- [Go Documentation](https://go.dev/doc/ "Go Documentation")
- [Go Playground](https://play.golang.org/ "Go Playground")
- [Go Tour](https://tour.golang.org/welcome/1 "Go Tour")

