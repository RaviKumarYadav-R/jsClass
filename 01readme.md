## Question 1

```javascript
function login(username, password, isVerified, isBlocked) {
  if (username || password) {
    if (!isBlocked) {
      if (isVerified) {
        console.log("Login successful");
      } else {
        console.log("Please varified your Account first");
      }
    } else {
      console.log("Account is blocked");
    }
  } else {
    console.log("Invalid username or password");
  }
}
```

## Question 2

```javascript
function canVote(age, citizenship, voterId, isBlocked) {
  if (age >= 18 && citizenship === "indian") {
    if (voterId) {
      if (isBlocked) {
        console.log("Voting denied");
      } else {
        console.log("Allowed to vote");
      }
    } else {
      console.log("Voter Id required");
    }
  } else {
    console.log("Not eligible");
  }
}
```

## Question 3

```javascript
function promotionEligibility(
  experience,
  performance,
  attendance,
  warningCount,
) {
  if (warningCount < 3) {
    if (experience >= 2) {
      if (performance >= 7) {
        if (attendance >= 80) {
          console.log("promotion granted");
        } else {
          console.log("Attendance too low");
        }
      } else {
        console.log("Performance too low");
      }
    } else {
      console.log("Not enough experience");
    }
  } else {
    console.log("Promotion denied");
  }
}
```

## Question 4

```javascript
function admissionDecision(marks, entranceScore, attendance) {
  // Your logic
  if (marks >= 60) {
    if (entranceScore >= 50) {
      if (attendance >= 75) {
        if (marks >= 90 && entranceScore >= 90) {
          console.log("100% scholarship granted");
        } else if (marks >= 80 && entranceScore >= 80) {
          console.log("50% scholarship granted");
        } else {
          console.log("not eligible for scholarship");
        }
      } else {
        console.log("Rejected");
      }
    } else {
      console.log("rejected");
    }
  } else {
    console.log("Rejected");
  }
}
```

## Question 5

```javascript
function atmSecurity(
  correctPin,
  enteredPin,
  attempts,
  cardBlocked,
  balance,
  amount,
) {
  // Your logic
  if (!cardBlocked) {
    if (attempts < 3) {
      if (correctPin === enteredPin) {
        if (amount > 0) {
          if (amount <= balance) {
            if (amount <= 20000) {
              console.log("Transaction Successful");
            } else {
              console.log("Daily Limit Exceeded");
            }
          } else {
            console.log("Insufficient Balance");
          }
        } else {
          console.log("Invalid Amount");
        }
      } else {
        console.log("corret pin");
      }
    } else {
      console.log("Access Denied");
    }
  } else {
    console.log("card blocked");
  }
}
```
