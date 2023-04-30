// A constructor Shape, giving inheritable traits to the children classes.
class Shape {
    constructor(answers) {
        this.text = `${answers.text}`;
        this.textColor = `${answers.textColor}`;
        this.shapeColor = `${answers.shapeColor}`;
        this.height = "200px";
        this.width = "300px";
    }
    setColor() {
        `${answers.shapeColor}`;
    }
}

// Class for circle, inherits some properties from parent shapes.js
class Circle extends Shape {
    constructor(text, textColor, shapeColor, height, width) {
        super(text, textColor, shapeColor, height, width);
    };
    render() {
        return `
        <svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

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
module.exports = { Circle, Square, Triangle};