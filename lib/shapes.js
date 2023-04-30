// A constructor Shape, giving inheritable traits to the children classes.
class Shape {
    constructor(answers) {
        this.text = `${answers.text}`;
        this.textColor = `${answers.textColor}`;
        this.shapeColor = `${answers.shapeColor}`;
        this.height = "200px";
        this.width = "300px";
    }
}

// Allows this class to be imported on other files
module.exports = Shape;