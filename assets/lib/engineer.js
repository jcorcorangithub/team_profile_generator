const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        const title = 'Engineer';
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return this.Engineer;
    }
}
