//* What Is Type Conversion?

// Type conversion means changing a value from one data type to another.

// For example, converting a string into a number, a number into a string, or a value into a boolean.

// JavaScript allows us to convert data types in two ways:
//
// 1. Explicit Type Conversion
// 2. Implicit Type Conversion (Type Coercion)

//* Explicit Type Conversion

// Explicit type conversion means that WE manually convert a value from one data type to another.

// JavaScript provides built-in functions like String(), Number(), and Boolean() to perform explicit conversion.

//* Converting To String

// The String() function converts a value into a string.

let num = 100;

let str = String(num);

console.log(str); // "100"
console.log(typeof str); // "string"

// We can convert different types into strings:

console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

// String() is useful when you explicitly want to work with a value as text.

//* Converting To Number

// The Number() function converts a value into a number.

console.log(Number("123")); // 123
console.log(Number("3.14")); // 3.14
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number("")); // 0

// If JavaScript cannot convert the value into a valid number, it returns NaN (Not a Number).

console.log(Number("hello")); // NaN

// Example

let age = "21";

age = Number(age);

console.log(age); // 21
console.log(typeof age); // "number"

//* parseInt()

// parseInt() converts a value into an integer (whole number).

console.log(parseInt("123")); // 123
console.log(parseInt("10.99")); // 10
console.log(parseInt("100px")); // 100

// parseInt() reads the number from the beginning of the string and stops when it finds a character that is not part of the number.

console.log(parseInt("123abc")); // 123
console.log(parseInt("hello123")); // NaN

//* parseFloat()

// parseFloat() converts a value into a floating-point number (number with decimals).

console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("10.99")); // 10.99
console.log(parseFloat("12.50px")); // 12.5

// Difference:

console.log(parseInt("10.99")); // 10
console.log(parseFloat("10.99")); // 10.99

//* Converting To Boolean

// The Boolean() function converts a value into either true or false.

console.log(Boolean(1)); // true
console.log(Boolean(100)); // true
console.log(Boolean("Hello")); // true

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

//* Truthy And Falsy Values

// When JavaScript converts a value into a boolean, the result can be either true or false.

// A value that becomes false when converted to a boolean is called a FALSY value.

// A value that becomes true when converted to a boolean is called a TRUTHY value.

// The main falsy values in JavaScript are:

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Almost everything else is truthy.

console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Important:
// "0" is a string, so it is truthy.
// 0 is a number, so it is falsy.

console.log(Boolean("0")); // true
console.log(Boolean(0)); // false

//* Implicit Type Conversion (Type Coercion)

// Implicit type conversion means JavaScript automatically converts one data type into another when needed.

// This automatic conversion is called TYPE COERCION.

// Example:

let result = "10" - 5;

console.log(result); // 5

// "10" is a string, but the - operator expects numbers.

// JavaScript automatically converts:
//
// "10" → 10
//
// Then:
//
// 10 - 5 → 5

//* String Coercion With +

// The + operator is special because it can perform both:
//
// 1. Addition
// 2. String concatenation

console.log(10 + 5); // 15

console.log("10" + 5); // "105"

// Because one value is a string, JavaScript converts 5 into a string.

// 5 → "5"
//
// Then:
//
// "10" + "5" → "105"

//* More Examples With +

console.log(1 + "2"); // "12"
console.log("3" + 4); // "34"
console.log("3" + 4 + 5); // "345"
console.log(3 + 4 + "5"); // "75"

// In:
//
// "3" + 4 + 5
//
// JavaScript works from left to right:
//
// "3" + 4 → "34"
// "34" + 5 → "345"

// In:
//
// 3 + 4 + "5"
//
// JavaScript works from left to right:
//
// 3 + 4 → 7
// 7 + "5" → "75"

//* Numeric Coercion

// Operators like -, *, /, and % usually convert strings containing valid numbers into numbers automatically.

console.log("10" - 5); // 5
console.log("10" * 2); // 20
console.log("10" / 2); // 5
console.log("10" % 3); // 1

// But if the string cannot be converted into a valid number, the result is NaN.

console.log("hello" - 5); // NaN
console.log("hello" * 2); // NaN

//* Boolean Coercion

// JavaScript automatically converts values into booleans when a boolean value is expected.

// The most common example is an if statement.

if ("hello") {
  console.log("This will run!");
}

// "hello" is a truthy value, so the condition becomes true.

if (0) {
  console.log("This will NOT run!");
}

// 0 is a falsy value, so the condition becomes false.

//* == Loose Equality

// The == operator is called loose equality.

// It compares two values after allowing JavaScript to perform type coercion.

console.log(5 == "5"); // true

// JavaScript converts:
//
// "5" → 5
//
// Then:
//
// 5 == 5 → true

console.log(0 == false); // true
console.log("" == false); // true

//* === Strict Equality

// The === operator is called strict equality.

// It compares both the VALUE and the DATA TYPE.

// It does NOT perform type coercion.

console.log(5 === "5"); // false

// 5     → number
// "5"   → string
//
// Same value? Yes
// Same type? No
//
// Therefore → false

console.log(5 === 5); // true
console.log(0 === false); // false

//* != vs !==

// != is loose inequality and allows type coercion.

console.log(5 != "5"); // false

// 5 and "5" are considered equal after coercion.

// !== is strict inequality and checks both value and type.

console.log(5 !== "5"); // true

// 5 is a number and "5" is a string, so they are strictly different.

//* Best Practice

// In modern JavaScript, it is generally recommended to use:
//
// === instead of ==
// !== instead of !=

// This avoids unexpected results caused by automatic type coercion.

console.log(10 === "10"); // false
console.log(10 !== "10"); // true

//* Explicit vs Implicit Conversion

// Explicit Conversion:
//
// WE tell JavaScript to convert the value.

Number("100");
String(100);
Boolean(1);

// Implicit Conversion:
//
// JAVASCRIPT automatically converts the value.

"100" - 10; // 90
"5" * 2; // 10
"10" + 5; // "105"

//* Easy Way To Remember

// Explicit Conversion:
// "I convert the type."

// Implicit Conversion / Coercion:
// "JavaScript converts the type."

//* Important Operators

// + → Addition OR String Concatenation
// - → Numeric coercion
// * → Numeric coercion
// / → Numeric coercion
// % → Numeric coercion

//* Final Rule

// Type Conversion:
// We manually change the data type.

// Type Coercion:
// JavaScript automatically changes the data type.

// Remember:
//
// Explicit → YOU convert
// Implicit → JAVASCRIPT converts
//
// ==  → Allows type coercion
// === → Does not allow type coercion
//
// Best practice:
//
// Use === and !== for comparisons
