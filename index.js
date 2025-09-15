// Import the boxen package
const boxen = require("boxen");

// Define message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic (default style)
const classicBox = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: "classic"
});

// SingleDouble
const singleDoubleBox = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: "singleDouble"
});

// Round (rounded corners)
const roundBox = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: "round"
});

// Print them
console.log(classicBox);
console.log(singleDoubleBox);
console.log(roundBox);
