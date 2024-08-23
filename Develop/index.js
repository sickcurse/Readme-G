// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('.utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'Whats your Github username'
},
{
    type: 'input',
    name: 'email',
    message: 'Whats your email'
},
{
    type: 'input',
    name: 'title',
    message: 'Whats the title of your project'
},
{
    type: 'input',
    name: 'description',
    message: 'Express a short description of the project'
},
{
    type: 'list',
    name: 'license',
    message: 'What is your perfered license',
    options: ['None', 'WTFPL', 'MIT', 'ISC']
},
{
    type: 'input',
    name: 'installation',
    message: 'What command will install the dependencies',
    default: 'npm test'
},
{
    type: 'input',
    name: 'license',
    message: '  Anything the user should know working the repo',   
},
{
    type: 'input',
    name: 'contribting',
    message: 'Anything the user needs to know contributing to the repo',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
