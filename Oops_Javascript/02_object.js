//* ============================================================
//* JAVASCRIPT OBJECTS
//* ============================================================

//* 1. WHAT IS AN OBJECT?
// ------------------------------------------------------------
// An object is a collection of properties that represents data
// and behavior as a single value.
//
// A property consists of:
//
// key → value
//
// Example:
//
// const person = {
//     name: "Ravi",
//     age: 21
// };
//
// name → key
// "Ravi" → value
//
// age → key
// 21 → value
//
// An object's values can be:
//
// - strings
// - numbers
// - booleans
// - null
// - undefined
// - arrays
// - functions
// - other objects
// - almost any JavaScript value

//* ============================================================
//* 2. OBJECT LITERAL
//* ============================================================
//
// The simplest way to create an object is object literal
// notation using `{}`.

const person = {
  name: "Ravi",
  age: 21,
  isDeveloper: true,
};

console.log(person);

//* Mental model:
//
// person
//   │
//   ├── name → "Ravi"
//   ├── age → 21
//   └── isDeveloper → true

//* ============================================================
//* 3. PROPERTY
//* ============================================================
//
// A property is a named piece of data stored on an object.

const user = {
  name: "Ravi",
  age: 21,
  city: "Nawada",
};

//* Here:
//
// name → property
// age  → property
// city → property

//* ============================================================
//* 4. METHOD
//* ============================================================
//
// A method is a function stored as an object's property.
//
// Example:

const person1 = {
  name: "Ravi",

  greet: function () {
    return "Hello";
  },
};

console.log(person1.greet());

//* Modern shorthand:

const person2 = {
  name: "Ravi",

  greet() {
    return "Hello";
  },
};

console.log(person2.greet());

//* MEMORY TRICK
//
// Property → what an object HAS
//
// Method → what an object DOES

//* ============================================================
//* 5. ACCESSING OBJECT PROPERTIES
//* ============================================================
//
// There are two primary ways:
//
// 1. Dot notation
// 2. Bracket notation

//* DOT NOTATION

console.log(user.name);
console.log(user.age);

//* BRACKET NOTATION

console.log(user["name"]);
console.log(user["age"]);

//* Both can access the same property.

//* ============================================================
//* 6. DOT VS BRACKET NOTATION
//* ============================================================
//
// Dot:
//
// object.property
//
// Bracket:
//
// object["property"]

//* Dot notation is usually simpler:
//
// user.name

//* Bracket notation is useful when the property name is dynamic.

const propertyName = "name";

console.log(user[propertyName]);

// Ravi

//* IMPORTANT
//
// This:
//
// user[propertyName]
//
// means:
//
// user["name"]
//
// because propertyName contains "name".

//* ============================================================
//* 7. WHY BRACKET NOTATION IS IMPORTANT
//* ============================================================

const key = "age";

console.log(user[key]);

// 21

//* This would NOT do the same:
//
// user.key
//
// It looks for a property literally named:
//
// "key"
//
// not the value stored inside the variable key.

//* ============================================================
//* 8. ADDING A PROPERTY
//* ============================================================
//
// Objects are generally mutable.
//
// You can add new properties.

user.country = "India";

console.log(user);

//* Bracket notation:

user["language"] = "JavaScript";

//* ============================================================
//* 9. UPDATING A PROPERTY
//* ============================================================

user.age = 22;

console.log(user.age);

// 22

//* Existing value:
//
// age → 21
//
// New value:
//
// age → 22

//* ============================================================
//* 10. DELETING A PROPERTY
//* ============================================================
//
// Use the `delete` operator.

delete user.language;

console.log(user);

//* `delete` removes the property from the object.
//
// It does not set it to undefined.
//
// The property itself is removed.

//* ============================================================
//* 11. CHECKING WHETHER A PROPERTY EXISTS
//* ============================================================
//
// `in` checks whether a property exists on the object or
// anywhere on its prototype chain.

console.log("name" in user);

// true

//* ============================================================
//* 12. Object.hasOwn()
//* ============================================================
//
// `Object.hasOwn()` checks whether the object itself owns
// the property.
//
// It does not count inherited properties.

