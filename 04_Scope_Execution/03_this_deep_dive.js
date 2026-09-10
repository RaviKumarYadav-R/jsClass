//* ============================================================
//* `this` — DEEP DIVE
//* ============================================================
//* `this` is determined by how a function is called (with important
//* special cases for arrows, constructors and explicit binding).

const user = {
  name: "Ravi",
  greet() {
    return `Hello ${this.name}`;
  },
};

console.log(user.greet()); // this -> user

function showThis() {
  return this;
}

console.log(showThis.call({ name: "Aman" })); // explicit binding

//* Arrow functions do not create their own `this`; they capture it
//* lexically from the surrounding scope.

const object = {
  value: 10,
  method() {
    const arrow = () => this.value;
    return arrow();
  },
};

console.log(object.method());

//* Teaching checklist:
//* 1. Method call: obj.method() -> obj
//* 2. Explicit call: fn.call(value) -> supplied value
//* 3. Constructor call: new Fn() -> new instance
//* 4. Arrow: lexical this
//* 5. Strict-mode / plain calls need careful explanation; do not
//*    memorize one universal rule without considering the mode.