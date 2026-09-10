# Collections — Master Teaching Guide

## Definition
JavaScript collections provide specialized structures for storing and retrieving groups of values. The correct collection depends on whether you need ordering, uniqueness, key-value lookup, weak references, or iteration.

## Map
`Map` stores key-value pairs and supports keys of any type. It preserves insertion order and exposes `set`, `get`, `has`, `delete`, `clear`, `size`.

```js
const cache = new Map();
cache.set("user:1", { name: "Ravi" });
console.log(cache.get("user:1"));
```

## Set
`Set` stores unique values. It is useful for membership tests and deduplication.

```js
const unique = [...new Set([1, 1, 2, 3])];
console.log(unique); // [1, 2, 3]
```

## WeakMap / WeakSet
Weak collections hold object keys/values weakly in the garbage-collection sense. They are not enumerable and do not expose `size`. They are useful when metadata should not keep an object alive by itself.

## Iterables and iterators
An iterable provides a `Symbol.iterator` method. An iterator provides `next()` objects such as `{ value, done }`. `for...of`, spread, and destructuring consume iterables.

## Choosing a collection
- Array → ordered sequence/index access
- Object → simple record with string/symbol keys
- Map → dynamic key-value dictionary
- Set → unique membership
- WeakMap → object-associated metadata without strong retention
- WeakSet → weak object membership tracking

## Common mistakes
- using object when arbitrary keys are required
- assuming Set indexes values
- trying to enumerate WeakMap/WeakSet
- confusing iterable with iterator
- forgetting that `for...in` is for enumerable property keys, not iterable values

## Practice
L1 identify collection. L2 predict `Map`/`Set` outputs. L3 build a cache. L4 debug duplicate/membership logic. L5 design a metadata system. L6 explain iteration protocols.

## Real projects
Caches, deduplication, graph traversal, lookup tables, session metadata, visited-node tracking, memoization.

## Checklist
[ ] Map [ ] Set [ ] WeakMap [ ] WeakSet [ ] iterable [ ] iterator [ ] Symbol.iterator [ ] collection choice [ ] GC implications
