//* ============================================================
//* BROWSER STORAGE AND PLATFORM APIs
//* ============================================================

//* localStorage persists string key/value data for the origin.
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
console.log(theme);

//* Store structured data with JSON.
const settings = { theme: "dark", fontSize: 16 };
localStorage.setItem("settings", JSON.stringify(settings));
const savedSettings = JSON.parse(localStorage.getItem("settings") || "null");
console.log(savedSettings);

//* sessionStorage has a similar API but is scoped to the page session.
// sessionStorage.setItem("step", "2");

//* Important browser APIs to learn next:
//* URL / URLSearchParams
//* Clipboard API
//* Notifications API
//* Geolocation API
//* File API
//* Drag and Drop API
//* Web Workers
//* IndexedDB
//* Cache API / Service Workers
//* WebSocket
//* BroadcastChannel

//* Security reminder:
//* Never store secrets such as private keys in browser storage.
//* XSS can expose data accessible to JavaScript.

//* Golden Rule:
//* localStorage/sessionStorage store strings; serialize objects explicitly.
