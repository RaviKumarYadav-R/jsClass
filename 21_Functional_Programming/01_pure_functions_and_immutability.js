//* ============================================================
//* PURE FUNCTIONS & IMMUTABILITY
//* ============================================================

//* Pure function:
//* same input -> same output, with no observable side effects.

function add(a, b) {
  return a + b;
}

//* Side-effect example:
let total = 0;
function addToTotal(value) {
  total += value;
}

//* Immutability means treating a value as not directly changed.
//* It does not mean JavaScript makes every object immutable.

const user = { name: "Ravi", role: "developer" };
const updatedUser = { ...user, role: "teacher" };

console.log(user);
console.log(updatedUser);

//* Practical benefit: predictable transformations and easier testing.
//* Trade-off: unnecessary copying can cost memory/time; choose based
//* on the application's requirements.