//* ============================================================
//* JAVASCRIPT OOP — POLYMORPHISM
//* ============================================================

//* ------------------------------------------------------------
//* 1. WHAT IS POLYMORPHISM?
//* ------------------------------------------------------------

//* Polymorphism means:
//* "One interface / method call, many different behaviors."

//* The word comes from:
//* Poly  → Many
//* Morph → Forms

//* In OOP, polymorphism allows different objects to respond
//* to the same method call in their own way.

//* Example:

class Dog {
  speak() {
    return "Dog says: Woof!";
  }
}

class Cat {
  speak() {
    return "Cat says: Meow!";
  }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.speak()); // Dog says: Woof!
console.log(cat.speak()); // Cat says: Meow!

//* Same method name:
//*     speak()
//
//* Different objects:
//*     dog
//*     cat
//
//* Different behavior:
//*     Woof!
//*     Meow!

//* ------------------------------------------------------------
//* 2. SIMPLE REAL-WORLD EXAMPLE
//* ------------------------------------------------------------

//* Imagine a "Payment" system.

//* Every payment method has:
//*     pay()
//
//* But each payment method performs payment differently.

//* Credit Card → card payment
//* UPI         → UPI payment
//* Cash        → cash payment

class CreditCard {
  pay(amount) {
    return `Paid ₹${amount} using Credit Card`;
  }
}

class UPI {
  pay(amount) {
    return `Paid ₹${amount} using UPI`;
  }
}

class Cash {
  pay(amount) {
    return `Paid ₹${amount} using Cash`;
  }
}

const payments = [new CreditCard(), new UPI(), new Cash()];

payments.forEach((payment) => {
  console.log(payment.pay(500));
});

//* Output:
//* Paid ₹500 using Credit Card
//* Paid ₹500 using UPI
//* Paid ₹500 using Cash

//* Notice:
//* We don't need to know the exact class.
//
//* We simply say:
//
//*     payment.pay()
//
//* Each object decides what "pay()" means for itself.
//
//* This is polymorphism.

//* ------------------------------------------------------------
//* 3. THE CORE IDEA
//* ------------------------------------------------------------

//* Without polymorphism:

if (payment instanceof CreditCard) {
  payment.pay();
} else if (payment instanceof UPI) {
  payment.pay();
} else if (payment instanceof Cash) {
  payment.pay();
}

//* This becomes difficult to maintain when many payment types
//* are added.

//* With polymorphism:

payment.pay();

//* The object provides its own implementation.

//* ------------------------------------------------------------
//* 4. POLYMORPHISM + INHERITANCE
//* ------------------------------------------------------------

//* One of the most common forms of polymorphism in OOP
//* is method overriding.

//* Parent class:

class Animal {
  speak() {
    return "Animal makes a sound";
  }
}

//* Child class:

class DogAnimal extends Animal {
  speak() {
    return "Dog says Woof";
  }
}

//* Another child:

class CatAnimal extends Animal {
  speak() {
    return "Cat says Meow";
  }
}

const animals = [new DogAnimal(), new CatAnimal()];

animals.forEach((animal) => {
  console.log(animal.speak());
});

//* Output:
//* Dog says Woof
//* Cat says Meow

//* ------------------------------------------------------------
//* 5. METHOD OVERRIDING
//* ------------------------------------------------------------

//* Method overriding occurs when a child class provides
//* its own implementation of a method defined by its parent.

//* Parent:

class Vehicle {
  start() {
    return "Vehicle is starting";
  }
}

//* Child overrides start():

class Car extends Vehicle {
  start() {
    return "Car engine starts";
  }
}

class Bike extends Vehicle {
  start() {
    return "Bike engine starts";
  }
}

const car = new Car();
const bike = new Bike();

console.log(car.start());
console.log(bike.start());

//* Output:
//* Car engine starts
//* Bike engine starts

//* Same method:
//*     start()
//
//* Different implementations:
//*     Car → Car engine starts
//*     Bike → Bike engine starts

