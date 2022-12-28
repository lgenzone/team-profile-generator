class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // return name
    getName () {
        return this.name;
    }
    // return ID
    getID () {
        return this.id;
    }
    // return email address
    getEmail () {
        return this.email;
    }
    // return role
    getRole () {
        return 'Employee'

    };
};
// export module
module.exports = Employee;
