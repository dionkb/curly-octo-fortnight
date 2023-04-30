// Requires shapes.js to inherit properties from
const Shape = require('./shapes');

// Class for triangle, inherits some properties from parent shapes.js
class Triangle extends Shape {
    constructor(text, textColor, shapeColor, height, width) {
        super(text, textColor, shapeColor, height, width);
    };
    render() {
        return `
            <svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />
            <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `
    };
};

// Allows this class to be imported on other files
module.exports = Triangle;