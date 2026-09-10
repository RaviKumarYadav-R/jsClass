//* ============================================================
//* JAVASCRIPT — ENCAPSULATION
//* ============================================================

//* ============================================================
//* 1. WHAT IS ENCAPSULATION?
//* ============================================================

//* Encapsulation is the OOP principle of:
//
//* 1. Keeping an object's data and behavior together.
//* 2. Controlling how internal data can be accessed or changed.
//* 3. Hiding implementation details that should not be exposed.

//* Simple definition:
//
//* Encapsulation = DATA + BEHAVIOR + CONTROLLED ACCESS

//* Example:
//
//* A bank account has:
//
//* Data:
//* - balance
//* - account number
//
//* Behavior:
//* - deposit()
//* - withdraw()
//* - getBalance()
//
//* The user should not be able to freely manipulate the
//* internal balance in an unsafe way.

//* ============================================================
//* 2. REAL-WORLD EXAMPLE
//* ============================================================

//* Think about an ATM.

//* You can:
//
//* - check balance
//* - deposit money
//* - withdraw money
//
//* But you cannot directly modify the bank's internal database.

//* You interact through controlled operations.

//* That is the basic idea of encapsulation.

//* ============================================================
//* 3. PUBLIC DATA
//* ============================================================

//* By default, JavaScript class fields and methods are public.

//* Example:

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const user = new User("Ravi");

console.log(user.name);
console.log(user.greet());

//* Both `name` and `greet()` are publicly accessible.

//* ============================================================
//* 4. THE PROBLEM WITH PUBLIC INTERNAL STATE
//* ============================================================

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
}

const account = new BankAccount(1000);

account.balance = -50000;

console.log(account.balance);

//* The object allowed outside code to directly modify its state.

//* In a real banking system, this would be dangerous.

//* We may want:
//
//* balance
//*    ↓
//* hidden
//
//* deposit()
//* withdraw()
//*    ↓
//* controlled access

//* ============================================================
//* 5. ENCAPSULATION WITH METHODS
//* ============================================================

//* One simple approach is to expose operations instead of
//* allowing arbitrary modifications.

class SafeAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }

    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }

    this.balance -= amount;
  }
}

const safeAccount = new SafeAccount(1000);

safeAccount.deposit(500);
safeAccount.withdraw(200);

console.log(safeAccount.balance); // 1300

//* This provides some control,
//* but `balance` is still public.

//* Outside code can still do:
//
//* safeAccount.balance = -999999;

//* For stronger encapsulation, use private fields.

//* ============================================================
//* 6. PRIVATE FIELDS — MODERN JAVASCRIPT
//* ============================================================

//* Modern JavaScript supports true private class fields
//* using the `#` prefix.

class Account {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account(1000);

console.log(myAccount.getBalance()); // 1000

//* This is NOT allowed:
//
//* console.log(myAccount.#balance);

//* `#balance` can only be accessed from inside the class body.

//* ============================================================
//* 7. WHY IS `#` IMPORTANT?
//* ============================================================

//* This:
//
//* #balance
//
//* is genuinely private.

//* It is different from:
//
//* _balance
//
//* An underscore is only a naming convention.

//* Example:

class Example {
  constructor() {
    this._value = 100;
  }
}

const example = new Example();

console.log(example._value); // 100

//* `_value` is NOT private.

//* It is still publicly accessible.

//* ============================================================
//* 8. TRUE PRIVATE VS CONVENTIONAL PRIVATE
//* ============================================================

/*

Convention only:

this._balance

Anyone can access:

account._balance


True private:

this.#balance

Outside access:

account.#balance

Not allowed.
*/

//* Remember:
//
//* `_name` → convention
//* `#name` → language-enforced private field

//* ============================================================
//* 9. PRIVATE FIELD WITH GETTER
//* ============================================================

//* We can expose controlled read access to private data.

class UserProfile {
  #age;

