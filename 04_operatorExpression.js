//* What Are Operators?

// An operator is a symbol or keyword that tells JavaScript to perform an operation.

// Operators work with values called operands.

// Example:

let sum = 10 + 5;

// Here:
// +    → Operator
// 10   → Operand
// 5    → Operand
// 10 + 5 → Expression
// sum  → Stores the result

console.log(sum); // 15


//* Types of Operators in JavaScript

// JavaScript provides different types of operators:
//
// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Unary Operators
// 6. Ternary Operator
// 7. Nullish Coalescing Operator
// 8. Optional Chaining Operator


//* Arithmetic Operators

// Arithmetic operators are used to perform mathematical calculations.

let a = 10;
let b = 3;

console.log(a + b); // 13 → Addition
console.log(a - b); // 7  → Subtraction
console.log(a * b); // 30 → Multiplication
console.log(a / b); // 3.333... → Division
console.log(a % b); // 1  → Remainder
console.log(a ** b); // 1000 → Exponentiation


//* Modulus (%) Operator

// The % operator returns the REMAINDER after division.

console.log(10 % 3); // 1
console.log(15 % 5); // 0
console.log(7 % 2); // 1

// This is very useful for checking whether a number is even or odd.

console.log(10 % 2); // 0 → Even
console.log(7 % 2); // 1 → Odd


//* Exponentiation (**) Operator

// The ** operator raises a number to a power.

console.log(2 ** 3); // 8
console.log(5 ** 2); // 25

// 2 ** 3 means:
// 2 × 2 × 2 = 8


//* Comparison Operators

// Comparison operators compare two values.

// They always return a Boolean value:
// true or false.

let x = 10;
let y = 5;

console.log(x == y); // false
console.log(x === y); // false

console.log(x != y); // true
console.log(x !== y); // true

console.log(x > y); // true
console.log(x < y); // false

console.log(x >= y); // true
console.log(x <= y); // false


//* == Loose Equality

// == compares values after allowing type coercion.

console.log(5 == "5"); // true

// JavaScript converts "5" into 5 before comparison.


//* === Strict Equality

// === compares both VALUE and TYPE.

// It does not perform type coercion.

console.log(5 === "5"); // false
console.log(5 === 5); // true

// Best practice:
// Prefer === instead of ==.


//* != Loose Inequality

// != checks whether two values are different after type coercion.

console.log(5 != "6"); // true
console.log(5 != "5"); // false


//* !== Strict Inequality

// !== checks both value and type.

console.log(5 !== "5"); // true
console.log(5 !== 5); // false

// Best practice:
// Prefer !== instead of !=.


//* Greater Than (>)

console.log(10 > 5); // true
console.log(5 > 10); // false


//* Less Than (<)

console.log(5 < 10); // true
console.log(10 < 5); // false


//* Greater Than Or Equal To (>=)

console.log(10 >= 10); // true
console.log(10 >= 5); // true
console.log(5 >= 10); // false


//* Less Than Or Equal To (<=)

console.log(10 <= 10); // true
console.log(5 <= 10); // true
console.log(15 <= 10); // false


//* Logical Operators

// Logical operators are used to combine or reverse conditions.

// There are three main logical operators:
//
// && → AND
// || → OR
// !  → NOT


//* Logical AND (&&)

// AND returns true only when BOTH conditions are true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


// Example:

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive!");
}

// Both conditions must be true:
//
// age >= 18      → true
// hasLicense     → true
//
// true && true → true


//* Logical OR (||)

// OR returns true when AT LEAST ONE condition is true.

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false


// Example:

let hasCash = false;
let hasCard = true;

if (hasCash || hasCard) {
    console.log("You can pay!");
}

// At least one condition is true.


//* Logical NOT (!)

// ! reverses a boolean value.

console.log(!true); // false
console.log(!false); // true


let isLoggedIn = true;

console.log(!isLoggedIn); // false


// true → false
// false → true


//* Assignment Operators

// Assignment operators are used to assign values to variables.

let num = 10;

// = → Assignment

num = 20;

console.log(num); // 20


//* Addition Assignment (+=)

// += adds a value to the existing variable.

let score = 10;

score += 5;

// Same as:
// score = score + 5

console.log(score); // 15


//* Subtraction Assignment (-=)

score -= 5;

// Same as:
// score = score - 5

console.log(score); // 10


//* Multiplication Assignment (*=)

score *= 2;

// Same as:
// score = score * 2

console.log(score); // 20


//* Division Assignment (/=)

score /= 2;

// Same as:
// score = score / 2

console.log(score); // 10


//* Remainder Assignment (%=)

score %= 3;

// Same as:
// score = score % 3

console.log(score); // 1


//* Exponentiation Assignment (**=)

let power = 2;

power **= 3;

// Same as:
// power = power ** 3

console.log(power); // 8


//* Increment Operator (++)

