// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
//const questions = ["What is the project title?", "How would you describe it?", "Install instructions?", "How to use?","Who created/contributed?","How to test?"];
inquirer
.prompt([
  {
    name: 'title',
    message: 'What is the project title?'
  },
])
.then(answers => {
  console.info('Answer:', answers.title);
});

inquirer
.prompt([
  {
    name: 'descrption',
    message: 'How would you describe the project?'
  },
])
.then(answers => {
  console.info('Answer:', answers.description);

});
  
inquirer
.prompt([
  {
    name: 'instructions',
    message: 'How do you install it?'
  },
])
.then(answers => {
  console.info('Answer:', answers.instructions);
});

inquirer
.prompt([
  {
    name: 'use',
    message: 'How to use this?'
  },
])
.then(answers => {
  console.info('Answer:', answers.use);
});

inquirer
.prompt([
  {
    name: 'contributions',
    message: 'Who can be credited for different elements of this?'
  },
])
.then(answers => {
  console.info('Answer:', answers.contributions);
});

inquirer
.prompt([
  {
    name: 'test',
    message: 'How do you test this?'
  },
])
.then(answers => {
  console.info('Answer:', answers.test);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
