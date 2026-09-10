//* ============================================================
//* JAVASCRIPT OOP — ABSTRACTION
//* ============================================================

//* ------------------------------------------------------------
//* 1. WHAT IS ABSTRACTION?
//* ------------------------------------------------------------

//* Abstraction means:
//* "Expose what is necessary and hide how it is implemented."

//* In simple words:
//
//* User needs to know:
//*     WHAT an object can do.
//
//* User does NOT need to know:
//*     HOW the object does it internally.

//* Example:
//
//* ATM provides:
//
//*     withdraw()
//*     deposit()
//*     checkBalance()
//
//* You don't need to know the internal implementation
//* of the bank server, database, authentication, etc.
//
//* You simply use the exposed operations.

//* ------------------------------------------------------------
//* 2. REAL-WORLD EXAMPLE — CAR
//* ------------------------------------------------------------

//* You use:
//
//*     car.start()
//*     car.accelerate()
//*     car.brake()
//
//* You don't directly manage:
//
//*     fuel injection
//*     engine timing
//*     transmission logic
//*     sensor communication
//*     combustion process

//* The car exposes a simple interface:
//
//*     start()
//*     accelerate()
//*     brake()
//
//* and hides the complicated implementation.

//* THAT is abstraction.

//* ------------------------------------------------------------
//* 3. ABSTRACTION = WHAT vs HOW
//* ------------------------------------------------------------

//* WHAT:
//
//*     payment.pay()
//*     user.login()
//*     file.upload()
//*     order.cancel()

//* HOW:
//
//*     API request
//*     database query
//*     encryption
//*     validation
//*     retry logic
//*     network communication

//* Abstraction hides the HOW
//* and exposes the WHAT.

//* ------------------------------------------------------------
//* 4. SIMPLE JAVASCRIPT EXAMPLE
//* ------------------------------------------------------------

class CoffeeMachine {
  makeCoffee() {
    this.#boilWater();
    this.#grindBeans();

    return "Coffee is ready";
  }

  #boilWater() {
    console.log("Boiling water...");
  }

  #grindBeans() {
    console.log("Grinding coffee beans...");
  }
}

const machine = new CoffeeMachine();

console.log(machine.makeCoffee());

//* User only calls:
//
//*     machine.makeCoffee()
//
//* Internal operations:
//
//*     #boilWater()
//*     #grindBeans()
//
//* are hidden.

//* The public API is:
//
//*     makeCoffee()

//* The implementation details are:
//
//*     #boilWater()
//*     #grindBeans()

//* ------------------------------------------------------------
//* 5. ABSTRACTION VS ENCAPSULATION
//* ------------------------------------------------------------

//* These concepts are related but NOT identical.

//* ENCAPSULATION:
//
//* Bundles state + behavior together
//* and controls access to internal state.

//* ABSTRACTION:
//
//* Hides unnecessary implementation details
//* and exposes a simpler interface.

//* Example:

class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }

    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

//* Encapsulation:
//
//*     #balance is protected from direct external access.

//* Abstraction:
//
//*     User simply calls:
//
//*     account.deposit(500)
//
//* User doesn't need to know how balance is internally
//* updated.

//* ------------------------------------------------------------
//* 6. IMPORTANT: JAVASCRIPT DOES NOT HAVE NATIVE
//*    ABSTRACT CLASSES
//* ------------------------------------------------------------

//* Unlike languages such as Java/C++, JavaScript does not
//* have an "abstract class" keyword.

//* This is NOT valid JavaScript:
//
//* abstract class Shape {}
//
//* It will cause a syntax error.

//* JavaScript also does not have native:
//
//*     interface Shape {}
//
//* syntax.

//* TypeScript provides both:
//
//*     abstract class
//*     interface

//* But JavaScript can implement similar design patterns.

//* ------------------------------------------------------------
//* 7. WHAT IS AN ABSTRACT CLASS?
//* ------------------------------------------------------------

//* Conceptually, an abstract class is:
//
//* A base class designed to be inherited from,
//* rather than directly instantiated.

//* Example concept:
//
//* Shape
//*   ↓
//* Circle
//* Rectangle
//* Triangle

