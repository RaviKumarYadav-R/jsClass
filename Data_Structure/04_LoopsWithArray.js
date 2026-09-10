//* ============================================================
//* LOOPS WITH ARRAYS
//* ============================================================

//* What Are Loops with Arrays?
// A loop allows us to visit each element of an array one by one.

// Example:
const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Output:
// 10
// 20
// 30
// 40
// 50

//* ============================================================
//* 1. FOR LOOP WITH ARRAY
//* ============================================================

// The traditional for loop uses an index to access each element.

// Syntax:

// for (initialization; condition; update) {
//   // code
// }

// Example:
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// i = 0 → fruits[0] → Apple
// i = 1 → fruits[1] → Banana
// i = 2 → fruits[2] → Mango
// i = 3 → condition false → stop

//* Why do we use i < array.length?

// Array indexes start from 0.

// Example:
const nums = [10, 20, 30];

console.log(nums.length); // 3

// Valid indexes:
// 0 → 10
// 1 → 20
// 2 → 30

// Therefore:
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// IMPORTANT:
// Never normally use:
// i <= nums.length

// Because when i becomes 3:
// nums[3] → undefined

//* ============================================================
//* 2. FOR LOOP WHEN WE NEED THE INDEX
//* ============================================================

// The biggest advantage of a normal for loop:
// We have direct access to the index.

// Example:
const students = ["Ravi", "Aman", "Rahul"];

for (let i = 0; i < students.length; i++) {
  console.log(i, students[i]);
}

// Output:
// 0 "Ravi"
// 1 "Aman"
// 2 "Rahul"

// We can also change an array element using its index.

const marks = [50, 60, 70];

for (let i = 0; i < marks.length; i++) {
  marks[i] = marks[i] + 10;
}

console.log(marks);

// Output:
// [60, 70, 80]

// This is one reason to use a normal for loop:
// We can easily control the index and modify elements.

//* ============================================================
//* 3. FOR...OF LOOP
//* ============================================================

// for...of gives us the VALUE directly.

// Example:
const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
  console.log(color);
}

// Output:
// Red
// Green
// Blue

//* Compare:

// Normal for loop:
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for...of:
for (const color of colors) {
  console.log(color);
}

//* Mental Model:

// for loop:
// index → value

// for...of:
// value directly

//* ============================================================
//* 4. FOR...OF WITH INDEX
//* ============================================================

// for...of itself gives values, not indexes.

// If we need both index and value:

const names = ["Ravi", "Aman", "Raj"];

for (const [index, name] of names.entries()) {
  console.log(index, name);
}

// Output:
// 0 "Ravi"
// 1 "Aman"
// 2 "Raj"

// entries() produces:
// [0, "Ravi"]
// [1, "Aman"]
// [2, "Raj"]

//* ============================================================
//* 5. FOREACH()
//* ============================================================

// forEach() is an array method.

// It runs a callback function once for every element.

// Example:

const numbers2 = [10, 20, 30];

numbers2.forEach(function (number) {
  console.log(number);
});

// Output:
// 10
// 20
// 30

//* Arrow function version:

numbers2.forEach((number) => {
  console.log(number);
});

//* ============================================================
//* 6. FOREACH() CALLBACK PARAMETERS
//* ============================================================

// forEach callback can receive:
// 1. element
// 2. index
// 3. complete array

const languages = ["JavaScript", "Python", "Java"];

languages.forEach((language, index, array) => {
  console.log(language);
  console.log(index);
  console.log(array);
});

// Usually we only need:

languages.forEach((language) => {
  console.log(language);
});

// Or element + index:

languages.forEach((language, index) => {
  console.log(index, language);
});

//* ============================================================
//* 7. FOR EACH ARRAY ELEMENT
//* ============================================================

// Example:
// Print all prices.

const prices = [100, 200, 300];

prices.forEach((price) => {
  console.log(price);
});

// Example:
// Add a message for every user.

const users = ["Ravi", "Aman", "Rahul"];

users.forEach((user) => {
  console.log(`Hello ${user}`);
});

// Output:
// Hello Ravi
// Hello Aman
// Hello Rahul

//* ============================================================
//* 8. MODIFYING ARRAY ELEMENTS
//* ============================================================

