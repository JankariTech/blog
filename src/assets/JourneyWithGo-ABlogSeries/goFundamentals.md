---
title: Fundamentals of Go - FARMISS
authorName: Prarup Gurung (प्रारुप गुरुङ्ग)
authorAvatar: https://avatars.githubusercontent.com/u/8559121?v=4
authorLink: https://github.com/grgprarup
createdAt: Oct 26, 2023
tags: golang, go, function, array, rune, method, interface, string, struct
banner: https://blog.jankaritech.com/src/assets/JourneyWithGo-ABlogSeries/images/go-fundamentals-banner.png
seriesTitle: Journey With Go - A Blog Series
episode: 3
---

**[गो](https://go.dev "Go in Nepali")** **"Journey With Go - A Blog Series"** about the basics of Go `Go Basic`,
advanced concepts in Go `Go Beyond Basics`, testing with go `Godog as Test Framework` and many more.

This is the third installment of the series. You are here which means you have most likely read the first and second blog of
the series. If you haven't, please read them
first [Go Basics](https://blog.jankaritech.com/#/blog/Journey%20With%20Go%20-%20A%20Blog%20Series/Go%20Basics%20-%20The%20Starting%20Point "Go Basics"), [Control Statements](https://blog.jankaritech.com/#/blog/Journey%20With%20Go%20-%20A%20Blog%20Series/Control%20Statements%20-%20Control%20Your%20Go "Control Statements").

In this blog, we will learn about the `Function`, `Array`, `Rune`, `Method`, `Interface`, `String`, and `Struct` (FARMISS) in
Go. **So, let's get started.**

## **1. Rune**

In Go, a rune is a built-in type that represents a Unicode code point. A rune literal is expressed as one or more
characters enclosed in single quotes, as in 'x' or '\n'.
Each Unicode code point corresponds to a unique character, which can be a letter, a numeral, a symbol, or an emoji.

```go
package main

import (
  "fmt"
)

func main() {
  var om rune = 'ॐ'       // rune literal declared using `rune` keyword, use single quotes
  fmt.Println(om)         // 2384, which is the Unicode code point for the Om symbol
  fmt.Printf("%T\n", om)  // int32, which is the underlying type of rune
  fmt.Println(string(om)) // ॐ, which is the string representation of the Om symbol

  // more examples
  var heart rune = '♥'
  fmt.Println(heart)         // 9829
  fmt.Println(string(heart)) // ♥

  var smiley rune = '😀'
  fmt.Println(smiley)         // 128512
  fmt.Println(string(smiley)) // 😀
}
```

It is particularly important when dealing with text in different languages or when working with special symbols and
emojis. It ensures that each character is treated as a single entity, regardless of its complexity or language.

## **2. String**

In Go, a string is a sequence of bytes (not characters) that is used to represent text. Strings are immutable, which
means once created, their values cannot be changed. However, you can assign a new value to a string variable, which will
create a new string.

_Note: The rune is encoded with single quotes, whereas the string is encoded with double quotes._

```go
package main

import (
  "fmt"
)

func main() {
  // declaring a variable `greeting` of type string using `string` keyword
  var greeting string = "Hello, World!"
  fmt.Println(greeting)             // Hello, World!
  fmt.Printf("%T\n", greeting)      // string, which is the underlying type of string
  fmt.Println(len(greeting))        // 13, which is the number of bytes in the string
  fmt.Println(greeting[0])          // 72, which is the ASCII code for H
  fmt.Println(string(greeting[0]))  // H, which is the string representation of 72
  fmt.Println("Hello, " + "World!") // Hello, World!, + can be used to concatenate strings
}
```

### **2.1. Slicing of String**

Slicing is a mechanism to extract a portion of a string. It is done by specifying the start and end indices of the part
of the string that you want to extract. The syntax for slicing a string is `string[start:end]`.

Taking the above `greeting` variable as example:

| slice            | output        | description                                                                                    |
|------------------|---------------|------------------------------------------------------------------------------------------------|
| `greeting[7:]`   | World!        | It gives the sub-string from index 7 to the end                                                |
| `greeting[:5]`   | Hello         | It gives the sub-string from the beginning to index 5, excludes index 5 value                  |
| `greeting[7:12]` | World         | It gives the sub-string from index 7 to index 12, includes index 7 and excludes index 12 value |
| `greeting[:]`    | Hello, World! | It gives the entire string, same as printing `greeting`                                        |

### **2.2. Iterating over String**

Strings are immutable, but you can iterate over them using a for loop with range.

```go
package main

import (
  "fmt"
)

func main() {
  greeting := "Hello, World!"
  for index, char := range greeting {
    fmt.Printf("Index: %d, Value: %c\n", index, char)
  }
}
```
**Output:**
```bash
Index: 0, Value: H
Index: 1, Value: e
Index: 2, Value: l
Index: 3, Value: l
Index: 4, Value: o
Index: 5, Value: ,
Index: 6, Value:
Index: 7, Value: W
Index: 8, Value: o
Index: 9, Value: r
Index: 10, Value: l
Index: 11, Value: d
Index: 12, Value: !
```

### **2.3. `len` Vs `RuneCountInString`**

The `len` function returns the number of bytes in a string, whereas the `utf8.RuneCountInString` function returns the number of runes in a string.

```go
package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	// let's look at the example of English language
	greeting := "Hello, World!"
	fmt.Println(len(greeting))                    // 13, it returns the number of bytes in the string
	fmt.Println(utf8.RuneCountInString(greeting)) // 13, it returns the number of runes in the string

	// Now, take an example of Thai language
	greeting := "สวัสดี"
	fmt.Println(len(greeting))                    // 18, it returns the number of bytes in the string
	fmt.Println(utf8.RuneCountInString(greeting)) // 6, it returns the number of runes in the string
}
```

In the example for the English language, the value returned by the `len` function is same as of the value returned by the `utf8.RuneCountInString` function.

However, for the Thai language, the value returned by the `len` function is different from the value returned by the `utf8.RuneCountInString` function. This is because the Thai language uses the UTF-8 encoding scheme, which uses 3 bytes to represent a single character. Therefore, the string "สวัสดี" has 18 bytes, but only 6 runes.

## **3. Array**

In Go, an array is a fixed-length sequence of elements of the same type. Arrays are useful when you know the number of elements that you want to store in advance.

### **3.1. Declaration of Array**

Declaration of an array can be done using the following syntax:

**Syntax:**
```go
var <array_name> [<size>] <data_type>
```

**Examples:**
```go
package main

import (
	"fmt"
)

func main(){
	// declaring an array of type int with 5 elements
	var numbers [5]int
	fmt.Println(numbers) // [0 0 0 0 0], by default 0 will be assigned to array elements

	// declaring an array of type string with 3 elements
	var languages [3]string
	fmt.Println(languages) // [  ], by default empty array will be created

	// declaring an array of type bool with 2 elements
	var truths [2]bool
	fmt.Println(truths) // [false false], by default false will be assigned to array elements

	// declaring an array of type float64 with 4 elements
	var scores [4]float64
	fmt.Println(scores) // [0 0 0 0], by default 0 will be assigned to array elements
}
```

### **3.2. Initialization of Array**

You can initialize an array using the following syntax:

**Syntax:**
```go
var <array_name> [<size>] <data_type> = [<size>]<data_type>{<comma-separated-values>}
```

**Examples:**
```go
package main

import (
	"fmt"
)

func main(){
	// initialization of an array of type int with 3 elements
	var numbers [3]int = [3]int{1, 2, 3}
	fmt.Println(numbers) // [1 2 3]

	// initialization of an array of type string with 3 elements
	var languages [3]string = [3]string{"Go", "Python", "JavaScript"}
	fmt.Println(languages) // [Go Python JavaScript]

	// initialization of an array of type bool with 2 elements
	var truths [2]bool = [2]bool{true, false}
	fmt.Println(truths) // [true false]

	// initialization of an array of type float64 with 3 elements
	var scores [3]float64 = [3]float64{9.5, 8.2, 7.8}
	fmt.Println(scores) // [9.5 8.2 7.8]
}
```

### **3.3. Manipulation of Array**

You can manipulate an array using the following syntax:

**Syntax:**
```go
<array_name>[<index>] = <value>
```

**Examples:**
```go
package main

import (
  "fmt"
)

func main() {
  var numbers [3]int = [3]int{1, 2, 3}
  fmt.Println(numbers) // [1 2 3]

  // changing the value of the first element
  numbers[0] = 4
  fmt.Println(numbers) // [4 2 3]

  // accessing an element of the array
  fmt.Println(numbers[0]) // 4, which is the value of the first element

  // adding a new element to the array is not possible
  numbers[3] = 5 // invalid array index 3 (out of bounds for 3-element array)

  // accessing an element of non-existing index is not possible
  fmt.Println(numbers[3]) // invalid array index 3 (out of bounds for 3-element array)
}
```


### **3.4. Array Length**

You can get the length of an array using the `len` function.

```go
package main

import (
  "fmt"
)

func main() {
  var numbers [3]int = [3]int{1, 2, 3}
  fmt.Println(len(numbers)) // 3, which is the length of the array
}
```

### **3.5. Iterating over Array**

You can iterate over an array using a for loop with range.

```go
package main

import (
  "fmt"
)

func main() {
  var languages [3]string = [3]string{"Go", "Javascript", "Python"}
  for index, language := range languages {
    fmt.Printf("Index: %d, Value: %s\n", index, language)
  }
}
```

**Output:**
```bash
Index: 0, Value: Go
Index: 1, Value: Javascript
Index: 2, Value: Python
```

An alternative way to iterate over an array is to use a for loop with the length of the array.

```go
package main

import (
  "fmt"
)

func main() {
  var languages [3]string = [3]string{"Go", "Javascript", "Python"}
  for i := 0; i < len(languages); i++ {
    fmt.Printf("Index: %d, Value: %s\n", i, languages[i])
  }
}
```

**Output:**
```bash
Index: 0, Value: Go
Index: 1, Value: Javascript
Index: 2, Value: Python
```

## **4. Function**

In Go, a function is a block of code that performs a specific task. Functions are useful when you want to reuse the same code multiple times. They also help in organizing your code into smaller chunks, which makes it easier to read and maintain.

### **4.1. Function Definition**
A function must be defined before it can be called. A function definition must have a name, a list of parameters, a return type, and a body. In Go, a `func` keyword is used to define a function.

A function can be defined using the following syntax:

**Syntax:**
```go
func <function_name>(<comma-separated-parameters>) <return_type> {
  // function body is the code that is executed when the function is called
}
```

**Examples:**
```go
package main

import (
  "fmt"
)

// defining a function named `greet` that takes a string parameter and returns nothing
func greet(name string) {
  fmt.Println("Hello, " + name)
}

func main() {
  greet("World")
}
```

In the above example, we have declared a function named `greet` that takes a string parameter named `name` and returns nothing.

### **4.2. Function Call**

A function can be called using the following syntax:

**Syntax:**
```go
<function_name>(<comma-separated-arguments>)
```

**Examples:**
```go
package main

import (
  "fmt"
)

func greet(name string) {
  fmt.Println("Hello, " + name)
}

func main() {
  greet("World") // Calling the `greet` function
}
```

### **4.3. Function Parameters**

Function can have zero or more parameters. Parameters are variables that are used to pass values to a function. They are declared in the function definition. The values passed to a function are called arguments.

**Examples:**
```go
package main

import (
  "fmt"
)

// defining a function named `greet` that takes a string parameter and returns nothing
func greet(name string) {
  fmt.Println("Hello, " + name)
}

// defining a function named `add` that takes two integer parameters and returns an integer
func add(a int, b int) int {
  return a + b
}

func main() {
  greet("World") // Calling the `greet` function
  fmt.Println(add(1, 2)) // Calling the `add` function
}
```

### **4.4. Function Return Type**

A function can return zero or more values. The return-type of a function is declared in the function definition. If a function returns more than one value, then the return-types are enclosed in parentheses.

**Examples:**
```go
package main

import (
  "fmt"
)

// defining a function named `greet` that takes a string parameter and returns nothing
func greet(name string) {
  fmt.Println("Hello, " + name)
}

// defining a function named `add` that takes two integer parameters and returns an integer
func add(a int, b int) int {
  return a + b // `return` keyword is used to return values from a function
}

// defining a function named `swap` that takes two integer parameters and returns two integers
func swap(a int, b int) (int, int) {
  return b, a
}

func main() {
  greet("World") // Calling the `greet` function
  fmt.Println(add(1, 2)) // Calling the `add` function

  sum := add(3,6) // Calling the `add` function and storing the returned value in a variable `sum`
  fmt.Println(sum)

  x, y := swap(1, 2) // Calling the `swap` function and storing the returned values in variables `x` and `y`
  fmt.Println(x, y)
}
```

**Output:**
```bash
Hello, World
3
9
2 1
```

## **5. Struct**

In Go, a struct is a composite data type that represents a collection of fields. It is useful for grouping related data together. Structs are useful when you want to model real-world entities that have multiple properties. Struct is also known as a user-defined type.

### **5.1. Struct Definition**

`struct` keyword is used to define a struct in Go.

A struct can be defined using the following syntax:

**Syntax:**
```go
type <struct_name> struct {
  <comma-separated-fields>
}
```

**Examples:**

```go
package main

// defining a struct named `Student` with three fields `name`, `phone number`, `address`
type Student struct {
  name        string
  phoneNumber int
  address     string
}
```

### **5.2. Struct Initialization**

A struct can be initialized using the following syntax:

**Syntax:**
```go
<struct_name>{<comma-separated-values>}
```

**Examples:**
```go
package main

import (
  "fmt"
)

type Student struct {
  name        string
  phoneNumber int
  address     string
}

func main() {
  // initializing a struct named `student` with three fields `name`, `phone number`, `address`
  student := Student{"John Doe", 1234567890, "Kathmandu"} // order of values must match the order of fields
  fmt.Println(student) // {John Doe 1234567890 Kathmandu}
}
```

### **5.3. Manipulation of Struct Fields**

A struct can have zero or more fields. Fields are variables that are used to store values in a struct. They are declared in the struct definition. Fields can be manipulated using the dot operator.

**Examples:**
```go
package main

import (
  "fmt"
)

type Student struct {
  name        string
  phoneNumber int
  address     string
}

func main() {
  student := Student{"John Doe", 1234567890, "Kathmandu"}
  fmt.Println(student)

  // accessing a field of a struct
  fmt.Println(student.name) // John Doe
  fmt.Println(student.phoneNumber) // 1234567890
  fmt.Println(student.address) // Kathmandu

  // changing the value of a field
  student.name = "Jane Doe"
  fmt.Println(student.name) // Jane Doe
}
```

## **6. Method**

In Go, a method is a function that is associated with a type. It is useful for grouping related functions together. Methods are useful when you want to model real-world entities that have multiple behaviors. Methods are also known as functions with receivers.

### **6.1. Method Definition**

A method can be defined using the following syntax:

**Syntax:**
```go
func (<receiver>) <method_name>(<comma-separated-parameters>) <return_type> {
  // method body is the code that is executed when the method is called
}
```

**Examples:**
```go
package main

type Triangle struct {
	  base   float64
	  height float64
}

// defining a method named `area` that takes no parameters and returns a float64
func (t Triangle) area() float64 {
  return 0.5 * t.base * t.height
}
```

In the above example we have defined a method associated with a struct named `Triangle` by adding a receiver to the function definition. The receiver is the name of the struct that the method is associated with. The receiver is enclosed in parentheses before the method name.

### **6.2. Method Call**

A method can be called using the following syntax:

**Syntax:**
```go
<receiver>.<method_name>(<comma-separated-arguments>)
```

**Examples:**
```go
package main

import (
  "fmt"
)

type Triangle struct {
	  base   float64
	  height float64
}

func (t Triangle) area() float64 {
  return 0.5 * t.base * t.height
}

func main() {
  triangle := Triangle{base: 10, height: 5}
  fmt.Println(triangle) // {10 5}

  // calling the `area` method
  area := triangle.area() // triangle is the receiver
  fmt.Println("Area of triangle is " + fmt.Sprintf("%.2f", area)) // 25
}
```

### **6.3. Function Vs Method**

A function is a block of code that performs a specific task. A method is a function that is associated with a type. A method is useful for grouping related functions together. A method is also known as a function with a receiver.

Let's see the difference between a function and a method with the help of an example.

```go
package main

import (
  "fmt"
)

// defining a function named `area` that takes two float64 parameters and returns a float64
func area(base float64, height float64) float64 {
  return 0.5 * base * height
}

type Triangle struct {
    base   float64
    height float64
}

// defining a method named `area` that takes no parameters and returns a float64
func (t Triangle) area() float64 {
  return 0.5 * t.base * t.height
}

func main() {
  // calling the `area` function
  area := area(10, 5)
  fmt.Println("Area of triangle is " + fmt.Sprintf("%.2f", area)) // 25

  triangle := Triangle{base: 10, height: 5} // creating a new instance of the `Triangle` struct
  fmt.Println(triangle) // {10 5}

  // calling the `area` method
  area = triangle.area() // triangle is the receiver
  fmt.Println("Area of triangle is " + fmt.Sprintf("%.2f", area)) // 25
}
```

So, in the above example, we have defined a function named `area` that takes two float64 parameters and returns a float64. We have also defined a method named `area` that takes no parameters and returns a float64. The function and the method have the same name, but they are different because the function is not associated with any type, whereas the method is associated with the `Triangle` struct.

## **7. Interface**

In Go, an interface is a collection of method signatures. It is useful for grouping related methods together. Interfaces are useful when you want to model real-world entities that have multiple behaviors.

### **7.1. Interface Definition**

`interface` keyword is used to define an interface in Go.

An interface can be defined using the following syntax:

**Syntax:**
```go
type <interface_name> interface {
  <comma-separated-method-signatures>
}
```

**Examples:**

```go
package main

// defining an interface named `Shape` with a method signature `area` and `perimeter`
type Shape interface {
  area() float64
  perimeter() float64
}
```

In the above example, we have defined an interface named `Shape` with a method signature `area` and `perimeter`. An interface can have zero or more method signatures. A method signature is the name of the method and its parameters and return type.

### **7.2. Interface Implementation**

A type implements an interface by implementing all the methods of the interface. A type can implement more than one interface.

**Examples:**
```go
package main

import (
  "fmt"
  "math"
)

type Shape interface {
  area() float64
  perimeter() float64
}

type Triangle struct {
  base   float64
  height float64
}

type Rectangle struct {
  length float64
  width  float64
}

// implementing a method `area` for the `Triangle` struct
func (t Triangle) area() float64 {
  return 0.5 * t.base * t.height
}

// implementing a method `perimeter` for the `Triangle` struct
func (t Triangle) perimeter() float64 {
  return t.base + t.height + math.Sqrt(math.Pow(t.base, 2)+math.Pow(t.height, 2))
}

// implementing a method `area` for the `Rectangle` struct
func (r Rectangle) area() float64 {
  return r.length * r.width
}

// implementing a method `perimeter` for the `Rectangle` struct
func (r Rectangle) perimeter() float64 {
  return 2 * (r.length + r.width)
}

func main() {
  var triangle Shape = Triangle{base: 10, height: 5}
  fmt.Println(triangle) // {10 5}

  area := triangle.area()
  fmt.Println("Area of triangle is " + fmt.Sprintf("%.2f", area)) // 25

  perimeter := triangle.perimeter()
  fmt.Println("Perimeter of triangle is " + fmt.Sprintf("%.2f", perimeter)) // 25

  var rectangle Shape = Rectangle{length: 10, width: 5}
  fmt.Println(rectangle) // {10 5}

  area = rectangle.area()
  fmt.Println("Area of rectangle is " + fmt.Sprintf("%.2f", area)) // 50

  perimeter = rectangle.perimeter()
  fmt.Println("Perimeter of rectangle is " + fmt.Sprintf("%.2f", perimeter)) // 30
}
```

**Output:**
```bash
{10 5}
Area of triangle is 25.00
Perimeter of triangle is 25.00
{10 5}
Area of rectangle is 50.00
Perimeter of rectangle is 30.00
```

## What we have learned so far

In this blog, we have learned how to declare, define, manipulate, and use the following terms in Go language:
- Rune and String
- Array
- Function and Method
- Struct and Interface

In the next blog, we will learn about some advanced topics like Errors, Goroutines, and Channels in Go language.

*Keep learning and keep practicing*.

**Stay tuned!!!**.

## References

- [Go Programming Language](https://go.dev/ "Go Programming Language")
- [Go by Example](https://gobyexample.com/ "Go by Example")
- [Go Documentation](https://go.dev/doc/ "Go Documentation")
- [Go Playground](https://play.golang.org/ "Go Playground")
- [Go Tour](https://tour.golang.org/welcome/1 "Go Tour")

**PC:** **Banner Image by [Maria Letta](https://github.com/MariaLetta/free-gophers-pack "Maria Letta"), licensed under [Creative Commons 0 license](https://creativecommons.org/public-domain/cc0/ "Creative Commons 0 license").**
