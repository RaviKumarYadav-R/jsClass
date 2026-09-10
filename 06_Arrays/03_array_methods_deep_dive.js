//* ============================================================
//* MAP, FILTER & REDUCE
//* ============================================================

// These three methods are used to process arrays.
//
// map()    → transform every element
// filter() → select elements that match a condition
// reduce() → combine elements into one final result
//
// Memory trick:
//
// map    → "Change"
// filter → "Choose"
// reduce → "Combine"

//* ============================================================
//* 1. map()
//* ============================================================

// map() creates a NEW array by transforming every element.
//
// Syntax:
//
// array.map((element, index, array) => {
//   return newValue;
// });

// Example:

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);

// Output:
// [2, 4, 6, 8, 10]

// Original array is unchanged:

console.log(numbers);

// [1, 2, 3, 4, 5]

//* Mental Model:
//
// [1, 2, 3]
//    ↓
//   map()
//    ↓
// [2, 4, 6]
//
// Every element goes through the callback.
// Every callback result becomes an element in the new array.

//* ============================================================
//* map() WITH INDEX
//* ============================================================

const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.map((fruit, index) => {
  return `${index}: ${fruit}`;
});

console.log(result);

// Output:
// ["0: Apple", "1: Banana", "2: Mango"]

// map() callback can receive:
//
// 1. element
// 2. index
// 3. entire array

//* ============================================================
//* map() WITH OBJECTS
//* ============================================================

// Very common in real applications.

const users = [
  { name: "Ravi", age: 21 },
  { name: "Aman", age: 22 },
  { name: "Rahul", age: 20 },
];

const names = users.map((user) => {
  return user.name;
});

console.log(names);

// Output:
// ["Ravi", "Aman", "Rahul"]

//* We transformed:
//
// Object → String
//
// This is one of the most common uses of map().

//* ============================================================
//* map() → CREATE NEW OBJECTS
//* ============================================================

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
];

const productCards = products.map((product) => {
  return {
    name: product.name,
    price: `₹${product.price}`,
  };
});

console.log(productCards);

// Output:
// [
//   { name: "Laptop", price: "₹50000" },
//   { name: "Mouse", price: "₹1000" }
// ]

//* ============================================================
//* IMPORTANT map() RULE
//* ============================================================

// map() should normally return something.
//
// Correct:

const numbers2 = [1, 2, 3];

const doubled2 = numbers2.map((number) => {
  return number * 2;
});

console.log(doubled2);
// [2, 4, 6]

// Wrong:

const wrongMap = numbers2.map((number) => {
  number * 2;
});

console.log(wrongMap);

// [undefined, undefined, undefined]
//
// Why?
// Because the callback did not return anything.

//* Arrow function shortcut:

const doubled3 = numbers2.map((number) => number * 2);

console.log(doubled3);

// [2, 4, 6]

//* ============================================================
//* 2. filter()
//* ============================================================

// filter() creates a NEW array containing only elements
// for which the callback returns true.
//
// Syntax:
//
// array.filter((element, index, array) => {
//   return condition;
// });

// Example:

const numbers3 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers3.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Output:
// [2, 4, 6]

//* Mental Model:
//
// [1, 2, 3, 4, 5, 6]
//       ↓
//     filter
//       ↓
// condition: even?
//       ↓
// [2, 4, 6]

//* IMPORTANT:
//
// callback returns true  → keep element
// callback returns false → remove element

//* ============================================================
//* filter() WITH OBJECTS
//* ============================================================

const users2 = [
  { name: "Ravi", age: 21 },
  { name: "Aman", age: 16 },
  { name: "Rahul", age: 25 },
];

const adults = users2.filter((user) => {
  return user.age >= 18;
});

console.log(adults);

// Output:
// [
//   { name: "Ravi", age: 21 },
//   { name: "Rahul", age: 25 }
// ]

//* ============================================================
//* filter() MULTIPLE CONDITIONS
//* ============================================================

const students = [
  { name: "Ravi", marks: 80, passed: true },
  { name: "Aman", marks: 40, passed: false },
  { name: "Rahul", marks: 90, passed: true },
];

