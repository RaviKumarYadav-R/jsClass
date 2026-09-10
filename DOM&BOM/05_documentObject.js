//* ============================================================
//* DOCUMENT OBJECT IN JAVASCRIPT
//* ============================================================

//* Definition
// The JavaScript `document` object represents the current HTML
// document loaded in the browser.
//
// It provides JavaScript with access to the webpage's DOM
// (Document Object Model), allowing us to:
//
// - Find HTML elements
// - Read element content
// - Change element content
// - Change attributes
// - Change styles
// - Create new elements
// - Remove elements
// - Handle DOM-related events
//
// The `document` object is available through `window`:
//
//     window.document
//
// Because `window` is the browser's global object, we can usually
// write:
//
//     document

console.log(window.document);
console.log(document);

//* ============================================================
//* 1. WHAT IS THE DOM?
//* ============================================================

//* Definition
// The DOM (Document Object Model) is a programming interface that
// represents an HTML document as a tree of objects/nodes.
//
// Example HTML:
//
// <html>
//   <body>
//     <h1>Hello</h1>
//     <p>Welcome</p>
//   </body>
// </html>
//
// The browser creates a DOM tree:
//
// document
//    │
//   html
//    │
//   body
//   ├── h1
//   │    └── "Hello"
//   │
//   └── p
//        └── "Welcome"
//
// JavaScript can use the `document` object to interact with this
// tree.

//* ============================================================
//* 2. window.document
//* ============================================================

// The document object is available as:
//
// window.document

console.log(window.document === document);

// Output:
//
// true

//* MEMORY:
//
// window
//   ↓
// browser environment
//   ↓
// document
//   ↓
// current webpage / DOM

//* ============================================================
//* 3. document.getElementById()
//* ============================================================

//* Definition
// `getElementById()` searches the document for an element whose
// `id` attribute matches the supplied string.
//
// Syntax:
//
// document.getElementById("id");

// Example HTML:
//
// <h1 id="title">Hello</h1>

const title = document.getElementById("title");

console.log(title);

// If the element exists, the method returns that element.
//
// If no matching element exists, it returns:
//
// null

//* IMPORTANT:
//
// An HTML `id` should be unique within a document.
//
// Example:
//
// <h1 id="title">Hello</h1>
//
// Correct usage:
//
// const title = document.getElementById("title");

//* ============================================================
//* 4. CHANGING TEXT WITH textContent
//* ============================================================

// Suppose HTML contains:
//
// <h1 id="title">Old Title</h1>

const heading = document.getElementById("title");

if (heading) {
  heading.textContent = "New Title";
}

// Result:
//
// Old Title
//      ↓
// New Title

//* Definition
// `textContent` gets or sets the text content of an element and
// treats the assigned value as plain text.

//* ============================================================
//* 5. textContent vs innerHTML
//* ============================================================

// `innerHTML` gets or sets the HTML markup contained inside an
// element.
//
// Example:
//
// heading.innerHTML = "<span>Hello</span>";
//
// The browser interprets `<span>` as HTML.

// `textContent`:
//
// heading.textContent = "<span>Hello</span>";
//
// The browser treats it as text.

/*
// Result with innerHTML:
//
// <span>Hello</span>
//        ↓
// Browser creates a span element
*/

/*
// Result with textContent:
//
// <span>Hello</span>
//        ↓
// Displayed literally as text
*/

//* IMPORTANT SECURITY RULE:
//
// If you only need to insert text from a user or external source,
// prefer:
//
// element.textContent = userInput;
//
// instead of:
//
// element.innerHTML = userInput;
//
// Untrusted HTML inserted with innerHTML can create security
// problems such as XSS if it is not properly sanitized.

//* ============================================================
//* 6. document.getElementsByClassName()
//* ============================================================

//* Definition
// `getElementsByClassName()` returns a live HTMLCollection
// containing elements that have the specified class name.
//
// Syntax:
//
// document.getElementsByClassName("className");

// Example HTML:
//
// <p class="message">One</p>
// <p class="message">Two</p>
// <p class="message">Three</p>

const messages = document.getElementsByClassName("message");

console.log(messages);

// The result is an HTMLCollection.
//
// It behaves similarly to an array in some ways, but it is NOT
// a normal JavaScript Array.

//* ============================================================
//* 7. LIVE HTMLCOLLECTION
//* ============================================================

//* Definition
// An HTMLCollection returned by getElementsByClassName() is live.
//
// This means that the collection automatically reflects matching
// elements added to or removed from the document.

