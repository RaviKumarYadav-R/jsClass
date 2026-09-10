//* ============================================================
//* Symbols, BigInt & Property Descriptors
//* ============================================================

//* Symbol creates a unique primitive value.
const id = Symbol("id");
const user = { name: "Ravi", [id]: 101 };
console.log(user[id]);

//* BigInt represents integers larger than Number's safe integer range.
const huge = 9007199254740993n;
console.log(huge);

//* Property descriptors describe configurable, enumerable and
//* writable/value behavior of ordinary object properties.
const account = {};
Object.defineProperty(account, "balance", {
  value: 1000,
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(account, "balance"));

//* Teaching note: descriptor flags are metadata controlling property
//* behavior; they are not the same thing as class private fields.