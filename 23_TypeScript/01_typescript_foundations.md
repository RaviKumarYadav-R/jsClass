# TypeScript Foundations

TypeScript adds a static type system and tooling layer to JavaScript.

## First topics

```ts
let username: string = "Ravi";
let age: number = 21;
let active: boolean = true;
```

## Unions

```ts
let id: string | number;
```

## Type narrowing

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
}
```

## Interfaces

```ts
interface User {
  id: number;
  name: string;
}
```

## Teaching rule
Always explain what remains at runtime. TypeScript types are primarily used by the compiler/type checker and are not ordinary runtime values.