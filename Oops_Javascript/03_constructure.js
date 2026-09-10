//* ============================================================
//* JAVASCRIPT — CONSTRUCTOR
//* ============================================================


//* ============================================================
//* 1. WHAT IS A CONSTRUCTOR?
//* ============================================================

//* A constructor is a mechanism used to create and initialize
//* objects that follow the same structure.

//* In JavaScript, there are two closely related ways to work
//* with constructors:
//
//* 1. Constructor Function
//* 2. constructor() method inside a class
//
//* Example:
//
//* function Person(name, age) {
//*     this.name = name;
//*     this.age = age;
//* }


//* ============================================================
//* 2. WHY DO WE NEED CONSTRUCTORS?
//* ============================================================

//* Imagine we need 100 person objects.
//
//* Without a constructor:
//
//* const person1 = {
//*     name: "Ravi",
//*     age: 21
//* };
//
//* const person2 = {
//*     name: "Aman",
//*     age: 22
//* };
//
//* const person3 = {
//*     name: "Rahul",
//*     age: 20
//* };
//
//* This becomes repetitive.

//* A constructor allows us to define the structure once
//* and create many objects from it.


//* ============================================================
//* 3. CONSTRUCTOR FUNCTION
//* ============================================================

//* A constructor function is a normal JavaScript function
//* intended to be called with the `new` keyword.

//* Example:

function Person(name, age) {
    this.name = name;
    this.age = age;
}

//* Create objects:

const person1 = new Person("Ravi", 21);
const person2 = new Person("Aman", 22);
const person3 = new Person("Rahul", 20);

console.log(person1);
console.log(person2);
console.log(person3);


//* Output conceptually:
//
//* Person { name: "Ravi", age: 21 }
//* Person { name: "Aman", age: 22 }
//* Person { name: "Rahul", age: 20 }


//* ============================================================
//* 4. CONSTRUCTOR FUNCTION NAMING CONVENTION
//* ============================================================

//* Constructor functions are usually written using
//* PascalCase.

//* Correct:
//
//* function Person() {}
//* function Student() {}
//* function BankAccount() {}

//* Usually avoid:
//
//* function person() {}
//* function student() {}


//* PascalCase communicates:
//
//* "This function is intended to be used with `new`."


//* ============================================================
//* 5. UNDERSTANDING `this` INSIDE A CONSTRUCTOR
//* ============================================================

//* When a constructor function is called using `new`,
//* JavaScript creates a new object.

//* `this` refers to that newly created object.

//* Example:

function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("Ravi", 21);

console.log(student1.name); // Ravi
console.log(student1.age);  // 21


//* Think:
//
//* new Student("Ravi", 21)
//
//* becomes conceptually:
//
//* new empty object
//*        ↓
//* this = new object
//*        ↓
//* this.name = "Ravi"
//* this.age = 21
//*        ↓
//* return object


//* ============================================================
//* 6. WHAT DOES `new` ACTUALLY DO?
//* ============================================================

//* The `new` operator performs several important steps.

//* Example:
//
//* const person = new Person("Ravi", 21);

//* Conceptually:
//
//* STEP 1 — Create a new empty object
//*
//* const obj = {};

//* STEP 2 — Connect the object to Person.prototype
//*
//* obj.__proto__ = Person.prototype;

//* STEP 3 — Call Person with `this = obj`
//*
//* Person.call(obj, "Ravi", 21);

//* STEP 4 — Return the object
//*
//* return obj;


//* Simplified mental model:
//
//* new Person("Ravi", 21)
//*             ↓
//*     Create new object
//*             ↓
//*     Set prototype
//*             ↓
//*     Run constructor
//*             ↓
//*     Initialize properties
//*             ↓
//*       Return object


//* IMPORTANT:
//* This is a conceptual model, not the exact specification
//* implementation.


/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person("Ravi", 21);
*/


//* ============================================================
//* 7. CONSTRUCTOR PARAMETERS
//* ============================================================

//* Constructors can receive parameters just like normal
//* functions.

function Employee(name, department, salary) {
    this.name = name;
    this.department = department;
    this.salary = salary;
}

const employee1 = new Employee(
    "Ravi",
    "Engineering",
    50000
);

console.log(employee1);


//* Each call can provide different values.

const employee2 = new Employee(
    "Aman",
    "Design",
    45000
);

console.log(employee2);


//* ============================================================
//* 8. CONSTRUCTOR INITIALIZES INSTANCE PROPERTIES
//* ============================================================

