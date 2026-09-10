//* ============================================================
//* SCOPE, HOISTING AND TDZ
//* ============================================================

//* Scope = the region where an identifier can be accessed.

//* Global scope
const appName = "JS Class";

function demoScope() {
  //* Function scope
  const localValue = 10;
  console.log(appName, localValue);

  if (true) {
    //* Block scope
    const blockValue = 20;
    console.log(blockValue);
  }
}

demoScope();

//* Scope Chain
//* JavaScript looks for a variable in the current scope,
//* then outer lexical scopes, continuing toward global scope.

const outer = "outer";
function outerFunction() {
  const middle = "middle";
  function innerFunction() {
    const inner = "inner";
    console.log(inner, middle, outer);
  }
  innerFunction();
}
outerFunction();

//* Hoisting
//* Declarations are processed before execution, but initialization
//* behavior differs between var, let, const and functions.

console.log(varValue); // undefined
var varValue = 10;

//* Function declarations can be called before their declaration.
console.log(double(4));
function double(n) {
  return n * 2;
}

//* TDZ (Temporal Dead Zone)
//* let/const bindings exist from the start of their scope but cannot
//* be accessed before initialization.
// console.log(tdzValue); // ReferenceError
const tdzValue = 100;

//* var -> function scoped + initialized to undefined during setup.
//* let/const -> block scoped + TDZ until initialization.

//* Mental model:
//* creation phase -> bindings prepared -> execution phase -> statements run

//* Golden Rule:
//* Hoisting does not mean JavaScript physically moves your code upward.
