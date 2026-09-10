//* ============================================================
//* JAVASCRIPT CLASSES
//* ============================================================

//* 1. WHAT IS OOP?
// ------------------------------------------------------------
// OOP stands for Object-Oriented Programming.
//
// Object-oriented programming is a programming paradigm in which
// programs are designed around objects that contain data and
// behavior.
//
// Data     → properties
// Behavior → methods
//
// Example:
//
// A user has:
//
// name → data
// age  → data
//
// greet() → behavior
//
// JavaScript supports object-oriented programming, but it is
// important to remember that JavaScript's object system is
// prototype-based.
//
// The `class` syntax provides a convenient way to define and
// create objects using a class-like structure.

//* ============================================================
//* 2. WHAT IS A CLASS?
// ============================================================
//
// A class is a special syntax in JavaScript used to define a
// template for creating objects with related properties and
// methods.
//
// In simple words:
//
// Class = a reusable definition
// Object = an individual instance created from that definition.
//
// Example:
//
// class Person {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greet() {
//         return `Hello ${this.name}`;
//     }
// }
//
// Person
//   ↓
// class definition
//
// new Person(...)
//   ↓
// object

//* ============================================================
//* 3. BASIC CLASS SYNTAX
//* ============================================================

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

//* IMPORTANT
//
// `class`     → declares the class
//
// `Person`    → class name
//
// `constructor()` → initializes a new instance
//
// `this.name` → property belonging to the current instance
//
// `greet()`   → method available to Person instances

//* ============================================================
//* 4. CREATING AN OBJECT FROM A CLASS
//* ============================================================
//
// We use the `new` keyword to create an instance of a class.

const person1 = new Person("John", 30);

const person2 = new Person("Jane", 25);

console.log(person1);
console.log(person2);

//* Conceptually:
//
// Person
//   ↓
// new Person("John", 30)
//   ↓
// person1 object
//
// Person
//   ↓
// new Person("Jane", 25)
//   ↓
// person2 object

//* ============================================================
//* 5. WHAT IS AN INSTANCE?
// ============================================================
//
// An instance is an individual object created from a class.
//
// Example:
//
// const person1 = new Person("John", 30);
//
// `person1` is an instance of Person.

console.log(person1 instanceof Person);

// true

//* ============================================================
//* 6. THE CONSTRUCTOR
//* ============================================================
//
// The constructor is a special method used to initialize a new
// class instance.
//
// It is automatically called when `new` creates an instance.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Ravi", 21);

//* Execution:
//
// new User("Ravi", 21)
//        ↓
// constructor(name, age)
//        ↓
// name = "Ravi"
// age = 21
//        ↓
// this.name = "Ravi"
// this.age = 21
//        ↓
// new object returned

//* ============================================================
//* 7. WHY DO WE USE `this`?
// ============================================================
//
// `this` refers to the current object/instance when a class
// constructor or instance method is called in the normal way.
//
// Example:

class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }
}

const student1 = new Student("Ravi", "JavaScript");

console.log(student1.name);
console.log(student1.course);

//* Here:
//
// this → student1
//
// Therefore:
//
// this.name
// ↓
// student1.name
//
// this.course
// ↓
// student1.course

//* ============================================================
//* 8. EVERY INSTANCE CAN HAVE DIFFERENT DATA
//* ============================================================

const student2 = new Student("Aman", "React");

console.log(student1.name);
// Ravi

console.log(student2.name);
// Aman

console.log(student1.course);
// JavaScript

console.log(student2.course);
// React

//* Same class:
//
// Student
//
// Different objects:
//
// student1 → Ravi → JavaScript
// student2 → Aman → React

//* ============================================================
//* 9. CLASS METHODS
//* ============================================================
//
// A method is a function defined inside a class body.
//
// Example:

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }

  getAge() {
    return this.age;
  }
}

const p = new Person2("Ravi", 21);

console.log(p.greet());
console.log(p.getAge());

//* Methods represent behavior associated with instances.

//* ============================================================
//* 10. METHODS DO NOT NEED THE `function` KEYWORD
//* ============================================================

