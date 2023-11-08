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

In this blog, we will learn about the `Rune`, `String`, `Array`, `Function`, `Struct`, `Method`, and `Interface` in
Go. **So, let's get started.**

## **1. Rune**

In Go, a rune is a built-in type that represents a Unicode code point. A rune literal is expressed as one or more
characters enclosed in single quotes, as in 'x' or '\n'.
Each Unicode code point corresponds to a unique character, which can be a letter, a numeral, a symbol, or an emoji.

**Examples:**

```go
package main

import (
  "fmt"
)

func main() {
  var om rune = 'ॐ'             // rune literal declared using the `rune` keyword, use single quotes
  fmt.Println(om)               // prints the Unicode code point for the Om symbol
  fmt.Printf("%T\n", om)        // prints the underlying type of rune
  fmt.Println(string(om))       // prints the string representation of the Om symbol

  // more examples
  var heart rune = '♥'
  fmt.Println(heart)
  fmt.Println(string(heart))

  var smiley rune = '😀'
  fmt.Println(smiley)
  fmt.Println(string(smiley))
}
```

**Output:**

```bash
2384
int32
ॐ
9829
♥
128512
😀
```

It is particularly important when dealing with text in different languages or when working with special symbols and
emojis. It ensures that each character is treated as a single entity, regardless of its complexity or language.

## **2. String**

In Go, a string is a sequence of bytes (not characters) that is used to represent text. Strings are immutable, which
means once created, their values cannot be changed. However, you can assign a new value to a string variable, which will
create a new string.

_Note: The rune is encoded with single quotes, whereas the string is encoded with double quotes._

**Examples:**

```go
package main

import (
  "fmt"
)

func main() {
  // declaring a variable `greeting` of type string using `string` keyword
  var greeting string = "Hello, World!"
  fmt.Println(greeting)                 // it prints the value of the `greeting`
  fmt.Printf("%T\n", greeting)          // it prints the type of the `greeting`
  fmt.Println(len(greeting))            // it prints the length of bytes in the `greeting`
  fmt.Println(greeting[0])              // it prints the byte code of the char in index 0
  fmt.Println(string(greeting[0]))      // it prints the string representation of the char in index 0
  fmt.Println("Hello, " + "World!")     // it prints the concatenated string `Hello, ` and `World!` with `+`

  // try to change the value at index 1, i.e. `e` to `E` in the `greeting`
  greeting[1] = 'E'                     // it gives an error `cannot assign to greeting[1]`

  // try to assign the new value of the `greeting` to `Hello, Nepal!`
  greeting = "Hello, Nepal!"            // it creates a new string `Hello, Nepal!` and assigns it to the `greeting`
  fmt.Println(greeting)                 // it prints the new value of the `greeting`
}
```

**Output:**

```bash
Hello, World!
string
13
72
H
Hello, World!
cannot assign to greeting[1]
Hello, Nepal!
```

### **2.1. Slicing of a String**

Slicing is a mechanism to extract a portion of a string. It is done by specifying the start and end indices of the part
of the string that you want to extract. The syntax for slicing a string is `string[start:end]`.

Taking the above `greeting` variable as example:

| slice            | output        | description                                                                                      |
|------------------|---------------|--------------------------------------------------------------------------------------------------|
| `greeting[7:]`   | World!        | It gives the sub-string from index 7 to the end                                                  |
| `greeting[:5]`   | Hello         | It gives the sub-string from the beginning to index 5, excluding index 5 value                   |
| `greeting[7:12]` | World         | It gives the sub-string from index 7 to index 12, including index 7 and excluding index 12 value |
| `greeting[:]`    | Hello, World! | It gives the entire string, same as printing `greeting`                                          |

### **2.2. Iterating over a String**

Strings are immutable, but you can iterate over them using a for loop with range.

**Examples:**

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

### **2.3. len Vs RuneCountInString**

The `len` function returns the number of bytes in a string, whereas the `utf8.RuneCountInString` function returns the number of runes in a string.

**Examples:**

```go
package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	// let's look at the example of English language
	greeting := "Hello, World!"
	fmt.Println(len(greeting))                            // it prints the number of bytes in the string given by len function
	fmt.Println(utf8.RuneCountInString(greeting))         // it prints the number of runes in the string given by utf8.RuneCountInString function

	// Now, take an example of Nepali language
	greetingInNepali := "नमस्कार संसार";
	fmt.Println(len(greetingInNepali))                    // it prints the number of bytes in the string given by len function
	fmt.Println(utf8.RuneCountInString(greetingInNepali)) // it prints the number of runes in the string given by utf8.RuneCountInString function
}
```

**Output:**

```bash
13
13
37
13
```

In the example for the English language, the value returned by the `len` function is same as of the value returned by the `utf8.RuneCountInString` function.