  constructor(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const profile = new UserProfile(21);

console.log(profile.getAge());

//* Outside code cannot directly access:
//
//* profile.#age

//* ============================================================
//* 10. PRIVATE FIELD WITH CONTROLLED UPDATE
//* ============================================================

class Person {
  #age;

  constructor(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(age) {
    if (age < 0) {
      throw new Error("Age cannot be negative");
    }

    this.#age = age;
  }
}

const person = new Person(21);

console.log(person.getAge());

person.setAge(22);

console.log(person.getAge());

//* Now age can only be changed through setAge().

//* This allows validation before changing internal state.

//* ============================================================
//* 11. ENCAPSULATION WITH PRIVATE METHODS
//* ============================================================

//* Methods can also be private.

class Calculator {
  #validateNumber(value) {
    return typeof value === "number" && !Number.isNaN(value);
  }

  add(a, b) {
    if (!this.#validateNumber(a) || !this.#validateNumber(b)) {
      throw new TypeError("Arguments must be numbers");
    }

    return a + b;
  }
}

const calculator = new Calculator();

console.log(calculator.add(10, 20));

//* `#validateNumber()` is an internal implementation detail.

//* Outside code cannot call:
//
//* calculator.#validateNumber(10);

//* ============================================================
//* 12. PRIVATE STATIC MEMBERS
//* ============================================================

//* Static members can also be private.

class IDGenerator {
  static #currentId = 0;

  static generate() {
    this.#currentId++;

    return this.#currentId;
  }
}

console.log(IDGenerator.generate()); // 1
console.log(IDGenerator.generate()); // 2

//* `#currentId` belongs to the class and is private.

//* ============================================================
//* 13. PUBLIC + PRIVATE MEMBERS TOGETHER
//* ============================================================

class BankAccountComplete {
  #balance;

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit");
    }

    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Invalid withdrawal");
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

const accountComplete = new BankAccountComplete("Ravi", 1000);

accountComplete.deposit(500);

console.log(accountComplete.owner);
console.log(accountComplete.getBalance());

//* Public:
//
//* owner
//* deposit()
//* withdraw()
//* getBalance()
//
//* Private:
//
//* #balance

//* ============================================================
//* 14. ENCAPSULATION IS NOT JUST "HIDING DATA"
//* ============================================================

//* A common misunderstanding:
//
//* Encapsulation = making variables private.
//
//* That's only part of the idea.

//* Encapsulation is mainly about:
//
//* - controlling access
//* - protecting invariants
//* - hiding implementation details
//* - exposing a clear public interface
//* - keeping related state and behavior together

//* ============================================================
//* 15. WHAT IS AN INVARIANT?
//* ============================================================

//* An invariant is a condition that should remain true
//* for an object's valid state.

//* Example:
//
//* Bank account balance should not become negative
//* through an ordinary withdrawal operation.

//* We can protect that invariant:

class AccountInvariant {
  #balance;

  constructor(balance = 0) {
    if (balance < 0) {
      throw new Error("Initial balance cannot be negative");
    }

    this.#balance = balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

//* The private field helps prevent outside code from
//* directly breaking the invariant.

//* ============================================================
//* 16. GETTERS AND SETTERS
//* ============================================================

//* JavaScript supports getters and setters.

//* They allow property-like syntax while executing methods.

class PersonGetterSetter {
  #age;

  constructor(age) {
    this.age = age;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("Invalid age");
    }

    this.#age = value;
  }
}

const personGS = new PersonGetterSetter(21);

console.log(personGS.age);

personGS.age = 22;

console.log(personGS.age);

//* Notice:
//
//* personGS.age
//
//* looks like a property.
//
//* But internally:
//
//* get age()
//* set age()

//* ============================================================
//* 17. WHY GETTERS/SETTERS HELP ENCAPSULATION
//* ============================================================

//* Without validation:

//* this.age = value;

//* With setter:
//
//* set age(value) {
//*     validate(value);
//*     this.#age = value;
//* }

//* The public API remains simple:
//
//* person.age = 22;
//
//* while validation stays inside the class.

//* ============================================================
//* 18. READ-ONLY PUBLIC INTERFACE
//* ============================================================

//* Sometimes we want users to read a value but not directly
//* modify it.

class UserReadOnly {
  #id;

  constructor(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}

const readOnlyUser = new UserReadOnly(101);

console.log(readOnlyUser.id);

//* There is no setter:
//
//* readOnlyUser.id = 500;
//
//* This does not change the private #id field.

//* ============================================================
//* 19. CLOSURE-BASED ENCAPSULATION
//* ============================================================

//* Before private class fields, closures were commonly used
//* to keep data private.

//* Example:

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
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

//* `count` cannot be directly accessed through `counter`.

//* The only way to interact with it is through the functions
//* that close over `count`.

//* ============================================================
//* 20. WHY IS `count` PRIVATE IN A CLOSURE?
//* ============================================================

//* `count` exists inside createCounter()'s lexical environment.

//* The returned methods maintain access to it through closure.

//* Mental model:
//
//* createCounter()
//*       │
//*       ↓
//* ┌───────────────────┐
//* │ count = 0         │
//* │                   │
//* │ increment() ──────┼──→ count
//* │ decrement() ──────┼──→ count
//* │ getCount() ───────┼──→ count
//* └───────────────────┘
//*          ↑
//*          │
//*      outside code
//*      cannot directly
//*      access count

//* ============================================================
//* 21. CLOSURE VS PRIVATE FIELD
//* ============================================================

//* Closure approach:
//
//* function createUser() {
//*     let password = "...";
//* }
//
//
//* Modern class approach:
//
//* class User {
//*     #password;
//* }

//* Both can provide encapsulation.

//* Modern private fields are often clearer when using classes.

//* Closures are still extremely useful and important
//* JavaScript concepts.

//* ============================================================
//* 22. OLD PATTERN — CONSTRUCTOR CLOSURE
//* ============================================================

//* The technique from older JavaScript code:

function PersonPrivate(name, age) {
  let privateAge = age;

  this.name = name;

  this.getAge = function () {
    return privateAge;
  };
}

const privatePerson = new PersonPrivate("Ravi", 21);

console.log(privatePerson.name);
console.log(privatePerson.getAge());

//* This does NOT expose:
//
//* privatePerson.privateAge

//* It returns undefined because privateAge is a local variable,
//* not an object property.

//* ============================================================
//* 23. PROBLEM WITH CLOSURE METHOD IN CONSTRUCTOR
//* ============================================================

//* Every object gets its own function.

function PersonClosure(age) {
  let privateAge = age;

  this.getAge = function () {
    return privateAge;
  };
}

const person1 = new PersonClosure(21);
const person2 = new PersonClosure(22);

console.log(person1.getAge === person2.getAge); // false

//* Each instance gets a separate function.

//* Private class fields solve this differently while allowing
//* methods to remain shared on the prototype.

//* ============================================================
//* 24. PRIVATE FIELD + SHARED METHOD
//* ============================================================

class PersonModern {
  #age;

  constructor(age) {
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const modernPerson1 = new PersonModern(21);
const modernPerson2 = new PersonModern(22);

console.log(modernPerson1.getAge === modernPerson2.getAge); // true

//* getAge() is shared through PersonModern.prototype.
//
//* #age remains private to each instance.

//* ============================================================
//* 25. ENCAPSULATION AND ABSTRACTION
//* ============================================================

//* These concepts are related but NOT identical.

//* Encapsulation:
//
//* Controls access to internal state and implementation.

//* Abstraction:
//
//* Exposes important functionality while hiding unnecessary
//* implementation complexity.

//* Example:
//
//* account.withdraw(500)
//
//* Encapsulation:
//
//* #balance is protected.
//
//* Abstraction:
//
//* User doesn't need to know how withdrawal is implemented.

//* ============================================================
//* 26. ENCAPSULATION AND ABSTRACTION EXAMPLE
//* ============================================================

class Payment {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  pay(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#processPayment(amount);
    this.#balance -= amount;
  }

  #processPayment(amount) {
    console.log(`Processing payment: ${amount}`);
  }
}

const payment = new Payment(1000);

payment.pay(300);

//* Outside code only needs:
//
//* payment.pay(300)
//
//* It doesn't need to know:
//
//* #processPayment()
//* #balance

//* ============================================================
//* 27. ENCAPSULATION AND INFORMATION HIDING
//* ============================================================

//* Information hiding means keeping implementation details
//* private so outside code depends on a smaller public API.

//* Example:
//
//* Public:
//
//* account.deposit()
//* account.withdraw()
//* account.getBalance()
//
//* Hidden:
//
//* #balance
//* validation details
//* internal calculations
//* database/internal processing

//* This reduces coupling between different parts of an app.

//* ============================================================
//* 28. ENCAPSULATION REDUCES COUPLING
//* ============================================================

//* Coupling means how strongly one piece of code depends on
//* another piece of code.

//* Suppose external code directly modifies:
//
//* account.balance
//
//* Then external code becomes dependent on the internal
//* representation.

//* If we later change:
//
//* balance → #balance
//
//* external code breaks.

//* With a controlled API:
//
//* account.deposit()
//* account.withdraw()
//
//* the internal implementation can change while the public
//* interface remains stable.

//* ============================================================
//* 29. ENCAPSULATION IN A REAL APPLICATION
//* ============================================================

//* Example: Shopping Cart

class ShoppingCart {
  #items = [];

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(index) {
    this.#items.splice(index, 1);
  }

  getTotal() {
    return this.#items.reduce((total, item) => total + item.price, 0);
  }

  getItems() {
    return [...this.#items];
  }
}

const cart = new ShoppingCart();

cart.addItem({
  name: "Keyboard",
  price: 1000,
});

cart.addItem({
  name: "Mouse",
  price: 500,
});

console.log(cart.getTotal());
console.log(cart.getItems());

//* ============================================================
//* 30. WHY RETURN A COPY FROM getItems()?
//* ============================================================

//* Consider:
//
//* return this.#items;
//
//* Then external code receives the same array reference.

//* It could potentially modify the internal array:
//
//* cart.getItems().push(...)

//* Better:
//
//* return [...this.#items]
//
//* This returns a shallow copy.

//* Now the caller can modify the returned array without
//* directly modifying the cart's internal array structure.

//* ============================================================
//* 31. ENCAPSULATION WITH VALIDATION
//* ============================================================

class Product {
  #price;

  constructor(price) {
    this.price = price;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (typeof value !== "number") {
      throw new TypeError("Price must be a number");
    }

    if (value < 0) {
      throw new Error("Price cannot be negative");
    }

    this.#price = value;
  }
}

const product = new Product(1000);

console.log(product.price);

product.price = 1200;

console.log(product.price);

//* The setter protects the internal state.

//* ============================================================
//* 32. ENCAPSULATION WITH BUSINESS RULES
//* ============================================================

class Employee {
  #salary;

  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }

  increaseSalary(percent) {
    if (percent <= 0) {
      throw new Error("Percentage must be positive");
    }

    this.#salary += this.#salary * (percent / 100);
  }
}

const employee = new Employee("Ravi", 50000);

employee.increaseSalary(10);

console.log(employee.getSalary());

//* Business rules stay inside the class.

//* External code doesn't need to know how the salary
//* calculation is implemented.

//* ============================================================
//* 33. PRIVATE METHODS FOR INTERNAL LOGIC
//* ============================================================

class Order {
  #calculateTax(amount) {
    return amount * 0.18;
  }

  getFinalPrice(amount) {
    const tax = this.#calculateTax(amount);

    return amount + tax;
  }
}

const order = new Order();

console.log(order.getFinalPrice(1000));

//* calculateTax() is an implementation detail.
//
//* Public API:
//
//* getFinalPrice()

//* ============================================================
//* 34. PUBLIC API
//* ============================================================

//* The public API is the set of methods/properties that
//* outside code is expected to use.

//* Example:

class AccountAPI {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

//* Public API:
//
//* deposit()
//* withdraw()
//* getBalance()
//
//* Internal implementation:
//
//* #balance

//* ============================================================
//* 35. ENCAPSULATION DOES NOT MEAN EVERYTHING MUST BE PRIVATE
//* ============================================================

//* Good encapsulation does NOT mean:
//
//* "Make every property private."

//* Instead:
//
//* Decide what should be exposed and what should be hidden.

//* Example:
//
//* name → public
//* #password → private
//* login() → public
//* #hashPassword() → private

//* ============================================================
//* 36. PASSWORD EXAMPLE
//* ============================================================

class AuthUser {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  login(password) {
    return this.#password === password;
  }
}

const authUser = new AuthUser("ravi", "secret123");

console.log(authUser.login("secret123")); // true
console.log(authUser.login("wrong")); // false

//* In a real application:
//
//* Never store passwords as plain text.
//* Use secure password hashing on the server.

//* This example is only demonstrating encapsulation.

//* ============================================================
//* 37. ENCAPSULATION IN FRONTEND CODE
//* ============================================================

//* Encapsulation is useful in UI components too.

//* Example conceptual component state:
//
//* private/internal state
//*        ↓
//* component logic
//*        ↓
//* public events / methods
//*        ↓
//* rest of application

//* The exact implementation depends on the framework.

//* ============================================================
//* 38. ENCAPSULATION IN BACKEND CODE
//* ============================================================

//* Backend example:
//
//* UserService
//*   │
//*   ├── public createUser()
//*   ├── public login()
//*   │
//*   └── private/helper logic
//*          ├── validateUser()
//*          ├── hashPassword()
//*          └── generateToken()

//* Consumers should interact through a clean service API
//* rather than depending on every internal implementation detail.

//* ============================================================
//* 39. JAVASCRIPT ACCESS MODIFIERS
//* ============================================================

//* JavaScript class syntax has:
//
//* Public
//* Private
//
//* JavaScript does NOT have a native `protected` access
//* modifier like some other languages.

//* Public:
//
//* name
//* greet()
//
//* Private:
//
//* #password
//* #validate()
//
//* Protected:
//
//* No native JavaScript `protected` keyword.

//* ============================================================
//* 40. `private` KEYWORD IS NOT THE JAVASCRIPT SYNTAX
//* ============================================================

//* This is NOT JavaScript class private syntax:
//
//* class User {
//*     private password;
//* }

//* JavaScript uses:
//
//* class User {
//*     #password;
//* }

//* TypeScript has its own access-modifier syntax:
//
//* private
//* protected
//* public
//
//* But TypeScript's modifiers should not be confused with
//* JavaScript's runtime `#private` fields.

//* ============================================================
//* 41. PRIVATE FIELD ACCESS IS ENFORCED BY JAVASCRIPT
//* ============================================================

class Secret {
  #value = 100;

  getValue() {
    return this.#value;
  }
}

const secret = new Secret();

console.log(secret.getValue());

//* This would be a syntax error:
//
//* console.log(secret.#value);

//* Private names are only valid inside the class body.

//* ============================================================
//* 42. PRIVATE FIELDS ARE DIFFERENT FROM PROPERTIES
//* ============================================================

//* Public property:

class PublicExample {
  value = 100;
}

const publicExample = new PublicExample();

console.log(publicExample.value);

//* Private field:

class PrivateExample {
  #value = 100;

  getValue() {
    return this.#value;
  }
}

const privateExample = new PrivateExample();

console.log(privateExample.getValue());

//* Private fields are not normal publicly accessible properties.

//* ============================================================
//* 43. PRIVATE FIELD WITH `in` OPERATOR
//* ============================================================

//* Private fields have special syntax for checking whether
//* an object has a particular private field, but this check
//* can only be performed from code that has access to that
//* private name.

//* Example:

class UserPrivateCheck {
  #id;

  constructor(id) {
    this.#id = id;
  }

  static hasId(user) {
    return #id in user;
  }
}

const checkedUser = new UserPrivateCheck(101);

console.log(UserPrivateCheck.hasId(checkedUser));

//* This is an advanced feature of private fields.

//* ============================================================
//* 44. ENCAPSULATION AND PROTOTYPES
//* ============================================================

//* With private fields:
//
//* class User {
//*     #password;
//
//*     login() {}
//* }

//* `login()` can live on User.prototype,
//* while #password belongs privately to each instance.

//* This gives:
//
//* shared behavior
//* +
//* private per-instance state

//* ============================================================
//* 45. ENCAPSULATION AND IMMUTABILITY
//* ============================================================

//* Encapsulation and immutability are related but different.

//* Encapsulation:
//
//* controls access.
//
//* Immutability:
//
//* prevents state from being changed.

//* Example:
//
//* private field → encapsulation
//* Object.freeze() → immutability mechanism

//* ============================================================
//* 46. ENCAPSULATION VS DATA HIDING
//* ============================================================

/*

ENCAPSULATION
      │
      ├── Keep state + behavior together
      ├── Control access
      ├── Expose public API
      └── Hide implementation details

DATA HIDING
      │
      └── Restrict direct access to internal details


//* Data hiding is one part of encapsulation.
*/

//* ============================================================
//* 47. COMPLETE REAL-WORLD EXAMPLE
//* ============================================================

class BankAccountFinal {
  #balance;
  #transactions = [];

  constructor(owner, initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }

    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#validateAmount(amount);

    this.#balance += amount;

    this.#transactions.push({
      type: "deposit",
      amount: amount,
    });
  }

  withdraw(amount) {
    this.#validateAmount(amount);

    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }

    this.#balance -= amount;

    this.#transactions.push({
      type: "withdraw",
      amount: amount,
    });
  }

