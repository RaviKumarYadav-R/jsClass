//* ============================================================
//* OBJECTS IN JAVASCRIPT
//* ============================================================

// An object is a collection of properties.
//
// A property has:
//
// key → value
//
// Example:

const person = {
  name: "Ravi",
  age: 21,
  isStudent: true,
};

// name      → key
// "Ravi"    → value
//
// age       → key
// 21        → value
//
// isStudent → key
// true      → value

//* ============================================================
//* 1. CREATING AN OBJECT
//* ============================================================

const user = {
  name: "Ravi",
  age: 21,
  city: "Nawada",
};

console.log(user);

//* Values can be ANY JavaScript data type.

const profile = {
  name: "Ravi", // string
  age: 21, // number
  isActive: true, // boolean
  skills: ["HTML", "CSS", "JS"], // array
  address: {
    // object
    city: "Nawada",
  },
  greet: function () {
    // function
    console.log("Hello!");
  },
};

//* Mental Model:
//
// Object
//   ↓
// ┌───────────────┐
// │ key → value   │
// │ key → value   │
// │ key → value   │
// └───────────────┘

//* ============================================================
//* 2. OBJECT PROPERTY
//* ============================================================

// An object's data is stored in properties.

const student = {
  name: "Ravi",
  age: 21,
};

// name → property
// age  → property

//* Property names are normally written as identifiers,
// but they are property keys represented as strings,
// or they can be Symbols.

//* ============================================================
//* 3. DOT NOTATION
//* ============================================================

// Use dot notation when you know the property name.

const person2 = {
  name: "Ravi",
  age: 21,
};

console.log(person2.name);
// Ravi

console.log(person2.age);
// 21

//* Syntax:
//
// object.property

//* ============================================================
//* 4. BRACKET NOTATION
//* ============================================================

// Bracket notation is useful when the property name is
// stored in a variable or isn't a normal identifier.

console.log(person2["name"]);
// Ravi

//* Syntax:
//
// object["property"]

//* ============================================================
//* 5. DYNAMIC PROPERTY ACCESS
//* ============================================================

const key = "age";

console.log(person2[key]);
// 21

//* IMPORTANT:
//
// person2[key]
// → uses the VALUE of key
//
// person2.key
// → literally looks for a property named "key"

const key2 = "name";

console.log(person2[key2]);
// Ravi

//* ============================================================
//* 6. WHEN TO USE DOT vs BRACKET
//* ============================================================

// Dot notation:

console.log(person2.name);

// Bracket notation:

const property = "name";

console.log(person2[property]);

//* Memory trick:
//
// Known property → dot
//
// Dynamic property → bracket

//* ============================================================
//* 7. ADDING A PROPERTY
//* ============================================================

// Objects are mutable.
//
// We can add new properties.

const car = {
  brand: "Toyota",
  year: 2020,
};

car.color = "Black";

console.log(car);

// {
//   brand: "Toyota",
//   year: 2020,
//   color: "Black"
// }

//* Bracket notation also works:

car["model"] = "Fortuner";

console.log(car);

//* ============================================================
//* 8. MODIFYING A PROPERTY
//* ============================================================

const person3 = {
  name: "Ravi",
  age: 21,
};

person3.age = 22;

console.log(person3.age);

// 22

//* Existing value was replaced.

//* ============================================================
//* 9. DELETING A PROPERTY
//* ============================================================

// Use the delete operator.

const user2 = {
  name: "Ravi",
  age: 21,
  city: "Nawada",
};

delete user2.city;

console.log(user2);

// {
//   name: "Ravi",
//   age: 21
// }

//* Syntax:
//
// delete object.property

//* ============================================================
//* 10. CHECKING IF A PROPERTY EXISTS
//* ============================================================

// Use the "in" operator.

const user3 = {
  name: "Ravi",
  age: 21,
};

console.log("name" in user3);
// true

console.log("email" in user3);
// false

//* Another common method:

console.log(Object.hasOwn(user3, "name"));
// true

console.log(Object.hasOwn(user3, "email"));
// false

//* "in" checks the object and its prototype chain.
//
// Object.hasOwn()
// checks whether the property belongs directly to the object.

//* ============================================================
//* 11. PROPERTY WITH SPECIAL NAME
//* ============================================================

// Bracket notation allows property names that aren't valid
// identifier-style names.

const data = {
  "first-name": "Ravi",
  "user age": 21,
};

