//* ======================================================
//* TERNARY OPERATOR
//* ======================================================

//* What is the Ternary Operator?

// The ternary operator is a short way to write
// a simple `if-else` condition.

// It is called "ternary" because it has THREE parts:

// 1. Condition
// 2. Value if TRUE
// 3. Value if FALSE

// Basic structure:

// condition ? valueIfTrue : valueIfFalse

//* Basic Syntax

condition ? valueIfTrue : valueIfFalse;

// Think of it as:

// condition
//    ↓
// TRUE  → valueIfTrue
// FALSE → valueIfFalse

//* Simple Example

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Adult

//* How It Works

// age >= 18
// 20 >= 18 → true

// Therefore:

// true ? "Adult" : "Minor"

// Result:
// "Adult"

// So:

// result = "Adult"

//* Same Example Using if-else

let age = 20;
let result;

if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}

console.log(result);

// Output:
// Adult

//* Ternary Version

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

// Both examples produce the same result.

// Ternary is simply a shorter way to write
// a simple if-else expression.

//* Why is it Called Ternary?

// "Ternary" means THREE.

// The three parts are:

//        condition
//            ↓
//     age >= 18
//       /      \
//    TRUE      FALSE
//     ↓          ↓
//  "Adult"    "Minor"

// Therefore:

// condition ? trueValue : falseValue

//* Ternary Returns a Value

// This is one of the MOST IMPORTANT things to understand.

// The ternary operator is an EXPRESSION.

// It produces/returns a value.

let age = 25;

let message = age >= 18 ? "Allowed" : "Not Allowed";

console.log(message);

// Output:
// Allowed

//* Example: Find Maximum Number

let x = 10;
let y = 20;

let max = x > y ? x : y;

console.log(max);

// Output:
// 20

// If x > y is true:
// max = x

// Otherwise:
// max = y

//* Example: Even or Odd

let number = 7;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);

// Output:
// Odd

//* Example: Positive or Negative

let number = -5;

let result = number >= 0 ? "Positive" : "Negative";

console.log(result);

// Output:
// Negative

//* Example: Pass or Fail

let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);

// Output:
// Pass

//* Example: Login Status

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome back!" : "Please login";

console.log(message);

// Output:
// Welcome back!

//* Boolean Conditions

// Ternary works especially well with boolean values.

let isOnline = true;

let status = isOnline ? "Online" : "Offline";

console.log(status);

// Output:
// Online

//* You Can Use Functions

function getAgeMessage(age) {
  return age >= 18 ? "Adult" : "Minor";
}

console.log(getAgeMessage(21));

// Output:
// Adult

//* Ternary With Template Literals

let name = "Ravi";
let age = 21;

let message = `${name} is ${age >= 18 ? "an adult" : "a minor"}`;

console.log(message);

// Output:
// Ravi is an adult

//* Ternary With Assignment

let isDarkMode = true;

let theme = isDarkMode ? "Dark" : "Light";

console.log(theme);

// Output:
// Dark

//* Ternary Can Return Different Data Types

let condition = true;

let result = condition ? 100 : "Hello";

console.log(result);

// Output:
// 100

// If condition were false:
// result would be "Hello"

//* Ternary With Expressions

let a = 10;
let b = 20;

let result = a > b ? a + b : a - b;

console.log(result);

// a > b → false
// Therefore:
// a - b
// 10 - 20 = -10

// Output:
// -10

//* Ternary vs if-else

// Use IF-ELSE when you need to execute multiple statements.

let age = 20;

if (age >= 18) {
  console.log("Adult");
  console.log("You can vote.");
} else {
  console.log("Minor");
}

// Use TERNARY when you simply need one value.

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);

//* Ternary With Function Call

let isAdmin = true;

isAdmin ? console.log("Open admin panel") : console.log("Open user panel");

// Output:
// Open admin panel

//* Important: Ternary Is Not Exactly a Replacement for Every if-else

// Ternary is best when you are CHOOSING A VALUE.

// Example:

let age = 20;

let category = age >= 18 ? "Adult" : "Minor";

// Good use.

// For complex logic, use if-else.

if (age >= 18) {
  console.log("Adult");
  console.log("Checking permissions...");
  console.log("Loading dashboard...");
} else {
  console.log("Minor");
  console.log("Access denied.");
}

// This is easier to read than trying to put
// everything into a ternary.

//* Nested Ternary

// A ternary can contain another ternary.

// Example:

let marks = 85;

let grade =
  marks >= 90
    ? "A+"
    : marks >= 80
      ? "A"
      : marks >= 70
        ? "B"
        : marks >= 60
          ? "C"
          : "F";