const items = document.getElementsByClassName("item");

console.log(items.length);

// If another element with class `item` is added to the DOM,
// `items.length` can automatically change.

//* IMPORTANT:
//
// Live collection:
//
// DOM changes
//     ↓
// HTMLCollection updates automatically

//* ============================================================
//* 8. LOOPING THROUGH getElementsByClassName()
//* ============================================================

for (let i = 0; i < messages.length; i++) {
  messages[i].textContent = "Updated";
}

// Every matching element gets:
//
// Updated

//* ============================================================
//* 9. document.getElementsByTagName()
//* ============================================================

//* Definition
// `getElementsByTagName()` returns a live HTMLCollection containing
// elements with the specified tag name.
//
// Example:
//
// Find all paragraph elements:

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// Loop through them:

for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].textContent);
}

//* ============================================================
//* 10. document.querySelector()
//* ============================================================

//* Definition
// `querySelector()` returns the first element in the document that
// matches a CSS selector.
//
// Syntax:
//
// document.querySelector("CSS selector");

// Find by ID:

const firstTitle = document.querySelector("#title");

// Find by class:

const firstCard = document.querySelector(".card");

// Find by tag:

const firstParagraph = document.querySelector("p");

// Find using a more complex CSS selector:

const firstButton = document.querySelector(".card button");

// If no element matches:
//
// querySelector()
//
// returns:
//
// null

//* ============================================================
//* 11. document.querySelectorAll()
//* ============================================================

//* Definition
// `querySelectorAll()` returns a static NodeList containing all
// elements that match a CSS selector.

const cards = document.querySelectorAll(".card");

console.log(cards);

// Example:

cards.forEach((card) => {
  console.log(card.textContent);
});

//* IMPORTANT:
//
// querySelector()
// → first matching element
//
// querySelectorAll()
// → all matching elements

//* ============================================================
//* 12. querySelector() vs getElementById()
//* ============================================================

// getElementById:
//
// document.getElementById("title");

// querySelector:
//
// document.querySelector("#title");

// Both can find an element by ID.
//
// However:
//
// getElementById()
// → specifically searches by ID
//
// querySelector()
// → accepts any CSS selector

//* MEMORY:
//
// #id       → ID
// .class    → class
// p         → tag
// div.card  → tag + class
// ul > li   → CSS relationship

//* ============================================================
//* 13. querySelectorAll() vs getElementsByClassName()
//* ============================================================
//
// querySelectorAll(".item")
// → static NodeList
//
// getElementsByClassName("item")
// → live HTMLCollection
//
// Both can return multiple elements.
//
// This difference is important when the DOM changes after the
// collection/list is created.

//* ============================================================
//* 14. document.createElement()
//* ============================================================

//* Definition
// `createElement()` creates a new HTML element in memory.
//
// It does NOT automatically add the element to the webpage.
//
// Syntax:
//
// document.createElement("tagName");

const newDiv = document.createElement("div");

console.log(newDiv);

// At this point:
//
// newDiv exists
//
// but it has not been inserted into the DOM yet.

//* ============================================================
//* 15. ADDING TEXT TO A CREATED ELEMENT
//* ============================================================

const paragraph = document.createElement("p");

paragraph.textContent = "This paragraph was created with JavaScript";

// Still not visible until it is inserted into the DOM.

//* ============================================================
//* 16. document.body.appendChild()
//* ============================================================

//* Definition
// `appendChild()` inserts a node as the last child of a parent
// node.

document.body.appendChild(paragraph);

// Flow:
//
// createElement()
//      ↓
// element created in memory
//      ↓
// textContent
//      ↓
// appendChild()
//      ↓
// element becomes part of DOM
//      ↓
// browser displays it

//* ============================================================
//* 17. document.createTextNode()
//* ============================================================

//* Definition
// `createTextNode()` creates a text node containing the specified
// text.

const text = document.createTextNode("Hello from a text node");

const box = document.createElement("div");

box.appendChild(text);

document.body.appendChild(box);

// Result:
//
// <div>Hello from a text node</div>

// In many simple situations, `textContent` is easier:
//
// box.textContent = "Hello";

//* ============================================================
//* 18. append()
//* ============================================================

// Modern DOM code can also use:
//
// element.append()

const div = document.createElement("div");

div.append("Hello JavaScript");

document.body.append(div);

// `append()` can append strings and nodes.
//
// `appendChild()` expects a Node and returns the appended node.

//* ============================================================
//* 19. document.body
//* ============================================================

//* Definition
// `document.body` references the `<body>` element of the current
// HTML document.

