// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const fileName = "README.md"; 
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of the project?",
    "Write a detailed description about the project!",
    "",
    "List the installation steps to use the project",
    "What are the use cases for this application?",
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
        name:"description",
    },
    {
        type:"input",
        message:questions[2],
        name:"tableofcontents",
    },
    {
        type:"input",
        message:questions[3],
        name:"installation",
    },
    {
        type:"input",
        message:questions[4],
        name:"usage",
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

# Table of Contents:

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributors](#Contributors)
5. [License](#License)
6. [Tests](#Tests)
7. [Questions](#Questions)

# Description
${response.description}
    

    
# Installation
${response.installation}
    
# Usage
${response.usage}
    

# Contributors
${response.contributer}
    
# License
    
[${response.license} LICENSE](LICENSE.txt)


# Tests

# Questions


    
 `, (error) =>
    error ? console.log(error) : console.log("commit logged!")


)});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
