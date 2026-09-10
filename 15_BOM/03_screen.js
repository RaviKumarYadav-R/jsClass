//* ============================================================
//* SCREEN OBJECT IN JAVASCRIPT
//* ============================================================

//* Definition
// The JavaScript `screen` object represents the physical display
// screen associated with the browser window.
//
// It provides information about screen-related properties such as:
//
// - Screen width and height
// - Available screen area
// - Color depth
// - Pixel depth
//
// It is available through the `window` object:
//
//     window.screen
//
// Because `window` is the browser's global object, we can usually
// access it directly:
//
//     screen

console.log(window.screen);
console.log(screen);

//* ============================================================
//* 1. SCREEN OBJECT vs BROWSER WINDOW
//* ============================================================

// This is one of the MOST IMPORTANT concepts.
//
// `screen`
// → Information about the physical display.
//
// `window`
// → Information about the browser window/tab.
//
// `window.innerWidth`
// → Width of the browser's current viewport.
//
// Example:
//
// Physical screen:
//     1920 × 1080
//
// Browser window:
//     1200 × 900
//
// Viewport:
//     approximately 1200 × 800
//
// These values can all be different.

//* MEMORY TRICK:
//
// screen = DISPLAY
// window = BROWSER WINDOW
// viewport = VISIBLE WEBPAGE AREA

//* ============================================================
//* 2. screen.width
//* ============================================================

//* Definition
// `screen.width` returns the width of the screen in CSS pixels.

console.log(screen.width);

// Example output:
//
// 1920
//
// This means the screen reports a width of 1920 CSS pixels.

// IMPORTANT:
// This is NOT necessarily the width of the webpage.
//
// For webpage width, use:
//
// window.innerWidth

//* ============================================================
//* 3. screen.height
//* ============================================================

//* Definition
// `screen.height` returns the height of the screen in CSS pixels.

console.log(screen.height);

// Example:
//
// Screen:
//
// 1920 × 1080
//
// screen.width  → 1920
// screen.height → 1080

//* ============================================================
//* 4. SCREEN RESOLUTION
//* ============================================================

// We can display the reported screen dimensions together.

console.log(`Screen size: ${screen.width} × ${screen.height}px`);

// Example:
//
// Screen size: 1920 × 1080px

//* IMPORTANT:
//
// This tells us the screen dimensions reported to the browser.
// It should not be confused with the physical hardware resolution
// in device pixels.

//* ============================================================
//* 5. screen.availWidth
//* ============================================================

//* Definition
// `screen.availWidth` returns the width of the screen area that is
// available to the browser, excluding certain operating-system
// interface areas such as a taskbar or dock when applicable.

console.log(screen.availWidth);

// Example:
//
// screen.width
//      ↓
// 1920
//
// screen.availWidth
//      ↓
// 1920
//
// or potentially a smaller value depending on the OS interface.

//* ============================================================
//* 6. screen.availHeight
//* ============================================================

//* Definition
// `screen.availHeight` returns the height of the screen area that
// is available to the browser, excluding certain operating-system
// interface areas.

console.log(screen.availHeight);

console.log(
  `Available screen area: ${screen.availWidth} × ${screen.availHeight}px`,
);

// Example:
//
// Screen:
//     1920 × 1080
//
// Available area:
//     1920 × 1040
//
// The difference may be caused by an operating-system interface
// such as a taskbar.

/*
// IMPORTANT:
//
// `availHeight` does NOT mean:
//
// "How much webpage space is available?"
//
// For the browser viewport, use:
//
// window.innerHeight
*/

//* ============================================================
//* 7. screen.colorDepth
//* ============================================================

//* Definition
// `screen.colorDepth` returns the number of bits used to represent
// the color of a single pixel according to the screen information
// exposed by the browser.

console.log(screen.colorDepth);

// A common value is:
//
// 24
//
// 24 bits can represent approximately:
//
// 2^24
//
// different color combinations.

//* CALCULATION:

console.log(2 ** screen.colorDepth);

// NOTE:
// Modern displays commonly report values such as 24 or 30.
// The exact reported value depends on the browser and environment.

//* ============================================================
//* 8. screen.pixelDepth
//* ============================================================

//* Definition
// `screen.pixelDepth` returns the pixel depth of the screen,
// measured in bits per pixel.

console.log(screen.pixelDepth);

// In many modern environments:
//
// screen.pixelDepth
//
// and
//
// screen.colorDepth
//
// may return the same value.

//* IMPORTANT:
// Do not confuse these properties with the physical number of
// hardware pixels on a modern high-DPI display.

//* ============================================================
//* 9. SCREEN ORIENTATION
//* ============================================================

// Modern browsers also expose screen orientation information
// through:
//
// screen.orientation

console.log(screen.orientation);

// Common properties include:
//
// screen.orientation.type
// screen.orientation.angle

//* Example:

if (screen.orientation) {
  console.log("Orientation:", screen.orientation.type);
  console.log("Angle:", screen.orientation.angle);
}