const goodStudents = students.filter((student) => {
  return student.marks >= 70 && student.passed === true;
});

console.log(goodStudents);

// Ravi and Rahul

//* ============================================================
//* filter() RETURNS EMPTY ARRAY IF NOTHING MATCHES
//* ============================================================

const numbers4 = [1, 3, 5, 7];

const even = numbers4.filter((number) => {
  return number % 2 === 0;
});

console.log(even);

// []

//* This is NOT an error.
// It simply means no element matched the condition.

//* ============================================================
//* 3. reduce()
//* ============================================================

// reduce() processes all elements and produces ONE final value.
//
// That final value can be:
// - number
// - string
// - object
// - array
// - boolean
// - basically any value you design

//* Syntax:
//
// array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);

//* The two most important values:
//
// accumulator → result built so far
// currentValue → current array element

//* ============================================================
//* SIMPLE SUM
//* ============================================================

const numbers5 = [1, 2, 3, 4, 5];

const sum = numbers5.reduce((acc, current) => {
  return acc + current;
}, 0);

console.log(sum);

// Output:
// 15

//* Execution:
//
// Initial acc = 0
//
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
//
// Final result = 15

//* ============================================================
//* REDUCE WITHOUT CONFUSION
//* ============================================================

// Think:
//
// accumulator = "box where I keep my result"
//
// current = "current item I'm processing"

// Example:

const values = [10, 20, 30];

const total = values.reduce((acc, current) => {
  console.log("acc:", acc);
  console.log("current:", current);

  return acc + current;
}, 0);

console.log(total);

// Final:
// 60

//* ============================================================
//* REDUCE TO FIND LARGEST NUMBER
//* ============================================================

const numbers6 = [10, 50, 20, 80, 30];

const largest = numbers6.reduce((max, current) => {
  return current > max ? current : max;
}, numbers6[0]);

console.log(largest);

// Output:
// 80

//* ============================================================
//* REDUCE TO COUNT VALUES
//* ============================================================

// Count how many even numbers exist.

const numbers7 = [1, 2, 3, 4, 5, 6];

const evenCount = numbers7.reduce((count, number) => {
  if (number % 2 === 0) {
    return count + 1;
  }

  return count;
}, 0);

console.log(evenCount);

// Output:
// 3

//* ============================================================
//* REDUCE TO CREATE AN OBJECT
//* ============================================================

// Example:
// Count how many times each fruit appears.

const fruits2 = ["apple", "banana", "apple", "mango", "banana", "apple"];

const fruitCount = fruits2.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;

  return count;
}, {});

console.log(fruitCount);

// Output:
// {
//   apple: 3,
//   banana: 2,
//   mango: 1
// }

//* Here the accumulator is an OBJECT.
//
// Initial:
// {}
//
// After processing:
// {
//   apple: 3,
//   banana: 2,
//   mango: 1
// }

//* ============================================================
//* REDUCE TO CALCULATE SHOPPING CART TOTAL
//* ============================================================

const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

const cartTotal = cart.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(cartTotal);

// Output:
// 53000

//* ============================================================
//* MAP vs FILTER vs REDUCE
//* ============================================================

// map()
// → transforms EVERY element
//
// Input:
// [1, 2, 3]
//
// Output:
// [2, 4, 6]

// filter()
// → keeps SOME elements
//
// Input:
// [1, 2, 3, 4]
//
// Output:
// [2, 4]

// reduce()
// → combines elements into ONE result
//
// Input:
// [1, 2, 3, 4]
//
// Output:
// 10

//* ============================================================
//* ARRAY SIZE BEHAVIOR
//* ============================================================

// map()
// Usually returns the SAME number of elements.

[1, 2, 3].map((x) => x * 2);

// [2, 4, 6]

// filter()
// Can return fewer elements.

[1, 2, 3, 4].filter((x) => x > 2);

// [3, 4]

// reduce()
// Returns ONE final result.

[1, 2, 3, 4].reduce((a, b) => a + b, 0);

// 10

//* Memory:
//
// map    → SAME SIZE
// filter → SMALLER OR SAME SIZE
// reduce → ONE RESULT

