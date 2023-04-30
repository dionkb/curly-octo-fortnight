// Required to run tests on functions from shapes js file
const { Circle, Square, Triangle } = require('./shapes'); 

// Creating a passing test for a new circle
describe('Circle', () => {
    it('should generate a circle shaped SVG logo using user inputs', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
    });
});

// Creating a passing test for a new square
describe('Square', () => {
    it('should generate a square shaped SVG logo using user inputs', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<rect x="50" y="0" width="150px" height="150px" fill="green" />`);
    });
});

// Creating a passing test for a new triangle
describe('Triangle', () => {
    it('should generate a triangle shaped SVG logo using user inputs', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});