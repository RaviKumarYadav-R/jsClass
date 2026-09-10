//* ============================================================
//* JAVASCRIPT FUNCTIONS — COMPLETE TEACHING CHAPTER
//* ============================================================
//* Goal:
//* Understand functions deeply enough to explain them, predict
//* their behavior, debug them, and use them in real projects.

//* ============================================================
//* 1. WHAT IS A FUNCTION?
//* ============================================================
//* Definition:
//* A function is a reusable unit of executable JavaScript code.
//* It can receive input through parameters, perform an operation,
//* and optionally produce an output using the return statement.
//*
//* Simple mental model:
//*
//*        INPUT                 PROCESS                 OUTPUT
//*     arguments  ───────────>  function  ───────────> return value
//*
//* Example:
function add(a, b) {
  return a + b;
}

console.log(add(10, 20)); // 30

//* Why do functions exist?
//* 1. Reuse code instead of copying it.
//* 2. Break a large problem into smaller problems.
//* 3. Give a meaningful name to an operation.
//* 4. Make code easier to test and debug.
//* 5. Hide implementation details behind a clear interface.

//* Real-world analogy:
//* A coffee machine is like a function.
//* Input  -> coffee beans + water + settings
//* Process -> machine prepares coffee
//* Output -> coffee
//* You do not need to know every internal step to use it.

//* ============================================================
//* 2. FUNCTION DECLARATION
//* ============================================================
//* Syntax:
//* function functionName(parameter1, parameter2) {
//*   // statements
//*   return value;
//* }

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Ravi")); // Hello, Ravi!

//* Important:
//* A declaration creates a function with a name.
//* Function declarations are hoisted, so they can normally be
//* called before their declaration in the same scope.

console.log(square(5)); // 25

function square(number) {
  return number * number;
}

//* ============================================================
//* 3. PARAMETERS VS ARGUMENTS
//* ============================================================
//* Parameter:
//* A variable listed in the function definition.
//*
//* Argument:
//* The actual value supplied when the function is called.

function introduce(name, age) {
  return `${name} is ${age} years old.`;
}

//* name and age -> parameters
//* "Ravi" and 21 -> arguments
console.log(introduce("Ravi", 21));

//* Think:
//* parameter = placeholder
//* argument  = actual value

//* ============================================================
//* 4. FUNCTION CALL / INVOCATION
//* ============================================================
//* Calling a function means asking JavaScript to execute its body.

function sayHello() {
  console.log("Hello!");
}

sayHello(); // function call

//* Execution flow:
//* sayHello()
//*     ↓
//* JavaScript finds the function
//*     ↓
//* creates the function call's execution context
//*     ↓
//* executes the function body
//*     ↓
//* function finishes

//* ============================================================
//* 5. RETURN STATEMENT
//* ============================================================
//* Definition:
//* return ends the current function execution and optionally sends
//* a value back to the code that called the function.

function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 5);
console.log(result); // 20

//* return vs console.log:
//* console.log() -> displays a value.
//* return        -> sends a value back to the caller.

function wrongExample(a, b) {
  console.log(a + b);
}

function correctExample(a, b) {
  return a + b;
}

const value = correctExample(2, 3);
console.log(value); // 5

//* A function without an explicit return returns undefined.
function noReturn() {
  const message = "Hello";
}

console.log(noReturn()); // undefined

//* return immediately stops the current function.
function checkAge(age) {
  if (age < 18) {
    return "Not eligible";
  }

  return "Eligible";
}

console.log(checkAge(20));

//* ============================================================
//* 6. FUNCTION EXPRESSIONS
//* ============================================================
//* A function expression creates a function and stores the resulting
//* function value in a variable.

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(10, 4)); // 6

//* Unlike a function declaration, the variable binding must be
//* initialized before this function expression can be called.

//* ============================================================
//* 7. NAMED FUNCTION EXPRESSIONS
//* ============================================================
//* A function expression may have its own internal name.
//* This can be useful for debugging and recursion.

const factorialExpression = function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorialExpression(5)); // 120

