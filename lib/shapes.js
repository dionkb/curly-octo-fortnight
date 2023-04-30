// A constructor Shape, giving inheritable traits to the children classes.
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    };
}

// Class for circle, inherits some properties from parent shapes.js
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`
    };
};

// Class for square, inherits some properties from parent shapes.js
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<rect x="50" y="0" width="150px" height="150px" fill="${this.shapeColor}" />`
    };
}

// Class for triangle, inherits some properties from parent shapes.js
class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    };
};

// Allows this class to be imported on other files
module.exports = { Circle, Square, Triangle};