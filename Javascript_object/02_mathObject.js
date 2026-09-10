//* ============================================================
//* JAVASCRIPT MATH OBJECT
//* ============================================================

// Math is a built-in JavaScript object.
//
// It provides:
// - Mathematical constants
// - Rounding methods
// - Random number generation
// - Maximum / minimum
// - Powers and roots
// - Absolute values
// - Trigonometry
// - Logarithms

//* IMPORTANT
//* ============================================================

// Math is NOT a constructor.
//
// You do NOT write:
//
// new Math() ❌
//
// Instead:
//
// Math.method()

//* ============================================================
//* Math Constants
//* ============================================================

//* Math.PI

// PI represents the ratio of circumference to diameter.

console.log(Math.PI);

// 3.141592653589793

//* Math.E

// Euler's number.

console.log(Math.E);

// 2.718281828459045

//* Math.SQRT2

console.log(Math.SQRT2);

// √2

//* Math.SQRT1_2

console.log(Math.SQRT1_2);

// √(1/2)

//* Math.LN2

console.log(Math.LN2);

// Natural logarithm of 2

//* Math.LN10

console.log(Math.LN10);

//* Math.LOG2E

console.log(Math.LOG2E);

//* Math.LOG10E

console.log(Math.LOG10E);

//* ============================================================
//* Rounding Methods
//* ============================================================

//* Math.floor()

// Rounds DOWN toward negative infinity.

console.log(Math.floor(3.8));
// 3

console.log(Math.floor(3.2));
// 3

console.log(Math.floor(-3.2));
// -4

// IMPORTANT:
// floor does NOT simply mean "remove decimal".
// It always moves toward negative infinity.

//* Math.ceil()

// Rounds UP toward positive infinity.

console.log(Math.ceil(3.2));
// 4

console.log(Math.ceil(3.8));
// 4

console.log(Math.ceil(-3.2));
// -3

//* Math.round()

// Rounds to the nearest integer.

console.log(Math.round(3.4));
// 3

console.log(Math.round(3.6));
// 4

console.log(Math.round(3.5));
// 4

//* Math.trunc()

// Removes the decimal part.
// It moves toward zero.

console.log(Math.trunc(3.8));
// 3

console.log(Math.trunc(-3.8));
// -3

//* ============================================================
//* FLOOR vs CEIL vs ROUND vs TRUNC
//* ============================================================

const number = 3.7;

console.log(Math.floor(number)); // 3
console.log(Math.ceil(number)); // 4
console.log(Math.round(number)); // 4
console.log(Math.trunc(number)); // 3

//* MEMORY TRICK
//
// floor → DOWN
// ceil  → UP
// round → NEAREST
// trunc → REMOVE decimal

//* ============================================================
//* Math.max()
//* ============================================================

// Returns the largest number.

console.log(Math.max(10, 20, 5, 30));

// 30

//* ============================================================
//* Math.min()
//* ============================================================

// Returns the smallest number.

console.log(Math.min(10, 20, 5, 30));

// 5

//* ============================================================
//* Finding Max/Min From an Array
//* ============================================================

const numbers = [10, 20, 5, 30, 15];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// ...numbers spreads the array:
//
// [10, 20, 5, 30, 15]
//
// becomes:
//
// 10, 20, 5, 30, 15

//* ============================================================
//* Math.abs()
//* ============================================================

// Returns the absolute value.
//
// Absolute value means distance from zero.

console.log(Math.abs(10));
// 10

console.log(Math.abs(-10));
// 10

console.log(Math.abs(-25.5));
// 25.5

//* Practical Example

const difference = Math.abs(10 - 25);

console.log(difference);

// 15

//* ============================================================
//* Math.pow()
//* ============================================================

// Raises a number to a power.
//
// Math.pow(base, exponent)

console.log(Math.pow(2, 3));

// 8
//
// 2 × 2 × 2 = 8

//* Modern alternative:

console.log(2 ** 3);

// 8

//* ============================================================
//* Math.sqrt()
//* ============================================================

// Returns the square root.

console.log(Math.sqrt(25));
// 5

console.log(Math.sqrt(81));
// 9

//* ============================================================
//* Math.cbrt()
//* ============================================================

// Returns the cube root.

console.log(Math.cbrt(27));
// 3

