//* ============================================================
//* WINDOW OBJECT
//* ============================================================

//* 1. What is the Window Object?
//* ============================================================

// DEFINITION:
//
// The JavaScript `window` object represents the current browser
// window or tab in which a webpage is running. It is the global
// object provided by the browser and gives JavaScript access to
// various browser-related properties, methods, and APIs.
//
// In simple words:
//
// `window` = The main object that represents the browser window
//            and provides access to browser features.

//* Example:

console.log(window);

// The browser's Window object is displayed in the console.

//* IMPORTANT:
//
// `window` is a browser-provided object.
// It is NOT part of the core ECMAScript language.

//* ============================================================
//* 2. Why is the Window Object Important?
//* ============================================================

// DEFINITION:
//
// The `window` object acts as the main entry point to many
// browser features. Through the `window` object, JavaScript
// can interact with the webpage, URL, browser history, storage,
// timers, dialogs, and other browser functionality.

//* Common features available through `window`:
//
// → document
// → location
// → history
// → navigator
// → screen
// → localStorage
// → sessionStorage
// → alert()
// → confirm()
// → prompt()
// → setTimeout()
// → setInterval()
// → scrollTo()

//* Mental model:
//
//                    window
//                       │
//       ┌───────────────┼────────────────┐
//       ↓               ↓                ↓
//   document         location         history
//   Webpage             URL          Navigation
//       ↓
//      HTML

//* ============================================================
//* 3. Window as the Global Object
//* ============================================================

// DEFINITION:
//
// In a browser environment, the `window` object is the global
// object. Many globally available browser functions, objects,
// and properties can be accessed through `window`.

//* Example:

window.alert("Hello!");

// We normally write:

alert("Hello!");

// Both refer to the browser's alert functionality.

//* Another example:

window.console.log("Hello");

// Usually written as:

console.log("Hello");

//* Therefore:
//
// window.alert()
//      ↓
// alert()
//
// window.console
//      ↓
// console

//* ============================================================
//* 4. The Document Object
//* ============================================================

// DEFINITION:
//
// The `document` object represents the current HTML document
// loaded in the browser. It provides methods and properties
// that allow JavaScript to find, read, create, modify, and
// remove elements from the webpage.
//
// `document` is the main interface JavaScript uses to work
// with the DOM (Document Object Model).

//* Relationship:
//
// window
//   ↓
// document
//   ↓
// HTML document
//   ↓
// HTML elements

//* Example HTML:
//
// <h1 id="title">Hello World</h1>

// JavaScript:

const title = document.getElementById("title");

title.textContent = "Hello JavaScript!";

//* What happened?
//
// 1. `document` accesses the current webpage.
// 2. `getElementById()` finds the element.
// 3. `textContent` changes its text.
//
// Before:
//
// Hello World
//
// After:
//
// Hello JavaScript!

//* ============================================================
//* 5. Window and Document Relationship
//* ============================================================

// The document object can also be accessed through window:

console.log(window.document);

// Normally we simply write:

console.log(document);

// These refer to the same document object:

console.log(window.document === document);

// Output:
//
// true

//* Remember:
//
// window → Browser window/global object
// document → Current webpage

//* ============================================================
//* 6. Location Object
//* ============================================================

// DEFINITION:
//
// The `location` object represents the current URL of the
// webpage and provides methods and properties for reading
// URL information and navigating to another URL.

//* Access it through:

window.location;

// Or simply:

location;

//* Example:

console.log(location.href);

// `href` contains the complete URL of the current webpage.

//* ============================================================
//* 7. Redirecting Using Location
//* ============================================================

// The `href` property can be used to navigate to another URL.

// Example:

window.location.href = "https://example.com";

//* The browser will navigate to:
//
// https://example.com

//* Usually written as:

location.href = "https://example.com";

//* Flow:
//
// JavaScript
//     ↓
// location.href
//     ↓
// Browser navigation
//     ↓
// New webpage

//* ============================================================
//* 8. Important Location Properties
//* ============================================================

// Suppose the current URL is:
//
// https://example.com/products?id=10#details

console.log(location.href);
// Complete URL

