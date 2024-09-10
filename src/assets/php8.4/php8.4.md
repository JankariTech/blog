---
title: PHP 8.4 - Discover the Latest and Greatest
authorName: Isha Baral
authorAvatar: https://avatars.githubusercontent.com/u/40142570?s=400&u=58ce006ccc626577e503b75788b2e8634a9b7d9c&v=4
authorLink: https://github.com/ishabaral/
createdAt: Sep 10, 2024
tags: php, php8.4, latest
banner: https://blog.jankaritech.com/src/assets/php8.4/images/php8.4.jpg
---

Scheduled for release on November 21, 2024, PHP 8.4 packs some exciting new features and improvements. In this blog post, we'll explore some of the most interesting additions and changes:

  1. New array helper functions
  2. Property hooks
  3. 'new' without parentheses
  4. Implicitly nullable parameter declarations deprecated
  5. New multibyte functions

## 1. New array helper functions

The following variants of array helper functions will be added in PHP 8.4:

  * `array_find()`
  * `array_find_key()`
  * `array_any()`
  * `array_all()`

These functions will take an array and a callback function and return the following:


| functions | Return value |
| :---- | :---- |
| `array_find()` | Returns the first element that meets the callback condition; `NULL` otherwise. |
| `array_find_key()` | Returns the key of the first element that meets the callback condition; `NULL` otherwise. |
| `array_any()` | Returns `true` if at least one element matches the callback condition; `false` otherwise. |
| `array_all()` | Returns `true` if all elements match the callback condition; `false` otherwise. |

 Note: `array_find()` retrieves only the first matching element. For multiple matches, consider using `array_filter()`.

### Example

Given an array with key-value pairs and a callback function:

```
$array = ['1'=> 'red', '2'=> 'purple', '3' => 'green']

function hasLongName($value) {
  return strlen($value) > 4;
}
```

Here's how we can use the new functions:

1. `array_find()`:

```
// Find the first color with a name length greater than 4

$result1 = array_find($array, 'hasLongName');

var_dump($result1);  // string(5) "purple"
```

2. `array_find_key()`:

```
// Find the key of the first color with a name length greater than 4

$result2 = array_find_key($array, 'hasLongName');

var_dump($result2);  // string(1) "2"
```

3. `array_any()`:

```
// Check if any color name has a length greater than 4

$result3 = array_any($array, 'hasLongName');

var_dump($result3);  // bool(true)
```

4. `array_all()`:

```
// Check if all color names have a length greater than 4

$result4 = array_all($array, 'hasLongName');

var_dump($result4);  // bool(false)
```

## 2. Property hooks

PHP 8.4 introduces property hooks, offering a more elegant way to access and modify private or protected properties of a class. Previously, developers relied on getters, setters, and magic methods (`__get` and `__set`). Now, you can define `get` and `set` hooks directly on a property, reducing the boilerplate code.

Instead of ending the property with a semicolon, we can use a code block `{}` to include the property hook.
These hooks are optional and can be used independently. By excluding one or the other we can make the property read-only or write-only.

### Example

```
class User
{
  public function __construct(private string $first, private string $last) {}

  public string $fullName {
    get => $this->first . " " . $this->last;

    set ($value) {
      if (!is_string($value)) {
        throw new InvalidArgumentException("Expected a string for full name,"
        . gettype($value) . " given.");
      }
      if (strlen($value) === 0) {
        throw new ValueError("Name must be non-empty");
      }
      $name = explode(' ', $value, 2);
      $this->first = $name[0];
      $this->last = $name[1] ?? '';
    }
  }
}

$user = new User('Alice', 'Hansen')
$user->fullName = 'Brian Murphy';  // the set hook is called
echo $user->fullName;  // "Brian Murphy"
```
If `$value` is an integer, the following error message is thrown:
```
PHP Fatal error:  Uncaught InvalidArgumentException: Expected a string for full name, integer given.
```
If `$value` is an empty string, the following error message is thrown:
```
PHP Fatal error:  Uncaught ValueError: Name must be non-empty
```

## 3. 'new' without parentheses

PHP 8.4 introduces a easier syntax, allowing you to chain methods on newly created objects without parenthesis. Although this is a minor adjustment, it results in cleaner and less verbose code.
```
(new MyClass())->getShortName();  // PHP 8.3 and older
new MyClass()->getShortName();  // PHP 8.4
```

