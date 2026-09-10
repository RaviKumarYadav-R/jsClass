//* ============================================================
//* JAVASCRIPT MODULES
//* ============================================================

//* Modules let us split code into files with explicit imports/exports.

//* math.js
//* export const add = (a, b) => a + b;
//* export default function multiply(a, b) { return a * b; }

//* app.js
//* import multiply, { add } from "./math.js";
//* console.log(add(2, 3));
//* console.log(multiply(2, 3));

//* Named export -> import by exported name.
//* Default export -> one primary default value per module.
//* A module has its own top-level scope.

//* Browser HTML entry point:
//* <script type="module" src="./app.js"></script>

//* CommonJS (primarily Node.js legacy/common ecosystem):
//* const fs = require("node:fs");
//* module.exports = value;

//* ESM is statically analyzable and is the standard modern module system.

//* Golden Rule:
//* Keep modules focused and expose only the public API other files need.
