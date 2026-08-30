//* What Are Variables?
// Variables are containers for storing data values.
// You can think of a variable like a container or a box that holds information. You can put something inside it, take it out, or even replace it with something new later.

// Example

var name = "John"; // Here, we are creating a variable named 'name' and assigning it the value "John".
var age = 30; // Here, we are creating a variable named 'age' and assigning it the value 30.

// Variables allow you to store, retrieve, and manipulate data in your program — which is what makes them one of the most important concepts in any programming language.

//* Declaring Variables

// There are three ways to declare a variable in JavaScript: using var, let, or const.

//* Using var
// var keyword is the oldest way to declare a variable in JavaScript.

var city = "New York"; // Declaring a variable named 'city' and assigning it the value "New York".

// This creates a variable named 'city' and assigns the value "New York" to it. If you want, you can also declare it first and assign a value later:

var country; // Declaring a variable named 'country' without assigning a value.
country = "USA"; // Now we are assigning the value "USA" to the variable 'country'.

// However, var has some scoping issues — it doesn’t follow block-level scope (we’ll discuss this later). That’s why modern JavaScript mostly uses let and const.

//* Using let
// let keyword was introduced in ES6 (ECMAScript 2015) and is now the preferred way to declare variables that can change their value.
let name = "Alice"; // Declaring a variable named 'name' and assigning it the value "Alice".
name = "Bob"; // Changing the value of the variable 'name' to "Bob".

// You can reassign a let variable, but you cannot redeclare it in the same scope.

let name = "Charlie"; // This will throw an error because 'name' has already been declared in the same scope.

//* Using const
// const keyword is also introduced in ES6 and is used to declare variables that cannot be reassigned after their initial assignment.
const PI = 3.14; // Declaring a constant named 'PI' and assigning it the value 3.14.
// PI = 3.14159; // This will throw an error because you cannot reassign a const variable.

// You must assign a value to a const variable at the time of declaration — leaving it empty will also cause an error:

// const GRAVITY; // This will not throw an error because const variables must be initialized at the time of declaration.

// However, if the constant holds an object or array, the contents of that object can still change (only the reference is constant):

const arr = [1, 2, 3];
arr.push(4); // Works fine
console.log(arr); // [1, 2, 3, 4]

//* JavaScript Is Dynamically Typed
// JavaScript is a dynamically typed language, which means you don’t have to specify the data type of a variable when you declare it. The type is determined automatically based on the value assigned to the variable.

let x = 10; // number
x = "Hello"; // now it's a string
x = [1, 2, 3]; // now it's an array
