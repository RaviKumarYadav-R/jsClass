//* ============================================================
//* JAVASCRIPT NUMBER OBJECT
//* ============================================================

// Number is a built-in JavaScript object/function used to:
//
// - Convert values into numbers
// - Check numeric values
// - Work with special numeric values
// - Format numbers
// - Check safe integer ranges
// - Represent Infinity and NaN

//* IMPORTANT
//* ============================================================

// JavaScript has ONE main numeric type:
//
// number
//
// It handles:
// - Integers
// - Decimal numbers
// - Positive numbers
// - Negative numbers
// - Infinity
// - NaN
//
// JavaScript also has:
// BigInt → for very large integers

//* ============================================================
//* Number()
//* ============================================================

// Number() converts a value into a number.

console.log(Number("100"));
// 100

console.log(Number("3.14"));
// 3.14

console.log(Number(true));
// 1

console.log(Number(false));
// 0

//* String containing spaces

console.log(Number(" 50 "));
// 50

//* Empty string

console.log(Number(""));
// 0

//* null

console.log(Number(null));
// 0

//* undefined

console.log(Number(undefined));
// NaN

//* Invalid numeric string

console.log(Number("hello"));
// NaN

//* ============================================================
//* Number() vs parseInt()
//* ============================================================

// This difference is VERY important.

console.log(Number("100px"));
// NaN

console.log(parseInt("100px"));
// 100

// Number() expects the WHOLE string to represent a number.
//
// parseInt() reads an integer from the beginning
// and stops when it reaches an invalid character.

//* ============================================================
//* parseInt()
//* ============================================================

// Converts a string into an integer.

console.log(parseInt("100"));
// 100

console.log(parseInt("42.99"));
// 42

// Decimal portion is removed.

//* String starting with number

console.log(parseInt("100px"));
// 100

//* String NOT starting with number

console.log(parseInt("px100"));
// NaN

//* ============================================================
//* parseInt() with Radix
//* ============================================================

// Syntax:
//
// parseInt(value, radix)
//
// Radix tells JavaScript which number system to use.

console.log(parseInt("101", 2));

// Binary 101 = decimal 5

console.log(parseInt("FF", 16));

// Hexadecimal FF = decimal 255

//* BEST PRACTICE
//
// When parsing decimal integers from strings,
// explicitly use radix 10.

console.log(parseInt("100", 10));

//* ============================================================
//* parseFloat()
//* ============================================================

// Converts a string into a decimal number.

console.log(parseFloat("3.14"));
// 3.14

console.log(parseFloat("42.75"));
// 42.75

//* It can also stop at invalid characters.

console.log(parseFloat("3.14px"));
// 3.14

console.log(parseFloat("px3.14"));
// NaN

//* ============================================================
//* Number() vs parseInt() vs parseFloat()
//* ============================================================

const value = "123.45px";

console.log(Number(value));
// NaN

console.log(parseInt(value, 10));
// 123

console.log(parseFloat(value));
// 123.45

//* MEMORY TRICK
//
// Number()     → convert the WHOLE value
// parseInt()   → INTEGER
// parseFloat() → DECIMAL

//* ============================================================
//* Number.isInteger()
//* ============================================================

// Checks whether a value is an integer.

console.log(Number.isInteger(10));
// true

console.log(Number.isInteger(10.5));
// false

console.log(Number.isInteger("10"));
// false

// IMPORTANT:
// Number.isInteger() does NOT convert strings.

//* ============================================================
//* Number.isNaN()
//* ============================================================

// Checks whether a value is exactly NaN.

console.log(Number.isNaN(NaN));
// true

console.log(Number.isNaN(10));
// false

console.log(Number.isNaN("hello"));
// false

//* Why?

// "hello" is NOT NaN.
// It is a string.
//
// To create NaN:

const result = Number("hello");

console.log(result);
// NaN

console.log(Number.isNaN(result));
// true

//* ============================================================
//* Global isNaN() vs Number.isNaN()
//* ============================================================

// Global isNaN() performs type conversion.

console.log(isNaN("hello"));
// true

console.log(isNaN("100"));
// false

// Number.isNaN() does NOT perform conversion.

console.log(Number.isNaN("hello"));
// false

console.log(Number.isNaN("100"));
// false

//* PREFERRED
//
// Use Number.isNaN()
// when you specifically want to check for NaN.

//* ============================================================
//* Number.isFinite()
//* ============================================================

// Checks whether a value is a finite number.

console.log(Number.isFinite(100));
// true

console.log(Number.isFinite(3.14));
// true

console.log(Number.isFinite(Infinity));
// false

console.log(Number.isFinite(-Infinity));
// false

console.log(Number.isFinite(NaN));
// false

console.log(Number.isFinite("100"));
// false

//* ============================================================
//* Number.parseInt()
//* ============================================================

// Number also exposes parseInt.

console.log(Number.parseInt("100px", 10));
// 100

