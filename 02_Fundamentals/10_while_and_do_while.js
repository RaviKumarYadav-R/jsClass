//* ======================================================
//* WHILE LOOP
//* ======================================================

//* What is a while Loop?

// A `while` loop repeatedly executes a block of code
// AS LONG AS a condition is TRUE.

// Syntax:

while (condition) {
  // Code to repeat
}

//* Basic Mental Model

// while means:
//
// "WHILE this condition is true,
//  keep running the code."

// Example:

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

//* How a while Loop Works

// A while loop follows this order:
//
// 1. Check condition
// 2. If TRUE → execute code
// 3. Update something
// 4. Check condition again
// 5. Repeat
// 6. If FALSE → STOP

/*
    condition
       ↓
    TRUE?
    /   \
  YES    NO
   ↓      ↓
  code   STOP
   ↓
 update
   ↓
condition again
*/

//* Step-by-Step Example

let i = 1;

while (i <= 3) {
  console.log(i);

  i++;
}

// Step 1:
//
// i = 1
// 1 <= 3 → true
// print 1
// i++ → 2

// Step 2:
//
// i = 2
// 2 <= 3 → true
// print 2
// i++ → 3

// Step 3:
//
// i = 3
// 3 <= 3 → true
// print 3
// i++ → 4

// Step 4:
//
// i = 4
// 4 <= 3 → false
// STOP

//* Important Rule

// The condition is checked BEFORE the loop body.

// Therefore, a while loop can execute ZERO times.

let x = 10;

while (x < 5) {
  console.log("Hello");
}

// Output:
// Nothing

// Why?
//
// 10 < 5 → false
//
// The condition was false from the beginning,
// so the loop never executed.

//* ======================================================
//* INITIALIZATION
//* ======================================================

// Before a while loop starts,
// we usually need a variable that controls the loop.

let i = 1;

while (i <= 5) {
  console.log(i);

  i++;
}

// Here:
//
// Initialization → i = 1
// Condition      → i <= 5
// Update         → i++

//* ======================================================
//* UPDATE
//* ======================================================

// The update changes the value used by the condition.

// Example:

let i = 1;

while (i <= 5) {
  console.log(i);

  i++;
}

// `i++` changes:
//
// 1 → 2 → 3 → 4 → 5 → 6
//
// When i becomes 6:
//
// 6 <= 5 → false
//
// Loop stops.

//* ======================================================
//* INFINITE LOOP
//* ======================================================

// An infinite loop happens when the condition
// NEVER becomes false.

// Example:

// ❌ DO NOT RUN:

// let i = 1;
//
// while (i <= 5) {
//
//     console.log(i);
//
// }

// Why is this infinite?

// i starts at 1.

// But i is NEVER changed.

// Therefore:
//
// i = 1
// 1 <= 5 → true
//
// i = 1
// 1 <= 5 → true
//
// i = 1
// 1 <= 5 → true
//
// Forever...

//* How to Avoid Infinite Loops

// Make sure something inside the loop
// eventually makes the condition false.

let i = 1;

while (i <= 5) {
  console.log(i);

  i++;
}

// `i++` eventually makes:
// i <= 5 → false

//* ======================================================
//* COUNTING FORWARD
//* ======================================================

let i = 1;

while (i <= 10) {
  console.log(i);

  i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//* ======================================================
//* COUNTING BACKWARD
//* ======================================================

let i = 10;

while (i >= 1) {
  console.log(i);

  i--;
}

// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

//* ======================================================
//* INCREMENT BY 2
//* ======================================================

let i = 0;

while (i <= 10) {
  console.log(i);

  i += 2;
}

// Output:
// 0
// 2
// 4
// 6
// 8
// 10

//* ======================================================
//* EVEN NUMBERS
//* ======================================================

let i = 1;

while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }

  i++;
}

// Output:
// 2
// 4
// 6
// 8
// 10

//* ======================================================
//* ODD NUMBERS
//* ======================================================

let i = 1;

while (i <= 10) {
  if (i % 2 !== 0) {
    console.log(i);
  }

  i++;
}

