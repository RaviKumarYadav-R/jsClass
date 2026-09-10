//* ============================================================
//* PROMISE PATTERNS
//* ============================================================

const success = Promise.resolve(10);
const failure = Promise.reject(new Error("Something failed"));

success.then(value => value * 2).then(console.log);
failure.catch(error => console.error(error.message));

//* Promise combinators
Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(console.log);
Promise.allSettled([Promise.resolve(1), Promise.reject("no")]).then(console.log);
Promise.race([Promise.resolve("fast")]).then(console.log);
Promise.any([Promise.reject("x"), Promise.resolve("winner")]).then(console.log);

//* Teaching questions:
//* - What happens when one Promise.all member rejects?
//* - When should allSettled be preferred?
//* - What does Promise.any reject with when every input rejects?
//* - Why does an async function always return a Promise?