const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = [];
const teamName; 

const promptUser = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'teamName',
                message: "Please enter your team's name: ",
            },
            {
                type: 'input',
                name: 'name',
                message: "Enter the manager's name: ",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the manager's ID number: ",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the manager's e-mail address: ",
            },
            {
                type: 'input',
                name: 'number',
                message: "Enter the manager's office phone number: ",
            },
            ])
        .then(function(data){
            teamName = data.teamName;
            const manager = new Manager(data.name, data.id, data.email, data.number);
            teamArray.push(manager);
        })
    
};

const addTeamMembers = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'addedMember',
            message: "Would you like to add a team member?: ",
            choices:['I would like to add an engineer','I would like to add an intern',
                                    'I would like to finish building team and exit'],
        },
     ])
    .then(function(data){
        switch (data){
            case 'I would like to add an engineer':
                addEngineer();
                break;
            case 'I would like to add an intern':
                addIntern();
                break;
            case 'I would like to finish building my team and exit':
                buildTeam();
                break;
        }
    })    
};

const addEngineer = () => {
    inquirer
    .prompt([

    ])
    .then(function(data){

    })
};

const addIntern = () => {
    inquirer
    .prompt([

    ])
    .then(function(data){

    })
};


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