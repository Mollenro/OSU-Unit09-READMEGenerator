// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        message: 'Please describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Define how the project is installed',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Define how to use your project',
    },
    {
        type: '?',
        name: 'license',
        message: 'Please select the license used in your project',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Define how you want people to contribute to your project',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Define how you test your project',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please provide a link to your GitHub account',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Your professional README file has been generated!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        //write to file
    })
}

// Function call to initialize app
init();
