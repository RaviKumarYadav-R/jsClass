//* ============================================================
//* EVENT LOOP & ASYNCHRONOUS JAVASCRIPT
//* ============================================================

//* Mental model:
//* JavaScript executes synchronous code on the call stack.
//* Host APIs can perform/schedule asynchronous work.
//* Promise reactions use the microtask queue.
//* Timers/tasks are processed through the host's task mechanism.

console.log("1");

setTimeout(() => console.log("4 - timer task"), 0);

Promise.resolve().then(() => console.log("3 - promise reaction"));

console.log("2");

//* Typical browser/Node teaching output:
//* 1
//* 2
//* 3 - promise reaction
//* 4 - timer task

//* Important: exact scheduling details are host-dependent. The key
//* lesson is that synchronous work completes before queued callbacks,
//* and promise reactions are processed with microtask semantics.