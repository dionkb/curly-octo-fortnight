const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor, height, width) {
        super(text, textColor, shapeColor, height, width);
    };
    render() {
        return `
            <svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">
            <triangle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `
    };
};

module.exports = Triangle;

//   .triangle-up {
// 	width: 0;
// 	height: 0;
// 	border-left: 25px solid transparent;
// 	border-right: 25px solid transparent;
// 	border-bottom: 50px solid #555;
// }

//  <svg width="200" height="200" viewBox="-100 -100 200 200">
//     <polygon points="0,0 80,120 -80,120" fill="#234236" />
//     <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
//     <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
//     <rect x="-20" y="120" width="40" height="30" fill="brown" />
//   </svg> */}