// Correct:

class Car {
  start() {
    console.log("Car started");
  }
}

// Not written like:
//
// class Car {
//
//     function start() {
//     }
//
// }
//
// ❌ Invalid class method syntax.

//* ============================================================
//* 11. HOW CLASS METHODS ARE STORED
//* ============================================================
//
// This is an IMPORTANT concept.
//
// When you create multiple instances:

const car1 = new Car();
const car2 = new Car();

//
// JavaScript does not normally create a completely separate
// copy of the method's function for every instance.
//
// Instance methods are defined on the class's prototype.
//
// Conceptually:
//
// car1
//   ↓
// Car.prototype
//   ↓
// start()
//
// car2
//   ↓
// Car.prototype
//   ↓
// start()

//* This is one reason understanding prototypes is important
//* when learning JavaScript classes.

//* ============================================================
//* 12. CLASS PROTOTYPE
//* ============================================================

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

const animal1 = new Animal();

console.log(Object.getPrototypeOf(animal1) === Animal.prototype);

// true

//* This shows:
//
// animal1
//     ↓
// Animal.prototype
//
// The prototype contains the instance method `speak`.

//* ============================================================
//* 13. CLASS PROPERTY
//* ============================================================
//
// A property is data associated with an object.
//
// Most commonly, instance properties are initialized in
// the constructor.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const product = new Product("Keyboard", 1000);

console.log(product.name);
console.log(product.price);

//* ============================================================
//* 14. PROPERTY VS METHOD
//* ============================================================
//
// Property:
//
// this.name = "Ravi";
//
// Data.
//
// Method:
//
// greet() {
//     return "Hello";
// }
//
// Behavior.

//* MEMORY TRICK
//
// Property → WHAT an object HAS
//
// Method → WHAT an object DOES

//* ============================================================
//* 15. MULTIPLE METHODS
//* ============================================================

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;

      return true;
    }

    return false;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount("Ravi", 1000);

account.deposit(500);

console.log(account.getBalance());
// 1500

account.withdraw(300);

console.log(account.getBalance());
// 1200

//* ============================================================
//* 16. CLASS METHODS CAN MODIFY INSTANCE DATA
//* ============================================================
//
// Methods can read and modify properties through `this`.

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();

console.log(counter.count);
// 2

counter.decrement();

console.log(counter.count);
// 1

//* ============================================================
//* 17. DEFAULT CONSTRUCTOR
//* ============================================================
//
// If you do not define a constructor, JavaScript provides a
// default constructor behavior for the class.
//
// Example:

class Empty {}

const empty = new Empty();

console.log(empty);

//* For a derived class (`extends`), the constructor behavior has
// additional rules involving `super()`.

//* ============================================================
//* 18. CONSTRUCTOR IS OPTIONAL
//* ============================================================

class Greeting {
  sayHello() {
    console.log("Hello");
  }
}

const greeting = new Greeting();

greeting.sayHello();

//* No constructor was necessary because there were no instance
//* properties that needed initialization.

//* ============================================================
//* 19. CLASS EXPRESSIONS
//* ============================================================
//
// A class can also be stored in a variable.

const PersonClass = class {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
};

const person = new PersonClass("Ravi");

console.log(person.greet());

//* ============================================================
//* 20. ANONYMOUS CLASS EXPRESSION
//* ============================================================
//
// The class itself does not have to have a name:

const UserClass = class {
  constructor(name) {
    this.name = name;
  }
};

const user = new UserClass("Ravi");

//* ============================================================
//* 21. NAMED CLASS EXPRESSION
//* ============================================================

const PersonFactory = class Person {
  constructor(name) {
    this.name = name;
  }
};

const personObject = new PersonFactory("Ravi");

//* ============================================================
//* 22. STATIC METHODS
//* ============================================================
//
// A static method belongs to the class itself rather than
// individual instances.
//
// Use the `static` keyword.

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(10, 20));

//* This works:
//
// MathHelper.add()
//
// But this does not:
//
// const helper = new MathHelper();
// helper.add();
//
// Because `add()` is static.

