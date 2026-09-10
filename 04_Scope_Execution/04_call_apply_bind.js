//* ============================================================
//* call / apply / bind
//* ============================================================

function introduce(city, role) {
  return `${this.name} works as ${role} in ${city}`;
}

const person = { name: "Ravi" };

console.log(introduce.call(person, "Dhanbad", "Developer"));
console.log(introduce.apply(person, ["Dhanbad", "Developer"]));

const boundIntroduce = introduce.bind(person, "Dhanbad");
console.log(boundIntroduce("Developer"));

//* call  -> invokes now, arguments separately
//* apply -> invokes now, arguments as an array-like collection
//* bind  -> returns a new function with binding preset

//* Practice: build a reusable logger that binds a context and a
//* prefix, then explain why arrow functions behave differently.