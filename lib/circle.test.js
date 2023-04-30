// Required to run tests on functions from each js file
const Shape = require('./shapes');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

// Creating a passing test for circle
describe('Circle', () => {
    it('should generate an SVG logo using user inputs', () => {
        const newCircle = new Circle("SVG", "white", "green", "200px", "300px");
        expect(newCircle.render()).toEqual(`
        <svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="green" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `
        );
    });
});

// Must include following test according to acceptance criteria
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');