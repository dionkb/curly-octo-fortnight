// Packages required to run
const inquirer = require('inquirer');

// Questions for user to be prompted with
const questions = [
    // Obtaining the users 1-3 letter logo text
    {
        name: "name",
        message: "Input up to three letters got your logo text",
        type: "input",
        default: "DKB", // Remove this default when done testing
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter your logo text');
                return false;
            }
        }
    },
    // Obtaining the text color
    {
        name: "textColor",
        message: "Enter a text color (by color name, or by hexadecimal number):",
        type: "input",
        default: "blue",  // Remove this default when done testing
        validate: textColorInput => {
            if (textColorInput) { // May need to add more validation to accept input
                return true;
            } else {
                console.log('You must enter a text color');
                return false;
            }
        }
    },
    // Obtaining the text color
    {
        name: "shape",
        message: "Choose what shape your logo will be:",
        type: "list",
        default: "circle",  // Remove this default when done testing
        choices: [
            "circle",
            "triangle",
            "square",
        ],
        validate: shapeInput => {
            if (shapeInput) {
                return true;
            } else {
                console.log('You must choose a logo shape');
                return false;
            }
        }
    },
    // Obtaining the logo shape's color
    {
        name: "shapeColor",
        message: "Enter a shape color (by color name, or by hexadecimal number):",
        type: "input",
        default: "black",  // Remove this default when done testing
        validate: shapeColorInput => {
            if (shapeColorInput) { // May need to add more validation to accept input
                return true;
            } else {
                console.log('You must enter a shape color');
                return false;
            }
        }
    },
];

// This function initializes the inquirer when run
function init() {
    return inquirer.prompt(questions);
}

// This starts the init function, then processes the results
init()
.then(answers => {
    // return xxxxxxx(answers);
    // console.log(answers); // TESTING
})

// Testing questions prompt:
// console.log(questions);