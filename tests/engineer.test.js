const Engineer = require('../lib/engineer');



describe('Engineer', () => {
  it('should create an Engineer object', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'johngithub');
    // checks if the properties of the created Engineer object are correct
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('john@example.com');
    expect(engineer.github).toBe('johngithub');
  });

  // checks getGithub() method
  it('should return the engineer GitHub profile', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'johngithub');

    expect(engineer.getGithub()).toBe('johngithub');
  });
 // checks getRole() method
  it('should return the engineer role as Engineer', () => {
    const engineer = new Engineer('John', 1, 'john@example.com', 'johngithub');

    expect(engineer.getRole()).toBe('Engineer');
  });
});