//* Shape provides a common design/contract.
//
//* Circle, Rectangle and Triangle provide concrete behavior.

//* ------------------------------------------------------------
//* 8. SIMULATING AN ABSTRACT CLASS IN JAVASCRIPT
//* ------------------------------------------------------------

//* We can prevent direct instantiation manually.

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Shape is an abstract class and cannot be instantiated");
    }
  }

  draw() {
    throw new Error("Child class must implement draw()");
  }
}

//* new.target:
//
//* Inside a constructor, new.target refers to the constructor
//* that was directly invoked with new.

//* Therefore:
//
//* new Shape()
//
//* new.target === Shape
//
//* But:
//
//* new Circle()
//
//* inside Shape's constructor:
//
//* new.target === Circle

//* ------------------------------------------------------------
//* 9. CONCRETE CHILD CLASS
//* ------------------------------------------------------------

class Circle extends Shape {
  draw() {
    return "Drawing a circle";
  }
}

const circle = new Circle();

console.log(circle.draw());

//* Output:
//
//* Drawing a circle

//* This would throw an error:
//
//* const shape = new Shape();

//* Because Shape is being used directly.

//* ------------------------------------------------------------
//* 10. ABSTRACT METHOD
//* ------------------------------------------------------------

//* An abstract method is conceptually a method that declares
//* required behavior but does not provide a concrete
//* implementation.

//* JavaScript does not have an "abstract method" keyword.

//* We can simulate one by throwing an error.

class AnimalAbstract {
  speak() {
    throw new Error("Child class must implement speak()");
  }
}

class DogAbstract extends AnimalAbstract {
  speak() {
    return "Woof!";
  }
}

class CatAbstract extends AnimalAbstract {
  speak() {
    return "Meow!";
  }
}

const dogAbstract = new DogAbstract();
const catAbstract = new CatAbstract();

console.log(dogAbstract.speak());
console.log(catAbstract.speak());

//* ------------------------------------------------------------
//* 11. WHAT IF CHILD DOES NOT IMPLEMENT THE METHOD?
//* ------------------------------------------------------------

class Payment {
  pay(amount) {
    throw new Error("Child class must implement pay()");
  }
}

class UPI extends Payment {
  pay(amount) {
    return `Paid ₹${amount} using UPI`;
  }
}

//* UPI implements pay().
//
//* Another child:

class UnknownPayment extends Payment {
  // No pay() implementation
}

const payment = new UnknownPayment();

//* The inherited abstract-like method runs:
//
//* payment.pay()
//
//* This throws:
//
//* "Child class must implement pay()"

//* This gives us runtime enforcement.

//* ------------------------------------------------------------
//* 12. ABSTRACT CLASS + ABSTRACT METHOD TOGETHER
//* ------------------------------------------------------------

class ShapeBase {
  constructor() {
    if (new.target === ShapeBase) {
      throw new Error("ShapeBase cannot be instantiated directly");
    }
  }

  area() {
    throw new Error("Child class must implement area()");
  }
}

