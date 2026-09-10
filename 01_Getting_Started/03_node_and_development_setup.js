//* ============================================================
//* NODE.JS — INSTALLATION & FIRST PROGRAM
//* ============================================================

//* 1. What is Node.js?
//* ============================================================

// Node.js is an open-source, cross-platform JavaScript runtime.
//
// It allows us to execute JavaScript outside the browser.
//
// Browser:
// JavaScript → Web Browser
//
// Node.js:
// JavaScript → Computer / Server

//* IMPORTANT:
//
// JavaScript = Programming language
// Node.js    = Runtime environment for JavaScript

//* ============================================================
//* 2. Why Do We Need Node.js?
//* ============================================================

// Traditionally, JavaScript was mainly used inside browsers
// to create interactive webpages.
//
// Node.js allows JavaScript to run outside the browser.

// We can use Node.js for:
//
// → Backend development
// → REST APIs
// → Web servers
// → CLI applications
// → Automation scripts
// → Real-time applications
// → Build tools
// → Development tools

//* Example:
//
// Browser
//     ↓
// Frontend JavaScript
//
// Node.js
//     ↓
// Backend JavaScript
//     ↓
// Database

//* ============================================================
//* 3. Node.js Is NOT a Programming Language
//* ============================================================

// ❌ Node.js is not a new programming language.
//
// ✅ Node.js is a runtime for JavaScript.
//
// We still write JavaScript:

console.log("Hello from Node.js");

// Node.js provides the environment required
// to execute this JavaScript outside the browser.

//* ============================================================
//* 4. What is a Runtime?
//* ============================================================

// A runtime is an environment that provides everything
// required to execute a program.
//
// For JavaScript:
//
// JavaScript
//     ↓
// Runtime
//     ↓
// Execution

//* Browser is one JavaScript runtime environment.
//
// Node.js is another JavaScript runtime environment.

//* ============================================================
//* 5. Browser vs Node.js
//* ============================================================
//
// Browser:
// → Used mainly for frontend
// → Has DOM
// → Has window
// → Has document
// → Has browser Web APIs
//
// Node.js:
// → Used for backend/general-purpose programs
// → Has process
// → Has filesystem APIs
// → Has server/networking APIs
// → Does NOT provide the browser DOM by default

//* Example:
//
// This works in a browser:

document.querySelector("h1");

// This normally does NOT work in Node.js:
//
// document.querySelector("h1");

// Why?
//
// Because `document` is provided by the browser environment,
// not by the core JavaScript language.

//* ============================================================
//* 6. Install Node.js
//* ============================================================

// Official website:
//
// https://nodejs.org
//
// Download Node.js from the official website.
//
// You will generally see:
//
// LTS
// Current

//* ============================================================
//* 7. What is LTS?
//* ============================================================

// LTS = Long-Term Support
//
// LTS versions receive long-term maintenance and are generally
// the recommended choice for production projects and most learners.
//
// Example:
//
// Node.js LTS
//     ↓
// Stable release line
//     ↓
// Long-term support

//* ============================================================
//* 8. What is Current?
//* ============================================================

// Current is the newer feature-focused release line.
//
// It may contain newer features before they reach an LTS line.
//
// For learning and most backend projects:
//
// Prefer → LTS

//* ============================================================
//* 9. Installing Node.js on Windows
//* ============================================================

// Basic process:
//
// 1. Visit the official Node.js website.
// 2. Download the LTS installer.
// 3. Open the downloaded installer.
// 4. Follow the setup instructions.
// 5. Keep the default options unless you know why
//    you need to change them.
// 6. Finish installation.

// The installation provides:
//
// → Node.js
// → npm

//* ============================================================
//* 10. What is npm?
//* ============================================================

// npm is the standard package manager commonly used
// with Node.js projects.
//
// npm allows us to:
//
// → Install packages
// → Remove packages
// → Update packages
// → Manage project dependencies
// → Run project scripts

//* Example:
//
// npm install express
//
// This installs the Express package into a project.

//* IMPORTANT:
//
// Node.js → Runtime
// npm      → Package manager

