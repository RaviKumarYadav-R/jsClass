//* ============================================================
//* NAVIGATOR OBJECT IN JAVASCRIPT
//* ============================================================

//* Definition
// The JavaScript `navigator` object provides information about
// the browser and the environment in which the current webpage
// is running.
//
// It is available through the `window` object:
//
//     window.navigator
//
// Because `window` is the browser's global object, we can usually
// access it directly as:
//
//     navigator

console.log(window.navigator);
console.log(navigator);

//* ============================================================
//* 1. WHAT INFORMATION DOES navigator PROVIDE?
//* ============================================================

// The navigator object exposes information and capabilities related
// to the browser and user's browsing environment.
//
// Examples:
//
// navigator.userAgent
// navigator.language
// navigator.languages
// navigator.onLine
// navigator.cookieEnabled
// navigator.hardwareConcurrency
// navigator.geolocation
// navigator.clipboard
// navigator.mediaDevices
//
// Some properties are informational, while others provide access
// to browser APIs.

//* ============================================================
//* 2. navigator.userAgent
//* ============================================================

//* Definition
// `navigator.userAgent` returns a string containing the browser's
// user-agent information.
//
// Browsers send/expose this information for compatibility and
// identification purposes.
//
// Example:

console.log(navigator.userAgent);

// Example output might look similar to:
//
// Mozilla/5.0 (...) AppleWebKit/... Chrome/... Safari/...

// IMPORTANT:
// Do NOT assume that checking for "Chrome" is a reliable way to
// detect Google Chrome.
//
// For example, Chromium-based browsers may contain "Chrome" in
// their user-agent string.
//
// User-agent sniffing is also affected by browser privacy changes.

/*
// Old approach:
//
// if (navigator.userAgent.includes("Chrome")) {
//     console.log("Chrome");
// }
//
// This is NOT recommended as a general browser-detection strategy.
*/

//* ============================================================
//* 3. navigator.onLine
//* ============================================================

//* Definition
// `navigator.onLine` is a boolean property that indicates whether
// the browser currently considers the device to be online.
//
// true  → browser considers the device online
// false → browser considers the device offline

console.log(navigator.onLine);

if (navigator.onLine) {
  console.log("Browser reports that the device is online.");
} else {
  console.log("Browser reports that the device is offline.");
}

// IMPORTANT:
// `navigator.onLine === true` does NOT guarantee that your server,
// API, or the internet is actually reachable.
//
// It is only an indication of the browser's network connectivity
// state.

//* ============================================================
//* 4. ONLINE / OFFLINE EVENTS
//* ============================================================

// The browser provides `online` and `offline` events.
//
// These can be used to react when the browser's reported
// connectivity state changes.

window.addEventListener("online", () => {
  console.log("Device is online.");
});

window.addEventListener("offline", () => {
  console.log("Device is offline.");
});

// Practical use:
//
// Show:
//
// "You are offline."
//
// when the browser reports an offline state.
//
// Then remove the message when it reports an online state.

//* ============================================================
//* 5. navigator.language
//* ============================================================

//* Definition
// `navigator.language` returns the user's preferred language
// associated with the browser.

console.log(navigator.language);

// Example output:
//
// "en-US"
// "en-GB"
// "hi-IN"

// This can be useful for selecting a default language in an
// internationalized application.

//* ============================================================
//* 6. navigator.languages
//* ============================================================

//* Definition
// `navigator.languages` returns an array containing the user's
// preferred languages in order of preference.

console.log(navigator.languages);

// Example:
//
// ["en-US", "en", "hi-IN"]

// The first language is generally the user's highest preference.

//* ============================================================
//* 7. navigator.cookieEnabled
//* ============================================================

//* Definition
// `navigator.cookieEnabled` indicates whether cookies are enabled
// in the browser.

console.log(navigator.cookieEnabled);

if (navigator.cookieEnabled) {
  console.log("Cookies are enabled.");
} else {
  console.log("Cookies are disabled.");
}

// IMPORTANT:
// This property indicates browser cookie behavior, but it should
// not be treated as a guarantee that every particular cookie
// operation will succeed.

//* ============================================================
//* 8. navigator.hardwareConcurrency
//* ============================================================

//* Definition
// `navigator.hardwareConcurrency` indicates the number of logical
// processor cores the browser reports as available to it.

console.log(navigator.hardwareConcurrency);

// Example:
//
// 4
// 8
// 12
// etc.
//
// This can sometimes help applications decide how much work to
// perform in parallel, for example with Web Workers.

// IMPORTANT:
// This is an approximate browser-reported value, not necessarily
// a direct description of the physical CPU.

//* ============================================================
//* 9. navigator.geolocation
//* ============================================================

//* Definition
// `navigator.geolocation` provides access to the Geolocation API,
// which allows a website to request the user's geographic position.
//
// The browser normally asks the user for permission before
// providing the location.

