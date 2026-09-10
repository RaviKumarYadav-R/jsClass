function showArguments(...n) {
  console.log([...arguments]);
}

showArguments(3, 5, 8, 9, 6);
