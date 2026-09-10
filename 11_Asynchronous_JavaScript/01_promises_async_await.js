//* ============================================================
//* PROMISES, ASYNC/AWAIT AND EVENT LOOP
//* ============================================================

//* Promise = an object representing the eventual completion or failure
//* of an asynchronous operation.

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Finished"), ms);
  });
}

wait(500)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

//* async function always returns a Promise.
async function run() {
  try {
    const result = await wait(300);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();

//* Promise states: pending -> fulfilled OR rejected
//* then() handles fulfillment, catch() handles rejection,
//* finally() runs after settlement.

//* Sequential async work
async function sequential() {
  const first = await wait(100);
  const second = await wait(100);
  return `${first} + ${second}`;
}

//* Parallel independent work
async function parallel() {
  const [a, b] = await Promise.all([wait(100), wait(100)]);
  return [a, b];
}

sequential().then(console.log);
parallel().then(console.log);

//* Event-loop mental model:
//* synchronous code -> call stack -> async work is handled by host APIs ->
//* completed callbacks enter queues -> event loop schedules callbacks.

//* Golden Rule:
//* Use Promise.all when operations are independent and should run concurrently.
