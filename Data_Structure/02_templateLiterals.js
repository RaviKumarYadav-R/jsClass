//* ============================================================
//* TEMPLATE LITERALS
//* ============================================================

// Template literals are a modern way to create strings.
//
// They use BACKTICKS (`) instead of:
// "double quotes"
// 'single quotes'
//
// Example:

const message = `Hello World`;

console.log(message);

//* ============================================================
//* WHY TEMPLATE LITERALS?
//* ============================================================

// Without template literals, we often use + to combine strings:

const name = "Ravi";
const age = 21;

const oldWay = "My name is " + name + " and I am " + age + " years old.";

console.log(oldWay);

// Template literals make this much cleaner:

const newWay = `My name is ${name} and I am ${age} years old.`;

console.log(newWay);

//* ============================================================
//* STRING INTERPOLATION
//* ============================================================

// String interpolation means inserting a value/expression
// directly inside a string.
//
// Syntax:
//
// `${expression}`
//
// Example:

const username = "Ravi";

console.log(`Hello ${username}!`);

// Output:
// Hello Ravi!

//* ============================================================
//* VARIABLE INTERPOLATION
//* ============================================================

const firstName = "Ravi";
const lastName = "Kumar";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// Output:
// Ravi Kumar

//* ============================================================
//* EXPRESSIONS INSIDE ${}
//* ============================================================

// ${} can contain JavaScript expressions.
//
// Example:

const a = 10;
const b = 20;

console.log(`Sum = ${a + b}`);

// Output:
// Sum = 30

console.log(`Multiplication = ${a * b}`);

console.log(`Is a greater than b? ${a > b}`);

//* ============================================================
//* CALCULATIONS
//* ============================================================

const price = 1000;
const quantity = 3;

console.log(`Total = ₹${price * quantity}`);

// Output:
// Total = ₹3000

//* ============================================================
//* FUNCTION CALLS
//* ============================================================

// You can call functions inside ${}.

function greet(name) {
  return `Hello ${name}`;
}

console.log(`${greet("Ravi")}!`);

// Flow:
//
// greet("Ravi")
//      ↓
// "Hello Ravi"
//      ↓
// inserted into template literal

//* ============================================================
//* CONDITIONAL / TERNARY OPERATOR
//* ============================================================

// You can use ternary expressions inside ${}.

const marks = 85;

console.log(`You have ${marks >= 40 ? "passed" : "failed"} the exam.`);

// Output:
// You have passed the exam.

//* ============================================================
//* MULTIPLE EXPRESSIONS
//* ============================================================

const student = "Ravi";
const score = 92;

console.log(
  `Student: ${student}, Score: ${score}, Status: ${score >= 40 ? "Pass" : "Fail"}`,
);

//* ============================================================
//* MULTI-LINE STRINGS
//* ============================================================

// Template literals can naturally contain multiple lines.

const paragraph = `
This is line 1.
This is line 2.
This is line 3.
`;

console.log(paragraph);

// With normal strings, we would need \n:

const oldParagraph = "Line 1.\nLine 2.\nLine 3.";

console.log(oldParagraph);

//* ============================================================
//* WHITESPACE MATTERS
//* ============================================================

// Everything between the backticks is part of the string,
// including line breaks and spaces.

const text = `
    Hello
        World
`;

console.log(text);

// The indentation/newlines are also preserved.

//* ============================================================
//* HTML TEMPLATE
//* ============================================================

// Template literals are very useful when generating HTML.

const user = {
  name: "Ravi",
  age: 21,
};

const html = `
    <div>
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
    </div>
`;

console.log(html);

//* ============================================================
//* DYNAMIC HTML
//* ============================================================

// We can create dynamic HTML using variables.

const product = {
  name: "Laptop",
  price: 75000,
};

const productCard = `
    <div class="card">
        <h2>${product.name}</h2>
        <p>Price: ₹${product.price}</p>
    </div>
`;

console.log(productCard);

//* ============================================================
//* TEMPLATE LITERAL + FUNCTION
//* ============================================================

function createUserCard(name, age) {
  return `
        <div class="user-card">
            <h2>${name}</h2>
            <p>Age: ${age}</p>
        </div>
    `;
}

