//* ============================================================
//* JAVASCRIPT BOOLEAN
//* ============================================================

// Boolean represents one of two values:
//
// true
// false
//
// Boolean values are mainly used for:
// - Conditions
// - Comparisons
// - Decision making
// - Loops
// - Validation
// - Authentication
// - UI state

//* ============================================================
//* Creating Boolean Values
//* ============================================================

const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn);
// true

console.log(isAdmin);
// false

//* ============================================================
//* Boolean()
//* ============================================================

// Boolean() converts a value into true or false.

console.log(Boolean(true));
// true

console.log(Boolean(false));
// false

//* Number → Boolean

console.log(Boolean(1));
// true

console.log(Boolean(0));
// false

//* String → Boolean

console.log(Boolean("hello"));
// true

console.log(Boolean(""));
// false

//* null / undefined

console.log(Boolean(null));
// false

console.log(Boolean(undefined));
// false

//* ============================================================
//* Truthy and Falsy
//* ============================================================

// When JavaScript expects a Boolean,
// a value is converted using its truthiness.
//
// Values that become false are called FALSY.
//
// Everything else is generally TRUTHY.

//* FALSY VALUES
//* ============================================================

// These are the main falsy values:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

//* TRUTHY VALUES
//* ============================================================

// Examples:

console.log(Boolean(1));
// true

console.log(Boolean(-1));
// true

console.log(Boolean("hello"));
// true

console.log(Boolean("0"));
// true

console.log(Boolean([]));
// true

console.log(Boolean({}));
// true

//* IMPORTANT
//
// "0" is truthy because it is a NON-EMPTY string.
//
// [] and {} are also truthy,
// even though they may look "empty".

//* ============================================================
//* Boolean in if
//* ============================================================

const age = 20;

if (age >= 18) {
  console.log("Adult");
}

// age >= 18 produces a Boolean:
//
// true
//
// Therefore the if block executes.

//* ============================================================
//* Comparison Produces Boolean
//* ============================================================

console.log(10 > 5);
// true

console.log(10 < 5);
// false

console.log(10 === 10);
// true

console.log(10 !== 20);
// true

//* ============================================================
//* Logical AND — &&
//* ============================================================

// AND means:
//
// BOTH conditions must be true.

const hasEmail = true;
const hasPassword = true;

console.log(hasEmail && hasPassword);
// true

const emailVerified = true;
const accountBlocked = true;

console.log(emailVerified && !accountBlocked);
// false

//* Truth table:
//
// A      B      A && B
// ---------------------
// true   true   true
// true   false  false
// false  true   false
// false  false  false

//* MEMORY:
//
// && = BOTH

//* ============================================================
//* Logical OR — ||
//* ============================================================

// OR means:
//
// AT LEAST ONE condition must be true.

const hasGoogleLogin = false;
const hasGithubLogin = true;

console.log(hasGoogleLogin || hasGithubLogin);

// true

//* Truth table:
//
// A      B      A || B
// ---------------------
// true   true   true
// true   false  true
// false  true   true
// false  false  false

//* MEMORY:
//
// || = ANY ONE

//* ============================================================
//* Logical NOT — !
//* ============================================================

// ! reverses truthiness.
//
// true  → false
// false → true

console.log(!true);
// false

console.log(!false);
// true

//* With variables:

const loggedIn = true;

console.log(!loggedIn);
// false

//* ============================================================
//* Double NOT — !!
//* ============================================================

// !! is commonly used to convert a value
// into an actual Boolean.

console.log(!!"hello");
// true

console.log(!!"");
// false

console.log(!!123);
// true

console.log(!!0);
// false

console.log(!!null);
// false

//* Equivalent to:

console.log(Boolean("hello"));
// true

//* ============================================================
//* IMPORTANT: && and || Do NOT Always Return Boolean
//* ============================================================

// This is a VERY important JavaScript concept.
//
// && and || return one of their OPERANDS.
//
// They use truthiness to decide which operand to return.

console.log("Hello" && "World");
// "World"

console.log("" && "World");
// ""

console.log("Hello" || "World");
// "Hello"

