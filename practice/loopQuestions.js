function countNumbers(numbers) {
  const counts = {
    positive: 0,
    negative: 0,
    zero: 0,
  };
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      counts.positive++;
    } else if (numbers[i] < 0) {
      counts.negative++;
    } else {
      counts.zero++;
    }
  }

  return counts;
}

// console.log(countNumbers([10, -5, 0, 8, -2, 0]));

//==== Q2 ====

function countEvenOdd(numbers) {
  const count = {
    even: 0,
    odd: 0,
  };

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count.even++;
    } else {
      count.odd++;
    }
  }
  return count;
}

// console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));

//==== Q3 ====

function sumPositive(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// console.log(sumPositive([-1, 2, 3, -4, 5]));

//==== Q4 ====

function sumEven(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// console.log(sumEven([1, 2, 3, 4, 5, 6]));

//==== Q5 ====

function countGreater(numbers, x) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > x) {
      count++;
    }
  }
  return count;
}

// console.log(countGreater([1, 2, 3, 4, 5], 3));

//==== Q6 ====

function findLargest(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

// console.log(findLargest([1, 2, 3, 4, 5]));

//==== Q7 ====

function findSmallest(numbers) {
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

// console.log(findSmallest([1, 2, 3, 4, 5]));

//==== Q8 ====

function largestEven(numbers) {
  let largestEven = null;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      if (largestEven === null || numbers[i] > largestEven) {
        largestEven = numbers[i];
      }
    }
  }
  return largestEven;
}

// console.log(largestEven([1, 2, 3, 4, 5, 6]));

//==== Q9 ====

function countMultiples(numbers, divisor) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      count++;
    }
  }
  return count;
}

// console.log(countMultiples([1, 2, 3, 4, 5, 6], 2));

//==== Q10 ====

function classifyNumbers(numbers) {
  const classification = {
    positiveEven: [],
    negativeEven: [],
    positiveOdd: [],
    negativeOdd: [],
    zero: [],
  };
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      if (numbers[i] % 2 === 0) {
        classification.positiveEven.push(numbers[i]);
      } else {
        classification.positiveOdd.push(numbers[i]);
      }
    } else if (numbers[i] < 0) {
      if (numbers[i] % 2 === 0) {
        classification.negativeEven.push(numbers[i]);
      } else {
        classification.negativeOdd.push(numbers[i]);
      }
    } else {
      classification.zero.push(numbers[i]);
    }
  }
  return classification;
}

// console.log(classifyNumbers([1, -2, 0, 3, -4, 0]));
