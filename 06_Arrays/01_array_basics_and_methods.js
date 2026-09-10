//* ============================================================
//* ARRAYS IN JAVASCRIPT
//* ============================================================

// An array is an ordered collection of values.
//
// Arrays are created using square brackets:
//
// [value1, value2, value3]
//
// Example:

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

//* ============================================================
//* ARRAY CAN STORE DIFFERENT DATA TYPES
//* ============================================================

// JavaScript arrays can contain different types of values.

const mixedArray = [10, "Hello", true, null, { name: "Ravi" }, [1, 2, 3]];

console.log(mixedArray);

//* ============================================================
//* ARRAY INDEX
//* ============================================================

// Array indexes start from 0.
//
// Example:
//
// ["Apple", "Banana", "Mango"]
//
// Apple  → 0
// Banana → 1
// Mango  → 2

const colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red
console.log(colors[1]); // Green
console.log(colors[2]); // Blue

//* ============================================================
//* length
//* ============================================================

// .length gives the number of elements.

const numbers = [10, 20, 30, 40];

console.log(numbers.length);

// Output:
// 4

//* ============================================================
//* LAST ELEMENT
//* ============================================================

// Last index = length - 1

console.log(numbers[numbers.length - 1]);

// Output:
// 40

//* ============================================================
//* CHANGING AN ARRAY ELEMENT
//* ============================================================

// Arrays are mutable.
//
// This means their elements can be changed.

const languages = ["HTML", "CSS", "JavaScript"];

languages[1] = "Tailwind";

console.log(languages);

// Output:
// ["HTML", "Tailwind", "JavaScript"]

//* ============================================================
//* ADD ELEMENT — push()
//* ============================================================

// push() adds one or more elements
// to the END of an array.
//
// It modifies the original array.

const fruits1 = ["Apple", "Banana"];

fruits1.push("Mango");

console.log(fruits1);

// Output:
// ["Apple", "Banana", "Mango"]

// You can add multiple values:

fruits1.push("Orange", "Grapes");

console.log(fruits1);

//* ============================================================
//* push() RETURNS THE NEW LENGTH
//* ============================================================

const numbers1 = [1, 2, 3];

const newLength = numbers1.push(4);

console.log(numbers1);
console.log(newLength);

// Output:
// [1, 2, 3, 4]
// 4

//* ============================================================
//* REMOVE LAST ELEMENT — pop()
//* ============================================================

// pop() removes the LAST element.
//
// It modifies the original array.

const fruits2 = ["Apple", "Banana", "Mango"];

const removedFruit = fruits2.pop();

console.log(fruits2);
console.log(removedFruit);

// Output:
// ["Apple", "Banana"]
// Mango

//* ============================================================
//* ADD ELEMENT AT BEGINNING — unshift()
//* ============================================================

// unshift() adds elements to the BEGINNING.

const numbers2 = [2, 3, 4];

numbers2.unshift(1);

console.log(numbers2);

// Output:
// [1, 2, 3, 4]

// It can add multiple values:

numbers2.unshift(-1, 0);

console.log(numbers2);

//* ============================================================
//* REMOVE FIRST ELEMENT — shift()
//* ============================================================

// shift() removes the FIRST element.

const numbers3 = [1, 2, 3, 4];

const firstNumber = numbers3.shift();

console.log(numbers3);
console.log(firstNumber);

// Output:
// [2, 3, 4]
// 1

//* ============================================================
//* push() + pop()
//* ============================================================

// Think of the END of the array:
//
// push() → ADD at end
// pop()  → REMOVE from end

//* ============================================================
//* shift() + unshift()
//* ============================================================

// Think of the BEGINNING:
//
// unshift() → ADD at beginning
// shift()   → REMOVE from beginning

//* ============================================================
//* slice()
//* ============================================================

// slice(start, end)
//
// Creates a NEW array containing a portion.
//
// start → included
// end   → excluded
//
// IMPORTANT:
// slice() does NOT modify the original array.

const numbers4 = [10, 20, 30, 40, 50];

const result = numbers4.slice(1, 4);

console.log(result);

// Output:
// [20, 30, 40]

console.log(numbers4);

// Original remains unchanged.

//* ============================================================
//* slice() FROM AN INDEX
//* ============================================================

console.log(numbers4.slice(2));

// Output:
// [30, 40, 50]

