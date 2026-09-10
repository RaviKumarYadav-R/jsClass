//* ============================================================
//* DOM EVENTS, FORMS AND OBSERVERS
//* ============================================================

//* Event = a signal that something happened in the browser.

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log("Clicked", event.target);
  });
}

//* Event propagation has three conceptual phases:
//* capture -> target -> bubble

//* Event delegation: listen on a parent and inspect event.target.
const list = document.querySelector("ul");
if (list) {
  list.addEventListener("click", (event) => {
    const item = event.target.closest("li");
    if (!item || !list.contains(item)) return;
    console.log("Selected:", item.textContent);
  });
}

//* Forms
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    console.log(Object.fromEntries(data.entries()));
  });
}

//* IntersectionObserver watches visibility/intersection changes efficiently.
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) console.log("Visible", entry.target);
  }
});

const target = document.querySelector(".observe-me");
if (target) observer.observe(target);

//* Other important browser observers:
//* MutationObserver -> DOM changes
//* ResizeObserver -> element size changes

//* Golden Rule:
//* Prefer event delegation for large dynamic lists instead of attaching
//* one listener to every child.
