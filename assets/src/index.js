const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: "Enter the manager's name: ",
        },
        {
            type: 'input',
            name: 'managerid',
            message: "Enter the manager's ID number: ",
        },
        {
            type: 'input',
            name: 'manageremail',
            message: "Enter the manager's e-mail address: ",
        },
        {
            type: 'input',
            name: 'managernumber',
            message: "Enter the manager's office phone number: ",
        },
        {
            type: 'list',
            name: 'otheremployee',
            message: "Please make a decision regarding the team: ",
            choices:['add an engineer','add an intern','finish building team and exit'],
        },
        {
            type: 'input',
            name: 'engineername',
            message: "Enter the engineer's name: ",
        },
        {
            type: 'input',
            name: 'engineerid',
            message: "Enter the engineer's ID: ",
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: "Enter the engineer's e-mail address: ",
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: "Enter the engineer's GitHub username: ",
        },
        {
            type: 'input',
            name: 'internname',
            message: "Enter the intern's name: ",
        },
        {
            type: 'input',
            name: 'internid',
            message: "Enter the intern's ID: ",
        },
        {
            type: 'input',
            name: 'internemail',
            message: "Enter the intern's e-mail address: ",
        },
        {
            type: 'input',
            name: 'internschool',
            message: "Enter the intern's school: ",
        },
        
    ]);
};

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
`



const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('./dist/index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();