// Possible orientation types include:
//
// "portrait-primary"
// "portrait-secondary"
// "landscape-primary"
// "landscape-secondary"

//* ============================================================
//* 10. SCREEN ORIENTATION CHANGE
//* ============================================================

// The Screen Orientation API can provide an event when the
// orientation changes.

if (screen.orientation) {
  screen.orientation.addEventListener("change", () => {
    console.log("New orientation:", screen.orientation.type);
  });
}

// Example:
//
// Mobile phone:
//
// Portrait
//    ↓
// Rotate phone
//    ↓
// Landscape
//    ↓
// orientation change event

//* ============================================================
//* 11. SCREEN POSITION
//* ============================================================

// Some browsers also expose:
//
// screenX
// screenY
//
// These are properties of the Window object, not the Screen object.
//
// They describe the position of the browser window relative to
// the screen coordinate space.

console.log(window.screenX);
console.log(window.screenY);

//* IMPORTANT:
//
// screenX / screenY
// → browser window position
//
// screen.width / screen.height
// → screen dimensions

//* ============================================================
//* 12. screen vs window.innerWidth
//* ============================================================

// This is extremely important for responsive web development.

console.log("Screen width:", screen.width);
console.log("Viewport width:", window.innerWidth);

// Suppose:
//
// screen.width = 1920
// window.innerWidth = 1200
//
// This means:
//
// Physical display area reported:
//     1920px
//
// Current browser viewport:
//     1200px

//* RESPONSIVE DESIGN:
//
// Usually use:
//
// window.innerWidth
//
// rather than:
//
// screen.width

//* ============================================================
//* 13. screen vs window.innerHeight
//* ============================================================

console.log("Screen height:", screen.height);
console.log("Viewport height:", window.innerHeight);

// Example:
//
// screen.height
// → 1080
//
// window.innerHeight
// → 800
//
// Why different?
//
// Because the browser window may not occupy the entire screen and
// browser UI may consume some space.

//* ============================================================
//* 14. SCREEN vs VIEWPORT — VISUAL MODEL
//* ============================================================
//
//             PHYSICAL SCREEN
//      ┌──────────────────────────────┐
//      │                              │
//      │       Browser Window         │
//      │    ┌────────────────────┐    │
//      │    │                    │    │
//      │    │     VIEWPORT       │    │
//      │    │                    │    │
//      │    │    Your webpage    │    │
//      │    │                    │    │
//      │    └────────────────────┘    │
//      │                              │
//      └──────────────────────────────┘
//
// screen.width
// screen.height
//      ↓
// Physical display information
//
// window.innerWidth
// window.innerHeight
//      ↓
// Current webpage viewport

//* ============================================================
//* 15. PRACTICAL EXAMPLE — SCREEN INFORMATION
//* ============================================================

function getScreenInfo() {
  return {
    width: screen.width,
    height: screen.height,
    availableWidth: screen.availWidth,
    availableHeight: screen.availHeight,
    colorDepth: screen.colorDepth,
    pixelDepth: screen.pixelDepth,
  };
}

console.log(getScreenInfo());

// Possible structure:
//
// {
//     width: 1920,
//     height: 1080,
//     availableWidth: 1920,
//     availableHeight: 1040,
//     colorDepth: 24,
//     pixelDepth: 24
// }

//* ============================================================
//* 16. PRACTICAL EXAMPLE — SCREEN + VIEWPORT
//* ============================================================

function showDisplayInformation() {
  console.log(`Screen: ${screen.width} × ${screen.height}`);

  console.log(`Viewport: ${window.innerWidth} × ${window.innerHeight}`);
}

showDisplayInformation();

// This helps us understand the difference between:
//
// display size
// and
// webpage viewport size.

//* ============================================================
//* 17. RESPONSIVE DESIGN
//* ============================================================

// IMPORTANT:
//
// Although screen information can be useful, responsive web
// layouts should generally respond to the viewport rather than
// the physical screen.
//
// Example:

function checkViewport() {
  if (window.innerWidth < 768) {
    console.log("Small viewport");
  } else if (window.innerWidth < 1024) {
    console.log("Medium viewport");
  } else {
    console.log("Large viewport");
  }
}

checkViewport();

// This is generally more useful for webpage layout than:
//
// if (screen.width < 768)

//* ============================================================
//* 18. SCREEN SIZE IS NOT DEVICE TYPE
//* ============================================================

// Avoid assumptions like:
//
// screen.width < 768
//     ↓
// "This is definitely a phone"
//
// That is not reliable.
//
// A small browser window can exist on a desktop.
//
// A mobile device can have a large CSS-pixel screen.
//
// Device detection from screen dimensions is therefore unreliable.

//* ============================================================
//* 19. SCREEN PROPERTIES ARE READ-ONLY
//* ============================================================

// Screen information is generally exposed as information for
// your application to read.
//
// Example:

console.log(screen.width);

// You should not think of this as something your webpage can simply
// change:
//
// screen.width = 500;

// The browser/OS controls these screen properties.

