// Include necessary packages
const fileStream = require('fs');
const { Console } = require('console');
const generateMarkdown = require('./utils/generateMarkdown');

//validation to be passed for required prompts
const RequireAnswer = input => input.trim() !== "";

// Array of question objects to pass inquirer
const questions = [
    { name:'title',message:'*Project title:',validate:RequireAnswer },
    { name:'description',message:'*Description of the project:',validate:RequireAnswer },
    { name:'installation',message:'Provide installation instructions:' },
    { name:'usage',message:'*Usage of the product:',validate:RequireAnswer },
    { name:'contributing',message:'Guidelines for contribution:' },
    { name:'tests',message:'Testing instructions:' },
    { name:'license',type:'list',choices:['No License','MIT License','ISC License','IBM License','Eclipse License','Apache License','Boost License'] },
    { name:'username',message:'*GitHub username:',validate:RequireAnswer },
    { name:'email', message:'*Email address:',validate:RequireAnswer },
    { name:'filePath', message:'Target Filepath (default is README.md in this directory):' }
];

//formats and writes readme to file at path fileName
function writeToFile(fileName, data) {
    fileStream.writeFile(fileName, generateMarkdown(data), function(error) { 
        if(error) {
            console.log(error);
        } else {
            console.log('Successfully saved at ' + fileName); 
        }
    });
}

//setup and run prompts
function init() {
    console.log('Starred (*) prompts require input.');
    var inquirer = require('inquirer');
    inquirer.prompt([
        ...questions
    ])
    .then((answers) => {
        //get filepath from input, set to default if none
        let fp = answers.filePath;
        if(fp.trim() === "") {
            fp = "README.md";
        }

        //save the formatted file
        writeToFile(fp,answers);
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
