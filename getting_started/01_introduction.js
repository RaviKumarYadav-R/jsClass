//* ============================================================
//* JAVASCRIPT — INTRODUCTION
//* ============================================================

//* 1. What is Programming?
// Programming is the process of giving instructions to a computer
// so that it can perform a specific task.

// Think of programming as communicating with a computer.

// Human communication:
// Hindi / English / Bengali
//
// Computer communication:
// Programming languages such as JavaScript, Python, C++, Java, etc.

// Example:
console.log("Hello World");

// Here we are telling JavaScript:
// "Print Hello World on the console."

//* ============================================================
//* 2. Why Do We Need JavaScript?
//* ============================================================

// A website can be understood using 3 main technologies:
//
// HTML       → Structure
// CSS        → Styling
// JavaScript → Behavior / Interactivity

//* Easy Memory Trick:
//
// HTML = What is on the page?
// CSS  = How does it look?
// JS   = How does it behave?

// Example:
//
// HTML:
// <button>Click Me</button>
//
// CSS:
// Makes the button beautiful.
//
// JavaScript:
// Makes the button do something when clicked.

//* Real-world example:
//
// HTML → Creates a door
// CSS  → Paints/decorates the door
// JS   → Opens/closes the door when someone interacts with it

//* ============================================================
//* 3. HTML vs CSS vs JavaScript
//* ============================================================

// Imagine a house:
//
// HTML
// → Walls
// → Rooms
// → Doors
// → Windows
//
// CSS
// → Paint
// → Colors
// → Furniture styling
// → Decoration
//
// JavaScript
// → Lights
// → Switches
// → Automatic doors
// → Security system
// → Interactions

//* Without JavaScript:
// A website can still look beautiful,
// but many interactive behaviors won't exist.

// JavaScript allows us to:
//
// → Click buttons
// → Open/close menus
// → Show/hide elements
// → Validate forms
// → Create sliders
// → Create modals
// → Make animations interactive
// → Fetch data from APIs
// → Update page content
// → Build games
// → Build web applications

//* ============================================================
//* 4. What is JavaScript?
//* ============================================================

// JavaScript is a high-level programming language
// commonly used to add behavior and interactivity
// to web applications.

// JavaScript is:
//
// → A programming language
// → Dynamically typed
// → Object-based / object-oriented in its programming model
// → Multi-paradigm
// → Widely used for web development
// → Used on both frontend and backend

//* Example:

const name = "Ravi";

console.log(`Hello ${name}`);

// JavaScript executes this code
// and prints:
// Hello Ravi

//* ============================================================
//* 5. What Can JavaScript Do?
//* ============================================================

// JavaScript can interact with:
//
// → HTML
// → CSS
// → Browser APIs
// → Servers
// → Databases (through backend technologies)
// → APIs
// → Files (depending on environment)
// → Hardware/IoT (through appropriate runtimes/libraries)

//* Example: Changing HTML

document.body.innerHTML = "<h1>Hello JavaScript!</h1>";

// JavaScript can access the webpage
// and change its content.

//* Example: Button interaction

// HTML:
// <button id="btn">Click Me</button>

const button = document.querySelector("#btn");

button?.addEventListener("click", () => {
  console.log("Button clicked!");
});

// When the button is clicked,
// JavaScript runs the function.

//* ============================================================
//* 6. Where Does JavaScript Run?
//* ============================================================

// JavaScript can run in different environments.

// 1. Browser
// 2. Server
// 3. Other JavaScript runtimes

//* Browser
//
// Examples:
// → Chrome
// → Firefox
// → Edge
// → Safari
//
// Browsers contain JavaScript engines that execute JavaScript.

//* Server
//
// Node.js allows JavaScript to run outside the browser.
//
// Example:
//
// Browser
//     ↓
// React / JavaScript
//     ↓
// API Request
//     ↓
// Node.js
//     ↓
// Database

//* ============================================================
//* 7. What is Node.js?
//* ============================================================

