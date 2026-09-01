/*
===============================================================================
                    JAVASCRIPT DATA TYPES
                 PRIMITIVES AND OBJECTS
===============================================================================
When working with JavaScript, it’s important to understand the types of data you’ll be dealing with. Every value in JavaScript belongs to one of two category — primitive types or object types. Knowing the difference between them is key to writing clean, efficient, and bug-free code.

1. Primitive Values
2. Objects (Non-Primitive Values)


EASY WAY TO REMEMBER:

Primitive → Single value
Object    → Collection of values

===============================================================================
*/

// ============================================================================
// 1. PRIMITIVE DATA TYPES
// ============================================================================

/*
DEFINITION:

Primitive data types are the most basic and fundamental types in JavaScript. They represent single, immutable values — meaning their actual value cannot be changed once created.

JavaScript has 7 primitive data types:

1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt


IMPORTANT:

Primitive values are IMMUTABLE.

Immutable means:

The value itself cannot be changed after it is created.

However, a variable containing a primitive can be reassigned.
*/

// Number
let age = 21;
let price = 99.99;

// String
let name = "Ravi";

// Boolean
let isLoggedIn = true;

// Undefined
let username;

// Null
let selectedUser = null;

// Symbol
let id = Symbol("id");

// BigInt
let bigNumber = 12345678901234567890n;

// ============================================================================
// 2. PRIMITIVE EXAMPLE
// ============================================================================

/*
When we reassign a primitive:

let x = 10;
x = 20;

We are NOT changing 10 into 20.

We are simply assigning a new value to x.
*/

let x = 10;

x = 20;

console.log(x); // 20

/*
===============================================================================
3. COPYING PRIMITIVES
===============================================================================

When a primitive is copied, its VALUE is copied.

Example:
*/

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

/*
Think:

a → 10
b → 10

After b = 20:

a → 10
b → 20

They are independent.

MEMORY TRICK:

Primitive → Copy the VALUE
*/

// ============================================================================
// 4. OBJECTS
// ============================================================================

/*
DEFINITION:

Objects in JavaScript are more powerful and flexible. They can store multiple pieces of data and represent real-world entities like users, cars, or products.

Objects store data using KEY-VALUE PAIRS.

Example:
*/

const person = {
  name: "John",
  age: 30,
};

/*
Here:

name → key/property
"John" → value

age → key/property
30 → value
*/

console.log(person.name); // John
console.log(person.age); // 30

// ============================================================================
// 5. OBJECTS ARE MUTABLE
// ============================================================================

/*
Mutable means:

The contents of an object can be changed after the object is created.
*/

const user = {
  name: "John",
  age: 30,
};

user.age = 31;

console.log(user.age); // 31

/*
We changed the existing object's property.

This is different from primitive values.
*/

// ============================================================================
// 6. OTHER OBJECT TYPES
// ============================================================================

/*
Many JavaScript values are objects.

Common examples:

- Object
- Array
- Function
- Date
- Map
- Set
- RegExp
*/

// Array
const colors = ["red", "green", "blue"];

// Function
function greet() {
  console.log("Hello!");
}

// Date
const today = new Date();

// ============================================================================
// 7. COPYING OBJECTS
// ============================================================================

/*
When an object is copied, the REFERENCE VALUE is copied.

Example:
*/

const person1 = {
  name: "John",
};

const person2 = person1;

person2.name = "Ravi";

console.log(person1.name); // Ravi
console.log(person2.name); // Ravi

/*
Why did person1 change?

Because person1 and person2 refer to the SAME OBJECT.


Think:

person1 ──────┐
              ↓
         ┌─────────────┐
         │ name: Ravi  │
         └─────────────┘
              ↑
person2 ──────┘


MEMORY TRICK:

Object → Copy the REFERENCE VALUE
*/

// ============================================================================
// 8. PRIMITIVE VS OBJECT
// ============================================================================

/*

                    PRIMITIVE              OBJECT

Meaning             Single value           Collection of values

Mutable              ❌ No                  ✅ Usually yes

Copying              Value                  Reference value

Examples             10                     { name: "Ravi" }
                     "Hello"                [1, 2, 3]
                     true                   function(){}


EASY RULE:

Primitive → Value
Object    → Reference
*/

// ============================================================================
// 9. const DOES NOT MAKE OBJECT IMMUTABLE
// ============================================================================

/*
IMPORTANT:

const prevents REASSIGNMENT.

It does NOT prevent changing properties inside an object.
*/

const student = {
  name: "Ravi",
  age: 21,
};

// Allowed:
student.age = 22;

console.log(student.age); // 22

// NOT allowed:

// student = {};
// TypeError

/*
So:

const object = {...}

means:

"The variable cannot point to another object."

It does NOT mean:

"The object can never change."
*/

// ============================================================================
// 10. OBJECT IDENTITY
// ============================================================================

/*
Two objects with the same contents are still different objects.
*/

const obj1 = {
  name: "Ravi",
};

const obj2 = {
  name: "Ravi",
};

console.log(obj1 === obj2); // false

/*
Why?

Because they are two different objects.

obj1 → Object A
obj2 → Object B
*/

// ============================================================================
// 11. SAME OBJECT
// ============================================================================

const obj3 = {
  name: "Ravi",
};

const obj4 = obj3;

console.log(obj3 === obj4); // true

/*
Why?

Because both variables refer to the SAME object.

obj3 ──────┐
           ↓
       SAME OBJECT
           ↑
obj4 ──────┘
*/

// ============================================================================
// 12. typeof
// ============================================================================

/*
The typeof operator tells us the type of a value.
*/

console.log(typeof 10); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof 10n); // "bigint"

// Objects
console.log(typeof {}); // "object"
console.log(typeof []); // "object"

// Function
console.log(typeof greet); // "function"

/*
IMPORTANT JAVASCRIPT QUIRK:

typeof null

returns:

"object"

But null is actually a PRIMITIVE.

*/

console.log(typeof null); // "object"

// ============================================================================
// 13. FINAL MEMORY TRICK
// ============================================================================

/*

                    JAVASCRIPT VALUES
                           │
                ┌──────────┴──────────┐
                ↓                     ↓
           PRIMITIVE                OBJECT
                │                     │
                ↓                     ↓
          Single value        Collection of values
                │                     │
                ↓                     ↓
          Copy the value      Copy reference value
                │                     │
                ↓                     ↓
           Independent          Can share object


===============================================================================

REMEMBER:

Primitive → Single Value → Immutable → Copy Value

Object → Collection → Mutable → Copy Reference Value

===============================================================================

ONE-LINE RULE:

🧠 Primitive = "I get my own value."

🧠 Object = "I get a reference to the object."

===============================================================================
*/
