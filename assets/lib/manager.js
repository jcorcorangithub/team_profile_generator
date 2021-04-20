const Employee = require('./employee');

class Manager extends Employee {
    constructor(){
        super(name, id, email);
        this.officeNumber  = officeNumber;
    }

    getRole(){
        return this.Manager;
    }
}