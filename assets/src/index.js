//const Employee = require('../lib/employee')
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = [];
let teamName = ""; 

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
            addTeamMembers();
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
            switch (data.addedMember){
                case 'I would like to add an engineer':
                    addEngineer();
                    break;
                case 'I would like to add an intern':
                    addIntern();
                    break;
                case 'I would like to finish building team and exit':
                    buildTeam();
                    break;
            }
        });    
}

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the engineer's name: ",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the engineer's ID: ",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the engineer's e-mail address: ",
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the engineer's GitHub username: ",
            },
        ])
        .then(function(data){
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            teamArray.push(engineer);
            addTeamMembers();
        })
};

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the intern's name: ",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the intern's ID: ",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the intern's e-mail address: ",
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the intern's school: ",
            },
        ])
        .then(function(data){
            const intern = new Intern(data.name, data.id, data.email, data.school);
            teamArray.push(intern);
            addTeamMembers();
        })
};


const buildTeam = () => {
    const completehtml = [];
    // startOfhtml will be the first element in the completehtml array
    const startOfHTML = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>${teamName}</title>
</head>
<body>
    <h1 class="banner-bar">${teamName}</h1>

    <div class="card-container">
`
    completehtml.push(startOfHTML);

    teamArray.forEach((member) => {
        let section = `
        <div class="member-card">
            <div class="card-top">
                <h2>${member.name}</h2>
                <h3>Title: ${member.title}</h3>
            </div>
            <div class="card-bottom">
                <p>ID: ${member.id}</p>
                <p>e-mail adress: <a href="mailto:${member.email}">${member.email}</a>></p>
        `
        if (member.officeNumber) {
            section += `
                <p>${member.officeNumber}</p>
            `
        }
        if (member.github) {
            section += `
                <p>GitHub: <a href="https://github.com/${member.github}">${member.github}</a></p>
            `
        }
        if (member.school) {
            section += `
                <p>School: ${member.school}</p>
            `
        }
        section += `   
            </div>
        </div>
        `
        // section will be added elements in the completehtml array, each one represting the html content for each member
        completehtml.push(section);
    });

    // this will be the last element of the completehtml array
    const endOfHTML = `
    </div>
    <script src = "script.js"></script>
    </body>
    </html>
    `
    completehtml.push(endOfHTML);

    fs.writeFile('../dist/index.html', completehtml.join(''), (err) =>  err ? console.error(err) : console.log("Success!"));
}
  
promptUser();