//* ============================================================
//* HISTORY OBJECT IN JAVASCRIPT
//* ============================================================

//* Definition
// The JavaScript `history` object represents the browsing history
// of the current browser tab or window.
//
// It is available through the `window` object:
//
//     window.history
//
// Because `window` is the browser's global object, we can usually
// write `history` directly.

console.log(window.history);
console.log(history);

//* ------------------------------------------------------------
//* 1. WHAT IS BROWSER HISTORY?
//* ------------------------------------------------------------

// Browser history is the collection of navigation entries that
// the user has visited during the current browser session.
//
// Example:
//
// Page A → Page B → Page C
//
// The browser remembers these navigation entries so the user can
// use:
//
// Back    → Page B
// Forward → Page C

console.log(history.length);

// `history.length` tells us how many history entries are available
// in the current session history.

// IMPORTANT:
// `history.length` does NOT mean:
// "How many websites has the user visited in total?"
//
// It represents the number of entries in the current browsing
// session history for that browsing context.

//* ============================================================
//* 2. HISTORY OBJECT
//* ============================================================

// The `history` object provides methods for navigating through
// session history and, using the History API, adding or replacing
// history entries.
//
// Common properties/methods:
//
// history.length
// history.back()
// history.forward()
// history.go()
// history.pushState()
// history.replaceState()

//* ============================================================
//* 3. history.length
//* ============================================================

// Definition:
// `history.length` is a read-only property that returns the number
// of entries in the current session history.

console.log(history.length);

// Example:
//
// Suppose the session history is:
//
// Page A → Page B → Page C
//
// history.length might be:
//
// 3
//
// NOTE:
// The exact value depends on the browser's current session history.
// Do not assume it always starts at 1.

//* ============================================================
//* 4. history.back()
//* ============================================================

// Definition:
// `history.back()` navigates to the previous entry in the
// current session history.
//
// It is similar to clicking the browser's Back button.

history.back();

// Example:
//
// Page A → Page B → Page C
//
// If we are currently on Page C:
//
// history.back();
//
// Result:
//
// Page A → Page B ← CURRENT
//
// IMPORTANT:
// If there is no previous history entry, nothing happens.

//* ============================================================
//* 5. history.forward()
//* ============================================================

// Definition:
// `history.forward()` navigates to the next entry in the
// current session history.
//
// It is similar to clicking the browser's Forward button.

history.forward();

// Example:
//
// Page A → Page B → Page C
//
// If we are currently on Page B:
//
// history.forward();
//
// Result:
//
// Page A → Page B → Page C
//                       ↑
//                    CURRENT

//* ============================================================
//* 6. history.go()
//* ============================================================

// Definition:
// `history.go()` navigates a specified number of entries
// backward or forward in session history.
//
// Negative number → go backward
// Positive number → go forward
// 0              → reload the current page

history.go(-1);

// Equivalent idea:
//
// history.back();

history.go(1);

// Equivalent idea:
//
// history.forward();

history.go(-2);

// Go back two history entries.

history.go(2);

// Go forward two history entries.

// IMPORTANT:
// If the requested history entry does not exist, no navigation
// occurs.

//* ============================================================
//* 7. history.pushState()
//* ============================================================

// Definition:
// `history.pushState()` creates a new history entry and can change
// the URL without causing a normal page reload.
//
// Syntax:
//
// history.pushState(state, unused, url);
//
// Parameters:
//
// 1. state
//    Data associated with the new history entry.
//
// 2. unused
//    A parameter that must currently be supplied.
//    Historically it was used for a title, but browsers do not
//    currently use it for that purpose.
//
// 3. url
//    The new URL to display.

//* BASIC EXAMPLE

history.pushState(null, "", "/about");

// The browser URL can change from:
//
// /
//
// to:
//
// /about
//
// without performing a normal document navigation/reload.
//
// A new history entry is also created.

//* ============================================================
//* 8. WHY pushState() IS IMPORTANT
//* ============================================================

// `pushState()` is extremely useful for Single Page Applications
// (SPAs).
//
// Example:
//
// User clicks:
//
// Home → Products → Product Details
//
// A framework such as React can change the displayed UI and URL
// without performing a full document reload.
//
// Conceptually:
//
// User action
//      ↓
// JavaScript
//      ↓
// history.pushState()
//      ↓
// URL changes
//      ↓
// UI changes
//      ↓
// No full page reload

//* ============================================================
//* 9. STATE OBJECT IN pushState()
//* ============================================================

// The first parameter can contain application state.

const productState = {
  productId: 101,
  category: "laptop",
};

history.pushState(productState, "", "/products/101");