console.log(Object.hasOwn(user, "name"));

// true

//* Prefer Object.hasOwn() when you specifically need to know
//* whether the property belongs directly to the object.

//* ============================================================
//* 13. UNDEFINED PROPERTY
//* ============================================================

console.log(user.email);

// undefined

//* This does NOT necessarily mean:
//
// "email exists and contains undefined."
//
// It can mean the property does not exist.
//
// Check:

console.log("email" in user);

// false

//* ============================================================
//* 14. OBJECTS CAN CONTAIN DIFFERENT DATA TYPES
//* ============================================================

const profile = {
  name: "Ravi",

  age: 21,

  isDeveloper: true,

  skills: ["HTML", "CSS", "JavaScript"],

  address: {
    city: "Nawada",
    country: "India",
  },

  greet() {
    return `Hello ${this.name}`;
  },
};

console.log(profile);

//* An object can contain:
//
// primitive
// array
// object
// function

//* ============================================================
//* 15. NESTED OBJECTS
//* ============================================================
//
// An object can contain another object.

const student = {
  name: "Ravi",

  address: {
    city: "Nawada",

    state: "Bihar",
  },
};

console.log(student.address.city);

// Dhanbad

//* Access path:
//
// student
//   ↓
// address
//   ↓
// city

//* ============================================================
//* 16. NESTED ARRAYS
//* ============================================================

const developer = {
  name: "Ravi",

  skills: ["HTML", "CSS", "JavaScript"],
};

console.log(developer.skills[0]);

// HTML

//* ============================================================
//* 17. ARRAY OF OBJECTS
//* ============================================================
//
// This is extremely common in real applications and APIs.

const users = [
  {
    id: 1,
    name: "Ravi",
    role: "developer",
  },

  {
    id: 2,
    name: "Aman",
    role: "designer",
  },
];

console.log(users[0].name);

// Ravi

//* Mental model:
//
// users
//   ↓
// array
//   ↓
// object
//   ↓
// property

//* ============================================================
//* 18. `this` INSIDE OBJECT METHODS
//* ============================================================
//
// `this` allows a method to access the object on which it
// is called.

const person3 = {
  name: "Ravi",
  age: 21,

  introduce() {
    return `I am ${this.name} and I am ${this.age}`;
  },
};

console.log(person3.introduce());

//* When:
//
// person3.introduce()
//
// is called:
//
// this → person3
//
// Therefore:
//
// this.name
// ↓
// person3.name

//* ============================================================
//* 19. IMPORTANT: `this` IS NOT THE OBJECT DEFINITION
//* ============================================================
//
// `this` depends on how a function is called.
//
// Example:

const person4 = {
  name: "Ravi",

  greet() {
    console.log(this.name);
  },
};

person4.greet();

// Ravi

//* Here `this` refers to person4 because the call is:
//
// person4.greet()

//* ============================================================
//* 20. OBJECT SHORTHAND
//* ============================================================
//
// If variable name and property name are the same,
// JavaScript allows shorthand syntax.

const name = "Ravi";
const age = 21;

const user2 = {
  name,
  age,
};

console.log(user2);

// { name: "Ravi", age: 21 }

//* Without shorthand:
//
// const user = {
//     name: name,
//     age: age
// };

//* ============================================================
//* 21. COMPUTED PROPERTY NAMES
//* ============================================================
//
// You can use an expression inside `[]` to create a property
// name dynamically.

const property = "username";

const account = {
  [property]: "Ravi",
};

console.log(account.username);

// Ravi

//* Another example:

const prefix = "user";

const account2 = {
  [`${prefix}Name`]: "Ravi",
};

console.log(account2.userName);

//* ============================================================
//* 22. OBJECT DESTRUCTURING
//* ============================================================
//
// Destructuring extracts properties from an object into
// variables.

const person5 = {
  name: "Ravi",
  age: 21,
};

const { name: personName, age: personAge } = person5;

console.log(personName);
console.log(personAge);

//* If variable names are the same:

const { name, age: currentAge } = person5;

console.log(name);
console.log(currentAge);