//* ============================================================
//* slice() WITH NEGATIVE INDEX
//* ============================================================

console.log(numbers4.slice(-2));

// Output:
// [40, 50]

//* ============================================================
//* splice()
//* ============================================================

// splice() can ADD, REMOVE, or REPLACE elements.
//
// Syntax:
//
// array.splice(start, deleteCount, item1, item2, ...)

const items = ["A", "B", "C", "D"];

items.splice(1, 1);

console.log(items);

// Output:
// ["A", "C", "D"]
//
// Start at index 1
// Delete 1 element

//* ============================================================
//* splice() — ADD ELEMENTS
//* ============================================================

const items2 = ["A", "D"];

items2.splice(1, 0, "B", "C");

console.log(items2);

// Output:
// ["A", "B", "C", "D"]

// deleteCount = 0
// Therefore nothing is removed.

//* ============================================================
//* splice() — REPLACE ELEMENT
//* ============================================================

const items3 = ["A", "B", "C"];

items3.splice(1, 1, "X");

console.log(items3);

// Output:
// ["A", "X", "C"]

//* ============================================================
//* splice() RETURNS REMOVED ELEMENTS
//* ============================================================

const numbers5 = [10, 20, 30, 40];

const removed = numbers5.splice(1, 2);

console.log(numbers5);
console.log(removed);

// Output:
// [10, 40]
// [20, 30]

//* ============================================================
//* slice() VS splice()
//* ============================================================

// slice()
// → extracts a portion
// → DOES NOT modify original
// → returns a NEW array
//
// splice()
// → adds/removes/replaces
// → MODIFIES original array
//
// Memory trick:
//
// slice = "take a piece"
// splice = "change the original"

//* ============================================================
//* concat()
//* ============================================================

// concat() combines arrays.
//
// It returns a NEW array.

const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = arr1.concat(arr2);

console.log(combined);

// Output:
// [1, 2, 3, 4]

// Original arrays remain unchanged.

//* ============================================================
//* includes()
//* ============================================================

// Checks whether an array contains a value.
//
// Returns true or false.

const fruits3 = ["Apple", "Banana", "Mango"];

console.log(fruits3.includes("Banana")); // true
console.log(fruits3.includes("Orange")); // false

//* ============================================================
//* indexOf()
//* ============================================================

// Returns the index of the first matching value.
//
// If not found → -1

const numbers6 = [10, 20, 30, 20];

console.log(numbers6.indexOf(20)); // 1
console.log(numbers6.indexOf(50)); // -1

//* ============================================================
//* lastIndexOf()
//* ============================================================

console.log(numbers6.lastIndexOf(20));

// Output:
// 3

//* ============================================================
//* join()
//* ============================================================

// Converts an array into a string.

const words = ["JavaScript", "is", "fun"];

console.log(words.join(" "));

// Output:
// JavaScript is fun

console.log(words.join("-"));

// Output:
// JavaScript-is-fun

//* ============================================================
//* reverse()
//* ============================================================

// reverse() reverses the array.
//
// IMPORTANT:
// It modifies the original array.

const nums = [1, 2, 3, 4];

nums.reverse();

console.log(nums);

// Output:
// [4, 3, 2, 1]

//* ============================================================
//* forEach()
//* ============================================================

// forEach() executes a function for every element.
//
// It is mainly used when you want to perform an action
// for each element.

const numbers7 = [10, 20, 30];

numbers7.forEach(function (number) {
  console.log(number);
});

// Arrow function:

numbers7.forEach((number) => {
  console.log(number);
});

//* ============================================================
//* forEach() WITH INDEX
//* ============================================================

const names = ["Ravi", "Aman", "Rahul"];

names.forEach((name, index) => {
  console.log(index, name);
});

// Output:
// 0 Ravi
// 1 Aman
// 2 Rahul

//* ============================================================
//* map()
//* ============================================================

// map() creates a NEW array.
//
// It transforms every element.
//
// Input array:
// [1, 2, 3]
//
// map()
// ↓
// [2, 4, 6]

const numbers8 = [1, 2, 3, 4];

const doubled = numbers8.map((number) => {
  return number * 2;
});

console.log(doubled);

// Output:
// [2, 4, 6]

// Original remains unchanged.

//* ============================================================
//* map() — PRACTICAL EXAMPLE
//* ============================================================

const prices = [100, 200, 300];

