// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const noLicense = "";

function renderLicenseBadge(license) {
  if(License === "MIT") {
    return `![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (License === "MOZILLA") {
    return `![MOZILLA: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (License === "IBM") {
    return `![IBM: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
  } else if (License === "APACHE") {
    return `![APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else {
    return noLicense;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(License === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (License === "MOZILLA") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (License === "IBM") {
    return `(https://opensource.org/licenses/IPL-1.0)`;
  } else if (License === "APACHE") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return noLicense;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(License === "MIT") {
    return `[License: MIT]`;
  } else if (License === "MOZILLA") {
    return `[License: MPL 2.0]`;
  } else if (License === "IBM") {
    return `[License: IPL 1.0]`;
  } else if (License === "APACHE") {
    return `[License: APACHE]`;
  } else {
    return noLicense;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Creating README...")
  return `# ${renderLicenseBadge(data.license)}

# Description
${data.Description}

# Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [Credit](#credit)

* [Tests](#tests)

* [License](#license)

* [Questions](#questions)

# Installation

Dependancies have to be installed in order to run the application: ${data.Installation}

# Usage

Uses for this application: ${data.Usage}

# Credit

Involved parties: ${data.Credit}

# Tests

In order to run tests on this application, the following command needs to be run: ${data.Test}

# License

This project is licensed under: 
${renderLicenseSection(data.License)}
${renderLicenseLink(data.License)}


# Questions

For any questions about the application, reach out to: ${data.GitHubUser} or: ${data.Email}.

`;
}

module.exports = generateMarkdown;
