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

function addEntry() {
    //Select the container where the new entry will be added based on the value of the dropdow
    const targetInputContainer = document.querySelector(`#$(entryDropdown.value).input-container`);

    //Dertermine the number of exisiting text input fields in the target container
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

    //Create a string of HTML to represent the new entry fields (name and calories)
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name>Entry ${entryNumber} Name</label>
        input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
        <label for="${entryDropdown}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" id"${entryDropdown.value}-${entryNumber}-calories" placeholder="calories" />
    `;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function getCaloriesFromInputs(list) {
    let calories = 0;
  
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
        isError = true;
        return null;
      }
      calories += Number(currVal);
    }
    return calories;
  }

addEntryButton.addEventListener("click", addEntry); 