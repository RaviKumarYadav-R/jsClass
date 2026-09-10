//* ============================================================
//* DEPENDENCY INJECTION
//* ============================================================

//* Dependency injection means supplying a component with the things
//* it needs instead of making the component construct them internally.

function createUserService(repository) {
  return {
    getUser(id) {
      return repository.findById(id);
    },
  };
}

const fakeRepository = {
  findById(id) {
    return { id, name: "Test User" };
  },
};

const service = createUserService(fakeRepository);
console.log(service.getUser(1));

//* Benefit: the service is easier to test and can work with different
//* repository implementations.

//* Avoid DI for every tiny function. Introduce it when dependency
//* boundaries improve testability, flexibility or separation of concerns.