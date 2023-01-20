// TODO: Include packages needed for this application

const { Console } = require('console');
const generateMarkdown = require('./utils/generateMarkdown');

//validation to be passed for required fields
const RequireAnswer = input => input.trim() !== "";

// TODO: Create an array of questions for user input
const questions = [
    { name:'title',message:'*Project title:',validate:RequireAnswer },
    { name:'description',message:'*Description of the project:',validate:RequireAnswer },
    { name:'installation',message:'Provide installation instructions:' },
    { name:'usage',message:'*Usage of the product:',validate:RequireAnswer },
    { name:'contributing',message:'Guidelines for contribution:' },
    { name:'tests',message:'Testing instructions:' },
    { name:'license',type:'list',choices:['no license','license 1','license 2','license 3','license 4','license 5'] },
    { name:'username',message:'*GitHub username:',validate:RequireAnswer },
    { name:'email', message:'*Email address:',validate:RequireAnswer }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log('Starred (*) prompts require input.');
    var inquirer = require('inquirer');
    inquirer.prompt([
        ...questions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        //form of: object with data in form of questionname:typedanswer
        require ("fs").writeFile ("testreadme.md", generateMarkdown(answers), function() { console.log('saved'); });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Cannot run in current environment.');
        } else {
            console.log(error);
        }
    });
}

// Function call to initialize app
init();
