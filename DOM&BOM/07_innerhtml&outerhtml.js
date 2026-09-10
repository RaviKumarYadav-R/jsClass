//* ============================================================
//* INNERHTML AND OUTERHTML
//* ============================================================

//* 1. WHAT IS innerHTML?
// ------------------------------------------------------------
// `innerHTML` is a property used to get or set the HTML markup
// contained inside an HTML element.
//
// In simple words:
//
// innerHTML = "What is INSIDE this element?"

// Example HTML:
//
// <div id="box">
//     <h2>Hello</h2>
//     <p>JavaScript</p>
// </div>

const box = document.getElementById("box");

console.log(box.innerHTML);

// Output:
//
// <h2>Hello</h2>
// <p>JavaScript</p>
//
// Notice:
// The <div id="box"> itself is NOT included.
// Only its inside content is returned.

//* ============================================================
//* 2. WHAT IS outerHTML?
// ============================================================

// `outerHTML` is a property used to get or set the complete
// HTML markup of an element, including the element itself.
//
// In simple words:
//
// outerHTML = "The element ITSELF + everything INSIDE it."

console.log(box.outerHTML);

// Output:
//
// <div id="box">
//     <h2>Hello</h2>
//     <p>JavaScript</p>
// </div>
//
// Notice:
// The <div> itself is also included.

//* ============================================================
//* 3. INNERHTML VS OUTERHTML
//* ============================================================

// HTML:
//
// <div id="box">
//     <h2>Hello</h2>
// </div>
//
//              ↓
//
// innerHTML:
//
// <h2>Hello</h2>
//
//              ↓
//
// outerHTML:
//
// <div id="box">
//     <h2>Hello</h2>
// </div>

//* MEMORY TRICK
// ------------------------------------------------------------
//
// innerHTML = INSIDE
//
// outerHTML = OUTSIDE + INSIDE
//
// Think:
//
// <div>
//     CONTENT
// </div>
//
// innerHTML  → CONTENT
//
// outerHTML  → <div>CONTENT</div>

//* ============================================================
//* 4. GETTING innerHTML
//* ============================================================

// HTML:
//
// <div id="message">
//     <h2>Hello</h2>
//     <p>Welcome to JavaScript</p>
// </div>

const message = document.getElementById("message");

console.log(message.innerHTML);

// innerHTML gives us the HTML inside #message.

//* ============================================================
//* 5. SETTING innerHTML
//* ============================================================

// `innerHTML` can also be used to replace the content
// inside an element.

message.innerHTML = "<h2>Hello Ravi</h2>";

//
// Before:
//
// <div id="message">
//     <h2>Hello</h2>
//     <p>Welcome to JavaScript</p>
// </div>
//
// After:
//
// <div id="message">
//     <h2>Hello Ravi</h2>
// </div>
//
// The old content inside the div is replaced.

//* ============================================================
//* 6. ADDING MULTIPLE HTML ELEMENTS
//* ============================================================

message.innerHTML = `
    <h2>JavaScript</h2>
    <p>Learn DOM Manipulation</p>
    <button>Start Learning</button>
`;

//
// Template literals are useful when creating multiple
// lines of HTML.

//* ============================================================
//* 7. innerHTML CAN CREATE REAL HTML ELEMENTS
//* ============================================================

message.innerHTML = `
    <h2>Hello</h2>
    <p>This is a paragraph.</p>
`;

//
// The browser parses this HTML and creates DOM elements.
//
// It is NOT treated as plain text.

//* ============================================================
//* 8. innerHTML WITH VARIABLES
//* ============================================================

const username = "Ravi";

message.innerHTML = `
    <h2>Hello ${username}</h2>
    <p>Welcome back!</p>
`;

//
// Result:
//
// Hello Ravi
// Welcome back!

//* ============================================================
//* 9. innerHTML VS textContent
//* ============================================================

// `textContent` treats the assigned value as text.
//
// `innerHTML` treats the assigned value as HTML markup.

// Example:

message.textContent = "<h2>Hello</h2>";

//
// Browser displays:
//
// <h2>Hello</h2>
//
// The <h2> is displayed as text.
//
// Because textContent does NOT parse HTML.

// Now:

message.innerHTML = "<h2>Hello</h2>";

//
// Browser displays:
//
// Hello
//
// Because innerHTML parses the <h2> as HTML.

//* MEMORY TRICK
// ------------------------------------------------------------
//
// textContent → TEXT
//
// innerHTML   → HTML

//* ============================================================
//* 10. GETTING outerHTML
//* ============================================================

// HTML:
//
// <div id="box">
//     <h2>Hello</h2>
// </div>

console.log(box.outerHTML);

// Output:
//
// <div id="box">
//     <h2>Hello</h2>
// </div>
//
// The selected element itself is included.

//* ============================================================
//* 11. SETTING outerHTML
//* ============================================================

// `outerHTML` can replace the selected element itself.

