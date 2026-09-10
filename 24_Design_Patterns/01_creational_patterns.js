//* ============================================================
//* CREATIONAL PATTERNS — FACTORY & BUILDER
//* ============================================================

//* Factory: centralizes creation when the exact concrete object can
//* vary according to input.

function createLogger(type) {
  if (type === "console") return { log: message => console.log(message) };
  if (type === "silent") return { log: () => {} };
  throw new Error("Unknown logger type");
}

const logger = createLogger("console");
logger.log("Hello");

//* Builder: useful when constructing a complex object through readable
//* incremental steps.

class RequestBuilder {
  constructor() {
    this.request = { headers: {}, method: "GET" };
  }

  method(method) {
    this.request.method = method;
    return this;
  }

  header(name, value) {
    this.request.headers[name] = value;
    return this;
  }

  build() {
    return { ...this.request, headers: { ...this.request.headers } };
  }
}

const request = new RequestBuilder()
  .method("POST")
  .header("Content-Type", "application/json")
  .build();

console.log(request);