//* ============================================================
//* 20. MULTI-MONITOR ENVIRONMENTS
//* ============================================================

// Modern computers can have multiple displays.
//
// The browser window can move from one display to another.
//
// Therefore, screen-related information can be more complicated
// than:
//
// "The user's computer has exactly one screen."

// The Screen API provides information about the screen associated
// with the browser window, while other browser APIs can provide
// additional information for multi-screen scenarios.

//* ============================================================
//* 21. COMMON MISTAKES
//* ============================================================

// Mistake 1:
// Thinking screen.width is webpage width.
//
// WRONG:
//
// const width = screen.width;
//
// for responsive layout
//
// BETTER:
//
// const width = window.innerWidth;

// Mistake 2:
// Thinking screen.width means physical hardware pixels.
//
// `screen.width` is expressed in CSS pixels exposed by the browser.
// High-DPI displays make the distinction important.

// Mistake 3:
// Thinking screen.availWidth means viewport width.
//
// WRONG:
//
// screen.availWidth
// → webpage viewport
//
// CORRECT:
//
// window.innerWidth
// → webpage viewport width

// Mistake 4:
// Using screen dimensions to identify the device.
//
// WRONG:
//
// if (screen.width < 768) {
//     // Definitely a phone
// }
//
// Screen dimensions alone cannot reliably identify device type.

// Mistake 5:
// Confusing screen.height with visible webpage height.
//
// Use:
//
// window.innerHeight
//
// for the current viewport height.

//* ============================================================
//* 22. QUICK REFERENCE
//* ============================================================
//
// screen.width
// → Screen width in CSS pixels
//
// screen.height
// → Screen height in CSS pixels
//
// screen.availWidth
// → Available screen width
//
// screen.availHeight
// → Available screen height
//
// screen.colorDepth
// → Reported color depth in bits
//
// screen.pixelDepth
// → Reported pixel depth in bits
//
// screen.orientation
// → Screen orientation information
//
// screen.orientation.type
// → Orientation type
//
// screen.orientation.angle
// → Orientation angle
//
// window.innerWidth
// → Browser viewport width
//
// window.innerHeight
// → Browser viewport height

//* ============================================================
//* 23. SCREEN vs NAVIGATOR
//* ============================================================
//
// navigator
// → Browser/environment information
//
// Examples:
//
// navigator.language
// navigator.onLine
// navigator.geolocation
// navigator.userAgent
//
//
// screen
// → Display/screen information
//
// Examples:
//
// screen.width
// screen.height
// screen.availWidth
// screen.availHeight
// screen.colorDepth

//* ============================================================
//* 24. SCREEN vs WINDOW vs DOCUMENT
//* ============================================================
//
// window
//      ↓
// Browser window/tab
//
// screen
//      ↓
// Physical display information
//
// document
//      ↓
// Current webpage/DOM
//
// navigator
//      ↓
// Browser/environment capabilities
//
// location
//      ↓
// Current URL
//
// history
//      ↓
// Session navigation history

//* ============================================================
//* 25. MENTAL MODEL
//* ============================================================
//
// Think about three boxes:
//
// ┌─────────────────────────────┐
// │          SCREEN             │
// │     screen.width            │
// │     screen.height           │
// │     screen.availWidth       │
// │     screen.availHeight      │
// └──────────────┬──────────────┘
//                │
//                ↓
// ┌─────────────────────────────┐
// │       BROWSER WINDOW        │
// │    window.innerWidth        │
// │    window.innerHeight       │
// └──────────────┬──────────────┘
//                │
//                ↓
// ┌─────────────────────────────┐
// │          WEBPAGE            │
// │         document            │
// └─────────────────────────────┘

//* ============================================================
//* 26. MOST IMPORTANT RULES
//* ============================================================
//
// 1. `screen` represents the display associated with the browser.
//
// 2. `screen.width` = screen width.
//
// 3. `screen.height` = screen height.
//
// 4. `screen.availWidth` = available screen width.
//
// 5. `screen.availHeight` = available screen height.
//
// 6. `screen.colorDepth` = reported color depth.
//
// 7. `screen.pixelDepth` = reported pixel depth.
//
// 8. `screen.orientation` provides orientation information.
//
// 9. `screen.width` is NOT the same as webpage width.
//
// 10. `window.innerWidth` is usually more useful for responsive
//     webpage layouts.
//
// 11. Screen dimensions do NOT reliably identify the device type.
//
// 12. Screen information is browser/OS-dependent and should be
//     treated as environmental information.

//* ============================================================
//* GOLDEN RULE
//* ============================================================
//
// screen = DISPLAY
//
// screen.width
//     → Display width
//
// screen.height
//     → Display height
//
// screen.availWidth
//     → Available display width
//
// screen.availHeight
//     → Available display height
//
// window.innerWidth
//     → Webpage viewport width
//
// window.innerHeight
//     → Webpage viewport height
//
// MEMORY:
//
// SCREEN = WHERE THE BROWSER LIVES
// VIEWPORT = WHERE THE WEBPAGE IS VISIBLE
//* ============================================================