console.log(Math.cbrt(64));
// 4

//* ============================================================
//* Math.sign()
//* ============================================================

// Tells whether a number is:
// positive → 1
// negative → -1
// zero → 0

console.log(Math.sign(10));
// 1

console.log(Math.sign(-10));
// -1

console.log(Math.sign(0));
// 0

//* ============================================================
//* Math.random()
//* ============================================================

// Generates a pseudo-random number.
//
// Range:
//
// 0 <= random number < 1

console.log(Math.random());

// Example:
// 0.347829
// 0.928372
// 0.012345

//* IMPORTANT
//
// 0 is possible.
// 1 is NEVER returned.

//* ============================================================
//* Random Integer: 0 to 9
//* ============================================================

const randomNumber = Math.floor(Math.random() * 10);

console.log(randomNumber);

// Possible values:
//
// 0 1 2 3 4 5 6 7 8 9

//* ============================================================
//* Random Integer: 1 to 10
//* ============================================================

const random1To10 = Math.floor(Math.random() * 10) + 1;

console.log(random1To10);

// Possible:
//
// 1 → 10

//* ============================================================
//* Random Integer Formula
//* ============================================================

// For:
//
// min = minimum
// max = maximum
//
// Use:
//
// Math.floor(Math.random() * (max - min + 1)) + min

//* Example: 5 to 15

const random5To15 = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

console.log(random5To15);

//* ============================================================
//* Create Reusable Random Integer Function
//* ============================================================

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 100));
console.log(randomInt(50, 60));

//* ============================================================
//* Random Array Element
//* ============================================================

const fruits = ["Apple", "Banana", "Mango", "Orange"];

const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

console.log(randomFruit);

//* ============================================================
//* Random Boolean
//* ============================================================

const randomBoolean = Math.random() < 0.5;

console.log(randomBoolean);

// Approximately:
// true or false

//* ============================================================
//* Math.sin()
//* ============================================================

// Returns sine of an angle.
//
// IMPORTANT:
// JavaScript trigonometric functions use RADIANS,
// not degrees.

console.log(Math.sin(Math.PI / 2));

// 1

//* ============================================================
//* Math.cos()
//* ============================================================

console.log(Math.cos(0));

// 1

//* ============================================================
//* Math.tan()
//* ============================================================

console.log(Math.tan(0));

// 0

//* ============================================================
//* Degrees → Radians
//* ============================================================

// Formula:
//
// radians = degrees × (Math.PI / 180)

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

console.log(toRadians(180));

// 3.14159...

console.log(Math.sin(toRadians(90)));

// 1

//* ============================================================
//* Radians → Degrees
//* ============================================================

// Formula:
//
// degrees = radians × (180 / Math.PI)

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

console.log(toDegrees(Math.PI));

// 180

//* ============================================================
//* Inverse Trigonometry
//* ============================================================

//* Math.asin()

console.log(Math.asin(1));

// π / 2

//* Math.acos()

console.log(Math.acos(1));

// 0

//* Math.atan()

console.log(Math.atan(1));

// π / 4

//* Math.atan2()
//* ============================================================

// Useful for finding the angle between
// a point and the origin.
//
// Math.atan2(y, x)

const angle = Math.atan2(10, 10);

console.log(toDegrees(angle));

// 45

//* ============================================================
//* Logarithms
//* ============================================================

//* Math.log()

// Natural logarithm.

console.log(Math.log(Math.E));

// 1

//* Math.log10()

console.log(Math.log10(100));

// 2

//* Math.log2()

console.log(Math.log2(8));

// 3

//* ============================================================
//* Math.exp()
//* ============================================================

// e raised to the given power.

console.log(Math.exp(1));

// Same concept as:
//
// Math.E ** 1

//* ============================================================
//* Practical Example — Distance
//* ============================================================

// Distance between two points:
//
// √((x2-x1)² + (y2-y1)²)

function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  return Math.sqrt(dx ** 2 + dy ** 2);
}

console.log(distance(0, 0, 3, 4));

// 5

//* ============================================================
//* Practical Example — Circle Area
//* ============================================================

// Formula:
//
// Area = π × r²

function circleArea(radius) {
  return Math.PI * radius ** 2;
}

console.log(circleArea(5));

