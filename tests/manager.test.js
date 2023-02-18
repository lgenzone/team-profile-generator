// import Manager module
const Manager = require('../lib/manager');

describe('Manager', () => {
  describe('Initialization', () => {
    
    it('should create a Manager object with a name, id, email, and office number', () => {
      const manager = new Manager('Riley', '1', 'riley@mail.com', '100');
      // checks if the properties of the created Manager object are correct
      expect(manager.name).toEqual('Riley');
      expect(manager.id).toEqual('1');
      expect(manager.email).toEqual('riley@mail.com');
      expect(manager.officeNumber).toEqual('100');
    });
  });

  describe('getRole', () => {
    // checks if getRole method returns correct role for Manager object
    it('should return Manager as the role', () => {
        // creates a new Manager object with the given parameters
      const manager = new Manager('Riley', '1', 'riley@mail.com', '100');
       // checks if getRole method returns correct role for the created Manager object
      expect(manager.getRole()).toEqual('Manager');
    });
  });
});