console.log(data["first-name"]);
console.log(data["user age"]);

// Dot notation would not work for these names.

//* ============================================================
//* 12. NESTED OBJECTS
//* ============================================================

// Objects can contain other objects.

const user4 = {
  name: "Ravi",

  address: {
    city: "Nawada",
    pincode: 110001,
  },
};

console.log(user4.address.city);
// Delhi

console.log(user4.address.pincode);
// 110001

//* Mental Model:
//
// user
//   ↓
// address
//   ↓
// city

//* ============================================================
//* 13. DEEPLY NESTED OBJECT
//* ============================================================

const company = {
  name: "Tech Company",

  office: {
    location: {
      city: "Nawada",
      country: "India",
    },
  },
};

console.log(company.office.location.city);

// Delhi

//* ============================================================
//* 14. OPTIONAL CHAINING
//* ============================================================

// If a nested property might not exist,
// optional chaining prevents an error.

const user5 = {
  name: "Ravi",
};

console.log(user5.address?.city);

// undefined

//* Without ?.:
//
// user5.address.city
//
// would throw an error because address is undefined.

//* ============================================================
//* 15. OBJECT METHODS
//* ============================================================

// A function stored inside an object is commonly called a method.

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3));
// 8

console.log(calculator.subtract(10, 4));
// 6

//* Method shorthand:
//
// add(a, b) {
//   return a + b;
// }

//* ============================================================
//* 16. OBJECT METHOD WITH this
//* ============================================================

// "this" can refer to the object whose method is being called.

const person4 = {
  name: "Ravi",

  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

person4.greet();

// Hello, I am Ravi

//* Mental model:
//
// person4.greet()
//       ↓
// this → person4
//
// this.name → "Ravi"

//* Important:
// Arrow functions do NOT create their own `this`.
// So normal object methods are generally written using
// method syntax when they need dynamic `this`.

//* ============================================================
//* 17. LOOPING THROUGH AN OBJECT
//* ============================================================

// for...in loops through enumerable property keys.

const car2 = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2023,
};

for (const key in car2) {
  console.log(key);
}

// brand
// model
// year

//* To get the value:

for (const key in car2) {
  console.log(key, car2[key]);
}

// brand Toyota
// model Fortuner
// year 2023

//* IMPORTANT:
//
// key   → property name
// value → car[key]

//* ============================================================
//* 18. Object.keys()
//* ============================================================

// Object.keys() returns an array of property keys.

const product = {
  name: "Laptop",
  price: 50000,
  brand: "HP",
};

console.log(Object.keys(product));

// ["name", "price", "brand"]

//* ============================================================
//* 19. Object.values()
//* ============================================================

// Object.values() returns an array of property values.

console.log(Object.values(product));

// ["Laptop", 50000, "HP"]

//* ============================================================
//* 20. Object.entries()
//* ============================================================

// Object.entries() returns an array containing
// [key, value] pairs.

console.log(Object.entries(product));

// [
//   ["name", "Laptop"],
//   ["price", 50000],
//   ["brand", "HP"]
// ]

//* ============================================================
//* 21. LOOP WITH Object.entries()
//* ============================================================

for (const [key, value] of Object.entries(product)) {
  console.log(`${key}: ${value}`);
}

// name: Laptop
// price: 50000
// brand: HP

//* Mental Model:
//
// Object
//   ↓
// Object.entries()
//   ↓
// [
//   [key, value],
//   [key, value]
// ]
//   ↓
// for...of + destructuring

//* ============================================================
//* 22. OBJECT.assign()
//* ============================================================

// Object.assign() copies properties from source objects
// into a target object.

const target = {
  name: "Ravi",
};

const source = {
  age: 21,
  city: "Nawada",
};

Object.assign(target, source);

console.log(target);

// {
//   name: "Ravi",
//   age: 21,
//   city: "Nawada"
// }

//* IMPORTANT:
// Object.assign() modifies the target object.

//* ============================================================
//* 23. SPREAD OPERATOR WITH OBJECTS
//* ============================================================

// A common modern way to create a shallow copy:

const original = {
  name: "Ravi",
  age: 21,
};

const copy = {
  ...original,
};

console.log(copy);

// { name: "Ravi", age: 21 }

//* ============================================================
//* 24. ADD / OVERRIDE USING SPREAD
//* ============================================================

const user6 = {
  name: "Ravi",
  age: 21,
};

