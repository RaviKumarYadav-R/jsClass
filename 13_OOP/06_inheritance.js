//* ============================================================
//* JAVASCRIPT OOP — INHERITANCE
//* ============================================================

//* Inheritance lets one class/object reuse behavior from another.
//* JavaScript implements inheritance through prototype chains.

//* 1. MODERN CLASS INHERITANCE
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  study() {
    return `${this.name} studies ${this.course}`;
  }

  greet() {
    return `${super.greet()} and I am a student`;
  }
}

const student = new Student("Ravi", "JavaScript");
console.log(student.greet());
console.log(student.study());
console.log(student instanceof Student);
console.log(student instanceof Person);

//* `extends` establishes prototype inheritance.
//* `super()` calls the parent constructor before using `this`.
//* `super.method()` calls a parent method implementation.

//* 2. UNDER THE HOOD
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Bruno", "Labrador");
console.log(dog.speak());

//* Object.create(Animal.prototype) does not copy methods.
//* It links Dog.prototype to Animal.prototype.

//* Lookup flow:
//* dog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null

//* IMPORTANT RULES
//* - Prefer modern class syntax for application-level OOP.
//* - Learn prototypes because classes use the prototype system underneath.
//* - Inheritance represents an "is-a" relationship.
//* - Do not force inheritance when composition is better.

//* Golden Rule:
//* `extends` is syntax; the prototype chain is the mechanism.
