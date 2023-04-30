const Shape = require('./shapes');

class Square extends Shape {
    constructor(text, textColor, shapeColor, height, width) {
        super(text, textColor, shapeColor, height, width);
    };
    render() {
        return `
            <svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
            <square cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `
    };
}

module.exports = Square;

// .square {
//     height: 50px;
//     width: 50px;
//     background-color: #555;
//   }
// <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>