const discountedPrices = prices.map((price) => {
  return price * 0.9;
});

console.log(discountedPrices);

//* ============================================================
//* filter()
//* ============================================================

// filter() creates a NEW array containing
// only elements that pass a condition.

const numbers9 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers9.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Output:
// [2, 4, 6]

//* ============================================================
//* map() VS filter()
//* ============================================================

// map()
// → transforms EVERY element
// → usually same array length
//
// filter()
// → selects elements
// → array can become smaller

//* ============================================================
//* find()
//* ============================================================

// find() returns the FIRST element
// that satisfies the condition.

const numbers10 = [10, 20, 30, 40];

const found = numbers10.find((number) => {
  return number > 25;
});

console.log(found);

// Output:
// 30

// If nothing is found → undefined.

//* ============================================================
//* findIndex()
//* ============================================================

// findIndex() returns the index
// of the first element satisfying the condition.

const numbers11 = [10, 20, 30, 40];

const index = numbers11.findIndex((number) => {
  return number > 25;
});

console.log(index);

// Output:
// 2

//* ============================================================
//* some()
//* ============================================================

// some() checks:
//
// "Does AT LEAST ONE element satisfy this condition?"
//
// Returns true/false.

const numbers12 = [1, 3, 5, 8];

console.log(numbers12.some((number) => number % 2 === 0));

// Output:
// true

//* ============================================================
//* every()
//* ============================================================

// every() checks:
//
// "Do ALL elements satisfy this condition?"

const numbers13 = [2, 4, 6, 8];

console.log(numbers13.every((number) => number % 2 === 0));

// Output:
// true

//* ============================================================
//* some() VS every()
//* ============================================================

// some()
// → at least ONE
//
// every()
// → ALL

//* ============================================================
//* reduce()
//* ============================================================

// reduce() combines all elements into ONE final value.
//
// Example:
//
// [10, 20, 30]
//      ↓
//    reduce
//      ↓
//     60

const numbers14 = [10, 20, 30, 40];

const total = numbers14.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total);

// Output:
// 100

//* ============================================================
//* HOW reduce() WORKS
//* ============================================================

// Array:
// [10, 20, 30]
//
// Initial value = 0
//
// Step 1:
// 0 + 10 = 10
//
// Step 2:
// 10 + 20 = 30
//
// Step 3:
// 30 + 30 = 60
//
// Final result:
// 60

//* ============================================================
//* reduce() — FIND MAXIMUM
//* ============================================================

const scores = [50, 90, 70, 100, 80];

const highest = scores.reduce((max, score) => {
  return score > max ? score : max;
}, scores[0]);

console.log(highest);

// Output:
// 100

//* ============================================================
//* sort()
//* ============================================================

// sort() sorts array elements.
//
// IMPORTANT:
// By default, JavaScript converts values to strings
// and sorts them lexicographically.

const numbers15 = [10, 2, 30, 5];

numbers15.sort();

console.log(numbers15);

// Do NOT expect:
// [2, 5, 10, 30]
//
// Default result is based on string comparison.

//* ============================================================
//* NUMERIC SORT
//* ============================================================

// Use a compare function for numbers.

const numbers16 = [10, 2, 30, 5];

numbers16.sort((a, b) => a - b);

console.log(numbers16);

// Output:
// [2, 5, 10, 30]

// Descending:

numbers16.sort((a, b) => b - a);

console.log(numbers16);

// Output:
// [30, 10, 5, 2]

//* ============================================================
//* toSorted()
//* ============================================================

// toSorted() creates a sorted COPY
// instead of modifying the original array.

const numbers17 = [30, 10, 20];

const sortedNumbers = numbers17.toSorted((a, b) => a - b);

console.log(sortedNumbers);
console.log(numbers17);

// Original remains unchanged.

//* ============================================================
//* toReversed()
//* ============================================================

// toReversed() returns a reversed copy.

const numbers18 = [1, 2, 3];

const reversedNumbers = numbers18.toReversed();

console.log(reversedNumbers);
console.log(numbers18);

// Original remains unchanged.

//* ============================================================
//* Array.isArray()
//* ============================================================

// Checks whether a value is an array.

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray({})); // false

//* ============================================================
//* NESTED ARRAYS
//* ============================================================

// Arrays can contain other arrays.

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0]);
console.log(matrix[0][1]);

