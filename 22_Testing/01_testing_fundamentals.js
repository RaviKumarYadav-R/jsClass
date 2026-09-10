//* ============================================================
//* TESTING FUNDAMENTALS
//* ============================================================

//* A test verifies an expected behavior of a program.

function add(a, b) {
  return a + b;
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
}

assertEqual(add(2, 3), 5, "add should sum numbers");

//* A useful test suite checks:
//* happy path -> boundary cases -> invalid input -> important failures.

//* Testing is not only about coverage percentage. Good tests make
//* important behavior explicit and catch regressions.