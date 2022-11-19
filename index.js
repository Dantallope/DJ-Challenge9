const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'titleQ',
        message: 'What is the name of your project?',
        default: 'Dantes Project',
    },
    {
        name: 'descriptionQ',
        message: 'What is your project description?',
        default: 'A really cool README maker',
    },
    {
        name: 'instalQ',
        message: 'What are the installation instructions?',
        default: 'Navigate to my git repo and clone the code',
    },
    {
        name: 'usageQ',
        message: 'What is the usage information?',
        default: 'Run the index.js file with node and andwer the prompts, once complete you will find the readme file in the repo',
    },
    {
        name: 'contQ',
        message: 'What are your contribution guidelines?',
        default:'Hit me up on venmo I guess',
    },
    {
        name: 'testQ',
        message: 'What are the test instructions?',
        default: 'I do not even know what this means',
    },
];



// TODO: Create a function to write README file
function writeToFile(res) {
    const fs = require('fs');
    fs.appendFile('README.md', `
    # ${res.titleQ}
    
    ## Project Description
    ${res.descriptionQ}
    ## How to install
    ${res.instalQ}
    ## Usage Information
    ${res.usageQ}
    ## Contribution Guidlines
    ${res.contQ}
    ## Test Instructions
    ${res.testQ}
    `, (err) => err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        var res = data;
        writeToFile(res);});
}

// Function call to initialize app
init();