console.log(grade);

// Output:
// A

//* How Nested Ternary Works

// marks >= 90 → false
// marks >= 80 → true
// result → "A"

// It behaves similarly to an if-else ladder.

// BUT:

// Too many nested ternaries can become difficult to read.

// Prefer if-else when the logic becomes complicated.

//* Ternary With Parentheses

let age = 20;

let message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message);

// Parentheses around the condition are optional,
// but they can make the condition easier to read.

//* Common Mistake #1

// ❌ Don't confuse `?` and `:`.

// Correct:

let result = age >= 18 ? "Adult" : "Minor";

// Structure:

// condition ? TRUE : FALSE
//           ↑       ↑
//         true    false

//* Common Mistake #2

// ❌ Forgetting the FALSE value.

// Wrong:
// let result = age >= 18 ? "Adult";

// Correct:

let result = age >= 18 ? "Adult" : "Minor";

//* Common Mistake #3

// ❌ Using ternary when the logic is too complicated.

// Hard to read:

let result = condition1 ? (condition2 ? "A" : "B") : condition3 ? "C" : "D";

// In such cases, use if-else.

// Clearer:

if (condition1) {
  if (condition2) {
    result = "A";
  } else {
    result = "B";
  }
} else if (condition3) {
  result = "C";
} else {
  result = "D";
}

//* Ternary Operator With Comparison

let temperature = 35;

let weather = temperature > 30 ? "Hot" : "Cool";

console.log(weather);

// Output:
// Hot

//* Ternary Operator With Logical Condition

let age = 25;
let hasLicense = true;

let result = age >= 18 && hasLicense ? "Can drive" : "Cannot drive";

console.log(result);

// Output:
// Can drive

//* Ternary Operator With Nullish Values

let username = null;

let displayName = username ?? "Guest";

console.log(displayName);

// Output:
// Guest

// Note:
// `??` is NOT the ternary operator.

// Ternary:
// condition ? value1 : value2

// Nullish coalescing:
// value ?? fallback

//* Ternary vs Logical OR

let name = "";

let result = name || "Guest";

console.log(result);

// OR returns "Guest" because "" is falsy.

// Ternary allows us to write an explicit condition:

let result2 = name === "" ? "Guest" : name;

console.log(result2);

// Ternary is useful when the exact condition matters.

//* Ternary Operator Flow

//             condition
//                ↓
//          ┌─────┴─────┐
//        TRUE         FALSE
//          ↓             ↓
//     valueIfTrue   valueIfFalse
//          \             /
//           \           /
//             RESULT

//* Real-World Example: Button Text

let isLoggedIn = false;

let buttonText = isLoggedIn ? "Logout" : "Login";

console.log(buttonText);

// Output:
// Login

//* Real-World Example: Cart

let cartItems = 3;

let cartMessage = cartItems > 0 ? "Cart has items" : "Cart is empty";

console.log(cartMessage);

// Output:
// Cart has items

//* Real-World Example: Permission

let isAdmin = false;

let access = isAdmin ? "Full Access" : "Limited Access";

console.log(access);

// Output:
// Limited Access

//* Most Important Rules

// 1. Ternary is a shorthand for simple if-else logic.

// 2. It has THREE parts:

//    condition ? trueValue : falseValue

// 3. `?` separates the condition from the two results.

// 4. `:` separates the TRUE result from the FALSE result.

// 5. If condition is TRUE → trueValue is returned.

// 6. If condition is FALSE → falseValue is returned.

// 7. Ternary is an EXPRESSION, so it produces a value.

// 8. Ternary is excellent for simple value selection.

// 9. Avoid deeply nested ternaries.

// 10. Use if-else when the logic becomes complex.

//* Ternary vs If-Else

// IF-ELSE:
// "DO something based on a condition."

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// TERNARY:
// "CHOOSE a value based on a condition."

let status = age >= 18 ? "Adult" : "Minor";

//* ONE-LINE MEMORY TRICK

// `?` = What should I choose if TRUE?

// `:` = What should I choose if FALSE?

// condition ? TRUE : FALSE

//* FINAL FORMULA

//             condition
//                 ↓
//       ┌─────────┴─────────┐
//       ↓                   ↓
//    TRUE                  FALSE
//       ↓                   ↓
//  valueIfTrue        valueIfFalse
//
// Formula:
//
// condition ? valueIfTrue : valueIfFalse

//* GOLDEN RULE

// Simple decision → TERNARY
//
// Complex decision → IF-ELSE
//
// Example:
//
// let status = age >= 18 ? "Adult" : "Minor";
//              ↑       ↑          ↑
//          condition  TRUE       FALSE
