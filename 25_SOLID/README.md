# SOLID Principles

## S — Single Responsibility Principle
A module/class should have one primary reason to change.

## O — Open/Closed Principle
Software entities should be open for extension and closed for unnecessary modification.

## L — Liskov Substitution Principle
A subtype should be usable wherever its base abstraction is expected without breaking the contract.

## I — Interface Segregation Principle
Clients should not be forced to depend on methods they do not need.

## D — Dependency Inversion Principle
High-level policy should depend on abstractions rather than concrete low-level details.

## JavaScript Application

JavaScript has no native `interface` keyword. Model abstractions with functions, classes, modules, contracts, and dependency injection.

### Dependency Injection Example

```js
class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  getUser(id) {
    return this.repository.findById(id);
  }
}
```

The service does not construct its repository. The dependency is supplied from outside, making testing and replacement easier.