// Node.js is a JavaScript runtime.
//
// It allows JavaScript code to run outside the browser.

// Before Node.js became popular,
// JavaScript was mainly associated with web browsers.
//
// With Node.js, JavaScript can be used for:
//
// → Backend APIs
// → Web servers
// → CLI tools
// → Automation
// → Real-time applications
// → Build tools

//* Example Node.js code:

console.log("JavaScript running outside the browser!");

//* Important:
//
// Node.js is NOT JavaScript itself.
//
// JavaScript = Programming language
// Node.js    = Runtime that can execute JavaScript

//* ============================================================
//* 8. Frontend vs Backend
//* ============================================================

// FRONTEND
// → Runs mainly in the user's browser
// → User interface
// → Buttons
// → Forms
// → Animations
// → Client-side logic

// Technologies:
//
// HTML
// CSS
// JavaScript
// React
// Vue
// Angular

//* BACKEND
// → Runs on the server
// → Business logic
// → Authentication
// → APIs
// → Database communication
// → Server-side processing

// Technologies:
//
// Node.js
// Express
// NestJS
// etc.

//* Example architecture:
//
// User
//   ↓
// Frontend
//   ↓
// HTTP Request
//   ↓
// Backend API
//   ↓
// Database
//   ↓
// Backend
//   ↓
// Response
//   ↓
// Frontend

//* ============================================================
//* 9. What is ECMAScript?
//* ============================================================

// ECMAScript is the standardized specification
// that defines the core rules and features of the language
// commonly implemented by JavaScript engines.

// Easy way to remember:
//
// ECMAScript = Standard / Specification
// JavaScript  = Language implementation based on that standard

//* Think of it like:
//
// ECMAScript → Rule book
// JavaScript  → Language implementing those rules

//* Important:
//
// JavaScript is not simply "another name" for ECMAScript.
// JavaScript implementations follow the ECMAScript specification
// while also providing environment-specific APIs.

//* ============================================================
//* 10. ECMAScript Versions
//* ============================================================

// JavaScript has evolved through many ECMAScript editions.

// ES1
// → ECMAScript 1
// → Released in 1997

// ES5
// → ECMAScript 5
// → Released in 2009
// → Important foundation for modern JavaScript

// ES6
// → ECMAScript 2015
// → Released in 2015
// → One of the biggest updates in JavaScript

//* ES6 introduced many important features:
//
// → let
// → const
// → Arrow functions
// → Template literals
// → Destructuring
// → Default parameters
// → Rest parameters
// → Spread syntax
// → Classes
// → Promises
// → Modules
// → Map
// → Set

//* After ES6:
//
// ECMAScript versions are generally named by year.
//
// ES2016
// ES2017
// ES2018
// ES2019
// ...
// ES2024
// etc.

//* ============================================================
//* 11. What is ES6?
//* ============================================================

// ES6 = ECMAScript 2015
//
// It was a major update to JavaScript.

// Example:

const user = "Ravi";

const greet = () => {
  console.log(`Hello ${user}`);
};

greet();

// ES6 made JavaScript code:
//
// → Cleaner
// → More readable
// → More powerful
// → Easier to structure

//* ============================================================
//* 12. JavaScript File Extension
//* ============================================================

// JavaScript files normally use:
//
// .js

// Example:
//
// app.js
// script.js
// main.js
// server.js

//* ============================================================
//* 13. JavaScript Libraries and Frameworks
//* ============================================================

// JavaScript itself is the language.
//
// Libraries and frameworks are tools built around it.

// Popular frontend technologies:
//
// React
// Vue
// Angular

//* Popular backend/runtime technologies:
//
// Node.js
// Express

//* Important:
//
// React is NOT JavaScript.
// React is a JavaScript library.
//
// Node.js is NOT JavaScript.
// Node.js is a JavaScript runtime.
//
// Express is NOT JavaScript.
// Express is a framework for Node.js.

//* ============================================================
//* 14. JavaScript Is Used for More Than Websites
//* ============================================================