//* ------------------------------------------------------------
//* 6. HOW DOES JAVASCRIPT KNOW WHICH METHOD TO CALL?
//* ------------------------------------------------------------

//* JavaScript uses the prototype chain to find methods.

//* Example:

const myCar = new Car();

myCar.start();

//* JavaScript roughly looks for start() like this:
//
//* 1. Does myCar have "start"?
//*        ↓
//* 2. Does Car.prototype have "start"?
//*        ↓
//* 3. Does Vehicle.prototype have "start"?
//*        ↓
//* 4. Does Object.prototype have "start"?
//*        ↓
//* 5. If not found → TypeError

//* Because Car.prototype has its own start(),
//* JavaScript uses that implementation.

//* This runtime method selection is an important part
//* of polymorphic behavior.

//* ------------------------------------------------------------
//* 7. POLYMORPHISM DOES NOT REQUIRE INHERITANCE
//* ------------------------------------------------------------

//* This is VERY important in JavaScript.

//* Objects do not have to belong to the same class.

//* They only need to provide the expected behavior.

const youtube = {
  play() {
    return "Playing YouTube video";
  },
};

const musicPlayer = {
  play() {
    return "Playing music";
  },
};

const game = {
  play() {
    return "Starting game";
  },
};

const players = [youtube, musicPlayer, game];

players.forEach((player) => {
  console.log(player.play());
});

//* Output:
//* Playing YouTube video
//* Playing music
//* Starting game

//* These objects:
//* - are not instances of the same class
//* - do not inherit from the same parent
//* - still support the same operation: play()
//
//* This is a very JavaScript-style form of polymorphism.

//* ------------------------------------------------------------
//* 8. DUCK TYPING
//* ------------------------------------------------------------

//* JavaScript commonly follows a concept called "duck typing".

//* Idea:
//
//* "If an object behaves like the required object,
//*  we can use it."

//* Famous idea:
//
//* "If it walks like a duck and quacks like a duck,
//*  treat it like a duck."

function startPlaying(player) {
  console.log(player.play());
}

const video = {
  play() {
    return "Video playing";
  },
};

const song = {
  play() {
    return "Song playing";
  },
};

startPlaying(video);
startPlaying(song);

//* The function does not care about the class.
//
//* It only cares that:
//
//*     player.play()
//
//* exists and can be called.

//* ------------------------------------------------------------
//* 9. STRUCTURAL / BEHAVIORAL POLYMORPHISM
//* ------------------------------------------------------------

//* JavaScript is dynamically typed.
//
//* Therefore, a function can often work with any object
//* that provides the required behavior.

//* Example:

function printArea(shape) {
  console.log(shape.area());
}

const circleShape = {
  area() {
    return Math.PI * 5 * 5;
  },
};

const rectangleShape = {
  area() {
    return 10 * 20;
  },
};

printArea(circleShape);
printArea(rectangleShape);

//* printArea() does not care whether the object is:
//
//* Circle
//* Rectangle
//* Triangle
//* CustomShape
//
//* It only requires:
//
//*     area()

//* ------------------------------------------------------------
//* 10. POLYMORPHISM WITH A COMMON PARENT
//* ------------------------------------------------------------

class Shape {
  area() {
    return 0;
  }
}

class CircleShape extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class RectangleShape extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes = [new CircleShape(5), new RectangleShape(10, 20)];

shapes.forEach((shape) => {
  console.log(shape.area());
});

//* Same call:
//
//*     shape.area()
//
//* Circle calculates its area.
//* Rectangle calculates its area.
//
//* This is classic runtime polymorphism.

//* ------------------------------------------------------------
//* 11. POLYMORPHISM WITH super
//* ------------------------------------------------------------

//* A child can override a parent method.
//
//* But sometimes we still want to execute the parent
//* implementation.

//* Use:
//
//*     super.methodName()

class PersonPoly {
  introduce() {
    return "I am a person.";
  }
}