//* ============================================================
//* 23. STATIC VS INSTANCE METHODS
//* ============================================================

class UserManager {
  constructor(name) {
    this.name = name;
  }

  // Instance method
  greet() {
    return `Hello ${this.name}`;
  }

  // Static method
  static createGuest() {
    return new UserManager("Guest");
  }
}

const normalUser = new UserManager("Ravi");

console.log(normalUser.greet());

const guest = UserManager.createGuest();

console.log(guest.name);

//* MEMORY TRICK
//
// Instance method:
//
// object.method()
//
// Static method:
//
// Class.method()

//* ============================================================
//* 24. STATIC PROPERTIES
//* ============================================================
//
// Static properties belong to the class itself.
//
// Example:

class Config {
  static appName = "My App";
  static version = "1.0.0";
}

console.log(Config.appName);
console.log(Config.version);

//* These belong to Config, not to instances.

//* ============================================================
//* 25. PUBLIC INSTANCE FIELDS
//* ============================================================
//
// Modern JavaScript classes support class fields.
//
// Example:

class UserProfile {
  name = "Guest";
  age = 0;
}

const profile = new UserProfile();

console.log(profile.name);
console.log(profile.age);

//* These are instance properties.

//* ============================================================
//* 26. INITIALIZING CLASS FIELDS FROM CONSTRUCTOR
//* ============================================================

class Profile {
  role = "user";

  constructor(name) {
    this.name = name;
  }
}

const profile1 = new Profile("Ravi");

console.log(profile1.name);
console.log(profile1.role);

//* ============================================================
//* 27. PRIVATE CLASS FIELDS
//* ============================================================
//
// JavaScript supports truly private class fields using `#`.
//
// A private field can only be accessed from inside the class.

class SecureAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const secureAccount = new SecureAccount();

secureAccount.deposit(1000);

console.log(secureAccount.getBalance());

// 1000

//* This is NOT allowed:
//
// console.log(secureAccount.#balance);
//
// ❌ SyntaxError

//* ============================================================
//* 28. WHY PRIVATE FIELDS ARE USEFUL
//* ============================================================
//
// Private fields allow a class to hide internal implementation
// details from outside code.
//
// This is called encapsulation.
//
// Outside:
//
// account.deposit(500)
//
// account.getBalance()
//
// Internal:
//
// #balance

//* ============================================================
//* 29. ENCAPSULATION
//* ============================================================
//
// Encapsulation means keeping an object's internal state and
// implementation details controlled behind a public interface.
//
// Example:

class Wallet {
  #balance = 0;

