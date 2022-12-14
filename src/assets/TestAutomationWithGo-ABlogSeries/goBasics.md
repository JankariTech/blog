---
title: Go Basics - The Starting Point
authorName: Prarup Gurung (प्रारुप गुरुङ्ग)
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110938-crop-colour-800.jpg
authorLink: https://github.com/grgprarup
createdAt: Dec 6, 2022
tags: golang, gopher, go, test automation, testing, bdd, godog
banner: https://camo.githubusercontent.com/2b507540e2681c1a25698f246b9dca69c30548ed66a7323075b0224cbb1bf058/68747470733a2f2f676f6c616e672e6f72672f646f632f676f706865722f6669766579656172732e6a7067
seriesTitle: Journey With Go - A Blog Series
episode: 1
---

**[गो](https://go.dev "Go in Nepali")** **"Journey With Go - A Blog Series"** about the basics of Go `Go Basic`, advanced concepts in Go `Go Beyond Basics`, testing with go `Godog as Test Framework` and many more. This is the first blog in the series. In this blog, we will learn about installing Go, and initializing a Go project. We will also learn about the basic data types, variables, and constants in Go. So, let's get started.

## Introduction
- Designed and Developed at Google by Robert Griesemer, Rob Pike, and Ken Thompson
- Go is an open-source programming language backed by Google
- Go is statically typed i.e. you need to declare the type of a variable before using it
- Go is compiled programming language i.e. you need to compile your code before running it

## Why Go?

- Free and open source
- Automatic Garbage Collection
- Richer built-in types
- Robust standard library
- Built-in support for concurrency
- Support function with multiple return values
- Beautiful error handling
- CSP-style concurrency

## Installation

**[Go](https://go.dev "Go")** is available for any OS platform i.e. Windows, Linux, and Mac OS X. The installation is very simple. You can download the latest version of Go from [here](https://go.dev/doc/install "Here"). The latest version of Go at the time of writing this article is 1.19.4.

Note: From here the overall setup will be done in Ubuntu 22.04. If you are using any other OS, please follow the [official documentation](https://go.dev/doc/install "Official Documentation").

### Installing Go
```bash
# Remove any existing Go installation
rm -rf /usr/local/go

# Extract the downloaded archive to /usr/local
tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz
```

### Setting Environment Variables

Go requires you to set two environment variables GOROOT and GOPATH. GOROOT points to the location of the Go installation directory whereas GOPATH points to the location of your workspace directory.

1. Setting **GOROOT**
```bash
export GOROOT=/usr/local/go
```
2. Setting **GOPATH**
```bash
export GOPATH=$HOME/go
```
3. Setting **PATH**
```bash
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```
### Verifying Installation
To verify the installation, you can run the following command to check the version of Go.
```go
go version
```
![image](/src/assets/TestAutomationWithGo-ABlogSeries/images/go-version.png "Go Version Check")
You can see the version of Go as shown in the image. Here, the version of Go is 1.19.4.

### Initializing a Go Project
Go uses the `go mod` command to initialize a Go project. The `go mod` command creates a `go.mod` file in the current directory. The `go.mod` file contains information about the project and its dependencies.

```go
// go-basics is the name of the project/module
go mod init go-basics
```
![image](/src/assets/TestAutomationWithGo-ABlogSeries/images/go-mod-init.png "Go Project Initialization")

### Running the Program
To run the program, you need to create a file with the extension `.go`. The `go run` command compiles and runs the program.

```go
go run example.go
```
## Building Blocks of Go

Before you begin to learn how to code in Go, you need to understand the basic building blocks of Go.

### Program Structure
```go
// The package clause starts every source file.
package main

// The import statement declares the packages that are used in the file
import "fmt"

// The main function is the entry point of the program
func main() {
    // The Println function prints the string to the standard output
    fmt.Println("Hello World")
}
```

### Data Types

Go is a statically typed language. You need to give type to the variable before using it. Go supports the following basic types:
- **Boolean Type** is used to represent a logical value. It can have one of the two values: true or false. The `bool` keyword is used to declare a boolean variable.
- **String Type** is used to represent a sequence of characters. The `string` keyword is used to declare a string variable.
- **Numeric Types**
  - **Integer Type** is used to represent a whole number

      | Datatype  | Description                                   |
      | --------- | --------------------------------------------- |
      | `int`     | Either 32 or 64 bit signed integer            |
      | `int8`    | 8-bit signed integer                          |
      | `int16`   | 16-bit signed integer                         |
      | `int32`   | 32-bit signed integer                         |
      | `int64`   | 32-bit signed integer                         |
      | `uint`    | Either 32 or 64 bit unsigned integer          |
      | `uint8`   | 8-bit unsigned integer                        |
      | `uint16`  | 16-bit unsigned integer                       |
      | `uint32`  | 32-bit unsigned integer                       |
      | `uint64`  | 64-bit unsigned integer                       |
      | `uintptr` | Unsigned integer type, can hold pointer value |
      | `byte`    | Same as of uint8                              |
      | `rune`    | Same as of int32                              |

  - **Floating Point Type** is used to represent a fractional number
  
      | Datatype  | Description                           |
      | --------- | ------------------------------------- |
      | `float32` | 32-bit IEEE 754 floating-point number |
      | `float64` | 64-bit IEEE 754 floating-point number |
  
  - **Complex Type** is used to represent a complex number

      | Datatype     | Description                                                             |
      | ------------ | ----------------------------------------------------------------------- |
      | `complex64`  | Complex numbers which contain float32 as a real and imaginary component |
      | `complex128` | Complex numbers which contain float64 as a real and imaginary component |

### Variables
Variable is the storage unit in every programming language. It is used to store data. In Go, you need to declare a variable before using it. You can declare a variable using the `var` keyword.

#### Declaring Variables
Go supports two ways of declaring variables.
- Declare a variable and assign a value to it
- Declare a variable and assign a value to it later

##### Declaring and Assigning a Value to a Variable

**1. Declaring single variable**

The following code declares a variable named `number` and assigns a value to it.
```go
var number int = 10
```
A similar code can be written as follows:
```go
var number = 10
```
In such type of declaration Go automatically infers the type of the variable from the value assigned to it.

The variable can be declared without the `var` keyword as follows:
```go
number := 10
```
**2. Declaring multiple variables**

The following code declares two variables named `firstNumber` and `secondNumber`
```go
var firstNumber, secondNumber int = 10, 20
```
A similar code can be written as follows:
```go
var firstNumber, secondNumber = 10, 20
```
The variable can be declared without the `var` keyword as follows:
```go
firstNumber, secondNumber := 10, 20
```

##### Declaring and Assigning a Value to a Variable Later

The following code declares a variable named name and assigns a value to it later.
```go
var name string

name = "Prarup Gurung"
```
But we cannot declare a variable with the `:=` syntax and assign a value to it later. Also, we cannot declare a variable without the keyword `var` and assign a value to it later.

### Constants

Constants are declared like variables, but with the `const` keyword. Constants can be a character, string, boolean, or numeric values. Constants cannot be declared using the := syntax.

#### Declaring a Constant

The following code declares a constant named name and assigns a value to it.
```go
const name string = "Prarup Gurung"
```
#### Declaring Multiple Constants

You can declare multiple constants in a single line. The following code declares two constants named name, and address.
```go
const name, address string = "Prarup Gurung", "Pokhara"
```

## What we have learned so far
- How to **install Go**
- How to **initialize a Go project**
- How to **run the program**
- **Basic building blocks of Go**
- How to declare **variables**
- How to declare **constants**

## Conclusion
In this blog, we have learned how to install Go and how to initialize a Go project. We have also learned the basic building blocks of Go. In the next blog, we will learn about the control flow statements in Go. Stay tuned!!!

## References
- [Go Programming Language](https://go.dev/ "Go Programming Language")
- [Go by Example](https://gobyexample.com/ "Go by Example")
- [Go Documentation](https://go.dev/doc/ "Go Documentation")
- [Go Playground](https://play.golang.org/ "Go Playground")
- [Go Tour](https://tour.golang.org/welcome/1 "Go Tour")

**PC:** **Banner Image by [Renee French](https://reneefrench.blogspot.com/ "Renee French"), licensed under [Creative Commons 4.0 Attributions license](https://creativecommons.org/licenses/by/4.0/ "Creative Commons 4.0 Attributions license").**