class StudentPoly extends PersonPoly {
  introduce() {
    return `${super.introduce()} I am also a student.`;
  }
}

const studentPoly = new StudentPoly();

console.log(studentPoly.introduce());

//* Output:
//* I am a person. I am also a student.

//* super.introduce()
//* calls the parent implementation.

//* ------------------------------------------------------------
//* 12. METHOD OVERRIDING + EXTRA BEHAVIOR
//* ------------------------------------------------------------

class Logger {
  log(message) {
    return `LOG: ${message}`;
  }
}

class AdvancedLogger extends Logger {
  log(message) {
    const parentMessage = super.log(message);

    return `${parentMessage} [Advanced Logger]`;
  }
}

const logger = new AdvancedLogger();

console.log(logger.log("Server started"));

//* Output:
//* LOG: Server started [Advanced Logger]

//* ------------------------------------------------------------
//* 13. FUNCTION OVERLOADING
//* ------------------------------------------------------------

//* Many OOP languages support function overloading.

//* Example concept from languages such as Java:
//
//* add(int a, int b)
//* add(int a, int b, int c)
//
//* Same function name.
//* Different parameter signatures.

//* JavaScript DOES NOT support traditional function
//* overloading natively.

//* You cannot define multiple functions with the same name
//* and expect JavaScript to choose based on arguments.

//* Example:

function add(a, b) {
  return a + b;
}

//* This replaces the previous definition:

function add(a, b, c) {
  return a + b + c;
}

console.log(add(10, 20, 30)); // 60

//* The first add() definition is gone/replaced.
//
//* JavaScript does not maintain multiple overloaded versions.

//* ------------------------------------------------------------
//* 14. SIMULATING OVERLOADING USING arguments
//* ------------------------------------------------------------

//* Although JavaScript doesn't support traditional overloading,
//* we can implement different behavior manually.

//* Example:

function calculateTotal() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  }

  if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2];
  }

  return 0;
}

console.log(calculateTotal(10, 20)); // 30
console.log(calculateTotal(10, 20, 30)); // 60

//* Here WE decide what should happen based on
//* the number of arguments.
//
//* This is not true language-level function overloading.
//
//* It is manual argument handling.

//* ------------------------------------------------------------
//* 15. SIMULATING OVERLOADING USING REST PARAMETERS
//* ------------------------------------------------------------

//* Modern JavaScript usually prefers rest parameters
//* over arguments when appropriate.

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(10, 20)); // 30
console.log(sum(10, 20, 30)); // 60
console.log(sum(10, 20, 30, 40)); // 100

//* Rest parameter collects arguments into an array.
//
//* numbers = [10, 20, 30, 40]

//* ------------------------------------------------------------
//* 16. OVERLOADING BY TYPE CHECKING
//* ------------------------------------------------------------

//* We can also change behavior based on the type of
//* the received value.

function processValue(value) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 2;
  }

  if (typeof value === "boolean") {
    return !value;
  }

  return value;
}

console.log(processValue("hello")); // HELLO
console.log(processValue(10)); // 20
console.log(processValue(true)); // false

//* Again:
//
//* This is NOT traditional function overloading.
//
//* It is conditional logic inside one function.

//* ------------------------------------------------------------
//* 17. POLYMORPHISM WITH CALLBACKS
//* ------------------------------------------------------------

//* JavaScript's functional features also naturally support
//* polymorphic behavior.

//* Example:

function execute(operation, a, b) {
  return operation(a, b);
}

const addOperation = (a, b) => a + b;

const multiplyOperation = (a, b) => a * b;

console.log(execute(addOperation, 5, 3)); // 8
console.log(execute(multiplyOperation, 5, 3)); // 15

//* execute() accepts different operations.
//
//* Same interface:
//
//*     operation(a, b)
//
//* Different behavior:
//
//*     addition
//*     multiplication

//* ------------------------------------------------------------
//* 18. POLYMORPHISM IN ARRAY METHODS
//* ------------------------------------------------------------

