//* ============================================================
//* HTTP DEEP DIVE
//* ============================================================

//* Request structure:
//* method + URL + headers + optional body
//*
//* Response structure:
//* status + headers + body

//* Common methods:
//* GET    -> retrieve
//* POST   -> submit/create
//* PUT    -> replace/update
//* PATCH  -> partial update
//* DELETE -> remove

//* Status families:
//* 2xx success
//* 3xx redirection
//* 4xx client-side request problem
//* 5xx server-side failure

async function getUsers() {
  const response = await fetch("https://example.com/api/users");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

//* Teach HTTP independently from Fetch: Fetch is a JavaScript API for
//* making requests; HTTP is the network protocol.