//* Properties created using `this` become properties of
//* each individual object.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "City");

console.log(car1.brand); // Toyota
console.log(car2.brand); // Honda


//* Each object has its own:
//
//* car1.brand
//* car1.model
//
//* car2.brand
//* car2.model


//* ============================================================
//* 9. EACH OBJECT IS A SEPARATE INSTANCE
//* ============================================================

function User(name) {
    this.name = name;
}

const user1 = new User("Ravi");
const user2 = new User("Aman");

user1.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Aman


//* Changing user1 does not automatically change user2.
//
//* Because they are separate objects.


//* ============================================================
//* 10. CONSTRUCTOR CAN PROVIDE DEFAULT VALUES
//* ============================================================

function Product(name, price = 0) {
    this.name = name;
    this.price = price;
}

const product1 = new Product("Keyboard", 1200);
const product2 = new Product("Mouse");

console.log(product1);
console.log(product2);


//* product2.price becomes 0.


//* ============================================================
//* 11. CONSTRUCTOR CAN CALCULATE VALUES
//* ============================================================

function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = width * height;
}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.area); // 50


//* Constructor logic does not have to simply copy parameters.
//* It can also calculate or normalize values.


//* ============================================================
//* 12. CONSTRUCTOR CAN INITIALIZE ARRAYS
//* ============================================================

function Team(name) {
    this.name = name;
    this.players = [];
}

const team1 = new Team("India");
const team2 = new Team("Australia");

team1.players.push("Player A");

console.log(team1.players); // ["Player A"]
console.log(team2.players); // []


//* Each constructor call creates a separate array.


//* ============================================================
//* 13. CONSTRUCTOR CAN INITIALIZE OBJECTS
//* ============================================================

function UserProfile(name, city) {
    this.name = name;

    this.address = {
        city: city
    };
}

const profile = new UserProfile("Ravi", "Nawada");

console.log(profile.address.city);


//* ============================================================
//* 14. METHODS INSIDE A CONSTRUCTOR
//* ============================================================

//* A constructor can create methods as properties.

function PersonWithMethod(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        return `Hello, my name is ${this.name}.`;
    };
}

const p1 = new PersonWithMethod("Ravi", 21);

console.log(p1.greet());


//* This works, but there is an important performance/design issue.


//* ============================================================
//* 15. PROBLEM WITH DEFINING METHODS INSIDE CONSTRUCTOR
//* ============================================================

//* Every time we use `new`, a NEW function is created.

function PersonWithMethod(name) {
    this.name = name;

    this.greet = function () {
        return `Hello ${this.name}`;
    };
}

const a = new PersonWithMethod("Ravi");
const b = new PersonWithMethod("Aman");

console.log(a.greet === b.greet); // false


//* Why?
//
//* a has its own greet function.
//* b has another greet function.
//
//* Function memory is duplicated for every instance.


//* ============================================================
//* 16. BETTER APPROACH — PROTOTYPE METHOD
//* ============================================================

//* Instead of creating the method for every object,
//* we can place the method on the constructor's prototype.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}.`;
};

const personA = new Person("Ravi", 21);
const personB = new Person("Aman", 22);

console.log(personA.greet());
console.log(personB.greet());

console.log(personA.greet === personB.greet); // true


//* Now both objects share the same function through the prototype.


//* Mental model:
//
//* personA
//*   ↓
//* Person.prototype
//*   ↓
//* greet()
//
//* personB
//*   ↓
//* Person.prototype
//*   ↓
//* greet()


//* ============================================================
//* 17. CONSTRUCTOR + PROTOTYPE
//* ============================================================

