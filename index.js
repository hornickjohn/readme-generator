// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    { name:'title',message:'Project title:' },
    { name:'description',message:'Description of the project:' },
    { name:'installation',message:'Provide installation instructions:' },
    { name:'usage',message:'Usage of the product:' },
    { name:'contributing',message:'Guidelines for contribution:' },
    { name:'tests',message:'Testing instructions:' },
    { name:'license',type:'list',choices:['license 1','license 2','license 3','license 4','license 5'] },
    { name:'username',message:'GitHub username:' },
    { name:'email', message:'Email address:' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    var inquirer = require('inquirer');
    inquirer.prompt([
        ...questions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        //form of: object with data in form of questionname:typedanswer
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
