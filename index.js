// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
/* This function is a series of questions that will be asked to the user. */
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
            choices: ["Apache", "GNU", "MIT", "BSD", "None"]
        },
        {
            type: "input",
            message: "Deployed URL:",
            name: 'Deployed App',
        },
        {
            type: "input",
            message: "GitHub Username",
            name: 'GitHubUsername',
        },
        {
            type: 'input',
            message: 'Please enter your email address here:',
            name: 'email'
        },
    ])
};

// TODO: Create a function to write README file

/*
 * It takes two arguments, a filename and some data, and writes the data to the file
 * filename - The name of the file you want to create.
 * data - The data to write to the file.
 */
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (error) => error ? console.log(error) : console.log('Success! README File created'));
} 



// TODO: Create a function to initialize app
/*
 * The function init() is an asynchronous function that uses the inquirer package to prompt the user
 * for information based on the questions. The user's responses are then passed into the generateMarkdown() function, which
 * returns a string of markdown text. The markdown text is then written to a file called README.md.
 */
async function init() {
    let responses = await inquirer.prompt(questions);

    let readMe = generateMarkdown(responses)

    fs.writeFile('README.md', readMe, (error) => error ? console.log(error) : console.log('Success! README.md has been created'));
}

// Function call to initialize app
init();