const updatedUser = {
  ...user6,
  age: 22,
  city: "Nawada",
};

console.log(updatedUser);

// {
//   name: "Ravi",
//   age: 22,
//   city: "Nawada"
// }

//* Later properties override earlier properties.

//* ============================================================
//* 25. OBJECT DESTRUCTURING
//* ============================================================

// Destructuring extracts properties into variables.

const person5 = {
  name: "Ravi",
  age: 21,
};

const { name, age } = person5;

console.log(name);
// Ravi

console.log(age);
// 21

//* Instead of:
//
// const name = person5.name;
// const age = person5.age;

//* ============================================================
//* 26. RENAMING DURING DESTRUCTURING
//* ============================================================

const user7 = {
  name: "Ravi",
  age: 21,
};

const { name: userName, age: userAge } = user7;

console.log(userName);
// Ravi

console.log(userAge);
// 21

//* ============================================================
//* 27. DEFAULT VALUES IN DESTRUCTURING
//* ============================================================

const user8 = {
  name: "Ravi",
};

const { name: userName2, city = "Nawada" } = user8;

console.log(userName2);
// Ravi

console.log(city);
// Delhi

//* ============================================================
//* 28. OBJECT PROPERTY SHORTHAND
//* ============================================================

const userName3 = "Ravi";
const userAge2 = 21;

// Instead of:
// {
//   userName: userName,
//   userAge: userAge
// }

const user9 = {
  userName3,
  userAge,
};

console.log(user9);

// {
//   userName3: "Ravi",
//   userAge: 21
// }

//* ============================================================
//* 29. COMPUTED PROPERTY NAMES
//* ============================================================

// We can create a property using a variable.

const propertyName = "email";

const user10 = {
  name: "Ravi",
  [propertyName]: "ravi@example.com",
};

console.log(user10);

// {
//   name: "Ravi",
//   email: "ravi@example.com"
// }

//* [] inside an object means:
// "Use the value of this expression as the property key."

//* ============================================================
//* 30. OBJECTS WITH ARRAYS
//* ============================================================

const student2 = {
  name: "Ravi",
  skills: ["HTML", "CSS", "JavaScript"],
};

console.log(student2.skills[0]);
// HTML

console.log(student2.skills[2]);
// JavaScript

//* ============================================================
//* 31. ARRAY OF OBJECTS
//* ============================================================

// Extremely common in real applications.

const users = [
  { name: "Ravi", age: 21 },
  { name: "Aman", age: 22 },
  { name: "Rahul", age: 20 },
];

console.log(users[0].name);
// Ravi

console.log(users[1].age);
// 22

//* Mental model:
//
// users
//   ↓
// [object, object, object]
//      ↓
//    [0]
//      ↓
//    name

//* ============================================================
//* 32. MAP + OBJECTS
//* ============================================================

// Get all user names.

const names = users.map((user) => {
  return user.name;
});

console.log(names);

// ["Ravi", "Aman", "Rahul"]

//* ============================================================
//* 33. FILTER + OBJECTS
//* ============================================================

// Get users older than 20.

const olderUsers = users.filter((user) => {
  return user.age > 20;
});

console.log(olderUsers);

// [
//   { name: "Ravi", age: 21 },
//   { name: "Aman", age: 22 }
// ]

//* ============================================================
//* 34. REDUCE + OBJECTS
//* ============================================================

const products2 = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

const total = products2.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(total);

// 53000

//* ============================================================
//* 35. OBJECT.freeze()
//* ============================================================

// Object.freeze() prevents changes to an object itself.
//
// You cannot:
// - add properties
// - delete properties
// - change existing properties

const settings = {
  theme: "dark",
  language: "English",
};

Object.freeze(settings);

// In strict mode, attempted changes throw errors.
// In non-strict mode, they are ignored.

//* IMPORTANT:
// Object.freeze() is SHALLOW.
//
// Nested objects are not automatically frozen.

//* ============================================================
//* 36. OBJECT vs ARRAY
//* ============================================================

// Object:
//
// {
//   name: "Ravi",
//   age: 21
// }
//
// Best for:
// describing ONE entity / structured record

// Array:
//
// ["Ravi", "Aman", "Rahul"]
//
// Best for:
// storing a LIST / sequence

//* Real-world example:

const user11 = {
  name: "Ravi",
  age: 21,
  skills: ["HTML", "CSS", "JavaScript"],
};

