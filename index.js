// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generate = require("/utils/generateMarkdown.js");
const fs = require('fs');
const axios = require("axios");

// TODO: Create an array of questions for user input
const questions = [
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
        type: 'rawlist',
        name: 'license',
        message: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
