//* ============================================================
//* WEB STORAGE
//* ============================================================

//* localStorage persists strings for the site's storage area.
//* sessionStorage also stores strings but is associated with the
//* current browser session/tab context.

localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));
localStorage.removeItem("theme");

//* Store structured data explicitly through JSON:
const settings = { theme: "dark", fontSize: 16 };
localStorage.setItem("settings", JSON.stringify(settings));

const restored = JSON.parse(localStorage.getItem("settings"));
console.log(restored);

//* Never store sensitive secrets in localStorage merely because it is
//* convenient. Treat browser storage as client-accessible data.