  addMoney(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const wallet = new Wallet();

wallet.addMoney(500);

console.log(wallet.getBalance());

//* Outside code does not directly modify #balance.

//* ============================================================
//* 30. GETTERS
//* ============================================================
//
// A getter is a special method that allows a value to be
// accessed like a property.
//
// It uses the `get` keyword.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.area);

// 50

//* Notice:
//
// rectangle.area
//
// NOT:
//
// rectangle.area()

//* ============================================================
//* 31. SETTERS
//* ============================================================
//
// A setter allows you to control what happens when a property
// is assigned a value.
//
// It uses the `set` keyword.

class Person3 {
  constructor(name) {
    this.name = name;
  }

  set username(value) {
    this.name = value.trim();
  }
}

const person3 = new Person3("Ravi");

person3.username = "  Aman  ";

console.log(person3.name);

// Aman

//* ============================================================
//* 32. GETTER + SETTER WITH PRIVATE FIELD
//* ============================================================

class Temperature {
  #celsius = 0;

  get celsius() {
    return this.#celsius;
  }

  set celsius(value) {
    if (typeof value !== "number") {
      throw new TypeError("Temperature must be a number");
    }

    this.#celsius = value;
  }
}

const temperature = new Temperature();

temperature.celsius = 25;

console.log(temperature.celsius);

//* ============================================================
//* 33. INHERITANCE
//* ============================================================
//
// Inheritance allows one class to derive behavior from another
// class.
//
// JavaScript uses the `extends` keyword.

class AnimalBase {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends AnimalBase {}

const dog = new Dog();

dog.speak();

//* Dog inherits speak() from AnimalBase.

//* ============================================================
//* 34. PARENT AND CHILD CLASS
//* ============================================================
//
// Parent/Base class:
//
// AnimalBase
//
// Child/Derived class:
//
// Dog
//
// Relationship:
//
// Dog IS-A AnimalBase

//* ============================================================
//* 35. ADDING CHILD-SPECIFIC METHODS
//* ============================================================

class AnimalBase2 {
  eat() {
    console.log("Eating");
  }
}

class Dog2 extends AnimalBase2 {
  bark() {
    console.log("Woof!");
  }
}

const dog2 = new Dog2();

dog2.eat();
dog2.bark();

//* Dog2 has:
//
// inherited method → eat()
// own method      → bark()

//* ============================================================
//* 36. SUPER
//* ============================================================
//
// `super` is used inside a derived class to access functionality
// from the parent class.
//
// Most importantly:
//
// `super(...)` calls the parent constructor.

class PersonBase {
  constructor(name) {
    this.name = name;
  }
}

class Developer extends PersonBase {
  constructor(name, language) {
    super(name);

    this.language = language;
  }
}

const developer = new Developer("Ravi", "JavaScript");

console.log(developer.name);
console.log(developer.language);

//* Execution:
//
// new Developer(...)
//        ↓
// Developer constructor
//        ↓
// super(name)
//        ↓
// PersonBase constructor
//        ↓
// this.name = name
//        ↓
// return to Developer constructor
//        ↓
// this.language = language

//* ============================================================
//* 37. IMPORTANT: `super()` MUST COME BEFORE `this`
//* ============================================================
//
// In a derived constructor, you cannot access `this` before
// calling `super()`.
//
// Example:
//
// class Developer extends PersonBase {
//
//     constructor(name) {
//
//         this.name = name;
//         super(name);
//     }
// }
//
// ❌ Error
//
// Correct:
//
// class Developer extends PersonBase {
//
//     constructor(name) {
//
//         super(name);
//     }
// }

//* ============================================================
//* 38. OVERRIDING METHODS
//* ============================================================
//
// A child class can provide its own implementation of a method
// inherited from the parent.
//
// This is called method overriding.

class Animal3 {
  speak() {
    return "Animal sound";
  }
}

class Dog3 extends Animal3 {
  speak() {
    return "Woof!";
  }
}

const dog3 = new Dog3();

console.log(dog3.speak());

// Woof!

//* Dog3's speak() overrides Animal3's speak().

//* ============================================================
//* 39. USING SUPER.METHOD()
// ============================================================
//
// A child class can also call the parent's method using
// `super.method()`.

class Animal4 {
  speak() {
    return "Animal sound";
  }
}

class Dog4 extends Animal4 {
  speak() {
    return `${super.speak()} + Woof!`;
  }
}

const dog4 = new Dog4();

console.log(dog4.speak());

// Animal sound + Woof!

//* ============================================================
//* 40. POLYMORPHISM
//* ============================================================
//
// Polymorphism means that objects of different classes can
// respond to the same method name in different ways.

class Cat {
  speak() {
    return "Meow";
  }
}

class Dog5 {
  speak() {
    return "Woof";
  }
}

function makeAnimalSpeak(animal) {
  console.log(animal.speak());
}

makeAnimalSpeak(new Cat());
makeAnimalSpeak(new Dog5());

//
// Same interface:
//
// animal.speak()
//
// Different behavior:
//
// Cat → Meow
// Dog → Woof

//* ============================================================
//* 41. `instanceof`
// ============================================================
//
// `instanceof` checks whether an object's prototype chain
// contains a class's prototype.

console.log(dog instanceof Dog);
// true

console.log(dog instanceof AnimalBase);
// true

//* Because Dog inherits from AnimalBase.

//* ============================================================
//* 42. CLASS METHODS AND `this`
// ============================================================

class Person4 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const person4 = new Person4("Ravi");

console.log(person4.greet());

//
// Calling:
//
// person4.greet()
//
// makes:
//
// this → person4

//* ============================================================
//* 43. LOSING `this`
// ============================================================
//
// Be careful when extracting a method from an object.

const greetFunction = person4.greet;

// greetFunction();
//
// Depending on the execution mode/context, `this` is no longer
// automatically the original person4 object.
//
// The method's original object is not permanently stored inside
// `this`.

//* ============================================================
//* 44. SOLVING LOST `this` WITH bind()
// ============================================================

const boundGreet = person4.greet.bind(person4);

console.log(boundGreet());

// Now the function has its `this` value bound to person4.

//* ============================================================
//* 45. CLASSES ARE NOT HOISTED LIKE FUNCTION DECLARATIONS
//* ============================================================
//
// You cannot normally use a class before its declaration.

//
// const user = new User();
//
// class User {}
//
// ❌ ReferenceError

//* Correct:
//
// class User {}
//
// const user = new User();

//* Classes are in the temporal dead zone until execution reaches
//* their declaration.

//* ============================================================
//* 46. CLASS BODY IS STRICT MODE
//* ============================================================
//
// Code inside class bodies executes in strict mode.
//
// This affects things such as `this` behavior and assignment
// errors.

//* ============================================================
//* 47. CLASS STATIC BLOCK
//* ============================================================
//
// JavaScript also supports static initialization blocks.
//
// They run when the class is initialized.

class Settings {
  static appName = "My App";

  static {
    console.log("Class initialized");
  }
}

// The static block runs during class initialization.

//* ============================================================
//* 48. CLASS AND OBJECT DIFFERENCE
//* ============================================================
//
// CLASS:
//
// A reusable definition/template.
//
// OBJECT:
//
// An actual value/instance.
//
// Example:
//
// class User {
//
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// const user = new User("Ravi");
//
// User → class
//
// user → object/instance

//* ============================================================
//* 49. CLASS VS OBJECT LITERAL
//* ============================================================
//
// Object literal:

const userObject = {
  name: "Ravi",

  greet() {
    return `Hello ${this.name}`;
  },
};

// Class:

class UserObject {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

//* Object literal:
//
// Great for one/few specific objects.
//
// Class:
//
// Useful when many objects share the same structure and behavior.

//* ============================================================
//* 50. CLASS VS FACTORY FUNCTION
//* ============================================================
//
// Factory function:

function createUser(name) {
  return {
    name,

    greet() {
      return `Hello ${this.name}`;
    },
  };
}

const factoryUser = createUser("Ravi");

// Class:

class UserClass2 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const classUser = new UserClass2("Ravi");

//* Both can create objects.
//
// Neither is automatically "better."
//
// Choose based on the design and requirements.

//* ============================================================
//* 51. OBJECT CREATION FLOW WITH `new`
// ============================================================
//
// This is one of the most important mental models.
//
// const user = new User("Ravi");
//
// Conceptually:
//
// 1. A new object is created.
// 2. The new object's prototype is connected to
//    User.prototype.
// 3. The constructor is called with `this` referring to
//    the new object.
// 4. Constructor properties are initialized.
// 5. The resulting object is returned.
//
// Simplified:
//
// new User("Ravi")
//       ↓
// new object
//       ↓
// prototype connection
//       ↓
// this → new object
//       ↓
// constructor runs
//       ↓
// object returned

//* ============================================================
//* 52. CLASS → PROTOTYPE RELATIONSHIP
//* ============================================================

class Vehicle {
  drive() {
    console.log("Driving");
  }
}

const vehicle = new Vehicle();

console.log(Object.getPrototypeOf(vehicle) === Vehicle.prototype);

// true

//* Mental model:
//
// vehicle
//   │
//   ↓
// Vehicle.prototype
//   │
//   ↓
// drive()

//* ============================================================
//* 53. PROPERTY LOOKUP
//* ============================================================
//
// Suppose:
//
// vehicle.drive()
//
// JavaScript roughly looks:
//
// 1. Does vehicle have `drive`?
//       ↓
// 2. If not, check Vehicle.prototype.
//       ↓
// 3. Found drive()
//       ↓
// 4. Call it with appropriate `this`
//
// This is prototype-chain lookup.

//* ============================================================
//* 54. INHERITANCE PROTOTYPE CHAIN
//* ============================================================

class Vehicle2 {
  drive() {
    return "Driving";
  }
}

class Car2 extends Vehicle2 {
  honk() {
    return "Beep";
  }
}

const car = new Car2();

//
// Conceptually:
//
// car
//  ↓
// Car2.prototype
//  ↓
// Vehicle2.prototype
//  ↓
// Object.prototype
//  ↓
// null

//* Therefore car can access:
//
// car.honk()
// car.drive()

//* ============================================================
//* 55. PRIVATE METHOD
//* ============================================================
//
// JavaScript also supports private methods using `#`.

class PasswordManager {
  #validate(password) {
    return password.length >= 8;
  }

  setPassword(password) {
    if (!this.#validate(password)) {
      throw new Error("Password too short");
    }

    this.password = password;
  }
}

const manager = new PasswordManager();

manager.setPassword("12345678");

//* #validate() cannot be called from outside the class.

//* ============================================================
//* 56. STATIC PRIVATE FIELD
//* ============================================================
//
// Private static fields belong to the class itself.

class App {
  static #secret = "internal";

  static getSecret() {
    return App.#secret;
  }
}

console.log(App.getSecret());

//* ============================================================
//* 57. PRIVATE FIELD IS DIFFERENT FROM CONVENTION
//* ============================================================
//
// This:
//
// _balance
//
// is NOT truly private.
//
// It is only a naming convention.
//
// This:
//
// #balance
//
// is a JavaScript private class element.

//* ============================================================
//* 58. ENCAPSULATION REAL-WORLD EXAMPLE
//* ============================================================

class BankAccount2 {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit must be greater than zero");
    }

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal must be greater than zero");
    }

    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const bankAccount = new BankAccount2("Ravi");

bankAccount.deposit(500);

bankAccount.withdraw(100);

console.log(bankAccount.getBalance());

// 400

//* External code cannot directly manipulate:
//
// #balance

//* ============================================================
//* 59. CLASS DESIGN MENTAL MODEL
//* ============================================================
//
// CLASS
//   │
//   ├── constructor
//   │      └── initializes instance data
//   │
//   ├── properties
//   │      └── object data
//   │
//   ├── methods
//   │      └── object behavior
//   │
//   ├── static members
//   │      └── class-level behavior/data
//   │
//   ├── private members
//   │      └── internal implementation
//   │
//   └── inheritance
//          └── reuse/extend behavior

//* ============================================================
//* 60. WHEN SHOULD YOU USE A CLASS?
// ============================================================
//
// Classes can be useful when:
//
// - You create many related objects.
// - Objects share behavior.
// - You need encapsulated state.
// - You need inheritance.
// - You want instance methods.
// - You are modeling entities.
//
// Examples:
//
// User
// Product
// BankAccount
// ShoppingCart
// Vehicle
// GameCharacter
// Order
// Payment

//* ============================================================
//* 61. REAL-WORLD SHOPPING CART
//* ============================================================

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }
}

