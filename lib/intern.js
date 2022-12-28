// import Employee module
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        // call constructor of parent class (Employee)
        super (name, id, email);
        this.school = school; 
    };
    // return attended school
    getSchool () {
        return this.school;
    };
    // return role (Intern)
    getRole () {
        return 'Intern';
    }; 
}; 
// export module
module.exports = Intern;