const Employee = require('../lib/employee');

describe('Employee', () => {
  describe('Initialization', () => {
    // creates new Employee object with provided parameters
    it('should create new employee and return as object', () => {
      const employee = new Employee('Tom', '1234', 'tom@mail.com');

      expect(employee.name).toEqual('Tom');
      expect(employee.id).toEqual('1234');
      expect(employee.email).toEqual('tom@mail.com');
    });
  });
 // checks getName() methos
  describe('getName', () => {
    it('should use getName method to return name', () => {
      const employee = new Employee('Tom', '1234', 'tom@mail.com');

      expect(employee.getName()).toBe('Tom');
    });
  });
// checks getID() method
  describe('getID', () => {
    it('should use getID method to return ID', () => {
      const employee = new Employee('Tom', '1234', 'tom@mail.com');

      expect(employee.getID()).toBe('1234');
    });
  });
// checks getEmail() method
  describe('getEmail', () => {
    it('should use getEmail method to return email', () => {
      const employee = new Employee('Tom', '1234', 'tom@mail.com');

      expect(employee.getEmail()).toBe('tom@mail.com');
    });
  });
// checks getRole() method
  describe('getRole', () => {
    it('should use getRole method to return role', () => {
      const employee = new Employee('Tom', '1234', 'tom@mail.com');

      expect(employee.getRole()).toBe('Employee');
    });
  });
});
