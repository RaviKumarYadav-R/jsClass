//* ============================================================
//* JAVASCRIPT EXECUTION
//* ============================================================

//* 1. Do We Need to Install JavaScript?
//* ============================================================

// NO! You normally do NOT install JavaScript separately
// to run JavaScript in a web browser.
//
// Modern browsers already contain:
//
// → JavaScript Engine
// → Web APIs
// → Developer Tools / Console

//* Examples of browsers:
//
// Chrome
// Firefox
// Edge
// Safari

//* Simple mental model:
//
// Browser
//    ↓
// JavaScript Engine
//    ↓
// Executes JavaScript code

//* IMPORTANT:
//
// JavaScript = Programming language
// Browser     = Environment where browser JavaScript runs
// Engine      = Software that executes JavaScript

//* ============================================================
//* 2. JavaScript Engine
//* ============================================================

// A JavaScript engine is the software responsible for
// executing JavaScript code.

// Examples:
//
// Chrome → V8
// Edge   → V8
// Firefox → SpiderMonkey
// Safari → JavaScriptCore

//* Mental model:
//
// JavaScript Code
//       ↓
// JavaScript Engine
//       ↓
// Execution
//       ↓
// Result

//* ============================================================
//* 3. First Way — Browser Console
//* ============================================================

// The browser provides a JavaScript console
// through Developer Tools.

// In Chrome:
//
// 1. Open Chrome
// 2. Right-click → Inspect
// 3. Open Console
// 4. Write JavaScript
// 5. Press Enter

//* Example:

console.log("Hello, JavaScript!");

// Output:
//
// Hello, JavaScript!

//* You can also perform calculations:

console.log(10 + 20);

// Output:
// 30

//* You can create variables:

let name = "Ravi";

console.log(name);

// Output:
// Ravi

//* You can execute functions:

function greet() {
  console.log("Hello!");
}

greet();

// Output:
// Hello!

//* ============================================================
//* 4. Why Is the Browser Console Useful?
//* ============================================================

// Console is excellent for:
//
// → Testing small pieces of code
// → Debugging
// → Checking variable values
// → Testing JavaScript syntax
// → Experimenting with APIs
// → Understanding JavaScript behavior

//* Example:

const age = 21;

console.log(age);
console.log(age + 10);

// Output:
//
// 21
// 31

//* Think of Console as:
//
// "JavaScript Playground"

//* ============================================================
//* 5. Second Way — JavaScript Inside HTML
//* ============================================================

// JavaScript can be written directly inside HTML
// using the <script> element.

//* Example:
//
// <!DOCTYPE html>
// <html>
// <head>
//     <title>JavaScript</title>
// </head>
//
// <body>
//
//     <h1>Hello World</h1>
//
//     <script>
//         console.log("JavaScript is running!");
//     </script>
//
// </body>
// </html>

// When the browser loads the HTML:
//
// HTML
//   ↓
// Browser parses HTML
//   ↓
// Finds <script>
//   ↓
// JavaScript is executed
//   ↓
// Console shows the result

//* ============================================================
//* 6. Example of <script>
//* ============================================================

// Complete example:
//
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>JavaScript Example</title>
// </head>
//
// <body>
//
//     <h1>Hello JavaScript!</h1>
//
//     <script>
//         console.log("Hello from JavaScript!");
//         alert("Welcome to JavaScript!");
//     </script>
//
// </body>
// </html>

// Two things happen:
//
// console.log()
// → Prints message in Developer Console
//
// alert()
// → Displays a browser popup

//* ============================================================
//* 7. What Happens When We Open the HTML File?
//* ============================================================

// Suppose we have:
//
// index.html
//
// Inside it:
//
// <script>
//     console.log("Hello");
// </script>

// Browser loads:
//
// index.html
//      ↓
// HTML is parsed
//      ↓
// <script> is encountered
//      ↓
// JavaScript code is passed to the JS engine
//      ↓
// JavaScript executes
//      ↓
// "Hello" appears in Console

