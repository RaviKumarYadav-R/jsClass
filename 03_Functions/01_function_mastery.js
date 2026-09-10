//* ============================================================
//* FUNCTION MASTERY
//* ============================================================

//* A function is a reusable block of code that can receive input,
//* perform work, and optionally return a value.

//* 1. Function Declaration
function add(a, b) {
  return a + b;
}

//* 2. Function Expression
const subtract = function (a, b) {
  return a - b;
};

//* 3. Arrow Function
const multiply = (a, b) => a * b;

//* 4. Parameters vs Arguments
//* Parameters are names in the function definition.
//* Arguments are actual values passed during the call.
function greet(name = "Guest") {
  return `Hello ${name}`;
}

//* 5. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

//* 6. Higher-Order Function
//* A function that accepts another function or returns a function.
function operate(a, b, operation) {
  return operation(a, b);
}

console.log(add(2, 3));
console.log(subtract(8, 3));
console.log(multiply(4, 5));
console.log(greet());
console.log(sum(1, 2, 3, 4));
console.log(operate(5, 2, (a, b) => a ** b));

//* 7. Callback
//* A callback is a function supplied to another function to be called later.

//* 8. Pure Function
//* Same input -> same output, with no observable side effects.
function square(n) {
  return n * n;
}

//* 9. Recursion
//* A function calls itself and must have a base case.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(square(6));
console.log(factorial(5));

//* 10. Function Mental Model
//* call -> parameters receive arguments -> body executes -> return value -> caller receives value

//* Golden Rule:
//* Prefer small functions with one clear responsibility.