console.log(document.body);

// Example:
//
// document.body.style.backgroundColor = "black";

// This changes the background color of the webpage body.

//* ============================================================
//* 20. document.head
//* ============================================================

//* Definition
// `document.head` references the `<head>` element of the current
// HTML document.

console.log(document.head);

// The head commonly contains:
//
// <title>
// <meta>
// <link>
// <style>
// <script>

//* ============================================================
//* 21. document.documentElement
//* ============================================================

//* Definition
// `document.documentElement` returns the root `<html>` element
// of the document.

console.log(document.documentElement);

// Relationship:
//
// document
//    ↓
// html
// ├── head
// └── body

//* ============================================================
//* 22. document.title
//* ============================================================

//* Definition
// `document.title` gets or sets the title of the current document.
//
// It corresponds to the content of the `<title>` element.

console.log(document.title);

// Change title:

document.title = "My JavaScript App";

// Browser tab title becomes:
//
// My JavaScript App

//* ============================================================
//* 23. document.URL
//* ============================================================

//* Definition
// `document.URL` returns the URL of the current document.

console.log(document.URL);

// Example:
//
// https://example.com/about

//* ============================================================
//* 24. document.documentURI
//* ============================================================

// `document.documentURI` provides the document's URI.

console.log(document.documentURI);

// For normal HTML documents, this commonly corresponds to the
// current document URL.

//* ============================================================
//* 25. document.domain
//* ============================================================

// `document.domain` is a legacy API related to same-origin
// relaxation between certain subdomains.
//
// Modern applications should generally avoid relying on it.
//
// Prefer modern mechanisms such as:
//
// - CORS
// - postMessage()
// - appropriate server-side configuration

//* ============================================================
//* 26. CHANGING CSS WITH JAVASCRIPT
//* ============================================================

// Every element has a `style` object for manipulating inline CSS.

const headingElement = document.querySelector("h1");

if (headingElement) {
  headingElement.style.color = "blue";
  headingElement.style.fontSize = "40px";
}

// CSS:
//
// color: blue;
// font-size: 40px;

// JavaScript property names use camelCase:
//
// background-color
//      ↓
// backgroundColor
//
// font-size
//      ↓
// fontSize

//* ============================================================
//* 27. CHANGING ATTRIBUTES
//* ============================================================

// HTML:
//
// <img id="profile" src="old.jpg">

const image = document.getElementById("profile");

if (image) {
  image.setAttribute("src", "new.jpg");
}

// Read attribute:

if (image) {
  console.log(image.getAttribute("src"));
}

// Remove attribute:

if (image) {
  image.removeAttribute("src");
}

//* ============================================================
//* 28. COMMON ATTRIBUTE PROPERTIES
//* ============================================================

// Some HTML attributes can be accessed directly as properties.
//
// Example:
//
// element.id
// element.title
// element.src
// element.href
// element.value

const element = document.querySelector("#title");

if (element) {
  console.log(element.id);
}

//* ============================================================
//* 29. classList
//* ============================================================

//* Definition
// `classList` provides methods for adding, removing, toggling,
// and checking CSS classes on an element.

const card = document.querySelector(".card");

if (card) {
  // Add class
  card.classList.add("active");

  // Remove class
  card.classList.remove("active");

  // Toggle class
  card.classList.toggle("active");

  // Check class
  console.log(card.classList.contains("active"));
}

//* MEMORY:
//
// add()
// → Add
//
// remove()
// → Remove
//
// toggle()
// → Add if missing, remove if present
//
// contains()
// → Check

//* ============================================================
//* 30. REMOVING AN ELEMENT
//* ============================================================

//* Definition
// `element.remove()` removes an element from its parent DOM tree.

const oldElement = document.querySelector(".old");

if (oldElement) {
  oldElement.remove();
}

// Modern and simple way to remove an element.

//* ============================================================
//* 31. parentElement
//* ============================================================

//* Definition
// `parentElement` returns the parent HTML element of an element.

const child = document.querySelector(".child");

if (child) {
  console.log(child.parentElement);
}

// Example DOM:
//
// <div class="parent">
//     <p class="child">Hello</p>
// </div>
//
// child.parentElement
//        ↓
// <div class="parent">

//* ============================================================
//* 32. children
//* ============================================================

//* Definition
// `children` returns the child elements of an element as a live
// HTMLCollection.

const parent = document.querySelector(".parent");

if (parent) {
  console.log(parent.children);
}

// Only element children are included.
//
// Text nodes are not included.

