const Employee = require('./employee');

class Intern extends Employee {
    constructor(){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return this.Intern;
    }
}