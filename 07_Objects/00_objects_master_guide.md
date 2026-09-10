# Objects — Master Teaching Guide

## Definition
An object is a mutable JavaScript value that stores keyed properties. A property associates a key with a value; a method is a property whose value is callable.

## Mental model
`object → property key → value`

## Core topics
Object literals, dot/bracket access, computed keys, methods, nested objects, destructuring, spread, `Object.assign`, `Object.keys/values/entries`, optional chaining, nullish coalescing, property descriptors, prototype lookup, freezing/sealing.

## References and shallow copies
Objects are values with identity. Assigning an object variable copies the reference to the same object; spread creates a shallow copy.

```js
const user = { name: "Ravi", profile: { city: "Dhanbad" } };
const copy = { ...user };
copy.profile.city = "Delhi";
console.log(user.profile.city); // Delhi
```

## Property lookup
JavaScript first checks the object's own properties. If not found, lookup continues through its prototype chain.

`Object.hasOwn(obj, key)` checks own properties. `key in obj` checks own and inherited properties.

## Descriptors
Properties can have `value`, `writable`, `enumerable`, and `configurable` descriptors. Accessor properties use `get` and `set`.

## Freeze/seal
`Object.freeze()` prevents extensions and changes to existing own data properties, but it is shallow. `Object.seal()` prevents adding/removing properties while allowing writable properties to change.

## Common mistakes
- treating object assignment as a deep copy
- assuming `Object.freeze` recursively freezes nested objects
- using `in` when only own properties are wanted
- confusing missing property with a property explicitly containing `undefined`
- using `||` when `??` is required

## Optional chaining
`user.profile?.city` safely stops when the left side is `null` or `undefined`.

## Nullish coalescing
`value ?? fallback` uses the fallback only for `null` or `undefined`, unlike `||`, which also treats `0`, `false`, and `""` as falsy.

## Practice ladder
L1 define property/reference. L2 predict lookup. L3 build a user object API. L4 debug shallow-copy bugs. L5 design immutable update logic. L6 teach the object model.

## Real projects
API payloads, configuration, domain models, state objects, request options, caches, dictionaries, component props.

## Teach-back
Why are objects mutable? What does shallow mean? Difference between `Object.hasOwn` and `in`? Why does `??` differ from `||`? What happens when a property is missing?

## Checklist
[ ] access [ ] computed keys [ ] methods [ ] references [ ] shallow copy [ ] destructuring [ ] spread [ ] keys/values/entries [ ] optional chaining [ ] ?? [ ] descriptors [ ] freeze/seal [ ] prototypes