//* ============================================================
//* 23. OBJECT DESTRUCTURING WITH DEFAULT VALUES
//* ============================================================

const data = {
  name: "Ravi",
};

const { name: dataName, age: dataAge = 0 } = data;

console.log(dataName);
console.log(dataAge);

// Ravi
// 0

//* ============================================================
//* 24. OBJECT REST
//* ============================================================
//
// Rest syntax collects remaining properties.

const fullUser = {
  name: "Ravi",
  age: 21,
  city: "Nawada",
  role: "Developer",
};

const { name: extractedName, ...otherDetails } = fullUser;

console.log(extractedName);
console.log(otherDetails);

//* extractedName → "Ravi"
//
// otherDetails:
//
// {
//     age: 21,
//     city: "Nawada",
//     role: "Developer"
// }

//* ============================================================
//* 25. OBJECT SPREAD
//* ============================================================
//
// Spread syntax copies enumerable own properties into a new
// object.

const original = {
  name: "Ravi",
  age: 21,
};

const copy = {
  ...original,
};

console.log(copy);

//* Important:
//
// This is a SHALLOW copy.

//* ============================================================
//* 26. SHALLOW COPY
//* ============================================================
//
// A shallow copy copies the first level.
//
// Nested objects are still shared.

const originalUser = {
  name: "Ravi",

  address: {
    city: "Nawada",
  },
};

const copiedUser = {
  ...originalUser,
};

copiedUser.address.city = "Patna";

console.log(originalUser.address.city);

// Ranchi

//* Why?
//
// originalUser.address
//        ↑
//        │
// copiedUser.address
//
// Both references point to the same nested object.

//* ============================================================
//* 27. DEEP COPY WITH structuredClone()
// ============================================================
//
// For cloneable data, `structuredClone()` can create a deep
// copy of many common JavaScript values.

const originalData = {
  name: "Ravi",

  address: {
    city: "Nawada",
  },
};

const deepCopy = structuredClone(originalData);

deepCopy.address.city = "Ranchi";

console.log(originalData.address.city);

// Dhanbad

//* `structuredClone()` has limitations for certain values such
//* as functions and some host-specific objects.

//* ============================================================
//* 28. OBJECT.assign()
// ============================================================
//
// Object.assign() copies enumerable own properties from source
// objects into a target object.
//
// Syntax:
//
// Object.assign(target, source)

const target = {
  name: "Ravi",
};

const source = {
  age: 21,
};

Object.assign(target, source);

console.log(target);

// { name: "Ravi", age: 21 }

//* IMPORTANT
//
// Object.assign() MUTATES the target object.

//* ============================================================
//* 29. OBJECT.assign() VS SPREAD
//* ============================================================

const first = {
  name: "Ravi",
};

const second = {
  age: 21,
};

// Spread creates a new object:

const result1 = {
  ...first,
  ...second,
};

// Object.assign:

const result2 = Object.assign({}, first, second);

console.log(result1);
console.log(result2);

//* Both can create a shallow merged object.

//* ============================================================
//* 30. OBJECT MERGING
//* ============================================================

const basicInfo = {
  name: "Ravi",
  age: 21,
};

const developerInfo = {
  role: "Frontend Developer",
  language: "JavaScript",
};

const mergedUser = {
  ...basicInfo,
  ...developerInfo,
};

console.log(mergedUser);

//* ============================================================
//* 31. PROPERTY OVERRIDING
//* ============================================================
//
// If multiple objects contain the same property,
// later values overwrite earlier values.

const firstUser = {
  name: "Ravi",
  age: 21,
};

const updatedUser = {
  ...firstUser,
  age: 22,
};

console.log(updatedUser.age);

// 22

//* Think:
//
// left → original
// right → override

//* ============================================================
//* 32. OBJECT.keys()
// ============================================================
//
// Object.keys() returns an array containing the object's
// enumerable own property keys.

const product = {
  name: "Keyboard",
  price: 1000,
  stock: 10,
};

console.log(Object.keys(product));

// ["name", "price", "stock"]

//* ============================================================
//* 33. OBJECT.values()
// ============================================================
//
// Object.values() returns an array containing the object's
// enumerable own property values.

