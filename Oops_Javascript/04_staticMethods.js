//* ============================================================
//* JAVASCRIPT — STATIC METHODS
//* ============================================================

//* ============================================================
//* 1. WHAT IS A STATIC METHOD?
//* ============================================================

//* A static method is a method that belongs to the CLASS itself,
//* rather than to objects (instances) created from that class.

//* It is declared using the `static` keyword.

//* Example:

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

//* Call the method using the class name:

console.log(MathHelper.add(10, 20)); // 30

//* We did NOT create an object:
//
//* const helper = new MathHelper();

//* ============================================================
//* 2. INSTANCE METHOD VS STATIC METHOD
//* ============================================================

//* Instance method:
//
//* class Person {
//*     greet() {
//*         return "Hello";
//*     }
//* }

//* const person = new Person();
//* person.greet();

//* Static method:
//
//* class Person {
//*     static info() {
//*         return "Person class";
//*     }
//* }

//* Person.info();

//* Main difference:
//
//* Instance method → instance.method()
//* Static method   → Class.method()

//* ============================================================
//* 3. BASIC EXAMPLE
//* ============================================================

class Calculator {
  add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

const calculator = new Calculator();

console.log(calculator.add(10, 5)); // 15
console.log(Calculator.subtract(10, 5)); // 5

//* Notice:
//
//* add() → instance method
//* subtract() → static method

//* ============================================================
//* 4. WHY USE STATIC METHODS?
//* ============================================================

//* Use a static method when an operation:
//
//* - does not need instance-specific data
//* - logically belongs to the class
//* - is a utility/helper operation
//* - creates or validates instances
//* - performs calculations
//* - provides class-level information

//* Example:
//
//* MathHelper.add(10, 20)
//
//* There is no reason to create:
//
//* new MathHelper()
//
//* just to perform an addition.

//* ============================================================
//* 5. STATIC METHODS ARE NOT AVAILABLE ON INSTANCES
//* ============================================================

class User {
  static createGuest() {
    return {
      name: "Guest",
    };
  }
}

console.log(User.createGuest());

const user = new User();

//* This is NOT valid:
//
//* user.createGuest();

//* Why?
//
//* createGuest() belongs to User,
//* not User.prototype.

//* ============================================================
//* 6. WHERE DOES A STATIC METHOD LIVE?
//* ============================================================

//* This is one of the most important concepts.

//* Consider:

class Person {
  static sayHello() {
    return "Hello";
  }

  sayName() {
    return "Ravi";
  }
}

//* Conceptually:
//
//* Person
//*   │
//*   └── sayHello()       ← static
//*
//* Person.prototype
//*   │
//*   └── sayName()        ← instance method

//* Therefore:
//
//* Person.sayHello()      → works
//*
//* const p = new Person();
//* p.sayName()            → works
//* p.sayHello()           → does not work

//* ============================================================
//* 7. STATIC METHOD AND `this`
//* ============================================================

//* IMPORTANT CORRECTION:
//
//* The statement:
//
//* "Static methods do not have access to `this`."
//
//* is FALSE.

//* Static methods DO have `this`.

//* Inside a static method, `this` normally refers to
//* the class/constructor on which the method was called.

class Example {
  static showThis() {
    console.log(this);
  }
}

Example.showThis();

//* Here:
//
//* this → Example

//* ============================================================
//* 8. STATIC `this` VS INSTANCE `this`
//* ============================================================

class PersonCompare {
  static classMethod() {
    console.log(this);
  }

  instanceMethod() {
    console.log(this);
  }
}

PersonCompare.classMethod();

const personCompare = new PersonCompare();

personCompare.instanceMethod();

//* Static method:
//
//* this → PersonCompare class

//* Instance method:
//
//* this → personCompare object

//* Mental model:
//
//* PersonCompare.classMethod()
//*          ↓
//*        this
//*          ↓
//*   PersonCompare
//
//
//* personCompare.instanceMethod()
//*          ↓
//*        this
//*          ↓
//*   personCompare

//* ============================================================
//* 9. STATIC METHOD CAN ACCESS STATIC PROPERTIES
//* ============================================================

class Configuration {
  static appName = "My App";