//* ============================================================
//* 33. firstElementChild / lastElementChild
//* ============================================================

if (parent) {
  console.log(parent.firstElementChild);
  console.log(parent.lastElementChild);
}

// These return:
//
// firstElementChild
// → first child element
//
// lastElementChild
// → last child element

//* ============================================================
//* 34. nextElementSibling
//* ============================================================

//* Definition
// `nextElementSibling` returns the next sibling that is an element.

const firstItem = document.querySelector(".item");

if (firstItem) {
  console.log(firstItem.nextElementSibling);
}

// Example:
//
// <li class="item">A</li>
// <li class="item">B</li>
//
// For A:
//
// nextElementSibling
// → B

//* ============================================================
//* 35. previousElementSibling
//* ============================================================

// Returns the previous sibling element.

if (firstItem) {
  console.log(firstItem.previousElementSibling);
}

//* ============================================================
//* 36. DOM TRAVERSAL MENTAL MODEL
//* ============================================================
//
//                 parentElement
//                      ↑
//                      │
// previousSibling ← ELEMENT → nextSibling
//                      │
//                      ↓
//                  children
//
// Useful properties:
//
// parentElement
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling

//* ============================================================
//* 37. DOCUMENT EVENTS
//* ============================================================

// The document can listen for events.
//
// Example:
//
// document.addEventListener("click", () => {
//     console.log("Document clicked");
// });

// Events are extremely important for interactive webpages.
//
// Common events:
//
// click
// input
// change
// submit
// keydown
// keyup
// DOMContentLoaded

//* ============================================================
//* 38. DOMContentLoaded
//* ============================================================

//* Definition
// The `DOMContentLoaded` event fires when the HTML document has
// been completely parsed and the DOM has been constructed.
//
// Example:

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready.");
});

// This is useful when JavaScript needs to work with elements that
// must already exist in the DOM.

//* ============================================================
//* 39. document.forms
//* ============================================================

// `document.forms` provides access to forms in the document.

console.log(document.forms);

// Example:
//
// const form = document.forms[0];

//* ============================================================
//* 40. document.images
//* ============================================================

// `document.images` provides an HTMLCollection of images in the
// document.

console.log(document.images);

//* ============================================================
//* 41. document.links
//* ============================================================

// `document.links` provides links in the document that have an
// href.

console.log(document.links);

//* ============================================================
//* 42. document.body.innerHTML
//* ============================================================

// `innerHTML` can read or replace HTML inside an element.

console.log(document.body.innerHTML);

// Example:
//
// document.body.innerHTML = "<h1>Hello</h1>";
//
// This replaces the body's existing contents.
//
// Be careful: replacing large portions of the DOM can remove
// existing elements/listeners and can be unsafe with untrusted
// HTML.

//* ============================================================
//* 43. innerText vs textContent
//* ============================================================
//
// textContent
// → Gets/sets text content of nodes.
//
// innerText
// → Represents rendered/visible text and is affected by layout
//   and CSS.
//
// For straightforward text insertion, textContent is generally
// the better default.

//* ============================================================
//* 44. PRACTICAL EXAMPLE — CREATE A CARD
//* ============================================================

const cardElement = document.createElement("div");

cardElement.classList.add("card");

const cardTitle = document.createElement("h2");

cardTitle.textContent = "JavaScript";

const cardText = document.createElement("p");

cardText.textContent = "Learning the DOM step by step.";

cardElement.append(cardTitle, cardText);

document.body.append(cardElement);

// DOM created:
//
// body
//   └── div.card
//        ├── h2
//        │    └── JavaScript
//        └── p
//             └── Learning the DOM step by step.

//* ============================================================
//* 45. PRACTICAL EXAMPLE — FIND AND MODIFY
//* ============================================================

const button = document.querySelector("#btn");

if (button) {
  button.textContent = "Click Me";

  button.classList.add("primary");

  button.setAttribute("title", "Click this button");
}

// One element can be:
//
// Found
//  ↓
// Read
//  ↓
// Modified
//  ↓
// Styled
//  ↓
// Given attributes
//  ↓
// Used for events

//* ============================================================
//* 46. DOCUMENT OBJECT FLOW
//* ============================================================
//
// HTML file
//    ↓
// Browser parses HTML
//    ↓
// DOM tree is created
//    ↓
// document represents the DOM
//    ↓
// JavaScript accesses document
//    ↓
// Find element
//    ↓
// Read / modify / create / remove
//    ↓
// Browser updates the rendered webpage