// The state becomes associated with this history entry.
//
// It can later be accessed through:
//
// history.state

console.log(history.state);

// Output:
//
// { productId: 101, category: "laptop" }

//* ============================================================
//* 10. history.state
//* ============================================================

// Definition:
// `history.state` contains the state object associated with the
// current history entry.
//
// Example:

console.log(history.state);

// If no state was provided:
//
// history.state
//
// may be null.

//* ============================================================
//* 11. pushState() DOES NOT AUTOMATICALLY CHANGE THE PAGE UI
//* ============================================================

// VERY IMPORTANT:
//
// pushState() changes the URL and history entry.
//
// It does NOT automatically:
// - fetch a new page
// - reload the document
// - change your HTML
// - render a React component
//
// Your JavaScript application must respond to the URL change.

history.pushState({ page: "profile" }, "", "/profile");

// The URL changes.
//
// But JavaScript must still update the UI:
//
// renderProfilePage();

//* ============================================================
//* 12. history.replaceState()
//* ============================================================

// Definition:
// `history.replaceState()` changes the current history entry
// instead of creating a new one.
//
// Syntax:
//
// history.replaceState(state, unused, url);

history.replaceState({ page: "settings" }, "", "/settings");

// Current history entry:
//
// /settings
//
// No additional history entry is created.

//* ============================================================
//* 13. pushState() vs replaceState()
//* ============================================================

// pushState()
//
// Creates NEW history entry.
//
// A → B
//     ↑
//   new entry
//
// User can press Back to return to A.

// replaceState()
//
// Replaces CURRENT history entry.
//
// A → B
//     ↑
//  replaced
//
// There is no additional entry created for the replaced URL.

//* MEMORY TRICK:
//
// pushState    = PUSH a new entry
// replaceState = REPLACE current entry

//* ============================================================
//* 14. SAME-ORIGIN RULE
//* ============================================================

// The URL supplied to pushState() / replaceState() generally must
// be same-origin with the current document.
//
// Example:
//
// Current website:
//
// https://example.com
//
// This is valid:
//
// history.pushState(null, "", "/about");

// This attempts to use a different origin:
//
// history.pushState(
//     null,
//     "",
//     "https://google.com"
// );
//
// This will cause a SecurityError.
//
// WHY?
//
// History API URL manipulation is designed for the current
// document's origin. It cannot turn your page into another origin
// simply by changing the URL with pushState().
//
// For navigation to another website, use normal navigation:
//
// location.href = "https://example.com";

//* ============================================================
//* 15. popstate EVENT
//* ============================================================

// Definition:
// The `popstate` event is fired when the active history entry
// changes because of browser history navigation, such as:
//
// - Back
// - Forward
// - history.go()
//
// It is especially important when building SPA routing.

window.addEventListener("popstate", (event) => {
  console.log("History navigation occurred");
  console.log("State:", event.state);
});

//* ============================================================
//* 16. pushState() AND popstate()
//* ============================================================

// Important concept:
//
// Calling pushState() itself does NOT fire a popstate event.
//
// Example:

history.pushState({ page: "home" }, "", "/home");

// `popstate` is not automatically fired here.
//
// Later, if the user presses Back:
//
// Browser
//    ↓
// Previous history entry
//    ↓
// popstate event
//    ↓
// Your JavaScript handles the new state

//* ============================================================
//* 17. SIMPLE SPA ROUTER EXAMPLE
//* ============================================================

function navigate(path) {
  history.pushState({ path: path }, "", path);

  renderPage(path);
}

function renderPage(path) {
  const app = document.querySelector("#app");

  if (!app) return;

  if (path === "/") {
    app.innerHTML = "<h1>Home</h1>";
  } else if (path === "/about") {
    app.innerHTML = "<h1>About</h1>";
  } else if (path === "/contact") {
    app.innerHTML = "<h1>Contact</h1>";
  } else {
    app.innerHTML = "<h1>404 - Page Not Found</h1>";
  }
}

window.addEventListener("popstate", () => {
  renderPage(location.pathname);
});

// Example:
//
// navigate("/about");
//
// URL:
//
// https://example.com/about
//
// Page can update without a full document reload.

//* ============================================================
//* 18. COMPLETE SPA FLOW
//* ============================================================
//
// User clicks "About"
//        ↓
// navigate("/about")
//        ↓
// history.pushState()
//        ↓
// URL becomes /about
//        ↓
// renderPage("/about")
//        ↓
// About UI displayed
//
// If user clicks browser Back:
//
// Back button
//      ↓
// history changes
//      ↓
// popstate event
//      ↓
// location.pathname
//      ↓
// renderPage()
//      ↓
// Previous UI displayed

