//* What Is Destructuring?

// Destructuring is a short way to extract values from arrays or objects
// and store them into variables.

// Think:
// Array  → extract values by position
// Object → extract values by property name

//* Array Destructuring

// Array destructuring is used to extract values from an array
// based on their position (index).

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

//* Remember

// Array destructuring follows POSITION.

// [first, second, third]
//      ↓       ↓       ↓
//     [10,     20,     30]

//* Skipping Array Values

// Use an empty comma (,) to skip a value.

const colors = ["red", "green", "blue"];

const [first, , third] = colors;

console.log(first); // red
console.log(third); // blue

//* Default Values

// We can provide a default value when the array
// does not contain a value.

const fruits = ["Apple"];

const [fruit1, fruit2 = "Banana"] = fruits;

console.log(fruit1); // Apple
console.log(fruit2); // Banana

//* Swapping Variables

// Destructuring allows us to swap two variables
// without using a temporary variable.

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x); // 20
console.log(y); // 10

//* Rest in Array Destructuring

// The rest operator (...) collects the remaining values
// into a new array.

const nums = [10, 20, 30, 40];

const [firstNum, ...remaining] = nums;

console.log(firstNum); // 10
console.log(remaining); // [20, 30, 40]

//* Object Destructuring

// Object destructuring is used to extract properties
// from an object and store them into variables.

const user = {
  name: "Ravi",
  age: 21,
  city: "Nawada",
};

const { name, age, city } = user;

console.log(name); // Ravi
console.log(age); // 21
console.log(city); // Dhanbad

//* Remember

// Object destructuring follows PROPERTY NAME.

// { name, age }
//      ↓     ↓
// user.name user.age

//* Renaming Variables

// We can give a different variable name
// using the : syntax.

const person = {
  name: "Ravi",
  age: 21,
};

const { name: userName, age: userAge } = person;

console.log(userName); // Ravi
console.log(userAge); // 21

//* Default Values in Objects

// We can provide a default value if the property
// does not exist in the object.

const settings = {
  theme: "dark",
};

const { theme, fontSize = 16 } = settings;

console.log(theme); // dark
console.log(fontSize); // 16

//* Nested Object Destructuring

// We can destructure properties from nested objects.

const userData = {
  name: "Ravi",
  address: {
    city: "Nawada",
    pincode: 826001,
  },
};

const {
  name: userDataName,
  address: { city: userCity, pincode },
} = userData;

console.log(userDataName); // Ravi
console.log(userCity); // Dhanbad
console.log(pincode); // 826001

//* Nested Array Destructuring

// We can also destructure nested arrays.

const data = [10, [20, 30]];

const [num1, [num2, num3]] = data;

console.log(num1); // 10
console.log(num2); // 20
console.log(num3); // 30

//* Array + Object Destructuring

// We can combine array and object destructuring.

const users = [
  { name: "Ravi", age: 21 },
  { name: "Rahul", age: 25 },
];

const [{ name: firstUser }, { name: secondUser }] = users;

console.log(firstUser); // Ravi
console.log(secondUser); // Rahul

//* Destructuring in Function Parameters

// We can destructure an object directly inside function parameters.

function showUser({ name, age }) {
  console.log(name);
  console.log(age);
}

showUser({
  name: "Ravi",
  age: 21,
});

//* Destructuring with Default Values

function greet({ name = "Guest" }) {
  console.log(`Hello, ${name}!`);
}

greet({ name: "Ravi" }); // Hello, Ravi!
greet({}); // Hello, Guest!

//* Rest in Object Destructuring

// The rest operator (...) collects the remaining properties
// into a new object.

const personData = {
  name: "Ravi",
  age: 21,
  city: "Nawada",
};

const { name: personName, ...details } = personData;

console.log(personName); // Ravi
console.log(details);
// { age: 21, city: "Nawada" }

//* Destructuring: The Main Rule

// ARRAY  → Position matters

const [one, two] = [10, 20];

console.log(one); // 10
console.log(two); // 20

// OBJECT → Property name matters

const { username } = {
  username: "Ravi",
};

console.log(username); // Ravi

//* Quick Recap

// Array Destructuring
// → Extract values by position
// → const [a, b] = array;

// Object Destructuring
// → Extract values by property name
// → const { name, age } = object;

// Skip
// → const [a, , c] = array;

// Rename
// → const { name: userName } = object;

// Default
// → const { age = 18 } = object;

// Rest
// → const [first, ...rest] = array;
// → const { name, ...details } = object;

//* One-Line Memory Trick

// Array  → POSITION
// Object → PROPERTY NAME
// ...    → REMAINING VALUES
