// import Employee module
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    };
    // return GitHub profile
    getGithub () {
        return this.github;
    };
    // return role (Engineer)
    getRole () {
        return 'Engineer'
    };
};
// export module
module.exports = Engineer; 