// Object → user information
// Array  → list of skills

//* ============================================================
//* 37. OBJECTS ARE REFERENCE VALUES
//* ============================================================

// Two variables can refer to the same object.

const personA = {
  name: "Ravi",
};

const personB = personA;

personB.name = "Aman";

console.log(personA.name);

// Aman

//* Why?
//
// personA and personB refer to the same object.
//
// Changing it through one variable is visible through the other.

//* ============================================================
//* 38. COPYING AN OBJECT
//* ============================================================

// Spread creates a SHALLOW copy.

const originalUser = {
  name: "Ravi",
  age: 21,
};

const copiedUser = {
  ...originalUser,
};

copiedUser.age = 22;

console.log(originalUser.age);
// 21

console.log(copiedUser.age);
// 22

//* These are now separate top-level objects.

//* ============================================================
//* 39. SHALLOW COPY WARNING
//* ============================================================

const originalData = {
  name: "Ravi",

  address: {
    city: "Nawada",
  },
};

const copiedData = {
  ...originalData,
};

copiedData.address.city = "Mumbai";

console.log(originalData.address.city);

// Mumbai

//* Why?
//
// The outer object was copied,
// but the nested address object is still shared.
//
// Spread = shallow copy

//* ============================================================
//* 40. OBJECT PROPERTY ORDER
//* ============================================================

// JavaScript does define property enumeration order,
// but objects should generally be used for named properties,
// not as a replacement for arrays when sequence is the main concern.

const data2 = {
  first: 1,
  second: 2,
  third: 3,
};

console.log(Object.keys(data2));

// ["first", "second", "third"]

//* If you need an ordered list:
// use an Array.

//* ============================================================
//* 41. PRACTICAL USER OBJECT
//* ============================================================

const currentUser = {
  id: 101,
  name: "Ravi",
  email: "ravi@example.com",
  age: 21,
  isLoggedIn: true,

  skills: ["HTML", "CSS", "JavaScript", "React"],

  address: {
    city: "Bihar",
    country: "India",
  },

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

console.log(currentUser.name);
console.log(currentUser.skills[0]);
console.log(currentUser.address.city);

currentUser.greet();

//* ============================================================
//* 42. COMMON OBJECT PATTERN IN WEB DEVELOPMENT
//* ============================================================

// API data often looks like this:

const apiResponse = {
  success: true,

  message: "Users fetched successfully",

  data: [
    {
      id: 1,
      name: "Ravi",
    },
    {
      id: 2,
      name: "Aman",
    },
  ],
};

console.log(apiResponse.data[0].name);

// Ravi

//* This structure is extremely common when working with APIs.

//* ============================================================
//* 43. OBJECT PROBLEM-SOLVING FORMULA
//* ============================================================

// When working with an object, ask:
//
// 1. What is the object?
// 2. What are its properties?
// 3. Do I know the property name?
// 4. If yes → dot notation
// 5. If dynamic → bracket notation
// 6. Do I need all keys?
//    → Object.keys()
// 7. Do I need all values?
//    → Object.values()
// 8. Do I need key + value?
//    → Object.entries()
// 9. Do I need to loop?
//    → for...in / Object.entries()
// 10. Do I need a copy?
//     → { ...object }

//* ============================================================
//* FINAL MEMORY MAP
//* ============================================================

// Object
// → key-value data
//
// object.name
// → known property
//
// object[key]
// → dynamic property
//
// object.property = value
// → add / update
//
// delete object.property
// → remove
//
// Object.keys()
// → keys
//
// Object.values()
// → values
//
// Object.entries()
// → key + value pairs
//
// { ...object }
// → shallow copy
//
// { ...object, key: newValue }
// → copy + update
//
// const { name } = object
// → destructuring
//
// for...in
// → property keys

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// OBJECT = "DESCRIBE SOMETHING"
//
// Example:
//
// User
// {
//   name,
//   age,
//   email,
//   skills
// }
//
// Product
// {
//   name,
//   price,
//   category
// }
//
// Car
// {
//   brand,
//   model,
//   year
// }
//
// Think:
//
// OBJECT → ONE THING
// ARRAY  → LIST OF THINGS
//
// And very commonly:
//
// ARRAY OF OBJECTS
//
// [
//   { ... },
//   { ... },
//   { ... }
// ]
//
// This structure appears everywhere in JavaScript,
// APIs, React applications, databases, and JSON.
