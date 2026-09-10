# Strings — Master Teaching Guide

## 1. Definition
A JavaScript string is a primitive value representing a sequence of UTF-16 code units. Strings are immutable: string operations create new string values rather than changing the existing string.

## 2. Mental model
`"hello"` → characters/code units → methods read or produce a new string.

## 3. Core concepts
- string literals: `'x'`, `"x"`, `` `x` ``
- `length` counts UTF-16 code units, not necessarily user-perceived characters
- indexing with `str[i]`
- `at()` supports negative indexes
- immutability
- concatenation and template literals
- search: `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`
- extraction: `slice`, `substring`, `substr` legacy
- formatting: `trim`, `trimStart`, `trimEnd`, `padStart`, `padEnd`
- case conversion
- replacement: `replace`, `replaceAll`
- splitting/joining
- Unicode and code points
- regular expressions

## 4. Important rules
`slice(start, end)` excludes `end`. `substring()` treats negative values as 0 and swaps arguments when start > end. Strings cannot be mutated with index assignment.

## 5. Examples
```js
const name = "Ravi";
console.log(name.length);
console.log(name[0]);
console.log(name.at(-1));
console.log(name.slice(1, 3));
console.log("  hello  ".trim());
console.log("js-js".replaceAll("-", " "));
console.log("a,b,c".split(","));
```

## 6. Unicode warning
```js
console.log("😀".length); // 2 UTF-16 code units
console.log([...["😀"]].length); // 1 code point
```
For user-visible grapheme clusters, Unicode code points are still not always enough; advanced applications may use `Intl.Segmenter`.

## 7. Common mistakes
- expecting `str[0] = "X"` to work
- using `<= str.length` in loops
- confusing `slice()` with `splice()`
- assuming `length` equals visual character count
- forgetting `replace()` replaces only the first matching substring without a global regex

## 8. Practice ladder
L1: define string immutability. L2: predict outputs. L3: build a slug generator. L4: debug a trimming/search bug. L5: design a text formatter. L6: teach strings without notes.

## 9. Real projects
Search boxes, validation, URL construction, slug generation, form normalization, log parsing, UI labels, serialization.

## 10. Teach-back questions
Why are strings immutable? What does `slice(1, 4)` return? Why can an emoji make `length` surprising? Difference between `replace` and `replaceAll`? `split` vs `join`?

## 11. Final checklist
[ ] indexing [ ] immutability [ ] search [ ] extraction [ ] formatting [ ] replacement [ ] split/join [ ] template literals [ ] Unicode [ ] regex [ ] edge cases
