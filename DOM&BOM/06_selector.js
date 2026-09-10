//* ============================================================
//* DOM ELEMENT SELECTION IN JAVASCRIPT
//* ============================================================

//* Definition
// DOM element selection is the process of finding HTML elements
// from the document so that JavaScript can read, modify, style,
// create, remove, or attach events to them.
//
// The four classic document selection methods are:
//
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. getElementsByName()
//
// Modern JavaScript also provides:
//
// 5. querySelector()
// 6. querySelectorAll()

//* ============================================================
//* SAMPLE HTML
//* ============================================================
//
// Use this HTML while practicing:
//
// <h1 id="title">JavaScript DOM</h1>
//
// <p class="text">First paragraph</p>
// <p class="text">Second paragraph</p>
//
// <button name="action">Save</button>
// <button name="action">Delete</button>
//
// <input name="username" type="text">
// <input name="email" type="email">
//
// <div>First div</div>
// <div>Second div</div>

//* ============================================================
//* 1. getElementById()
//* ============================================================

//* Definition
// `getElementById()` finds an HTML element using its unique `id`.
//
// Syntax:
//
// document.getElementById("id");
//
// Return value:
//
// → Matching Element
// → null if no matching element exists

const title = document.getElementById("title");

console.log(title);

// HTML:
//
// <h1 id="title">JavaScript DOM</h1>
//
// JavaScript:
//
// document.getElementById("title")
//
//        ↓
//
// <h1 id="title">JavaScript DOM</h1>

//* IMPORTANT:
//
// Do NOT use #:
//
// WRONG:
//
// document.getElementById("#title");
//
// CORRECT:
//
// document.getElementById("title");

//* ============================================================
//* 2. getElementsByClassName()
//* ============================================================

//* Definition
// `getElementsByClassName()` returns a live HTMLCollection
// containing all elements that have the specified class name.
//
// Syntax:
//
// document.getElementsByClassName("className");
//
// Return value:
//
// → HTMLCollection
//
// It can contain zero, one, or many elements.

const texts = document.getElementsByClassName("text");

console.log(texts);

// HTML:
//
// <p class="text">First paragraph</p>
// <p class="text">Second paragraph</p>
//
// Result:
//
// HTMLCollection
//     ↓
// [p, p]

//* IMPORTANT:
//
// A class is normally used when multiple elements share the same
// styling or behavior.

//* ============================================================
//* 3. ACCESS ELEMENTS BY INDEX
//* ============================================================

// Because HTMLCollection is collection-like, we can access an
// element by index.

console.log(texts[0]);
console.log(texts[1]);

// Index:
//
// texts[0] → First paragraph
// texts[1] → Second paragraph

//* ============================================================
//* 4. LOOP THROUGH CLASS ELEMENTS
//* ============================================================

for (let i = 0; i < texts.length; i++) {
  console.log(texts[i].textContent);
}

// Output:
//
// First paragraph
// Second paragraph

//* Modify all elements:

for (let i = 0; i < texts.length; i++) {
  texts[i].style.color = "blue";
}

//* ============================================================
//* 5. getElementsByTagName()
//* ============================================================

//* Definition
// `getElementsByTagName()` returns a live HTMLCollection containing
// all elements with the specified HTML tag name.
//
// Syntax:
//
// document.getElementsByTagName("tagName");

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// If HTML contains:
//
// <p>One</p>
// <p>Two</p>
// <p>Three</p>
//
// Then:
//
// paragraphs
//
// contains all three <p> elements.

//* ============================================================
//* 6. GET ALL DIV ELEMENTS
//* ============================================================

const divs = document.getElementsByTagName("div");

console.log(divs);

// This finds every:
//
// <div>
//
// element in the document.

//* ============================================================
//* 7. GET ALL BUTTON ELEMENTS
//* ============================================================

const buttons = document.getElementsByTagName("button");

console.log(buttons);

// This finds every:
//
// <button>
//
// element.

//* ============================================================
//* 8. LOOP THROUGH TAG ELEMENTS
//* ============================================================

for (let i = 0; i < buttons.length; i++) {
  buttons[i].textContent = `Button ${i + 1}`;
}

// Result:
//
// Button 1
// Button 2
// Button 3
//
// depending on the number of buttons.

//* ============================================================
//* 9. getElementsByName()
//* ============================================================

//* Definition
// `getElementsByName()` returns a NodeList containing elements
// whose `name` attribute matches the specified value.
//
// Syntax:
//
// document.getElementsByName("name");

// Example HTML:
//
// <input name="username">
// <input name="email">
// <button name="action">Save</button>

const username = document.getElementsByName("username");

console.log(username);

// Result:
//
// NodeList
//     ↓
// [input]