  getBalance() {
    return this.#balance;
  }

  getTransactions() {
    return [...this.#transactions];
  }

  #validateAmount(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Invalid amount");
    }
  }
}

const finalAccount = new BankAccountFinal("Ravi", 5000);

finalAccount.deposit(1000);
finalAccount.withdraw(1500);

console.log(finalAccount.getBalance());

console.log(finalAccount.getTransactions());

//* Internal/private:
//
//* #balance
//* #transactions
//* #validateAmount()
//
//* Public:
//
//* owner
//* deposit()
//* withdraw()
//* getBalance()
//* getTransactions()

//* ============================================================
//* 48. COMPLETE ENCAPSULATION FLOW
//* ============================================================

/*

OUTSIDE CODE
     │
     │ calls
     ↓
PUBLIC API
     │
     ├── deposit()
     ├── withdraw()
     └── getBalance()
     │
     ↓
INTERNAL LOGIC
     │
     ├── validation
     ├── business rules
     └── state updates
     │
     ↓
PRIVATE STATE
     │
     ├── #balance
     ├── #transactions
     └── #internalMethods
*/

//* Outside code doesn't need to know the internal mechanism.

//* ============================================================
//* 49. COMMON MISTAKES
//* ============================================================

//* Mistake 1:
//
//* Thinking `_value` is truly private.
//
//* It isn't.

