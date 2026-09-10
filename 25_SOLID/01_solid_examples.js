//* ============================================================
//* SOLID — PRACTICAL JAVASCRIPT EXAMPLES
//* ============================================================

//* S — Single Responsibility: one module/class should have one
//* coherent reason to change.

class UserValidator {
  validate(user) {
    return Boolean(user.name);
  }
}

//* O — Open/Closed: extend behavior without repeatedly editing a
//* stable core abstraction.

function calculateTotal(prices, discountStrategy) {
  return discountStrategy(prices);
}

//* L — Liskov Substitution: a subtype should honor the contract users
//* of the base abstraction rely upon.

//* I — Interface Segregation: prefer small focused contracts over one
//* giant API. JavaScript often expresses this through duck typing.

//* D — Dependency Inversion: high-level logic should depend on an
//* abstraction/contract rather than hard-coding a concrete dependency.

function createOrderService(paymentGateway) {
  return {
    checkout(amount) {
      return paymentGateway.pay(amount);
    },
  };
}

//* Teaching method: first show a tightly coupled/bad version, then
//* refactor it and discuss the trade-off. SOLID is guidance, not a law.