However, for the Nepali language, the value returned by the `len` function is different from the value returned by the `utf8.RuneCountInString` function. This is because the Nepali language uses the UTF-8 encoding scheme, which uses 3 bytes to represent a single character. Therefore, the string "สวัสดี" has 18 bytes, but only 6 runes.

## **3. Array**

In Go, an array is a fixed-length sequence of elements of the same type but the content of array is mutable (i.e. can be changed). Arrays are useful when you know the number of elements that you want to store in advance.

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
	fmt.Println(numbers)              // by default 0 will be assigned to array elements

	// declaring an array of type string with 3 elements
	var languages [3]string
	fmt.Println(languages)            // by default empty array will be created

	// declaring an array of type bool with 2 elements
	var truths [2]bool
	fmt.Println(truths)               // by default false will be assigned to array elements

	// declaring an array of type float64 with 4 elements
	var scores [4]float64
	fmt.Println(scores)               // by default 0 will be assigned to array elements
}
```

**Output:**

```bash
[0 0 0 0 0]
[  ]
[false false]
[0 0 0 0]
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
	fmt.Println(numbers)              // prints the value of integer array

	// initialization of an array of type string with 3 elements
	var languages [3]string = [3]string{"Go", "Python", "JavaScript"}
	fmt.Println(languages)            // prints the value of string array

	// initialization of an array of type bool with 2 elements
	var truths [2]bool = [2]bool{true, false}
	fmt.Println(truths)               // prints the value of boolean array

	// initialization of an array of type float64 with 3 elements
	var scores [3]float64 = [3]float64{9.5, 8.2, 7.8}
	fmt.Println(scores)               // prints the value of float64 array
}
```

**Output:**

```bash
[1 2 3]
[Go Python JavaScript]
[true false]
[9.5 8.2 7.8]
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
  fmt.Println(numbers)              // prints the value of the array

  // changing the value of the first element
  numbers[0] = 4
  fmt.Println(numbers)              // prints the new value of the array

  // accessing an element of the array
  fmt.Println(numbers[0])           // prints the value of the first element

  // adding a new element to the array is not possible
  numbers[3] = 5                    // invalid array index 3 (out of bounds for 3-element array)

  // accessing an element of non-existing index is not possible
  fmt.Println(numbers[3])           // invalid array index 3 (out of bounds for 3-element array)
}
```

**Output:**

```bash
[1 2 3]
[4 2 3]
4
invalid argument: index 3 out of bounds
invalid argument: index 3 out of bounds
```


### **3.4. Array Length**

You can get the length of an array using the `len` function.

**Examples:**

```go
package main

import (
  "fmt"
)

func main() {
  var numbers [3]int = [3]int{1, 2, 3}
  fmt.Println(len(numbers))     // prints the length of the array
}
```

**Output:**

```bash
3
```

### **3.5. Iterating over Array**

You can iterate over an array using a for loop with range.

**Examples:**

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

**Examples:**

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

A function must be defined before it can be called. A function definition must have a name, and a body with optional list of parameters and a return type. In Go, the `func` keyword is used to define a function.

A function can be defined using the following syntax:

**Syntax:**

```go
func <function_name>(<comma-separated-parameters>) <return_type> {
  // function body is the code that is executed when the function is called
}
```

**Examples:**

```go
// defining a function named `greet`
func greet(name string) {           // function name is `greet`, parameter is `name` of type string
  fmt.Println("Hello, " + name)     // function body enclosed in curly braces
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
  greet("World")    // Calling the `greet` function
}
```

**Output:**

```bash
Hello, World
```

### **4.3. Function Parameters**

Function can have zero or more parameters. Parameters are variables that are used to pass values to a function. They are declared in the function definition. The values passed to a function are called arguments.

**Examples:**

```go
package main

import (
  "fmt"
)

// defining a function named `printHelloWorld` without parameters
func printHelloWorld() {
  fmt.Println("Hello, World!")
}

// defining a function named `add` that takes two integer parameters
func add(a int, b int) {
  fmt.Println(a + b)
}

func main() {
  printHelloWorld()                // Calling the `printHelloWorld` function, without arguments
  add(1, 2)                        // Calling the `add` function, with two arguments
}
```

**Output:**

```bash
Hello, World!
3
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
  return a + b              // `return` keyword is used to return values from a function
}

// defining a function named `swap` that takes two integer parameters and returns two integers
func swap(a int, b int) (int, int) {
  return b, a
}

func main() {
  greet("World")            // Calling the `greet` function
  fmt.Println(add(1, 2))    // Calling the `add` function

  sum := add(3,6)           // Also, the `add` function can be called and store the returned value in variable `sum`
  fmt.Println(sum)

  x, y := swap(1, 2)        // Calling the `swap` function and storing the returned values in variables `x` and `y`
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

The `struct` keyword is used to define a struct in Go.

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
  student := Student{"John Doe", 1234567890, "Kathmandu"}       // order of values must match the order of fields
  fmt.Println(student)
}
```

**Output:**

```bash
{John Doe 1234567890 Kathmandu}
```

### **5.3. Manipulation of Struct Fields**

The struct fields are variables that are used to store values in a struct. They are declared in the struct definition. Fields can be manipulated using the dot operator.

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
  fmt.Println(student.name)
  fmt.Println(student.phoneNumber)
  fmt.Println(student.address)

  // changing the value of a field
  student.name = "Jane Doe"
  fmt.Println(student.name)
}
```

