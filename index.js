// Native NodeJS packages/modules required to run
const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require("validate-color").default;
const { Circle, Square, Triangle } = require('./lib/shapes'); 

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

// This function writes a SVG file using the native NodeJS 'fs' package,
// and the user input info after it is run through the generateLogo.js file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}

// This function initializes the inquirer when run
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        if (answers.shape === 'circle') {
            console.log(answers);
            let logoShape = new Circle(answers);
            return logoShape.render();
        }
        else if (answers.shape === 'triangle') {
            let logoShape = new Triangle(answers);
            return logoShape.render();
        }
        else if (answers.shape === 'square') {
            let logoShape = new Square(answers);
            return logoShape.render();
        }
        else {
            console.log("Invalid shape input");
        }
        return logoShape.render();    
    })
    .then(returnedLogo => {
        console.log(returnedLogo);
        writeToFile("logo.svg", returnedLogo);
    })
    .catch(err => {
        console.log(err)
    });
}

// This starts the init function, then processes the results
init();