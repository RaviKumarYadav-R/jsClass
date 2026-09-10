# Arrays — Master Teaching Guide

## Definition
An Array is an ordered JavaScript object used to store a sequence of values. It is zero-indexed, dynamically sized, and can contain values of different types.

## Mental model
`index 0 → value | index 1 → value | index 2 → value ...`

## Fundamentals
Creation, indexing, `length`, assignment, nested arrays, sparse arrays, iteration, mutation, copying, references.

## Mutation vs non-mutation
Mutating methods include `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`. Non-mutating alternatives include `slice`, `concat`, `map`, `filter`, `toSorted`, `toReversed`, `toSpliced`.

## Transformation
- `map` transforms every element and returns a new array.
- `filter` keeps elements satisfying a condition.
- `reduce` accumulates into any result type.
- `forEach` performs side effects and ignores callback return values.

## Search/predicate
`find`, `findIndex`, `findLast`, `some`, `every`, `includes`, `indexOf`.

## Sorting
Default `sort()` compares values as strings. Numeric ascending order uses `(a, b) => a - b`.

## Copying
Array spread and `slice()` make shallow copies. Nested objects remain shared.

```js
const a = [{ score: 10 }];
const b = [...a];
b[0].score = 20;
console.log(a[0].score); // 20
```

## Common mistakes
- `<= arr.length`
- expecting `map()` to mutate the original array
- forgetting `return` in a block-bodied `map` callback
- using `sort()` for numbers without a comparator
- confusing shallow copy with deep clone
- using `splice` when `slice` was intended

## Execution model
For `map`, JavaScript visits relevant elements, calls the callback with `(value, index, array)`, stores each returned value, and returns a new array. `reduce` carries an accumulator from one callback invocation to the next.

## Practice ladder
L1 identify mutation methods. L2 predict method outputs. L3 implement filter/map/reduce tasks. L4 debug a mutation/reference bug. L5 design a data transformation pipeline. L6 teach array methods from memory.

## Real projects
Shopping carts, API response transformation, filtering dashboards, pagination, table sorting, validation, state updates, data aggregation.

## Teach-back
Explain `map` vs `forEach`; `slice` vs `splice`; `sort` mutation; shallow copy; why `reduce` is not limited to arrays.

## Checklist
[ ] indexing [ ] length [ ] mutation [ ] copying [ ] iteration [ ] map [ ] filter [ ] reduce [ ] search [ ] sort [ ] flattening [ ] shallow references [ ] edge cases