//* ============================================================
//* 19. history.back() vs location
//* ============================================================

// history.back()
//
// Navigates to the previous history entry.

history.back();

// location.href
//
// Navigates to a URL.

location.href = "/about";

// Important difference:
//
// history.back()
// → move through existing history
//
// location.href = "/about"
// → perform navigation to a URL

//* ============================================================
//* 20. history.forward() vs history.go()
//* ============================================================

// These are related:
//
// history.forward();
//
// is conceptually similar to:
//
// history.go(1);
//
// And:
//
// history.back();
//
// is conceptually similar to:
//
// history.go(-1);

//* ============================================================
//* 21. pushState() vs normal navigation
//* ============================================================

// Normal navigation:
//
// location.href = "/about";
//
// Browser performs a navigation to /about.
//
// Depending on the navigation, the document may be loaded/replaced.

// History API:
//
// history.pushState(null, "", "/about");
//
// URL changes without normal document navigation.
//
// Your JavaScript is responsible for updating the UI.

//* ============================================================
//* 22. IMPORTANT LIMITATION
//* ============================================================

// `history` represents SESSION HISTORY.
//
// It does not give JavaScript unrestricted access to the user's
// complete browser history.
//
// JavaScript cannot simply ask:
//
// "Show me every website this person has ever visited."
//
// The History API operates on the session history associated with
// the current browsing context.

//* ============================================================
//* 23. COMMON MISTAKES
//* ============================================================

// Mistake 1:
// Thinking pushState() reloads the page.
//
// WRONG:
//
// history.pushState();
// // automatically loads the new page
//
// CORRECT:
//
// pushState() changes the URL/history entry.
// Your application must update the UI.

// Mistake 2:
// Thinking pushState() automatically triggers popstate.
//
// WRONG.
//
// pushState() itself does not fire popstate.

// Mistake 3:
// Using pushState() to navigate to another website.
//
// WRONG:
//
// history.pushState(null, "", "https://google.com");
//
// Use normal navigation for another origin.

// Mistake 4:
// Thinking history.length means total websites visited.
//
// WRONG.
//
// It represents entries in the current session history.

//* ============================================================
//* 24. QUICK REFERENCE
//* ============================================================
//
// history.length
// → Number of entries in current session history
//
// history.back()
// → Go one entry backward
//
// history.forward()
// → Go one entry forward
//
// history.go(-2)
// → Go two entries backward
//
// history.go(2)
// → Go two entries forward
//
// history.pushState()
// → Create a new history entry
//
// history.replaceState()
// → Replace the current history entry
//
// history.state
// → State associated with current history entry
//
// popstate
// → Event used to react to history navigation

//* ============================================================
//* 25. MENTAL MODEL
//* ============================================================
//
// Think of browser history as a STACK/LINE:
//
//     A → B → C → D
//             ↑
//          CURRENT
//
// back()
//     ↓
//
//     A → B → C → D
//         ↑
//      CURRENT
//
// forward()
//        ↓
//
//     A → B → C → D
//             ↑
//          CURRENT
//
// pushState()
//
//     A → B → C → D → E
//                         ↑
//                      CURRENT
//
// replaceState()
//
//     A → B → C → E
//                   ↑
//                CURRENT
//
// The exact internal session-history model is more nuanced than a
// simple stack, but this model is excellent for learning the API.

//* ============================================================
//* 26. MOST IMPORTANT RULES
//* ============================================================
//
// 1. history = browser session-history API.
//
// 2. history.back()
//    → previous entry.
//
// 3. history.forward()
//    → next entry.
//
// 4. history.go(n)
//    → move n entries.
//
// 5. pushState()
//    → creates a new history entry.
//
// 6. replaceState()
//    → replaces the current entry.
//
// 7. pushState() does NOT reload the page.
//
// 8. pushState() does NOT automatically update your UI.
//
// 9. pushState() itself does NOT fire popstate.
//
// 10. popstate is important for Back/Forward handling.
//
// 11. history.length is session-history length, not total
//     websites ever visited.
//
// 12. History API URL manipulation is restricted to the same
//     origin.

/*
//* ============================================================
//* GOLDEN RULE
//* ============================================================
//
// history = NAVIGATION MEMORY
//
// back()       → go back
// forward()    → go forward
// go(n)        → jump
// pushState()  → add
// replaceState → replace
// popstate     → react to history navigation
//
// For SPA routing:
//
// URL + History API + UI rendering + popstate
//                 ↓
//             SPA navigation
//* ============================================================
*/