const cart = new ShoppingCart();

cart.addItem({
  id: 1,
  name: "Keyboard",
  price: 1000,
  quantity: 2,
});

cart.addItem({
  id: 2,
  name: "Mouse",
  price: 500,
  quantity: 1,
});

console.log(cart.getTotal());

// 2500

//* ============================================================
//* 62. REAL-WORLD USER CLASS
//* ============================================================

class AppUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getProfile() {
    return {
      name: this.name,
      email: this.email,
      isLoggedIn: this.isLoggedIn,
    };
  }
}

const appUser = new AppUser("Ravi", "ravi@example.com");

appUser.login();

console.log(appUser.getProfile());

//* ============================================================
//* 63. COMMON MISTAKES
//* ============================================================

//* Mistake 1:
// Forgetting `new`
//
// const user = User("Ravi");
//
// ❌ Class constructor cannot be invoked without `new`.
//
// Correct:
//
// const user = new User("Ravi");

//* ============================================================

//* Mistake 2:
// Using `this` incorrectly.
//
// `this` refers to the current instance when an instance
// method is called normally through that instance.
//
// It is not simply "the class."

//* ============================================================

//* Mistake 3:
// Accessing instance method through class.
//
// User.greet();
//
// ❌ if greet() is an instance method.
//
// Correct:
//
// const user = new User("Ravi");
// user.greet();

