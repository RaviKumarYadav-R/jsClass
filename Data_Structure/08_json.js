//* ============================================================
//* WORKING WITH JSON
//* ============================================================

// JSON = JavaScript Object Notation
//
// JSON is a text format used to store and exchange data.
//
// Common places where you see JSON:
//
// → APIs
// → Databases
// → localStorage
// → sessionStorage
// → Configuration files
// → Communication between different systems

//* ============================================================
//* 1. WHAT IS JSON?
//* ============================================================

// JSON looks similar to a JavaScript object,
// but JSON itself is TEXT (a string).

const jsonData = `{
  "name": "Ravi",
  "age": 21,
  "isStudent": true
}`;

console.log(typeof jsonData);

// string

//* Important:
//
// JSON:
// "text representation of data"
//
// JavaScript Object:
// actual JavaScript value

//* ============================================================
//* 2. JSON vs JAVASCRIPT OBJECT
//* ============================================================

// JavaScript object:

const user = {
  name: "Ravi",
  age: 21,
  isStudent: true,
};

console.log(typeof user);

// object

// JSON:

const jsonUser = `{
  "name": "Ravi",
  "age": 21,
  "isStudent": true
}`;

console.log(typeof jsonUser);

// string

//* Remember:
//
// JS Object → object
// JSON      → string/text

//* ============================================================
//* 3. WHY DO WE USE JSON?
//* ============================================================

// JSON is commonly used for:
//
// 1. Sending data between frontend and backend
// 2. Receiving API responses
// 3. Storing structured data
// 4. localStorage / sessionStorage
// 5. Exchanging data between different systems

//* Example:
//
// Frontend
//    ↓
// JSON
//    ↓
// Backend
//
// Backend
//    ↓
// JSON
//    ↓
// Frontend

//* ============================================================
//* 4. JSON.stringify()
//* ============================================================

// JSON.stringify() converts a JavaScript value
// into a JSON string.

const person = {
  name: "Ravi",
  age: 21,
  city: "Dhanbad",
};

const jsonString = JSON.stringify(person);

console.log(jsonString);

console.log(typeof jsonString);

// string

//* Mental Model:
//
// JavaScript Object
//       ↓
// JSON.stringify()
//       ↓
// JSON String

//* ============================================================
//* 5. WHY STRINGIFY?
//* ============================================================

// Suppose we want to store an object in localStorage.
//
// localStorage stores strings.
//
// Therefore:

const userData = {
  name: "Ravi",
  age: 21,
};

const dataString = JSON.stringify(userData);

localStorage.setItem("user", dataString);

//* Now the object has been converted into text.
//
// Object
//   ↓
// stringify()
//   ↓
// String
//   ↓
// localStorage

//* ============================================================
//* 6. JSON.parse()
//* ============================================================

// JSON.parse() converts a valid JSON string
// into a JavaScript value.

const jsonString2 = `{
  "name": "Ravi",
  "age": 21
}`;

const user2 = JSON.parse(jsonString2);

console.log(user2);

console.log(typeof user2);

// object

//* Mental Model:
//
// JSON String
//     ↓
// JSON.parse()
//     ↓
// JavaScript Object

//* ============================================================
//* 7. ACCESSING PARSED DATA
//* ============================================================

const jsonUser2 = `{
  "name": "Ravi",
  "age": 21,
  "city": "Dhanbad"
}`;

const parsedUser = JSON.parse(jsonUser2);

console.log(parsedUser.name);
// Ravi

console.log(parsedUser.age);
// 21

console.log(parsedUser.city);
// Dhanbad

//* Now parsedUser behaves like a normal JS object.

//* ============================================================
//* 8. THE COMPLETE JSON CYCLE
//* ============================================================

// JavaScript → JSON
//
// JSON.stringify()

const user3 = {
  name: "Ravi",
  age: 21,
};

const json = JSON.stringify(user3);

console.log(json);

// JSON → JavaScript
//
// JSON.parse()

const userAgain = JSON.parse(json);

console.log(userAgain);

//* Complete flow:
//
// JS Object
//    ↓
// JSON.stringify()
//    ↓
// JSON String
//    ↓
// JSON.parse()
//    ↓
// JS Object

//* ============================================================
//* 9. localStorage + JSON
//* ============================================================

// localStorage can only store strings.
//
// Therefore:
//
// Object → stringify → localStorage

const user4 = {
  name: "Ravi",
  age: 21,
};

localStorage.setItem("user", JSON.stringify(user4));

//* Retrieve:
//
// localStorage → String
//       ↓
// JSON.parse()
//       ↓
// Object

const storedUser = localStorage.getItem("user");

const parsedUser2 = JSON.parse(storedUser);

console.log(parsedUser2.name);
// Ravi

