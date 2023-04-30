// Native NodeJS packages/modules required to run
const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require('validate-color').default;
const logoGenerator = require('./lib/logoGenerator');

// Questions for user to be prompted with
const questions = [
    // Obtaining the users 1-3 letter logo text
    {
        name: "text",
        message: "Input up to three characters for your logo text",
        type: "input",
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

// This function writes a SVG file using the native NodeJS 'fs' package,
// and the user input info after it is run through the logoGenerator.js file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}

// This function initializes the inquirer when run
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        let returnedLogo = logoGenerator(answers);
        writeToFile("logo.svg", returnedLogo);
    })
    .catch(err => {
        console.log(err)
    });
}

// This starts the init function, then processes the results
init();