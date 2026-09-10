//* ============================================================
//* ADVANCED LANGUAGE FEATURES
//* ============================================================

//* Iterable = an object that can provide an iterator via Symbol.iterator.
const numbers = [10, 20, 30];
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());

//* Generator functions pause and resume with yield.
function* countUpTo(limit) {
  for (let i = 1; i <= limit; i++) {
    yield i;
  }
}

for (const value of countUpTo(3)) {
  console.log(value);
}

//* Symbol creates unique primitive values.
const id = Symbol("id");
const user = { [id]: 123 };
console.log(user[id]);

//* BigInt handles integers beyond Number's safe integer range.
const huge = 9007199254740993n;
console.log(huge);

//* Proxy intercepts operations on a target object.
const target = { name: "Ravi" };
const proxy = new Proxy(target, {
  get(object, property) {
    console.log(`Reading: ${String(property)}`);
    return object[property];
  },
});

console.log(proxy.name);

//* Reflect provides standardized object-operation methods.
console.log(Reflect.has(target, "name"));
console.log(Reflect.get(target, "name"));

//* Property descriptors control attributes such as writable/enumerable/configurable.
const object = {};
Object.defineProperty(object, "id", {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(object, "id"));

//* These are advanced tools. Learn ordinary objects, prototypes,
//* functions and collections first.
