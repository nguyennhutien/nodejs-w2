const inquirer = require('inquirer');
const chalk = require('chalk');
const red = chalk.red;
const green = chalk.green;
const blue = chalk.blue;

// const path = require('path');
// console.log('dirname:', path.dirname(__filename));
// console.log('basename:', path.basename(__filename));
// console.log('extname:', path.extname(__filename));

// console.log('resolve', path.resolve('./sub', '../test.txt'));

// console.log('join', path.join('.', 'sub', 'test.txt'));
// console.log('relative', path.relative(__dirname, '/Users/thanh'));
// console.log('relative', path.relative('/Users/thanh', __dirname));

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