// Output:
// 1
// 3
// 5
// 7
// 9

//* ======================================================
//* WHILE LOOP WITH ARRAYS
//* ======================================================

let fruits = ["Apple", "Banana", "Mango"];

let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);

  i++;
}

// Output:
// Apple
// Banana
// Mango

//* Why start at 0?

// Arrays use zero-based indexing:
//
// Apple  → 0
// Banana → 1
// Mango  → 2

// length = 3

// Therefore:

// i = 0
// i = 1
// i = 2

// Stop when:
// i = 3
//
// 3 < 3 → false

//* ======================================================
//* SUM OF NUMBERS
//* ======================================================

let i = 1;
let sum = 0;

while (i <= 5) {
  sum += i;

  i++;
}

console.log(sum);

// Output:
// 15

// Calculation:
//
// sum = 0
//
// i = 1 → sum = 1
// i = 2 → sum = 3
// i = 3 → sum = 6
// i = 4 → sum = 10
// i = 5 → sum = 15

//* ======================================================
//* SEARCHING WITH WHILE
//* ======================================================

let numbers = [10, 20, 30, 40];

let target = 30;

let i = 0;

while (i < numbers.length) {
  if (numbers[i] === target) {
    console.log("Found");

    break;
  }

  i++;
}

// Output:
// Found

//* Why use break?

// Once the target is found,
// there is no reason to continue searching.

// break means:
// "Stop the loop completely."

//* ======================================================
//* CONTINUE WITH WHILE
//* ======================================================

// `continue` skips the current iteration.

// Example:

let i = 0;

while (i < 5) {
  i++;

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

//* IMPORTANT WITH while + continue

// Always make sure the update happens BEFORE
// `continue`, otherwise you may accidentally create
// an infinite loop.

// Good:

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  console.log(i);
}

//* ======================================================
//* USER INPUT EXAMPLE
//* ======================================================

// A common use of while is:
// "Keep asking until the input becomes valid."

// Example:

// let answer = "";
//
// while (answer !== "yes" && answer !== "no") {
//
//     answer = prompt("Enter yes or no:");
//
// }

// The loop continues while:
//
// answer is NOT "yes"
// AND
// answer is NOT "no"

// Once the user enters:
// "yes" OR "no"
//
// The condition becomes false.
//
// Loop stops.

//* ======================================================
//* WHILE WITH BOOLEAN
//* ======================================================

let isRunning = true;

let count = 1;

while (isRunning) {
  console.log(count);

  count++;

  if (count > 3) {
    isRunning = false;
  }
}

// Output:
// 1
// 2
// 3

//* Here:
//
// isRunning = true
// → loop continues.
//
// isRunning = false
// → loop stops.

//* ======================================================
//* WHILE WITH MULTIPLE CONDITIONS
//* ======================================================

let i = 1;