//* ============================================================
//* 4. CHAINING METHODS
//* ============================================================

// We can call one array method after another.
//
// Example:

const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8];

const finalResult = numbers8
  .map((number) => number * 2)
  .filter((number) => number > 10)
  .reduce((sum, number) => sum + number, 0);

console.log(finalResult);

// Step 1 — map:
//
// [1,2,3,4,5,6,7,8]
// ↓
// [2,4,6,8,10,12,14,16]

// Step 2 — filter:
//
// [2,4,6,8,10,12,14,16]
// ↓
// [12,14,16]

// Step 3 — reduce:
//
// 12 + 14 + 16
// ↓
// 42

// Final output:
// 42

//* IMPORTANT:
// The original array is not changed by these operations.

console.log(numbers8);

// [1,2,3,4,5,6,7,8]

//* ============================================================
//* 5. PRACTICAL CHAINING EXAMPLE
//* ============================================================

// Find total price of products costing more than ₹1000.

const products2 = [
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 10000 },
  { name: "Cable", price: 300 },
];

const expensiveTotal = products2
  .filter((product) => product.price > 1000)
  .reduce((total, product) => total + product.price, 0);

console.log(expensiveTotal);

// 11500

//* Flow:
//
// products
//   ↓
// filter()
//   ↓
// expensive products
//   ↓
// reduce()
//   ↓
// total price

//* ============================================================
//* 6. MAP + FILTER
//* ============================================================

// Get names of adult users.

const users3 = [
  { name: "Ravi", age: 21 },
  { name: "Aman", age: 16 },
  { name: "Rahul", age: 25 },
];

const adultNames = users3
  .filter((user) => user.age >= 18)
  .map((user) => user.name);

console.log(adultNames);

// Output:
// ["Ravi", "Rahul"]

//* Read from left to right:
//
// filter → select adults
// map    → extract names

//* ============================================================
//* 7. FILTER + MAP + REDUCE
//* ============================================================

// Find total marks of students who passed.

const students2 = [
  { name: "Ravi", marks: 80 },
  { name: "Aman", marks: 40 },
  { name: "Rahul", marks: 90 },
  { name: "Raj", marks: 30 },
];

const passedMarksTotal = students2
  .filter((student) => student.marks >= 50)
  .map((student) => student.marks)
  .reduce((total, marks) => total + marks, 0);

console.log(passedMarksTotal);

// Ravi → 80
// Rahul → 90
//
// 80 + 90 = 170

//* ============================================================
//* 8. MAP vs forEach
//* ============================================================

// forEach():
// Used when we simply want to perform an action.

const nums9 = [1, 2, 3];

nums9.forEach((num) => {
  console.log(num);
});

// map():
// Used when we want a NEW transformed array.

const doubled4 = nums9.map((num) => {
  return num * 2;
});

console.log(doubled4);

// [2, 4, 6]

//* Remember:
//
// forEach → DO
// map     → CREATE NEW ARRAY

//* ============================================================
//* 9. MAP vs FILTER
//* ============================================================

// map:
// "What should each element become?"

const result1 = [1, 2, 3].map((num) => num * 10);

console.log(result1);

// [10, 20, 30]

// filter:
// "Which elements should remain?"

const result2 = [1, 2, 3].filter((num) => num > 1);

console.log(result2);

// [2, 3]

//* ============================================================
//* 10. FILTER vs FIND
//* ============================================================

// filter() returns an ARRAY.

const numbers10 = [10, 20, 30, 40];

const filtered = numbers10.filter((num) => num > 20);

console.log(filtered);

// [30, 40]

// find() returns the FIRST matching VALUE.

const found = numbers10.find((num) => num > 20);

console.log(found);

// 30

//* Memory:
//
// filter → MANY matching values
// find   → FIRST matching value

//* ============================================================
//* 11. REDUCE CAN RETURN ANY TYPE
//* ============================================================

// reduce() does NOT have to return a number.

// Example: build a string.

const words = ["JavaScript", "is", "awesome"];

