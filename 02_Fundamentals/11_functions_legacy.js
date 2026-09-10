//* ============================================================
//* FUNCTIONS IN JAVASCRIPT
//* ============================================================

// A function is a reusable block of code designed to perform a task.
//
// Think of a function like a machine:
//
// Input → Function → Output
//
// Example:
// 5, 10 → add() → 15

//* ============================================================
//* WHY DO WE USE FUNCTIONS?
//* ============================================================

// Without a function, we may repeat the same code:

console.log(5 * 5);
console.log(10 * 10);
console.log(20 * 20);

// This creates repetition.
//
// Instead, create the logic once:

function square(number) {
  return number * number;
}

console.log(square(5));
console.log(square(10));
console.log(square(20));

// Now the same logic can be reused many times.

//* ============================================================
//* FUNCTION DECLARATION
//* ============================================================

// A function declaration is the traditional way of creating a function.
//
// Syntax:
//
// function functionName(parameters) {
//     code
// }

function greet() {
  console.log("Hello!");
}

// The function does NOT run when it is created.
//
// It runs when we CALL it.

greet();
greet();
greet();

// Output:
// Hello!
// Hello!
// Hello!

//* ============================================================
//* FUNCTION CALL / INVOCATION
//* ============================================================

// Calling a function means asking JavaScript to execute it.
//
// Syntax:
//
// functionName();

function sayHello() {
  console.log("Hello Ravi");
}

sayHello();

//* ============================================================
//* PARAMETERS
//* ============================================================

// Parameters are variables written inside the function definition.
//
// They act as placeholders for input.

function greetUser(name) {
  console.log("Hello " + name);
}

// name = parameter

greetUser("Ravi");
greetUser("Aman");

// "Ravi" and "Aman" are arguments.
//
// Parameter → placeholder
// Argument  → actual value

//* ============================================================
//* PARAMETERS VS ARGUMENTS
//* ============================================================

function add(a, b) {
  return a + b;
}

// a and b → parameters

add(10, 20);

// 10 and 20 → arguments

//* ============================================================
//* MULTIPLE PARAMETERS
//* ============================================================

function introduce(name, age, city) {
  console.log(name);
  console.log(age);
  console.log(city);
}

introduce("Ravi", 21, "Bokaro");

//* ============================================================
//* FUNCTION WITHOUT PARAMETERS
//* ============================================================

function showMessage() {
  console.log("Welcome to JavaScript");
}

showMessage();

//* ============================================================
//* RETURN
//* ============================================================

// return sends a value back from the function.
//
// Example:

function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(10, 20);

console.log(result);

// Output:
// 30

//* ============================================================
//* RETURN VS CONSOLE.LOG
//* ============================================================

// console.log() → displays something
// return       → sends something back

function test1() {
  console.log(10);
}

function test2() {
  return 10;
}

const value = test2();

console.log(value);

// test1() only prints 10.
//
// test2() gives 10 back to the caller.

//* ============================================================
//* RETURN STOPS THE FUNCTION
//* ============================================================

function example() {
  console.log("Start");

  return 100;

  // This code never runs
  // because return has already ended the function.

  console.log("End");
}

console.log(example());

// Output:
// Start
// 100

//* ============================================================
//* FUNCTION RETURNING DIFFERENT VALUES
//* ============================================================

function getName() {
  return "Ravi";
}

function getAge() {
  return 21;
}

function getStatus() {
  return true;
}

console.log(getName());
console.log(getAge());
console.log(getStatus());

//* ============================================================
//* FUNCTION EXPRESSION
//* ============================================================

// A function can be stored inside a variable.
//
// Syntax:
//
// const variableName = function () {
//     code
// };

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4));

// The function is stored inside the variable "multiply".

//* ============================================================
//* FUNCTION DECLARATION VS FUNCTION EXPRESSION
//* ============================================================

// Function declaration:

function add1(a, b) {
  return a + b;
}

// Function expression:

const add2 = function (a, b) {
  return a + b;
};

// Both can be called like:

console.log(add1(2, 3));
console.log(add2(2, 3));

//* ============================================================
//* HOISTING
//* ============================================================

// Function declarations are hoisted.
//
// Therefore this works:

sayHi();

function sayHi() {
  console.log("Hi");
}