  static getAppName() {
    return this.appName;
  }
}

console.log(Configuration.getAppName());

//* Here:
//
//* this.appName
//*
//* refers to:
//
//* Configuration.appName

//* ============================================================
//* 10. STATIC PROPERTY VS INSTANCE PROPERTY
//* ============================================================

class UserAccount {
  static totalUsers = 0;

  constructor(name) {
    this.name = name;

    UserAccount.totalUsers++;
  }
}

const user1 = new UserAccount("Ravi");
const user2 = new UserAccount("Aman");
const user3 = new UserAccount("Rahul");

console.log(UserAccount.totalUsers); // 3

//* `totalUsers` belongs to the class.
//
//* `name` belongs to each individual instance.

//* ============================================================
//* 11. CLASS-LEVEL DATA VS INSTANCE-LEVEL DATA
//* ============================================================

class Product {
  static category = "Electronics";

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const product1 = new Product("Keyboard", 1200);
const product2 = new Product("Mouse", 800);

console.log(Product.category);

console.log(product1.name);
console.log(product2.name);

//* Static:
//
//* Product.category
//
//* Instance:
//
//* product1.name
//* product2.name

//* ============================================================
//* 12. STATIC METHOD USING STATIC PROPERTY
//* ============================================================

class Counter {
  static count = 0;

  static increment() {
    this.count++;
  }

  static getCount() {
    return this.count;
  }
}

Counter.increment();
Counter.increment();
Counter.increment();

console.log(Counter.getCount()); // 3

//* ============================================================
//* 13. STATIC METHOD CAN CALL ANOTHER STATIC METHOD
//* ============================================================

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static double(value) {
    return this.add(value, value);
  }
}

console.log(MathUtils.double(10)); // 20

//* `this.add()` refers to the static method on the class.

//* ============================================================
//* 14. STATIC METHOD CANNOT DIRECTLY ACCESS INSTANCE DATA
//* ============================================================

class PersonData {
  constructor(name) {
    this.name = name;
  }

  static showName() {
    // this.name is class-level `name`, not instance name
    return this.name;
  }
}

const personData = new PersonData("Ravi");

console.log(personData.name); // Ravi
console.log(PersonData.showName()); // undefined

//* Why?
//
//* `name` was stored on the instance:
//
//* personData.name
//
//* Static method operates on:
//
//* PersonData

//* ============================================================
//* 15. STATIC METHOD CAN RECEIVE INSTANCE AS ARGUMENT
//* ============================================================

//* A static method can work with instance data if the instance
//* is explicitly passed to it.

class PersonUtility {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static describe(person) {
    return `${person.name} is ${person.age} years old.`;
  }
}

const ravi = new PersonUtility("Ravi", 21);

console.log(PersonUtility.describe(ravi));

//* Important:
//
//* Static method does not automatically receive `ravi` as this.
//
//* We explicitly pass ravi:
//
//* PersonUtility.describe(ravi)

//* ============================================================
//* 16. STATIC METHOD AS A FACTORY
//* ============================================================

//* A very useful pattern is using static methods to create
//* instances.

class UserFactory {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  static createAdmin(name) {
    return new UserFactory(name, "admin");
  }

  static createGuest(name) {
    return new UserFactory(name, "guest");
  }
}

const admin = UserFactory.createAdmin("Ravi");
const guest = UserFactory.createGuest("Aman");

console.log(admin);
console.log(guest);

//* This is called a factory-style static method.

//* ============================================================
//* 17. STATIC METHOD — VALIDATION
//* ============================================================

//* Static methods are commonly used for validation.

class UserValidator {
  static isValidEmail(email) {
    return email.includes("@");
  }