//* ============================================================
//* 10. MULTIPLE ELEMENTS WITH SAME NAME
//* ============================================================

// HTML:
//
// <input type="radio" name="gender" value="male">
// <input type="radio" name="gender" value="female">
// <input type="radio" name="gender" value="other">

const genderOptions = document.getElementsByName("gender");

console.log(genderOptions);

// Result:
//
// NodeList containing all elements whose:
//
// name="gender"

// This is one of the most common uses of getElementsByName().
//
// Especially:
//
// - Radio buttons
// - Form controls
// - Groups of related inputs

//* ============================================================
//* 11. LOOP THROUGH getElementsByName()
//* ============================================================

for (let i = 0; i < genderOptions.length; i++) {
  console.log(genderOptions[i].value);
}

// Possible output:
//
// male
// female
// other

//* ============================================================
//* 12. CHECK RADIO BUTTON
//* ============================================================

for (let i = 0; i < genderOptions.length; i++) {
  if (genderOptions[i].checked) {
    console.log("Selected:", genderOptions[i].value);
  }
}

// Flow:
//
// Find all elements with name="gender"
//              ↓
// Loop through them
//              ↓
// Check `.checked`
//              ↓
// Find selected option
//              ↓
// Read `.value`

//* ============================================================
//* 13. FOUR CLASSIC METHODS
//* ============================================================
//
// getElementById()
// → Find by ID
//
// getElementsByClassName()
// → Find by class
//
// getElementsByTagName()
// → Find by HTML tag
//
// getElementsByName()
// → Find by name attribute

//* ============================================================
//* 14. RETURN VALUE COMPARISON
//* ============================================================
//
// getElementById()
//
// → Element
// → null
//
//
// getElementsByClassName()
//
// → HTMLCollection
//
//
// getElementsByTagName()
//
// → HTMLCollection
//
//
// getElementsByName()
//
// → NodeList

//* ============================================================
//* 15. ONE vs MANY
//* ============================================================
//
// ID:
//
// getElementById()
//       ↓
// ONE ELEMENT
//
// Class:
//
// getElementsByClassName()
//       ↓
// MANY ELEMENTS
//
// Tag:
//
// getElementsByTagName()
//       ↓
// MANY ELEMENTS
//
// Name:
//
// getElementsByName()
//       ↓
// ONE OR MANY ELEMENTS

//* MEMORY:
//
// ID    → ONE
// CLASS → MANY
// TAG   → MANY
// NAME  → ONE OR MANY

//* ============================================================
//* 16. ID vs CLASS
//* ============================================================
//
// HTML:
//
// <div id="profile">Profile</div>
// <div class="card">Card 1</div>
// <div class="card">Card 2</div>
//
//
// ID:
//
// document.getElementById("profile");
//
// → Profile div
//
//
// CLASS:
//
// document.getElementsByClassName("card");
//
// → Card 1 + Card 2

//* ============================================================
//* 17. CLASS vs TAG
//* ============================================================
//
// HTML:
//
// <p class="text">Hello</p>
// <p class="text">World</p>
// <div class="text">Container</div>
//
//
// Class:
//
// document.getElementsByClassName("text");
//
// → p
// → p
// → div
//
//
// Tag:
//
// document.getElementsByTagName("p");
//
// → p
// → p

//* MEMORY:
//
// CLASS → "Find elements having this class"
//
// TAG → "Find elements having this HTML tag"

//* ============================================================
//* 18. NAME vs ID
//* ============================================================
//
// ID:
//
// <input id="username">
//
// document.getElementById("username");
//
// Usually identifies one specific element.
//
//
// NAME:
//
// <input name="username">
//
// document.getElementsByName("username");
//
// Can identify one or multiple elements.

//* ============================================================
//* 19. NAME IS COMMON IN FORMS
//* ============================================================

// HTML:
//
// <input type="text" name="username">
// <input type="email" name="email">
//
// <input type="radio" name="plan" value="free">
// <input type="radio" name="plan" value="pro">

const plans = document.getElementsByName("plan");

for (let i = 0; i < plans.length; i++) {
  if (plans[i].checked) {
    console.log("Selected plan:", plans[i].value);
  }
}

//* ============================================================
//* 20. querySelector()
//* ============================================================

//* Definition
// `querySelector()` returns the first element that matches a
// CSS selector.
//
// Syntax:
//
// document.querySelector("CSS selector");

// By ID:

const elementById = document.querySelector("#title");

// By class:

const elementByClass = document.querySelector(".text");

// By tag:

const elementByTag = document.querySelector("p");

// By name:

const elementByName = document.querySelector('[name="username"]');

//* IMPORTANT:
//
// querySelector()
// → FIRST matching element

//* ============================================================
//* 21. querySelectorAll()
//* ============================================================