//* ============================================================
//* Number.parseFloat()
//* ============================================================

console.log(Number.parseFloat("3.14px"));
// 3.14

//* ============================================================
//* Number Constants
//* ============================================================

//* Number.MAX_VALUE

console.log(Number.MAX_VALUE);

// Largest finite number JavaScript can represent.

//* Number.MIN_VALUE

console.log(Number.MIN_VALUE);

// IMPORTANT:
//
// This is NOT the most negative number.
//
// It is the smallest POSITIVE number
// greater than zero that JavaScript can represent.

console.log(Number.MIN_VALUE);
// approximately 5e-324

//* For the most negative finite number:

console.log(-Number.MAX_VALUE);

//* ============================================================
//* Number.MAX_SAFE_INTEGER
//* ============================================================

// Largest integer that can be represented safely.

console.log(Number.MAX_SAFE_INTEGER);

// 9007199254740991

//* Number.MIN_SAFE_INTEGER

console.log(Number.MIN_SAFE_INTEGER);

// -9007199254740991

//* ============================================================
//* Number.isSafeInteger()
//* ============================================================

console.log(Number.isSafeInteger(100));
// true

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
// true

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
// false

//* ============================================================
//* Why Safe Integers Matter
//* ============================================================

// JavaScript numbers use IEEE 754 double-precision
// floating-point representation.
//
// Very large integers can lose precision.

const bigNumber = 9007199254740992;

console.log(bigNumber);

// For integers beyond the safe range,
// use BigInt when appropriate.

//* ============================================================
//* BigInt
//* ============================================================

const hugeNumber = 9007199254740992n;

console.log(hugeNumber);

// n at the end means BigInt.

//* IMPORTANT
//
// number and BigInt cannot normally be mixed
// directly in arithmetic.

const a = 10;
const b = 20n;

// console.log(a + b); // TypeError

//* ============================================================
//* Infinity
//* ============================================================

// JavaScript supports positive and negative Infinity.

console.log(1 / 0);
// Infinity

console.log(-1 / 0);
// -Infinity

//* Number.POSITIVE_INFINITY

console.log(Number.POSITIVE_INFINITY);

//* Number.NEGATIVE_INFINITY

console.log(Number.NEGATIVE_INFINITY);

//* Check Infinity

console.log(Number.isFinite(Infinity));
// false

//* ============================================================
//* NaN
//* ============================================================

// NaN means:
//
// Not-a-Number
//
// It represents an invalid numeric result.

console.log(Number("hello"));
// NaN

console.log(0 / 0);
// NaN

console.log(Math.sqrt(-1));
// NaN

//* IMPORTANT
//
// typeof NaN is still "number".

console.log(typeof NaN);
// "number"

//* ============================================================
//* Number Formatting
//* ============================================================

//* toFixed()
//* ============================================================

// Formats a number with a fixed number of decimal places.
//
// Returns a STRING.

const price = 123.4567;

console.log(price.toFixed(2));
// "123.46"

console.log(price.toFixed(0));
// "123"

// IMPORTANT:
//
// toFixed() returns STRING, not number.

console.log(typeof price.toFixed(2));
// "string"

// If you need a number:

const formattedPrice = Number(price.toFixed(2));

console.log(formattedPrice);
// 123.46

//* ============================================================
//* toPrecision()
//* ============================================================

// Controls the total number of significant digits.

const number = 123.456;

console.log(number.toPrecision(4));
// "123.5"

console.log(number.toPrecision(6));
// "123.456"

// Also returns a STRING.

//* ============================================================
//* toExponential()
//* ============================================================

// Converts number into exponential notation.

const large = 123456;

console.log(large.toExponential(2));

// Example:
// "1.23e+5"

//* ============================================================
//* toLocaleString()
//* ============================================================

// Formats a number according to a locale.

const amount = 1234567.89;

console.log(amount.toLocaleString("en-IN"));

// Example:
// 12,34,567.89

console.log(amount.toLocaleString("en-US"));

// Example:
// 1,234,567.89

//* ============================================================
//* Currency Formatting
//* ============================================================

const price2 = 1499.5;

console.log(
  price2.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  }),
);

// Example:
// ₹1,499.50

//* ============================================================
//* Percentage Formatting
//* ============================================================

const percentage = 0.75;

console.log(
  percentage.toLocaleString("en-IN", {
    style: "percent",
  }),
);

// 75%

//* ============================================================
//* Floating-Point Precision
//* ============================================================

// JavaScript numbers use floating-point representation.
//
// Therefore:

console.log(0.1 + 0.2);

// 0.30000000000000004

// NOT exactly 0.3

//* Why?
//
// Some decimal fractions cannot be represented
// exactly in binary floating-point.
//
// This is a representation issue,
// not a normal arithmetic mistake.

//* Practical solution for display:

console.log((0.1 + 0.2).toFixed(2));

// "0.30"