//* ============================================================
//* 8. External JavaScript File
//* ============================================================

// Instead of writing JavaScript directly inside HTML,
// we can create a separate .js file.
//
// Example:
//
// project/
// │
// ├── index.html
// └── script.js

//* script.js:

console.log("External JavaScript is running!");

//* index.html:
//
// <!DOCTYPE html>
// <html>
// <head>
//     <title>My Website</title>
// </head>
//
// <body>
//
//     <h1>My Website</h1>
//
//     <script src="script.js"></script>
//
// </body>
// </html>

// The browser loads:
//
// index.html
//      ↓
// <script src="script.js">
//      ↓
// Downloads/loads script.js
//      ↓
// JavaScript engine executes it

//* ============================================================
//* 9. Why Use an External JavaScript File?
//* ============================================================

// External files are preferred for larger projects because
// they keep HTML and JavaScript separate.
//
// Benefits:
//
// → Cleaner HTML
// → Easier maintenance
// → Reusable code
// → Better project organization
// → Easier debugging
// → Browser caching can improve repeated loads

//* ============================================================
//* 10. Three Common Ways to Execute JavaScript
//* ============================================================

//* Method 1 — Browser Console

console.log("Hello from Console");

//* Method 2 — Inline <script>

// <script>
//     console.log("Hello from HTML");
// </script>

//* Method 3 — External .js file

// <script src="script.js"></script>

//* ============================================================
//* 11. Browser vs Node.js
//* ============================================================

// JavaScript can run in different environments.
//
// Browser
//   ↓
// Browser JavaScript environment
//
// Node.js
//   ↓
// Server-side / general-purpose JavaScript runtime

//* Browser example:

console.log("Running in a browser");

//* Node.js example:

console.log("Running in Node.js");

//* The syntax may look similar,
// but the available APIs are different.

//* Browser provides APIs such as:
//
// document
// window
// localStorage
// DOM
// alert
//
// Node.js provides APIs such as:
//
// fs
// process
// path
// http

//* IMPORTANT:
//
// `document` is provided by the browser environment.
// It is not part of the ECMAScript language itself.

//* ============================================================
//* 12. JavaScript vs Browser APIs
//* ============================================================

// This distinction is VERY important.

// ECMAScript
// → Core JavaScript language specification
//
// Browser Web APIs
// → Features provided by the browser

//* Examples of core JavaScript:
//
// let
// const
// function
// Array
// Object
// Promise
// Map
// Set
// JSON
// Math

//* Examples of browser APIs:
//
// document
// window
// localStorage
// fetch
// setTimeout
// alert

//* NOTE:
//
// Some APIs commonly used in browsers, such as fetch()
// and setTimeout(), are environment APIs rather than
// core ECMAScript language features.

//* ============================================================
//* 13. What Does console.log() Actually Do?
//* ============================================================

// console is an object provided by the environment.
//
// log() is a method on that object.

console.log("Hello");

//* We are essentially saying:
//
// console
//   ↓
// use its log method
//   ↓
// print/display this value in the developer console

//* ============================================================
//* 14. JavaScript Execution Is Not the Same as HTML Rendering
//* ============================================================

// When a browser loads a webpage,
// multiple things happen:
//
// HTML → Parsed
// CSS  → Parsed + Applied
// JS   → Executed by JavaScript engine
//
// These parts work together to create the webpage.

//* Example:
//
// HTML creates:
//
// <button>Click</button>
//
// CSS styles the button.
//
// JavaScript gives the button behavior.

//* ============================================================
//* 15. JavaScript Can Change the Webpage
//* ============================================================

// Example:

document.body.innerHTML = "<h1>Hello JavaScript!</h1>";

//* Here:
//
// document
// → Browser-provided object representing the webpage
//
// body
// → The page's <body>
//
// innerHTML
// → Allows us to read/change HTML inside an element

//* Result:
//
// The webpage content changes.

