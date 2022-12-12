---
title: Go Basics - The Starting Point
authorName: Prarup Gurung
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110938-crop-colour-800.jpg
authorLink: https://github.com/grgprarup
createdAt: Dec 10, 2022
tags: golang, gopher, go, test automation, testing, bdd, godog
banner: 
seriesTitle: Test Automation With Go - A Blog Series
episode: 1
---

G **"Test Automation With Go - A blog series"** about the basics of Go `Go Basic`, advanced concepts in Go `Go Beyond Basics`, testing with go `Godog as Test Framework` and many more.

## Intro to Go
- Designed and Developed at Google by Robert Griesemer, Rob Pike, and Ken Thompson
- Go is an open source programming language supported by Google
- Go is a statically typed i.e. you need to declare type of variable before using it
- Go is compiled programming language i.e. you need to compile your code before running it

## Why Go?

- Free and open source
- Automatic Garbage Collection
- Richer built-in types
- Robust standard library
- Built-in support for concurrency
- Support function multiple return values
- Beautiful error handling
- CSP-style concurrency

## Installation

**Go** is available for any Operating System platform i.e. Windows, Linux, and Mac OS X. The installation is very simple. You can download the latest version of Go from [here](https://go.dev/doc/install). The latest version of Go at the time of writing this article is 1.19.4.

Note: From here the overall setup will be done for Ubuntu 22.04. If you are using any other OS, please follow the [official documentation](https://go.dev/doc/install).

### Installing Go
```bash
# Remove any existing Go installation
rm -rf /usr/local/go

# Extract the downloaded archive to /usr/local
tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz
```

### Setting Environment Variables

Go requires you to set two environment variables. The first environment variable is GOROOT. This environment variable points to the location of the Go installation directory. The second environment variable is GOPATH. This environment variable points to the location of your workspace directory.

##### 1. Setting **GOROOT**
```bash
export GOROOT=/usr/local/go
```
##### 2. Setting **GOPATH**
```bash
export GOPATH=$HOME/go
```
##### 3. Setting **PATH**
```bash
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```
## Verifying Installation
```go
go version
```
![image](/src/assets/TestAutomationWithGo-ABlogSeries/images/go-version.png)
The version of Go should be 1.19.4.

## Building Blocks of Go

### Program Structure
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}
```

### Data Types

### Variables
Go is a statically typed language. This means that you have to declare the type of a variable before using it. Go supports the following basic types:

bool

string

int

int8

int16

int32

int64

uint

uint8

uint16 uint32 uint64 uintptr byte rune float32 float64 complex64 complex128

The int, uint, and uintptr types are usually 32 bits wide on 32-bit systems and 64 bits wide on 64-bit systems. When you need an integer value you should use int unless you have a specific reason to use a sized or unsigned integer type.
## Declaring Variables

Go supports two ways of declaring variables. The first way is to declare a variable and assign a value to it. The second way is to declare a variable and assign a value to it later.

## Declaring and Assigning a Value to a Variable

The following code declares a variable named name and assigns a value to it.

var name string = "Prarup Gurung"

## Declaring and Assigning a Value to a Variable Later

The following code declares a variable named name and assigns a value to it later.

var name string

name = "Prarup Gurung"

## Declaring Multiple Variables

You can declare multiple variables in a single line. The following code declares three variables named name, age, and isMarried.

var name, age, isMarried = "Prarup Gurung", 30, true

## Short Variable Declaration

Go also supports a short variable declaration. The following code declares a variable named name and assigns a value to it.

name := "Prarup Gurung"

### Constants

### Operators

### Control Flow

### Functions

### Packages


Save the file and run the following command to compile and run the program.

go run hello.go

## Constants

Constants are declared like variables, but with the const keyword. Constants can be character, string, boolean, or numeric values. Constants cannot be declared using the := syntax.

## Declaring a Constant

The following code declares a constant named name and assigns a value to it.

const name string = "Prarup Gurung"

## Declaring Multiple Constants

You can declare multiple constants in a single line. The following code declares three constants named name, age, and isMarried.

const name, age, isMarried = "Prarup Gurung", 30, true

## Data Types

Go is a statically typed language. This means that you have to declare the type of a variable before using it. Go supports the following basic types:

bool

string

int

int8

int16

int32

int64

uint

uint8

uint16

uint32

uint64

uintptr

byte

rune

float32

float64

complex64

complex128

The int, uint, and uintptr types are usually 32 bits wide on 32-bit systems and 64 bits wide on 64-bit systems. When you need an integer value you should use int unless you have a specific reason to use a sized or unsigned integer type.

## Type Conversion

Go is a statically typed language. This means that you have to declare the type of a variable before using it. Go supports the following basic types:



