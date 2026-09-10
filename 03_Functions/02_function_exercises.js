//* ============================================================
//* FUNCTION EXERCISES — TEACHING SET
//* ============================================================
//* Solve these without looking at the solution.

// 1. Create a function that returns the square of a number.
function square(number) {
  return number * number;
}

// 2. Return the larger of two numbers.
function max(a, b) {
  return a > b ? a : b;
}

// 3. Count vowels in a string.
function countVowels(text) {
  let count = 0;
  for (const char of text.toLowerCase()) {
    if ("aeiou".includes(char)) count++;
  }
  return count;
}

// 4. Create a function that accepts another function and a value.
function apply(value, callback) {
  return callback(value);
}

// 5. Create a function that returns a counter using closure.
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

// Teaching challenge:
// Explain why the returned function can still access `count`.
// Then implement your own memoize(fn) function.