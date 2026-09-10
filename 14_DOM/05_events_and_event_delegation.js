//* ============================================================
//* DOM EVENTS & EVENT DELEGATION
//* ============================================================

//* An event represents something that happened in the browser,
//* such as a click, input, submit or keyboard action.

// const button = document.querySelector("button");
// button.addEventListener("click", event => {
//   console.log(event.type);
// });

//* Event propagation has phases:
//* capture -> target -> bubble

//* Event delegation attaches one listener to a stable ancestor and
//* uses event.target/currentTarget to handle descendant events.

// const list = document.querySelector("#list");
// list.addEventListener("click", event => {
//   const item = event.target.closest("li");
//   if (!item || !list.contains(item)) return;
//   console.log(item.dataset.id);
// });

//* Delegation is useful for dynamic lists because one parent listener
//* can handle many current and future child elements.