//* JavaScript itself uses polymorphism extensively.

//* For example, toString() exists through different objects
//* and can produce different results.

console.log((123).toString());
console.log([1, 2, 3].toString());
console.log(new Date().toString());

//* Same method name:
//
//*     toString()
//
//* Different objects.
//* Different implementations/results.

//* ------------------------------------------------------------
//* 19. POLYMORPHISM WITH toString()
//* ------------------------------------------------------------

class UserPoly {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `User: ${this.name}`;
  }
}

class AdminPoly extends UserPoly {
  toString() {
    return `Admin: ${this.name}`;
  }
}

const userPoly = new UserPoly("Ravi");
const adminPoly = new AdminPoly("Admin Ravi");

console.log(userPoly.toString());
console.log(adminPoly.toString());

//* Output:
//* User: Ravi
//* Admin: Admin Ravi

//* ------------------------------------------------------------
//* 20. POLYMORPHISM AND instanceof
//* ------------------------------------------------------------

//* instanceof can tell us whether an object is connected
//* to a constructor's prototype chain.

//* Example:

class AnimalPoly {}

class DogPoly extends AnimalPoly {}

const dogPoly = new DogPoly();

console.log(dogPoly instanceof DogPoly); // true
console.log(dogPoly instanceof AnimalPoly); // true
console.log(dogPoly instanceof Object); // true

//* But remember:
//
//* Polymorphism does NOT require instanceof.
//
//* Duck typing works without inheritance.

//* Therefore, avoid unnecessary instanceof checks when
//* the required behavior itself is enough.

//* ------------------------------------------------------------
//* 21. POLYMORPHISM WITHOUT instanceof
//* ------------------------------------------------------------

function makeSound(animal) {
  return animal.speak();
}

const dogObject = {
  speak() {
    return "Woof";
  },
};

const catObject = {
  speak() {
    return "Meow";
  },
};

console.log(makeSound(dogObject));
console.log(makeSound(catObject));

//* No class.
//* No inheritance.
//* No instanceof.
//
//* Only the required behavior matters.

//* ------------------------------------------------------------
//* 22. POLYMORPHISM IN A REAL APPLICATION
//* ------------------------------------------------------------

//* Imagine an application with notifications.

//* Every notification object provides:
//
//*     send()

class EmailNotification {
  send(message) {
    return `Email sent: ${message}`;
  }
}

class SMSNotification {
  send(message) {
    return `SMS sent: ${message}`;
  }
}

class PushNotification {
  send(message) {
    return `Push notification sent: ${message}`;
  }
}

function notify(notification, message) {
  console.log(notification.send(message));
}

notify(new EmailNotification(), "Your order has shipped");

notify(new SMSNotification(), "Your OTP is 1234");

notify(new PushNotification(), "You have a new message");

//* notify() doesn't need to know the internal implementation.
//
//* It only requires:
//
//*     notification.send()

//* ------------------------------------------------------------
//* 23. WHY POLYMORPHISM IS USEFUL
//* ------------------------------------------------------------

//* 1. REDUCES CONDITIONAL LOGIC
//* --------------------------------
//
//* Instead of:
//
//* if type === "email"
//* else if type === "sms"
//* else if type === "push"
//
//* We can use:
//
//* notification.send()

//* 2. MAKES CODE EXTENSIBLE
//* --------------------------------
//
//* We can add:
//
//* WhatsAppNotification
//* SlackNotification
//* DiscordNotification
//
//* without changing the main notify() logic.

//* 3. REDUCES COUPLING
//* --------------------------------
//
//* The caller depends on behavior,
//* rather than implementation details.

//* 4. IMPROVES REUSABILITY
//* --------------------------------
//
//* One function can work with many different objects.

//* 5. SUPPORTS CLEAN ARCHITECTURE
//* --------------------------------
//
//* Especially useful in:
//
//* payment systems
//* notification systems
//* storage systems
//* logging
//* authentication providers
//* database repositories
//* UI components
//* API clients

