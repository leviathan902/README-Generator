// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description of project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What were the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are some examples of usage for this project?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who should be credited in this repo?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter GitHub username: ',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter email address: ',
        },
        {
            type: 'list',
            message: 'Select License:',
            name: 'license',
            choices: ['MIT', 'MOZILLA', 'IBM', 'APACHE'],
        },

    ])

    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {
    .then((response) => {
        console.log(response);
        fs.writeFile('README.md', generateMarkdown(response), (err) => {})
    });

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then(function(data){
//         writeToFile("README.md", generateMarkdown(data));
//     })
// }

// // Function call to initialize app
// init();