class Rectangle extends ShapeBase {
  constructor(width, height) {
    super();

    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class CircleBase extends ShapeBase {
  constructor(radius) {
    super();

    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const rectangle = new Rectangle(10, 20);
const circleBase = new CircleBase(5);

console.log(rectangle.area());
console.log(circleBase.area());

//* Same abstract contract:
//
//*     area()
//
//* Different implementations.

//* ------------------------------------------------------------
//* 13. ABSTRACTION + POLYMORPHISM
//* ------------------------------------------------------------

//* These concepts work extremely well together.

//* Abstract-like base class:
//
//*     Payment
//*         |
//*     +---+---+
//*     |       |
//*    UPI    Card
//*     |       |
//*    pay()   pay()

class PaymentMethod {
  pay(amount) {
    throw new Error("pay() must be implemented");
  }
}

class CardPayment extends PaymentMethod {
  pay(amount) {
    return `Card payment: ₹${amount}`;
  }
}

class UPIPayment extends PaymentMethod {
  pay(amount) {
    return `UPI payment: ₹${amount}`;
  }
}

function checkout(paymentMethod, amount) {
  return paymentMethod.pay(amount);
}

console.log(checkout(new CardPayment(), 1000));

console.log(checkout(new UPIPayment(), 1000));

//* ABSTRACTION:
//
//* checkout() only knows:
//
//*     paymentMethod.pay()

//* POLYMORPHISM:
//
//* CardPayment.pay()
//* UPIPayment.pay()
//
//* provide different implementations.

//* ------------------------------------------------------------
//* 14. ABSTRACTION WITH PRIVATE METHODS
//* ------------------------------------------------------------

//* Private methods are extremely useful for abstraction.

//* Public method:

class UserService {
  registerUser(name) {
    this.#validateName(name);
    this.#saveUser(name);

    return "User registered";
  }

  #validateName(name) {
    if (!name || name.length < 3) {
      throw new Error("Invalid name");
    }
  }

  #saveUser(name) {
    console.log(`Saving ${name} to database...`);
  }
}

const userService = new UserService();

console.log(userService.registerUser("Ravi"));

//* Public API:
//
//*     registerUser()

//* Hidden implementation:
//
//*     #validateName()
//*     #saveUser()

//* The caller doesn't need to know how registration works.

//* ------------------------------------------------------------
//* 15. ABSTRACTION USING A PUBLIC API
//* ------------------------------------------------------------

//* A good abstraction usually exposes a small,
//* meaningful public API.

//* Example:

class EmailService {
  sendEmail(to, message) {
    this.#validateEmail(to);
    this.#connectToServer();
    this.#send(to, message);

    return "Email sent";
  }

  #validateEmail(email) {
    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }
  }

  #connectToServer() {
    console.log("Connecting to mail server...");
  }

  #send(to, message) {
    console.log(`Sending email to ${to}`);
    console.log(`Message: ${message}`);
  }
}

const emailService = new EmailService();

emailService.sendEmail("user@example.com", "Welcome!");

//* Caller only knows:
//
//*     sendEmail()
//
//* Everything else is implementation detail.

//* ------------------------------------------------------------
//* 16. ABSTRACTION WITH CLOSURES
//* ------------------------------------------------------------

//* Before private class fields (#) became available,
//* closures were commonly used to hide internal state.

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount()); // 2

//* count cannot be directly accessed:
//
//* counter.count
//
//* gives undefined because count is not a public property.

//* Closure provides private state.

//* This is another form of abstraction + encapsulation.

//* ------------------------------------------------------------
//* 17. ABSTRACTION USING MODULES
//* ------------------------------------------------------------

//* Modules also help hide implementation details.

//* Conceptually:
//
//* userService.js
//
//*     validateUser()      ← internal
//*     connectDatabase()   ← internal
//*     createUser()        ← exported
//
//* Another file only uses:
//
//*     createUser()

//* Example:

function validateUser(name) {
  return name.length >= 3;
}

function saveUser(name) {
  console.log(`Saving ${name}`);
}

export function createUser(name) {
  if (!validateUser(name)) {
    throw new Error("Invalid user");
  }

  saveUser(name);
}

//* The module exposes:
//
//*     createUser()
//
//* and hides:
//
//*     validateUser()
//*     saveUser()

//* NOTE:
//* This example uses ES modules and must run in a module
//* environment.

//* ------------------------------------------------------------
//* 18. ABSTRACTION THROUGH FUNCTIONS
//* ------------------------------------------------------------

//* Abstraction is NOT limited to OOP.

//* Functions are one of the most common abstraction tools.

function calculateTax(price) {
  const taxRate = 0.18;

  return price * taxRate;
}

console.log(calculateTax(1000));

//* User only needs:
//
//*     calculateTax(1000)
//
//* User doesn't need to know the tax calculation formula.

//* Function abstraction:
//
//*     simple API
//*          ↓
//*     hidden calculation

//* ------------------------------------------------------------
//* 19. ABSTRACTION IN API CLIENTS
//* ------------------------------------------------------------

class APIClient {
  async getUsers() {
    const response = await this.#request("/users");

    return response.json();
  }

