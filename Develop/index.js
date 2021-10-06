// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => { 
            if(titleInput){
                return true 
            }else{ 
                console.log('Please enter a title for your project')
                return false 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',
        validate: descInput => { 
            if(descInput){
                return true 
            }else{ 
                console.log('Please enter a description for your project')
                return false 
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Define how the project is installed',
        validate: installInput => { 
            if(installInput){
                return true 
            }else{ 
                console.log('Please enter an installation method for your project')
                return false 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Define how to use your project',
        validate: useInput => { 
            if(useInput){
                return true 
            }else{ 
                console.log('Please define how to use your project')
                return false 
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license used in your project',
        choices: [
            'Apache',
            'MIT',
            'Mozilla',
            'Eclipse',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Define how you want people to contribute to your project',
        validate: contributeInput => { 
            if(contributeInput){
                return true 
            }else{ 
                console.log('Please define how you want others to contribute to your project')
                return false 
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Define how you test your project',
        validate: testInput => { 
            if(testInput){
                return true 
            }else{ 
                console.log('Please define how you test your project')
                return false 
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: githubInput => { 
            if(githubInput){
                return true 
            }else{ 
                console.log('Please enter your Github username')
                return false 
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: titleInput => { 
            if(titleInput){
                return true 
            }else{ 
                console.log('Please enter your email')
                return false 
            }
        }
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
[![license](https://img.shields.io/badge/license-${userInput.license}-red)](https://shields.io)

## Contributing
${userInput.contributing}

## Tests
${userInput.tests}

## Questions?
- Github: (https://github.com/${userInput.username})
- Email: ${userInput.email}
`
}