  static isValidAge(age) {
    return Number.isInteger(age) && age >= 18;
  }
}

console.log(UserValidator.isValidEmail("ravi@example.com"));

console.log(UserValidator.isValidAge(21));

//* No UserValidator object is required.

//* ============================================================
//* 18. STATIC METHOD — UTILITY
//* ============================================================

class StringUtils {
  static capitalize(text) {
    if (!text) return "";

    return text[0].toUpperCase() + text.slice(1);
  }

  static reverse(text) {
    return text.split("").reverse().join("");
  }
}

console.log(StringUtils.capitalize("javascript"));
console.log(StringUtils.reverse("hello"));

//* These operations don't require an instance.

//* Therefore static methods make sense.

//* ============================================================
//* 19. STATIC METHOD — ID GENERATOR
//* ============================================================

class IDGenerator {
  static currentId = 0;

  static generate() {
    this.currentId++;

    return this.currentId;
  }
}

console.log(IDGenerator.generate()); // 1
console.log(IDGenerator.generate()); // 2
console.log(IDGenerator.generate()); // 3

//* The ID counter belongs to the class,
//* not to an individual instance.

//* ============================================================
//* 20. STATIC METHOD — RANDOM ID
//* ============================================================

class RandomID {
  static generate() {
    return Math.random().toString(36).slice(2, 10);
  }
}

console.log(RandomID.generate());
console.log(RandomID.generate());

//* ============================================================
//* 21. STATIC METHOD — OBJECT CREATION
//* ============================================================

class ProductFactory {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static fromObject(data) {
    return new ProductFactory(data.name, data.price);
  }
}

const data = {
  name: "Keyboard",
  price: 1500,
};

const product = ProductFactory.fromObject(data);

console.log(product);

//* This pattern is very common when converting API/database
//* data into class instances.

//* ============================================================
//* 22. STATIC METHOD — PARSING DATA
//* ============================================================

class UserParser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static fromJSON(jsonString) {
    const data = JSON.parse(jsonString);

    return new UserParser(data.name, data.age);
  }
}

const json = `{
    "name": "Ravi",
    "age": 21
}`;

const parsedUser = UserParser.fromJSON(json);

console.log(parsedUser);

//* Static method:
//
//* receives external data
//* parses it
//* creates an instance

//* ============================================================
//* 23. STATIC METHOD — DATABASE/REPOSITORY STYLE
//* ============================================================

//* In real applications, static methods are often used for
//* class-level operations such as finding records.

//* Example conceptual pattern:

class UserRepository {
  static findById(id) {
    console.log(`Finding user with ID: ${id}`);

    // Database query would normally happen here.
  }

  static findAll() {
    console.log("Finding all users");
  }
}

UserRepository.findById(101);
UserRepository.findAll();

//* Notice:
//
//* We don't need:
//
//* new UserRepository()
//
//* to ask the repository for users.

//* ============================================================
//* 24. STATIC METHOD AND INHERITANCE
//* ============================================================

//* Static methods can be inherited by subclasses.

class Animal {
  static category() {
    return "Animal";
  }
}

class Dog extends Animal {}

console.log(Dog.category()); // Animal

//* Dog inherits the static method from Animal.

//* ============================================================
//* 25. STATIC METHOD INHERITANCE MODEL
//* ============================================================

class Parent {
  static hello() {
    return "Hello from Parent";
  }
}

class Child extends Parent {}

console.log(Child.hello());

//* Conceptually:
//
//* Child
//*   ↓
//* Parent
//*   ↓
//* hello()

//* Static inheritance follows the class/constructor
//* inheritance chain.

//* ============================================================
//* 26. STATIC METHOD CAN BE OVERRIDDEN
//* ============================================================

class AnimalType {
  static sound() {
    return "Some sound";
  }
}

class DogType extends AnimalType {
  static sound() {
    return "Bark";
  }
}

console.log(AnimalType.sound());
console.log(DogType.sound());

//* Child class can provide its own static implementation.

//* ============================================================
//* 27. `super` WITH STATIC METHODS
//* ============================================================

class ParentClass {
  static message() {
    return "Parent message";
  }
}