// JavaScript can be used for:
//
// Web applications
// Backend applications
// APIs
// Mobile applications
// Desktop applications
// Browser extensions
// Automation
// CLI tools
// Games
// IoT projects

//* Examples of ecosystems:
//
// Web              → Browser JavaScript
// Backend          → Node.js
// Mobile           → React Native
// Desktop          → Electron
// IoT               → JavaScript runtimes/tools

//* ============================================================
//* 15. First JavaScript Program
//* ============================================================

console.log("Hello World");

// console.log() prints a value to the console.

// Another example:

console.log(10 + 20);

// Output:
// 30

//* ============================================================
//* 16. How JavaScript Executes a Simple Program
//* ============================================================

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Output:
//
// Step 1
// Step 2
// Step 3

//* By default, JavaScript executes statements
// in program order.

// Mental model:
//
// Code
//   ↓
// JavaScript Engine
//   ↓
// Execute instructions
//   ↓
// Output / Side Effect

//* ============================================================
//* 17. JavaScript Engine
//* ============================================================

// A JavaScript engine is software that executes JavaScript.

// Examples:
//
// Chrome / Edge → V8
// Firefox       → SpiderMonkey
// Safari        → JavaScriptCore

//* Simple mental model:
//
// JavaScript Code
//       ↓
// JavaScript Engine
//       ↓
// Machine-executable operations
//       ↓
// Result

//* ============================================================
//* 18. JavaScript Is Dynamically Typed
//* ============================================================

// In JavaScript, you don't normally declare the type
// of a variable explicitly.

// Example:

let value = 10;

console.log(value);

value = "Hello";

console.log(value);

// The same variable can hold different types of values
// during execution.

// This is called dynamic typing.

//* ============================================================
//* 19. JavaScript Is Case-Sensitive
//* ============================================================

const username = "Ravi";

// username and Username are different identifiers.

// console.log(Username); // ReferenceError

console.log(username);

//* ============================================================
//* 20. Comments in JavaScript
//* ============================================================

// Single-line comment

/*
    Multi-line comment
*/

// Comments are ignored by JavaScript.

// They are used to:
//
// → Explain code
// → Leave notes
// → Temporarily disable code
// → Help other developers understand logic

//* ============================================================
//* 21. JavaScript in HTML
//* ============================================================

// JavaScript can be added to HTML using <script>.

// Example:
//
// <script>
//     console.log("Hello JavaScript");
// </script>

// Or using an external file:
//
// <script src="script.js"></script>

// External JavaScript files are usually preferred
// for larger projects because they keep HTML and JS separate.

//* ============================================================
//* 22. What You Should Remember
//* ============================================================

// HTML
// → Structure

// CSS
// → Presentation / Styling

// JavaScript
// → Behavior / Logic / Interactivity

// ECMAScript
// → Standard/specification

// JavaScript Engine
// → Executes JavaScript

// Browser
// → JavaScript + Web APIs + rendering environment

// Node.js
// → JavaScript runtime outside the browser

// React
// → JavaScript library

// Express
// → Node.js web framework

//* ============================================================
//* MEMORY TRICK
//* ============================================================

// Remember this:
//
// HTML = BODY
// CSS  = CLOTHES
// JS   = BRAIN / BEHAVIOR
//
// ECMAScript = RULE BOOK
// JavaScript  = LANGUAGE
// Engine      = EXECUTOR
// Node.js     = RUNTIME
//
//
// Final mental model:
//
//             JavaScript
//                  ↓
//          ┌───────┴───────┐
//          ↓               ↓
//       Browser          Node.js
//          ↓               ↓
//      Frontend          Backend
//          ↓               ↓
//       Web APIs          APIs
//                          ↓
//                       Database

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// Don't memorize JavaScript as random syntax.
//
// Understand this:
//
// 1. What problem does this feature solve?
// 2. What value goes into it?
// 3. What happens internally?
// 4. What comes out?
// 5. Where would I actually use it?

// Once you understand these 5 questions,
// JavaScript becomes much easier to learn.
