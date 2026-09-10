//* ============================================================
//* JAVASCRIPT DATE OBJECT
//* ============================================================

//* What is Date?

// Date is a built-in JavaScript object used to work with:
// - Dates
// - Times
// - Years
// - Months
// - Days
// - Timestamps

// Example:
const now = new Date();

console.log(now);

// Output will depend on the current date/time:
// Example:
// 2026-09-10T10:30:25.123Z

//* ============================================================
//* Creating a Date
//* ============================================================

//* 1. Current Date and Time

const currentDate = new Date();

console.log(currentDate);

// new Date() gives the current date and time.

//* 2. Create Date From a Date String

const date1 = new Date("2026-09-10");

console.log(date1);

//* 3. Create Date Using Numbers

// Syntax:
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// IMPORTANT:
// month starts from 0!

// January  = 0
// February = 1
// March    = 2
// ...
// December = 11

const date2 = new Date(2026, 0, 15);

console.log(date2);

// This means:
// Year  = 2026
// Month = 0 → January
// Day   = 15

//* ============================================================
//* Date Components
//* ============================================================

const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

//* getFullYear()

// Returns the 4-digit year.

console.log(date.getFullYear());

// Example:
// 2026

//* getMonth()

// Returns the month index.

// January = 0
// February = 1
// ...
// December = 11

console.log(date.getMonth());

//* getDate()

// Returns the day of the month.

console.log(date.getDate());

// Example:
// 10

//* getDay()

// Returns the day of the week.

// Sunday    = 0
// Monday    = 1
// Tuesday   = 2
// Wednesday = 3
// Thursday  = 4
// Friday    = 5
// Saturday  = 6

console.log(date.getDay());

//* getHours()

console.log(date.getHours());

//* getMinutes()

console.log(date.getMinutes());

//* getSeconds()

console.log(date.getSeconds());

//* getMilliseconds()

console.log(date.getMilliseconds());

//* ============================================================
//* Getting UTC Values
//* ============================================================

// JavaScript also provides UTC versions of Date methods.

console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCDay());

console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());

//* Local vs UTC

// getHours()     → local time
// getUTCHours()  → UTC time

console.log("Local:", date.getHours());
console.log("UTC:", date.getUTCHours());

//* ============================================================
//* Changing Date Values
//* ============================================================

// Date objects are mutable.
// That means we can change their values.

const myDate = new Date();

myDate.setDate(15);
myDate.setFullYear(2030);

console.log(myDate);

//* setFullYear()

myDate.setFullYear(2035);

console.log(myDate);

//* setMonth()

// Remember:
// January = 0

myDate.setMonth(5);

console.log(myDate);

// 5 = June

//* setDate()

myDate.setDate(20);

console.log(myDate);

//* setHours()

myDate.setHours(10);

console.log(myDate);

//* setMinutes()

myDate.setMinutes(30);

console.log(myDate);

//* setSeconds()

myDate.setSeconds(45);

console.log(myDate);

//* ============================================================
//* Important Date Mutation Behavior
//* ============================================================

const d = new Date("2026-01-10");

d.setDate(20);

console.log(d);

// setDate() changes the ORIGINAL Date object.

//* ============================================================
//* Automatic Date Adjustment
//* ============================================================

// JavaScript automatically handles dates going outside
// their normal ranges.

const futureDate = new Date(2026, 0, 31);

futureDate.setDate(32);

console.log(futureDate);

// January doesn't have 32 days.
// JavaScript automatically moves to February.

//* ============================================================
//* Formatting Dates
//* ============================================================

// Date objects can be converted into readable strings.

const today = new Date();

//* toString()

console.log(today.toString());

//* toDateString()

console.log(today.toDateString());

// Gives only the date portion.

//* toTimeString()

console.log(today.toTimeString());

// Gives only the time portion.

//* toISOString()

console.log(today.toISOString());

// ISO format:
// YYYY-MM-DDTHH:mm:ss.sssZ

//* ============================================================
//* toLocaleString()
//* ============================================================

// Converts a Date into a localized string.

console.log(today.toLocaleString());

// Example:
// 10/09/2026, 4:00:00 AM

//* ============================================================
//* Locale
//* ============================================================

console.log(today.toLocaleString("en-US"));

console.log(today.toLocaleString("en-IN"));

// Different locales can display dates differently.

//* ============================================================
//* Custom Date Formatting
//* ============================================================

