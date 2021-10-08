const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Title:",
      name: "title",
    },
    {
      type: "input",
      message: "Description:",
      name: "desc",
    },
    {
      type: "input",
      message: "Installation Instructions:",
      name: "instr",
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage",
    },
    {
      type: "input",
      message: "Contributing:",
      name: "contr",
    },
    {
      type: "input",
      message: "Tests:",
      name: "test",
    },
    {
      type: "list",
      message: "License:",
      name: "lic",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((answers) => {
          switch (answers.lic) {
            case "MIT":
              licBadge =
                "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
              break;
            case "APACHE 2.0":
              licBadge =
                "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
              break;
            case "GPL 3.0":
              licBadge =
                "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
              break;
            case "BSD 3":
              licBadge =
                "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
              break;
            case "None":
              licBadge = "0 - 59";
              break;
          }
    fs.appendFile(
    `${answers.title}README.md`,
`# ${answers.title}

${licBadge}

${answers.desc}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)

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

<a href="https://github.com/${answers.github}">Github</a>

<a href="mailto:${answers.email}">Email</a>

<a href="license"></a>

## License

This application is covered under the ${answers.lic} license.
`,
    (err) => (err ? console.log(err) : console.log("README created."))
  )})
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
