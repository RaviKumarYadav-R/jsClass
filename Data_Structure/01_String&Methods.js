//* ============================================================
//* STRINGS IN JAVASCRIPT
//* ============================================================

// A string is a sequence of characters.
//
// Characters can include:
// letters, numbers, spaces, symbols, emojis, etc.
//
// Examples:

const name = "Ravi";
const city = "Nawada";
const message = `Hello World`;

console.log(name);
console.log(city);
console.log(message);

//* ============================================================
//* THREE WAYS TO CREATE STRINGS
//* ============================================================

// 1. Single quotes

const str1 = "Hello";

// 2. Double quotes

const str2 = "Hello";

// 3. Backticks / Template Literals

const str3 = `Hello`;

// All three create strings.

//* ============================================================
//* TEMPLATE LITERALS
//* ============================================================

// Backticks allow us to insert variables directly
// using ${expression}.

const userName = "Ravi";
const age = 21;

const intro = `My name is ${userName} and I am ${age} years old.`;

console.log(intro);

// Output:
// My name is Ravi and I am 21 years old.

// You can also use expressions:

console.log(`10 + 20 = ${10 + 20}`);

//* ============================================================
//* STRING INDEX
//* ============================================================

// Every character has an index.
//
// Index starts from 0.
//
// "Hello"
//
// H → 0
// e → 1
// l → 2
// l → 3
// o → 4

const word = "Hello";

console.log(word[0]); // H
console.log(word[1]); // e
console.log(word[4]); // o

//* ============================================================
//* length
//* ============================================================

// .length tells us the number of characters.
//
// IMPORTANT:
// Spaces are also characters.

const text = "Hello World";

console.log(text.length);

// Output:
// 11
//
// H e l l o _ W o r l d
// 1 2 3 4 5 6 7 8 9 10 11

//* ============================================================
//* LAST CHARACTER
//* ============================================================

// Last index = length - 1

const language = "JavaScript";

console.log(language[language.length - 1]);

// Output:
// t

//* ============================================================
//* charAt()
//* ============================================================

// charAt(index) returns the character at a given index.

const word2 = "Hello";

console.log(word2.charAt(0)); // H
console.log(word2.charAt(3)); // l

//* ============================================================
//* toUpperCase()
//* ============================================================

// Converts the string to uppercase.

const greeting = "Hello World";

console.log(greeting.toUpperCase());

// Output:
// HELLO WORLD

//* ============================================================
//* toLowerCase()
//* ============================================================

// Converts the string to lowercase.

console.log(greeting.toLowerCase());

// Output:
// hello world

//* ============================================================
//* trim()
//* ============================================================

// Removes whitespace from BOTH ends.

const username = "   Ravi   ";

console.log(username.trim());

// Output:
// Ravi

// IMPORTANT:
// trim() does NOT remove spaces in the middle.

const fullName = "  Ravi Kumar  ";

console.log(fullName.trim());

// Output:
// Ravi Kumar

//* ============================================================
//* trimStart()
//* ============================================================

// Removes whitespace from the beginning.

const value1 = "   Hello";

console.log(value1.trimStart());

// Output:
// Hello

//* ============================================================
//* trimEnd()
//* ============================================================

// Removes whitespace from the end.

const value2 = "Hello   ";

console.log(value2.trimEnd());

// Output:
// Hello

//* ============================================================
//* includes()
//* ============================================================

// Checks whether a string contains another string.
//
// Returns:
// true / false

const sentence = "JavaScript is powerful";

console.log(sentence.includes("JavaScript")); // true
console.log(sentence.includes("Python")); // false

//* ============================================================
//* startsWith()
//* ============================================================

// Checks whether a string starts with specific text.

const url = "https://example.com";

console.log(url.startsWith("https")); // true
console.log(url.startsWith("http")); // true

//* ============================================================
//* endsWith()
//* ============================================================

// Checks whether a string ends with specific text.

const file = "profile.jpg";

console.log(file.endsWith(".jpg")); // true
console.log(file.endsWith(".png")); // false

//* ============================================================
//* indexOf()
//* ============================================================

// Finds the first occurrence of a character/string.
//
// Returns:
// index → found
// -1    → not found

const text2 = "Hello World";

console.log(text2.indexOf("W")); // 6
console.log(text2.indexOf("World")); // 6
console.log(text2.indexOf("X")); // -1

//* ============================================================
//* lastIndexOf()
//* ============================================================

// Finds the LAST occurrence.

const repeated = "hello hello hello";

console.log(repeated.indexOf("hello")); // 0
console.log(repeated.lastIndexOf("hello")); // 12

//* ============================================================
//* SEARCHING WITH indexOf()
//* ============================================================

// Very useful for conditions.

const email = "ravi@gmail.com";

if (email.indexOf("@") !== -1) {
  console.log("Valid format");
}

// includes() is usually easier when you only need
// true/false:

if (email.includes("@")) {
  console.log("Contains @");
}

//* ============================================================
//* slice()
//* ============================================================

// slice(start, end)
//
// start → included
// end   → NOT included

const word3 = "JavaScript";

console.log(word3.slice(0, 4));

