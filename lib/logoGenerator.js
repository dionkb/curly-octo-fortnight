// Packages/modules required to run
const { Circle, Square, Triangle } = require('./shapes'); 

// This takes user input from the Inquirer prompt. It runs the info through the correct shape
// generator, and then creates SVG text using all returned values
const logoGenerator = ({ text, textColor, shape, shapeColor }) => {
    let logoShape;
    if (shape === 'circle') {
        logoShape = new Circle(shapeColor);
    }
    else if (shape === 'triangle') {
        logoShape = new Triangle(shapeColor);
    }
    else if (shape === 'square') {
        logoShape = new Square(shapeColor);
    }
    else {
        console.log("Invalid shape input");
    }
    let logoSVG = `
    <svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    ${logoShape.render()}
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `
    return logoSVG;
}

// Allows this class to be imported on other files
module.exports = logoGenerator;