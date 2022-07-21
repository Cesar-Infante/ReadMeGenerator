// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

const questions = () => {
    const myQuestions = inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the current project?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Please type an easy to read description about your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Whats the procedure to report issues?',
            name: 'issues',
        },
        {
            type: 'input',
            message: 'How can someone contribute?',
            name: 'contribution'
        },
        {
            type: "checkbox",
            message: "Does your current project have a license? ",
            name: 'licenses',
            choices: ["Apache", "GNU", "ISC", "MIT", "OBSD", "Public Domain (No license)"]
        },
        {
            type: "input",
            message: "Deployed URL:",
            name: 'Deployed App',
        },
        {
            type: "input",
            message: "GitHub Repo URL",
            name: 'GitHubRepo',
        },
    ])
};

// TODO: Create a function to write README file

function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