console.log(Object.values(product));

// ["Keyboard", 1000, 10]

//* ============================================================
//* 34. OBJECT.entries()
// ============================================================
//
// Object.entries() returns an array containing
// [key, value] pairs.

console.log(Object.entries(product));

// [
//     ["name", "Keyboard"],
//     ["price", 1000],
//     ["stock", 10]
// ]

//* ============================================================
//* 35. LOOPING THROUGH AN OBJECT
//* ============================================================

for (const key in product) {
  console.log(key, product[key]);
}

//* `for...in` iterates enumerable property keys.
//
// When you specifically want an object's own keys,
// Object.keys/Object.entries plus iteration can be clearer.

//* ============================================================
//* 36. OBJECT.entries() WITH for...of
//* ============================================================

for (const [key, value] of Object.entries(product)) {
  console.log(key, value);
}

//* This is often convenient when you need both:
//
// key
// +
// value

//* ============================================================
//* 37. OPTIONAL CHAINING
//* ============================================================
//
// Optional chaining `?.` safely accesses a property when an
// intermediate value may be null or undefined.

const user3 = {
  profile: {
    address: {
      city: "Nawada",
    },
  },
};

console.log(user3.profile?.address?.city);

// Dhanbad

//* If profile or address were null/undefined,
//* the expression would return undefined instead of throwing
//* for that access chain.

//* ============================================================
//* 38. NULLISH COALESCING
//* ============================================================
//
// `??` provides a fallback only when the left side is
// null or undefined.

const username = null;

const displayName = username ?? "Guest";

console.log(displayName);

// Guest

//* Compare with ||:
//
// 0 || 100 → 100
//
// 0 ?? 100 → 0

//* ============================================================
//* 39. OBJECT PROPERTY EXISTENCE
//* ============================================================

const settings = {
  theme: "dark",
};

console.log("theme" in settings);
// true

console.log(Object.hasOwn(settings, "theme"));
// true

console.log("toString" in settings);
// true

console.log(Object.hasOwn(settings, "toString"));
// false

//* Why?
//
// toString is normally inherited from Object.prototype.
//
// It is not an own property of settings.

//* ============================================================
//* 40. OBJECT.PROTOTYPE
//* ============================================================
//
// Most ordinary objects inherit properties and methods through
// a prototype.
//
// Example:

const obj = {};

console.log(Object.getPrototypeOf(obj) === Object.prototype);

// true

//* Conceptually:
//
// obj
//  ↓
// Object.prototype
//  ↓
// null

//* ============================================================
//* 41. INHERITED METHODS
//* ============================================================

const simpleObject = {};

console.log(simpleObject.toString());

// [object Object]

//* We did not define toString ourselves.
//
// It is inherited through Object.prototype.

//* ============================================================
//* 42. OWN PROPERTY VS INHERITED PROPERTY
//* ============================================================

const customObject = {
  name: "Ravi",
};

console.log(Object.hasOwn(customObject, "name"));

// true

console.log(Object.hasOwn(customObject, "toString"));

// false

//* ============================================================
//* 43. OBJECT.CREATE()
// ============================================================
//
// Object.create() creates an object with a specified prototype.

const animalMethods = {
  speak() {
    return "Animal sound";
  },
};

const dogObject = Object.create(animalMethods);

console.log(dogObject.speak());

// Animal sound

//* Prototype relationship:
//
// dogObject
//     ↓
// animalMethods

//* ============================================================
//* 44. OBJECT.FREEZE()
// ============================================================
//
// Object.freeze() prevents changes to an object's own
// properties at the top level.
//
// It prevents:
//
// - adding properties
// - deleting properties
// - changing existing data properties
// at the top level

const frozenUser = {
  name: "Ravi",
};

Object.freeze(frozenUser);

// In strict mode, invalid modifications throw;
// otherwise they may fail silently.
//
// frozenUser.name = "Aman";
// frozenUser.age = 21;

//* IMPORTANT
//
// Object.freeze() is SHALLOW.

//* ============================================================
//* 45. OBJECT.SEAL()
// ============================================================
//
// Object.seal() prevents:
//
// - adding properties
// - deleting properties
//
// Existing writable properties can still be changed.