//* ------------------------------------------------------------
//* 24. POLYMORPHISM VS INHERITANCE
//* ------------------------------------------------------------

//* INHERITANCE:
//
//* Describes a relationship.
//
//* "Student IS A Person."
//
//* Student extends Person.

//* POLYMORPHISM:
//
//* Describes behavior.
//
//* "Different objects can respond to the same operation
//*  differently."

//* They often work together:
//
//* Inheritance
//*      ↓
//* Method overriding
//*      ↓
//* Polymorphic behavior

//* But polymorphism can also exist without inheritance
//* through duck typing.

//* ------------------------------------------------------------
//* 25. POLYMORPHISM VS METHOD OVERRIDING
//* ------------------------------------------------------------

//* METHOD OVERRIDING:
//
//* A child replaces/inherits a method implementation
//* with its own implementation.

//* POLYMORPHISM:
//
//* The broader idea that the same operation/method call
//* can produce different behavior depending on the object.

//* Example:

class ParentPoly {
  speak() {
    return "Parent";
  }
}

class ChildPoly extends ParentPoly {
  speak() {
    return "Child";
  }
}

//* Overriding:
//* ChildPoly provides its own speak().

//* Polymorphism:
//* parentReference.speak() can behave differently
//* depending on the actual object.

const objects = [new ParentPoly(), new ChildPoly()];

objects.forEach((object) => {
  console.log(object.speak());
});

//* Parent
//* Child

//* ------------------------------------------------------------
//* 26. RUNTIME POLYMORPHISM
//* ------------------------------------------------------------

//* JavaScript determines which method implementation
//* to use at runtime.

//* Example:

class NotificationBase {
  send() {
    return "Base notification";
  }
}

class EmailPoly extends NotificationBase {
  send() {
    return "Sending Email";
  }
}

class SMSPoly extends NotificationBase {
  send() {
    return "Sending SMS";
  }
}

function sendNotification(notification) {
  console.log(notification.send());
}

sendNotification(new EmailPoly());
sendNotification(new SMSPoly());

//* At runtime:
//
//* EmailPoly object → EmailPoly.prototype.send()
//* SMSPoly object   → SMSPoly.prototype.send()

//* This is runtime polymorphism.

//* ------------------------------------------------------------
//* 27. POLYMORPHIC COLLECTION
//* ------------------------------------------------------------

//* A collection can contain different object types
//* as long as they provide the same expected behavior.

const notifications = [new EmailPoly(), new SMSPoly()];

notifications.forEach((notification) => {
  console.log(notification.send());
});

//* One collection.
//* Different object types.
//* Same method call.
//* Different behavior.

//* ------------------------------------------------------------
//* 28. INTERFACE-LIKE THINKING IN JAVASCRIPT
//* ------------------------------------------------------------

//* JavaScript does not have traditional interfaces
//* built into the language in the same way as TypeScript.

//* But we can think in terms of a contract.

//* Example:
//
//* A notification object must provide:
//
//*     send(message)

function sendMessage(service, message) {
  return service.send(message);
}

//* Any object that satisfies the behavior can be used.

//* This is often called programming to an interface/contract,
//* even when the interface is informal in JavaScript.

//* ------------------------------------------------------------
//* 29. POLYMORPHISM AND ABSTRACTION
//* ------------------------------------------------------------

//* ABSTRACTION:
//
//* Hides unnecessary implementation details.
//
//* POLYMORPHISM:
//
//* Allows different implementations behind the same operation.

//* Example:
//
//* Caller knows:
//
//*     payment.pay()
//
//* Caller doesn't need to know:
//
//* - API request details
//* - payment gateway details
//* - encryption
//* - transaction processing
//
//* Different payment classes implement pay() differently.

//* ------------------------------------------------------------
//* 30. COMMON MISTAKE — CALLING OVERLOADING NATIVE
//* ------------------------------------------------------------