class ChildClass extends ParentClass {
  static message() {
    return `${super.message()} + Child message`;
  }
}

console.log(ChildClass.message());

//* `super.message()` accesses the parent's static method.

//* ============================================================
//* 28. STATIC METHOD + `this` WITH INHERITANCE
//* ============================================================

//* This is an important reason to understand static `this`.

class Parent {
  static create() {
    return new this();
  }
}

class Child extends Parent {}

const child = Child.create();

console.log(child instanceof Child); // true

//* Why?
//
//* Child.create()
//*     ↓
//* inherited static method
//*     ↓
//* this = Child
//*     ↓
//* new this()
//*     ↓
//* new Child()

//* This is a powerful pattern.

//* ============================================================
//* 29. STATIC METHODS VS INSTANCE METHODS
//* ============================================================

class ExampleClass {
  static staticMethod() {
    return "I belong to the class";
  }

  instanceMethod() {
    return "I belong to the instance";
  }
}

const example = new ExampleClass();

console.log(ExampleClass.staticMethod());
console.log(example.instanceMethod());

//* Don't mix them up:
//
//* Class.staticMethod()
//
//* instance.instanceMethod()

//* ============================================================
//* 30. STATIC METHOD — WHEN SHOULD YOU USE IT?
//* ============================================================

//* Good use cases:
//
//* 1. Utility operations
//* 2. Validation
//* 3. Parsing
//* 4. Factory methods
//* 5. ID generation
//* 6. Class-level counters
//* 7. Repository/database operations
//* 8. Creating instances from external data
//* 9. Operations that don't depend on instance state

//* ============================================================
//* 31. WHEN SHOULD YOU NOT USE STATIC?
//* ============================================================

//* Don't use static simply because it is convenient.

//* If an operation depends on:
//
//* this.name
//* this.balance
//* this.price
//* this.age
//* this.status
//
//* it is usually an instance operation.

//* Example:

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

//* deposit() depends on a specific account's balance.
//
//* Therefore it should be an instance method.

//* ============================================================
//* 32. STATIC METHOD + INSTANCE METHOD TOGETHER
//* ============================================================

class BankAccountComplete {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  static isValidAmount(amount) {
    return amount > 0;
  }
}

const account = new BankAccountComplete("Ravi", 1000);

if (BankAccountComplete.isValidAmount(500)) {
  account.deposit(500);
}

console.log(account.balance);

//* Static:
//
//* validates an amount.
//
//* Instance:
//
//* changes a particular account.

//* ============================================================
//* 33. STATIC METHOD + PRIVATE STATIC FIELD
//* ============================================================

//* JavaScript also supports private static fields.

class Config {
  static #secret = "12345";

  static getSecret() {
    return this.#secret;
  }
}

console.log(Config.getSecret());

//* `#secret` belongs to the class and is private.

//* ============================================================
//* 34. STATIC BLOCK
//* ============================================================

//* JavaScript classes can also contain static initialization
//* blocks.

//* They run when the class is evaluated.

class AppConfig {
  static version;

  static {
    this.version = "1.0.0";
  }
}

console.log(AppConfig.version);

//* Static block is useful for more complex class-level
//* initialization.

//* ============================================================
//* 35. STATIC METHOD AND OBJECT CREATION
//* ============================================================

class UserModel {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static create(name, email) {
    return new UserModel(name, email);
  }
}

const newUser = UserModel.create("Ravi", "ravi@example.com");

console.log(newUser);

//* This gives a clean API:
//
//* UserModel.create(...)

//* ============================================================
//* 36. STATIC METHODS IN BUILT-IN JAVASCRIPT CLASSES
//* ============================================================

//* JavaScript itself uses static methods extensively.

//* Examples:

console.log(Number.isInteger(10));
console.log(Number.isNaN(NaN));
console.log(Number.isFinite(100));

console.log(Array.isArray([]));

console.log(
  Object.keys({
    name: "Ravi",
    age: 21,
  }),
);

console.log(
  Object.values({
    name: "Ravi",
    age: 21,
  }),
);

