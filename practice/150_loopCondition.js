/*
=========================================================
 JavaScript Logic Building Challenge
 150 Questions
=========================================================

PART 1  → 50 Conditional Questions
PART 2  → 50 Loop Questions
PART 3  → 50 Combined Questions

Instructions:
1. Solve one function at a time.
2. Do not use advanced methods initially.
3. Use console.log() to test your answers.
4. After solving, create test cases.
=========================================================
*/

// =======================================================
// PART 1 — CONDITIONALS
// Questions 1–50
// =======================================================

// Q1. Check whether a number is positive
function q01PositiveNumber(num) {
  if (num > 0) {
    return true;
  }
  return false;
}

// Q2. Check whether a number is negative
function q02NegativeNumber(num) {
  if (num < 0) {
    return true;
  }
  return false;
}

// Q3. Check whether a number is zero
function q03ZeroCheck(num) {
  if (num === 0) {
    return true;
  }
  return false;
}

// Q4. Check whether a number is even
function q04EvenNumber(num) {
  // TODO
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// Q5. Check whether a number is odd
function q05OddNumber(num) {
  // TODO
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

// Q6. Check whether a person is an adult
function q06AdultCheck(age) {
  // TODO
  if (age >= 18) {
    return true;
  }
  return false;
}

// Q7. Check voting eligibility
function q07VotingEligibility(age) {
  // TODO
  if (age >= 18) {
    return true;
  }
  return false;
}

// Q8. Check pass or fail
function q08PassOrFail(marks) {
  // TODO
  if (marks >= 50) {
    return "Pass";
  }
  return "Fail";
}

// Q9. Check whether number is greater than 100
function q09GreaterThan100(num) {
  // TODO
  if (num > 100) {
    return true;
  }
  return false;
}

// Q10. Check whether number is divisible by 5
function q10DivisibleBy5(num) {
  // TODO
  if (num % 5 === 0) {
    return true;
  }
  return false;
}

// Q11. Print Even or Odd
function q11EvenOrOdd(num) {
  // TODO
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// Q12. Print Positive or Negative
function q12PositiveOrNegative(num) {
  // TODO
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// Q13. Pass or Fail
function q13PassOrFail(marks) {
  // TODO
  if (marks >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

// Q14. Eligible or Not Eligible
function q14Eligibility(age) {
  // TODO
  if (age >= 18) {
    console.log("Eligible");
  } else {
    console.log("Not Eligible");
  }
}

// Q15. Find greater of two numbers
function q15GreaterNumber(a, b) {
  // TODO
  if (a > b) {
    return a;
  }
  return b;
}

// Q16. Find smaller of two numbers
function q16SmallerNumber(a, b) {
  // TODO
  if (a < b) {
    return a;
  }
  return b;
}

// Q17. Check divisibility by 3
function q17DivisibleBy3(num) {
  // TODO
  if (num % 3 === 0) {
    return true;
  }
  return false;
}

// Q18. Check divisibility by 2
function q18DivisibleBy2(num) {
  // TODO
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// Q19. Temperature check
function q19TemperatureCheck(temp) {
  // TODO
  if (temp > 30) {
    return "Hot";
  } else if (temp < 10) {
    return "Cold";
  } else {
    return "Moderate";
  }
}

// Q20. Password check
function q20PasswordCheck(password) {
  // TODO
  if (password.length >= 8) {
    return true;
  }
  return false;
}

// Q21. Grade calculator
function q21GradeCalculator(marks) {
  // 90–100 → A
  // 80–89  → B
  // 70–79  → C
  // 60–69  → D
  // Below 60 → F
  // TODO
  if (marks >= 90 && marks <= 100) {
    return "A";
  } else if (marks >= 80 && marks < 90) {
    return "B";
  } else if (marks >= 70 && marks < 80) {
    return "C";
  } else if (marks >= 60 && marks < 70) {
    return "D";
  } else {
    return "F";
  }
}

// Q22. Age category
function q22AgeCategory(age) {
  // TODO
  if (age >= 0 && age <= 12) {
    return "Child";
  } else if (age >= 13 && age <= 19) {
    return "Teenager";
  } else if (age >= 20 && age <= 59) {
    return "Adult";
  } else if (age >= 60) {
    return "Senior";
  }
}

// Q23. Largest of three numbers
function q23LargestOfThree(a, b, c) {
  // TODO
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// Q24. Smallest of three numbers
function q24SmallestOfThree(a, b, c) {
  // TODO
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}

// Q25. Temperature category
function q25TemperatureCategory(temp) {
  // TODO
  if (temp < 0) {
    return "Freezing";
  } else if (temp >= 0 && temp < 10) {
    return "Cold";
  } else if (temp >= 10 && temp < 25) {
    return "Mild";
  } else if (temp >= 25 && temp < 35) {
    return "Warm";
  } else {
    return "Hot";
  }
}

// Q26. BMI category
function q26BMICategory(bmi) {
  // TODO
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Q27. Electricity bill
function q27ElectricityBill(units) {
  // TODO
  if (units <= 100) {
    return units * 1.5;
  } else if (units <= 200) {
    return 100 * 1.5 + (units - 100) * 2;
  } else {
    return 100 * 1.5 + 100 * 2 + (units - 200) * 3;
  }
}

// Q28. Movie ticket price
function q28MovieTicketPrice(age) {
  // TODO
  if (age < 12) {
    return 5;
  } else if (age >= 12 && age <= 65) {
    return 10;
  } else {
    return 7;
  }
}

// Q29. Speed checker
function q29SpeedChecker(speed) {
  // TODO
  if (speed > 60) {
    return "Over speed";
  } else {
    return "Within speed limit";
  }
}

// Q30. Exam result
function q30ExamResult(mark1, mark2, mark3) {
  // TODO
  const average = (mark1 + mark2 + mark3) / 3;
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Q31. Voting + citizenship
function q31VotingCheck(age, citizenship) {
  // TODO
  if (age >= 18 && citizenship === "Indian") {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

// Q32. Login check
function q32Login(username, password) {
  // TODO
  if (username === "admin" && password === "password") {
    return "Login successful";
  } else {
    return "Invalid credentials";
  }
}

// Q33. Admin access
function q33AdminCheck(role, isActive) {
  // TODO
  if (role === "admin" && isActive) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}

// Q34. Scholarship eligibility
function q34Scholarship(marks, attendance) {
  // TODO
  if (marks >= 85 && attendance >= 90) {
    return "Eligible for scholarship";
  } else {
    return "Not eligible for scholarship";
  }
}

// Q35. Driving eligibility
function q35DrivingEligibility(age, hasLicense) {
  // TODO
  if (age >= 18 && hasLicense) {
    return "Eligible to drive";
  } else {
    return "Not eligible to drive";
  }
}

// Q36. Discount eligibility
function q36Discount(isMember, purchaseAmount) {
  // TODO
  if (isMember) {
    return purchaseAmount * 0.2; // 20% discount
  } else {
    return 0;
  }
}

// Q37. Free delivery
function q37FreeDelivery(isPrime, orderAmount) {
  // TODO
  if (isPrime || orderAmount >= 50) {
    return "Free delivery";
  } else {
    return "Standard delivery";
  }
}

// Q38. Login security
function q38SecureLogin(usernameCorrect, passwordCorrect, accountNotBlocked) {
  // TODO
  if (usernameCorrect && passwordCorrect && accountNotBlocked) {
    return "Login successful";
  } else {
    return "Login failed";
  }
}

// Q39. Exam eligibility
function q39ExamEligibility(attendance, feesPaid) {
  // TODO
  if (attendance >= 75 && feesPaid) {
    return "Eligible for exam";
  } else {
    return "Not eligible for exam";
  }
}

// Q40. Job eligibility
function q40JobEligibility(age, experience, hasDegree) {
  // TODO
  if (age >= 21 && experience >= 2 && hasDegree) {
    return "Eligible for job";
  } else {
    return "Not eligible for job";
  }
}

// Q41. Day name using switch
function q41DayName(day) {
  // 1 → Monday
  // 2 → Tuesday
  // ...
  // 7 → Sunday
  // TODO
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

// Q42. Calculator using switch
function q42Calculator(a, b, operator) {
  // + - * / %
  // TODO
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      return "Invalid operator";
  }
}

// Q43. Traffic signal
function q43TrafficSignal(signal) {
  // red → Stop
  // yellow → Wait
  // green → Go
  // TODO
  switch (signal.toLowerCase()) {
    case "red":
      return "Stop";
    case "yellow":
      return "Wait";
    case "green":
      return "Go";
    default:
      return "Invalid signal";
  }
}

// Q44. Month name
function q44MonthName(month) {
  // TODO
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month";
  }
}

// Q45. User role
function q45UserRole(role) {
  // admin  → Full Access
  // editor → Edit Access
  // user   → Read Access
  // guest  → Limited Access
  // TODO
  switch (role.toLowerCase()) {
    case "admin":
      return "Full Access";
    case "editor":
      return "Edit Access";
    case "user":
      return "Read Access";
    case "guest":
      return "Limited Access";
    default:
      return "Invalid role";
  }
}

// Q46. Even/Odd using ternary
function q46TernaryEvenOdd(num) {
  // TODO
  return num % 2 === 0 ? "Even" : "Odd";
}

// Q47. Adult using ternary
function q47TernaryAdult(age) {
  // TODO
  return age >= 18 ? "Adult" : "Not Adult";
}

// Q48. Maximum using ternary
function q48TernaryMaximum(a, b) {
  // TODO
  return a > b ? a : b;
}

// Q49. Login using ternary
function q49TernaryLogin(isLoggedIn) {
  // TODO
  return isLoggedIn ? "Welcome back!" : "Please log in.";
}

// Q50. Stock using ternary
function q50TernaryStock(quantity) {
  // TODO
  return quantity > 0 ? "In Stock" : "Out of Stock";
}

// =======================================================
// PART 2 — LOOPS
// Questions 51–100
// =======================================================

// Q51. Print 1–10
function q51Print1To10() {
  // TODO
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Q52. Print 10–1
function q52Print10To1() {
  // TODO
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// Q53. Print 1–100
function q53Print1To100() {
  // TODO
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// Q54. Print even numbers 1–50
function q54EvenNumbers() {
  // TODO
  for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }
}

// Q55. Print odd numbers 1–50
function q55OddNumbers() {
  // TODO
  for (let i = 1; i <= 50; i += 2) {
    console.log(i);
  }
}

// Q56. Print multiples of 5
function q56MultiplesOf5() {
  // TODO
  for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }
}

// Q57. Multiplication table of 5
function q57TableOf5() {
  // TODO
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}

// Q58. Multiplication table
function q58MultiplicationTable(num) {
  // TODO
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

// Q59. Squares 1–10
function q59Squares() {
  // TODO
  for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
}

// Q60. Cubes 1–10
function q60Cubes() {
  // TODO
  for (let i = 1; i <= 10; i++) {
    console.log(i * i * i);
  }
}

// Q61. Sum 1–10
function q61Sum1To10() {
  // TODO
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
}

// Q62. Sum 1–100
function q62Sum1To100() {
  // TODO
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

// Q63. Sum of even numbers
function q63SumEvenNumbers() {
  // TODO
  let sum = 0;
  for (let i = 2; i <= 50; i += 2) {
    sum += i;
  }
  return sum;
}

// Q64. Sum of odd numbers
function q64SumOddNumbers() {
  // TODO
  let sum = 0;
  for (let i = 1; i <= 50; i += 2) {
    sum += i;
  }
  return sum;
}

// Q65. Product 1–5
function q65Product1To5() {
  // TODO
  let product = 1;
  for (let i = 1; i <= 5; i++) {
    product *= i;
  }
  return product;
}

// Q66. Factorial
function q66Factorial(num) {
  // TODO
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// Q67. Count numbers 1–100
function q67CountNumbers() {
  // TODO
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    count++;
  }
  return count;
}

// Q68. Count multiples of 3
function q68CountMultiplesOf3() {
  // TODO
  let count = 0;
  for (let i = 3; i <= 100; i += 3) {
    count++;
  }
  return count;
}

// Q69. Sum multiples of 5
function q69SumMultiplesOf5() {
  // TODO
  let sum = 0;
  for (let i = 5; i <= 100; i += 5) {
    sum += i;
  }
  return sum;
}

// Q70. Average 1–10
function q70Average1To10() {
  // TODO
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum / 10;
}

// Q71. Print 1–10 using while
function q71While1To10() {
  // TODO
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

// Q72. Print 10–1 using while
function q72While10To1() {
  // TODO
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

// Q73. Even numbers using while
function q73WhileEvenNumbers() {
  // TODO
  let i = 2;
  while (i <= 50) {
    console.log(i);
    i += 2;
  }
}

// Q74. Odd numbers using while
function q74WhileOddNumbers() {
  // TODO
  let i = 1;
  while (i <= 50) {
    console.log(i);
    i += 2;
  }
}

// Q75. Table using while
function q75WhileTable(num) {
  // TODO
  let i = 1;
  while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
  }
}

// Q76. Sum using while
function q76WhileSum(num) {
  // TODO
  let sum = 0;
  let i = 1;
  while (i <= num) {
    sum += i;
    i++;
  }
  return sum;
}

// Q77. Factorial using while
function q77WhileFactorial(num) {
  // TODO
  let factorial = 1;
  let i = 1;
  while (i <= num) {
    factorial *= i;
    i++;
  }
  return factorial;
}

// Q78. Count digits
function q78CountDigits(num) {
  // TODO
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

// Q79. Reverse number
function q79ReverseNumber(num) {
  // TODO
  let reversed = 0;
  while (num !== 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

// Q80. Sum of digits
function q80SumOfDigits(num) {
  // TODO
  let sum = 0;
  while (num !== 0) {
    const digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Q81. Count digits
function q81CountDigits(num) {
  // TODO
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

// Q82. Reverse any number
function q82ReverseNumber(num) {
  // TODO
  let reversed = 0;
  while (num !== 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

// Q83. Palindrome number
function q83PalindromeNumber(num) {
  // TODO
  let original = num;
  let reversed = 0;
  while (num !== 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return original === reversed;
}

// Q84. Sum of digits
function q84SumDigits(num) {
  // TODO
  let sum = 0;
  while (num !== 0) {
    const digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Q85. Product of digits
function q85ProductDigits(num) {
  // TODO
  let product = 1;
  while (num !== 0) {
    const digit = num % 10;
    product *= digit;
    num = Math.floor(num / 10);
  }
  return product;
}

// Q86. First digit
function q86FirstDigit(num) {
  // TODO
  while (num >= 10) {
    num = Math.floor(num / 10);
  }
  return num;
}

// Q87. Last digit
function q87LastDigit(num) {
  // TODO
  return num % 10;
}

// Q88. Count zeros
function q88CountZeros(num) {
  // TODO
  let count = 0;
  while (num !== 0) {
    if (num % 10 === 0) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  return count;
}

// Q89. Largest digit
function q89LargestDigit(num) {
  // TODO
  let largest = 0;
  while (num !== 0) {
    const digit = num % 10;
    if (digit > largest) {
      largest = digit;
    }
    num = Math.floor(num / 10);
  }
  return largest;
}

// Q90. Smallest digit
function q90SmallestDigit(num) {
  // TODO
  let smallest = 9;
  while (num !== 0) {
    const digit = num % 10;
    if (digit < smallest) {
      smallest = digit;
    }
    num = Math.floor(num / 10);
  }
  return smallest;
}

// Q91. Star pattern
function q91StarPattern(rows) {
  // *
  // **
  // ***
  // ****
  // *****
  // TODO
  for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

// Q92. Reverse star pattern
function q92ReverseStarPattern(rows) {
  // TODO
  for (let i = rows; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

// Q93. Number pattern
function q93NumberPattern(rows) {
  // 1
  // 12
  // 123
  // 1234
  // TODO
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    console.log(str);
  }
}

// Q94. Repeated number pattern
function q94RepeatedNumberPattern(rows) {
  // 1
  // 22
  // 333
  // 4444
  // TODO
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    console.log(str);
  }
}

// Q95. Reverse number pattern
function q95ReverseNumberPattern(rows) {
  // TODO
  for (let i = rows; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    console.log(str);
  }
}

// Q96. Square star pattern
function q96SquarePattern(rows) {
  // TODO
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= rows; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// Q97. Number square
function q97NumberSquare(rows) {
  // TODO
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= rows; j++) {
      pattern += i;
    }
    console.log(pattern);
  }
}

// Q98. Multiplication grid
function q98MultiplicationGrid(rows) {
  // TODO
}

// Q99. Coordinate grid
function q99CoordinateGrid(rows, columns) {
  // TODO
}

// Q100. Pyramid
function q100Pyramid(rows) {
  // TODO
}

// =======================================================
// PART 3 — COMBINED
// LOOPS + CONDITIONS
// Questions 101–150
// =======================================================

// Q101. Print even numbers
function q101PrintEvenNumbers(numbers) {
  // TODO
}

// Q102. Print odd numbers
function q102PrintOddNumbers(numbers) {
  // TODO
}

// Q103. Multiples of 3
function q103MultiplesOf3(numbers) {
  // TODO
}

// Q104. Multiples of 3 and 5
function q104MultiplesOf3And5(numbers) {
  // TODO
}

// Q105. Numbers not divisible by 5
function q105NotDivisibleBy5(numbers) {
  // TODO
}

// Q106. Print positive numbers
function q106PositiveNumbers(numbers) {
  // TODO
}

// Q107. Print negative numbers
function q107NegativeNumbers(numbers) {
  // TODO
}

// Q108. Count even numbers
function q108CountEvenNumbers(numbers) {
  // TODO
}

// Q109. Count odd numbers
function q109CountOddNumbers(numbers) {
  // TODO
}

// Q110. Count positive numbers
function q110CountPositiveNumbers(numbers) {
  // TODO
}

// Q111. Find maximum without Math.max
function q111FindMaximum(numbers) {
  // TODO
}

// Q112. Find minimum without Math.min
function q112FindMinimum(numbers) {
  // TODO
}

// Q113. Sum even numbers
function q113SumEvenNumbers(numbers) {
  // TODO
}

// Q114. Sum odd numbers
function q114SumOddNumbers(numbers) {
  // TODO
}

// Q115. Count numbers greater than 50
function q115CountGreaterThan50(numbers) {
  // TODO
}

// Q116. Count numbers less than 50
function q116CountLessThan50(numbers) {
  // TODO
}

// Q117. Find numbers between 10 and 50
function q117NumbersBetween10And50(numbers) {
  // TODO
}

// Q118. Find maximum even number
function q118MaximumEvenNumber(numbers) {
  // TODO
}

// Q119. Find minimum odd number
function q119MinimumOddNumber(numbers) {
  // TODO
}

// Q120. Separate even and odd numbers
function q120SeparateEvenOdd(numbers) {
  // TODO
}

// Q121. Student grades
function q121StudentGrades(marks) {
  // TODO
}

// Q122. Count passed students
function q122CountPassedStudents(marks) {
  // TODO
}

// Q123. Count failed students
function q123CountFailedStudents(marks) {
  // TODO
}

// Q124. Highest marks
function q124HighestMarks(marks) {
  // TODO
}

// Q125. Lowest marks
function q125LowestMarks(marks) {
  // TODO
}

// Q126. Class average
function q126ClassAverage(marks) {
  // TODO
}

// Q127. Number classification
function q127NumberClassification(numbers) {
  // Positive Even
  // Positive Odd
  // Negative Even
  // Negative Odd
  // Zero
  // TODO
}

// Q128. FizzBuzz
function q128FizzBuzz(limit) {
  // TODO
}

// Q129. Divisibility report
function q129DivisibilityReport(limit) {
  // TODO
}

// Q130. Number frequency
function q130NumberFrequency(numbers) {
  // TODO
}

// Q131. Prime number check
function q131IsPrime(num) {
  // TODO
}

// Q132. Print prime numbers
function q132PrintPrimes(limit) {
  // TODO
}

// Q133. Count prime numbers
function q133CountPrimes(limit) {
  // TODO
}

// Q134. Sum prime numbers
function q134SumPrimes(limit) {
  // TODO
}

// Q135. Armstrong number
function q135IsArmstrong(num) {
  // TODO
}

// Q136. Armstrong numbers
function q136ArmstrongNumbers(limit) {
  // TODO
}

// Q137. Perfect number
function q137IsPerfectNumber(num) {
  // TODO
}

// Q138. Perfect numbers
function q138PerfectNumbers(limit) {
  // TODO
}

// Q139. Factors
function q139Factors(num) {
  // TODO
}

// Q140. Count factors
function q140CountFactors(num) {
  // TODO
}

// Q141. Prime factors
function q141PrimeFactors(num) {
  // TODO
}

// Q142. HCF / GCD
function q142GCD(a, b) {
  // TODO
}

// Q143. LCM
function q143LCM(a, b) {
  // TODO
}

// Q144. Palindrome array
function q144PalindromeArray(arr) {
  // TODO
}

// Q145. Find duplicates
function q145FindDuplicates(numbers) {
  // TODO
}

// Q146. Remove duplicates without Set
function q146RemoveDuplicates(numbers) {
  // TODO
}

// Q147. Second largest
function q147SecondLargest(numbers) {
  // TODO
}

// Q148. Second smallest
function q148SecondSmallest(numbers) {
  // TODO
}

// Q149. Login attempt system
function q149LoginAttempts(correctPassword, attempts) {
  // attempts = array of passwords entered by user
  // Maximum 3 attempts
  // TODO
}

// Q150. ATM Simulation
function q150ATM(balance, transactions) {
  /*
    Transactions example:

    [
      { type: "check" },
      { type: "deposit", amount: 2000 },
      { type: "withdraw", amount: 1000 },
      { type: "check" },
      { type: "exit" }
    ]

    Rules:
    - Deposit must be positive
    - Withdrawal must be positive
    - Withdrawal cannot exceed balance
    - Continue until exit
  */
  // TODO
}