//* ============================================================

//* Mistake 4:
// Confusing static and instance methods.
//
// static create()
// ↓
// User.create()
//
// normal method:
// ↓
// user.greet()

//* ============================================================

//* Mistake 5:
// Forgetting super().
//
// A derived class constructor must call super() before
// accessing `this`.
//
// class Dog extends Animal {
//
//     constructor(name) {
//
//         this.name = name;
//         super();
//     }
// }
//
// ❌

//* ============================================================

//* Mistake 6:
// Assuming classes copy all methods into every object.
//
// Instance methods are normally found through the prototype.

//* ============================================================
//* 64. CLASS CHEAT SHEET
//* ============================================================
//
// class
// → defines class syntax
//
// constructor()
// → initializes a new instance
//
// new
// → creates an instance
//
// this
// → refers to the current instance in normal instance calls
//
// method
// → behavior defined in a class
//
// static
// → belongs to class itself
//
// #private
// → truly private class element
//
// get
// → property-style getter
//
// set
// → property-style setter
//
// extends
// → creates inheritance relationship
//
// super()
// → calls parent constructor
//
// super.method()
// → calls parent method
//
// instanceof
// → checks prototype-chain relationship

//* ============================================================
//* 65. CLASS EXECUTION FLOW
//* ============================================================
//
// class Person
//      ↓
// class definition created
//      ↓
// Person.prototype created
//      ↓
// instance methods placed on prototype
//      ↓
// new Person("Ravi", 21)
//      ↓
// new instance created
//      ↓
// prototype connected
//      ↓
// constructor executes
//      ↓
// this.name = "Ravi"
// this.age = 21
//      ↓
// instance returned