  async #request(url) {
    console.log(`Requesting ${url}`);

    // Real application:
    // return fetch(url);
  }
}

//* Caller:

const api = new APIClient();

//* Caller only needs:
//
//* api.getUsers()

//* Caller doesn't need to know:
//
//* - request setup
//* - headers
//* - authentication
//* - retry logic
//* - logging
//* - error handling
//
//* Those details can remain internal.

//* ------------------------------------------------------------
//* 20. ABSTRACTION IN DATABASE CODE
//* ------------------------------------------------------------

//* Imagine:

class UserRepository {
  findById(id) {
    return this.#queryDatabase(`SELECT * FROM users WHERE id = ${id}`);
  }

  #queryDatabase(query) {
    console.log("Executing:", query);

    return {
      id: 1,
      name: "Ravi",
    };
  }
}

//* Application code:

const repository = new UserRepository();

console.log(repository.findById(1));

//* Application uses:
//
//*     findById()
//
//* It doesn't need to know:
//
//*     SQL
//*     database connection
//*     query execution
//*     connection pooling
//
//* Those are implementation details.

//* ------------------------------------------------------------
//* 21. ABSTRACTION IN FRONTEND COMPONENTS
//* ------------------------------------------------------------

//* A React component is also a practical example of
//* abstraction.

//* Example concept:
//
//* <Button onClick={handleClick}>
//*     Save
//* </Button>

//* The consumer doesn't need to know:
//
//*     DOM event handling
//*     styling
//*     loading state
//*     accessibility logic
//*     keyboard behavior
//
//* The component exposes a simpler API:
//
//*     Button(props)

//* ------------------------------------------------------------
//* 22. ABSTRACTION AND INTERFACES
//* ------------------------------------------------------------

//* JavaScript does NOT have native interface syntax.

//* TypeScript does:
//
//* interface Payment {
//*     pay(amount: number): void;
//* }

//* Then a class can implement the contract:
//
//* class UPI implements Payment {
//*     pay(amount: number): void {
//*         // implementation
//*     }
//* }

//* Important:
//
//* interface is a TypeScript feature,
//* not a JavaScript runtime feature.

//* TypeScript interfaces are primarily compile-time contracts.
//* They do not exist as runtime objects in normal emitted JS.

//* ------------------------------------------------------------
//* 23. JAVASCRIPT APPROACH TO INTERFACE-LIKE DESIGN
//* ------------------------------------------------------------

//* JavaScript can use a behavioral contract.

//* Contract:
//
//* Any payment object must provide:
//
//*     pay(amount)

function processPayment(payment, amount) {
  if (!payment || typeof payment.pay !== "function") {
    throw new TypeError("Payment object must provide pay()");
  }

  return payment.pay(amount);
}

const paymentObject = {
  pay(amount) {
    return `Processing ₹${amount}`;
  },
};

console.log(processPayment(paymentObject, 500));

//* This performs runtime contract validation.

//* ------------------------------------------------------------
//* 24. ABSTRACTION USING FACTORY FUNCTIONS
//* ------------------------------------------------------------

//* A factory can hide object creation details.

function createUser(name) {
  function normalizeName(value) {
    return value.trim();
  }

  const normalizedName = normalizeName(name);

  return {
    getName() {
      return normalizedName;
    },
  };
}

const user = createUser("  Ravi  ");

console.log(user.getName());

//* Caller doesn't need to know:
//
//* - normalization
//* - object construction
//* - internal logic
//
//* Factory provides a simple API.

//* ------------------------------------------------------------
//* 25. ABSTRACTION DOES NOT MEAN "HIDE EVERYTHING"
//* ------------------------------------------------------------

//* Good abstraction hides unnecessary complexity.

//* It should still expose everything the consumer needs.

//* BAD:
//
//* Expose 20 internal methods when only 3 are necessary.

//* GOOD:
//
//* Public API:
//*
//*     login()
//*     logout()
//*     getUser()
//
//* Internal:
//*
//*     validateCredentials()
//*     generateToken()
//*     hashPassword()
//*     saveSession()
//*     logLoginAttempt()

