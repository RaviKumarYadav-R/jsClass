//* ======================================================
//* IF-ELSE LADDER
//* ======================================================

//* What is an If-Else Ladder?

// An if-else ladder is used when we have MULTIPLE conditions
// and want to execute only ONE matching block of code.

// JavaScript checks conditions from TOP to BOTTOM.

// As soon as one condition becomes TRUE:
// 1. Its code block executes.
// 2. The remaining conditions are skipped.

// If ALL conditions are FALSE:
// The final `else` block executes.

// Think:
// "Check → Check → Check → Otherwise"

//* Basic Syntax

if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition1 is false
  // AND condition2 is true
} else if (condition3) {
  // Code if condition1 and condition2 are false
  // AND condition3 is true
} else {
  // Code if ALL conditions are false
}

//* Simple Example

let age = 20;

if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teenager");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior Citizen");
}

// Output:
// Adult

//* How JavaScript Executes It

// age = 20

// Step 1:
// age < 13
// 20 < 13 → false
// Move to next condition.

// Step 2:
// age < 18
// 20 < 18 → false
// Move to next condition.

// Step 3:
// age < 60
// 20 < 60 → true
// Execute "Adult".

// STOP.
// The final `else` and remaining conditions are skipped.

//* Important Rule

// Only ONE block executes in an if-else ladder.

// Once JavaScript finds the FIRST TRUE condition,
// it stops checking the remaining conditions.

let marks = 85;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else {
  console.log("Fail");
}

// Output:
// Grade A

//* Why did Grade B not execute?

// marks >= 90 → false
// marks >= 80 → true  ← MATCH FOUND
// "Grade A" executes.

// JavaScript does NOT continue to:
// marks >= 70

// Remember:
// FIRST TRUE CONDITION WINS.

//* Example: Student Grade

let score = 72;

if (score >= 90) {
  console.log("A+");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else {
  console.log("F");
}

// Output:
// B

//* Example: Positive, Negative or Zero

let number = -10;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Output:
// Negative

//* Example: Temperature

let temperature = 35;

if (temperature >= 40) {
  console.log("Very Hot");
} else if (temperature >= 30) {
  console.log("Hot");
} else if (temperature >= 20) {
  console.log("Normal");
} else if (temperature >= 10) {
  console.log("Cold");
} else {
  console.log("Very Cold");
}

// Output:
// Hot

//* Conditions Can Use Logical Operators

let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else if (age >= 18 && !hasLicense) {
  console.log("You need a driving license");
} else {
  console.log("You are underage");
}

// Output:
// You can drive

//* If-Else Ladder With Multiple Values

let day = 3;

if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else {
  console.log("Invalid day");
}

// Output:
// Wednesday

//* Order of Conditions Matters

// Be careful about the order of conditions.

// Example:

let marks = 95;

if (marks >= 50) {
  console.log("Pass");
} else if (marks >= 90) {
  console.log("Excellent");
}

// Output:
// Pass

// Why?

// marks >= 50 → true
// JavaScript stops immediately.

// So `marks >= 90` is NEVER checked.

//* Correct Order

let marks = 95;

if (marks >= 90) {
  console.log("Excellent");
} else if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Output:
// Excellent

//* General Rule for Ranges

// When conditions overlap:
// Put the MOST SPECIFIC / HIGHEST condition first.

// Example:

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("Below B");
}

//* If-Else Ladder vs Multiple Independent If

// WRONG when you want only ONE result:

if (marks >= 50) {
  console.log("Pass");
}

if (marks >= 70) {
  console.log("B");
}

if (marks >= 90) {
  console.log("A+");
}

// Multiple blocks CAN execute.

// If marks = 95:
// Pass
// B
// A+

//* If-Else Ladder

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Only ONE block executes.

// If marks = 95:
// A+

//* `else` Is Optional

// We can create an if-else ladder without final `else`.

let age = 25;

if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teenager");
} else if (age < 60) {
  console.log("Adult");
}

// If no condition is true:
// Nothing happens.

//* `else if` Is Also Optional

// We can have only:

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//* Nested If vs If-Else Ladder

// Nested if:
// An `if` inside another `if`.

if (age >= 18) {
  if (hasLicense) {
    console.log("Can drive");
  }
}

// If-else ladder:
// Multiple alternative conditions.

if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

//* Real-World Example: Login System

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else if (username !== "admin") {
  console.log("Invalid username");
} else {
  console.log("Invalid password");
}

//* Real-World Example: Electricity Bill

let units = 250;

if (units <= 100) {
  console.log("Low usage");
} else if (units <= 200) {
  console.log("Medium usage");
} else if (units <= 300) {
  console.log("High usage");
} else {
  console.log("Very high usage");
}

// Output:
// High usage

//* Mental Model

// Think of an if-else ladder like this:

//             condition 1?
//                |
//          YES -> BLOCK 1 -> STOP
//                |
//               NO
//                ↓
//             condition 2?
//                |
//          YES -> BLOCK 2 -> STOP
//                |
//               NO
//                ↓
//             condition 3?
//                |
//          YES -> BLOCK 3 -> STOP
//                |
//               NO
//                ↓
//             ELSE BLOCK

//* Most Important Rules

// 1. Conditions are checked from TOP → BOTTOM.

// 2. The FIRST TRUE condition wins.

// 3. After a match, the remaining conditions are skipped.

// 4. `else` runs only when ALL previous conditions are false.

// 5. `else` is optional.

// 6. `else if` allows us to check multiple conditions.

// 7. The order of conditions matters.

// 8. Use `===` when comparing exact values.

// 9. For ranges, put higher/more specific conditions first.

// 10. If multiple independent conditions can be true,
//     use separate `if` statements instead.

//* ONE-LINE MEMORY TRICK

// IF → check first condition
// ELSE IF → check another condition
// ELSE → nothing matched

//* FINAL FORMULA

// if
//   ↓
// condition true?
//   ↓ YES → execute → STOP
//   ↓ NO
// else if
//   ↓
// condition true?
//   ↓ YES → execute → STOP
//   ↓ NO
// ...
//   ↓
// else → execute