// ++ increases a number by 1.

let count = 5;

count++;

console.log(count); // 6

// Same as:
// count = count + 1


//* Decrement Operator (--)

// -- decreases a number by 1.

count--;

console.log(count); // 5

// Same as:
// count = count - 1


//* Prefix vs Postfix

// The position of ++ or -- matters.

// Postfix:
// value is used first, then changed.

let n = 5;

console.log(n++); // 5
console.log(n); // 6


// Prefix:
// value is changed first, then used.

let m = 5;

console.log(++m); // 6
console.log(m); // 6


//* Ternary Operator

// The ternary operator is a short way to write a simple if-else condition.

// Syntax:
//
// condition ? valueIfTrue : valueIfFalse

let userAge = 20;

let message = userAge >= 18
    ? "You are an adult"
    : "You are a minor";

console.log(message); // "You are an adult"


// Same logic using if-else:

let message2;

if (userAge >= 18) {
    message2 = "You are an adult";
} else {
    message2 = "You are a minor";
}


//* Nullish Coalescing Operator (??)

// ?? returns the right-hand value only when the left-hand value is null or undefined.

let username = null;

let displayName = username ?? "Guest";

console.log(displayName); // "Guest"


let name = "Ravi";

displayName = name ?? "Guest";

console.log(displayName); // "Ravi"


// Important:
//
// ?? checks only:
// null
// undefined
//
// It does NOT treat 0, false, or "" as nullish.

console.log(0 ?? 100); // 0
console.log(false ?? true); // false
console.log("" ?? "Guest"); // ""


//* Optional Chaining Operator (?.)

// ?. allows us to safely access a property or method that might not exist.

// Without optional chaining:

let user = {};

console.log(user.profile); // undefined

// Trying to access:
//
// user.profile.name
//
// would cause an error because profile is undefined.


// With optional chaining:

console.log(user.profile?.name); // undefined

// JavaScript safely stops instead of throwing an error.


//* What Are Expressions?

// An expression is any valid piece of code that produces a value.

// Examples:

10 + 5

x > y

"Hello" + "World"

true && false

// All of these produce a result.


let first = 10;
let second = 20;

let result = first + second;

// first + second is an expression.
// It produces 30.

console.log(result); // 30


//* Expression vs Statement

// An expression PRODUCES A VALUE.

10 + 5;

x > 5;

"Hello";


// A statement performs an ACTION.

let age2 = 21;

if (age2 >= 18) {
    console.log("Adult");
}

// Easy way to remember:
//
// Expression → Produces a value
// Statement  → Performs an action


//* Operator Precedence

// When an expression contains multiple operators, JavaScript follows
// operator precedence to determine which operation happens first.

let result1 = 10 + 5 * 3;

console.log(result1); // 25

// Multiplication happens before addition.
//
// 5 * 3 → 15
// 10 + 15 → 25


//* Parentheses

// Parentheses can be used to control the order of operations.

let result2 = (10 + 5) * 3;

console.log(result2); // 45

// First:
// 10 + 5 → 15
//
// Then:
// 15 * 3 → 45


//* Easy Operator Precedence Rule

// A simple way to remember:
//
// 1. ( ) → Parentheses
// 2. **  → Exponentiation
// 3. *, /, % → Multiplication, Division, Remainder
// 4. +, - → Addition, Subtraction
// 5. Comparison → >, <, >=, <=
// 6. Equality → ===, !==
// 7. && → AND
// 8. || → OR
// 9. ?? → Nullish coalescing
// 10. ?: → Ternary


//* Final Memory Trick

// Arithmetic:
//
// +  → Add
// -  → Subtract
// *  → Multiply
// /  → Divide
// %  → Remainder
// ** → Power


// Comparison:
//
// ==  → Loose equality
// === → Strict equality
//* !=  → Loose inequality
//* !== → Strict inequality
// >   → Greater than
// <   → Less than
// >=  → Greater than or equal
// <=  → Less than or equal


// Logical:
//
// && → AND → Everything must be true
// || → OR  → At least one must be true
// !  → NOT → Reverse the result


// Assignment:
//
// =   → Assign
// +=  → Add and assign
// -=  → Subtract and assign
// *=  → Multiply and assign
// /=  → Divide and assign
// %=  → Remainder and assign


// Special:
//
// ++ → Increase by 1
// -- → Decrease by 1
// ?: → Short if-else
// ?? → Fallback for null/undefined
// ?. → Safely access properties


//* The Most Important Things To Remember

// 1. Operators perform operations.

// 2. Operands are the values that operators work on.

// 3. Expressions produce a value.

// 4. === is preferred over ==.

// 5. && means ALL conditions must be true.

// 6. || means AT LEAST ONE condition must be true.

// 7. ! reverses a boolean.

// 8. + can mean addition OR string concatenation.

// 9. % gives the remainder.

// 10. Parentheses () can change the order of execution.