console.log(createUserCard("Ravi", 21));

//* ============================================================
//* TEMPLATE LITERAL + ARRAY
//* ============================================================

const fruits = ["Apple", "Banana", "Mango"];

console.log(`I like ${fruits[0]}`);
console.log(`I like ${fruits[1]}`);
console.log(`I like ${fruits[2]}`);

//* ============================================================
//* TEMPLATE LITERAL + OBJECT
//* ============================================================

const person = {
  name: "Ravi",
  city: "Nawada",
};

const introduction = `
Name: ${person.name}
City: ${person.city}
`;

console.log(introduction);

//* ============================================================
//* NESTED / COMPLEX EXPRESSIONS
//* ============================================================

// ${} can contain expressions that themselves contain
// functions, conditions, calculations, etc.

const userAge = 21;

const result = `
    User: ${username}
    Age: ${userAge}
    Status: ${userAge >= 18 ? "Adult" : "Minor"}
`;

console.log(result);

//* ============================================================
//* TEMPLATE LITERAL WITH OBJECT METHODS
//* ============================================================

const person2 = {
  firstName: "Ravi",
  lastName: "Kumar",

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(`Full Name: ${person2.getFullName()}`);

//* ============================================================
//* ESCAPING BACKTICKS
//* ============================================================

// Because template literals use `,
// we need to escape a backtick inside them.
//
// Use:
// \`

const example = `This is a backtick: \``;

console.log(example);

//* ============================================================
//* ESCAPING ${}
//* ============================================================

// Normally ${} means "evaluate this expression".

const value = 100;

console.log(`Value = ${value}`);

// If you want to display ${ literally,
// escape the $:

console.log(`Use \${variable} for interpolation.`);

// Output:
// Use ${variable} for interpolation.

//* ============================================================
//* NORMAL STRING VS TEMPLATE LITERAL
//* ============================================================

const language = "JavaScript";
const version = "ES6";

// Concatenation:

const message1 = "I am learning " + language + " " + version + ".";

// Template literal:

const message2 = `I am learning ${language} ${version}.`;

console.log(message1);
console.log(message2);

// Template literals are usually easier to read
// when many dynamic values are involved.

//* ============================================================
//* TEMPLATE LITERAL RETURNS A STRING
//* ============================================================

const number1 = 10;
const number2 = 20;

const output = `Total: ${number1 + number2}`;

console.log(output);
console.log(typeof output);

// Output:
// Total: 30
// string

//* ============================================================
//* IMPORTANT — ${} DOES NOT CREATE A NEW VARIABLE
//* ============================================================

// ${} simply evaluates the expression
// and converts the result into the surrounding string.

const x = 10;

const message3 = `The value is ${x}`;

console.log(message3);

//* ============================================================
//* TEMPLATE LITERALS WITH BOOLEAN
//* ============================================================

const isLoggedIn = true;

console.log(`Logged in: ${isLoggedIn}`);

// Output:
// Logged in: true

//* ============================================================
//* TEMPLATE LITERALS WITH NULL / UNDEFINED
//* ============================================================

const data1 = null;
const data2 = undefined;

console.log(`Value: ${data1}`);
console.log(`Value: ${data2}`);

// Output:
// Value: null
// Value: undefined

//* ============================================================
//* TEMPLATE LITERALS WITH OBJECTS
//* ============================================================

// Objects converted directly to strings usually produce
// "[object Object]".

const userData = {
  name: "Ravi",
};

console.log(`User: ${userData}`);

// Output:
// User: [object Object]

// Instead, access the required property:

console.log(`User: ${userData.name}`);

// Output:
// User: Ravi

//* ============================================================
//* TEMPLATE LITERAL + ARRAY JOIN
//* ============================================================

// Useful for displaying lists.

const skills = ["HTML", "CSS", "JavaScript"];

console.log(`My skills: ${skills.join(", ")}`);

// Output:
// My skills: HTML, CSS, JavaScript

//* ============================================================
//* PRACTICAL USER PROFILE
//* ============================================================

function createProfile(name, age, role) {
  return `
        =====================
        USER PROFILE
        =====================
        Name: ${name}
        Age: ${age}
        Role: ${role}
        =====================
    `;
}

console.log(createProfile("Ravi", 21, "Web Developer"));

//* ============================================================
//* PRACTICAL PRICE CALCULATION
//* ============================================================

const item = "Keyboard";
const itemPrice = 1500;
const itemQuantity = 2;

const totalPrice = itemPrice * itemQuantity;

console.log(`
    Item: ${item}
    Price: ₹${itemPrice}
    Quantity: ${itemQuantity}
    Total: ₹${totalPrice}
`);

//* ============================================================
//* PRACTICAL STATUS MESSAGE
//* ============================================================

function getStatus(isOnline) {
  return `User is ${isOnline ? "Online 🟢" : "Offline 🔴"}`;
}

console.log(getStatus(true));
console.log(getStatus(false));

//* ============================================================
//* COMMON MISTAKE — USING QUOTES INSTEAD OF BACKTICKS
//* ============================================================

// This does NOT perform interpolation:
//
// const name = "Ravi";
// console.log("Hello ${name}");
//
// Output:
// Hello ${name}

// Correct:

console.log(`Hello ${name}`);

//* ============================================================
//* COMMON MISTAKE — FORGETTING ${}
//* ============================================================

// This simply prints the variable name:

console.log(`Hello name`);

// Correct:

console.log(`Hello ${name}`);

//* ============================================================
//* COMMON MISTAKE — USING ${} OUTSIDE TEMPLATE LITERAL
//* ============================================================

// ${} interpolation only works inside template literals.
//
// Correct:

console.log(`Hello ${name}`);

// This is invalid JavaScript:
//
// console.log(${name});

//* ============================================================
//* TEMPLATE LITERAL VS CONCATENATION
//* ============================================================

// Concatenation:

const userName2 = "Ravi";
const userAge2 = 21;

const msg1 =
  "My name is " + userName2 + " and I am " + userAge2 + " years old.";

console.log(msg1);

// Template literal:

const msg2 = `My name is ${userName2} and I am ${userAge2} years old.`;

console.log(msg2);

// Same result.
// Template literal is generally more readable.

//* ============================================================
//* TEMPLATE LITERALS IN REAL PROJECTS
//* ============================================================

// Common uses:
//
// 1. Dynamic messages
// 2. HTML generation
// 3. User profile cards
// 4. Product cards
// 5. API response display
// 6. Dynamic URLs
// 7. SQL/query construction (with caution)
// 8. Logging
// 9. Multi-line text
// 10. Dynamic UI content

//* ============================================================
//* TEMPLATE LITERAL MENTAL MODEL
//* ============================================================

// Think:
//
// `Normal text ${JavaScript expression} more text`
//
//                    ↓
//
// JavaScript evaluates the expression
//
//                    ↓
//
// Converts the result to string
//
//                    ↓
//
// Produces ONE final string

//* Example:

const price2 = 500;
const quantity2 = 3;

const bill = `Total = ₹${price2 * quantity2}`;

console.log(bill);

// Step-by-step:
//
// price2 * quantity2
//      ↓
// 500 * 3
//      ↓
// 1500
//      ↓
// "Total = ₹1500"

//* ============================================================
//* MOST IMPORTANT RULES
//* ============================================================

// 1. Template literals use backticks ` `.
//
// 2. Variables/expressions go inside ${}.
//
// 3. ${} can contain JavaScript expressions.
//
// 4. Function calls can be used inside ${}.
//
// 5. Ternary expressions can be used inside ${}.
//
// 6. Calculations can be used inside ${}.
//
// 7. Template literals support multi-line strings.
//
// 8. Everything outside ${} is treated as normal text.
//
// 9. The final result of a template literal is a string.
//
// 10. Whitespace and line breaks inside the template
//     literal are preserved.
//
// ⭐ Golden Rule:
//
// `text ${expression} text`
//
// text → stays text
// ${}  → JavaScript runs here
// result → becomes part of the final string

//* ============================================================
//* MEMORY TRICK
//* ============================================================

// Backticks = "dynamic string"
//
// `${}` = "JavaScript inside a string"
//
// Remember:
//
// BACKTICKS
//    ↓
// TEMPLATE
//    ↓
// ${}
//    ↓
// EXPRESSION
//    ↓
// FINAL STRING