console.log(location.protocol);
// https:

console.log(location.host);
// example.com

console.log(location.hostname);
// example.com

console.log(location.pathname);
// /products

console.log(location.search);
// ?id=10

console.log(location.hash);
// #details

//* Memory trick:
//
// href      → Complete URL
// protocol  → http / https
// host      → Domain + port
// hostname  → Domain
// pathname  → Path
// search    → Query string
// hash      → Fragment

//* ============================================================
//* 9. Alert Method
//* ============================================================

// DEFINITION:
//
// The `alert()` method displays a modal dialog box containing
// a message and an OK button. It is commonly used to display
// simple information or messages to the user.

//* Example:

alert("Welcome to JavaScript!");

// Or:

window.alert("Welcome to JavaScript!");

//* The browser displays a popup:
//
// ┌──────────────────────────┐
// │ Welcome to JavaScript!   │
// │                          │
// │                    [OK]  │
// └──────────────────────────┘

//* IMPORTANT:
//
// `alert()` does not return useful user input.
// It is mainly used to display a message.

//* ============================================================
//* 10. Confirm Method
//* ============================================================

// DEFINITION:
//
// The `confirm()` method displays a dialog box asking the user
// to confirm or cancel an action. It returns a Boolean value:
//
// true  → User clicks OK
// false → User clicks Cancel

//* Example:

const result = confirm("Do you want to continue?");

console.log(result);

// If user clicks OK:
//
// true

// If user clicks Cancel:
//
// false

//* Practical example:

const shouldDelete = confirm("Are you sure you want to delete?");

if (shouldDelete) {
  console.log("Item deleted");
} else {
  console.log("Deletion cancelled");
}

//* ============================================================
//* 11. Prompt Method
//* ============================================================

// DEFINITION:
//
// The `prompt()` method displays a dialog box that asks the
// user to enter some text. It returns the entered value as
// a string, or `null` if the user cancels the dialog.

//* Example:

const userName = prompt("Enter your name:");

console.log(userName);

// If user enters:
//
// Ravi
//
// Result:
//
// "Ravi"

//* IMPORTANT:
//
// prompt() returns a STRING.

// Example:

const ageInput = prompt("Enter your age:");

console.log(typeof ageInput);

// If the user enters:
//
// 21
//
// typeof ageInput gives:
//
// "string"

//* Convert it to a number:

const age = Number(prompt("Enter your age:"));

console.log(typeof age);

// Output:
//
// "number"

//* ============================================================
//* 12. setTimeout()
//* ============================================================

// DEFINITION:
//
// The `setTimeout()` method schedules a function to execute
// once after a specified delay in milliseconds.

//* Syntax:
//
// setTimeout(function, delay);

//* Example:

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

//* 2000 milliseconds = 2 seconds

//* Important:
//
// setTimeout() schedules the callback.
// It does not guarantee that the callback will execute
// at exactly that millisecond, because execution also depends
// on the JavaScript event loop and other work.

//* ============================================================
//* 13. clearTimeout()
//* ============================================================

// DEFINITION:
//
// The `clearTimeout()` method cancels a timeout that was
// previously scheduled using `setTimeout()`.

//* Example:

const timerId = setTimeout(() => {
  console.log("This will not execute");
}, 3000);

clearTimeout(timerId);

//* Flow:
//
// setTimeout()
//     ↓
// timer ID
//     ↓
// clearTimeout(timer ID)
//     ↓
// Timer cancelled

//* ============================================================
//* 14. setInterval()
//* ============================================================

// DEFINITION:
//
// The `setInterval()` method repeatedly executes a function
// at approximately every specified interval in milliseconds
// until the interval is cancelled.

//* Example:

const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

// This callback is scheduled repeatedly.

//* Stop the interval:

clearInterval(intervalId);

//* ============================================================
//* 15. clearInterval()
//* ============================================================

// DEFINITION:
//
// The `clearInterval()` method cancels a repeating interval
// that was previously created using `setInterval()`.

//* Example:

const id = setInterval(() => {
  console.log("Tick");
}, 1000);

clearInterval(id);