//* ============================================================
//* 47. DOCUMENT vs WINDOW
//* ============================================================
//
// window
// → Browser environment / window or tab
//
// document
// → Current webpage / DOM
//
//
// Example:
//
// window.alert("Hello");
// document.title = "My Website";

//* MEMORY:
//
// WINDOW = BROWSER
// DOCUMENT = WEBPAGE

//* ============================================================
//* 48. DOCUMENT vs NAVIGATOR vs SCREEN
//* ============================================================
//
// window
// → Browser window
//
// document
// → Webpage / DOM
//
// navigator
// → Browser/environment information
//
// screen
// → Display information
//
// location
// → Current URL
//
// history
// → Session navigation history

//* ============================================================
//* 49. MOST COMMON DOM METHODS
//* ============================================================
//
// FIND:
//
// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()
//
//
// CREATE:
//
// createElement()
// createTextNode()
//
//
// INSERT:
//
// append()
// appendChild()
//
//
// REMOVE:
//
// remove()
//
//
// CONTENT:
//
// textContent
// innerHTML
// innerText
//
//
// ATTRIBUTES:
//
// getAttribute()
// setAttribute()
// removeAttribute()
//
//
// CLASSES:
//
// classList.add()
// classList.remove()
// classList.toggle()
// classList.contains()
//
//
// TRAVERSAL:
//
// parentElement
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling

//* ============================================================
//* 50. COMMON MISTAKES
//* ============================================================

// Mistake 1:
// Forgetting that an element might not exist.
//
// WRONG:
//
// const title = document.getElementById("title");
// title.textContent = "Hello";
//
// If title is null:
//
// TypeError occurs.
//
// BETTER:
//
// const title = document.getElementById("title");
//
// if (title) {
//     title.textContent = "Hello";
// }

// Mistake 2:
// Confusing HTMLCollection / NodeList with Array.
//
// They are collection types, not necessarily normal arrays.
//
// If you specifically need an Array:
//
// const array = Array.from(collection);

// Mistake 3:
// Assuming every collection is live.
//
// getElementsByClassName()
// → live HTMLCollection
//
// querySelectorAll()
// → static NodeList

// Mistake 4:
// Using innerHTML with untrusted user input.
//
// Prefer:
//
// element.textContent = userInput;

// Mistake 5:
// Thinking createElement() automatically displays the element.
//
// WRONG:
//
// document.createElement("div");
//
// This only creates the element.
//
// You must insert it:
//
// document.body.append(element);

// Mistake 6:
// Using screen.width for webpage layout.
//
// For responsive webpage layout, usually use:
//
// window.innerWidth

//* ============================================================
//* 51. PROBLEM-SOLVING FORMULA
//* ============================================================
//
// Whenever you need to manipulate a webpage:
//
// 1. FIND
//       ↓
// 2. READ
//       ↓
// 3. MODIFY
//       ↓
// 4. INSERT / REMOVE
//       ↓
// 5. LISTEN FOR EVENTS
//
//
// Example:
//
// Find:
//
// const button = document.querySelector("#btn");
//
// Modify:
//
// button.textContent = "Submit";
//
// Style:
//
// button.classList.add("primary");
//
// Event:
//
// button.addEventListener("click", () => {
//     console.log("Clicked");
// });

//* ============================================================
//* 52. MENTAL MODEL
//* ============================================================
//
// Think of `document` as the CONTROL PANEL of your webpage.
//
//                document
//                    │
//       ┌────────────┼────────────┐
//       ↓            ↓            ↓
//     FIND         CREATE       MODIFY
//       │            │            │
//       ↓            ↓            ↓
// querySelector  createElement  textContent
// getElementById createTextNode  innerHTML
//                                classList
//                                attributes
//
//
// Then:
//
// document
//     ↓
// DOM
//     ↓
// Browser renders webpage

//* ============================================================
//* 53. GOLDEN RULE
//* ============================================================
//
// document = CURRENT WEBPAGE / DOM
//
// FIND:
//
// getElementById()
// querySelector()
// querySelectorAll()
//
// CREATE:
//
// createElement()
//
// MODIFY:
//
// textContent
// innerHTML
// style
// classList
// attributes
//
// INSERT:
//
// append()
// appendChild()
//
// REMOVE:
//
// remove()
//
// TRAVERSE:
//
// parentElement
// children
// nextElementSibling
// previousElementSibling
//
// EVENTS:
//
// addEventListener()
//
// MEMORY:
//
// DOCUMENT = WEBPAGE CONTROL CENTER
//* ============================================================