// Output:
// Java

//* ============================================================
//* slice() — FROM A POSITION
//* ============================================================

console.log(word3.slice(4));

// Output:
// Script

//* ============================================================
//* slice() — NEGATIVE INDEX
//* ============================================================

// Negative index counts from the end.

const text3 = "JavaScript";

console.log(text3.slice(-6));

// Output:
// Script

console.log(text3.slice(-3));

// Output:
// ipt

//* ============================================================
//* substring()
//* ============================================================

// Similar to slice(), but handles negative values differently.
//
// substring(start, end)

const text4 = "JavaScript";

console.log(text4.substring(0, 4));

// Output:
// Java

// For modern code, slice() is generally more flexible.

//* ============================================================
//* concat()
//* ============================================================

// Combines strings.

const first = "Hello";
const second = " World";

console.log(first.concat(second));

// Output:
// Hello World

// Usually + or template literals are easier to read:

console.log(first + second);

console.log(`${first}${second}`);

//* ============================================================
//* replace()
//* ============================================================

// Replaces the FIRST matching occurrence.

const sentence2 = "I like JavaScript. JavaScript is fun.";

console.log(sentence2.replace("JavaScript", "Python"));

// Output:
// I like Python. JavaScript is fun.

//* ============================================================
//* replaceAll()
//* ============================================================

// Replaces ALL matching occurrences.

const sentence3 = "apple apple apple";

console.log(sentence3.replaceAll("apple", "orange"));

// Output:
// orange orange orange

//* ============================================================
//* replace() WITH REGULAR EXPRESSION
//* ============================================================

// /pattern/g means global replacement.

const fruits = "apple apple apple";

console.log(fruits.replace(/apple/g, "orange"));

// Output:
// orange orange orange

//* ============================================================
//* split()
//* ============================================================

// split() converts a string into an ARRAY.
//
// separator decides where to split.

const names = "Ravi,Aman,Rahul";

console.log(names.split(","));

// Output:
// ["Ravi", "Aman", "Rahul"]

//* ============================================================
//* split(" ")
//* ============================================================

// Split a sentence into words.

const sentence4 = "I love JavaScript";

console.log(sentence4.split(" "));

// Output:
// ["I", "love", "JavaScript"]

//* ============================================================
//* split("")
//* ============================================================

// Splits into individual characters.

const word4 = "Hello";

console.log(word4.split(""));

// Output:
// ["H", "e", "l", "l", "o"]

//* ============================================================
//* join()
//* ============================================================

// join() does the opposite of split().
//
// Array → String

const words = ["I", "love", "JavaScript"];

console.log(words.join(" "));

// Output:
// I love JavaScript

//* ============================================================
//* split() + join()
//* ============================================================

// Very useful combination.

const text5 = "hello world";

const result = text5.split(" ").join("-");

console.log(result);

// Output:
// hello-world

//* ============================================================
//* repeat()
//* ============================================================

// Repeats a string a specified number of times.

const symbol = "*";

console.log(symbol.repeat(5));

// Output:
// *****

console.log("Ha".repeat(3));

// Output:
// HaHaHa

//* ============================================================
//* padStart()
//* ============================================================

// Adds characters to the beginning
// until the string reaches the desired length.

const number = "5";

console.log(number.padStart(3, "0"));

// Output:
// 005

//* ============================================================
//* padEnd()
//* ============================================================

console.log(number.padEnd(3, "0"));

// Output:
// 500

//* ============================================================
//* IMMUTABILITY OF STRINGS
//* ============================================================

// Strings are immutable.
//
// This means string methods do NOT modify the original string.
//
// They return a NEW string.

let original = "hello";

original.toUpperCase();

console.log(original);

// Output:
// hello

// We must store the returned value:

original = original.toUpperCase();

console.log(original);

// Output:
// HELLO

//* ============================================================
//* STRING CHARACTER CANNOT BE CHANGED DIRECTLY
//* ============================================================

let word5 = "Hello";

// This does NOT change the string:
//
// word5[0] = "Y";

console.log(word5);

// Output:
// Hello

// Instead, create a new string:

word5 = "Y" + word5.slice(1);

console.log(word5);

// Output:
// Yello

//* ============================================================
//* COMPARING STRINGS
//* ============================================================

console.log("apple" === "apple"); // true
console.log("apple" === "Apple"); // false

// String comparison is case-sensitive.

//* ============================================================
//* CASE-INSENSITIVE COMPARISON
//* ============================================================

const input = "HELLO";

console.log(input.toLowerCase() === "hello");

// Output:
// true

//* ============================================================
//* STRING + NUMBER
//* ============================================================

// + with a string performs string concatenation.

console.log("10" + 5);

// Output:
// "105"

console.log("Age: " + 21);

// Output:
// Age: 21

//* ============================================================
//* STRING CONVERSION
//* ============================================================

const age2 = 21;

const ageString = String(age2);

console.log(ageString);
console.log(typeof ageString);

// Output:
// 21
// string

//* ============================================================
//* CHARACTER LOOP
//* ============================================================

// Strings are iterable.
//
// Therefore we can use for...of.

