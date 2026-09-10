//* ======================================================
//* LOOPS IN JAVASCRIPT
//* ======================================================

//* What is a Loop?

// A loop is used to REPEAT a block of code multiple times.

// Instead of writing:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// We can write:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

//* Why Do We Use Loops?

// Loops help us:
// 1. Repeat code
// 2. Work with arrays
// 3. Process strings
// 4. Generate patterns
// 5. Search for values
// 6. Calculate totals
// 7. Solve programming problems

//* ======================================================
//* FOR LOOP
//* ======================================================

//* What is a for Loop?

// A `for` loop is commonly used when we know
// how many times we want to repeat something.

// Syntax:

for (initialization; condition; update) {
  // Code to repeat
}

//* Three Parts of a for Loop

// for (initialization; condition; update)

// 1. Initialization
//    Runs ONCE before the loop starts.

// 2. Condition
//    Checked BEFORE every iteration.

// 3. Update
//    Runs AFTER every iteration.

//* Simple Example

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

//* How for Loop Executes

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// Flow:
//
// Step 1 → let i = 1
//
// Step 2 → i <= 3 → true
//          print 1
//
// Step 3 → i++
//          i = 2
//
// Step 4 → i <= 3 → true
//          print 2
//
// Step 5 → i++
//          i = 3
//
// Step 6 → i <= 3 → true
//          print 3
//
// Step 7 → i++
//          i = 4
//
// Step 8 → i <= 3 → false
//
// STOP

//* Important Order

// for loop:
//
// Initialization
//      ↓
// Condition
//      ↓
// Code
//      ↓
// Update
//      ↓
// Condition
//      ↓
// Code
//      ↓
// Update
//      ↓
// ...

/*
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

    START
      ↓
    i = 1
      ↓
    condition?
      ↓
    true
      ↓
    code
      ↓
    i++
      ↓
    condition?
      ↓
    ...
      ↓
    false
      ↓
    STOP
*/

//* Counting Forward

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Output:
// 1 2 3 4 5 6 7 8 9 10

//* Counting Backward

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Output:
// 10 9 8 7 6 5 4 3 2 1

//* Increment by 2

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Output:
// 0
// 2
// 4
// 6
// 8
// 10

//* Decrement by 2

for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}

// Output:
// 10
// 8
// 6
// 4
// 2
// 0

//* ======================================================
//* FOR LOOP WITH ARRAYS
//* ======================================================

// Arrays contain multiple values.

// We can use a loop to visit every element.

let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Output:
// Apple
// Banana
// Mango

//* Why `i < fruits.length`?

// Array:

let fruits = ["Apple", "Banana", "Mango"];

// Index:
//
// Apple  → 0
// Banana → 1
// Mango  → 2
//
// length = 3

// Last index = length - 1
// Last index = 2

// Therefore:

// i < fruits.length

// means:

// i < 3

// i = 0 → true
// i = 1 → true
// i = 2 → true
// i = 3 → false

//* Accessing Index and Value

let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log("Index:", i);
  console.log("Value:", numbers[i]);
}

//* ======================================================
//* FOR...IN LOOP
//* ======================================================

//* What is for...in?

// `for...in` is mainly used to iterate over
// the KEYS / PROPERTY NAMES of an object.

// Syntax:

for (let key in object) {
  // Code
}

//* Example

let person = {
  name: "Ravi",
  age: 21,
  city: "Bokaro",
};

for (let key in person) {
  console.log(key);
}

// Output:
// name
// age
// city

//* Getting Values With for...in

let person = {
  name: "Ravi",
  age: 21,
  city: "Bokaro",
};

for (let key in person) {
  console.log(key, person[key]);
}

// Output:
// name Ravi
// age 21
// city Bokaro

//* Why `person[key]`?

// Suppose:

let key = "name";

// Then:

person[key];

// becomes:

person["name"];

// Result:
// "Ravi"

// IMPORTANT:
//
// person.key
// means property literally named "key".
//
// person[key]
// means use the VALUE stored inside key.

//* for...in Mental Model

// Object:
//
// {
//     name: "Ravi",
//     age: 21
// }
//
//      ↓
//
// for (let key in person)
//
//      ↓
//
// key = "name"
// key = "age"

//* for...in With Arrays

// Technically, `for...in` can iterate over array indexes,
// but it is generally NOT the preferred way to iterate
// through array values.

let colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index);
}

// Output:
// 0
// 1
// 2

// For array elements, prefer:
// `for` or `for...of`.

//* ======================================================
//* FOR...OF LOOP
//* ======================================================

//* What is for...of?

// `for...of` is used to get the VALUES of an iterable.

// Common examples:
// - Arrays
// - Strings
// - Sets
// - Maps (with different value structure)

//* Array Example

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// Output:
// red
// green
// blue

//* How for...of Works

// First iteration:
// color = "red"

// Second iteration:
// color = "green"

// Third iteration:
// color = "blue"

//* for...of With String

let word = "HELLO";

for (let character of word) {
  console.log(character);
}

