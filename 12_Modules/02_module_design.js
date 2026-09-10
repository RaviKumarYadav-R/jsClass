//* ============================================================
//* MODULE DESIGN
//* ============================================================

//* A module is a file with its own scope that exposes selected values.
//* ESM example:

// math.js
// export function add(a, b) { return a + b; }
// export const PI = 3.14159;

// app.js
// import { add, PI } from "./math.js";

//* Default export:
// export default function createUser() {}
// import createUser from "./user.js";

//* Good module design:
//* - expose a small public API
//* - keep implementation details private
//* - avoid circular dependencies when possible
//* - give modules a clear responsibility
//* - prefer explicit imports over hidden global state

//* Dynamic import loads a module asynchronously:
// const module = await import("./feature.js");