const sentence = words.reduce((result, word) => {
  return result + " " + word;
}, "");

console.log(sentence);

// " JavaScript is awesome"

// Better approach for this particular problem:
// words.join(" ")

// But this example shows that reduce()
// can build different kinds of results.

//* ============================================================
//* 12. REDUCE → GROUP DATA
//* ============================================================

const people = [
  { name: "Ravi", role: "developer" },
  { name: "Aman", role: "designer" },
  { name: "Rahul", role: "developer" },
];

const grouped = people.reduce((groups, person) => {
  if (!groups[person.role]) {
    groups[person.role] = [];
  }

  groups[person.role].push(person);

  return groups;
}, {});

console.log(grouped);

// {
//   developer: [
//     { name: "Ravi", role: "developer" },
//     { name: "Rahul", role: "developer" }
//   ],
//   designer: [
//     { name: "Aman", role: "designer" }
//   ]
// }

//* This pattern is extremely useful in real applications.

//* ============================================================
//* 13. IMPORTANT: THESE METHODS DON'T MUTATE THE ARRAY
//* ============================================================

// map(), filter(), and reduce()
// do not directly modify the original array.
//
// Example:

const original = [1, 2, 3];

const mapped = original.map((num) => num * 2);

const filtered2 = original.filter((num) => num > 1);

const reduced = original.reduce((sum, num) => sum + num, 0);

console.log(original);
// [1, 2, 3]

console.log(mapped);
// [2, 4, 6]

console.log(filtered2);
// [2, 3]

console.log(reduced);
// 6

//* NOTE:
// The array itself isn't mutated by these methods.
//
// However, if the array contains objects,
// you can still mutate those objects if your callback
// explicitly changes their properties.
//
// Example:

const users4 = [{ name: "Ravi", age: 21 }];

users4.map((user) => {
  user.age = 22;
  return user;
});

console.log(users4);

// [{ name: "Ravi", age: 22 }]
//
// The map() method itself did not mutate the array structure,
// but the callback mutated the object inside the array.
//
// Prefer creating new objects when you want immutable updates.

//* ============================================================
//* 14. COMMON MISTAKES
//* ============================================================

// Mistake 1:
// Forgetting return inside map()

const wrong = [1, 2, 3].map((num) => {
  num * 2;
});

console.log(wrong);

// [undefined, undefined, undefined]

// Correct:

const correct = [1, 2, 3].map((num) => {
  return num * 2;
});

// Mistake 2:
// Returning the wrong condition from filter()

const evenNumbers2 = [1, 2, 3, 4].filter((num) => {
  return num % 2 === 0;
});

// Mistake 3:
// Forgetting the initial value in reduce()

// Prefer:

const total2 = [10, 20, 30].reduce((sum, num) => {
  return sum + num;
}, 0);

//* The initial value makes the accumulator predictable
// and is especially important when the array might be empty.

//* ============================================================
//* 15. HOW TO DECIDE WHICH METHOD TO USE?
//* ============================================================

// Question 1:
//
// "I want to change every element."
//
// → map()

// Question 2:
//
// "I want to keep only elements that satisfy a condition."
//
// → filter()

// Question 3:
//
// "I want one final result from all elements."
//
// → reduce()

// Question 4:
//
// "I only want to perform an action for every element."
//
// → forEach()

// Question 5:
//
// "I want the first matching element."
//
// → find()

//* ============================================================
//* FINAL MEMORY MAP
//* ============================================================

// map
// [1, 2, 3]
//    ↓
// [2, 4, 6]
//
// TRANSFORM

// filter
// [1, 2, 3, 4]
//    ↓
// [2, 4]
//
// SELECT

// reduce
// [1, 2, 3, 4]
//    ↓
// 10
//
// COMBINE

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// map()    → Every item gets a NEW value
// filter() → Some items survive
// reduce() → Everything becomes ONE result
//
// Remember:
//
// MAP    = CHANGE
// FILTER = CHOOSE
// REDUCE = COMBINE

//* ============================================================
//* ONE-LINE MEMORY TRICK
//* ============================================================

// "MAP changes, FILTER chooses, REDUCE combines."