//* Definition
// `querySelectorAll()` returns a static NodeList containing all
// elements that match a CSS selector.

// All classes:

const allText = document.querySelectorAll(".text");

// All paragraphs:

const allParagraphs = document.querySelectorAll("p");

// All username inputs:

const allUsernameInputs = document.querySelectorAll('[name="username"]');

//* ============================================================
//* 22. querySelectorAll() WITH forEach
//* ============================================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  console.log(card.textContent);
});

// This is convenient because NodeList returned by
// querySelectorAll() supports forEach() in modern browsers.

//* ============================================================
//* 23. COMPLETE SELECTION COMPARISON
//* ============================================================
//
// METHOD                    RETURNS
//
// getElementById()          Element / null
//
// getElementsByClassName()  Live HTMLCollection
//
// getElementsByTagName()    Live HTMLCollection
//
// getElementsByName()       NodeList
//
// querySelector()           First matching Element / null
//
// querySelectorAll()        Static NodeList

//* ============================================================
//* 24. SELECTOR SYNTAX
//* ============================================================
//
// HTML:
//
// <div id="box" class="card">
// </div>
//
//
// ID:
//
// getElementById("box")
//
// querySelector("#box")
//
//
// CLASS:
//
// getElementsByClassName("card")
//
// querySelector(".card")
//
//
// TAG:
//
// getElementsByTagName("div")
//
// querySelector("div")
//
//
// NAME:
//
// getElementsByName("username")
//
// querySelector('[name="username"]')

//* ============================================================
//* 25. WHY # AND . ARE DIFFERENT
//* ============================================================
//
// CSS selector:
//
// #title
//   ↓
// ID
//
//
// .card
//   ↓
// CLASS
//
//
// button
//   ↓
// TAG
//
//
// [name="username"]
//   ↓
// ATTRIBUTE

//* IMPORTANT:
//
// `getElementById()`:
//
// document.getElementById("title");
//
// No #.
//
//
//
// `querySelector()`:
//
// document.querySelector("#title");
//
// # is required because it is a CSS ID selector.

//* ============================================================
//* 26. LIVE vs STATIC
//* ============================================================

// getElementsByClassName():

const liveCollection = document.getElementsByClassName("item");

// This is LIVE.
//
// If matching elements are added/removed from the DOM,
// the collection reflects those changes.

// querySelectorAll():

const staticList = document.querySelectorAll(".item");

// This is STATIC.
//
// It represents the matching elements at the time the query
// was performed.

//* MEMORY:
//
// getElements*
// → LIVE
//
// querySelectorAll
// → STATIC

//* ============================================================
//* 27. PRACTICAL EXAMPLE — UPDATE ALL CARDS
//* ============================================================

const cardElements = document.getElementsByClassName("card");

for (let i = 0; i < cardElements.length; i++) {
  cardElements[i].classList.add("active");
}

//* ============================================================
//* 28. PRACTICAL EXAMPLE — UPDATE ALL PARAGRAPHS
//* ============================================================

const paragraphElements = document.getElementsByTagName("p");

for (let i = 0; i < paragraphElements.length; i++) {
  paragraphElements[i].textContent = "Updated paragraph";
}

//* ============================================================
//* 29. PRACTICAL EXAMPLE — GET FORM INPUT
//* ============================================================

// HTML:
//
// <input name="username" type="text">

const usernameInput = document.getElementsByName("username")[0];

if (usernameInput) {
  console.log(usernameInput.value);
}

//* IMPORTANT:
//
// getElementsByName()
// returns a collection.
//
// Therefore:
//
// document.getElementsByName("username")
//
// is NOT directly the input element.
//
// To access the first matching element:
//
// document.getElementsByName("username")[0]

//* ============================================================
//* 30. PRACTICAL EXAMPLE — FIND BUTTONS
//* ============================================================

const allButtons = document.getElementsByTagName("button");

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", () => {
    console.log("Button clicked");
  });
}

//* ============================================================
//* 31. WHICH METHOD SHOULD YOU USE?
//* ============================================================
//
// Need one unique element?
//
// → getElementById()
//
//
// Need elements by class?
//
// → getElementsByClassName()
//
// or:
//
// → querySelectorAll(".class")
//
//
// Need elements by tag?
//
// → getElementsByTagName()
//
// or:
//
// → querySelectorAll("tag")
//
//
// Need form elements by name?
//
// → getElementsByName()
//
//
// Need a complex CSS selector?
//
// → querySelector()
//
// → querySelectorAll()

