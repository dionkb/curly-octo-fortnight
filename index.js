// Packages required to run
const inquirer = require('inquirer');

// This function initializes the inquirer when run
function init() {
    return inquirer.prompt(questions);
}

// This starts the init function, then processes the results
init()
// .then(answers => {
//     return xxxxxxx(answers);
// })