//* WRONG:
//
//* "JavaScript supports function overloading."

//* Correct:
//
//* "JavaScript does not support traditional function
//*  overloading natively, but similar behavior can be
//*  implemented using rest parameters, arguments,
//*  type checks, default parameters, or conditional logic."

//* ------------------------------------------------------------
//* 31. COMMON MISTAKE — THINKING POLYMORPHISM = OVERLOADING
//* ------------------------------------------------------------

//* Polymorphism is broader than function overloading.

//* Important forms/concepts:
//
//* 1. Method overriding
//* 2. Duck typing
//* 3. Runtime polymorphism
//* 4. Behavior-based polymorphism
//* 5. Manual overload-like behavior

//* ------------------------------------------------------------
//* 32. COMMON MISTAKE — POLYMORPHISM REQUIRES extends
//* ------------------------------------------------------------

//* WRONG:
//
//* "Polymorphism only works with inheritance."

//* Correct:
//
//* JavaScript can achieve polymorphic behavior without
//* inheritance.

//* Example:

const printer = {
  print() {
    return "Printing document";
  },
};

const screen = {
  print() {
    return "Displaying document";
  },
};

function output(device) {
  console.log(device.print());
}

output(printer);
output(screen);

//* ------------------------------------------------------------
//* 33. COMMON MISTAKE — OVERRIDING THE WRONG METHOD
//* ------------------------------------------------------------

//* If a method name doesn't match, you are not overriding
//* the parent method.

//* Example:

class ParentExample {
  speak() {
    return "Parent speaking";
  }
}

class ChildExample extends ParentExample {
  talk() {
    return "Child talking";
  }
}

//* talk() is a new method.
//
//* It does NOT override speak().

//* ------------------------------------------------------------
//* 34. COMMON MISTAKE — FORGETTING super()
//* ------------------------------------------------------------

//* In a derived class constructor:
//
//* super() must be called before using this.

class PersonExample {
  constructor(name) {
    this.name = name;
  }
}

class StudentExample extends PersonExample {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
}

const studentExample = new StudentExample("Ravi", "JavaScript");

console.log(studentExample.name);
console.log(studentExample.course);

//* ------------------------------------------------------------
//* 35. POLYMORPHISM WITH PRIVATE METHODS
//* ------------------------------------------------------------

//* Private methods can also have separate implementations
//* inside different classes.

//* Example:

class BaseProcessor {
  process() {
    return "Base processing";
  }
}

class ImageProcessor extends BaseProcessor {
  process() {
    return "Processing image";
  }
}

class VideoProcessor extends BaseProcessor {
  process() {
    return "Processing video";
  }
}

const processors = [new ImageProcessor(), new VideoProcessor()];

processors.forEach((processor) => {
  console.log(processor.process());
});

//* ------------------------------------------------------------
//* 36. POLYMORPHISM IN BACKEND DEVELOPMENT
//* ------------------------------------------------------------

//* Example:
//
//* StorageService
//
//* Different implementations:
//
//* LocalStorageService
//* S3StorageService
//* CloudinaryStorageService
//
//* Common operation:
//
//*     upload()

class LocalStorageService {
  upload(file) {
    return `Uploading ${file} to local storage`;
  }
}

class CloudStorageService {
  upload(file) {
    return `Uploading ${file} to cloud storage`;
  }
}

function uploadFile(storage, file) {
  return storage.upload(file);
}

console.log(uploadFile(new LocalStorageService(), "photo.jpg"));

console.log(uploadFile(new CloudStorageService(), "photo.jpg"));

//* uploadFile() doesn't care how storage works.
//
//* It only expects:
//
//*     storage.upload(file)

//* ------------------------------------------------------------
//* 37. POLYMORPHISM IN FRONTEND DEVELOPMENT
//* ------------------------------------------------------------

//* Imagine different UI components providing:
//
//*     render()

class ButtonComponent {
  render() {
    return "<button>Click</button>";
  }
}