//* ============================================================
//* 16. JavaScript Can React to User Actions
//* ============================================================

// Example HTML:
//
// <button id="btn">Click Me</button>

// JavaScript:

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

//* Execution flow:
//
// User clicks button
//       ↓
// Browser detects click
//       ↓
// Event listener runs
//       ↓
// Callback function executes
//       ↓
// "Button clicked!" appears in console

//* ============================================================
//* 17. Does JavaScript Always Execute Immediately?
//* ============================================================

// Not necessarily.

// Normal synchronous code executes as JavaScript reaches it.

console.log("A");
console.log("B");
console.log("C");

// Output:
//
// A
// B
// C

//* But asynchronous operations can complete later.
//
// Example:

console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 1000);

console.log("End");

// Typical output:
//
// Start
// End
// Timer finished

//* Don't worry about WHY yet.
//
// Event loop, callbacks, promises, and asynchronous execution
// will be covered later.

//* ============================================================
//* 18. The Basic Execution Mental Model
//* ============================================================

// Remember:
//
//              JavaScript Code
//                     ↓
//             JavaScript Engine
//                     ↓
//               Execute Code
//                     ↓
//          ┌──────────┴──────────┐
//          ↓                     ↓
//      Calculate              Interact
//          ↓                     ↓
//       Values            Browser / APIs

//* ============================================================
//* 19. Common Beginner Mistakes
//* ============================================================

//* Mistake 1:
//
// Thinking JavaScript must be installed separately.
//
// ❌ JavaScript itself doesn't need a separate browser install.
//
// ✅ Modern browsers already provide a JavaScript engine.

//* Mistake 2:
//
// Thinking Node.js = JavaScript.
//
// ❌ Wrong.
//
// JavaScript = Language
// Node.js    = Runtime

//* Mistake 3:
//
// Thinking document is JavaScript itself.
//
// ❌ document is a browser-provided API.
//
// ✅ JavaScript can interact with document when running
//    in a browser environment.

//* Mistake 4:
//
// Using browser-only APIs in Node.js.
//
// Example:
//
// document.querySelector("h1");
//
// This won't work in normal Node.js because Node.js
// does not provide the browser DOM by default.

//* ============================================================
//* 20. Quick Comparison
//* ============================================================
//
// ┌────────────────────┬─────────────────────────────┐
// │ Concept            │ Meaning                     │
// ├────────────────────┼─────────────────────────────┤
// │ JavaScript         │ Programming language        │
// │ ECMAScript         │ Language specification     │
// │ JS Engine          │ Executes JavaScript        │
// │ Browser            │ JS execution environment   │
// │ Node.js            │ JS runtime outside browser │
// │ Console            │ Testing/debugging area     │
// │ <script>           │ Loads/runs JavaScript      │
// │ .js                │ JavaScript source file     │
// └────────────────────┴─────────────────────────────┘

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// Remember these 5 things:
//
// 1. JavaScript is a programming language.
//
// 2. You don't need to separately install JavaScript
//    to run it in a modern browser.
//
// 3. A JavaScript engine executes JavaScript code.
//
// 4. Browser APIs give JavaScript access to browser features.
//
// 5. Node.js allows JavaScript to run outside the browser.

//* FINAL MEMORY TRICK
//* ============================================================

// JavaScript
//      ↓
// Language
//
// JavaScript Engine
//      ↓
// Executes Language
//
// Browser
//      ↓
// Provides Environment + Web APIs
//
// Node.js
//      ↓
// Provides Another Runtime + APIs
//
// So:
//
// LANGUAGE → ENGINE → RUNTIME/ENVIRONMENT → RESULT

//* ============================================================
//* PRACTICE
//* ============================================================

// Try these in the browser Console:

console.log("Hello");

console.log(25 + 25);

console.log("JavaScript".length);

const user = "Ravi";
console.log(user);

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// If you can understand what each line does,
// you're ready for the next chapter.