console.log("" || "World");
// "World"

// Therefore:
//
// && → returns the first falsy value,
//      otherwise returns the last value.
//
// || → returns the first truthy value,
//      otherwise returns the last value.

//* ============================================================
//* && Practical Use
//* ============================================================

const user = {
  name: "Ravi",
  isLoggedIn: true,
};

user.isLoggedIn && console.log("Show Dashboard");

// Because isLoggedIn is true,
// the right side executes.

//* ============================================================
//* || Practical Use — Default Value
//* ============================================================

const username = "";

const displayName = username || "Guest";

console.log(displayName);

// Guest

//* Because username is an empty string,
// it is falsy.
//
// Therefore || chooses "Guest".

//* IMPORTANT
//
// || treats ALL falsy values as missing.
//
// Example:

const count = 0;

const result = count || 10;

console.log(result);
// 10

// If 0 is a valid value,
// || may not be what you want.
//
// Use ?? instead.

//* ============================================================
//* Nullish Coalescing — ??
//* ============================================================

// ?? uses the right side only when the left side
// is null or undefined.

const count2 = 0;

console.log(count2 ?? 10);
// 0

const username2 = null;

console.log(username2 ?? "Guest");
// Guest

//* Difference:
//
// || → checks truthiness
//
// ?? → checks only null / undefined

//* ============================================================
//* Short-Circuit Evaluation
//* ============================================================

// JavaScript can stop evaluating a logical expression
// as soon as the final result is known.

//* AND short-circuit

false && console.log("Hello");

// "Hello" is NOT printed.
//
// Once JavaScript sees false,
// the entire AND result cannot become true.

//* OR short-circuit

true || console.log("Hello");

// "Hello" is NOT printed.
//
// Once JavaScript sees true,
// the OR result is already guaranteed to be truthy.

//* ============================================================
//* Multiple Conditions
//* ============================================================

const userAge = 25;
const hasID = true;
const hasTicket = true;

if (userAge >= 18 && hasID && hasTicket) {
  console.log("Entry allowed");
}

//* ============================================================
//* Combining && and ||
//* ============================================================

const isStudent = true;
const isEmployee = false;

if (isStudent || isEmployee) {
  console.log("Eligible");
}

// At least one must be true.

//* More complex:

const age2 = 20;
const hasPermission = true;
const isBlocked = false;

if (age2 >= 18 && hasPermission && !isBlocked) {
  console.log("Access granted");
}

//* ============================================================
//* Boolean Function
//* ============================================================

// A function can return true or false.

function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20));
// true

console.log(isAdult(15));
// false

//* This makes conditions easy to reuse.

if (isAdult(25)) {
  console.log("Adult user");
}

//* ============================================================
//* Validation Example
//* ============================================================

function isValidPassword(password) {
  return password.length >= 8;
}

console.log(isValidPassword("javascript"));
// true

console.log(isValidPassword("hello"));
// false

//* ============================================================
//* Boolean Object vs Primitive Boolean
//* ============================================================

// Usually use primitive Booleans:

const primitiveBoolean = true;

console.log(typeof primitiveBoolean);
// "boolean"

// You CAN create a Boolean object:

const booleanObject = new Boolean(true);

console.log(typeof booleanObject);
// "object"

// But this is generally NOT recommended.

//* ============================================================
//* Why Boolean Objects Can Be Dangerous
//* ============================================================

const value = new Boolean(false);

if (value) {
  console.log("This executes!");
}

// Why?
//
// Objects are truthy.
//
// Even though the object contains false,
// the object itself is truthy.

// Therefore:
//
// new Boolean(false) → truthy object
//
// Boolean(false) → false

//* BEST PRACTICE:
//
// Use:
//
// true
// false
//
// Avoid:
//
// new Boolean(...)

//* ============================================================
//* valueOf()
//* ============================================================

// Returns the primitive Boolean value
// stored inside a Boolean object.

const boolObject = new Boolean(true);

console.log(boolObject.valueOf());
// true

//* ============================================================
//* Boolean + Form Input
//* ============================================================