//* ============================================================
//* 16. History Object
//* ============================================================

// DEFINITION:
//
// The `history` object represents the browser session history
// for the current tab. It provides methods for navigating
// through previously visited pages in that session.

//* Access:
//
//window.history

// Or:

history;

//* Go back:

history.back();

//* Go forward:

history.forward();

//* Move through history:

history.go(-2); // Go back 2 entries

history.go(2); // Go forward 2 entries

//* Relationship:
//
// window
//   ↓
// history
//   ↓
// Browser session history

//* ============================================================
//* 17. Navigator Object
//* ============================================================

// DEFINITION:
//
// The `navigator` object provides information about the
// browser and the environment in which the webpage is running,
// along with access to certain browser capabilities.

//* Example:

console.log(navigator.userAgent);

console.log(navigator.language);

console.log(navigator.onLine);

//* Relationship:
//
// window
//   ↓
// navigator
//   ↓
// Browser/environment information

//* ============================================================
//* 18. Screen Object
//* ============================================================

// DEFINITION:
//
// The `screen` object provides information about the user's
// physical display screen, such as its width and height.

//* Example:

console.log(screen.width);

console.log(screen.height);

//* Important difference:
//
// window.innerWidth
// → Browser viewport width
//
// screen.width
// → Physical screen width

//* ============================================================
//* 19. Window innerWidth and innerHeight
//* ============================================================

// DEFINITION:
//
// `window.innerWidth` and `window.innerHeight` represent
// the width and height of the browser's viewport in pixels.

//* Example:

console.log(window.innerWidth);

console.log(window.innerHeight);

//* Think:
//
// screen
// → Physical display
//
// window
// → Browser viewport

//* ============================================================
//* 20. scrollTo()
//* ============================================================

// DEFINITION:
//
// The `scrollTo()` method scrolls the document to a specified
// position within the browser viewport.

//* Example:

window.scrollTo(0, 0);

// x = 0
// y = 0
//
// This scrolls the page to the top-left position.

//* Smooth scrolling:

window.scrollTo({
  top: 0,
  behavior: "smooth",
});

//* ============================================================
//* 21. localStorage
//* ============================================================

// DEFINITION:
//
// `localStorage` is a browser-provided storage mechanism that
// allows webpages to store key-value data persistently for
// a particular origin. The stored values are strings.

//* Store data:

localStorage.setItem("username", "Ravi");

//* Read data:

const storedUser = localStorage.getItem("username");

console.log(storedUser);

//* Remove one item:

localStorage.removeItem("username");

//* Remove all localStorage data for the current origin:

localStorage.clear();

//* IMPORTANT:
//
// localStorage stores STRINGS.
//
// For objects and arrays, JSON.stringify() and JSON.parse()
// are commonly used.

//* ============================================================
//* 22. sessionStorage
//* ============================================================

// DEFINITION:
//
// `sessionStorage` is a browser-provided storage mechanism
// that stores key-value data as strings for the current
// page session.

//* Store:

sessionStorage.setItem("theme", "dark");

//* Read:

console.log(sessionStorage.getItem("theme"));

//* Remove:

sessionStorage.removeItem("theme");

//* Main difference:
//
// localStorage
// → Data persists until it is removed.
//
// sessionStorage
// → Data is associated with the current page session.

//* ============================================================
//* 23. Window Object Hierarchy
//* ============================================================

// Think of the browser like this:
//
//                         window
//                            │
//       ┌────────────────────┼─────────────────────┐
//       ↓                    ↓                     ↓
//   document             location               history
//       ↓                    ↓                     ↓
//    Webpage                URL                Navigation
//       │
//       ↓
//    HTML / DOM
//
//
// Other browser features:
//
// window
//   ├── navigator
//   ├── screen
//   ├── localStorage
//   ├── sessionStorage
//   ├── alert()
//   ├── confirm()
//   ├── prompt()
//   ├── setTimeout()
//   ├── setInterval()
//   └── scrollTo()

//* ============================================================
//* 24. Window vs Document
//* ============================================================

// DEFINITION:
//
// `window` represents the browser window/global environment,
// while `document` represents the HTML document currently
// loaded inside that browser window.

