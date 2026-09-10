# Built-in Objects — Master Teaching Guide

## Purpose
Built-in objects are standard JavaScript objects, constructors, namespaces, and primitives exposed by the language specification. They solve recurring problems without requiring every application to implement them from scratch.

## Number and Math
JavaScript `number` uses IEEE 754 binary64 floating-point representation. This explains values such as `0.1 + 0.2 !== 0.3`.

Know: `Number.isNaN`, `Number.isFinite`, `Number.isInteger`, `Number.MAX_SAFE_INTEGER`, `Number.MIN_VALUE`, `parseInt`, `parseFloat`, `Math.floor`, `Math.ceil`, `Math.round`, `Math.trunc`, `Math.random`.

Important: `Number.MIN_VALUE` is the smallest positive nonzero number, not the most negative number. `toFixed()` returns a string.

## JSON
`JSON.stringify(value)` converts a JavaScript value into a JSON string. `JSON.parse(text)` converts valid JSON text into a JavaScript value. JSON is a data-interchange format, not the same thing as a JavaScript object.

## Date
Dates represent a point in time internally as milliseconds from the Unix epoch. Numeric month arguments to the multi-argument constructor are zero-based.

`getDate()` = day of month. `getDay()` = day of week. Date objects are mutable.

## RegExp
Regular expressions describe text-matching patterns. Learn literals, flags, character classes, quantifiers, groups, anchors, `test`, `exec`, and regex-aware string methods.

## Intl
`Intl` provides locale-sensitive formatting for numbers, dates, relative time, lists, and more.

## Symbol
Symbols are unique primitive values commonly used for non-colliding property keys and language protocols such as `Symbol.iterator`.

## BigInt
BigInt represents integers larger than the safe integer range of `number`. Do not mix BigInt and Number directly in arithmetic without explicit conversion.

## Boolean wrapper warning
`new Boolean(false)` creates an object, and objects are truthy. Prefer primitive booleans.

## Common mistakes
- assuming floating point is exact decimal arithmetic
- confusing `isNaN` with `Number.isNaN`
- treating `toFixed()` as a number
- assuming Date months start at 1 in numeric constructors
- using `JSON.stringify` as a universal deep clone
- mixing Number and BigInt arithmetic

## Practice ladder
L1 define each built-in. L2 predict outputs. L3 build formatters. L4 debug date/number bugs. L5 design serialization and validation utilities. L6 teach the trade-offs.

## Real projects
Currency formatting, dates, API payloads, validation, IDs, search, localization, analytics, serialization.

## Checklist
[ ] Number [ ] Math [ ] Date [ ] JSON [ ] RegExp [ ] Intl [ ] Symbol [ ] BigInt [ ] floating point [ ] edge cases