//* ============================================================
//* 66. MOST IMPORTANT CONCEPT
//* ============================================================
//
// JavaScript classes are syntax built around JavaScript's
// existing object/prototype system.
//
// Therefore:
//
// class
//    ↓
// prototype
//    ↓
// objects
//    ↓
// prototype chain
//
// Understanding classes without understanding prototypes
// is possible at a beginner level.
//
// But understanding prototypes makes classes much easier
// to understand deeply.

//* ============================================================
//* 67. FINAL MEMORY TRICK
//* ============================================================
//
// CLASS
// = Definition for creating related objects
//
// OBJECT
// = Actual instance
//
// CONSTRUCTOR
// = Initialize instance
//
// THIS
// = Current instance/context
//
// METHOD
// = Behavior
//
// STATIC
// = Belongs to class
//
// PRIVATE #
// = Internal class data/behavior
//
// EXTENDS
// = Inherit from another class
//
// SUPER
// = Access parent class functionality
//
// PROTOTYPE
// = Shared mechanism behind instance methods/inheritance

//* ============================================================
//* GOLDEN RULE
//* ============================================================
//
// Think:
//
//              CLASS
//                │
//         ┌──────┴──────┐
//         ↓             ↓
//    PROPERTIES       METHODS
//         │             │
//         └──────┬──────┘
//                ↓
//              `new`
//                ↓
//             OBJECT
//                │
//                ↓
//          INSTANCE DATA
//                │
//                ↓
//          PROTOTYPE METHODS
//
//
//
// The simplest mental model:
//
// class  → blueprint/definition
// new    → create instance
// this   → current instance
// method → behavior
// static → class-level
// #      → private
// extends → inheritance
// super  → parent
// prototype → shared method/inheritance mechanism
