const Intern = require('../lib/intern');


describe('Intern', () => {
  it('should create a new intern and return as object', () => {
    const intern = new Intern('Sarah', '1234', 'sarah@mail.com', 'Harvard');
    // checks if the propertities of the created Intern object are correct
    expect(intern.name).toEqual('Sarah');
    expect(intern.id).toEqual('1234');
    expect(intern.email).toEqual('sarah@mail.com');
    expect(intern.school).toEqual('Harvard');
  });
});

// tests getSchool method
describe('getSchool', () => {
  it('should use getSchool method to return attended school', () => {
    const intern = new Intern('Sarah', '1234', 'sarah@mail.com', 'Harvard');
    
    expect(intern.getSchool()).toBe('Harvard');
  });
});

// tests getRole method
describe('getRole', () => {
  it('should use getRole method to return role', () => {
    const intern = new Intern('Sarah', '1234', 'sarah@mail.com', 'Harvard');

    expect(intern.getRole()).toBe('Intern');
  });
});



