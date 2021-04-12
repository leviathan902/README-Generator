// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const noLicense = "";

function renderLicenseBadge(license) {
  if(license === "MIT") {
    return `![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "MOZILLA") {
    return `![MOZILLA: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === "IBM") {
    return `![IBM: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
  } else if (license === "APACHE") {
    return `![APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else {
    return noLicense;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === "MOZILLA") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "IBM") {
    return `(https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === "APACHE") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return noLicense;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT") {
    return `[License: MIT]`;
  } else if (license === "MOZILLA") {
    return `[License: MPL 2.0]`;
  } else if (license === "IBM") {
    return `[License: IPL 1.0]`;
  } else if (license === "APACHE") {
    return `[License: APACHE]`;
  } else {
    return noLicense;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Creating README...");
  // console.log(data.installation);
  return `# ${renderLicenseBadge(data.license)}

# Description
${data.description}

# Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [Credit](#credit)

* [Tests](#tests)

* [License](#license)

* [Questions](#questions)

# Installation

Dependancies have to be installed in order to run the application: ${data.installation}

# Usage

Uses for this application: ${data.usage}

# Credit

Involved parties: ${data.credit}

# Tests

In order to run tests on this application, the following command needs to be run: ${data.test}

# License

This project is licensed under: 
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


# Questions

For any questions about the application, reach out to: ${data.username} or: ${data.email}.

`;
}

module.exports = generateMarkdown;