// Output:
// [1, 2, 3]
// 2

//* ============================================================
//* LOOP THROUGH ARRAY — FOR LOOP
//* ============================================================

const numbers19 = [10, 20, 30, 40];

for (let i = 0; i < numbers19.length; i++) {
  console.log(numbers19[i]);
}

//* ============================================================
//* LOOP THROUGH ARRAY — for...of
//* ============================================================

// for...of gives us the VALUES.

for (const number of numbers19) {
  console.log(number);
}

//* ============================================================
//* for...in WITH ARRAYS
//* ============================================================

// for...in gives property KEYS/indexes.
//
// It is generally not the preferred choice
// for iterating array values.

for (const index in numbers19) {
  console.log(index, numbers19[index]);
}

//* ============================================================
//* ARRAY DESTRUCTURING
//* ============================================================

// Destructuring allows us to extract values.

const colors2 = ["Red", "Green", "Blue"];

const [firstColor, secondColor, thirdColor] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

//* ============================================================
//* REST WITH ARRAY DESTRUCTURING
//* ============================================================

const numbers20 = [1, 2, 3, 4, 5];

const [firstNumber2, secondNumber2, ...rest] = numbers20;

console.log(firstNumber2);
console.log(secondNumber2);
console.log(rest);

// Output:
// 1
// 2
// [3, 4, 5]

//* ============================================================
//* SPREAD OPERATOR WITH ARRAYS
//* ============================================================

// ... spreads array elements.

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

const merged = [...arr3, ...arr4];

console.log(merged);

// Output:
// [1, 2, 3, 4, 5, 6]

//* ============================================================
//* COPY AN ARRAY
//* ============================================================

// This does NOT create a new array:
//
// const copy = arr3;
//
// Both variables refer to the same array.
//
// Use spread for a shallow copy:

const originalArray = [1, 2, 3];

const copiedArray = [...originalArray];

copiedArray.push(4);

console.log(originalArray);
console.log(copiedArray);

// Output:
// [1, 2, 3]
// [1, 2, 3, 4]

//* ============================================================
//* FLAT()
//* ============================================================

// flat() removes nested array levels.

const nested = [1, [2, 3], [4, [5, 6]]];

console.log(nested.flat());

// Output:
// [1, 2, 3, 4, [5, 6]]

// flat(Infinity) removes all nested levels:

console.log(nested.flat(Infinity));

// Output:
// [1, 2, 3, 4, 5, 6]

//* ============================================================
//* FLATMAP()
//* ============================================================

// flatMap() performs map() and then flattens one level.

const nums = [1, 2, 3];

const result2 = nums.flatMap((number) => {
  return [number, number * 2];
});

console.log(result2);

// Output:
// [1, 2, 2, 4, 3, 6]

//* ============================================================
//* PRACTICAL ARRAY — USERS
//* ============================================================

const users = [
  { name: "Ravi", age: 21 },
  { name: "Aman", age: 17 },
  { name: "Rahul", age: 25 },
];

// Get names:

const userNames = users.map((user) => user.name);

console.log(userNames);

// Get adults:

const adults = users.filter((user) => user.age >= 18);

console.log(adults);

// Find Ravi:

const ravi = users.find((user) => user.name === "Ravi");

console.log(ravi);

// Check whether any user is under 18:

const hasMinor = users.some((user) => user.age < 18);

console.log(hasMinor);

// Check whether everyone is an adult:

const everyoneAdult = users.every((user) => user.age >= 18);

console.log(everyoneAdult);

//* ============================================================
//* METHOD CHAINING
//* ============================================================

// Array methods can be chained together.

const prices2 = [100, 200, 300, 400];

const finalResult = prices2
  .filter((price) => price >= 200)
  .map((price) => price * 0.9);

console.log(finalResult);

// Flow:
//
// [100, 200, 300, 400]
//          ↓ filter
// [200, 300, 400]
//          ↓ map
// [180, 270, 360]

//* ============================================================
//* MUTATING VS NON-MUTATING METHODS
//* ============================================================

// MUTATE original array:
//
// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()
//
// NON-MUTATING / RETURN NEW RESULT:
//
// slice()
// concat()
// map()
// filter()
// flat()
// toSorted()
// toReversed()

// Important:
// Some methods return values but also modify the original.
//
// Always check the method's behavior when working
// with React state or shared data.