//* Remember:
//
// window
// → Browser environment
//
// document
// → Webpage

//* Example:
//
// window
//   ↓
// document
//   ↓
// <html>
//   ↓
// <body>
//   ↓
// <button>

//* ============================================================
//* 25. Is Window Available in Node.js?
//* ============================================================

// The browser's `window` object is not available by default
// in normal Node.js programs.
//
// Example:
//
// console.log(window);
//
// ❌ ReferenceError: window is not defined

//* Why?
//
// Node.js is not a browser.
//
// Node.js has its own runtime APIs,
// while `window` is provided by browsers.

//* Browser:
//
// window
// document
// navigator
// localStorage

//* Node.js:
//
// process
// fs
// path
// http

//* ============================================================
//* 26. globalThis
//* ============================================================

// DEFINITION:
//
// `globalThis` is the standard JavaScript way to access
// the global object regardless of the JavaScript environment.

//* In a browser:

console.log(globalThis === window);

// Output:
//
// true

//* In Node.js:
//
// globalThis
// is the global object,
// but `window` is not normally defined.

//* This makes `globalThis` useful when writing
// environment-independent JavaScript.

//* ============================================================
//* 27. Common Beginner Mistakes
//* ============================================================

//* Mistake 1:
//
// Thinking window is part of core JavaScript.
//
// ❌ No.
//
// `window` is provided by the browser.

//* Mistake 2:
//
// Thinking window and document are the same.
//
// ❌ No.
//
// window  → Browser window/global object
// document → Current webpage

//* Mistake 3:
//
// Thinking Node.js has window.
//
// ❌ Normal Node.js does not provide the browser `window` object.

//* Mistake 4:
//
// Thinking prompt() returns a number.
//
// ❌ It returns a string or null.
//
// Correct:

const ageValue = Number(prompt("Enter age"));

//* Mistake 5:
//
// Confusing viewport and screen size.
//
// window.innerWidth
// → Viewport width
//
// screen.width
// → Screen width

//* ============================================================
//* 28. Quick Reference
//* ============================================================
//
// window.document
// → Current webpage / DOM
//
// window.location
// → Current URL and navigation
//
// window.history
// → Browser session history
//
// window.navigator
// → Browser/environment information
//
// window.screen
// → Physical screen information
//
// window.alert()
// → Display message
//
// window.confirm()
// → Ask for confirmation
//
// window.prompt()
// → Ask for text input
//
// window.setTimeout()
// → Execute once after a delay
//
// window.setInterval()
// → Execute repeatedly
//
// window.scrollTo()
// → Scroll the page
//
// window.localStorage
// → Persistent browser storage
//
// window.sessionStorage
// → Page-session storage

//* ============================================================
//* 29. MOST IMPORTANT CONCEPT
//* ============================================================

// The easiest way to understand the Window Object:
//
//                    WINDOW
//                       │
//              Browser Environment
//                       │
//       ┌───────────────┼────────────────┐
//       ↓               ↓                ↓
//   document         location         history
//   Webpage             URL          Navigation
//       ↓
//      DOM

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// Remember:
//
// window = Browser's global object
//
// document = Current webpage
//
// location = Current URL
//
// history = Browser navigation history
//
// navigator = Browser/environment information
//
// localStorage = Persistent browser storage
//
// sessionStorage = Session-based browser storage
//
// setTimeout = Run once after a delay
//
// setInterval = Run repeatedly
//
// alert = Show message
//
// confirm = Get true/false confirmation
//
// prompt = Get text input

//* FINAL MEMORY TRICK
//* ============================================================

// Think of `window` as the:
//
// "CONTROL CENTER OF THE BROWSER"
//
// window
//   │
//   ├── document  → What is on the webpage?
//   ├── location  → Where are we?
//   ├── history   → Where have we been?
//   ├── navigator → What browser/environment are we using?
//   ├── storage   → What data can we store?
//   ├── timers    → When should code run?
//   └── dialogs   → How do we communicate with the user?
//
//
// If you understand this structure,
// you have a strong foundation for learning the DOM next.
