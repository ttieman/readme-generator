
function renderLicenseBadge(license) {   // this function renders the license badges

  var badge = `![${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  return badge;
}


function renderLicenseLink(license) { //this function renders the links for the license and return a empty string if no response was given
  if (license !== ""){
   var licLink = `(https://opensource.org/licenses/${license})}`;
   return licLink;
}else{
  return "";
}
}



function generateMarkdown(data) {    // this is the function that will generate all the markdown with all the appropriate data in in place this template is for general use and can be changed 
  var lic = data.license              // to best fit the users needs
  return `


# ${data.title} 

## ${renderLicenseBadge(lic)}
  
# Table of Contents:
  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributors](#contributors)
  5. [License](#license)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
## Description 

<a name="description"></a>

${data.description}
      
  
      
## Installation 

<a name="installation"></a>
 
${data.installation}
      
## Usage 

<a name="usage"></a>
 
${data.usage}
      
  
## Contributors 

<a name="contributors"></a>

 ${data.github}
  
## License 

<a name="license"></a>
 
### This application is covered under the [${data.license} LICENSE]${renderLicenseLink(lic)},
  and should be referred to for any questions about legal licensure considering 
  this application. 
  
  
## Tests 

<a name="tests"></a>

### ${data.tests}
  
## Questions 

<a name="questions"></a>
  
### If you have and questions my git hub user is [${data.github}](https://github.com/${data.github})
  
### My email is ${data.contributer} if you wish to reach out to me directly.
  
      
   `
  


}

module.exports = generateMarkdown;   // this exports the generate markdown function to be imported in index.js
