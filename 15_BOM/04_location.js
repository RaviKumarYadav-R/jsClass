//* ============================================================
//* LOCATION OBJECT
//* ============================================================

//* `location` represents the current document URL and provides
//* navigation-related operations in a browser.

console.log(location.href);
console.log(location.origin);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);

//* URLSearchParams is useful for query parameters:
const params = new URLSearchParams("page=2&sort=name");
console.log(params.get("page"));
console.log(params.get("sort"));

//* Note: navigation APIs can cause a page navigation; demonstrate
//* them carefully during teaching rather than running destructive
//* examples automatically.