//* `_value` is only a convention.

//* Mistake 2:
//
//* Thinking JavaScript has native `protected`.
//
//* It doesn't have a native `protected` access modifier.

//* Mistake 3:
//
//* Thinking old closure-based private state is the only
//* way to implement encapsulation.
//
//* Modern JavaScript has #private fields and methods.

//* Mistake 4:
//
//* Making everything private without considering the public API.

//* Good encapsulation exposes a clean interface.

//* Mistake 5:
//
//* Returning internal mutable objects directly.
//
//* Prefer a copy when appropriate.

//* Mistake 6:
//
//* Confusing encapsulation with immutability.
//
//* They solve different problems.

//* Mistake 7:
//
//* Assuming private means "encrypted".

//* Private fields are access-controlled language features.
//* They are NOT encryption.

//* ============================================================
//* 50. CLOSURE VS PRIVATE CLASS FIELD
//* ============================================================

/*

                    ENCAPSULATION
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
          CLOSURE               # PRIVATE
              │                     │
       let secret = ...       #secret
              │                     │
       lexical scope          class private
              │                     │
       functions close        methods access
       over the data          the field
*/

//* Both are valid techniques.

//* Modern class-based OOP:
//
//* #private fields/methods
//
//* Functional/factory patterns:
//
//* closures

