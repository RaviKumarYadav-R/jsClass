//* ======================================================
//* SWITCH CASE
//* ======================================================

//* What is Switch?

// `switch` is a control statement used when we want to
// compare ONE expression against MULTIPLE possible values.

// Instead of writing:

// if (day === 1) { ... }
// else if (day === 2) { ... }
// else if (day === 3) { ... }

// We can use:

// switch (day) {
//     case 1:
//         ...
//         break;
// }

//* Basic Syntax

switch (expression) {
  case value1:
    // Code if expression === value1
    break;

  case value2:
    // Code if expression === value2
    break;

  case value3:
    // Code if expression === value3
    break;

  default:
  // Code if nothing matches
}

//* The Main Idea

// Think of switch like this:

//        expression
//             ↓
//       ┌─────┼─────┐
//       ↓     ↓     ↓
//     case1 case2 case3
//       ↓     ↓     ↓
//      YES   YES   YES
//       ↓
//    execute
//       ↓
//      break

//* Simple Example

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("You selected Apple");
    break;

  case "banana":
    console.log("You selected Banana");
    break;

  case "orange":
    console.log("You selected Orange");
    break;

  default:
    console.log("Unknown fruit");
}

// Output:
// You selected Apple

//* How JavaScript Executes Switch

// fruit = "apple"

// JavaScript evaluates:

// switch (fruit)

// Then checks:

// fruit === "apple"  → true
// Execute case "apple"

// `break` → exit switch.

// It does NOT check the remaining cases.

//* `case`

// A `case` represents a possible value.

// Example:

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;
}

// Output:
// Tuesday

//* `break`

// `break` stops the switch statement.

// It tells JavaScript:
//
// "I found my case. Now leave the switch."

let number = 2;

switch (number) {
  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");
    break;

  case 3:
    console.log("Three");
    break;
}

// Output:
// Two

//* What Happens Without `break`?

// Without `break`, JavaScript continues executing
// the following cases.

// This is called FALL-THROUGH.

let number = 1;

switch (number) {
  case 1:
    console.log("One");

  case 2:
    console.log("Two");

  case 3:
    console.log("Three");
}

// Output:
// One
// Two
// Three

// Why?

// case 1 matched.

// But there was NO `break`.

// So JavaScript continued into case 2 and case 3.

//* Fall-Through

// Fall-through means:
// After one case matches, execution continues into
// the next case until a `break`, `return`, or the
// end of the switch is reached.

// Normally we DON'T want accidental fall-through.

// Therefore:

// Always use `break` unless fall-through is intentional.

//* `default`

// `default` runs when NONE of the cases match.

// Example:

let day = 10;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}

// Output:
// Invalid day

//* `default` Is Optional

let color = "purple";

switch (color) {
  case "red":
    console.log("Red");
    break;

  case "blue":
    console.log("Blue");
    break;
}

// Nothing happens because there is no matching case
// and no default case.

//* Multiple Cases Can Share One Block

// This is one of the useful features of switch.

// Example:

let day = "Saturday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;

  default:
    console.log("Invalid day");
}

// Output:
// Weekend

//* Why Does This Work?

// day = "Saturday"

// case "Saturday":
// There is no code and no break.

// Therefore execution falls through to:

// case "Sunday":
// Actually, the shared block is reached after the
// matching case and executes:

// console.log("Weekend");

//* Switch Uses Strict Comparison

// Switch cases are matched using strict equality
// (`===`), not loose equality (`==`).

let value = 10;

switch (value) {
  case "10":
    console.log("String 10");
    break;

  case 10:
    console.log("Number 10");
    break;

  default:
    console.log("No match");
}

// Output:
// Number 10

//* Why?

// 10 === "10" → false
// 10 === 10   → true

// Therefore case 10 executes.

//* Important: Type Matters

let value = "1";

switch (value) {
  case 1:
    console.log("Number 1");
    break;

  case "1":
    console.log("String 1");
    break;
}

// Output:
// String 1

//* Switch With Numbers

let score = 2;

switch (score) {
  case 1:
    console.log("Beginner");
    break;

  case 2:
    console.log("Intermediate");
    break;

  case 3:
    console.log("Advanced");
    break;

  default:
    console.log("Invalid level");
}

// Output:
// Intermediate

//* Switch With Boolean Expression

// The switch expression can be any expression.

// Example:

let age = 20;

switch (true) {
  case age < 13:
    console.log("Child");
    break;

  case age < 18:
    console.log("Teenager");
    break;

  case age < 60:
    console.log("Adult");
    break;

  default:
    console.log("Senior");
}

// Output:
// Adult

// Why?

// switch(true)

// JavaScript evaluates each case expression.

// age < 13
// false

// age < 18
// false

// age < 60
// true

// true === true → match!

// This technique works, but for range-based conditions,
// a normal if-else ladder is usually clearer.

//* Switch vs If-Else

// Use SWITCH when:
//
// One value
//      ↓
// Many exact possible values

let role = "admin";

switch (role) {
  case "admin":
    console.log("Admin");
    break;

  case "user":
    console.log("User");
    break;

  case "guest":
    console.log("Guest");
    break;
}

// Use IF-ELSE when:
//
// Different conditions
//      ↓
// Comparisons / ranges / complex logic

let marks = 85;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("Fail");
}

//* Same Problem: Switch vs If-Else

// IF-ELSE

let fruit = "apple";

if (fruit === "apple") {
  console.log("Apple");
} else if (fruit === "banana") {
  console.log("Banana");
} else if (fruit === "orange") {
  console.log("Orange");
} else {
  console.log("Unknown");
}

