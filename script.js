const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false; // In programming, prefixing a variable with is or has is a common practice to signify that the variable represents a boolean value.

function cleanInputString(str) { // Values from an HTML input field are received as strings in JavaScript. You'll need to convert these strings into numbers before performing any calculations.
    
    const regex = /[\+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str) {
    const regex = /[0-9]+e[0-9]+/i; // i flag. This flag makes your pattern case-insensitive. //There is a shorthand character class to match any digit: \d
    return str.match(regex);
}

console.log(isInvalidInput("10"))