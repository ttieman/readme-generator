// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const fileName = "README.md"; 
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of the project?",
    "Write a detailed statment about who the intended user would be!",
    "Write a overview of the functionality, and uses for the application!",
    "Whare are the primary features of the application?",
    "List the dependancies.",
    "What license did you use?",
    "How would you like to be addressed in the contributer section?"
];




// TODO: Create a function to write README file
inquirer.prompt([
    {   
        type:"input",
        message:questions[0],
        name:"title",
    },
    {
        type:"input",
        message:questions[1],
        name:"intendedUser",
    },
    {
        type:"input",
        message:questions[2],
        name:"functionality",
    },
    {
        type:"input",
        message:questions[3],
        name:"features",
    },
    {
        type:"input",
        message:questions[4],
        name:"dependencies",
    },
    {
        type:"input",
        message:questions[5],
        name:"license",
    },
    {
        type:"input",
        message:questions[6],
        name:"contributer",
    },
]).then((response) => {

    fs.writeFile(fileName ,
`
# ${response.title}

## Intended user:
${response.intendedUser}
    
## Overview:
${response.functionality}
    
## Features:
${response.features}
    
## Dependencies:
${response.dependencies}
    

## Contributors:
${response.contributer}
    
## License:
    
[${response.license} LICENSE](LICENSE.txt)
    
 `, (error) =>
    error ? console.log(error) : console.log("commit logged!")


)});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
