const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }

    getRole(){
        return this.Manager;
    }
}

module.exports = Manager;