//* ============================================================
//* 8. ARROW FUNCTIONS
//* ============================================================
//* Arrow functions provide a shorter function syntax.

const divide = (a, b) => a / b;

console.log(divide(20, 5)); // 4

//* Multiple parameters require parentheses.
const addNumbers = (a, b) => a + b;

//* One parameter may omit parentheses.
const double = number => number * 2;

//* No parameters require empty parentheses.
const getMessage = () => "Hello";

//* Block body requires an explicit return if you want a value.
const cube = number => {
  return number ** 3;
};

console.log(addNumbers(2, 3));
console.log(double(6));
console.log(getMessage());
console.log(cube(3));

//* ============================================================
//* 9. ARROW FUNCTION — IMPLICIT VS EXPLICIT RETURN
//* ============================================================
//* Expression body:
const triple = n => n * 3;

//* Block body:
const tripleExplicit = n => {
  return n * 3;
};

//* Common mistake:
//* const bad = n => { n * 3 };
//* This returns undefined because the block has no return.

console.log(triple(4)); // 12
console.log(tripleExplicit(4)); // 12

//* ============================================================
//* 10. DEFAULT PARAMETERS
//* ============================================================
//* A default parameter provides a fallback value when the argument
//* is undefined or omitted.

function welcome(name = "Guest") {
  return `Welcome, ${name}`;
}

console.log(welcome("Ravi")); // Welcome, Ravi
console.log(welcome()); // Welcome, Guest
console.log(welcome(undefined)); // Welcome, Guest

//* Important:
//* null does NOT trigger the default parameter.
console.log(welcome(null)); // Welcome, null

//* ============================================================
//* 11. REST PARAMETERS
//* ============================================================
//* Rest parameters collect zero or more remaining arguments into an
//* array. They must be the last parameter.

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum()); // 0

//* With normal parameters:
function showStudent(name, ...subjects) {
  return `${name} studies: ${subjects.join(", ")}`;
}

console.log(showStudent("Ravi", "JS", "React", "Node"));

//* ============================================================
//* 12. REST PARAMETER VS SPREAD SYNTAX
//* ============================================================
//* Same ... syntax, different job.
//*
//* REST  -> collects values.
//* SPREAD -> expands values.

function collect(...items) {
  return items;
}

console.log(collect(1, 2, 3)); // [1, 2, 3]

const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

//* Memory trick:
//* REST = put many values INTO one container.
//* SPREAD = take values OUT of a container.

//* ============================================================
//* 13. FUNCTION SCOPE
//* ============================================================
//* Variables declared with var, let, or const inside a function are
//* local to that function's scope.

function createMessage() {
  const message = "Private to this function";
  return message;
}

console.log(createMessage());

//* message cannot be accessed here because it belongs to the
//* function's local lexical environment.

//* ============================================================
//* 14. FIRST-CLASS FUNCTIONS
//* ============================================================
//* JavaScript treats functions as values.
//* A function can be:
//* 1. stored in a variable
//* 2. stored in an object/array
//* 3. passed as an argument
//* 4. returned from another function

const operation = add;
console.log(operation(7, 8)); // 15

const operations = [add, subtract, multiply];
console.log(operations[0](2, 3)); // 5

//* This property of JavaScript is called first-class function support.

//* ============================================================
//* 15. CALLBACK FUNCTIONS
//* ============================================================
//* Definition:
//* A callback is a function passed to another function so that the
//* receiving function can invoke it.

function processNumber(number, callback) {
  return callback(number);
}

function doubleNumber(number) {
  return number * 2;
}

console.log(processNumber(10, doubleNumber)); // 20

//* Anonymous callback:
console.log(processNumber(5, number => number + 100)); // 105

//* Real-world idea:
//* "When this operation is complete, run this function."
//* Callbacks are heavily used in array methods, events, and older
//* asynchronous JavaScript APIs.

//* ============================================================
//* 16. HIGHER-ORDER FUNCTIONS
//* ============================================================
//* Definition:
//* A higher-order function is a function that accepts one or more
//* functions as arguments, returns a function, or both.

