//* ============================================================
//* JSON + REGULAR EXPRESSIONS
//* ============================================================

//* JSON (JavaScript Object Notation) is a text data format.
//* It is NOT a JavaScript object.

const user = { name: "Ravi", age: 21 };
const jsonText = JSON.stringify(user);

console.log(typeof jsonText); // string
console.log(jsonText);

const parsedUser = JSON.parse(jsonText);
console.log(parsedUser.name);

//* Mental model:
//* JS value -> JSON.stringify -> JSON text
//* JSON text -> JSON.parse -> JS value

//* Important JSON limitations:
//* - JSON uses double-quoted strings.
//* - It has objects, arrays, strings, numbers, booleans and null.
//* - Functions and undefined are not represented as ordinary JSON data.

//* ============================================================
//* REGULAR EXPRESSIONS
//* ============================================================

//* A regular expression describes a pattern used to search,
//* match or transform text.

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("ravi@example.com"));
console.log(emailPattern.test("not-an-email"));

//* Common methods:
//* test()   -> boolean
//* match()  -> matching information
//* replace()-> transformed string
//* search() -> index

const text = "JavaScript is powerful";
console.log(/javascript/i.test(text));
console.log(text.replace(/powerful/i, "fun"));

//* Teach regex in layers:
//* literals -> character classes -> quantifiers -> anchors -> groups
//* -> alternation -> flags -> practical validation/search problems.