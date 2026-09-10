//* ============================================================
//* CLOSURES, THIS, CALL/APPLY/BIND
//* ============================================================

//* Closure
//* A function retains access to variables from its lexical scope
//* even after the outer function has finished executing.
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());

//* this
//* `this` is determined by how a regular function is called.
//* Arrow functions do not create their own `this`.
const user = {
  name: "Ravi",
  greet() {
    return `Hello ${this.name}`;
  },
};
console.log(user.greet());

//* call -> invokes now, arguments separately
//* apply -> invokes now, arguments as an array
//* bind -> returns a new function with bound this/arguments
function introduce(city, role) {
  return `${this.name} | ${city} | ${role}`;
}

const person = { name: "Ravi" };
console.log(introduce.call(person, "Dhanbad", "Developer"));
console.log(introduce.apply(person, ["Dhanbad", "Developer"]));
const boundIntroduce = introduce.bind(person, "Dhanbad");
console.log(boundIntroduce("Developer"));

//* Common mistake:
//* const fn = user.greet; fn(); -> loses the object receiver.
//* Use bind when a callback must keep a particular receiver.

//* Golden Rule:
//* Closure = function + remembered lexical environment.
//* this = call-site behavior for regular functions.
