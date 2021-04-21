const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        const title = 'Intern';
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return this.Intern;
    }
}

module.exports = Intern;