function operate(a, b, operation) {
  return operation(a, b);
}

console.log(operate(5, 2, (x, y) => x + y)); // 7
console.log(operate(5, 2, (x, y) => x ** y)); // 25

//* Common higher-order functions:
//* map(), filter(), reduce(), forEach(), find(), some(), every()

//* ============================================================
//* 17. FUNCTIONS RETURNING FUNCTIONS
//* ============================================================
//* Because functions are values, one function can return another.

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const doubleValue = createMultiplier(2);
const tripleValue = createMultiplier(3);

console.log(doubleValue(10)); // 20
console.log(tripleValue(10)); // 30

//* This leads directly to the concept of CLOSURES.

//* ============================================================
//* 18. CLOSURE — PREVIEW
//* ============================================================
//* A closure occurs when a function retains access to variables from
//* its surrounding lexical scope even after that outer function has
//* finished executing.

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//* The returned function still has access to count.
//* Full closure theory belongs to the Scope & Execution module.

//* ============================================================
//* 19. PURE FUNCTIONS
//* ============================================================
//* Definition:
//* A pure function consistently produces the same output for the
//* same input and does not cause observable side effects.

function squareNumber(number) {
  return number * number;
}

console.log(squareNumber(6)); // 36
console.log(squareNumber(6)); // 36

//* Impure example:
let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}

console.log(addToTotal(10)); // 10
console.log(addToTotal(10)); // 20

//* Same input produced different results because external state changed.

//* Pure functions are easier to test, reason about, and reuse.

//* ============================================================
//* 20. SIDE EFFECTS
//* ============================================================
//* A side effect is an observable interaction with state or the
//* outside environment beyond simply computing and returning a value.
//* Examples:
//* - changing an external variable
//* - modifying an object passed from outside
//* - writing to the DOM
//* - network requests
//* - logging to the console
//* - reading current time/randomness

//* Not every side effect is bad. Real applications need side effects.
//* The important skill is controlling and isolating them.

//* ============================================================
//* 21. RECURSION
//* ============================================================
//* Definition:
//* Recursion is a technique where a function calls itself to solve a
//* smaller version of the same problem.
//*
//* Every useful recursive function needs:
//* 1. Base case -> tells recursion when to stop.
//* 2. Recursive case -> moves toward the base case.

function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120

//* Execution idea:
//* factorial(5)
//* -> 5 * factorial(4)
//* -> 5 * 4 * factorial(3)
//* -> 5 * 4 * 3 * factorial(2)
//* -> 5 * 4 * 3 * 2 * factorial(1)
//* -> 5 * 4 * 3 * 2 * 1
//* -> 120

//* Warning:
//* Missing or unreachable base cases can cause excessive recursion
//* and eventually a RangeError from the call stack limit.

//* ============================================================
//* 22. IIFE — IMMEDIATELY INVOKED FUNCTION EXPRESSION
//* ============================================================
//* An IIFE is a function expression that is invoked immediately.

(function () {
  const secret = "hidden";
  console.log("IIFE executed");
})();

//* Modern JavaScript modules usually provide better encapsulation,
//* but IIFEs are important historically and conceptually.

//* ============================================================
//* 23. FUNCTION COMPOSITION
//* ============================================================
//* Composition means building a larger operation by combining smaller
//* functions.

const increment = n => n + 1;
const doubleNumberAgain = n => n * 2;

const composedResult = doubleNumberAgain(increment(4));
console.log(composedResult); // 10

//* Read from the inside:
//* increment(4) -> 5
//* doubleNumberAgain(5) -> 10

//* Composition becomes very useful in functional programming.

//* ============================================================
//* 24. FUNCTION OVERLOADING — IMPORTANT JAVASCRIPT RULE
//* ============================================================
//* JavaScript does not provide traditional compile-time function
//* overloading like languages such as Java or C++.
//*
//* If you define the same function name again in the same scope,
//* the later binding replaces the earlier one.

//* Instead, JavaScript developers commonly implement overload-like
//* behavior using defaults, rest parameters, or runtime checks.