const formattedDate = today.toLocaleString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

console.log(formattedDate);

// Example:
// 10 September 2026

//* ============================================================
//* Formatting Time
//* ============================================================

const formattedTime = today.toLocaleString("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

console.log(formattedTime);

//* ============================================================
//* Date + Time Formatting
//* ============================================================

const formatted = today.toLocaleString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

console.log(formatted);

//* ============================================================
//* Time Zone
//* ============================================================

// You can specify a timezone.

console.log(
  today.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  }),
);

// UTC

console.log(
  today.toLocaleString("en-US", {
    timeZone: "UTC",
  }),
);

//* ============================================================
//* Timestamp
//* ============================================================

// Date internally represents a point in time using
// milliseconds from Unix Epoch.

// Unix Epoch:
// January 1, 1970, 00:00:00 UTC

//* getTime()

const timestamp = today.getTime();

console.log(timestamp);

// Example:
// 178903...

//* ============================================================
//* Date.now()
//* ============================================================

// Returns the current timestamp directly.

console.log(Date.now());

// Date.now() is similar to:

console.log(new Date().getTime());

//* ============================================================
//* Converting Timestamp to Date
//* ============================================================

const timestamp2 = Date.now();

const timestampDate = new Date(timestamp2);

console.log(timestampDate);

// Flow:
//
// Date → getTime() → Number
//
// Number → new Date(number) → Date

//* ============================================================
//* Comparing Dates
//* ============================================================

// Dates can be compared using:
// <
// >
// <=
// >=
// ===

const dateA = new Date("2026-01-01");
const dateB = new Date("2026-12-01");

console.log(dateA < dateB);
// true

console.log(dateA > dateB);
// false

//* ============================================================
//* IMPORTANT: Date === Date
//* ============================================================

// Two different Date objects are different objects.

const a = new Date("2026-01-01");
const b = new Date("2026-01-01");

console.log(a === b);

// false

//* To compare their actual time values:

console.log(a.getTime() === b.getTime());

// true

//* ============================================================
//* Finding Difference Between Dates
//* ============================================================

const start = new Date("2026-01-01");
const end = new Date("2026-01-10");

const difference = end - start;

console.log(difference);

// Result is milliseconds.

//* Convert milliseconds to seconds

const seconds = difference / 1000;

console.log(seconds);

//* Convert milliseconds to minutes

const minutes = difference / (1000 * 60);

console.log(minutes);

//* Convert milliseconds to hours

const hours = difference / (1000 * 60 * 60);

console.log(hours);

//* Convert milliseconds to days

const days = difference / (1000 * 60 * 60 * 24);

console.log(days);

//* ============================================================
//* Useful Conversion Formula
//* ============================================================

// 1 second
// = 1000 milliseconds
//
// 1 minute
// = 60 seconds
// = 60 × 1000 milliseconds
//
// 1 hour
// = 60 minutes
// = 60 × 60 × 1000 milliseconds
//
// 1 day
// = 24 hours
// = 24 × 60 × 60 × 1000 milliseconds

//* ============================================================
//* Checking Whether a Date is Valid
//* ============================================================

const validDate = new Date("2026-01-01");

console.log(validDate);

// Invalid Date example:

const invalidDate = new Date("hello");

console.log(invalidDate);

// Invalid Date

//* Check using isNaN()

console.log(isNaN(invalidDate.getTime()));

// true

//* Better pattern:

function isValidDate(value) {
  const date = new Date(value);

  return !Number.isNaN(date.getTime());
}

console.log(isValidDate("2026-01-01"));
// true

console.log(isValidDate("hello"));
// false

//* ============================================================
//* Date Methods — Quick Reference
//* ============================================================

// GET
//
// getFullYear()       → year
// getMonth()          → month (0-11)
// getDate()           → day of month
// getDay()            → day of week (0-6)
// getHours()          → hour
// getMinutes()        → minute
// getSeconds()        → second
// getMilliseconds()   → milliseconds
// getTime()           → timestamp

//* SET
//
// setFullYear()
// setMonth()
// setDate()
// setHours()
// setMinutes()
// setSeconds()
// setMilliseconds()

//* UTC
//
// getUTCFullYear()
// getUTCMonth()
// getUTCDate()
// getUTCDay()
// getUTCHours()
// getUTCMinutes()
// getUTCSeconds()