//* ============================================================
//* 32. MODERN DOM RECOMMENDATION
//* ============================================================
//
// For beginner DOM learning, understand ALL of these:
//
// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// getElementsByName()
// querySelector()
// querySelectorAll()
//
//
// In modern projects, querySelector() and querySelectorAll()
// are extremely useful because they support CSS selectors.
//
// But understanding the older/specialized methods is important
// because you will encounter them in existing JavaScript code.

//* ============================================================
//* 33. COMMON MISTAKES
//* ============================================================

// Mistake 1:
//
// document.getElementById("#title");
//
// WRONG.
//
// Correct:
//
// document.getElementById("title");

// Mistake 2:
//
// const cards =
//     document.getElementsByClassName("card");
//
// cards.textContent = "Hello";
//
// WRONG because `cards` is a collection.
//
// You need:
//
// for (let i = 0; i < cards.length; i++) {
//     cards[i].textContent = "Hello";
// }

// Mistake 3:
//
// Assuming getElementsByTagName() returns an Array.
//
// It returns an HTMLCollection.
//
// It is array-like, but it is not a normal Array.

// Mistake 4:
//
// Assuming getElementsByClassName() is static.
//
// It returns a LIVE HTMLCollection.

// Mistake 5:
//
// Assuming querySelectorAll() returns one element.
//
// It returns ALL matching elements as a static NodeList.

// Mistake 6:
//
// Forgetting `[0]` when using getElementsByName() for one element.
//
// Example:
//
// const input =
//     document.getElementsByName("username")[0];

//* ============================================================
//* 34. DOM SELECTION FORMULA
//* ============================================================
//
// ASK:
//
// "How do I identify this element?"
//
//
// Unique ID?
//     ↓
// getElementById()
//
//
// Class?
//     ↓
// getElementsByClassName()
//
//
// HTML tag?
//     ↓
// getElementsByTagName()
//
//
// name attribute?
//     ↓
// getElementsByName()
//
//
// CSS selector?
//     ↓
// querySelector()
// querySelectorAll()

//* ============================================================
//* 35. MENTAL MODEL
//* ============================================================
//
//                 DOCUMENT
//                    │
//        ┌───────────┼────────────┐
//        ↓           ↓            ↓
//       ID          CLASS         TAG
//        │           │            │
//        ↓           ↓            ↓
// getElementById  getElements   getElements
//                    ByClass       ByTag
//
//                    │
//                    ↓
//                   NAME
//                    │
//                    ↓
//               getElementsByName
//
//
// Modern CSS selector system:
//
//                 document
//                    │
//              ┌─────┴─────┐
//              ↓           ↓
//       querySelector  querySelectorAll
//              │           │
//              ↓           ↓
//           FIRST        ALL

//* ============================================================
//* 36. QUICK REFERENCE TABLE
//* ============================================================
//
// METHOD
//
// getElementById("id")
// → Find by ID
// → Element / null
//
// getElementsByClassName("class")
// → Find by class
// → Live HTMLCollection
//
// getElementsByTagName("tag")
// → Find by tag
// → Live HTMLCollection
//
// getElementsByName("name")
// → Find by name attribute
// → NodeList
//
// querySelector("selector")
// → First CSS-selector match
// → Element / null
//
// querySelectorAll("selector")
// → All CSS-selector matches
// → Static NodeList

//* ============================================================
//* 37. GOLDEN RULE
//* ============================================================
//
// ID
//     → getElementById()
//
// CLASS
//     → getElementsByClassName()
//
// TAG
//     → getElementsByTagName()
//
// NAME
//     → getElementsByName()
//
// CSS SELECTOR
//     → querySelector()
//     → querySelectorAll()
//
//
// MEMORY TRICK:
//
// ID    = ONE
// CLASS = GROUP
// TAG   = TYPE
// NAME  = FORM GROUP
// CSS   = FLEXIBLE SELECTOR

//* ============================================================
//* FINAL MEMORY MAP
//* ============================================================
//
//                    DOM
//                     │
//          "Find an element"
//                     │
//       ┌─────────────┼─────────────┐
//       ↓             ↓             ↓
//      ONE           MANY          MANY
//       │             │             │
//       ↓             ↓             ↓
//      ID           CLASS          TAG
//       │             │             │
//       ↓             ↓             ↓
// getElementById  getElementsBy  getElementsBy
//                 ClassName      TagName
//
// NAME
//   ↓
// getElementsByName()
//
// CSS
//   ↓
// querySelector()
// querySelectorAll()
//
//
//* NEVER FORGET:
//
// getElementById()
//        ↓
// Element / null
//
// getElementsByClassName()
//        ↓
// Live HTMLCollection
//
// getElementsByTagName()
//        ↓
// Live HTMLCollection
//
// getElementsByName()
//        ↓
// NodeList
//
// querySelector()
//        ↓
// First match
//
// querySelectorAll()
//        ↓
// All matches
//* ============================================================