function formatValue(value, prefix = "Value:") {
  return `${prefix} ${value}`;
}

console.log(formatValue(100));
console.log(formatValue(100, "Price:"));

//* ============================================================
//* 25. FUNCTION ARGUMENTS AND MISSING VALUES
//* ============================================================
//* JavaScript does not require the number of arguments to exactly
//* match the number of parameters.

function threeValues(a, b, c) {
  return [a, b, c];
}

console.log(threeValues(1, 2)); // [1, 2, undefined]
console.log(threeValues(1, 2, 3, 4)); // extra argument is supplied,
//* but it is not assigned to a named parameter.

//* Rest parameters or the arguments object can be used when you need
//* to inspect additional arguments.

//* ============================================================
//* 26. arguments OBJECT
//* ============================================================
//* Traditional non-arrow functions have an arguments object containing
//* the arguments passed to that particular function call.

function inspectArguments() {
  console.log(arguments.length);
  console.log(arguments[0]);
}

inspectArguments("A", "B", "C");

//* Arrow functions do not have their own arguments object.
//* Prefer rest parameters for modern code when variable arguments are needed.

//* ============================================================
//* 27. FUNCTION AS OBJECTS
//* ============================================================
//* Functions are objects in JavaScript and can have properties.

function greetUser(name) {
  return `Hello ${name}`;
}

greetUser.description = "Creates a greeting";

console.log(greetUser.description);

//* This demonstrates that functions are callable objects.

//* ============================================================
//* 28. THIS — IMPORTANT PREVIEW
//* ============================================================
//* The value of this depends primarily on how a regular function is
//* called. Arrow functions do not create their own this binding.
//*
//* Example:

const user = {
  name: "Ravi",
  greet() {
    return `Hello ${this.name}`;
  },
};

console.log(user.greet()); // Hello Ravi

//* Detailed this rules belong to Scope & Execution.

//* ============================================================
//* 29. COMMON MISTAKES
//* ============================================================
//* Mistake 1: Forgetting return.
function missingReturn(a, b) {
  a + b;
}

console.log(missingReturn(2, 3)); // undefined

//* Mistake 2: Calling instead of passing a callback.
function runTask(task) {
  return task();
}

function task() {
  return "Task complete";
}

console.log(runTask(task)); // correct: pass function

//* runTask(task()) would execute task immediately and pass its result.

//* Mistake 3: Confusing parameters and arguments.
//* Mistake 4: Using too many responsibilities in one function.
//* Mistake 5: Forgetting a recursion base case.
//* Mistake 6: Assuming console.log() returns the logged value.
//* Mistake 7: Forgetting that arrow functions have different this behavior.

//* ============================================================
//* 30. WRONG VS CORRECT
//* ============================================================
//* WRONG when the goal is to calculate and reuse a value:
function calculateWrong(a, b) {
  console.log(a + b);
}

//* CORRECT:
function calculateCorrect(a, b) {
  return a + b;
}

const calculated = calculateCorrect(10, 20);
console.log(calculated * 2); // 60

//* ============================================================
//* 31. FUNCTION DESIGN — SINGLE RESPONSIBILITY
//* ============================================================
//* A good function usually performs one clearly understandable job.

function calculatePrice(price, taxRate) {
  return price + price * taxRate;
}

function formatPrice(price) {
  return `₹${price.toFixed(2)}`;
}

const finalPrice = calculatePrice(1000, 0.18);
console.log(formatPrice(finalPrice));

//* Instead of one giant function doing calculation, formatting,
//* DOM updates, network requests, and validation, separate concerns.

//* ============================================================
//* 32. FUNCTION MENTAL MODEL — REMEMBER THIS
//* ============================================================
//* When you see:
//*
//* const result = add(10, 20);
//*
//* Think:
//*
//* 1. Find the function.
//* 2. Pass arguments 10 and 20.
//* 3. Parameters receive those values: a=10, b=20.
//* 4. Execute the function body.
//* 5. Reach return a+b.
//* 6. Produce 30.
//* 7. The function call expression becomes 30.
//* 8. Assign 30 to result.