//* ============================================================
//* 11. Verify Node.js Installation
//* ============================================================

// Open:
//
// → Command Prompt
// → PowerShell
// → VS Code Terminal
// → Other terminal

//* Run:

// node -v

//* Example output:
//
// v22.x.x
//
// Your version may be different.
//
// The important thing is that a version number appears.

//* ============================================================
//* 12. Verify npm Installation
//* ============================================================

// Run:
//
// npm -v

//* Example output:
//
// 10.x.x
//
// Again, the exact version may be different.

//* If both commands work:
//
// node -v
// npm -v
//
// Node.js and npm are available in your terminal.

//* ============================================================
//* 13. What is a Terminal?
//* ============================================================

// A terminal is a text-based interface
// used to communicate with your operating system.
//
// Instead of clicking buttons,
// we type commands.

// Example:

// node -v
// npm -v
// cd project
// mkdir app

//* Think:
//
// Terminal = Place where we give commands to the computer.

//* ============================================================
//* 14. Create Your First Node.js File
//* ============================================================

// Create a file:
//
// app.js

//* Add:

console.log("Hello from Node.js!");

//* ============================================================
//* 15. Run the JavaScript File
//* ============================================================

// Open the terminal in the folder containing app.js.
//
// Run:
//
// node app.js

//* Output:
//
// Hello from Node.js!

//* What happened?
//
// app.js
//   ↓
// node app.js
//   ↓
// Node.js runtime starts
//   ↓
// JavaScript code is loaded
//   ↓
// JavaScript executes
//   ↓
// console.log()
//   ↓
// Terminal output

//* ============================================================
//* 16. Understanding `node app.js`
//* ============================================================

// Command:
//
// node app.js

//* Break it into two parts:
//
// node
// → Start the Node.js runtime
//
// app.js
// → JavaScript file we want Node.js to execute

//* Therefore:
//
// node app.js
//
// means:
//
// "Use Node.js to execute app.js"

//* ============================================================
//* 17. First Node.js Example
//* ============================================================

const name = "Ravi";
const age = 21;

console.log("Name:", name);
console.log("Age:", age);

//* Output:
//
// Name: Ravi
// Age: 21

//* This is normal JavaScript.
//
// Node.js is simply providing the runtime
// in which this JavaScript is executed.

//* ============================================================
//* 18. Functions Also Work
//* ============================================================

function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result);

// Output:
// 30

//* Again:
//
// JavaScript code
//     ↓
// Node.js
//     ↓
// Execution

//* ============================================================
//* 19. Running JavaScript from VS Code
//* ============================================================

// VS Code is a code editor.
//
// It does NOT replace Node.js.
//
// If you use:
//
// "Run JavaScript File in Terminal"
//
// VS Code ultimately runs your JavaScript
// using an available JavaScript runtime such as Node.js.

//* Typical flow:
//
// VS Code
//   ↓
// Terminal
//   ↓
// node app.js
//   ↓
// Node.js
//   ↓
// Execute JavaScript

//* ============================================================
//* 20. VS Code Terminal
//* ============================================================

// You can open the integrated terminal in VS Code.
//
// Common shortcut:
//
// Ctrl + `
//
// Then run:
//
// node app.js

//* ============================================================
//* 21. Browser Console vs Node.js
//* ============================================================

// Browser Console:
//
// console.log("Hello Browser");

// Node.js:
//
// console.log("Hello Node.js");

//* The JavaScript syntax is similar,
// but the surrounding environment is different.

// Browser has:
//
// document
// window
// localStorage
// DOM

// Node.js has:
//
// process
// fs
// path
// http

//* ============================================================
//* 22. Test the Node.js Environment
//* ============================================================

// Create app.js:

console.log(typeof process);

// In Node.js, this will normally output:
//
// object

//* `process` is a Node.js-provided global object
// containing information and controls related to
// the current Node.js process.

//* ============================================================
//* 23. Node.js Can Read Command-Line Arguments
//* ============================================================

// Example:

console.log(process.argv);

//* Run:
//
// node app.js hello

//* Node.js provides command-line arguments through:
//
// process.argv