//* These are called using the class/object constructor:
//
//* Number.isInteger()
//* Array.isArray()
//* Object.keys()
//
//* rather than:
//
//* number.isInteger()
//* array.isArray()
//* object.keys()

//* ============================================================
//* 37. WHY `Array.isArray()` IS STATIC-LIKE
//* ============================================================

//* We don't create an Array just to ask whether something
//* is an array.

//* Instead:
//
//* Array.isArray(value)

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false

//* The operation is associated with Array as a type/class-level
//* utility.

//* ============================================================
//* 38. STATIC METHOD VS GLOBAL FUNCTION
//* ============================================================

//* You could write:
//
//* function isValidEmail(email) {
//*     return email.includes("@");
//* }

//* Or group it logically:
//
//* class Validator {
//*     static isValidEmail(email) {
//*         return email.includes("@");
//*     }
//* }

//* Then:
//
//* Validator.isValidEmail(email)

//* Static methods can provide logical organization and
//* namespacing.

//* However, don't create a class just to group unrelated
//* functions if a module of normal functions would be simpler.

//* ============================================================
//* 39. STATIC METHOD VS MODULE FUNCTION
//* ============================================================

//* In modern JavaScript applications, a module can already
//* group utility functions.

//* Example:
//
//* export function formatDate() {}
//* export function formatCurrency() {}

//* A static class method can make more sense when the functions
//* conceptually belong to a class/type and may participate in
//* inheritance or factory patterns.

//* There is no universal rule that static methods are always
//* better than module functions.

//* ============================================================
//* 40. COMMON MISTAKE — CALLING STATIC METHOD ON INSTANCE
//* ============================================================

class Helper {
  static greet() {
    return "Hello";
  }
}

//* const helper = new Helper();
//* helper.greet();
//
//* Incorrect.

console.log(Helper.greet());

//* ============================================================
//* 41. COMMON MISTAKE — CALLING INSTANCE METHOD ON CLASS
//* ============================================================

class PersonMethods {
  greet() {
    return "Hello";
  }
}

//* PersonMethods.greet();
//
//* Incorrect.

//* Correct:

const personMethods = new PersonMethods();

console.log(personMethods.greet());

//* ============================================================
//* 42. COMMON MISTAKE — THINKING STATIC HAS NO `this`
//* ============================================================

//* Incorrect:
//
//* "Static methods cannot use this."

//* Correct:
//
//* Static methods have `this`.
//* Normally, `this` refers to the class/constructor object
//* when called as Class.method().

class StaticThis {
  static show() {
    return this;
  }
}

console.log(StaticThis.show() === StaticThis); // true

//* ============================================================
//* 43. COMMON MISTAKE — EXPECTING INSTANCE DATA IN STATIC METHOD
//* ============================================================

class PersonInfo {
  constructor(name) {
    this.name = name;
  }

  static getName() {
    return this.name;
  }
}

const personInfo = new PersonInfo("Ravi");

console.log(personInfo.name); // Ravi
console.log(PersonInfo.getName()); // class-level name, not Ravi

//* Static methods do not automatically operate on instances.

//* ============================================================
//* 44. COMMON MISTAKE — USING STATIC FOR EVERYTHING
//* ============================================================

//* Bad design:
//
//* class User {
//*     static getName(user) {
//*         return user.name;
//*     }
//
//*     static getAge(user) {
//*         return user.age;
//*     }
//* }

//* If operations naturally belong to an individual User,
//* instance methods may be clearer.

//* Better:

class BetterUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

//* ============================================================
//* 45. STATIC METHOD MENTAL MODEL
//* ============================================================

/*

CLASS
│
├── static method
│      ↓
│   Class.method()
│
├── static property
│      ↓
│   Class.property
│
└── prototype
       │
       └── instance methods
                ↓
             object.method()


INSTANCE
│
├── instance properties
│      ↓
│   object.property
│
└── prototype methods
       ↓
    object.method()
*/

