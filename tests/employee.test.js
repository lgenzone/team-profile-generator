const { it } = require('node:test');
const { describe } = require('yargs');
const Employee = require('../lib/employee'); 

// creates employee object
describe('Employee', () => {
    it('should create new employee and return as object', () => {
        const employee = new Employee('Tom', '1234', 'tom@mail.com');

        expect(employee.name).toEqual('Tom');
        expect(employee.id).toEqual('1234');
        expect(employee.email).toEqual('tom@mail.com');
    })
});

// tests getName method
describe('getName', () => {
    it('should use getName method to return name', () => {
        const employee = new Employee('Tom', '1234', 'tom@mail.com');

        expect(employee.getName()).toBe('Tom');
    })
});

// tests getID method
describe('getID', () => {
    it('should use getID method to return ID', () => {
        const employee = new Employee('Tom', '1234', 'tom@mail.com');

        expect(employee.getID()).toBe('1234');
    })
});
// tests getEmail method
describe('getEmail', () => {
    it('should use getEmail method to return email', () => {
        const employee = new Employee('Tom', '1234', 'tom@mail.com');

        expect(employee.getEmail()).toBe('tom@mail.com');
    })
});

// tests getRole method
describe('getRole', () => {
    it('should use getRole method to return role', () => {
        const employee = new Employee();

        expect(employee.getRole()).toBe('Employee');
    })
});