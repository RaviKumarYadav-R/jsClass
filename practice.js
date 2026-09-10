function multiplicationGrid(row) {
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

// Example usage:
multiplicationGrid(5);