//* FORMAT
//
// toString()
// toDateString()
// toTimeString()
// toISOString()
// toLocaleString()

//* STATIC METHODS
//
// Date.now()
// Date.parse()
// Date.UTC()

//* ============================================================
//* Practical Example — Current Date
//* ============================================================

function getCurrentDate() {
  const date = new Date();

  return date.toLocaleDateString("en-IN");
}

console.log(getCurrentDate());

//* ============================================================
//* Practical Example — Current Time
//* ============================================================

function getCurrentTime() {
  const date = new Date();

  return date.toLocaleTimeString("en-IN");
}

console.log(getCurrentTime());

//* ============================================================
//* Practical Example — Age Calculation
//* ============================================================

function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const monthDifference = today.getMonth() - birth.getMonth();

  // If birthday hasn't happened yet this year,
  // subtract 1 from the age.

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

console.log(calculateAge("2005-09-10"));

//* ============================================================
//* Practical Example — Days Between Two Dates
//* ============================================================

function daysBetween(date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const difference = Math.abs(secondDate - firstDate);

  return difference / (1000 * 60 * 60 * 24);
}

console.log(daysBetween("2026-01-01", "2026-01-10"));

// 9

//* ============================================================
//* Practical Example — Add Days
//* ============================================================

function addDays(date, days) {
  const result = new Date(date);

  result.setDate(result.getDate() + days);

  return result;
}

console.log(addDays("2026-01-01", 10));

//* ============================================================
//* Practical Example — Check Past / Future
//* ============================================================

function checkDate(dateValue) {
  const target = new Date(dateValue);
  const now = new Date();

  if (target < now) {
    return "Past";
  }

  if (target > now) {
    return "Future";
  }

  return "Now";
}

console.log(checkDate("2030-01-01"));

//* ============================================================
//* Date + Template Literals
//* ============================================================

const user = "Ravi";
const loginTime = new Date();

console.log(`${user} logged in at ${loginTime.toLocaleTimeString()}`);

//* ============================================================
//* Common Mistakes
//* ============================================================

//* Mistake 1: Forgetting that months start at 0

const january = new Date(2026, 0, 15);

console.log(january);

// 0 = January

//* Mistake 2: Using getDay() when you need day of month

console.log(today.getDay());
console.log(today.getDate());

// getDay()   → day of WEEK
// getDate()  → day of MONTH

//* Mistake 3: Comparing Date objects with ===

const d1 = new Date("2026-01-01");
const d2 = new Date("2026-01-01");

console.log(d1 === d2);

// false

// Compare timestamps instead:

console.log(d1.getTime() === d2.getTime());

//* Mistake 4: Forgetting Date objects are mutable

const original = new Date("2026-01-01");

original.setDate(20);

console.log(original);

// Original object has changed.

//* ============================================================
//* DATE MENTAL MODEL
//* ============================================================

// Think of Date as:
//
//        Date Object
//             |
//     -------------------
//     |        |        |
//    Date     Time    Timestamp
//     |        |        |
//  Year/Day  H:M:S   milliseconds
//
//
// Formatting:
//
// Date Object
//      ↓
// toLocaleString()
//      ↓
// Human-readable text

//* ============================================================
//* MOST IMPORTANT RULES
//* ============================================================

// 1. new Date() → current date and time.
//
// 2. getMonth() → 0 to 11.
//
// 3. getDate() → day of month.
//
// 4. getDay() → day of week.
//
// 5. Date.now() → current timestamp.
//
// 6. getTime() → timestamp of a Date.
//
// 7. Date objects are mutable.
//
// 8. Compare dates using getTime() when checking equality.
//
// 9. Date subtraction gives milliseconds.
//
// 10. toLocaleString() is useful for displaying dates.
//
// 11. UTC methods work with UTC instead of local time.
//
// 12. Always be careful with timezone when building
//     real-world applications.

//* ============================================================
//* GOLDEN MEMORY TRICK
//* ============================================================

// getFullYear()  → YEAR
// getMonth()     → MONTH (0-11)
// getDate()      → DATE of month
// getDay()       → DAY of week
//
// Date = object
// Timestamp = number
// Formatted date = string
//
// STRING → new Date()
// DATE → getTime() → NUMBER
// DATE → toLocaleString() → STRING
//
// Remember:
//
// "MONTH starts at ZERO,
// DATE starts at ONE,
// DAY starts at SUNDAY = ZERO."
