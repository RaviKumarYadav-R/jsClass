//* ============================================================
//* JAVASCRIPT FUNDAMENTALS — VARIABLES
//* ============================================================

//* WHAT IS A VARIABLE?
//* A variable is a named binding used to store/reference a value.

//* `let`  → mutable binding
//* `const` → binding cannot be reassigned
//* `var` → legacy function-scoped declaration

let age = 21;
age = 22;
console.log(age);

const name = "Ravi";
console.log(name);

//* const must be initialized:
//* const GRAVITY; // SyntaxError

//* IMPORTANT: const does NOT make objects/arrays immutable.
const user = { name: "Ravi" };
user.name = "Aman"; // allowed

//* Primitive values are immutable; bindings can point to new values.
let city = "Dhanbad";
city = "Ranchi";

//* NAMING RULES
//* - letters, digits, `_`, `$`
//* - cannot start with a digit
//* - case-sensitive
//* - cannot use reserved keywords
//* - prefer camelCase

const firstName = "Ravi";
const totalMarks = 95;

//* SCOPE
//* var    → function scope
//* let/const → block scope

function example() {
  if (true) {
    let blockValue = 10;
    var functionValue = 20;
    console.log(blockValue, functionValue);
  }

  console.log(functionValue);
  // console.log(blockValue); // ReferenceError
}

example();

//* HOISTING / TDZ
//* `var` declaration is hoisted and initialized with undefined.
//* `let` and `const` are hoisted conceptually but remain in the
//* Temporal Dead Zone until their declaration is evaluated.

console.log(varValue); // undefined
var varValue = 10;

// console.log(letValue); // ReferenceError
let letValue = 20;

//* REASSIGNMENT
let score = 10;
score = 20;
score += 5;
console.log(score);

//* CONST REASSIGNMENT IS NOT ALLOWED
const country = "India";
// country = "Nepal"; // TypeError

//* GOLDEN RULE
//* Use `const` by default. Use `let` when the binding must change.
//* Avoid `var` in modern JavaScript unless learning legacy code.
