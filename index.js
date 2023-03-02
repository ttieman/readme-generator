
const inquirer = require('inquirer');   // these are variable for imports handled by the software
const fs = require('fs');
const generateMarkdown = require( "./utils/generateMarkdown" );


const fileName = "GENERATEDREADME.md";     //this is file name const 

const questions = [                             //array of questions for the software to prompt the user
    "What is the title of the project?",
    "Write a detailed description about the project!",
    "What is your Github Username?",
    "List the installation steps to use the project",
    "What are the use cases for this application?",
    "What license did you use?",
    "What is your email?",
    "What tests have been done with this project?"
    
];





   
    function generate(){    // this is the function that prompts the user then generates the file
    inquirer.prompt([
        {   
            type:"input",                   //each question is an object calling the inquirer.prompt function
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
    ]).then((response) => {   // after all the questions asked it will call a .then funtion that will handle the responses given in the prompt
        fs.writeFile(fileName, generateMarkdown(response), (error) => {  // this line will write the file using the responses and a generate markdown function i wrote and am importing
            if (error) {    // this is general error handling
                console.log(error);
            } else {
                console.log("commit logged!");   // this is conformation that the software was ran succesfully and the file has been generated 
         }
       });
    })
}
    function init() {   // this function is ran that will start and handle all of the functions of the software
        generate();
}

init();  // call init