//* ============================================================
//* 51. WHEN SHOULD YOU USE PRIVATE FIELDS?
//* ============================================================

//* Consider #private when:
//
//* - internal state should not be directly modified
//* - an invariant must be protected
//* - implementation details should be hidden
//* - class users only need a controlled API
//* - you want strong language-level privacy

//* ============================================================
//* 52. WHEN SHOULD YOU USE PUBLIC PROPERTIES?
//* ============================================================

//* Keep a property public when:
//
//* - callers legitimately need direct access
//* - no important invariant needs protection
//* - direct modification is acceptable
//* - the property is part of the intended public API

//* ============================================================
//* 53. ENCAPSULATION DECISION RULE
//* ============================================================

//* Ask:
//
//* "Should outside code be allowed to directly change this?"

//* YES
//*   ↓
//* Public property may be appropriate.
//
//* NO
//*   ↓
//* Consider #private state + controlled methods/getters/setters.

//* ============================================================
//* 54. FINAL MENTAL MODEL
//* ============================================================

/*

OBJECT
│
├── PUBLIC INTERFACE
│   │
│   ├── public properties
│   ├── public methods
│   └── getters/setters
│
└── INTERNAL IMPLEMENTATION
    │
    ├── #private fields
    ├── #private methods
    ├── validation
    ├── business rules
    └── internal state


OUTSIDE WORLD
      │
      ↓
PUBLIC API
      │
      ↓
CONTROLLED ACCESS
      │
      ↓
PRIVATE INTERNAL STATE
*/