const sealedUser = {
  name: "Ravi",
};

Object.seal(sealedUser);

sealedUser.name = "Aman";

console.log(sealedUser.name);

// Aman

//* But:
//
// sealedUser.age = 21;
//
// cannot add a new property successfully.

//* ============================================================
//* 46. OBJECT.PREVENTEXTENSIONS()
// ============================================================
//
// Prevents adding new properties.
//
// Existing properties can still generally be changed or
// deleted according to their descriptors.

const limitedObject = {
  name: "Ravi",
};

Object.preventExtensions(limitedObject);

//* ============================================================
//* 47. PROPERTY DESCRIPTORS
//* ============================================================
//
// Every object property has a descriptor.
//
// Important descriptor attributes:
//
// value
// writable
// enumerable
// configurable

//* Example:

const descriptorObject = {
  name: "Ravi",
};

console.log(Object.getOwnPropertyDescriptor(descriptorObject, "name"));

//* Typical result includes:
//
// value: "Ravi"
// writable: true
// enumerable: true
// configurable: true

//* ============================================================
//* 48. DEFINING A PROPERTY
//* ============================================================

const customPropertyObject = {};

Object.defineProperty(customPropertyObject, "name", {
  value: "Ravi",
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(customPropertyObject.name);

//* writable: false
//
// Means the property cannot normally be reassigned.

//* ============================================================
//* 49. OBJECT.GETOWNPROPERTYDESCRIPTORS()
// ============================================================
//
// Gets descriptors for all own properties.

console.log(Object.getOwnPropertyDescriptors(customPropertyObject));

//* ============================================================
//* 50. CONSTRUCTOR FUNCTION
//* ============================================================
//
// Before class syntax became common, constructor functions were
// a traditional way to create related objects.
//
// A constructor function is an ordinary function intended to
// be called with `new`.
//
// Conventionally, constructor function names begin with
// a capital letter.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const personA = new Person("Ravi", 21);
const personB = new Person("Aman", 22);

console.log(personA);
console.log(personB);

//* ============================================================
//* 51. WHAT DOES `new` DO?
// ============================================================
//
// When used with a constructor function, `new` conceptually:
//
// 1. Creates a new object.
// 2. Connects its prototype to the constructor's prototype.
// 3. Calls the constructor with `this` set to the new object.
// 4. Returns the new object, subject to constructor return rules.

//* Example:
//
// new Person("Ravi", 21)
//
//        ↓
//
// new object
//        ↓
// Person.prototype connected
//        ↓
// this → new object
//        ↓
// constructor runs
//        ↓
// this.name = "Ravi"
// this.age = 21
//        ↓
// object returned

//* ============================================================
//* 52. METHODS IN CONSTRUCTOR VS PROTOTYPE
//* ============================================================
//
// This works:

function PersonWithMethod(name) {
  this.name = name;

  this.greet = function () {
    return `Hello ${this.name}`;
  };
}

//* But every new instance gets its own function object.
//
// For many instances, this can be less memory-efficient.

//* Better shared method:

function PersonOptimized(name) {
  this.name = name;
}

PersonOptimized.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const p1 = new PersonOptimized("Ravi");
const p2 = new PersonOptimized("Aman");

console.log(p1.greet());
console.log(p2.greet());

//* Both instances use the shared prototype method.

//* ============================================================
//* 53. CHECKING PROTOTYPE METHOD
//* ============================================================

console.log(p1.greet === p2.greet);

// true

//* Both objects find the same function through the prototype.

//* ============================================================
//* 54. CONSTRUCTOR FUNCTION VS CLASS
//* ============================================================
//
// Constructor function:
//
// function Person(name) {
//     this.name = name;
// }
//
// Person.prototype.greet = function () {};
//
//
//
// Class:
//
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     greet() {}
// }
//
//
//
// Both participate in JavaScript's prototype-based object
// system.
//
// `class` provides clearer modern syntax.

//* ============================================================
//* 55. OBJECT CLONING — COMMON MISTAKE
//* ============================================================
//
// This does NOT copy the object:

const originalObject = {
  name: "Ravi",
};

const sameReference = originalObject;

sameReference.name = "Aman";

console.log(originalObject.name);

// Aman

//* Why?
//
// Both variables refer to the SAME object.
//
// originalObject
//       ↓
//    [object]
//       ↑
// sameReference

//* ============================================================
//* 56. REFERENCE VS COPY
//* ============================================================
//
// Primitive:
//
// let a = 10;
// let b = a;
//
// b = 20;
//
// a remains 10.
//
//
//
// Object:
//
// const a = { value: 10 };
// const b = a;
//
// b.value = 20;
//
// a.value also becomes 20.
//
// Because both variables reference the same object.

//* ============================================================
//* 57. SHALLOW COPY WITH SPREAD
//* ============================================================

const objectA = {
  name: "Ravi",
  age: 21,
};

const objectB = {
  ...objectA,
};

objectB.name = "Aman";

console.log(objectA.name);

// Ravi

//* objectB is a different top-level object.

//* ============================================================
//* 58. OBJECT COMPARISON
//* ============================================================
//
// Objects are compared by reference.

const obj1 = {
  name: "Ravi",
};

const obj2 = {
  name: "Ravi",
};

console.log(obj1 === obj2);

// false

//* They contain the same data but are different objects.

//* Same reference:

const obj3 = obj1;

console.log(obj1 === obj3);

// true

//* ============================================================
//* 59. OBJECT IS EMPTY?
// ============================================================
//
// `{}` is truthy.
//
// Therefore:
//
// if ({}) {
//     // runs
// }
//
// To check whether an object has no own enumerable properties:

const emptyObject = {};

console.log(Object.keys(emptyObject).length === 0);

// true

//* ============================================================
//* 60. OBJECT TO JSON
//* ============================================================
//
// Objects are commonly converted to JSON when sending data
// through APIs or storing structured data.

const apiUser = {
  name: "Ravi",
  age: 21,
};

const json = JSON.stringify(apiUser);

console.log(json);

// {"name":"Ravi","age":21}

//* JSON string → text representation
//
// JavaScript object → actual object

//* ============================================================
//* 61. JSON BACK TO OBJECT
//* ============================================================

const jsonData = '{"name":"Ravi","age":21}';

const parsedUser = JSON.parse(jsonData);

console.log(parsedUser.name);

// Ravi

//* ============================================================
//* 62. OBJECTS AND FUNCTIONS
//* ============================================================
//
// Because functions are values, objects can store functions.

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator.add(10, 5));
console.log(calculator.multiply(10, 5));

//* This creates an object that groups related behavior.

//* ============================================================
//* 63. OBJECTS AS FUNCTION ARGUMENTS
//* ============================================================
//
// Instead of passing many separate arguments:

function createUser(name, age, city, role) {
  // ...
}

//* You can pass one object:

function createUserFromObject(userData) {
  return {
    name: userData.name,
    age: userData.age,
    city: userData.city,
    role: userData.role,
  };
}

const newUser = createUserFromObject({
  name: "Ravi",
  age: 21,
  city: "Nawada",
  role: "Developer",
});

console.log(newUser);

//* This pattern is extremely common in JavaScript,
//* React and Node.js.

//* ============================================================
//* 64. OBJECT PARAMETER DESTRUCTURING
//* ============================================================

function introduceUser({ name, age, role }) {
  console.log(`${name} is ${age} years old and is a ${role}.`);
}

introduceUser({
  name: "Ravi",
  age: 21,
  role: "Developer",
});

//* This makes function parameters easier to understand
//* when many related values are needed.

//* ============================================================
//* 65. OPTIONAL PROPERTY ACCESS IN REAL APIS
//* ============================================================

const response = {
  user: {
    profile: {
      name: "Ravi",
    },
  },
};

console.log(response.user?.profile?.name);

// Ravi

//* If profile is missing:
//
// undefined
//
// instead of an immediate TypeError from that optional chain.

//* ============================================================
//* 66. OBJECT IMMUTABILITY PATTERN
//* ============================================================
//
// Instead of changing an object directly:
//
// user.name = "Aman";
//
//
// You can create a new object:

const oldUser = {
  name: "Ravi",
  age: 21,
};

const newUserData = {
  ...oldUser,
  name: "Aman",
};

console.log(oldUser);
console.log(newUserData);

//* This pattern is heavily used in state management and
//* React applications.

//* ============================================================
//* 67. UPDATING NESTED OBJECTS IMMUTABLY
//* ============================================================

const oldProfile = {
  name: "Ravi",

  address: {
    city: "Nawada",
    state: "Bihar",
  },
};

const newProfile = {
  ...oldProfile,

  address: {
    ...oldProfile.address,
    city: "Patna",
  },
};

console.log(oldProfile.address.city);

// Dhanbad

console.log(newProfile.address.city);

// Ranchi

//* Important:
//
// Spread is shallow.
//
// Therefore each nested level that you want to replace must
//* be copied as needed.

//* ============================================================
//* 68. OBJECT TRANSFORMATION
//* ============================================================

const usersList = [
  {
    name: "Ravi",
    age: 21,
  },

  {
    name: "Aman",
    age: 25,
  },
];

const names = usersList.map((user) => user.name);

console.log(names);

// ["Ravi", "Aman"]

//* Object knowledge + array methods is essential for API data.

//* ============================================================
//* 69. FILTERING OBJECTS
//* ============================================================

const adults = usersList.filter((user) => user.age >= 18);

console.log(adults);

//* ============================================================
//* 70. REDUCING OBJECT DATA
//* ============================================================

const totalAge = usersList.reduce((total, user) => total + user.age, 0);

console.log(totalAge);

// 46

//* ============================================================
//* 71. GROUPING OBJECT DATA
//* ============================================================

const people = [
  {
    name: "Ravi",
    role: "developer",
  },

  {
    name: "Aman",
    role: "designer",
  },

  {
    name: "Raj",
    role: "developer",
  },
];

const grouped = Object.groupBy(people, (person) => person.role);

console.log(grouped.developer);
console.log(grouped.designer);

//* Object.groupBy() groups iterable items into an object
//* using the callback's returned key.

//* ============================================================
//* 72. OBJECT PROPERTY ORDER
//* ============================================================
//
// Modern JavaScript specifies predictable enumeration ordering,
// but it is better not to use ordinary object property ordering
// as a substitute for a dedicated ordered data structure.
//
// For general key-value data:
//
// object → good
//
// For ordered collections:
//
// array → usually clearer

//* ============================================================
//* 73. OBJECT VS ARRAY
//* ============================================================
//
// OBJECT:
//
// Designed around named properties.
//
// {
//     name: "Ravi",
//     age: 21
// }
//
//
//
// ARRAY:
//
// Designed around ordered elements.
//
// [
//     "HTML",
//     "CSS",
//     "JavaScript"
// ]
//
//
//
// Object → named data
//
// Array → ordered collection

//* ============================================================
//* 74. OBJECT VS MAP
//* ============================================================
//
// Object:
//
// - common data records
// - JSON-like structures
// - fixed/known property names
//
// Map:
//
// - dynamic key-value collections
// - keys can be objects/functions/primitives
// - useful collection-specific APIs
//
// Example:

const map = new Map();

map.set("name", "Ravi");

console.log(map.get("name"));

//* Don't automatically replace every object with Map.
//* They serve different purposes.

//* ============================================================
//* 75. REAL-WORLD API OBJECT
//* ============================================================

const apiResponse = {
  success: true,

  data: {
    user: {
      id: 101,
      name: "Ravi",
      email: "ravi@example.com",

      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  },

  message: "User fetched successfully",
};

console.log(apiResponse.data.user.name);

//* This kind of nested object structure is common in APIs.

//* ============================================================
//* 76. OBJECT PROBLEM-SOLVING FORMULA
//* ============================================================
//
// When working with an object, ask:
//
// 1. What properties does it have?
// 2. How do I access the property?
// 3. Do I need dot or bracket notation?
// 4. Do I need to add/update/delete?
// 5. Is the property nested?
// 6. Is the property own or inherited?
// 7. Do I need a shallow or deep copy?
// 8. Do I need Object.keys/values/entries?
// 9. Do I need destructuring?
// 10. Do I need to preserve immutability?

//* ============================================================
//* 77. COMMON MISTAKES
//* ============================================================

//* Mistake 1:
//
// const user = {
//     name: "Ravi"
// };
//
// console.log(user["username"]);
//
// `username` does not exist → undefined.
//
// Always check the actual property name.

//* ============================================================

//* Mistake 2:
//
// const key = "name";
//
// user.key
//
// This searches for property "key".
//
// Correct:
//
// user[key]

//* ============================================================

//* Mistake 3:
//
// const a = {};
// const b = a;
//
// b.name = "Ravi";
//
// a.name also changes.
//
// Why?
//
// Both reference the same object.

//* ============================================================

//* Mistake 4:
//
// const copy = {
//     ...user
// };
//
// Assuming nested objects are also independently copied.
//
// They are NOT.
//
// Spread creates a shallow copy.

//* ============================================================

//* Mistake 5:
//
// delete user;
//
// ❌ `delete` removes properties, not variables.
//
// Correct:
//
// delete user.name;

//* ============================================================

//* Mistake 6:
//
// Assuming `Object.freeze()` deeply freezes nested objects.
//
// It does not.
//
// Object.freeze() is shallow.

//* ============================================================

//* Mistake 7:
//
// Putting a method inside every constructor instance without
// considering that each instance gets its own function.
//
// For shared behavior, prototype methods/class methods are
// generally preferable.

//* ============================================================
//* 78. OBJECT MENTAL MODEL
//* ============================================================
//
//                  OBJECT
//                     │
//          ┌──────────┼──────────┐
//          ↓          ↓          ↓
//      PROPERTY    PROPERTY    METHOD
//          │          │          │
//          ↓          ↓          ↓
//        value      value     function
//
// Example:
//
// user
//  │
//  ├── name → "Ravi"
//  ├── age → 21
//  ├── skills → [ ... ]
//  └── greet() → function

//* ============================================================
//* 79. OBJECT + PROTOTYPE MENTAL MODEL
//* ============================================================
//
//             user
//              │
//              ↓
//       own properties
//              │
//              ↓
//       User.prototype
//              │
//              ↓
//       Object.prototype
//              │
//              ↓
//             null
//
// If JavaScript cannot find a property directly on the object,
// it can continue searching through the prototype chain.

//* ============================================================
//* 80. GOLDEN RULES
//* ============================================================
//
// 1. Object = collection of key/value properties.
//
// 2. Property = data.
//
// 3. Method = function associated with an object.
//
// 4. Dot notation = fixed property name.
//
// 5. Bracket notation = dynamic/special property name.
//
// 6. Objects are reference values.
//
// 7. `const` prevents reassignment of the object variable,
//    but does not make the object's properties immutable.
//
// 8. Spread creates a shallow copy.
//
// 9. Object.assign() mutates its target.
//
// 10. Object.keys() → keys.
//
// 11. Object.values() → values.
//
// 12. Object.entries() → [key, value] pairs.
//
// 13. Object.hasOwn() → own property check.
//
// 14. `in` → own + inherited property check.
//
// 15. Methods can use `this`.
//
// 16. Classes and constructor functions use the prototype
//     system for shared instance behavior.
//
// 17. `Object.freeze()` is shallow.
//
// 18. Objects are compared by reference, not by structure.
//
//
//* FINAL MEMORY TRICK:
//
// OBJECT
// = DATA + BEHAVIOR
//
// PROPERTY
// = DATA
//
// METHOD
// = BEHAVIOR
//
// PROTOTYPE
// = SHARED/INHERITED BEHAVIOR
//
// REFERENCE
// = WHERE THE OBJECT VALUE IS ACCESSED FROM
//
// SPREAD
// = SHALLOW COPY
//
// DESTRUCTURING
// = EXTRACT
//
// Object.keys()
// = KEYS
//
// Object.values()
// = VALUES
//
// Object.entries()
// = BOTH
//
// Object.hasOwn()
// = DIRECT PROPERTY?