class CardComponent {
  render() {
    return "<div>Card</div>";
  }
}

class InputComponent {
  render() {
    return "<input />";
  }
}

const components = [
  new ButtonComponent(),
  new CardComponent(),
  new InputComponent(),
];

components.forEach((component) => {
  console.log(component.render());
});

//* Same operation:
//
//*     render()
//
//* Different components.
//* Different rendering behavior.

//* ------------------------------------------------------------
//* 38. THE MOST IMPORTANT MENTAL MODEL
//* ------------------------------------------------------------

//* Think:
//
//*          SAME REQUEST
//*               |
//*               v
//*        object.method()
//*               |
//*       +-------+-------+
//*       |       |       |
//*       v       v       v
//*      Dog     Cat     Bird
//*       |       |       |
//*      Woof    Meow    Tweet
//*
//* Same method call.
//* Different implementation.
//* Different result.
//
//* THAT is polymorphism.

//* ------------------------------------------------------------
//* 39. COMPLETE EXAMPLE
//* ------------------------------------------------------------

class Employee {
  constructor(name) {
    this.name = name;
  }

  work() {
    return `${this.name} is working`;
  }
}

class Developer extends Employee {
  work() {
    return `${this.name} is writing code`;
  }
}

class Designer extends Employee {
  work() {
    return `${this.name} is designing UI`;
  }
}

class Tester extends Employee {
  work() {
    return `${this.name} is testing software`;
  }
}

const employees = [
  new Developer("Ravi"),
  new Designer("Aman"),
  new Tester("Priya"),
];

employees.forEach((employee) => {
  console.log(employee.work());
});

//* Output:
//
//* Ravi is writing code
//* Aman is designing UI
//* Priya is testing software

//* employees contains different child objects.
//
//* But we use one common operation:
//
//*     employee.work()
//
//* Each object provides its own behavior.
//
//* This is polymorphism.

//* ============================================================
//* QUICK REFERENCE
//* ============================================================

//* POLYMORPHISM
//*     Same operation → different behavior.

//* METHOD OVERRIDING
//*     Child class provides its own implementation
//*     of a parent method.

//* FUNCTION OVERLOADING
//*     Multiple signatures for the same function name.
//*     NOT natively supported in JavaScript.

//* OVERLOAD-LIKE BEHAVIOR
//*     Can be manually implemented using:
//*     - arguments
//*     - rest parameters
//*     - typeof
//*     - Array.isArray()
//*     - conditional logic
//*     - default parameters

//* DUCK TYPING
//*     If an object provides the required behavior,
//*     it can often be used regardless of its class.

//* RUNTIME POLYMORPHISM
//*     JavaScript determines the appropriate method
//*     implementation at runtime.

//* super.method()
//*     Calls the parent implementation.

//* extends
//*     Creates a subclass relationship.

//* instanceof
//*     Checks whether an object's prototype chain
//*     includes a constructor's prototype.

//* ============================================================
//* POLYMORPHISM — GOLDEN RULES
//* ============================================================

//* 1. Polymorphism means "many forms."

//* 2. Same method call can produce different behavior.

//* 3. Method overriding is a major way to achieve
//*    polymorphism with classes.

//* 4. JavaScript does NOT support traditional function
//*    overloading natively.

//* 5. You can implement overload-like behavior manually.

//* 6. Polymorphism does NOT require inheritance in JavaScript.

//* 7. Duck typing allows behavior-based polymorphism.

//* 8. JavaScript uses the prototype chain to resolve methods.

//* 9. super.method() can call the parent implementation.

//* 10. Polymorphism helps reduce conditional logic,
//*     coupling, and duplicated code.

//* 11. Prefer programming against expected behavior
//*     rather than unnecessarily checking concrete classes.

//* 12. The easiest way to remember:
//
//*     ONE INTERFACE
//*          ↓
//*     MANY IMPLEMENTATIONS
//*          ↓
//*     MANY BEHAVIORS
//*
//* ============================================================