// Be careful:
// forEach gives you the value, but changing the parameter
// does NOT replace the original array element.

const values = [10, 20, 30];

values.forEach((value) => {
  value = value * 2;
});

console.log(values);

// Output:
// [10, 20, 30]

// The original array did not change.

// If you intentionally want to modify the array:

for (let i = 0; i < values.length; i++) {
  values[i] = values[i] * 2;
}

console.log(values);

// Output:
// [20, 40, 60]

//* ============================================================
//* 9. FOR LOOP VS FOR...OF VS FOREACH
//* ============================================================

// FOR LOOP
// Best when:
// - You need the index
// - You need precise loop control
// - You may use break/continue
// - You need to modify elements by index

const arr1 = [10, 20, 30];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// FOR...OF
// Best when:
// - You only need values
// - You want simple readable iteration

for (const value of arr1) {
  console.log(value);
}

// FOREACH
// Best when:
// - You want to perform an action for every element
// - You don't need to stop the loop early

arr1.forEach((value) => {
  console.log(value);
});

//* ============================================================
//* 10. BREAK WITH ARRAY LOOP
//* ============================================================

// break completely stops the nearest loop.

// Example:

const numbers3 = [10, 20, 30, 40, 50];

for (const number of numbers3) {
  if (number === 30) {
    break;
  }

  console.log(number);
}

// Output:
// 10
// 20

// IMPORTANT:
// break works with for and for...of.

// forEach() does NOT support normal break.

//* ============================================================
//* 11. CONTINUE WITH ARRAY LOOP
//* ============================================================

// continue skips the current iteration.

// Example:

const numbers4 = [1, 2, 3, 4, 5];

for (const number of numbers4) {
  if (number % 2 === 0) {
    continue;
  }

  console.log(number);
}

// Output:
// 1
// 3
// 5

//* Meaning:
// Even number → skip
// Odd number → print

//* ============================================================
//* 12. SEARCHING AN ARRAY USING A LOOP
//* ============================================================

const products = ["Laptop", "Phone", "Tablet"];

const search = "Phone";

for (let i = 0; i < products.length; i++) {
  if (products[i] === search) {
    console.log("Product found at index:", i);
    break;
  }
}

// Output:
// Product found at index: 1

//* ============================================================
//* 13. CALCULATE SUM USING LOOP
//* ============================================================

const marks2 = [80, 70, 90, 60];

let total = 0;

for (const mark of marks2) {
  total = total + mark;
}

console.log(total);

// Output:
// 300

//* Average:

const average = total / marks2.length;

console.log(average);

// Output:
// 75

//* ============================================================
//* 14. COUNT ELEMENTS BASED ON CONDITION
//* ============================================================

// Count even numbers.

const nums2 = [10, 15, 20, 25, 30];

let evenCount = 0;

for (const num of nums2) {
  if (num % 2 === 0) {
    evenCount++;
  }
}

console.log(evenCount);

// Output:
// 3

//* ============================================================
//* 15. FIND LARGEST NUMBER
//* ============================================================

const numbers5 = [10, 50, 20, 80, 30];

let largest = numbers5[0];

for (const number of numbers5) {
  if (number > largest) {
    largest = number;
  }
}

console.log(largest);

// Output:
// 80

//* ============================================================
//* 16. FIND SMALLEST NUMBER
//* ============================================================

const numbers6 = [40, 10, 30, 5, 20];

let smallest = numbers6[0];

for (const number of numbers6) {
  if (number < smallest) {
    smallest = number;
  }
}

console.log(smallest);

// Output:
// 5

//* ============================================================
//* 17. LOOP THROUGH ARRAY OF OBJECTS
//* ============================================================

// Arrays often contain objects.

const students2 = [
  { name: "Ravi", age: 21 },
  { name: "Aman", age: 22 },
  { name: "Rahul", age: 20 },
];

for (const student of students2) {
  console.log(student.name);
  console.log(student.age);
}

// Output:
// Ravi
// 21
// Aman
// 22
// Rahul
// 20

//* ============================================================
//* 18. LOOP + CONDITION WITH OBJECTS
//* ============================================================

const students3 = [
  { name: "Ravi", marks: 80 },
  { name: "Aman", marks: 40 },
  { name: "Rahul", marks: 90 },
];

