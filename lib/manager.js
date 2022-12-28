// import Employee module
const Employee = require('./Employee');


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // call constructor of parent class (Employee)
        super (name, id, email);
        this.officeNumber = officeNumber;
    };
    // return role (Manager)
    getRole () {
        return 'Manager';
    };
};
// export module
module.exports = Manager;