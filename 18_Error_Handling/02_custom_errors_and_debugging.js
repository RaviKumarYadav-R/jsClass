//* ============================================================
//* CUSTOM ERRORS & DEBUGGING
//* ============================================================

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateUsername(username) {
  if (typeof username !== "string" || username.length < 3) {
    throw new ValidationError("Username must contain at least 3 characters", "username");
  }
  return true;
}

try {
  validateUsername("ab");
} catch (error) {
  console.error(error.name, error.message, error.field);
}

//* Debugging workflow:
//* reproduce -> isolate -> inspect values -> inspect stack -> fix root cause -> test again.
//* Prefer precise errors over silently returning null for unexpected failures.