// SWITCH

switch (fruit) {
  case "apple":
    console.log("Apple");
    break;

  case "banana":
    console.log("Banana");
    break;

  case "orange":
    console.log("Orange");
    break;

  default:
    console.log("Unknown");
}

//* Real-World Example: Menu

let choice = 2;

switch (choice) {
  case 1:
    console.log("Create Account");
    break;

  case 2:
    console.log("Login");
    break;

  case 3:
    console.log("Settings");
    break;

  case 4:
    console.log("Logout");
    break;

  default:
    console.log("Invalid choice");
}

// Output:
// Login

//* Real-World Example: User Role

let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;

  case "editor":
    console.log("Edit access");
    break;

  case "user":
    console.log("Basic access");
    break;

  case "guest":
    console.log("Read-only access");
    break;

  default:
    console.log("Unknown role");
}

//* Real-World Example: HTTP Method

let method = "POST";

switch (method) {
  case "GET":
    console.log("Fetch data");
    break;

  case "POST":
    console.log("Create data");
    break;

  case "PUT":
    console.log("Replace data");
    break;

  case "PATCH":
    console.log("Update part of data");
    break;

  case "DELETE":
    console.log("Delete data");
    break;

  default:
    console.log("Unknown HTTP method");
}

//* Switch Inside a Function

function getDayName(day) {
  switch (day) {
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    case 7:
      return "Sunday";

    default:
      return "Invalid day";
  }
}

console.log(getDayName(3));

// Output:
// Wednesday

// Notice:
// `return` exits the function.

// Therefore a `break` is not needed after return.

//* Switch Can Use Expressions

let a = 10;
let b = 20;

switch (a + b) {
  case 20:
    console.log("Result is 20");
    break;

  case 30:
    console.log("Result is 30");
    break;

  default:
    console.log("Unknown result");
}

// Output:
// Result is 30

//* Common Mistake #1: Forgetting `break`

let color = "red";

switch (color) {
  case "red":
    console.log("Red");
  // Missing break!

  case "blue":
    console.log("Blue");
    break;
}

// Output:
// Red
// Blue

// Usually this is NOT what we want.

//* Common Mistake #2: Using `==` Thinking Switch Does That

let value = "10";

switch (value) {
  case 10:
    console.log("Number");

    break;

  default:
    console.log("No match");
}

// Output:
// No match

// Because:

// "10" === 10 → false

//* Common Mistake #3: Forgetting `default`

let choice = 99;

switch (choice) {
  case 1:
    console.log("Option 1");
    break;

  case 2:
    console.log("Option 2");
    break;
}

// No output.

// Adding default makes unexpected values easier to handle.

//* Switch With Objects? Be Careful

let fruit = new String("apple");

switch (fruit) {
  case "apple":
    console.log("Apple");
    break;

  default:
    console.log("No match");
}

// Output:
// No match

// Why?

// `fruit` is an object.
// "apple" is a primitive string.

// They are not strictly equal.

// In normal code, prefer primitive values for switch cases.

//* Switch Mental Model

// Think:

// switch (VALUE)
//
//        ↓
//
// "Which CASE matches this value?"
//
//        ↓
//
// case 1 → match?
// case 2 → match?
// case 3 → match?
// ...
//
//        ↓
//
// matching case
//        ↓
//     execute
//        ↓
//      break
//        ↓
//       STOP
//
// If nothing matches:
//        ↓
//     default

//* If-Else Ladder vs Switch

// IF-ELSE:
//
// Best for:
// - ranges
// - different conditions
// - comparisons
// - complex logical expressions

if (age >= 18 && hasLicense) {
  console.log("Can drive");
}

// SWITCH:
//
// Best for:
// - one value
// - many exact possible values
// - menu choices
// - roles
// - commands
// - days
// - status values

switch (role) {
  case "admin":
    console.log("Admin");
    break;

  case "user":
    console.log("User");
    break;
}

//* Quick Comparison

// if-else:
//
// if (condition) {
//     ...
// } else if (condition) {
//     ...
// } else {
//     ...
// }
//
// Think:
// "Is this condition true?"

// switch:
//
// switch (value) {
//     case value1:
//         ...
//         break;
//     case value2:
//         ...
//         break;
//     default:
//         ...
// }
//
// Think:
// "Which value does this match?"

//* Most Important Rules

// 1. `switch` compares ONE expression against cases.

// 2. Cases use strict equality (`===`).

// 3. `case` defines a possible matching value.

// 4. `break` exits the switch.

// 5. Without `break`, fall-through can happen.

// 6. `default` runs when no case matches.

// 7. `default` is optional.

// 8. Multiple cases can intentionally share one block.

// 9. Use switch mainly for exact-value matching.

// 10. Use if-else for ranges and complex conditions.

//* ONE-LINE MEMORY TRICK

// SWITCH = "Which value is this?"

// CASE = "Is it this value?"

// BREAK = "Stop here."

// DEFAULT = "Nothing matched."

//* FINAL FORMULA

// switch (value) {
//
//     case value1:
//         // execute
//         break;
//
//     case value2:
//         // execute
//         break;
//
//     default:
//         // nothing matched
// }

//* GOLDEN RULE

// ONE VALUE + MANY EXACT OPTIONS → SWITCH
//
// DIFFERENT CONDITIONS / RANGES → IF-ELSE
//
// And remember:
//
// CASE MATCHES → CODE RUNS → BREAK → STOP
