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
        type: 'list',
        name: 'license',
        message: 'Please select the license used in your project',
        choices: [
            'Apache License 2.0',
            'BSD 3-Clause license',
            'BSD 2-Clause license',
            'GNU General Public License',
            'GNU Library General Public License',
            'MIT license',
            'Mozilla Public License 2.0',
            'Common Development and Distribution License',
            'Eclipse Public License version 2.0'
        ]
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
        writeToFile('README.md', formatData(userInput))
    })
}

// Function call to initialize app
init();

function formatData(userInput) {
    return `# ${userInput.title}

## Description
${userInput.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## License 
${userInput.license}

## Contributing
${userInput.contributing}

## Tests
${userInput.tests}

## Questions?
- Github: (https://github.com/${userInput.username})
- Email: ${userInput.email}
`
}