//* ============================================================
//* 10. IMPORTANT: getItem() CAN RETURN null
//* ============================================================

// If the key doesn't exist:

const data = localStorage.getItem("unknown");

console.log(data);

// null

//* Therefore, don't blindly assume that data exists.

// Safe approach:

const storedData = localStorage.getItem("user");

if (storedData !== null) {
  const user5 = JSON.parse(storedData);

  console.log(user5);
}

//* ============================================================
//* 11. JSON DATA TYPES
//* ============================================================

// JSON supports:
//
// string
// number
// boolean
// null
// object
// array

const validJSON = `{
  "name": "Ravi",
  "age": 21,
  "isDeveloper": true,
  "skills": ["HTML", "CSS", "JavaScript"],
  "address": {
    "city": "Dhanbad"
  },
  "middleName": null
}`;

const data2 = JSON.parse(validJSON);

console.log(data2.name);
console.log(data2.skills);
console.log(data2.address.city);
console.log(data2.middleName);

//* ============================================================
//* 12. JSON KEYS
//* ============================================================

// JSON object keys must use DOUBLE QUOTES.

const validJSON2 = `{
  "name": "Ravi",
  "age": 21
}`;

// JavaScript objects can use unquoted identifier-style keys:

const jsObject = {
  name: "Ravi",
  age: 21,
};

//* JSON:
//
// "name": "Ravi"
//
// JavaScript object:
//
// name: "Ravi"

//* ============================================================
//* 13. JSON.stringify() WITH ARRAY
//* ============================================================

const numbers = [10, 20, 30];

const numbersJSON = JSON.stringify(numbers);

console.log(numbersJSON);

// "[10,20,30]"

console.log(typeof numbersJSON);

// string

//* Parse it back:

const numbersAgain = JSON.parse(numbersJSON);

console.log(numbersAgain);

// [10, 20, 30]

//* ============================================================
//* 14. JSON.stringify() WITH DIFFERENT VALUES
//* ============================================================

console.log(JSON.stringify("Ravi"));
// "Ravi"

console.log(JSON.stringify(21));
// 21

console.log(JSON.stringify(true));
// true

console.log(JSON.stringify(null));
// null

console.log(JSON.stringify([1, 2, 3]));
// [1,2,3]

//* All results are JSON text when returned by stringify().

//* ============================================================
//* 15. undefined IN JSON
//* ============================================================

// undefined is NOT a valid JSON data value.

const data3 = {
  name: "Ravi",
  age: undefined,
};

const jsonData3 = JSON.stringify(data3);

console.log(jsonData3);

// {"name":"Ravi"}
//
// The undefined property is omitted.

const arrayData = [10, undefined, 30];

console.log(JSON.stringify(arrayData));

// [10,null,30]
//
// In arrays, undefined becomes null when stringified.

//* ============================================================
//* 16. FUNCTIONS IN JSON
//* ============================================================

// Functions are not represented in JSON.

const user6 = {
  name: "Ravi",

  greet() {
    console.log("Hello");
  },
};

console.log(JSON.stringify(user6));

// {"name":"Ravi"}
//
// The function property is omitted.

//* JSON is for DATA, not JavaScript behavior.

//* ============================================================
//* 17. NaN AND Infinity
//* ============================================================

// JSON does not have separate NaN or Infinity values.

const numbersData = {
  a: NaN,
  b: Infinity,
  c: -Infinity,
};

console.log(JSON.stringify(numbersData));

// {"a":null,"b":null,"c":null}

//* ============================================================
//* 18. PRETTY JSON
//* ============================================================

// JSON.stringify() accepts:
//
// JSON.stringify(value, replacer, space)

const user7 = {
  name: "Ravi",
  age: 21,
  city: "Dhanbad",
};

const prettyJSON = JSON.stringify(user7, null, 2);

console.log(prettyJSON);

// Output:
//
// {
//   "name": "Ravi",
//   "age": 21,
//   "city": "Dhanbad"
// }

//* The third argument controls indentation.
//
// 2 → two spaces
// 4 → four spaces

//* ============================================================
//* 19. JSON.stringify() WITH PROPERTY FILTER
//* ============================================================

// The second argument can select which properties
// should be included.

const user8 = {
  name: "Ravi",
  age: 21,
  city: "Dhanbad",
};

const selectedJSON = JSON.stringify(user8, ["name", "city"]);

console.log(selectedJSON);

// {"name":"Ravi","city":"Dhanbad"}

//* ============================================================
//* 20. JSON.parse() ERROR
//* ============================================================

// JSON.parse() requires valid JSON.
//
// Invalid JSON causes a SyntaxError.

const invalidJSON = `{
  "name": "Ravi",
  "age": 21,
}`;

// JSON.parse(invalidJSON);
// ❌ SyntaxError
//
// The trailing comma makes this invalid JSON.