//* ============================================================
//* 55. GOLDEN RULES
//* ============================================================

//* 1. Encapsulation means controlling access to an object's
//*    internal state and implementation.

//* 2. Public members are accessible from outside the object.

//* 3. `#private` fields and methods are genuinely private
//*    within JavaScript classes.

//* 4. `_name` is only a naming convention, NOT true privacy.

//* 5. JavaScript does not have a native `protected` modifier.

//* 6. Closures can also provide private state.

//* 7. Getters and setters can provide controlled property access.

//* 8. Encapsulation helps protect object invariants.

//* 9. Encapsulation reduces unnecessary coupling.

//* 10. Encapsulation hides implementation details behind
//*     a public API.

//* 11. Encapsulation is NOT the same as immutability.

//* 12. Private data is not encrypted.

//* 13. Don't make everything private automatically.
//*     Expose a clear and useful public interface.

//* ============================================================
//* ONE-LINE MEMORY TRICK
//* ============================================================

//* ENCAPSULATION:
//
//* "Andar ka data aur logic ko control karo,
//*  bahar sirf required interface do."

//* Short technical version:
//
//* ENCAPSULATION =
//* HIDE INTERNAL DETAILS
//* +
//* CONTROL ACCESS
//* +
//* EXPOSE PUBLIC API