console.log(navigator.geolocation);

//* ============================================================
//* 10. getCurrentPosition()
//* ============================================================

//* Definition
// `navigator.geolocation.getCurrentPosition()` requests the
// user's current geographic position.
//
// Syntax:
//
// navigator.geolocation.getCurrentPosition(
//     successCallback,
//     errorCallback
// );

function handleLocation(position) {
  console.log("Latitude:", position.coords.latitude);
  console.log("Longitude:", position.coords.longitude);
}

function handleLocationError(error) {
  console.log("Unable to get location.");
  console.log(error.message);
}

// Request the user's location:
//
// navigator.geolocation.getCurrentPosition(
//     handleLocation,
//     handleLocationError
// );

// The code above is commented out because running it may trigger
// a browser permission request.

//* IMPORTANT:
// Geolocation does NOT simply mean:
//
// "Get GPS coordinates or IP address."
//
// The browser uses available location sources and the operating
// system/browser's location mechanisms. The exact source can vary.
//
// Permission is required, and secure contexts (HTTPS) are generally
// required for Geolocation API access.

//* ============================================================
//* 11. POSITION OBJECT
//* ============================================================

// When location is successfully obtained, the callback receives
// a Position object.
//
// Common properties:
//
// position.coords.latitude
// position.coords.longitude
// position.coords.accuracy
//
// Example:

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  console.log("Accuracy:", accuracy, "meters");
}

//* ============================================================
//* 12. navigator.clipboard
//* ============================================================

//* Definition
// `navigator.clipboard` provides access to the Clipboard API,
// which can be used for operations such as reading from or writing
// to the system clipboard, subject to browser security rules.

console.log(navigator.clipboard);

// Example: copying text

async function copyText() {
  try {
    await navigator.clipboard.writeText("Hello JavaScript");

    console.log("Text copied successfully.");
  } catch (error) {
    console.log("Copy failed.");
  }
}

// Usually call this from a user action such as a button click.

//* ============================================================
//* 13. navigator.mediaDevices
//* ============================================================

//* Definition
// `navigator.mediaDevices` provides access to media-device APIs,
// such as requesting access to cameras and microphones.

console.log(navigator.mediaDevices);

// Example:
//
// navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true
// });
//
// This normally requires user permission and appropriate browser
// security conditions.

//* ============================================================
//* 14. navigator.userAgentData
//* ============================================================

// Some modern browsers expose:
//
// navigator.userAgentData
//
// It provides structured user-agent information where supported.

if (navigator.userAgentData) {
  console.log(navigator.userAgentData);
}

// IMPORTANT:
// It is not universally available in every browser.
//
// Therefore, feature detection is important:
//
// if (navigator.userAgentData) {
//     // Use it
// }

//* ============================================================
//* 15. FEATURE DETECTION
//* ============================================================

//* Definition
// Feature detection means checking whether a browser supports a
// particular feature before using it.
//
// This is generally better than trying to identify the browser
// by its name.

if ("geolocation" in navigator) {
  console.log("Geolocation API is available.");
} else {
  console.log("Geolocation API is not available.");
}

// Another example:

if ("clipboard" in navigator) {
  console.log("Clipboard API is available.");
}

//* GOLDEN IDEA:
//
// Don't ask:
//
// "Which browser is this?"
//
// Prefer asking:
//
// "Does this browser support the feature I need?"

//* ============================================================
//* 16. navigator vs screen
//* ============================================================

// IMPORTANT CORRECTION:
//
// `screen.width` and `screen.height` do NOT belong to navigator.
//
// They belong to the `screen` object.
//
// Correct:
//
// console.log(screen.width);
// console.log(screen.height);

// `navigator`
// → browser/environment information and capabilities
//
// `screen`
// → physical display information

console.log(screen.width);
console.log(screen.height);

//* ============================================================
//* 17. screen.width
//* ============================================================

//* Definition
// `screen.width` returns the width of the user's physical display
// in CSS pixels.

console.log(`Screen width: ${screen.width}px`);

//* ============================================================
//* 18. screen.height
//* ============================================================

//* Definition
// `screen.height` returns the height of the user's physical display
// in CSS pixels.

console.log(`Screen height: ${screen.height}px`);

// IMPORTANT:
//
// screen.width
//      ↓
// Physical display dimensions
//
// window.innerWidth
//      ↓
// Current browser viewport width
//
// These are NOT the same thing.

//* ============================================================
//* 19. navigator vs window vs screen
//* ============================================================
//
// window
// → Browser window/tab and global browser environment
//
// navigator
// → Browser/device environment information + capabilities
//
// screen
// → Physical display information
//
// document
// → Current webpage/DOM
//
// location
// → Current URL/navigation information
//
// history
// → Current session history

//* ============================================================
//* 20. PRACTICAL EXAMPLE — DEVICE INFORMATION
//* ============================================================