//* Don't worry about this yet.
//
// We will study Node.js APIs later.

//* ============================================================
//* 24. Important Project Structure
//* ============================================================

// A very simple Node.js project:
//
// my-app/
// │
// ├── app.js
// └── package.json

//* Later, a real backend project may look like:
//
// my-app/
// │
// ├── src/
// │   ├── controllers/
// │   ├── routes/
// │   ├── services/
// │   ├── models/
// │   └── app.js
// │
// ├── package.json
// └── package-lock.json

//* Don't worry about these folders yet.
// We will build them step by step.

//* ============================================================
//* 25. What is package.json?
//* ============================================================

// package.json is a configuration/metadata file
// for a Node.js project.
//
// It can contain:
//
// → Project name
// → Version
// → Dependencies
// → Development dependencies
// → Scripts
// → Project metadata

//* Example:

// {
//     "name": "my-app",
//     "version": "1.0.0",
//     "scripts": {
//         "start": "node app.js"
//     }
// }

//* Then we can run:
//
// npm start

//* ============================================================
//* 26. What is package-lock.json?
//* ============================================================

// package-lock.json records the resolved dependency tree
// and versions used by the project.
//
// It helps npm reproduce dependency installations
// more consistently.

//* Don't memorize everything now.
//
// Just remember:
//
// package.json
// → Project configuration + dependency declarations
//
// package-lock.json
// → Exact resolved dependency information

//* ============================================================
//* 27. Common Beginner Mistakes
//* ============================================================

//* Mistake 1:
// Running:
//
// app.js
//
// ❌ Usually this is not how a JavaScript file is executed
//    from a normal terminal.
//
// Use:
//
// node app.js

//* Mistake 2:
// Installing random Node.js versions.
//
// ✅ Prefer the current LTS release for most learning/projects.

//* Mistake 3:
// Thinking npm is JavaScript.
//
// ❌ npm is a package manager.
//
// Node.js → Runtime
// npm      → Package manager
// JS       → Language

//* Mistake 4:
// Expecting browser APIs in Node.js.
//
// Example:
//
// document.querySelector("h1");
//
// ❌ Not available in normal Node.js by default.

//* ============================================================
//* 28. Complete Execution Flow
//* ============================================================

// Let's say we have:
//
// app.js
//
// Code:
//
// console.log("Hello");

// We run:
//
// node app.js

//* Flow:
//
//        app.js
//          ↓
//      node app.js
//          ↓
//     Node.js Runtime
//          ↓
//   JavaScript Engine
//          ↓
//     Execute Code
//          ↓
//     console.log()
//          ↓
//       Terminal
//          ↓
//        Hello

//* ============================================================
//* 29. Browser vs Node.js — Mental Model
//* ============================================================
//
//                JavaScript
//                     ↓
//          ┌──────────┴──────────┐
//          ↓                     ↓
//       Browser               Node.js
//          ↓                     ↓
//     Frontend              Backend / Scripts
//          ↓                     ↓
//     DOM / Web APIs       Node.js APIs
//          ↓                     ↓
//       Web App              Server / CLI

//* ============================================================
//* 30. MOST IMPORTANT RULES
//* ============================================================

// Remember these:
//
// 1. JavaScript = Programming language.
//
// 2. Node.js = JavaScript runtime.
//
// 3. npm = Package manager.
//
// 4. Browser = JavaScript execution environment.
//
// 5. `node app.js` = Run app.js using Node.js.
//
// 6. Node.js allows JavaScript to run outside the browser.
//
// 7. Browser APIs and Node.js APIs are different.
//
// 8. LTS is generally the best choice for beginners
//    and most production projects.

//* ============================================================
//* MEMORY TRICK
//* ============================================================

// Think about a car:
//
// JavaScript
// → Language / instructions
//
// Node.js
// → Environment that can execute those instructions
//
// npm
// → Tool that brings packages/dependencies
//
// app.js
// → Your JavaScript program
//
// node app.js
// → "Run my program using Node.js"

//* GOLDEN COMMAND
//* ============================================================

// node app.js

//* If you understand this command,
// you understand the basic idea of running
// JavaScript outside the browser.
