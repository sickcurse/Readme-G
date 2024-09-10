// Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Corrected path

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What\'s your Github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What\'s your email?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What\'s the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of the project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is your preferred license?',
    choices: ['None', 'WTFPL', 'MIT', 'ISC'] // Corrected to 'choices'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command will install the dependencies?',
    default: 'npm install'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Creating README file...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
