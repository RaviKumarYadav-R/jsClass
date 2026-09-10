//* ============================================================
//* PROTOTYPES AND PROTOTYPE CHAIN
//* ============================================================

//* JavaScript objects can delegate property lookup to another object.
//* That linked object is the object's prototype.

const animal = {
  speak() {
    return `${this.name} makes a sound`;
  },
};

const dog = Object.create(animal);
dog.name = "Bruno";

console.log(dog.speak());
console.log(Object.getPrototypeOf(dog) === animal);

//* Lookup flow:
//* dog.speak -> not found on dog -> check animal -> found -> call with this = dog

//* Constructor prototypes
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const ravi = new User("Ravi");
console.log(ravi.greet());
console.log(ravi instanceof User);

//* class syntax uses the same prototype system underneath.
class Student {
  constructor(name) {
    this.name = name;
  }

  study() {
    return `${this.name} is studying`;
  }
}

const student = new Student("Aman");
console.log(student.study());

//* `prototype` is a property of constructor functions/classes.
//* `[[Prototype]]` is the internal prototype link of an object.
//* Object.getPrototypeOf(obj) reads that link.

//* Golden Rule:
//* Prototype methods are shared through delegation; they are not copied
//* onto every instance.
