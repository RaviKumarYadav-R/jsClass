# JavaScript: `var` vs `let` vs `const`

JavaScript provides three keywords for declaring variables:

- `var` → Function-scoped
- `let` → Block-scoped and reassignable
- `const` → Block-scoped and not reassignable

In modern JavaScript, prefer **`const` by default**, use **`let` when reassignment is required**, and generally avoid `var`.

---

## 1. `var`

`var` is the older way of declaring variables in JavaScript.

### Function Scope

Variables declared with `var` are **function-scoped**, not block-scoped.

```js
function test() {
  if (true) {
    var x = 10;
  }

  console.log(x); // 10
}

test();
```

Even though `x` was declared inside the `if` block, it is accessible throughout the function.

### Reassignment

A `var` variable can be reassigned.

```js
var age = 20;

age = 21;

console.log(age); // 21
```

### Redeclaration

A `var` variable can be redeclared in the same scope.

```js
var name = "Ravi";
var name = "Krishna";

console.log(name); // Krishna
```

This behavior can lead to unexpected bugs in larger applications.

---

## 2. `let`

`let` was introduced in **ES6 (ECMAScript 2015)**.

Unlike `var`, `let` is **block-scoped**.

### Block Scope

```js
if (true) {
  let score = 100;

  console.log(score); // 100
}

console.log(score); // ReferenceError
```

The `score` variable only exists inside the `if` block.

### Reassignment

A `let` variable can be reassigned.

```js
let score = 100;

score = 200;

console.log(score); // 200
```

### Redeclaration

A `let` variable cannot be redeclared in the same scope.

```js
let age = 20;

let age = 21;
// SyntaxError
```

However, it can exist in a different block.

```js
let age = 20;

{
  let age = 30;

  console.log(age); // 30
}

console.log(age); // 20
```

---

## 3. `const`

`const` was also introduced in **ES6**.

Like `let`, `const` is **block-scoped**.

The main difference is that a `const` variable **cannot be reassigned**.

```js
const PI = 3.14;

PI = 3.14159;
// TypeError: Assignment to constant variable.
```

### `const` Must Be Initialized

This is invalid:

```js
const age;
```

A `const` variable must be initialized when declared.

```js
const age = 21;
```

### `const` Cannot Be Reassigned

```js
const name = "Ravi";

name = "Yadav";
// TypeError
```

---

## 4. Important: `const` Does NOT Mean Immutable

This is one of the most important concepts to understand.

A `const` variable cannot be **reassigned**, but objects and arrays referenced by that variable can still be modified.

### Object Example

```js
const user = {
  name: "Ravi",
};

user.name = "Krishna";

console.log(user.name);
// Krishna
```

This works because we are modifying the object, not reassigning `user`.

### Array Example

```js
const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);
// [1, 2, 3, 4]
```

But reassigning the variable is not allowed:

```js
const numbers = [1, 2, 3];

numbers = [4, 5, 6];
// TypeError
```

### Remember

> `const` means the variable binding cannot be reassigned. It does not make the referenced object or array immutable.

---

# 5. Scope Comparison

| Feature             | `var` | `let` | `const` |
| ------------------- | :---: | :---: | :-----: |
| Function scoped     |  ✅   |  ❌   |   ❌    |
| Block scoped        |  ❌   |  ✅   |   ✅    |
| Can be reassigned   |  ✅   |  ✅   |   ❌    |
| Can be redeclared   |  ✅   |  ❌   |   ❌    |
| Must be initialized |  ❌   |  ❌   |   ✅    |
| Hoisted             |  ✅   |  ✅   |   ✅    |
| Temporal Dead Zone  |  ❌   |  ✅   |   ✅    |

---

# 6. Hoisting

JavaScript processes declarations before executing code.

For example:

```js
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

Conceptually, it behaves somewhat like:

```js
var x;

console.log(x);

x = 10;
```

The `var` declaration is hoisted and initialized with `undefined`.

---

## `let` and `const` Are Also Hoisted

A common misconception is:

> ❌ "`let` and `const` are not hoisted."

They **are hoisted**, but they cannot be accessed before their declaration because of the **Temporal Dead Zone (TDZ)**.

```js
console.log(x);

let x = 10;
```

Result:

```text
ReferenceError
```

The same applies to `const`:

```js
console.log(x);

const x = 10;
```

Result:

```text
ReferenceError
```

---

# 7. Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period between entering a scope and reaching the declaration of a `let` or `const` variable.

```js
{
  // TDZ starts

  console.log(x); // ReferenceError

  let x = 10;

  // TDZ ends
}
```

Think of it like this:

```text
Scope begins
     ↓
    TDZ
     ↓
let / const declaration
     ↓
Variable can be accessed
```

---

# 8. Classic Loop Example

The difference between `var` and `let` becomes very clear in loops.

### Using `var`

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // 3
```

`i` is accessible outside the loop because `var` is function-scoped.

### Using `let`

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // ReferenceError
```

`i` only exists inside the loop block.

---

# 9. When Should You Use Each?

A simple modern JavaScript rule:

```text
             Need a variable?
                    ↓
             Can it change?
              /          \
            NO            YES
            ↓              ↓
          const           let
```

### Use `const` by default

```js
const username = "Ravi";
const age = 21;
const numbers = [1, 2, 3];
```

### Use `let` when reassignment is required

```js
let score = 0;

score += 10;
score += 20;
```

### Avoid `var` in modern JavaScript

```js
var name = "Ravi";
```

You should still **understand `var`**, because you will encounter it in older JavaScript code, but generally prefer `let` and `const` when writing new code.

---

# 10. Quick Comparison

```js
// var
var name = "Ravi";
name = "Krishna";
var name = "Raj";

// let
let age = 20;
age = 21;

// const
const country = "India";
// country = "USA"; // TypeError
```

---

# 🧠 Easy Memory Trick

Remember these three rules:

```text
var   → Function Scope
let   → Block Scope + Can Change
const → Block Scope + Cannot Reassign
```

### Modern JavaScript Rule

```text
        const
          ↓
  Can the value be reassigned?
       /          \
     NO            YES
     ↓              ↓
   const           let
```

And remember:

> **`const` does not mean immutable.**

---

## Summary

| Keyword | Scope    | Reassign | Redeclare | Initialization |
| ------- | -------- | -------- | --------- | -------------- |
| `var`   | Function | ✅       | ✅        | Optional       |
| `let`   | Block    | ✅       | ❌        | Optional       |
| `const` | Block    | ❌       | ❌        | Required       |

### Recommended Practice

```js
const userName = "Ravi"; // Use const by default

let score = 0; // Use let when value changes

// var → Understand it, but generally avoid using it
```

---

## Key Takeaways

1. `var` is **function-scoped**.
2. `let` and `const` are **block-scoped**.
3. `var` can be **reassigned and redeclared**.
4. `let` can be **reassigned but not redeclared** in the same scope.
5. `const` cannot be **reassigned or redeclared** in the same scope.
6. `const` variables **must be initialized**.
7. `var`, `let`, and `const` declarations are hoisted, but `let` and `const` are affected by the **Temporal Dead Zone**.
8. `const` does **not** make objects or arrays immutable.
9. In modern JavaScript, use **`const` by default**.
10. Use **`let` when reassignment is necessary**.
11. Generally avoid **`var`** in new code.
