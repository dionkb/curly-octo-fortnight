// Native NodeJS packages/modules required to run
const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo');
const validateColor = require("validate-color").default;

// Questions for user to be prompted with
const questions = [
    // Obtaining the users 1-3 letter logo text
    {
        name: "text",
        message: "Input up to three characters for your logo text",
        type: "input",
        default: "DKB", // Remove this default when done testing
        validate: textInput => {
            if (textInput && textInput.length < 4) {
                return true;
            } else {
                console.log('Invalid text entry');
                return false;
            }
        }
    },
    // Obtaining the text color input
    {
        name: "textColor",
        message: "Enter a text color (by color name, hex number, etc.):",
        type: "input",
        default: "blue",  // Remove this default when done testing
        validate: textColorInput => {
            if (checkColor(textColorInput)) {
                return true;
            } else {
                console.log('Invalid color entry');
                return false;
            }
        }
    },
    // Obtaining the shape input
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
    // Obtaining the logo shape's color input
    {
        name: "shapeColor",
        message: "Enter a shape color (by color name, hex number, etc.):",
        type: "input",
        default: "black",  // Remove this default when done testing
        validate: shapeColorInput => {
            if (checkColor(shapeColorInput)) { 
                return true;
            } else {
                console.log('Invalid color entry');
                return false;
            }
        }
    },
];

// This function takes color input from the user prompts, and checks if it 
// is a valid color. Otherwise, logs error message to user
function checkColor(color) {
    if (color && color !== '' && validateColor(color)) {
        return true;
    }
    return false;
};

// This function initializes the inquirer when run
function init() {
    return inquirer.prompt(questions);
}

// This function writes a SVG file using the native NodeJS 'fs' package,
// and the user input info after it is run through the generateLogo.js file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Logo succesfully created')
    );
}

// This starts the init function, then processes the results
init()
.then(answers => {
    return generateLogo(answers);
})
.then(returnedLogo => {
    writeToFile("logo.svg", returnedLogo);
});