for (const student of students3) {
  if (student.marks >= 50) {
    console.log(`${student.name} passed`);
  }
}

// Output:
// Ravi passed
// Rahul passed

//* ============================================================
//* 19. NESTED LOOPS WITH ARRAYS
//* ============================================================

// Useful for nested arrays / matrices.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const row of matrix) {
  for (const value of row) {
    console.log(value);
  }
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//* Mental Model:

// Outer loop → selects a row
// Inner loop → visits values inside that row

//* ============================================================
//* 20. MODIFY ARRAY USING INDEX
//* ============================================================

const scores = [10, 20, 30, 40];

for (let i = 0; i < scores.length; i++) {
  scores[i] = scores[i] * 2;
}

console.log(scores);

// Output:
// [20, 40, 60, 80]

// for...of is usually better when you only need values.
// Normal for is useful when you need to change arr[i].

//* ============================================================
//* 21. LOOPING BACKWARD
//* ============================================================

// We can move through an array from the last element to the first.

const numbers7 = [10, 20, 30, 40, 50];

for (let i = numbers7.length - 1; i >= 0; i--) {
  console.log(numbers7[i]);
}

// Output:
// 50
// 40
// 30
// 20
// 10

//* ============================================================
//* 22. CHANGING ARRAY DURING ITERATION
//* ============================================================

// If you modify the array while looping,
// be careful because indexes and length can change.

// Example:

const items = ["A", "B", "C", "D"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// If removing elements while iterating,
// indexes can shift and some elements may be skipped.

// For complex modifications, carefully control the index
// or use methods such as filter() to create a new array.

//* ============================================================
//* 23. forEach() DOES NOT RETURN A NEW ARRAY
//* ============================================================

// forEach is mainly used for side effects.

const numbers8 = [1, 2, 3];

const result = numbers8.forEach((number) => {
  return number * 2;
});

console.log(result);

// Output:
// undefined

//* If you want a NEW transformed array:
// Use map().

const doubled = numbers8.map((number) => {
  return number * 2;
});

console.log(doubled);

// Output:
// [2, 4, 6]

//* Remember:

// forEach → "Do something for each element"
// map     → "Transform each element and create a new array"

//* ============================================================
//* 24. PRACTICAL EXAMPLE — SHOPPING CART
//* ============================================================

const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

let cartTotal = 0;

for (const item of cart) {
  cartTotal += item.price;
}

console.log(`Total: ₹${cartTotal}`);

// Output:
// Total: ₹53000

//* ============================================================
//* 25. PRACTICAL EXAMPLE — FIND USER
//* ============================================================

const users2 = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Aman" },
  { id: 3, name: "Rahul" },
];

const userId = 2;

for (const user of users2) {
  if (user.id === userId) {
    console.log("User found:", user.name);
    break;
  }
}

// Output:
// User found: Aman

//* ============================================================
//* 26. QUICK DECISION GUIDE
//* ============================================================

// Need index?
// → for

// Need only values?
// → for...of

// Need to perform an action for every element?
// → forEach

// Need to stop early using break?
// → for / for...of

// Need continue?
// → for / for...of

// Need a new transformed array?
// → map()

// Need a filtered new array?
// → filter()

//* ============================================================
//* 27. MOST IMPORTANT DIFFERENCE
//* ============================================================

// Array:
const data = ["A", "B", "C"];

// for:
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}
// Gives:
// index + value

// for...of:
for (const value of data) {
  console.log(value);
}
// Gives:
// value

// forEach:
data.forEach((value, index) => {
  console.log(index, value);
});
// Gives:
// value + index through callback

//* ============================================================
//* MEMORY TRICK
//* ============================================================

// for
// → "I need control"

// for...of
// → "Give me values"

// forEach
// → "Do this for every element"

// map
// → "Transform every element"

// filter
// → "Keep elements that match"

// find
// → "Give me the first matching element"

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// If you are learning arrays, master these first:
//
// 1. for
// 2. for...of
// 3. forEach
// 4. map
// 5. filter
// 6. find
// 7. reduce
//
// Understand WHAT each loop gives you:
//
// for       → index
// for...of  → value
// forEach   → value + index + array
//
// Once this becomes natural,
// array problems become much easier.