**Output:**

```bash
{John Doe 1234567890 Kathmandu}
John Doe
1234567890
Kathmandu
Jane Doe
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
  fmt.Println(triangle)

  // calling the `area` method
  area := triangle.area()                                           // triangle is the receiver
  fmt.Println("Area of triangle is " + fmt.Sprintf("%.2f", area))
}
```

**Output:**

```bash
{10 5}
Area of triangle is 25.00
```

### **6.3. Function Vs Method**

A function is a block of code that performs a specific task whereas a method is a function that is associated with a type. We can create multiple methods of same name associated to different types but the function name must be different (see example of [7.2](#L783)).

Let's see the difference between a function and a method with the help of an example.

**Examples:**

```go
package main

import (
  "fmt"
)

// defining a function named `getAreaOfTriangle` that takes two float64 parameters and returns a float64
func getAreaOfTriangle(base float64, height float64) float64 {
  return 0.5 * base * height
}

type Triangle struct {
    base   float64
    height float64
}

// defining a method named `getAreaOfTriangle` that takes no parameters and returns a float64
func (t Triangle) getAreaOfTriangle() float64 {
  return 0.5 * t.base * t.height
}

func main() {
  // calling the `getAreaOfTriangle` function
  area := getAreaOfTriangle(10, 5)
  fmt.Println("Area of triangle is " + fmt.Sprintf("%.2f", area))

  triangle := Triangle{base: 10, height: 5}                         // creating a new instance of the `Triangle` struct
  fmt.Println(triangle)

  // calling the `getAreaOfTriangle` method
  area = triangle.getAreaOfTriangle()                               // triangle is the receiver
  fmt.Println("Area of triangle is " + fmt.Sprintf("%.2f", area))
}
```

**Output:**

```bash
Area of triangle is 25.00
{10 5}
Area of triangle is 25.00
```

So, in the above example, we have defined a function named `area` that takes two float64 parameters and returns a float64. We have also defined a method named `area` that takes no parameters and returns a float64. The function and the method have the same name, but they are different because the function is not associated with any type, whereas the method is associated with the `Triangle` struct.

## **7. Interface**

In Go, an interface is a collection of method signatures. It is useful for grouping related methods together. Interfaces are useful when you want to model real-world entities that have multiple behaviors.

### **7.1. Interface Definition**

The `interface` keyword is used to define an interface in Go.

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
  fmt.Println(triangle)

  area := triangle.area()                                                       // calling the `area` method associated with the `Triangle` struct
  fmt.Println("Area of triangle is " + fmt.Sprintf("%.2f", area))

  perimeter := triangle.perimeter()                                             // calling the `perimeter` method associated with the `Triangle` struct
  fmt.Println("Perimeter of triangle is " + fmt.Sprintf("%.2f", perimeter))

  var rectangle Shape = Rectangle{length: 10, width: 5}
  fmt.Println(rectangle)

  area = rectangle.area()                                                       // calling the `area` method associated with the `Rectangle` struct
  fmt.Println("Area of rectangle is " + fmt.Sprintf("%.2f", area))

  perimeter = rectangle.perimeter()
  fmt.Println("Perimeter of rectangle is " + fmt.Sprintf("%.2f", perimeter))    // calling the `perimeter` method associated with the `Rectangle` struct
}
```

**Output:**

```bash
{10 5}
Area of triangle is 25.00
Perimeter of triangle is 26.18
{10 5}
Area of rectangle is 50.00
Perimeter of rectangle is 30.00
```

## What we have learned so far

In this blog, we have learned how to declare, define, manipulate, and use the following terms in Go language:
- Rune
- String
- Array
- Function
- Struct
- Method
- Interface

In the next blog, we will learn about some advanced topics like Errors, Goroutines, and Channels in Go language.

**_Keep Learning and Keep Practicing_** 👍

**Stay tuned!!!**

## References

- [Go Programming Language](https://go.dev/ "Go Programming Language")
- [Go by Example](https://gobyexample.com/ "Go by Example")
- [Go Documentation](https://go.dev/doc/ "Go Documentation")
- [Go Playground](https://play.golang.org/ "Go Playground")
- [Go Tour](https://tour.golang.org/welcome/1 "Go Tour")

**PC:** **Banner Image by [Maria Letta](https://github.com/MariaLetta/free-gophers-pack "Maria Letta"), licensed under [Creative Commons 0 license](https://creativecommons.org/public-domain/cc0/ "Creative Commons 0 license").**
