const Employee = require('./employee');

class Engineer extends Employee {
    constructor(){
        super(name, id, email);
        this.github  = github;
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return this.Engineer;
    }
}
