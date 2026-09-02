//* What Are Conditional Statements?

// Conditional statements allow JavaScript to make decisions.

// They execute different pieces of code depending on whether a condition
// is true or false.

// Think of it like:
//
// "IF this condition is true → do this."
// "ELSE → do something else."

//* Types of Conditional Statements

// The main conditional statements in JavaScript are:
//
// 1. if
// 2. if...else
// 3. if...else if...else
// 4. switch

//* The if Statement

// The if statement executes a block of code only when a condition is true.

// Syntax:
//
// if (condition) {
// code to execute
// }

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// age >= 18 → true
// Therefore, the code inside the if block runs.

// If the condition is false, the code inside the if block is skipped.

let number = 10;

if (number < 5) {
  console.log("Number is less than 5.");
}

// 10 < 5 → false
// Therefore, nothing is printed.

//* The if...else Statement

// The if...else statement allows us to execute one block when the condition
// is true and another block when the condition is false.

// Syntax:
//
// if (condition) {
// runs when condition is true
// } else {
// runs when condition is false
// }

let temperature = 25;

if (temperature > 30) {
  console.log("It is a hot day.");
} else {
  console.log("The weather is pleasant.");
}

// 25 > 30 → false
// Therefore, the else block runs.

//* Example: Even or Odd

let num = 7;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// % gives the remainder.
//
// If a number divided by 2 has remainder 0 → Even
// Otherwise → Odd

//* The if...else if...else Statement

// When we need to check multiple conditions, we can use
// if...else if...else.

// JavaScript checks the conditions from TOP to BOTTOM.

// As soon as it finds a true condition, its block executes and
// the remaining conditions are skipped.

// Syntax:
//
// if (condition1) {
// code
// } else if (condition2) {
// code
// } else if (condition3) {
// code
// } else {
// code when all conditions are false
// }

let marks = 72;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Output:
// Grade: B

// Why?
//
// 72 >= 90 → false
// 72 >= 75 → false
// 72 >= 60 → true
//
// So "Grade: B" is printed.
// The remaining conditions are skipped.

//* Order Matters In if...else if

// Always place MORE SPECIFIC / HIGHER conditions before lower conditions.

let score = 95;

if (score >= 90) {
  console.log("A+");
} else if (score >= 75) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
}

// Output:
// A+

// Once score >= 90 is true, JavaScript does not check the remaining else if
// conditions.

//* The else Statement

// else does not have a condition.

// It runs only when ALL previous conditions are false.

let userAge = 15;

if (userAge >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// 15 >= 18 → false
// Therefore, else runs.

//* Nested if Statements

// An if statement can be placed inside another if statement.

// This is called a nested if statement.

let userLoggedIn = true;
let userAge2 = 21;

if (userLoggedIn) {
  if (userAge2 >= 18) {
    console.log("Access granted.");
  }
}

// First condition:
// userLoggedIn → true
//
// Then JavaScript checks:
// userAge2 >= 18 → true
//
// Therefore:
// "Access granted."

// Avoid deeply nested if statements when possible because they can make
// code difficult to read.

//* Multiple Conditions With Logical Operators

// We can combine conditions using logical operators:
//
// && → AND
// || → OR
// !  → NOT

let age2 = 20;
let hasLicense = true;

if (age2 >= 18 && hasLicense) {
  console.log("You can drive.");
}

// Both conditions must be true:
//
// age2 >= 18 → true
// hasLicense → true
//
// true && true → true

//* Using OR (||)

let hasCash = false;
let hasCard = true;

if (hasCash || hasCard) {
  console.log("You can make the payment.");
}

// At least one condition must be true.
//
// false || true → true

//* Using NOT (!)

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in.");
}

// !false → true

//* Truthy and Falsy Values

// JavaScript automatically converts values to Boolean when they are used
// as conditions.

// Truthy values behave like true.

// Falsy values behave like false.

if ("Hello") {
  console.log("This runs.");
}

// "Hello" is truthy.

if (0) {
  console.log("This does not run.");
}

// 0 is falsy.

// Main falsy values:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

//* The switch Statement

// The switch statement is useful when you want to compare ONE value
// against MULTIPLE possible values.

// Syntax:
//
// switch (expression) {
//     case value1:
//         // code
//         break;
//
//     case value2:
//         // code
//         break;
//
//     default:
//         // code
// }

// Example:

let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;

  case "Tuesday":
    console.log("It is Tuesday.");
    break;

  case "Friday":
    console.log("Finally, Friday!");
    break;

  default:
    console.log("Just another day.");
}

// day is "Tuesday"
//
// JavaScript checks:
//
// "Tuesday" === "Monday" → false
// "Tuesday" === "Tuesday" → true
//
// Therefore:
// "It is Tuesday."
//
// Then break stops the switch.

//* Why Do We Use break?

