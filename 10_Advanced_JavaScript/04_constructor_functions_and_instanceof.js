//* ============================================================
//* CONSTRUCTOR FUNCTIONS & instanceof
//* ============================================================

//* A constructor function is a normal constructable function intended
//* to create and initialize objects when called with `new`.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const ravi = new Person("Ravi");

console.log(ravi.greet());
console.log(ravi instanceof Person); // true
console.log(ravi instanceof Object); // true

//* Prototype chain:
//* ravi -> Person.prototype -> Object.prototype -> null

//* `instanceof` checks whether a constructor's prototype object occurs
//* in the object's prototype chain.

//* Important: instanceof is about prototype relationships, not simply
//* about comparing constructor names or object shapes.