//* ============================================================
//* REFERENCES & GARBAGE COLLECTION
//* ============================================================

//* Primitive values are immutable values.
//* Objects are mutable values and variables can hold references to them.

const original = { count: 1 };
const alias = original;
alias.count = 2;
console.log(original.count); // 2

//* A shallow copy creates a different outer object:
const copy = { ...original };
copy.count = 3;
console.log(original.count); // 2

//* But nested objects remain shared in a shallow copy.
const state = { user: { name: "Ravi" } };
const shallow = { ...state };
shallow.user.name = "Aman";
console.log(state.user.name); // Aman

//* Garbage collection is based on reachability. When an object is no
//* longer reachable through live references, the engine may reclaim it.
//* JavaScript code normally does not manually free ordinary objects.

//* Teaching rule: explain reachability and references rather than
//* claiming that every variable is simply a raw memory address.