const word6 = "Hello";

for (const char of word6) {
  console.log(char);
}

// Output:
// H
// e
// l
// l
// o

//* ============================================================
//* STRING LOOP USING INDEX
//* ============================================================

const text6 = "Hello";

for (let i = 0; i < text6.length; i++) {
  console.log(text6[i]);
}

//* ============================================================
//* COUNT CHARACTERS
//* ============================================================

const word7 = "banana";

let count = 0;

for (const char of word7) {
  if (char === "a") {
    count++;
  }
}

console.log(count);

// Output:
// 3

//* ============================================================
//* REVERSE A STRING
//* ============================================================

// Common beginner problem.

const originalWord = "hello";

let reversed = "";

for (let i = originalWord.length - 1; i >= 0; i--) {
  reversed += originalWord[i];
}

console.log(reversed);

// Output:
// olleh

//* ============================================================
//* CHECK PALINDROME
//* ============================================================

// A palindrome reads the same forward and backward.
//
// Example:
// madam
// level
// racecar

function isPalindrome(word) {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  return word === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

//* ============================================================
//* COUNT WORDS
//* ============================================================

const sentence5 = "JavaScript is very powerful";

const wordCount = sentence5.split(" ").length;

console.log(wordCount);

// Output:
// 4

//* ============================================================
//* REMOVE EXTRA SPACES
//* ============================================================

// trim() removes spaces only from the beginning and end.
//
// For example:

const userInput = "   Ravi Kumar   ";

const cleanedInput = userInput.trim();

console.log(cleanedInput);

// Output:
// Ravi Kumar

//* ============================================================
//* PRACTICAL EMAIL CHECK
//* ============================================================

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("ravi@gmail.com")); // true
console.log(isValidEmail("ravi")); // false

//* ============================================================
//* PRACTICAL USERNAME CLEANING
//* ============================================================

function cleanUsername(username) {
  return username.trim().toLowerCase();
}

console.log(cleanUsername("   RAVI   "));

// Output:
// ravi

//* ============================================================
//* PRACTICAL TITLE FORMATTING
//* ============================================================

function formatTitle(title) {
  return title.trim().toLowerCase();
}

console.log(formatTitle("   JAVASCRIPT BASICS   "));

// Output:
// javascript basics

//* ============================================================
//* COMMON STRING METHODS — QUICK TABLE
//* ============================================================

// length
// → number of characters
//
// toUpperCase()
// → converts to uppercase
//
// toLowerCase()
// → converts to lowercase
//
// trim()
// → removes whitespace from both ends
//
// charAt()
// → gets character at index
//
// includes()
// → checks whether text exists
//
// startsWith()
// → checks beginning
//
// endsWith()
// → checks ending
//
// indexOf()
// → finds first index
//
// lastIndexOf()
// → finds last index
//
// slice()
// → extracts part of string
//
// replace()
// → replaces first match
//
// replaceAll()
// → replaces all matches
//
// split()
// → string → array
//
// concat()
// → combines strings
//
// repeat()
// → repeats string
//
// padStart()
// → adds characters at beginning
//
// padEnd()
// → adds characters at end

//* ============================================================
//* MOST IMPORTANT METHODS TO MASTER FIRST
//* ============================================================

// For beginners, focus on these first:
//
// 1. length
// 2. toUpperCase()
// 3. toLowerCase()
// 4. trim()
// 5. includes()
// 6. indexOf()
// 7. slice()
// 8. replace()
// 9. split()
// 10. charAt()
//
// Then learn:
//
// 11. startsWith()
// 12. endsWith()
// 13. replaceAll()
// 14. substring()
// 15. repeat()
// 16. padStart()
// 17. padEnd()

//* ============================================================
//* MEMORY TRICK
//* ============================================================

// Think of string operations in 5 groups:
//
// 🔎 SEARCH
// includes()
// indexOf()
// lastIndexOf()
// startsWith()
// endsWith()
//
// ✂️ EXTRACT
// slice()
// substring()
// charAt()
//
// 🔄 CHANGE
// toUpperCase()
// toLowerCase()
// replace()
// replaceAll()
//
// 🧹 CLEAN
// trim()
// trimStart()
// trimEnd()
//
// 🔀 CONVERT
// split() → String to Array
// join()  → Array to String

//* ============================================================
//* GOLDEN RULES
//* ============================================================

// 1. String index starts at 0.
//
// 2. Last index = length - 1.
//
// 3. Strings are immutable.
//
// 4. Most string methods return a NEW string.
//
// 5. slice(start, end) includes start but excludes end.
//
// 6. indexOf() returns -1 when the value is not found.
//
// 7. includes() returns true/false.
//
// 8. split() converts String → Array.
//
// 9. join() converts Array → String.
//
// 10. trim() removes whitespace from the edges,
//     NOT from the middle.
//
// 11. String comparisons are case-sensitive.
//
// 12. for...of is useful for looping through characters.
//
// ⭐ Remember:
//
// STRING
//   ↓
// SEARCH → EXTRACT → CHANGE → CLEAN → CONVERT
//
// Master these operations and most beginner
// string problems become much easier.