// For serious financial calculations,
// use integer smallest units (such as paise/cents)
// or a suitable decimal arithmetic library.

//* ============================================================
//* Number Conversion in Forms
//* ============================================================

// Values from HTML input fields are usually strings.

const inputValue = "250";

console.log(typeof inputValue);
// string

const numericValue = Number(inputValue);

console.log(typeof numericValue);
// number

console.log(numericValue + 50);
// 300

//* Without conversion:

console.log(inputValue + 50);

// "25050"

// Because + with a string performs string concatenation.

//* ============================================================
//* Practical Example — Add Two Inputs
//* ============================================================

function addNumbers(value1, value2) {
  return Number(value1) + Number(value2);
}

console.log(addNumbers("10", "20"));
// 30

//* ============================================================
//* Practical Example — Check Valid Number
//* ============================================================

function isValidNumber(value) {
  const number = Number(value);

  return Number.isFinite(number);
}

console.log(isValidNumber("100"));
// true

console.log(isValidNumber("hello"));
// false

console.log(isValidNumber(""));
// true

// Why is "" true?
//
// Number("") → 0
//
// If empty input should be invalid,
// check for an empty string separately.

//* ============================================================
//* Practical Example — Price
//* ============================================================

function formatPrice(price) {
  return Number(price).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
}

console.log(formatPrice(1499.5));

// ₹1,499.50

//* ============================================================
//* Practical Example — Percentage
//* ============================================================

function calculatePercentage(obtained, total) {
  return (obtained / total) * 100;
}

console.log(calculatePercentage(450, 500));

// 90

//* ============================================================
//* Practical Example — Average
//* ============================================================

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce((sum, number) => sum + number, 0);

  return total / numbers.length;
}

console.log(average([10, 20, 30, 40]));

// 25

//* ============================================================
//* Practical Example — Safe Integer Check
//* ============================================================

function checkSafeInteger(value) {
  return Number.isSafeInteger(value);
}

console.log(checkSafeInteger(100));
// true

console.log(checkSafeInteger(Number.MAX_SAFE_INTEGER));
// true

//* ============================================================
//* Number Object Quick Reference
//* ============================================================

// CONVERSION:
//
// Number()
// parseInt()
// parseFloat()

// CHECKING:
//
// Number.isNaN()
// Number.isFinite()
// Number.isInteger()
// Number.isSafeInteger()

// FORMATTING:
//
// toFixed()
// toPrecision()
// toExponential()
// toLocaleString()

// CONSTANTS:
//
// Number.MAX_VALUE
// Number.MIN_VALUE
// Number.MAX_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER
// Number.POSITIVE_INFINITY
// Number.NEGATIVE_INFINITY
// Number.NaN

//* ============================================================
//* MOST IMPORTANT DIFFERENCES
//* ============================================================

//* Number()

Number("123.45");
// 123.45

Number("123px");
// NaN

//* parseInt()

parseInt("123.45", 10);
// 123

parseInt("123px", 10);
// 123

//* parseFloat()

parseFloat("123.45px");
// 123.45

//* ============================================================
//* MEMORY TRICK
//* ============================================================

// Number()     → COMPLETE CONVERSION
//
// parseInt()   → INTEGER
//
// parseFloat() → FLOAT / DECIMAL
//
// isNaN()      → Is it NaN?
//
// isFinite()   → Is it a finite number?
//
// isInteger()  → Is it an integer?
//
// isSafeInteger()
//              → Can this integer be represented safely?
//
// toFixed()    → FIXED DECIMAL PLACES
//
// toPrecision()
//              → SIGNIFICANT DIGITS
//
// toLocaleString()
//              → HUMAN-FRIENDLY FORMAT

//* ============================================================
//* GOLDEN RULES
//* ============================================================

// 1. Number("123") → 123
//
// 2. Number("123px") → NaN
//
// 3. parseInt("123px", 10) → 123
//
// 4. parseFloat("3.14px") → 3.14
//
// 5. Number.isNaN() is safer for specifically checking NaN.
//
// 6. Number.isFinite() checks for a real finite number.
//
// 7. toFixed() returns a STRING.
//
// 8. Number.MIN_VALUE means the smallest POSITIVE
//    value greater than zero — NOT the most negative number.
//
// 9. Number.MAX_SAFE_INTEGER is the largest safely
//    representable integer.
//
// 10. Floating-point calculations can have precision issues.
//
// 11. BigInt is used for integers beyond the safe
//     integer range when appropriate.
//
// 12. JavaScript's normal `number` type includes:
//     integers + decimals + Infinity + NaN.

//* FINAL MEMORY:
//
// VALUE
//   ↓
// Number()      → number
//
// STRING
//   ↓
// parseInt()    → integer
//
// STRING
//   ↓
// parseFloat()  → decimal
//
// NUMBER
//   ↓
// toFixed()     → formatted string
//
// NUMBER
//   ↓
// toLocaleString()
//              → human-readable formatted string