// Function expressions are different.
//
// This does NOT work:
//
// greet(); // ReferenceError
//
// const greet = function () {
//     console.log("Hello");
// };

// The variable exists in the temporal dead zone until initialization.

//* ============================================================
//* ARROW FUNCTIONS
//* ============================================================

// Arrow functions provide a shorter syntax for functions.
//
// Normal function:

function addNormal(a, b) {
  return a + b;
}

// Arrow function:

const addArrow = (a, b) => {
  return a + b;
};

console.log(addArrow(10, 20));

//* ============================================================
//* ARROW FUNCTION — ONE PARAMETER
//* ============================================================

// Parentheses can be removed when there is exactly one parameter.

const double = (number) => {
  return number * 2;
};

console.log(double(5));

// Both are valid:

const square1 = (number) => {
  return number * number;
};

const square2 = (number) => {
  return number * number;
};

//* ============================================================
//* IMPLICIT RETURN
//* ============================================================

// If an arrow function contains only one expression,
// we can remove {} and return.
//
// Normal:

const cube1 = (number) => {
  return number * number * number;
};

// Short version:

const cube2 = (number) => number * number * number;

console.log(cube2(3));

// Output:
// 27

//* ============================================================
//* EXPLICIT VS IMPLICIT RETURN
//* ============================================================

// Explicit return:

const sum1 = (a, b) => {
  return a + b;
};

// Implicit return:

const sum2 = (a, b) => a + b;

// Remember:
//
// {} → usually need return
// No {} → expression is automatically returned

//* ============================================================
//* FUNCTION WITH CONDITIONS
//* ============================================================

function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  }

  return "Minor";
}

console.log(checkAge(21));
console.log(checkAge(15));

//* ============================================================
//* FUNCTION WITH LOOP
//* ============================================================

function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}

printNumbers(5);

// Function can contain:
// conditions
// loops
// variables
// other functions
// calculations

//* ============================================================
//* DEFAULT PARAMETERS
//* ============================================================

// We can provide a default value for a parameter.

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Ravi");
greet();

// Output:
// Hello Ravi
// Hello Guest

//* ============================================================
//* MULTIPLE RETURN PATHS
//* ============================================================

function getGrade(marks) {
  if (marks >= 90) {
    return "A";
  }

  if (marks >= 75) {
    return "B";
  }

  if (marks >= 60) {
    return "C";
  }

  return "Fail";
}

console.log(getGrade(85));
console.log(getGrade(50));

// Once a return executes,
// the function immediately stops.

//* ============================================================
//* FUNCTIONS RETURNING BOOLEAN
//* ============================================================

// Functions are commonly used to answer yes/no questions.

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(7)); // false

//* ============================================================
//* FUNCTION COMPOSITION
//* ============================================================

// One function can use another function.

function doubleNumber(number) {
  return number * 2;
}

function calculate(number) {
  return doubleNumber(number) + 10;
}

console.log(calculate(5));

// Flow:
//
// calculate(5)
//      ↓
// doubleNumber(5)
//      ↓
// 10
//      ↓
// 10 + 10
//      ↓
// 20

//* ============================================================
//* NESTED FUNCTIONS
//* ============================================================

// A function can be created inside another function.

function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}

outer();

// inner() belongs to the scope of outer().

//* ============================================================
//* FUNCTION SCOPE
//* ============================================================

// Variables created inside a function normally belong
// to that function's local scope.

function testScope() {
  const message = "Hello";

  console.log(message);
}

console.log(message);

testScope();

// This would cause an error:
//
// console.log(message);
//
// because message exists only inside testScope().

//* ============================================================
//* FUNCTIONS ARE VALUES
//* ============================================================

// In JavaScript, functions are first-class values.
//
// This means a function can be:
//
// 1. Stored in a variable
// 2. Passed to another function
// 3. Returned from another function

const greetPerson = function () {
  console.log("Hello");
};

greetPerson();

//* ============================================================
//* PASSING A FUNCTION AS AN ARGUMENT
//* ============================================================

function executeTask(task) {
  task();
}

function sayWelcome() {
  console.log("Welcome!");
}

executeTask(sayWelcome);

// sayWelcome is passed WITHOUT ().
//
// sayWelcome  → pass the function
// sayWelcome() → execute the function