box.outerHTML = `
    <section id="newBox">
        <h2>New Element</h2>
    </section>
`;

//
// Before:
//
// <div id="box">
//     <h2>Hello</h2>
// </div>
//
// After:
//
// <section id="newBox">
//     <h2>New Element</h2>
// </section>
//
// The entire <div> was replaced.
//
// This is the biggest difference between innerHTML
// and outerHTML.

//* ============================================================
//* 12. INNERHTML REPLACES CONTENT
//* ============================================================

// Before:
//
// <div id="box">
//     <p>Old content</p>
// </div>
//
// Code:
//
// box.innerHTML = "<h2>New content</h2>";
//
// After:
//
// <div id="box">
//     <h2>New content</h2>
// </div>
//
// The div survives.
// Only its contents change.

//* ============================================================
//* 13. OUTERHTML REPLACES THE ELEMENT
//* ============================================================

// Before:
//
// <div id="box">
//     <p>Old content</p>
// </div>
//
// Code:
//
// box.outerHTML = "<section>New content</section>";
//
// After:
//
// <section>New content</section>
//
// The original div itself is gone.

//* ============================================================
//* 14. VERY IMPORTANT: OLD ELEMENT REFERENCE
//* ============================================================

// Example:
//
// const box = document.getElementById("box");
//
// box.outerHTML = "<section>New</section>";
//
// The HTML in the document is replaced.
//
// But the variable `box` still refers to the OLD element
// object that was removed from the document.
//
// Therefore:
//
// box === document.getElementById("box")
//
// may be false or the new element may not even have that ID.
//
// Always remember:
//
// outerHTML replacement creates/replaces DOM structure.

//* ============================================================
//* 15. READING HTML FROM AN ELEMENT
//* ============================================================

const card = document.getElementById("card");

console.log(card.innerHTML);
console.log(card.outerHTML);

// innerHTML:
//
// Gets the HTML inside card.
//
// outerHTML:
//
// Gets the complete card element including itself.

//* ============================================================
//* 16. PRACTICAL CARD EXAMPLE
//* ============================================================

const user = {
  name: "Ravi",
  role: "Frontend Developer",
};

card.innerHTML = `
    <div class="user-card">
        <h2>${user.name}</h2>
        <p>${user.role}</p>
    </div>
`;

//
// This is a common use case:
//
// API data
//     ↓
// JavaScript
//     ↓
// Template literal
//     ↓
// innerHTML
//     ↓
// DOM

//* ============================================================
//* 17. MODIFYING ONLY PART OF THE CONTENT
//* ============================================================

const title = document.getElementById("title");

title.innerHTML = "JavaScript <strong>DOM</strong>";

//
// Result:
//
// JavaScript DOM
//
// "DOM" becomes bold because <strong> is interpreted as HTML.

//* ============================================================
//* 18. innerHTML AND USER INPUT — SECURITY
//* ============================================================

// Be careful when inserting untrusted/user-controlled data
// directly into innerHTML.
//
// Example:
//
// const userInput = "<img src=x onerror=alert('XSS')>";
//
// Avoid:
//
// element.innerHTML = userInput;
//
// Untrusted HTML can create an XSS (Cross-Site Scripting)
// security vulnerability.
//
// For plain user-provided text, prefer:
//
// element.textContent = userInput;

//* ============================================================
//* 19. SAFE TEXT EXAMPLE
//* ============================================================

const output = document.getElementById("output");

const userInput = "<h1>Hello</h1>";

output.textContent = userInput;

//
// The browser displays:
//
// <h1>Hello</h1>
//
// as text.
//
// It does NOT create an h1 element.

//* ============================================================
//* 20. WHEN innerHTML IS APPROPRIATE
//* ============================================================

// innerHTML is useful when:
//
// 1. You intentionally want to create HTML.
// 2. You are rendering a known HTML template.
// 3. You are building cards/lists/components.
// 4. You need to replace a section's HTML quickly.
//
// Example:

const list = document.getElementById("list");

const products = ["Laptop", "Mouse", "Keyboard"];

list.innerHTML = products.map((product) => `<li>${product}</li>`).join("");

//
// Result:
//
// <li>Laptop</li>
// <li>Mouse</li>
// <li>Keyboard</li>

//* ============================================================
//* 21. innerHTML DOES NOT APPEND
//* ============================================================

// This:

list.innerHTML = "<li>Laptop</li>";

// replaces the existing content.
//
// It does NOT automatically mean:
//
// "add this to the existing content."

//* ============================================================
//* 22. ADDING HTML USING +=
// ============================================================

list.innerHTML += "<li>Monitor</li>";

//
// This appears to append:
//
// Laptop
// Mouse
// Keyboard
// Monitor
//
// But be careful:
//
// Using innerHTML += causes the browser to serialize and
// reparse the element's contents.
//
// Existing DOM nodes may be recreated.
//
// Event listeners attached directly to those nodes can be lost.
//
// For frequent/dynamic DOM updates, DOM methods such as
// createElement() and append() can be more appropriate.

