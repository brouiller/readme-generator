// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
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
    message: "GitHub username:",
    name: "github",
  },
  {
    type: "input",
    message: "Email:",
    name: "email",
  },
  {
    type: "input",
    message: "Filename:",
    name: "filename",
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      fs.appendFile(`${answers.filename}.md`, generate(answers), (err) =>
        err ? console.error(err) : console.log(`${answers.filename}.md was created.`)
      );
    });
}
init();