//* ============================================================
//* 46. COMPLETE EXAMPLE
//* ============================================================

class UserSystem {
  static totalUsers = 0;

  constructor(name, email) {
    this.name = name;
    this.email = email;

    UserSystem.totalUsers++;
  }

  getInfo() {
    return `${this.name} - ${this.email}`;
  }

  static getTotalUsers() {
    return this.totalUsers;
  }

  static isValidEmail(email) {
    return email.includes("@");
  }

  static createGuest() {
    return new UserSystem("Guest", "guest@example.com");
  }
}

const userA = new UserSystem("Ravi", "ravi@example.com");

const userB = new UserSystem("Aman", "aman@example.com");

console.log(userA.getInfo());
console.log(userB.getInfo());

console.log(UserSystem.getTotalUsers());

console.log(UserSystem.isValidEmail("test@example.com"));

const guest = UserSystem.createGuest();

console.log(guest);

//* Notice the separation:
//
//* INSTANCE METHODS
//* -----------------
//* getInfo()
//
//* These work with a specific user's state.
//
//
//* STATIC METHODS
//* --------------
//* getTotalUsers()
//* isValidEmail()
//* createGuest()
//
//* These operate at the class/type level.

//* ============================================================
//* 47. STATIC VS INSTANCE — FINAL COMPARISON
//* ============================================================

/*

                    CLASS
                      │
          ┌───────────┴───────────┐
          │                       │
       STATIC                 PROTOTYPE
          │                       │
          ↓                       ↓
   Class.method()          instance.method()
          │                       │
          │                       │
   Class-level logic       Object-level logic
          │                       │
          ↓                       ↓
   No specific instance    Specific instance
   required                required
*/

//* Example:
//
//* Array.isArray(value)
//
//* Static-style operation:
//* "Is this value an array?"

//* Example:
//
//* account.deposit(500)
//
//* Instance operation:
//* "Deposit money into THIS account."

//* ============================================================
//* 48. STATIC METHOD DECISION RULE
//* ============================================================

//* Ask yourself:
//
//* "Does this operation need the data of one particular object?"

//* YES
//*   ↓
//* Instance method
//
//* NO
//*   ↓
//* Consider static method / module function

//* ============================================================
//* 49. STATIC METHOD GOLDEN RULES
//* ============================================================

//* 1. `static` makes a class method belong to the class,
//*    not to its instances.

//* 2. Call static methods using:
//
//*    Class.method()

//* 3. Don't call them using:
//
//*    instance.method()

//* 4. Static methods DO have `this`.

//* 5. In a normal static call:
//
//*    this → class/constructor

//* 6. Instance methods normally operate on:
//
//*    this → instance

//* 7. Static methods are useful for utilities, validation,
//*    factories, parsing, counters and class-level operations.

//* 8. Static properties belong to the class rather than
//*    individual instances.

//* 9. Static methods can be inherited.

//* 10. Static methods can be overridden.

//* 11. `super` can access a parent's static method.

//* 12. Use instance methods when behavior depends on
//*     instance-specific state.

//* ============================================================
//* 50. ONE-LINE MEMORY TRICK
//* ============================================================

//* STATIC:
//
//* "Class ka kaam"

//* INSTANCE:
//
//* "Object ka kaam"

//* Example:
//
//* User.validateEmail()
//*        ↑
//*     static
//
//* user.getName()
//*      ↑
//*    instance

//* ============================================================
//* FINAL CONCEPT
//* ============================================================

//* Static method:
//
//*     class → method
//
//* Instance method:
//
//*     object → method
//
//* Static property:
//
//*     class → data
//
//* Instance property:
//
//*     object → data

//* FINAL MAP:
//
//*              CLASS
//*                │
//*       ┌────────┴────────┐
//*       ↓                 ↓
//*    STATIC           PROTOTYPE
//*       │                 │
//*       ↓                 ↓
//* Class.method()    instance.method()
//*       │                 │
//*       ↓                 ↓
//* class-level       object-level
//* behavior          behavior