// Output:
// H
// E
// L
// L
// O

//* for...of With Set

let numbers = new Set([10, 20, 30]);

for (let number of numbers) {
  console.log(number);
}

// Output:
// 10
// 20
// 30

//* for...in vs for...of

let colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index);
}

// Output:
// 0
// 1
// 2

for (let color of colors) {
  console.log(color);
}

// Output:
// red
// green
// blue

//* Remember:

//
// for...in  → KEYS / INDEXES
//
// for...of  → VALUES

//* ======================================================
//* WHILE LOOP
//* ======================================================

//* What is a while Loop?

// A `while` loop repeatedly executes code
// WHILE a condition is true.

// Syntax:

while (condition) {
  // Code
}

//* Simple Example

let i = 1;

while (i <= 5) {
  console.log(i);

  i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5

//* How while Loop Executes

let i = 1;

while (i <= 3) {
  console.log(i);

  i++;
}

// Flow:
//
// i = 1
//   ↓
// i <= 3 → true
//   ↓
// print 1
//   ↓
// i++
//   ↓
// condition again
//
// Eventually:
//
// i = 4
// i <= 3 → false
// STOP

//* IMPORTANT: Update the Variable

// This is dangerous:

// let i = 1;
//
// while (i <= 5) {
//     console.log(i);
// }

// `i` never changes.

// Condition always remains true.

// This creates an INFINITE LOOP.

//* Infinite Loop

// while (true) {

//     console.log("Running forever");

// }

// Do NOT run this accidentally.

/*
// If you intentionally need an infinite loop,
// make sure there is a clear exit condition.

while (true) {

    // some logic

    if (someCondition) {
        break;
    }
}
*/

//* When to Use while?

// Use while when the number of iterations
// is NOT known beforehand.

// Example idea:
//
// Keep asking until the user enters a valid value.
//
// Keep processing while data exists.
//
// Keep running while a game is active.

//* ======================================================
//* DO...WHILE LOOP
//* ======================================================

//* What is do...while?

// `do...while` is similar to `while`.

// BUT:

// The code runs FIRST.
// The condition is checked AFTER.

// Therefore:
// do...while ALWAYS runs at least once.

// Syntax:

do {
  // Code
} while (condition);

//* Simple Example

let i = 1;

do {
  console.log(i);

  i++;
} while (i <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5

//* Important Difference

// while:
//
// condition → code

// do...while:
//
// code → condition

//* Condition False From Beginning

let x = 10;

while (x < 5) {
  console.log("while");
}

// Output:
// Nothing

// Because:
// 10 < 5 → false
// Code never runs.

let y = 10;

do {
  console.log("do while");
} while (y < 5);

// Output:
// do while

// Why?

// Code runs FIRST.

// Then:
// 10 < 5 → false
// STOP.

//* Mental Model

// WHILE:
//
// condition
//    ↓
// true?
//    ↓
// code
//    ↓
// condition again

// DO...WHILE:
//
// code
//   ↓
// condition
//   ↓
// true?
//   ↓
// code again

//* ======================================================
//* BREAK
//* ======================================================

//* What is break?

// `break` immediately stops a loop.

// Example:

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4

// When i becomes 5:
// break → loop stops immediately.

//* break Mental Model

// LOOP
//  ↓
// condition
//  ↓
// break?
//  ↓ YES
// STOP

//* ======================================================
//* CONTINUE
//* ======================================================

//* What is continue?

// `continue` skips the CURRENT iteration
// and moves to the next iteration.

// Example:

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

// Output:
// 1
// 2
// 4
// 5

// When i = 3:
// continue → skip console.log()
// Then go to next iteration.

//* break vs continue

// break:
// STOP THE ENTIRE LOOP.

// continue:
// SKIP CURRENT ITERATION.

//* Remember:
//
// break    → "I'm done. Stop."
//
// continue → "Skip this one. Continue."

//* ======================================================
//* NESTED LOOPS
//* ======================================================

//* What is a Nested Loop?

// A loop inside another loop.

// Example:

debugger;
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

// Output:
//
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2

//* How Nested Loops Work

// Outer loop runs once:
//
// i = 1
//
// Then inner loop completes:
//
// j = 1
// j = 2
//
// Then outer loop:
//
// i = 2
//
// Inner loop runs again:
//
// j = 1
// j = 2

//* Important Rule

// For every ONE outer-loop iteration,
// the INNER LOOP runs completely.

//* ======================================================
//* LOOPS WITH CONDITIONS
//* ======================================================

// Loops and conditions are often used together.

// Example:

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Output:
// 2
// 4
// 6
// 8
// 10

//* Example: Odd Numbers

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Output:
// 1
// 3
// 5
// 7
// 9

//* ======================================================
//* LOOPING THROUGH ARRAYS
//* ======================================================

// Traditional for loop:

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for...of:

for (let number of numbers) {
  console.log(number);
}

//* When You Need the Index

let numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

//* When You Only Need the Value

for (let number of numbers) {
  console.log(number);
}

//* ======================================================
//* LOOPING THROUGH OBJECTS
//* ======================================================

let user = {
  name: "Ravi",
  age: 21,
  role: "Developer",
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// Output:
// name: Ravi
// age: 21
// role: Developer

//* ======================================================
//* LOOPING THROUGH STRINGS
//* ======================================================

let word = "JavaScript";

for (let character of word) {
  console.log(character);
}

// Each character is processed one by one.

//* ======================================================
//* SUM USING A LOOP
//* ======================================================

let numbers = [10, 20, 30, 40];

let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log(sum);

// Output:
// 100

//* How It Works

// sum = 0
//
// number = 10 → sum = 10
// number = 20 → sum = 30
// number = 30 → sum = 60
// number = 40 → sum = 100

//* ======================================================
//* FIND A VALUE USING A LOOP
//* ======================================================

let numbers = [10, 20, 30, 40];

let target = 30;

for (let number of numbers) {
  if (number === target) {
    console.log("Found");

    break;
  }
}

// Output:
// Found

//* ======================================================
//* LOOPING WITH USER INPUT
//* ======================================================

// Example concept:

// let answer;
//
// while (answer !== "yes" && answer !== "no") {
//
//     answer = prompt("Enter yes or no:");
//
// }

// The loop continues until the user enters
// either "yes" or "no".

//* ======================================================
//* QUICK COMPARISON
//* ======================================================

// for
// → Best when you know the number of iterations.

// for...in
// → Best for object keys/properties.

// for...of
// → Best for iterable values.

// while
// → Best when repetition depends on a condition
//   and the number of iterations is not known.

// do...while
// → Best when the code MUST execute at least once.

//* ======================================================
//* LOOP COMPARISON
//* ======================================================

// `for`

for (let i = 0; i < 5; i++) {
  // repeat
}

// `for...in`

for (let key in object) {
  // object keys
}

// `for...of`

for (let value of array) {
  // iterable values
}

// `while`

while (condition) {
  // repeat while true
}

// `do...while`

do {
  // runs at least once
} while (condition);

//* ======================================================
//* MOST IMPORTANT DIFFERENCE
//* ======================================================

// for:
//
// initialization
// condition
// update
//
// Good for controlled counting.

// while:
//
// condition
// code
//
// Good when condition controls repetition.

// do...while:
//
// code
// condition
//
// Good when code must run at least once.

//* ======================================================
//* COMMON MISTAKES
//* ======================================================

//* Mistake 1: Forgetting the Update

// ❌ Infinite loop:

// let i = 1;
//
// while (i <= 5) {
//     console.log(i);
// }

// `i` never changes.

//* Mistake 2: Wrong Condition

// ❌ This skips 5:

for (let i = 1; i < 5; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4

// `i < 5` means 5 is NOT included.

// Use:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//* Mistake 3: Array Index Error

let numbers = [10, 20, 30];

// ❌ Wrong:

// for (let i = 0; i <= numbers.length; i++) {
//     console.log(numbers[i]);
// }

// When i = 3:
// numbers[3] → undefined

// Correct:

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//* Mistake 4: Confusing for...in and for...of

let fruits = ["Apple", "Banana"];

for (let value in fruits) {
  console.log(value);
}

// Output:
// 0
// 1

// `for...in` gives indexes for an array.

for (let value of fruits) {
  console.log(value);
}

// Output:
// Apple
// Banana

// `for...of` gives values.

//* ======================================================
//* LOOP THINKING FOR PROBLEM SOLVING
//* ======================================================

// Whenever you see a problem involving repetition,
// ask these questions:

// 1. What needs to repeat?
//
// 2. Where should I start?
//
// 3. Where should I stop?
//
// 4. How should I update?
//
// 5. Do I need the index?
//
// 6. Do I need the value?
//
// 7. Can I stop early?
//
// 8. Should I skip something?

// Example:
//
// "Print numbers from 1 to 100."

// Start → 1
// Stop  → 100
// Update → +1

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//* ======================================================
//* GOLDEN MEMORY TRICKS
//* ======================================================

// `for`
// → "I know how I want to count."

// `for...in`
// → "I want the KEYS."

// `for...of`
// → "I want the VALUES."

// `while`
// → "Check first, then run."

// `do...while`
// → "Run first, then check."

// `break`
// → "STOP completely."

// `continue`
// → "SKIP this iteration."

//* FINAL FORMULA
//* ======================================================

// FOR:
//
// for (start; condition; update) {
//     code
// }

// FOR...IN:
//
// for (key in object) {
//     code
// }

// FOR...OF:
//
// for (value of iterable) {
//     code
// }

// WHILE:
//
// while (condition) {
//     code
// }

// DO...WHILE:
//
// do {
//     code
// } while (condition);

//* ======================================================
//* ONE FINAL RULE TO REMEMBER
//* ======================================================

// LOOP = REPEAT
//
// for       → controlled repetition
// for...in  → object keys
// for...of  → iterable values
// while     → condition first
// do...while→ code first
//
// break     → stop loop
// continue  → skip iteration