//* ============================================================
//* 21. SAFE JSON.parse()
//* ============================================================

// If JSON comes from an unreliable source,
// use try...catch.

const unknownJSON = `{
  "name": "Ravi"
}`;

try {
  const result = JSON.parse(unknownJSON);

  console.log(result);
} catch (error) {
  console.error("Invalid JSON:", error);
}

//* If parsing fails,
// the catch block handles the error.

//* ============================================================
//* 22. API + JSON
//* ============================================================

// APIs commonly exchange JSON data.
//
// Example:

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//* Flow:
//
// HTTP Response
//      ↓
// response.json()
//      ↓
// JavaScript value
//      ↓
// data
//
// You can then use:
//
// data.name
// data.email
// data.address.city

//* ============================================================
//* 23. response.json() vs JSON.parse()
//* ============================================================

// JSON.parse()
// → takes a JSON STRING
// → returns a JavaScript value

const text = '{"name":"Ravi"}';

const parsed = JSON.parse(text);

console.log(parsed.name);
// Ravi

//* response.json()
// → reads the HTTP response body
// → parses the body as JSON
// → returns a Promise for the resulting JavaScript value

//* Therefore:
//
// const data = JSON.parse(jsonString);
//
// vs
//
// const data = await response.json();

//* They are related concepts,
// but response.json() is an asynchronous Response method.

//* ============================================================
//* 24. API REQUEST WITH JSON
//* ============================================================

// When sending JSON to a server,
// we commonly stringify the JavaScript object.

const newUser = {
  name: "Ravi",
  age: 21,
};

fetch("/api/users", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify(newUser),
});

//* Flow:
//
// JS Object
//    ↓
// JSON.stringify()
//    ↓
// JSON text
//    ↓
// HTTP request body
//    ↓
// Server

//* ============================================================
//* 25. JSON + ARRAYS OF OBJECTS
//* ============================================================

const users = [
  {
    id: 1,
    name: "Ravi",
  },
  {
    id: 2,
    name: "Aman",
  },
];

const usersJSON = JSON.stringify(users);

console.log(usersJSON);

// Parse it back:

const usersAgain = JSON.parse(usersJSON);

console.log(usersAgain[0].name);
// Ravi

//* This structure is extremely common in APIs.

//* ============================================================
//* 26. REAL-WORLD LOCAL STORAGE EXAMPLE
//* ============================================================

// Save user:

const currentUser = {
  id: 101,
  name: "Ravi",
  isLoggedIn: true,
};

localStorage.setItem("currentUser", JSON.stringify(currentUser));

// Get user:

const savedUser = localStorage.getItem("currentUser");

if (savedUser) {
  const userData = JSON.parse(savedUser);

  console.log(userData.name);
  console.log(userData.isLoggedIn);
}

//* Complete flow:
//
// SAVE:
//
// Object
//   ↓
// stringify()
//   ↓
// String
//   ↓
// localStorage

// READ:
//
// localStorage
//   ↓
// String
//   ↓
// parse()
//   ↓
// Object

//* ============================================================
//* 27. JSON vs OBJECT — QUICK COMPARISON
//* ============================================================

// JavaScript Object:
//
// const user = {
//   name: "Ravi"
// };
//
// typeof user
// → "object"

// JSON:
//
// const json = '{"name":"Ravi"}';
//
// typeof json
// → "string"

// Convert Object → JSON:
//
// JSON.stringify()

// Convert JSON → Object:
//
// JSON.parse()

//* ============================================================
//* 28. MOST IMPORTANT JSON FORMULA
//* ============================================================

// Sending / storing:
//
// JS VALUE
//    ↓
// JSON.stringify()
//    ↓
// JSON STRING

// Receiving / reading:
//
// JSON STRING
//    ↓
// JSON.parse()
//    ↓
// JS VALUE

//* ============================================================
//* MEMORY TRICK
//* ============================================================

// stringify
// → "Make it a string"
//
// parse
// → "Turn JSON text into a JS value"
//
//
// STRINGIFY → JS → JSON TEXT
//
// PARSE     → JSON TEXT → JS

//* ============================================================
//* GOLDEN RULE
//* ============================================================

// JSON is TEXT.
//
// JSON.stringify()
// → JavaScript value → JSON string
//
// JSON.parse()
// → JSON string → JavaScript value
//
// localStorage
// → stores strings
//
// API
// → commonly sends/receives JSON
//
// Remember:
//
// "STRINGIFY BEFORE STORING/SENDING"
// "PARSE AFTER READING JSON"

// JavaScript Object
//        ↓
//  JSON.stringify()
//        ↓
//    JSON String
//        ↓
//   Network / Storage
//        ↓
//     JSON String
//        ↓
//    JSON.parse()
//        ↓
// JavaScript Object
