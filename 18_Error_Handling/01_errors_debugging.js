//* ============================================================
//* ERROR HANDLING AND DEBUGGING
//* ============================================================

//* Error handling lets a program respond safely when an operation fails.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.name, error.message);
} finally {
  console.log("Cleanup / final step");
}

//* Common built-in error types:
//* Error, TypeError, ReferenceError, SyntaxError, RangeError

//* Custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (!Number.isInteger(age) || age < 0) {
    throw new ValidationError("Age must be a non-negative integer");
  }
  return true;
}

try {
  validateAge(-1);
} catch (error) {
  console.error(error.name, error.message);
}

//* Async errors must be handled at the Promise boundary.
async function example() {
  try {
    await Promise.reject(new Error("Request failed"));
  } catch (error) {
    console.error(error.message);
  }
}

example();

//* Debugging tools to master:
//* console.log / table / dir / error
//* browser DevTools breakpoints
//* debugger statement
//* Network tab
//* Performance tab
//* Sources tab

//* Golden Rule:
//* Throw errors for exceptional failure; return normal business results normally.
