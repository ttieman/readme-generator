// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require( "./utils/generateMarkdown" );


const fileName = "README.md"; 
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of the project?",
    "Write a detailed description about the project!",
    "What is your Github Username?",
    "List the installation steps to use the project",
    "What are the use cases for this application?",
    "What license did you use?",
    "What is your email?",
    "What tests have been done with this project?"
    
];





    // TODO: Create a function to write README file
    
    // TODO: Create a function to initialize app
    function generate(){
    inquirer.prompt([
        {   
            type:"input",
            message:questions[0],
            name:"title",
        },
        {
            type:"editor",
            message:questions[1],
            name:"description",
     },
     {
         type:"editor",
         message:questions[3],
         name:"installation",
        },
        {
            type:"editor",
            message:questions[4],
            name:"usage",
        },
        {
            type:"list",
            message:questions[5],
            name:"license",
            choices:['MIT','Apache',"IBM","Mozilla","Perl","SIL"],
        },
        {
            type:"input",
            message:questions[2],
            name:"github",
        },
        {
            type:"input",
            message:questions[6],
            name:"contributer",
        },
        {
            type: "editor",
            message:questions[7],
            name:"tests",
        },
    ]).then((response) => {
        fs.writeFile(fileName, generateMarkdown(response), (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("commit logged!");
         }
       });
    })
}
    function init() {
        generate();
}
// Function call to initialize app
init();
