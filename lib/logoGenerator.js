const { Circle, Square, Triangle } = require('./shapes'); 

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
    console.log(logoSVG);
    return logoSVG;
}

// Allows this class to be imported on other files
module.exports = logoGenerator;