//* ============================================================
//* Practical Example — Circle Circumference
//* ============================================================

// Formula:
//
// C = 2πr

function circumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(circumference(5));

//* ============================================================
//* Practical Example — Round To 2 Decimal Places
//* ============================================================

const price = 123.456789;

const roundedPrice = Math.round(price * 100) / 100;

console.log(roundedPrice);

// 123.46

//* ============================================================
//* General Decimal Rounding Function
//* ============================================================

function roundTo(number, decimals) {
  const factor = 10 ** decimals;

  return Math.round(number * factor) / factor;
}

console.log(roundTo(12.34567, 2));
// 12.35

console.log(roundTo(12.34567, 3));
// 12.346

//* ============================================================
//* Clamp a Number
//* ============================================================

// Keep a number inside a minimum/maximum range.

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log(clamp(150, 0, 100));
// 100

console.log(clamp(-10, 0, 100));
// 0

console.log(clamp(50, 0, 100));
// 50

//* ============================================================
//* Math With Arrays
//* ============================================================

const scores = [45, 80, 92, 67, 55];

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

console.log("Highest:", highest);
console.log("Lowest:", lowest);

//* ============================================================
//* Math + Loops
//* ============================================================

const values = [10, 20, 30, 40];

let total = 0;

for (const value of values) {
  total += value;
}

const average = total / values.length;

console.log("Average:", average);

//* ============================================================
//* Math + Conditional Statements
//* ============================================================

const marks = 78;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else {
  console.log("D");
}

//* ============================================================
//* Math Object Quick Reference
//* ============================================================

// Constants:
//
// Math.PI
// Math.E
// Math.SQRT2
// Math.SQRT1_2
// Math.LN2
// Math.LN10
// Math.LOG2E
// Math.LOG10E

// Rounding:
//
// Math.floor()
// Math.ceil()
// Math.round()
// Math.trunc()

// Maximum / Minimum:
//
// Math.max()
// Math.min()

// Basic:
//
// Math.abs()
// Math.sign()
// Math.pow()
// Math.sqrt()
// Math.cbrt()

// Random:
//
// Math.random()

// Trigonometry:
//
// Math.sin()
// Math.cos()
// Math.tan()
// Math.asin()
// Math.acos()
// Math.atan()
// Math.atan2()

// Logarithms:
//
// Math.log()
// Math.log10()
// Math.log2()
// Math.exp()

//* ============================================================
//* MOST IMPORTANT FORMULAS
//* ============================================================

//* Random integer from 0 to max:
//
// Math.floor(Math.random() * (max + 1))

//* Random integer from min to max:
//
// Math.floor(
//     Math.random() * (max - min + 1)
// ) + min

//* Degrees → Radians:
//
// degrees * Math.PI / 180

//* Radians → Degrees:
//
// radians * 180 / Math.PI

//* Circle Area:
//
// Math.PI * radius ** 2

//* Circle Circumference:
//
// 2 * Math.PI * radius

//* Distance:
//
// Math.sqrt(
//     (x2 - x1) ** 2 +
//     (y2 - y1) ** 2
// )

//* ============================================================
//* MEMORY TRICK
//* ============================================================

// floor → DOWN
// ceil  → UP
// round → NEAREST
// trunc → REMOVE decimal
//
// max → BIGGEST
// min → SMALLEST
//
// abs → DISTANCE FROM ZERO
// sqrt → SQUARE ROOT
// pow → POWER
//
// random → RANDOM 0 ≤ x < 1
//
// PI → 3.14159...
// E  → 2.71828...
//
// Math works through:
//
// Math.method(value)
//
// Example:
//
// Math.floor(3.8)
// Math.sqrt(25)
// Math.max(10, 20)
// Math.random()

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// Math does NOT modify your original number.
//
// Most Math methods return a NEW calculated value.
//
// Example:

const originalNumber = 3.8;

const result = Math.floor(originalNumber);

console.log(originalNumber);
// 3.8

console.log(result);
// 3

//* FINAL MEMORY:
//
// MATH = CALCULATE
//
// Round → floor / ceil / round / trunc
// Compare → max / min
// Distance → abs
// Power → pow / **
// Root → sqrt / cbrt
// Random → random
// Circle → PI
// Angle → sin / cos / tan
// Log → log / log10 / log2
