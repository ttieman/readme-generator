// If there is no license, return an empty string
function renderLicenseBadge(license) {

  var badge = `![${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== ""){
   var licLink = `(https://opensource.org/licenses/${license})}`;
   return licLink;
}else{
  return "";
}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var lic = data.license
  return `


# ${data.title} 

## ${renderLicenseBadge(lic)}
  
# Table of Contents:
  
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributors](#Contributors)
  5. [License](#License)
  6. [Tests](#Tests)
  7. [Questions](#Questions)
  
## Description <a name="Description"></a>
  ${data.description}
      
  
      
## Installation <a name="Installation"></a>
  ${data.installation}
      
## Usage <a name="Usage"></a>
  ${data.usage}
      
  
## Contributors <a name="Contributors"></a>

 ${data.github}
  
## License <a name="License"></a>
  ### This application is covered under the [${data.license} LICENSE]${renderLicenseLink(lic)},
  and should be referred to for any questions about legal licensure considering 
  this application. 
  
  
## Tests <a name="Tests"></a>

### ${data.tests}
  
## Questions <a name="Questions"></a>
  
### If you have and questions my git hub user is [${data.github}](https://github.com/${data.github})
  
### My email is ${data.contributer} if you wish to reach out to me directly.
  
      
   `
  


}

module.exports = generateMarkdown;