//* ============================================================
//* 33. TEACHING QUESTIONS — ASK YOUR FRIEND
//* ============================================================
//* 1. What is a function?
//* 2. Why do we need functions?
//* 3. What is the difference between a parameter and an argument?
//* 4. What does return do?
//* 5. What happens if a function does not return anything explicitly?
//* 6. Declaration vs expression?
//* 7. What is an arrow function?
//* 8. What is a default parameter?
//* 9. What does a rest parameter do?
//* 10. What is a callback?
//* 11. What is a higher-order function?
//* 12. What does it mean that functions are first-class values?
//* 13. What is a pure function?
//* 14. What is a side effect?
//* 15. What are the two essential parts of recursion?
//* 16. Why can console.log not replace return?
//* 17. What is the difference between rest and spread?
//* 18. Do arrow functions have their own arguments object?
//* 19. What is an IIFE?
//* 20. What is function composition?

//* ============================================================
//* 34. OUTPUT PREDICTION PRACTICE
//* ============================================================

function outputPractice(a, b = 10) {
  return a + b;
}

console.log(outputPractice(5));
console.log(outputPractice(5, 20));

function testReturn() {
  return 10;
  //* console.log("Never runs");
}

console.log(testReturn());

//* Before running the code, predict every output.

//* ============================================================
//* 35. CODING CHALLENGES — BEGINNER → ADVANCED
//* ============================================================
//* Level 1:
//* Write a function that returns your name.
//*
//* Level 2:
//* Write a function that accepts two numbers and returns their sum.
//*
//* Level 3:
//* Write a function that checks whether a number is even.
//*
//* Level 4:
//* Write a function that accepts an array and returns its largest value.
//*
//* Level 5:
//* Write a function using rest parameters to calculate a total.
//*
//* Level 6:
//* Write a function that accepts another function as a callback.
//*
//* Level 7:
//* Build your own version of map() for an array.
//*
//* Level 8:
//* Build a counter using a closure.
//*
//* Level 9:
//* Write recursive factorial and Fibonacci functions.
//*
//* Level 10:
//* Build a small calculator where operations are functions.

//* ============================================================
//* 36. REAL-WORLD USE CASES
//* ============================================================
//* Functions appear everywhere:
//*
//* UI:
//* handleClick(), renderCard(), toggleMenu()
//*
//* Validation:
//* validateEmail(), validatePassword()
//*
//* API:
//* fetchUser(), createPost(), deleteUser()
//*
//* Business logic:
//* calculateTotal(), applyDiscount(), calculateTax()
//*
//* Utilities:
//* formatDate(), debounce(), throttle()
//*
//* Data processing:
//* map(), filter(), reduce()

//* ============================================================
//* 37. FINAL MEMORY MAP
//* ============================================================
//* Function
//*   ↓
//* Reusable behavior
//*   ↓
//* Parameters receive arguments
//*   ↓
//* Function body executes
//*   ↓
//* return sends a result back
//*
//* Functions are values
//*   ↓
//* Can be stored
//*   ↓
//* Can be passed
//*   ↓
//* Can be returned
//*   ↓
//* Callbacks + higher-order functions
//*   ↓
//* Closures + functional programming

//* ============================================================
//* GOLDEN RULES
//* ============================================================
//* 1. A parameter is a placeholder; an argument is an actual value.
//* 2. return gives a value back; console.log only displays a value.
//* 3. A function without an explicit return produces undefined.
//* 4. Rest collects; spread expands.
//* 5. A callback is a function passed to another function.
//* 6. A higher-order function works with functions as inputs/outputs.
//* 7. Recursion needs progress toward a base case.
//* 8. Small, focused functions are easier to understand and test.
//* 9. Functions are first-class values in JavaScript.
//* 10. Learn functions deeply before moving to closures, async code,
//*     functional programming, and advanced JavaScript.

//* ============================================================
//* NEXT CHAPTER
//* ============================================================
//* Scope, Execution Context, Hoisting, TDZ, Closures, this,
//* call(), apply(), and bind().