//* Instance data:
//
//* this.name
//* this.age
//
//* Shared behavior:
//
//* Person.prototype.greet

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hi, I am ${this.name}`;
};

Person.prototype.getAge = function () {
    return this.age;
};

const ravi = new Person("Ravi", 21);

console.log(ravi.name);
console.log(ravi.greet());
console.log(ravi.getAge());


//* ============================================================
//* 18. `constructor` PROPERTY
//* ============================================================

//* Every normal function used as a constructor has a
//* `prototype` object.

//* That prototype normally has a `constructor` property
//* pointing back to the constructor function.

function Student(name) {
    this.name = name;
}

console.log(Student.prototype.constructor === Student); // true


//* Relationship:
//
//* Student
//*   ↓
//* Student.prototype
//*   ↓
//* constructor → Student


//* ============================================================
//* 19. `instanceof`
 //* ============================================================

//* `instanceof` checks whether an object's prototype chain
//* contains the prototype property of a constructor.

function Animal(name) {
    this.name = name;
}

const dog = new Animal("Dog");

console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true


//* Why is dog also an Object?
//
//* Because the prototype chain eventually reaches Object.prototype.


//* ============================================================
//* 20. CONSTRUCTOR FUNCTION VS NORMAL FUNCTION
//* ============================================================

//* There is no special syntax that makes a function a
//* "constructor function".

//* A normal function can technically be called with `new`
//* if it is constructable.

//* Convention tells us that a function intended as a
//* constructor should use PascalCase.


//* Example:

function Person(name) {
    this.name = name;
}

const person = new Person("Ravi");


//* The important part is the use of:
//
//* new Person(...)


//* ============================================================
//* 21. WHAT HAPPENS WITHOUT `new`?
//* ============================================================

//* If a constructor function is called without `new`,
//* its behavior depends on how the function is defined
//* and the current `this` value.

//* Example:

function User(name) {
    this.name = name;
}

//* const user = User("Ravi");

//* Do NOT call constructor functions this way.


//* Always use:
//
//* const user = new User("Ravi");


//* ============================================================
//* 22. `new` IS NOT OPTIONAL FOR CONSTRUCTOR FUNCTIONS
//* ============================================================

//* Correct:

function Account(owner) {
    this.owner = owner;
}

const account = new Account("Ravi");


//* Incorrect:
//
//* const account = Account("Ravi");


//* Golden rule:
//
//* Constructor function → normally call with `new`.


//* ============================================================
//* 23. CLASS CONSTRUCTOR
//* ============================================================

//* Modern JavaScript commonly uses the `class` syntax.

//* Example:

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I am ${this.name}.`;
    }
}

const personClass = new PersonClass("Ravi", 21);

console.log(personClass.name);
console.log(personClass.greet());


//* Here:
//
//* constructor(name, age)
//
//* is a special method inside the class.


//* ============================================================
//* 24. CONSTRUCTOR FUNCTION VS CLASS CONSTRUCTOR
//* ============================================================

//* Constructor function:
//
//* function Person(name) {
//*     this.name = name;
//* }

//* Class:
//
//* class Person {
//*     constructor(name) {
//*         this.name = name;
//*     }
//* }


//* Both are based on JavaScript's prototype system.
//
//* The `class` syntax provides a cleaner syntax for working
//* with constructor/prototype-based objects.


//* ============================================================
//* 25. CLASS METHODS ARE STORED ON THE PROTOTYPE
//* ============================================================

class UserClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello ${this.name}`;
    }
}

const userA = new UserClass("Ravi");
const userB = new UserClass("Aman");

console.log(userA.greet === userB.greet); // true


//* The method is shared through UserClass.prototype.


//* ============================================================
//* 26. CLASS CONSTRUCTOR INITIALIZES INSTANCE DATA
//* ============================================================

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}

const account1 = new BankAccount("Ravi", 1000);
const account2 = new BankAccount("Aman", 2000);

console.log(account1);
console.log(account2);


//* `owner` and `balance` belong to each instance.


//* ============================================================
//* 27. CONSTRUCTOR SHOULD INITIALIZE OBJECT STATE
//* ============================================================

//* Object state means the data that represents the current
//* condition of an object.

//* Example:

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}

const counter = new Counter();

console.log(counter.count); // 0

counter.increment();

console.log(counter.count); // 1


//* Constructor establishes the initial state:
//
//* count = 0


//* ============================================================
//* 28. CONSTRUCTOR WITH VALIDATION
//* ============================================================

//* Constructor logic can validate input.

class PersonValidated {
    constructor(name, age) {
        if (!name) {
            throw new Error("Name is required");
        }

        if (age < 0) {
            throw new Error("Age cannot be negative");
        }

        this.name = name;
        this.age = age;
    }
}

const validPerson = new PersonValidated("Ravi", 21);

console.log(validPerson);


//* Constructor can protect the initial object state.


//* ============================================================
//* 29. CONSTRUCTOR WITH NORMALIZATION
//* ============================================================

//* We can transform input before storing it.

class UserNormalized {
    constructor(name, email) {
        this.name = name.trim();
        this.email = email.trim().toLowerCase();
    }
}

const normalizedUser = new UserNormalized(
    "  Ravi Kumar  ",
    "  RAVI@EXAMPLE.COM "
);

console.log(normalizedUser);


//* Stored values become normalized.


//* ============================================================
//* 30. DEFAULT PARAMETERS IN CLASS CONSTRUCTOR
//* ============================================================

class ProductClass {
    constructor(name, price = 0) {
        this.name = name;
        this.price = price;
    }
}

const product = new ProductClass("Mouse");

console.log(product.price); // 0


//* ============================================================
//* 31. CONSTRUCTOR CAN CALL METHODS
//* ============================================================

class UserSetup {
    constructor(name) {
        this.name = name;
        this.setup();
    }

    setup() {
        console.log(`Setting up ${this.name}`);
    }
}

const setupUser = new UserSetup("Ravi");


//* Be careful when calling methods from constructors.
//* In inheritance, initialization order becomes especially important.


//* ============================================================
//* 32. INHERITANCE AND CONSTRUCTOR
//* ============================================================

class AnimalClass {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends AnimalClass {
    constructor(name, breed) {
        super(name);

        this.breed = breed;
    }
}

const dog1 = new Dog("Tommy", "Labrador");

console.log(dog1.name);
console.log(dog1.breed);


//* `super(name)` calls the parent constructor.

//* In a derived class constructor, you must call `super()`
//* before accessing `this`.


//* ============================================================
//* 33. WHY `super()` IS REQUIRED?
//* ============================================================

//* When a class extends another class, the child class
//* does not get to use `this` until the parent initialization
//* has happened.

//* Example:
//
//* class Dog extends Animal {
//*     constructor(name) {
//*         super(name);
//*         this.name = name;
//*     }
//* }


//* `super()` initializes the parent part of the object.


//* ============================================================
//* 34. IF CHILD CLASS HAS NO CONSTRUCTOR
//* ============================================================

//* JavaScript provides a default derived constructor behavior.

//* Example:

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {}

const cat = new Cat("Kitty");

console.log(cat.name);


//* The child can inherit the parent's constructor behavior
//* when it doesn't define its own constructor.


//* ============================================================
//* 35. STATIC CONSTRUCTOR-RELATED MEMBERS
//* ============================================================

//* Static methods belong to the class itself,
//* not to individual instances.

class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(10, 20));

//* const helper = new MathHelper();
//* helper.add(10, 20); // Error


//* Static members are accessed through the class name.


//* ============================================================
//* 36. PRIVATE FIELDS + CONSTRUCTOR
//* ============================================================

//* Modern JavaScript supports private fields using `#`.

class BankAccountPrivate {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }
}

const privateAccount = new BankAccountPrivate(5000);

console.log(privateAccount.getBalance());


//* The private field cannot be accessed directly outside
//* the class body.
//
//* privateAccount.#balance
//* This is invalid.


//* ============================================================
//* 37. CONSTRUCTOR DOES NOT "CREATE" THE OBJECT ALONE
//* ============================================================

//* This is an important conceptual correction.

//* People often say:
//
//* "The constructor creates the object."

//* More precisely:
//
//* `new` creates/initializes the instance process,
//* and the constructor initializes the object's state.

//* Mental model:
//
//* new
//*  ↓
//* create instance
//*  ↓
//* connect prototype
//*  ↓
//* call constructor
//*  ↓
//* initialize properties
//*  ↓
//* instance returned


//* ============================================================
//* 38. CONSTRUCTOR RETURN BEHAVIOR
//* ============================================================

//* Constructor functions can explicitly return values,
//* but `new` has special return behavior.

//* Example:

function PersonReturn(name) {
    this.name = name;

    return {
        custom: true
    };
}

const result = new PersonReturn("Ravi");

console.log(result);


//* Because the constructor explicitly returned an object,
//* that object becomes the result.

//* Primitive returns are treated differently:
//
//* function PersonReturnPrimitive(name) {
//*     this.name = name;
//*     return 100;
//* }
//
//* const person = new PersonReturnPrimitive("Ravi");
//* console.log(person.name);
//
//* The primitive return does not replace the created object.


//* ============================================================
//* 39. CLASS CONSTRUCTORS HAVE DIFFERENT RETURN RULES
//* ============================================================

//* Class constructors also have special behavior when used
//* with `new`.

//* Usually, constructors initialize `this` and do not
//* explicitly return another object.

class PersonNormal {
    constructor(name) {
        this.name = name;
    }
}

const normalPerson = new PersonNormal("Ravi");

console.log(normalPerson);


//* ============================================================
//* 40. CONSTRUCTOR AND OBJECT REFERENCE
//* ============================================================

function UserReference(name) {
    this.name = name;
}

const userOne = new UserReference("Ravi");
const userTwo = userOne;