while (i <= 10 && i !== 7) {
  console.log(i);

  i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6

// When i = 7:
//
// i <= 10 → true
// i !== 7 → false
//
// true && false → false
//
// STOP.

//* ======================================================
//* NESTED WHILE LOOP
//* ======================================================

// A while loop inside another while loop
// is called a nested loop.

let i = 1;

while (i <= 3) {
  let j = 1;

  while (j <= 2) {
    console.log(i, j);

    j++;
  }

  i++;
}

// Output:
//
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2

//* Important:
//
// The inner loop must finish
// before the outer loop moves forward.

//* ======================================================
//* WHILE vs FOR
//* ======================================================

// Both can perform repetition.

// FOR:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// WHILE:

let i = 1;

while (i <= 5) {
  console.log(i);

  i++;
}

// Both produce:
//
// 1
// 2
// 3
// 4
// 5

//* When Should I Use while?

// Use while when the number of repetitions
// is NOT known in advance.

// Example:
//
// "Keep asking until the user enters a valid value."
//
// "Keep running while the game is active."
//
// "Keep processing while data is available."

//* When Should I Use for?

// Use for when the number of iterations
// or counting pattern is clear.

// Example:
//
// "Print 1 to 100."
//
// "Loop through every array index."

//* ======================================================
//* WHILE vs DO...WHILE
//* ======================================================

// while:
//
// Condition is checked FIRST.

let x = 10;

while (x < 5) {
  console.log("Hello");
}

// Output:
// Nothing

// do...while:
//
// Code runs FIRST.

let y = 10;

do {
  console.log("Hello");
} while (y < 5);

// Output:
// Hello

//* Remember:
//
// while     → Check → Run
//
// do...while → Run → Check

//* ======================================================
//* COMMON MISTAKES
//* ======================================================

//* Mistake 1: Forgetting the Update

// ❌

// let i = 1;
//
// while (i <= 5) {
//     console.log(i);
// }

// Infinite loop.

//* Mistake 2: Updating the Wrong Variable

// ❌

// let i = 1;
// let j = 10;
//
// while (i <= 5) {
//
//     console.log(i);
//
//     j++;
// }

// `i` never changes.
//
// Therefore:
// i <= 5 remains true forever.

//* Mistake 3: Wrong Direction

// ❌

// let i = 1;
//
// while (i <= 5) {
//
//     console.log(i);
//
//     i--;
// }

// i becomes:
//
// 1 → 0 → -1 → -2 → -3...
//
// `i <= 5` remains true.
//
// Infinite loop.

//* Correct:

let i = 1;

while (i <= 5) {
  console.log(i);

  i++;
}

//* Mistake 4: Wrong Array Condition

let numbers = [10, 20, 30];

let i = 0;

while (i <= numbers.length) {
  console.log(numbers[i]);

  i++;
}

// When i = 3:
//
// numbers[3] → undefined

// Correct:

let numbers = [10, 20, 30];

let i = 0;

while (i < numbers.length) {
  console.log(numbers[i]);

  i++;
}

//* ======================================================
//* PROBLEM-SOLVING FORMULA
//* ======================================================

// Whenever you solve a while-loop problem,
// identify FOUR things:
//
// 1. START
// 2. CONDITION
// 3. WORK
// 4. UPDATE

// Example:
//
// "Print numbers from 1 to 10."

// START:
// i = 1
//
// CONDITION:
// i <= 10
//
// WORK:
// console.log(i)
//
// UPDATE:
// i++

let i = 1;

while (i <= 10) {
  console.log(i);

  i++;
}

//* ======================================================
//* WHILE LOOP CHECKLIST
//* ======================================================

// Before running a while loop, ask:
//
// 1. What variable controls my loop?
//
// 2. What is its starting value?
//
// 3. What is my stopping condition?
//
// 4. Does the loop change the controlling variable?
//
// 5. Will the condition eventually become false?
//
// 6. Do I need `break`?
//
// 7. Do I need `continue`?

//* ======================================================
//* MOST IMPORTANT RULES
//* ======================================================

// 1. `while` checks the condition BEFORE execution.
//
// 2. If the condition is false initially,
//    the loop runs ZERO times.
//
// 3. Something should normally change inside
//    the loop so the condition can eventually become false.
//
// 4. Forgetting the update can create an infinite loop.
//
// 5. `break` completely stops the loop.
//
// 6. `continue` skips the current iteration.
//
// 7. `while` is useful when the number of iterations
//    is not known beforehand.
//
// 8. Always trace START → CONDITION → WORK → UPDATE.

//* ======================================================
//* ONE-LINE MEMORY TRICK
//* ======================================================

// while = "KEEP GOING WHILE THIS IS TRUE"

//* FINAL FORMULA
//* ======================================================

// START
//   ↓
// CONDITION
//   ↓
// TRUE?
//  /   \
// YES   NO
//  ↓     ↓
// WORK   STOP
//  ↓
// UPDATE
//  ↓
// CONDITION AGAIN
//  ↓
// ...

/*
    while (condition) {

        // work

        // update
    }
*/

//* GOLDEN RULE
//* ======================================================

// WHILE LOOP:
//
// CHECK → RUN → UPDATE → CHECK AGAIN
//
// And always ask:
//
// "Will my condition eventually become FALSE?"
