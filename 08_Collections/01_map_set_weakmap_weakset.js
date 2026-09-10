//* ============================================================
//* MAP, SET, WEAKMAP, WEAKSET
//* ============================================================

//* Set stores unique values.
const uniqueNumbers = new Set([1, 2, 2, 3]);
console.log([...uniqueNumbers]);
uniqueNumbers.add(4);
console.log(uniqueNumbers.has(3));

//* Map stores key-value pairs and keys can be any value.
const scores = new Map();
scores.set("Ravi", 95);
scores.set("Aman", 88);
console.log(scores.get("Ravi"));
console.log(scores.has("Aman"));

for (const [name, score] of scores) {
  console.log(name, score);
}

//* WeakMap keys must be objects and entries are weakly held.
const metadata = new WeakMap();
const element = {};
metadata.set(element, { selected: true });
console.log(metadata.get(element));

//* WeakSet stores objects weakly and supports add/has/delete.
const visited = new WeakSet();
visited.add(element);
console.log(visited.has(element));

//* Use Map when you need a real key-value collection.
//* Use Set when uniqueness matters.
//* WeakMap/WeakSet are useful for object-associated metadata and
//* situations where you do not want the collection to keep objects alive.

//* Golden Rule:
//* Do not automatically use plain objects for every key-value problem.