// HTML form values are usually strings.

const input = "";

console.log(Boolean(input));
// false

const input2 = "hello";

console.log(Boolean(input2));
// true

//* ============================================================
//* Boolean + Array
//* ============================================================

const items = [];

console.log(Boolean(items));
// true

// IMPORTANT:
//
// An empty array is truthy.
//
// Therefore this:

if (items) {
  console.log("Items exist");
}

// WILL execute.
//
// If you want to check whether an array contains
// at least one item:

if (items.length > 0) {
  console.log("Array has items");
}

//* ============================================================
//* Boolean + Object
//* ============================================================

const userData = {};

console.log(Boolean(userData));
// true

// Empty object is truthy.
//
// To check whether it has properties:

if (Object.keys(userData).length > 0) {
  console.log("Object has data");
}

//* ============================================================
//* Boolean + Ternary
//* ============================================================

const logged = true;

const message = logged ? "Welcome back!" : "Please login.";

console.log(message);

//* ============================================================
//* Boolean + Array Methods
//* ============================================================

// some() returns a Boolean.
//
// Checks whether AT LEAST ONE element
// satisfies the condition.

const numbers = [1, 3, 5, 8];

const hasEven = numbers.some((number) => number % 2 === 0);

console.log(hasEven);
// true

//* every() also returns a Boolean.
//
// Checks whether EVERY element
// satisfies the condition.

const allPositive = numbers.every((number) => number > 0);

console.log(allPositive);
// true

//* ============================================================
//* Boolean + Includes
//* ============================================================

const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana"));
// true

console.log(fruits.includes("orange"));
// false

//* ============================================================
//* Boolean Conversion Quick Reference
//* ============================================================

// FALSY:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

//* TRUTHY:
//
// "hello"
// "0"
// "false"
// 1
// -1
// []
// {}
// functions

//* ============================================================
//* BOOLEAN QUICK REFERENCE
//* ============================================================

// Create:
//
// true
// false
// Boolean(value)
//
// Logical:
//
// && → AND
// || → OR
// !  → NOT
// !! → Boolean conversion
//
// Checking:
//
// Boolean(value)
// !!value
//
// Boolean methods:
//
// Boolean()
// valueOf()

//* ============================================================
//* LOGICAL OPERATOR MEMORY
//* ============================================================

// &&
//
// BOTH must be truthy.
//
// true && true → true
//
//
// ||
//
// AT LEAST ONE must be truthy.
//
// false || true → true
//
//
// !
//
// REVERSE.
//
// !true → false
// !false → true

//* ============================================================
//* MOST IMPORTANT RULES
//* ============================================================

// 1. Boolean has only two primitive values:
//
//    true
//    false
//
//
// 2. Boolean(value) converts a value into
//    true or false.
//
//
// 3. Only these main values are falsy:
//
//    false
//    0
//    -0
//    0n
//    ""
//    null
//    undefined
//    NaN
//
//
// 4. Everything else is truthy.
//
//
// 5. && means BOTH conditions.
//
//
// 6. || means AT LEAST ONE condition.
//
//
// 7. ! reverses truthiness.
//
//
// 8. !!value converts a value into Boolean.
//
//
// 9. && and || return operands,
//    not necessarily true/false.
//
//
// 10. [] and {} are truthy.
//
//
// 11. new Boolean(false) creates a truthy OBJECT.
//     Prefer primitive false.
//
//
// 12. Use ?? when you want a default only for
//     null or undefined.

//* ============================================================
//* GOLDEN MEMORY
//* ============================================================

// Boolean
//    ↓
// true / false
//
// Truthy / Falsy
//    ↓
// Boolean(value)
//
// &&
//    ↓
// BOTH
//
// ||
//    ↓
// ANY ONE
//
// !
//    ↓
// REVERSE
//
// !!
//    ↓
// CONVERT TO BOOLEAN
//
// ??
//    ↓
// DEFAULT ONLY FOR null / undefined

//* FINAL ONE-LINE MEMORY:
//
// "&& needs BOTH,
//  || needs ONE,
//  ! reverses,
//  !! converts."