userTwo.name = "Aman";

console.log(userOne.name); // Aman


//* Why?
//
//* userOne and userTwo reference the SAME object.
//
//* Constructor created one object.
//* Assignment copied the reference.


//* ============================================================
//* 41. CONSTRUCTOR + OBJECT METHODS
//* ============================================================

class RectangleClass {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new RectangleClass(10, 5);

console.log(rect.area());       // 50
console.log(rect.perimeter());  // 30


//* Constructor:
//
//* initializes data.
//
//* Methods:
//
//* operate on that data.


//* ============================================================
//* 42. REAL-WORLD EXAMPLE — BANK ACCOUNT
//* ============================================================

class BankAccount {
    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit must be greater than 0");
        }

        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal must be greater than 0");
        }

        if (amount > this.balance) {
            throw new Error("Insufficient balance");
        }

        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

const myAccount = new BankAccount("Ravi", 1000);

myAccount.deposit(500);
myAccount.withdraw(200);

console.log(myAccount.getBalance()); // 1300


//* Constructor:
//
//* establishes:
//
//* owner
//* balance


//* Methods:
//
//* deposit()
//* withdraw()
//* getBalance()


//* ============================================================
//* 43. REAL-WORLD EXAMPLE — USER
//* ============================================================

class User {
    constructor(name, email, role = "user") {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    isAdmin() {
        return this.role === "admin";
    }
}

const user = new User(
    "Ravi",
    "ravi@example.com",
    "admin"
);

console.log(user.name);
console.log(user.email);
console.log(user.isAdmin());


//* ============================================================
//* 44. REAL-WORLD EXAMPLE — TODO
//* ============================================================

class Todo {
    constructor(title) {
        this.title = title;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

const todo = new Todo("Learn JavaScript");

console.log(todo);

todo.complete();

console.log(todo);


//* Constructor initializes:
//
//* title
//* completed


//* Methods change the object's state.


//* ============================================================
//* 45. CONSTRUCTOR AND ENCAPSULATION
//* ============================================================

//* A constructor can establish the initial internal state
//* of an object.

//* With private fields, we can control access to that state.

class SecureCounter {
    #count;

    constructor(initialValue = 0) {
        this.#count = initialValue;
    }

    increment() {
        this.#count++;
    }

    decrement() {
        this.#count--;
    }

    getValue() {
        return this.#count;
    }
}

const secureCounter = new SecureCounter(10);

secureCounter.increment();

console.log(secureCounter.getValue()); // 11


//* ============================================================
//* 46. CONSTRUCTOR VS FACTORY FUNCTION
//* ============================================================

//* Constructor approach:

class UserConstructor {
    constructor(name) {
        this.name = name;
    }
}

const userConstructor = new UserConstructor("Ravi");


//* Factory function:
//
//* function createUser(name) {
//*     return {
//*         name
//*     };
//* }
//
//* const user = createUser("Ravi");


//* Both can create objects.
//
//* Constructor style uses:
//
//* new
//* prototypes
//* classes/inheritance
//
//* Factory style directly returns objects.


//* ============================================================
//* 47. CONSTRUCTOR VS OBJECT LITERAL
//* ============================================================

//* Object literal:
//
//* const user = {
//*     name: "Ravi",
//*     age: 21
//* };


//* Constructor:
//
//* const user = new User("Ravi", 21);


//* Use a constructor/class when you need many objects
//* following the same behavior and structure.


//* ============================================================
//* 48. CONSTRUCTOR VS CLASS
//* ============================================================

//* Constructor function:
//
//* function Person(name) {
//*     this.name = name;
//* }
//
//* Person.prototype.greet = function () {
//*     return `Hello ${this.name}`;
//* };


//* Class:
//
//* class Person {
//*     constructor(name) {
//*         this.name = name;
//*     }
//
//*     greet() {
//*         return `Hello ${this.name}`;
//*     }
//* }


//* Both use prototypes underneath.
//
//* Classes provide cleaner syntax and built-in support for
//* features such as:
//
//* extends
//* super
//* static
//* private fields
//* getters/setters


//* ============================================================
//* 49. COMMON MISTAKE — FORGETTING `new`
//* ============================================================

//* Wrong:
//
//* const person = Person("Ravi", 21);

//* Correct:
//
//* const person = new Person("Ravi", 21);


//* ============================================================
//* 50. COMMON MISTAKE — USING ARROW FUNCTION AS CONSTRUCTOR
//* ============================================================

//* Arrow functions cannot be used with `new`.

//* Example:
//
//* const Person = (name) => {
//*     this.name = name;
//* };

//* const person = new Person("Ravi");
//
//* This throws an error.


//* If you need a constructor function, use a regular
//* function or a class.


//* ============================================================
//* 51. COMMON MISTAKE — CONFUSING `constructor` WITH `new`
//* ============================================================

//* `new` is an operator.
//
//* `constructor` is:
//
//* 1. A special class method name.
//* 2. A property commonly present on prototype objects.
//
//* Example:
//
//* class Person {
//*     constructor(name) {
//*         this.name = name;
//*     }
//* }


//* ============================================================
//* 52. COMMON MISTAKE — PUTTING EVERYTHING ON `this`
//* ============================================================

//* This works:
//
//* function Person(name) {
//*     this.name = name;
//*     this.greet = function () {};
//* }

//* But every instance gets a separate greet function.

//* For shared behavior, prototype methods/classes are generally
//* better.


//* ============================================================
//* 53. COMMON MISTAKE — MODIFYING SHARED PROTOTYPE STATE
//* ============================================================

//* Be careful with mutable values placed on prototypes.

//* Example:
//
//* Person.prototype.friends = [];

//* Every Person instance may access the same array.
//
//* Usually initialize instance-specific mutable values inside
//* the constructor:
//
//* this.friends = [];


//* ============================================================
//* 54. CONSTRUCTOR EXECUTION FLOW
//* ============================================================

/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("Ravi", 21);
*/


//* Flow:
//
//* new Person("Ravi", 21)
//*          ↓
//* Create instance
//*          ↓
//* Connect instance to Person.prototype
//*          ↓
//* Execute constructor
//*          ↓
//* this.name = "Ravi"
//* this.age = 21
//*          ↓
//* Return instance
//*          ↓
//* person


//* ============================================================
//* 55. COMPLETE MENTAL MODEL
//* ============================================================

/*
                Person
                   │
                   │ new
                   ↓
          ┌─────────────────┐
          │  New Object     │
          ├─────────────────┤
          │ name: "Ravi"    │
          │ age: 21         │
          └─────────────────┘
                   │
                   │ [[Prototype]]
                   ↓
          Person.prototype
                   │
                   ├── greet()
                   ├── getAge()
                   └── constructor
*/


//* Instance-specific data:
//
//* this.name
//* this.age
//
//* Shared behavior:
//
//* Person.prototype.greet


//* ============================================================
//* 56. CONSTRUCTOR IN ONE SENTENCE
//* ============================================================

//* Constructor = a mechanism used to initialize a new object
//* with the required initial state and connect it to the
//* appropriate prototype-based behavior.


//* ============================================================
//* 57. QUICK REFERENCE
//* ============================================================

/*

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Prototype method
Person.prototype.greet = function () {
    return `Hello ${this.name}`;
};

// Create instance
const person = new Person("Ravi", 21);

// Check instance
console.log(person instanceof Person);


// Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello ${this.name}`;
    }
}

// Create instance
const student = new Student("Ravi", 21);

*/


//* ============================================================
//* 58. FINAL MEMORY MAP
//* ============================================================

/*

CONSTRUCTOR
│
├── Constructor Function
│   │
│   ├── function Person() {}
│   ├── called using new
│   ├── this → new instance
│   └── Person.prototype → shared methods
│
├── Class Constructor
│   │
│   ├── class Person {}
│   ├── constructor() {}
│   ├── called using new
│   ├── this → instance
│   └── class methods → prototype
│
├── new
│   │
│   ├── creates instance
│   ├── links prototype
│   ├── executes constructor
│   └── returns instance
│
└── Main Purpose
    │
    ├── initialize state
    ├── create consistent objects
    ├── validate input
    ├── normalize input
    └── establish object behavior


//* ============================================================
//* GOLDEN RULES
//* ============================================================

//* 1. Constructor initializes an object's initial state.

//* 2. Constructor functions are normally called with `new`.

//* 3. Inside a constructor called with `new`,
//*    `this` refers to the new instance.

//* 4. `new` does more than simply call a function.

//* 5. Constructor functions and classes ultimately use
//*    JavaScript's prototype system.

//* 6. Put instance-specific data on `this`.

//* 7. Put shared methods on the prototype
//*    (class methods do this automatically).

//* 8. `constructor()` inside a class is used to initialize
//*    the instance.

//* 9. In a derived class, call `super()` before using `this`.

//* 10. Constructor = initialization + instance setup.
//*     Prototype = shared behavior.