//* ------------------------------------------------------------
//* 26. INFORMATION HIDING
//* ------------------------------------------------------------

//* Information hiding means keeping implementation details
//* inaccessible or irrelevant to the outside code.

//* Example:

class ShoppingCart {
  #items = [];

  addItem(item) {
    this.#validateItem(item);
    this.#items.push(item);
  }

  getTotal() {
    return this.#items.reduce((total, item) => total + item.price, 0);
  }

  #validateItem(item) {
    if (!item || typeof item.price !== "number") {
      throw new TypeError("Invalid item");
    }
  }
}

const cart = new ShoppingCart();

cart.addItem({ name: "Keyboard", price: 1000 });
cart.addItem({ name: "Mouse", price: 500 });

console.log(cart.getTotal());

//* Public:
//
//*     addItem()
//*     getTotal()

//* Private:
//
//*     #items
//*     #validateItem()

//* This is both:
//
//*     Encapsulation
//*     +
//*     Abstraction

//* ------------------------------------------------------------
//* 27. ABSTRACTION AND PRIVATE FIELDS
//* ------------------------------------------------------------

//* Private fields:
//
//*     #name
//*     #balance
//*     #items
//
//* can hide implementation details.

//* Example:

class Product {
  #price;

  constructor(price) {
    this.#price = price;
  }

  getPrice() {
    return this.#price;
  }
}

const product = new Product(999);

console.log(product.getPrice());

//* This fails:
//
//* product.#price

//* Private fields can only be accessed from inside
//* the class body.

//* ------------------------------------------------------------
//* 28. ABSTRACTION USING GETTERS
//* ------------------------------------------------------------

class Temperature {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }
}

const temperature = new Temperature(25);

console.log(temperature.fahrenheit);

//* User sees:
//
//*     temperature.fahrenheit
//
//* User doesn't need to know the conversion formula.

//* Getter creates a property-like abstraction.

//* ------------------------------------------------------------
//* 29. ABSTRACTION + VALIDATION
//* ------------------------------------------------------------

class Account {
  #balance = 0;

  deposit(amount) {
    if (!this.#isValidAmount(amount)) {
      throw new Error("Invalid amount");
    }

    this.#balance += amount;
  }

  #isValidAmount(amount) {
    return typeof amount === "number" && Number.isFinite(amount) && amount > 0;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new Account();

account.deposit(500);

console.log(account.balance);

//* Public:
//
//*     deposit()
//*     balance
//
//* Private:
//
//*     #balance
//*     #isValidAmount()

//* Internal validation rules are hidden from the caller.

//* ------------------------------------------------------------
//* 30. ABSTRACTION + BUSINESS RULES
//* ------------------------------------------------------------

//* Abstraction is especially useful when an object contains
//* business rules.

//* Example:

class Order {
  #status = "pending";

  cancel() {
    if (!this.#canCancel()) {
      throw new Error("Order cannot be cancelled");
    }

    this.#status = "cancelled";
  }

  #canCancel() {
    return this.#status === "pending";
  }

  get status() {
    return this.#status;
  }
}

const order = new Order();

order.cancel();

console.log(order.status);

//* User simply says:
//
//*     order.cancel()
//
//* Internal rule:
//
//*     Can a pending order be cancelled?
//
//* is hidden inside the object.

//* ------------------------------------------------------------
//* 31. ABSTRACT CLASS vs CONCRETE CLASS
//* ------------------------------------------------------------

//* ABSTRACT-LIKE CLASS:
//
//* Intended to provide a common structure/contract.
//
//* Example:
//
//* Shape
//* Payment
//* Animal
//* Storage

//* CONCRETE CLASS:
//
//* Can be instantiated and used directly.
//
//* Example:
//
//* Circle
//* UPIPayment
//* Dog
//* S3Storage

//* ------------------------------------------------------------
//* 32. ABSTRACT METHOD vs NORMAL METHOD
//* ------------------------------------------------------------

//* Abstract-like method:
//
//* Has no meaningful generic implementation.
//
//* Example:

class Storage {
  upload(file) {
    throw new Error("Child class must implement upload()");
  }
}

