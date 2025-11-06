// Import the boxen module
const boxen = require('boxen');

// Define the message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// Display message in Classic (default) box style
console.log("Classic Box Style:");
console.log(boxen(message, {
    title: title,
    padding: 1,
    borderStyle: 'classic'
}));

console.log("\n" + "=".repeat(50) + "\n");

// Display message in SingleDouble box style
console.log("SingleDouble Box Style:");
console.log(boxen(message, {
    title: title,
    padding: 1,
    borderStyle: 'singleDouble'
}));

console.log("\n" + "=".repeat(50) + "\n");

// Display message in Round box style
console.log("Round Box Style:");
console.log(boxen(message, {
    title: title,
    padding: 1,
    borderStyle: 'round'
}));

console.log("\n" + "=".repeat(50) + "\n");

// Bonus: Display with background color
console.log("Bonus - With Background Color:");
console.log(boxen(message, {
    title: title,
    padding: 1,
    borderStyle: 'round',
    backgroundColor: 'blue',
    borderColor: 'yellow'
}));