//* ============================================================
//* 23. innerHTML VS createElement()
// ============================================================

// innerHTML:
//
// Fast and convenient for HTML templates.
//
// Example:

list.innerHTML = `
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
`;

// createElement:
//
// Gives more precise control over individual DOM nodes.
//
// Example:

const li = document.createElement("li");

li.textContent = "React";

list.append(li);

//* ============================================================
//* 24. innerHTML REMOVES OLD CHILDREN
//* ============================================================

// Suppose:
//
// <div id="box">
//     <button id="btn">Click</button>
// </div>
//
// If we do:
//
// box.innerHTML = "<p>Hello</p>";
//
// The old button is removed from the DOM.
//
// Any event listener attached directly to that button
// is also no longer attached to that removed node.

//* ============================================================
//* 25. outerHTML CAN CHANGE THE ELEMENT TYPE
//* ============================================================

const container = document.getElementById("container");

container.outerHTML = `
    <section id="container">
        <h2>New Section</h2>
    </section>
`;

//
// A <div> can be replaced by a <section>.
//
// outerHTML controls the complete element markup.

//* ============================================================
//* 26. outerHTML VS innerHTML — SIDE BY SIDE
//* ============================================================

// HTML:
//
// <div id="box">
//     <p>Hello</p>
// </div>

// innerHTML:
//
// box.innerHTML
//
// Gives:
//
// <p>Hello</p>

// outerHTML:
//
// box.outerHTML
//
// Gives:
//
// <div id="box">
//     <p>Hello</p>
// </div>

//* ============================================================
//* 27. QUICK COMPARISON
//* ============================================================
//
// Property       What it contains?
//
// innerHTML      HTML inside the element
//
// outerHTML      Element itself + HTML inside it
//
// textContent    Text content only
//
// innerText      Rendered/visible text-oriented content

//* ============================================================
//* 28. VISUAL MODEL
//* ============================================================
//
// <div id="box">                 ← outerHTML START
//
//     <h2>Hello</h2>             ← innerHTML
//     <p>JavaScript</p>          ← innerHTML
//
// </div>                         ← outerHTML END
//
// ------------------------------------------------------------
//
// innerHTML:
//
//     <h2>Hello</h2>
//     <p>JavaScript</p>
//
// ------------------------------------------------------------
//
// outerHTML:
//
// <div id="box">
//     <h2>Hello</h2>
//     <p>JavaScript</p>
// </div>

//* ============================================================
//* 29. DOM FLOW
//* ============================================================
//
// HTML
//   ↓
// Browser parses HTML
//   ↓
// DOM Tree
//   ↓
// document.getElementById()
//   ↓
// Element
//   ↓
// innerHTML / outerHTML
//   ↓
// Read or replace HTML
//   ↓
// Browser updates the DOM

//* ============================================================
//* 30. COMMON MISTAKES
//* ============================================================

// Mistake 1:
//
// element.innerHTML = "<p>Hello</p>";
//
// Thinking this adds without replacing.
//
// Reality:
//
// It replaces the element's existing children.

// Mistake 2:
//
// Using innerHTML with untrusted user input.
//
// Risk:
//
// XSS vulnerability.
//
// Better:
//
// element.textContent = userInput;

// Mistake 3:
//
// Thinking innerHTML includes the selected element.
//
// Wrong.
//
// innerHTML = inside only.
//
// outerHTML = selected element + inside.

// Mistake 4:
//
// Forgetting that outerHTML replaces the element itself.
//
// outerHTML can remove the original element from the DOM.

// Mistake 5:
//
// Using innerHTML when only text needs to change.
//
// Prefer:
//
// element.textContent = "Hello";

//* ============================================================
//* 31. PROBLEM-SOLVING FORMULA
//* ============================================================
//
// Need HTML inside element?
//         ↓
//      innerHTML
//
// Need complete element HTML?
//         ↓
//      outerHTML
//
// Need only text?
//         ↓
//      textContent
//
// Need to create DOM nodes individually?
//         ↓
//      createElement()

//* ============================================================
//* 32. MOST IMPORTANT DIFFERENCE
//* ============================================================
//
// Suppose:
//
// <button id="btn">Click Me</button>
//
// `btn.innerHTML`
//
// → "Click Me"
//
// `btn.outerHTML`
//
// → '<button id="btn">Click Me</button>'

//* ============================================================
//* 33. GOLDEN RULE
//* ============================================================
//
// innerHTML
// = HTML INSIDE the element
//
// outerHTML
// = COMPLETE HTML OF the element
//
// textContent
// = TEXT ONLY
//
// Remember:
//
//             OUTER
//        ┌───────────────┐
//        │ <div>         │
//        │   INNER       │
//        │   CONTENT     │
//        │ </div>        │
//        └───────────────┘
//
// innerHTML  → inside
// outerHTML  → whole box
// textContent → text