console.log("Language:", navigator.language);
console.log("Online:", navigator.onLine);
console.log("Cookies:", navigator.cookieEnabled);
console.log("CPU cores:", navigator.hardwareConcurrency);

console.log("Screen width:", screen.width);
console.log("Screen height:", screen.height);

// This gives a basic picture of the browser environment.

//* ============================================================
//* 21. PRACTICAL EXAMPLE — OFFLINE MESSAGE
//* ============================================================

function updateNetworkStatus() {
  if (navigator.onLine) {
    console.log("✅ You are online.");
  } else {
    console.log("❌ You are offline.");
  }
}

updateNetworkStatus();

window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

// Flow:
//
// Browser checks connectivity state
//          ↓
// navigator.onLine
//          ↓
// true / false
//          ↓
// Application updates UI

//* ============================================================
//* 22. PRACTICAL EXAMPLE — LANGUAGE
//* ============================================================

function getPreferredLanguage() {
  return navigator.language;
}

console.log(getPreferredLanguage());

// A real application could use this information to choose a
// default language:
//
// "en-US" → English
// "hi-IN" → Hindi
// etc.

//* ============================================================
//* 23. COMMON MISTAKES
//* ============================================================

// Mistake 1:
// Thinking navigator contains screen dimensions.
//
// WRONG:
//
// navigator.screen.width
//
// CORRECT:
//
// screen.width

// Mistake 2:
// Treating navigator.onLine as proof that the internet works.
//
// WRONG:
//
// if (navigator.onLine) {
//     // API definitely works
// }
//
// CORRECT:
//
// Use navigator.onLine as a connectivity hint and handle actual
// network/API failures as well.

// Mistake 3:
// Using userAgent to reliably detect browsers.
//
// Avoid fragile checks such as:
//
// navigator.userAgent.includes("Chrome");

// Prefer feature detection:
//
// if ("geolocation" in navigator) {
//     // Feature is available
// }

// Mistake 4:
// Assuming geolocation is automatically available.
//
// Geolocation normally requires:
//
// - Browser support
// - Appropriate security context
// - User permission

// Mistake 5:
// Assuming latitude/longitude are automatically available.
//
// The user can deny permission, the request can fail, or location
// may not be available.

/*
// Mistake 6:
// Using clipboard APIs without handling errors.
//
// navigator.clipboard.writeText("Hello");
//
// This can fail depending on permissions, security context,
// browser policy, or user interaction requirements.
*/

//* ============================================================
//* 24. MENTAL MODEL
//* ============================================================
//
// Think of `navigator` as:
//
//        BROWSER ENVIRONMENT
//               │
//      ┌────────┼─────────┐
//      ↓        ↓         ↓
//   Language  Network   Features
//      │        │         │
//      ↓        ↓         ↓
// language   onLine   geolocation
// languages            clipboard
//                      mediaDevices
//
//
// `navigator` helps JavaScript understand the environment in which
// the webpage is running.

//* ============================================================
//* 25. QUICK REFERENCE
//* ============================================================
//
// navigator.userAgent
// → User-agent string
//
// navigator.onLine
// → Browser's reported online/offline state
//
// navigator.language
// → Preferred browser language
//
// navigator.languages
// → Preferred language list
//
// navigator.cookieEnabled
// → Whether cookies are enabled
//
// navigator.hardwareConcurrency
// → Reported logical processor count
//
// navigator.geolocation
// → Geolocation API
//
// navigator.clipboard
// → Clipboard API
//
// navigator.mediaDevices
// → Media device APIs
//
// screen.width
// → Physical display width
//
// screen.height
// → Physical display height
//
// window.innerWidth
// → Browser viewport width

//* ============================================================
//* 26. MEMORY TRICK
//* ============================================================
//
// navigator
//     ↓
// "What does the browser/environment provide?"
//
// screen
//     ↓
// "What is the physical display like?"
//
// window
//     ↓
// "What is the browser window/tab like?"
//
// document
//     ↓
// "What is inside my webpage?"
//
// location
//     ↓
// "What URL am I on?"
//
// history
//     ↓
// "Where have I navigated in this tab?"

//* ============================================================
//* GOLDEN RULE
//* ============================================================
//
// navigator = BROWSER + ENVIRONMENT INFORMATION
//
// Use it to:
// - inspect browser capabilities
// - check reported connectivity state
// - access geolocation
// - access clipboard APIs
// - access media-device APIs
// - read language preferences
//
// But:
//
// ❌ Don't depend on userAgent for fragile browser detection.
// ❌ Don't treat onLine as proof that the internet/API is reachable.
// ❌ Don't confuse screen dimensions with viewport dimensions.
// ❌ Don't assume sensitive capabilities work without permission.
//
// ✅ Prefer FEATURE DETECTION.
//
// Example:
//
// if ("geolocation" in navigator) {
//     // Use geolocation
// }