//* Concrete method:
//
//* Has a reusable implementation.

class LoggerService {
  log(message) {
    return `[LOG] ${message}`;
  }
}

//* ------------------------------------------------------------
//* 33. TEMPLATE METHOD STYLE
//* ------------------------------------------------------------

//* A base class can define the overall process,
//* while child classes provide specific steps.

class DataProcessor {
  process(data) {
    const cleanedData = this.clean(data);
    const result = this.transform(cleanedData);

    return result;
  }

  clean(data) {
    throw new Error("clean() must be implemented");
  }

  transform(data) {
    throw new Error("transform() must be implemented");
  }
}

class NumberProcessor extends DataProcessor {
  clean(data) {
    return data.filter((number) => number > 0);
  }

  transform(data) {
    return data.map((number) => number * 2);
  }
}

const processor = new NumberProcessor();

console.log(processor.process([-1, 2, 3, -5]));

//* Output:
//
//* [4, 6]

//* Base class controls the general workflow.
//
//* Child class controls specific implementation.

//* ------------------------------------------------------------
//* 34. ABSTRACTION + POLYMORPHISM
//* ------------------------------------------------------------

//* This combination appears frequently in professional code.

//* Example:
//
//* Abstract-like Storage
//*        |
//*   +----+----+
//*   |         |
//* Local     Cloud
//* Storage   Storage
//*   |         |
//* upload()  upload()
//*
//* Application:
//
//* storage.upload(file)
//
//* Application doesn't care which storage implementation
//* is being used.

//* ABSTRACTION:
//*     Defines the expected operation.

//* POLYMORPHISM:
//*     Different classes implement that operation differently.

//* ------------------------------------------------------------
//* 35. COMPLETE PROFESSIONAL-STYLE EXAMPLE
//* ------------------------------------------------------------

class StorageService {
  constructor() {
    if (new.target === StorageService) {
      throw new Error("StorageService cannot be instantiated directly");
    }
  }

  upload(file) {
    throw new Error("Child class must implement upload()");
  }

  delete(file) {
    throw new Error("Child class must implement delete()");
  }
}

class LocalStorage extends StorageService {
  upload(file) {
    return `Uploading ${file} to local storage`;
  }

  delete(file) {
    return `Deleting ${file} from local storage`;
  }
}

class CloudStorage extends StorageService {
  upload(file) {
    return `Uploading ${file} to cloud storage`;
  }

  delete(file) {
    return `Deleting ${file} from cloud storage`;
  }
}

function backupFile(storage, file) {
  console.log(storage.upload(file));
}

function removeFile(storage, file) {
  console.log(storage.delete(file));
}

const localStorageService = new LocalStorage();
const cloudStorageService = new CloudStorage();

backupFile(localStorageService, "photo.jpg");
backupFile(cloudStorageService, "photo.jpg");

removeFile(localStorageService, "photo.jpg");
removeFile(cloudStorageService, "photo.jpg");

//* backupFile() doesn't know:
//
//* local filesystem
//* cloud API
//* authentication
//* HTTP request
//* file upload implementation

//* It only knows the abstraction:
//
//*     storage.upload(file)

//* ============================================================
//* ABSTRACTION vs ENCAPSULATION vs INHERITANCE vs POLYMORPHISM
//* ============================================================

//* ENCAPSULATION
//* ------------------------------------------------------------
//
//* Controls access to state and implementation.
//
//* Example:
//*     #balance
//*     #validateAmount()

//* ABSTRACTION
//* ------------------------------------------------------------
//
//* Hides unnecessary complexity and exposes a useful API.
//
//* Example:
//*     account.deposit(500)

//* INHERITANCE
//* ------------------------------------------------------------
//
//* Creates a relationship between classes.
//
//* Example:
//*     Circle extends Shape

//* POLYMORPHISM
//* ------------------------------------------------------------
//
//* Same operation → different behavior.
//
//* Example:
//*     circle.area()
//*     rectangle.area()

//* ============================================================
//* EASY WAY TO REMEMBER ALL FOUR
//* ============================================================

