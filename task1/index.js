const inquirer = require('inquirer');
const chalk = require('chalk');
const red = chalk.red;
const green = chalk.green;
const blue = chalk.blue;

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
  {
    type: 'input',
    name: 'yearOfBirth',
    message: "What's your year of birth?",
  },
  {
    type: 'input',
    name: 'hometown',
    message: "What's your home town?",
  },
];

inquirer.prompt(questions).then(answers => {
  let name = answers.name;
  let hometown = answers.hometown;
  let yearOfBirth = answers.yearOfBirth;

  // calculate age
  let dob = new Date(yearOfBirth, 0, 1);
  let dobMilisecond = dob.getTime();
  let ageISO = new Date(Date.now() - dobMilisecond);
  let age = Math.abs(ageISO.getUTCFullYear() - 1970);

  console.log(`Thank you. Hello ${red(name)}, so you are ${green(age)} year old and from ${blue(hometown)}.`);
});