//* ============================================================
//* CALLBACK FUNCTION
//* ============================================================

// A function passed to another function is called a callback.

function processUser(name, callback) {
  console.log("User: " + name);

  callback();
}

processUser("Ravi", function () {
  console.log("Processing complete");
});

// This concept is extremely important in JavaScript.

//* ============================================================
//* FUNCTION RETURNING A FUNCTION
//* ============================================================

function createGreeting() {
  return function () {
    console.log("Hello!");
  };
}

const greeting = createGreeting();
//const greeting = function(){
// console.log("Hello!")
//}

greeting();

// createGreeting()
//      ↓
// returns a function
//      ↓
// greeting stores that function
//      ↓
// greeting()

//* ============================================================
//* REST PARAMETERS
//* ============================================================

// Rest parameters allow a function to accept many arguments.
//
// Syntax:
//
// ...parameter

function addAll(...numbers) {
  //[]
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(addAll(10, 20));
console.log(addAll(10, 20, 30, 40));

// numbers becomes an array.
//
// addAll(10, 20, 30)
// ↓
// numbers = [10, 20, 30]

//* ============================================================
//* ARGUMENTS OBJECT
//* ============================================================

// Normal functions have access to the "arguments" object.

function showArguments() {
  console.log(arguments);
}

showArguments(10, 20, 30);

// Arrow functions do NOT have their own arguments object.
//
// For modern code, rest parameters are usually clearer.

//* ============================================================
//* PURE FUNCTION
//* ============================================================

// A pure function:
//
// Same input → Same output
//
// And it does not modify outside data.

function addPure(a, b) {
  return a + b;
}

console.log(addPure(2, 3));
console.log(addPure(2, 3));

// Always returns 5 for the same inputs.

//* ============================================================
//* FUNCTION SIDE EFFECT
//* ============================================================

// A side effect means the function changes something outside itself.

let count = 0;

function increaseCount() {
  count++;
}

increaseCount();

console.log(count);

// The function changed the outside variable "count".

//* ============================================================
//* FUNCTION NAMING
//* ============================================================

// Good function names usually describe an ACTION.
//
// Examples:

function calculateTotal() {}
function getUser() {}
function validateEmail() {}
function checkPassword() {}
function createAccount() {}
function deleteUser() {}

// Common naming pattern:
//
// get...      → retrieve something
// set...      → change something
// calculate...→ calculate something
// check...    → check something
// validate... → validate something
// create...   → create something
// update...   → update something
// delete...   → delete something

//* ============================================================
//* FUNCTION VS METHOD
//* ============================================================

// A function:

function greetUser() {
  console.log("Hello");
}

greetUser();

// A method is a function stored as an object property.

const user = {
  name: "Ravi",

  greet() {
    console.log("Hello " + this.name);
  },
};

user.greet();

// greet() is a method because it belongs to the user object.

//* ============================================================
//* "this" AND ARROW FUNCTIONS
//* ============================================================

// Normal functions can have their own "this"
// depending on how they are called.
//
// Arrow functions do NOT create their own "this".
// They inherit "this" from the surrounding scope.
//
// This becomes especially important when working with:
// objects
// classes
// event handlers
// callbacks

const person = {
  name: "Ravi",

  sayName() {
    console.log(this.name);
  },
};

person.sayName();

// Here, this refers to person.

//* ============================================================
//* FUNCTION DECLARATION
//* FUNCTION EXPRESSION
//* ARROW FUNCTION
//* ============================================================

// Function declaration:

function greet1() {
  console.log("Hello");
}

// Function expression:

const greet2 = function () {
  console.log("Hello");
};

// Arrow function:

const greet3 = () => {
  console.log("Hello");
};

// All three are functions,
// but their syntax and behavior are not identical.

//* ============================================================
//* COMMON MISTAKE — CALLING TOO EARLY
//* ============================================================

// Function declaration can be called before definition:

hello();

function hello() {
  console.log("Hello");
}

// Function expression cannot be safely called before initialization:
//
// hello2(); // ReferenceError
//
// const hello2 = function () {
//     console.log("Hello");
// };

//* ============================================================
//* COMMON MISTAKE — FORGETTING RETURN
//* ============================================================

function wrongAdd(a, b) {
  a + b;
}

console.log(wrongAdd(2, 3));

// Output:
// undefined
//
// Why?
//
// Because the function calculated a + b
// but never returned it.

// Correct:

function correctAdd(a, b) {
  return a + b;
}

console.log(correctAdd(2, 3));

//* ============================================================
//* COMMON MISTAKE — CONFUSING FUNCTION WITH FUNCTION CALL
//* ============================================================

function greetSomeone() {
  console.log("Hello");
}

// Pass the function:

function run(callback) {
  callback();
}

run(greetSomeone);

// Execute the function immediately:
//
// run(greetSomeone());

// greetSomeone() returns undefined,
// so run() would receive undefined.

//* ============================================================
//* FUNCTION EXECUTION FLOW
//* ============================================================

// Example:

function multiplyNumbers(a, b) {
  const result = a * b;

  return result;
}

const answer = multiplyNumbers(5, 4);

console.log(answer);

// Think like this:
//
// 1. JavaScript reaches multiplyNumbers(5, 4)
// 2. a gets 5
// 3. b gets 4
// 4. result = 5 * 4
// 5. return 20
// 6. answer receives 20
// 7. console.log prints 20

//* ============================================================
//* REAL-WORLD EXAMPLE
//* ============================================================

function calculateBill(amount, taxRate) {
  function addTax(value) {
    return value + value * taxRate;
  }

  return addTax(amount);
}

console.log(calculateBill(100, 0.05));

// Flow:
//
// calculateBill(100, 0.05)
//          ↓
// addTax(100)
//          ↓
// 100 + (100 × 0.05)
//          ↓
// 105
//          ↓
// return 105

//* ============================================================
//* FUNCTION DESIGN RULE
//* ============================================================

// A good function should ideally do ONE clear job.
//
// Bad idea:

function doEverything() {
  // login
  // calculate bill
  // update profile
  // send email
  // create report
}

// Better:

function loginUser() {}
function calculateBill() {}
function updateProfile() {}
function sendEmail() {}
function createReport() {}

// Small functions are easier to:
// understand
// test
// debug
// reuse
// maintain

//* ============================================================
//* QUICK COMPARISON
//* ============================================================

// 1. Function Declaration

function add1(a, b) {
  return a + b;
}

// 2. Function Expression

const add2 = function (a, b) {
  return a + b;
};

// 3. Arrow Function

const add3 = (a, b) => a + b;

// 4. Nested Function

function outerFunction() {
  function innerFunction() {
    console.log("Inner");
  }

  innerFunction();
}

// 5. Callback

function runTask(callback) {
  callback();
}

runTask(() => {
  console.log("Task completed");
});

//* ============================================================
//* FUNCTION CHECKLIST
//* ============================================================

// Whenever you create a function, ask:
//
// 1. What should this function do?
// 2. Does it need input?
// 3. What parameters are needed?
// 4. Does it need to return something?
// 5. Should it modify outside data?
// 6. Can the function be reused?
// 7. Is the function doing only one clear job?

//* ============================================================
//* MOST IMPORTANT RULES
//* ============================================================

// 1. Function = reusable block of code.
//
// 2. Parameter = placeholder.
//
// 3. Argument = actual value.
//
// 4. Calling a function executes it.
//
// 5. return sends a value back.
//
// 6. return immediately stops the function.
//
// 7. Function declaration is hoisted.
//
// 8. Function expressions are assigned to variables.
//
// 9. Arrow functions provide shorter syntax.
//
// 10. Arrow functions do not have their own "this".
//
// 11. Functions can be passed as values.
//
// 12. A function passed to another function is a callback.
//
// 13. Functions can be nested.
//
// 14. Functions can return other functions.
//
// 15. Rest parameters collect multiple arguments into an array.
//
// 16. Good functions usually perform one clear job.

//* ============================================================
//* GOLDEN MEMORY TRICK
//* ============================================================

// FUNCTION = INPUT → PROCESS → OUTPUT
//
// Example:
//
// function add(a, b) {
//     return a + b;
// }
//
// Input:
// 10, 20
//
// Process:
// a + b
//
// Output:
// 30
//
// Remember:
//
// PARAMETER → receives input
// FUNCTION   → processes input
// RETURN     → sends output
// CALL       → starts execution
//
// ⭐ Function = "Write once, use many times."