//* ============================================================
//* ARRAY METHODS — MEMORY MAP
//* ============================================================

// ADD / REMOVE
//
// push()    → add at END
// pop()     → remove from END
// unshift() → add at START
// shift()   → remove from START
//
// CHANGE
//
// splice()  → add/remove/replace
//
// EXTRACT
//
// slice()   → copy a portion
//
// SEARCH
//
// includes()    → value exists?
// indexOf()     → first index
// lastIndexOf() → last index
// find()        → first matching VALUE
// findIndex()   → first matching INDEX
//
// TRANSFORM
//
// map()     → transform every element
//
// SELECT
//
// filter()  → select matching elements
//
// CHECK
//
// some()    → at least one?
// every()   → all?
//
// COMBINE
//
// reduce()  → many values → one value
//
// LOOP
//
// forEach() → perform action for every element
//
// SORT / REVERSE
//
// sort()
// reverse()
// toSorted()
// toReversed()
//
// CONVERT
//
// join() → Array → String

//* ============================================================
//* MOST IMPORTANT METHODS TO MASTER
//* ============================================================

// Beginner:
//
// length
// push()
// pop()
// shift()
// unshift()
// slice()
// splice()
// includes()
// indexOf()
//
// Intermediate:
//
// forEach()
// map()
// filter()
// find()
// findIndex()
// some()
// every()
// reduce()
//
// Advanced / Practical:
//
// sort()
// flat()
// flatMap()
// toSorted()
// toReversed()
// destructuring
// spread operator
// method chaining

//* ============================================================
//* COMMON MISTAKES
//* ============================================================

// Mistake 1:
// Using <= instead of <
//
// Wrong:
//
// for (let i = 0; i <= arr.length; i++)
//
// Correct:
//
// for (let i = 0; i < arr.length; i++)
//
// Because the last valid index is:
//
// arr.length - 1

//* ============================================================
//* COMMON MISTAKE — slice VS splice
//* ============================================================

// slice() → DOES NOT modify original
// splice() → DOES modify original

//* ============================================================
//* COMMON MISTAKE — sort NUMBERS
//* ============================================================

// Wrong:
//
// numbers.sort();
//
// Correct:
//
// numbers.sort((a, b) => a - b);

//* ============================================================
//* COMMON MISTAKE — map WITHOUT RETURN
//* ============================================================

// Wrong:

const wrongMap = [1, 2, 3].map((number) => {
  number * 2;
});

console.log(wrongMap);

// Output:
// [undefined, undefined, undefined]

// Correct:

const correctMap = [1, 2, 3].map((number) => {
  return number * 2;
});

console.log(correctMap);

// Or implicit return:

const shortMap = [1, 2, 3].map((number) => number * 2);

console.log(shortMap);

//* ============================================================
//* GOLDEN MEMORY TRICK
//* ============================================================

// PUSH     → END ADD
// POP      → END REMOVE
//
// UNSHIFT  → START ADD
// SHIFT    → START REMOVE
//
// SLICE    → TAKE A PIECE
// SPLICE   → CHANGE ORIGINAL
//
// MAP      → TRANSFORM
// FILTER   → SELECT
// FIND     → FIRST MATCH
//
// SOME     → AT LEAST ONE
// EVERY    → ALL
//
// REDUCE   → MANY → ONE
// FOREACH  → DO SOMETHING
//
// SORT     → ORDER
// REVERSE  → BACKWARD
//
// SPLIT    → String → Array
// JOIN     → Array → String

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// When you see an array problem, first ask:
//
// "What do I need to do?"
//
// Need to ADD?
// → push / unshift
//
// Need to REMOVE?
// → pop / shift / splice
//
// Need a PIECE?
// → slice
//
// Need to TRANSFORM?
// → map
//
// Need to SELECT?
// → filter
//
// Need the FIRST MATCH?
// → find
//
// Need to CHECK ONE?
// → some
//
// Need to CHECK ALL?
// → every
//
// Need ONE FINAL VALUE?
// → reduce
//
// Need to DO SOMETHING for each?
// → forEach
//
// ⭐ ARRAY PROBLEM-SOLVING FORMULA:
//
// ARRAY
//   ↓
// UNDERSTAND DATA
//   ↓
// CHOOSE OPERATION
//   ↓
// USE METHOD / LOOP
//   ↓
// GET RESULT