Besides chaining methods on newly created objects, you can also chain properties, static methods and properties, array access, and even direct invocation of the class. For example:
```
new MyClass()::CONSTANT,
new MyClass()::$staticProperty,
new MyClass()::staticMethod(),
new MyClass()->property,
new MyClass()->method(),
new MyClass()(),
new MyClass(['value'])[0],
```

## 4. Implicitly nullable parameter declarations deprecated

Before PHP 8.4, if a parameter was of type `X`, it could accept a null value without explicitly declaring `X` as nullable. Starting with PHP 8.4, you can no longer declare a null parameter value without clearly stating it as nullable in the type hint; otherwise, a deprecation warning will be triggered. 
```
function greetings(string $name = null)  // fires a deprecation warning
```

To avoid warnings, you must explicitly state that a parameter can be null by using a question mark (?) in the type declaration.
```
function greetings(?string $name)
```
or,

```
function greetings(?string $name = null)
```

## 5. New multibyte functions

A multibyte string is a sequence of characters where each character can use more than one byte of storage. This is common in languages with complex or non-Latin scripts, such as Japanese or Chinese. There are several multibyte functions in PHP such as `mb_strlen()`, `mb_substr()`, `mb_strtolower()`, `mb_strpos()`, etc. But some of the functions like `trim()`, `ltrim()`, `rtrim()`, `ucfirst()`, `lcfirst()` etc. lack direct multibyte equivalents.

Thanks to PHP 8.4, where new multibyte functions will be added. They include: `mb_trim()`, `mb_ltrim()`, `mb_rtrim()`, `mb_ucfirst() `and `mb_lcfirst()`. These functions follow the original function signatures, with an additional `$encoding` parameter.
Let's discuss the new mb_functions:

1. `mb_trim()`:

    Removes all whitespace characters from the beginning and end of a multibyte string.

    Function signature:
    ```
    function mb_trim(string $string, string $characters = " \f\n\r\t\v\x00\u{00A0}\u{1680}\u{2000}\u{2001}\u{2002}\u{2003}\u{2004}\u{2005}\u{2006}\u{2007}\u{2008}\u{2009}\u{200A}\u{2028}\u{2029}\u{202F}\u{205F}\u{3000}\u{0085}\u{180E}", ?string $encoding = null): string {}
    ```
    Parameters:

      * `$string`: The string to be trimmed.
      * `$characters`: An optional parameter that includes a list of characters to be trimmed.
      * `$encoding`: The encoding parameter specifies the character encoding used to interpret the string, ensuring that multibyte characters are processed correctly. Common encodings include UTF-8.

  2. `mb_ltrim()`:

      Removes all whitespace characters from the beginning of a multibyte string.

      Function signature:
      ```
      function mb_ltrim(string $string, string $characters = " \f\n\r\t\v\x00\u{00A0}\u{1680}\u{2000}\u{2001}\u{2002}\u{2003}\u{2004}\u{2005}\u{2006}\u{2007}\u{2008}\u{2009}\u{200A}\u{2028}\u{2029}\u{202F}\u{205F}\u{3000}\u{0085}\u{180E}", ?string $encoding = null): string {}
      ```

  3. `mb_rtrim()`:

      Removes all whitespace characters from the end of a multibyte string.

      Function signature:
      ```
      function mb_rtrim(string $string, string $characters = " \f\n\r\t\v\x00\u{00A0}\u{1680}\u{2000}\u{2001}\u{2002}\u{2003}\u{2004}\u{2005}\u{2006}\u{2007}\u{2008}\u{2009}\u{200A}\u{2028}\u{2029}\u{202F}\u{205F}\u{3000}\u{0085}\u{180E}", ?string $encoding = null): string {}
      ```

  4. `mb_ucfirst()`:

      Converts the first character of a given multibyte string to title case, leaving the rest of the characters unchanged.

      Function signature:
      ```
      function mb_ucfirst(string $string, ?string $encoding = null): string {}
      ```

  5. `mb_lcfirst()`:

      Similar to `mb_ucfirst()`, but it converts the first character of a given multibyte string to lowercase.

      Function signature:
      ```
      function mb_lcfirst(string $string, ?string $encoding = null): string {}
      ```

## Conclusion

I hope this blog has given you a good overview of some of the upcoming changes in PHP 8.4. The new version appears to introduce exciting updates that will enhance the developer experience. I’m eager to start using it once it’s officially released.
For more information and updates, please visit the [official RFC page](https://wiki.php.net/rfc#php_84).
