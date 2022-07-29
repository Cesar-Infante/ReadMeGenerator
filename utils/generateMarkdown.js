// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.map(badge => {
    if (badge !== "Public Domain (No license)") {
      return `![License](https://img.shields.io/static/v1?label=License&message="${badge}&color=BLUE)`
    }
  })
  return license.join(" ")
}

/*
 * It takes an array of strings and returns a string with each item in the array on a new line and
 * preceded by an asterisk
 */
function renderListObject(licenseObject) {
  licenseObject = licenseObject.map(item => "* " + item)
  return licenseObject.join(" \n")
}


/* Taking the data from the user and returning a completed README. */
function generateMarkdown(data) {
  //changes values 
  const {projectTitle, description, installation, issues, contribution, licenses, deployed, github, email} = data;

  //Returns the completed README
  return `
  
# ${projectTitle}
${renderLicenseBadge(licenses)}
## Description
${description}
## Table of Contents
* [Installation](#installation)
* [Issues](#issues)
* [Licenses](#licenses)
* [Contribution](#contribution)
* [Deployed](#deployed)
* [Questions](#questions)
## Installation
${installation}
## Issues
${issues}
## Licenses
This project falls under the following license(s): \n
${renderListObject(licenses)}
## Contribution
${contribution}
## Deployed
Deployed URL: [Deployed-App](${deployed})
## Questions
If you have any questions, please contact me below: \n
Github: [${github}](https://github.com/${github}) \n
Email: ${email}
`;
}


module.exports = generateMarkdown;