//* ENCAPSULATION
//*     "Who can access this?"

//* ABSTRACTION
//*     "What should the user see/use?"

//* INHERITANCE
//*     "What does this class inherit?"

//* POLYMORPHISM
//*     "How can different objects behave differently
//*      through the same operation?"

//* ============================================================
//* COMMON MISTAKES
//* ============================================================

//* ❌ MISTAKE 1:
//* "JavaScript has native abstract classes."

//* Correct:
//* JavaScript has no native abstract class keyword.
//* We can simulate the behavior using patterns.

//* ❌ MISTAKE 2:
//* "JavaScript has interfaces."

//* Correct:
//* JavaScript does not have native interface syntax.
//* TypeScript provides interfaces.

//* ❌ MISTAKE 3:
//* "Abstraction means making everything private."

//* Wrong.

//* Abstraction is about exposing a useful API and hiding
//* unnecessary implementation details.

//* ❌ MISTAKE 4:
//* "Encapsulation and abstraction are exactly the same."

//* Wrong.

//* They overlap but solve different problems.

//* ❌ MISTAKE 5:
//* "Private fields automatically mean abstraction."

//* Not necessarily.

//* #private provides access control.
//* Abstraction is about the design of the public interface
//* and hiding unnecessary complexity.

//* ❌ MISTAKE 6:
//* "Abstract methods are supported directly in JavaScript."

//* Wrong.

//* We commonly simulate them by throwing an Error.

//* Example:

class Example {
  method() {
    throw new Error("Must be implemented");
  }
}

//* ============================================================
//* WHEN SHOULD YOU USE ABSTRACTION?
//* ============================================================

//* Use abstraction when:
//
//* 1. Implementation is complicated.
//
//* 2. Consumers don't need internal details.
//
//* 3. You want a simple public API.
//
//* 4. You want to protect business rules.
//
//* 5. You want to make implementation replaceable.
//
//* 6. You want different implementations behind
//*    the same API.
//
//* 7. You are building reusable libraries/services/components.

//* ============================================================
//* ABSTRACTION MENTAL MODEL
//* ============================================================

//* Think about a restaurant:
//
//*
//*              CUSTOMER
//*                  |
//*                  |
//*            "Order Pizza"
//*                  |
//*                  v
//*          +---------------+
//*          |   RESTAURANT  |
//*          +---------------+
//*                  |
//*        Hidden complexity
//*                  |
//*       +----------+----------+
//*       |          |          |
//*    Cooking     Oven      Ingredients
//*       |          |          |
//*       +----------+----------+
//*                  |
//*                  v
//*                PIZZA
//*

//* Customer doesn't need to know the internal process.
//
//* Customer only needs:
//
//*     orderPizza()
//
//* That is abstraction.

//* ============================================================
//* FINAL GOLDEN RULES
//* ============================================================

//* 1. Abstraction means:
//*    "Expose WHAT, hide HOW."

//* 2. Abstraction reduces unnecessary complexity.

//* 3. A good abstraction provides a simple public API.

//* 4. JavaScript does NOT have native abstract classes.

//* 5. JavaScript does NOT have native interfaces.

//* 6. Abstract-like classes can be simulated using:
//*    - new.target
//*    - errors
//*    - inheritance
//*    - conventions

//* 7. Abstract-like methods can throw an Error when the child
//*    must provide the implementation.

//* 8. Private fields (#) and private methods (#) help hide
//*    implementation details.

//* 9. Closures can also provide private state.

//* 10. Modules can hide implementation details.

//* 11. Functions themselves are powerful abstraction tools.

//* 12. TypeScript provides explicit:
//*     abstract class
//*     interface

//* 13. Abstraction and encapsulation are related,
//*     but they are not the same.

//* 14. Abstraction often works together with polymorphism:
//
//*     Common API
//*          ↓
//*     Different implementations
//*          ↓
//*     Replaceable behavior

//* 15. The simplest memory trick:
//
//*     ABSTRACTION
//*          |
//*          v
//*      "WHAT"
//*          |
//*          v
//*      Hide "HOW"
//*
//* ============================================================
