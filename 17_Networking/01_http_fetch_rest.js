//* ============================================================
//* HTTP, FETCH AND REST
//* ============================================================

//* HTTP is a request/response application-layer protocol.
//* Request: method + URL + headers + optional body
//* Response: status + headers + optional body

//* Common methods:
//* GET    -> retrieve
//* POST   -> create/process
//* PUT    -> replace
//* PATCH  -> partially update
//* DELETE -> remove

//* Common status families:
//* 2xx success | 3xx redirect | 4xx client error | 5xx server error

async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //* fetch rejects mainly for network-level failures; HTTP 404/500
  //* normally still produce a Response, so check ok/status yourself.
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const users = await response.json();
  console.log(users);
}

//* Uncomment to run in a browser or Node version with fetch support.
// loadUsers().catch(console.error);

//* REST is an architectural style commonly used to expose resources
//* through HTTP. JSON is a common representation, not a requirement.

//* AbortController can cancel an in-flight fetch.
const controller = new AbortController();
// fetch("/api/data", { signal: controller.signal });
// controller.abort();

//* Golden Rule:
//* Always handle network failure AND non-2xx HTTP responses separately.
