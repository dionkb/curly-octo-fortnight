// A function that will generate the SVG format logo based on user input
function GenerateLogo (data) {
    // Currently just testing data return/linking properly
    return `${data.text}
        ${data.textColor}
        ${data.shape}
        ${data.shapeColor}`
};

// Allows this function to be exported
module.exports = GenerateLogo;