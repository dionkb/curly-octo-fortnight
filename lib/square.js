// Requires shapes.js to inherit properties from
const Shape = require('./shapes');

// Class for square, inherits some properties from parent shapes.js
class Square extends Shape {
    constructor(text, textColor, shapeColor, height, width) {
        super(text, textColor, shapeColor, height, width);
    };
    render() {
        return `
            <svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="0" width="${this.height}" height="${this.height}" fill="${this.shapeColor}" />
            <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `
    };
}

// Allows this class to be imported on other files
module.exports = Square;