// break stops the switch statement.

// Without break, JavaScript continues executing the following cases.

// This is called FALL-THROUGH.

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple");
    break;

  case "banana":
    console.log("Banana");
    break;

  default:
    console.log("Unknown fruit");
}

//* The default Case

// default runs when none of the cases match.

let color = "purple";

switch (color) {
  case "red":
    console.log("Red");
    break;

  case "blue":
    console.log("Blue");
    break;

  default:
    console.log("Unknown color");
}

// "purple" does not match red or blue.
// Therefore, default runs.

//* switch Uses Strict Comparison

// switch cases are compared using strict equality (===).

let value = 5;

switch (value) {
  case "5":
    console.log("String 5");
    break;

  case 5:
    console.log("Number 5");
    break;
}

// Output:
// Number 5

// 5 === "5" → false
// 5 === 5   → true

//* if...else vs switch

// Use if...else when you are checking CONDITIONS or ranges.

let studentMarks = 85;

if (studentMarks >= 90) {
  console.log("A+");
} else if (studentMarks >= 75) {
  console.log("A");
} else {
  console.log("B");
}

// Use switch when comparing ONE value against FIXED OPTIONS.

let menu = "home";

switch (menu) {
  case "home":
    console.log("Home page");
    break;

  case "about":
    console.log("About page");
    break;

  case "contact":
    console.log("Contact page");
    break;

  default:
    console.log("Page not found");
}

//* Ternary Operator

// The ternary operator is a short way to write a simple if...else.

// Syntax:
//
// condition ? valueIfTrue : valueIfFalse

let myAge = 21;

let message = myAge >= 18 ? "Adult" : "Minor";

console.log(message); // Adult

// The same logic using if...else:

let message2;

if (myAge >= 18) {
  message2 = "Adult";
} else {
  message2 = "Minor";
}

// Ternary is best used for SIMPLE conditions.
// For complex logic, normal if...else is easier to read.

//* Conditional Statement Decision Flow

/*
                    CONDITION
                        │
                ┌───────┴───────┐
                ↓               ↓
              TRUE            FALSE
                │               │
                ↓               ↓
            Run code        Skip / Else
*/

//* if...else if...else Flow

/*
                condition 1?
                 /       \
              true       false
               ↓           ↓
           Run code    condition 2?
                         /      \
                      true      false
                       ↓          ↓
                   Run code   condition 3?
                                  ...
                                    ↓
                                  else
*/

//* switch Flow

/*
                  expression
                      ↓
                ┌─────────────┐
                │   switch    │
                └──────┬──────┘
                       ↓
              Compare with cases
                       ↓
                Matching case?
                  /         \
               YES           NO
                ↓             ↓
            Run code       Next case
                ↓
              break
                ↓
               STOP
*/

//* Quick Comparison

// if
// → Used when checking one condition.

// if...else
// → Used when choosing between two possibilities.

// if...else if...else
// → Used when checking multiple conditions or ranges.

// switch
// → Used when comparing one value against multiple fixed options.

// ternary
// → Used for a short/simple if...else.

//* Common Examples

// if
// → Check if user is logged in.

// if...else
// → Check if a number is even or odd.

// if...else if...else
// → Grade system, age categories, salary ranges.

// switch
// → Menu options, days, months, commands, modes.

// ternary
// → Simple value selection.

//* Final Memory Trick

// IF
// "Is this condition true?"
// → Run this code.

// ELSE
// "If it is not true..."
// → Run this other code.

// ELSE IF
// "What about this condition?"
// → Check another condition.

// SWITCH
// "Which option does this value match?"
// → Run the matching case.

//* Most Important Rules To Remember

// 1. if runs code when a condition is true.

// 2. else runs when the if condition is false.

// 3. else if allows you to check multiple conditions.

// 4. JavaScript checks if/else-if conditions from TOP to BOTTOM.

// 5. Once an if/else-if condition is true, the remaining conditions are skipped.

// 6. switch is useful for comparing one value against fixed options.

// 7. break stops a switch case.

// 8. Without break, switch can fall through to the next case.

// 9. switch uses strict comparison (===).

// 10. Use === and !== when writing conditions.

// 11. Ternary (? :) is useful for simple if...else logic.

//* One-Line Memory Formula

// if
// → One condition

// if...else
// → Two paths

// if...else if...else
// → Multiple conditions

// switch
// → One value, many fixed choices

// ternary
// → Short if...else

//* The Ultimate Mental Model

// Conditional statement = DECISION MAKING

// Condition → true? → YES → Run this
//                    → NO  → Run something else

// Example:

let balance = 500;

if (balance >= 1000) {
  console.log("You can buy the product.");
} else {
  console.log("Not enough balance.");
}

// Think:
//
// "Is balance >= 1000?"
//
// YES → Buy
// NO  → Not enough balance
