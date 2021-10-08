// returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      break;
    case "None":
      return "";
      break;
  }
}

// returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
      break;
    case "APACHE 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      return "";
      break;
  }
}

// returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `
<a href="license"></a>

## License

This application is covered under the [${license}]${renderLicenseLink(
        license
      )} license.`;
      break;
    case "APACHE 2.0":
      return `
<a href="license"></a>

## License

This application is covered under the [${license}]${renderLicenseLink(
        license
      )} license.`;
      break;
    case "GPL 3.0":
      return `
<a href="license"></a>

## License

This application is covered under the [${license}]${renderLicenseLink(
        license
      )} license.`;
      break;
    case "BSD 3":
      return `
<a href="license"></a>

## License

This application is covered under the [${license}]${renderLicenseLink(
        license
      )} license.`;
      break;
    case "None":
      return "";
      break;
  }
}

// returns the license section of table of contents
// If there is no license, returns an empty string
function renderLicenseTableOfContents(license) {
  if (license === "None") {
    return "";
  } else {
    return `
- [License](#license)`;
  }
}
//generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

${renderLicenseBadge(answers.lic)}${renderLicenseLink(answers.lic)}

${answers.desc}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)
${renderLicenseTableOfContents(answers.lic)}

<a href="installation"></a>

## Installation

${answers.instr}

<a href="usage"></a>

## Usage

${answers.usage}

<a href="contributing"></a>

## Contributing

${answers.contr}

<a href="tests"></a>

## Tests

${answers.test}

<a href="questions"></a>

## Questions

<a href="https://github.com/${answers.github}">Github for ${answers.github}</a>

<a href="mailto:${answers.email}">Send me an email if you have any questions.</a>
${renderLicenseSection(answers.lic)}
`;
}

module.exports = generateMarkdown;
