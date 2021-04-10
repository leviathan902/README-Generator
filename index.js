// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs');

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
        message: 'Description of project',
    },
    {
        type: 'confirm',
        name: 'installation',
        message: 'What were the steps required to install your project?',
    },
    {
        type: 'confirm',
        name: 'usage',
        message: 'What are some examples of usage for this project?',
    },
    {
        type: 'confirm',
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
        type: 'rawlist',
        name: 'license',
        message: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },
    
])

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    .then(response => {
        // Use user feedback for... whatever!!
        console.log(response);
        fs.writeFile("README.md"), generateMarkdown(response), (err) => {
            err ? console.error(err) : console.log(success)
        }
      });
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
