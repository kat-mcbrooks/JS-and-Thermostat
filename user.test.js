const User = require('./user');

describe('User class', () => {
  it('gets name', () => {
    const user = new User('Julie');
    expect(user.getName()).toBe('Julie');
  });
  it('introduces user', () => {
    const user = new User('Julie');
    expect(user.getIntroduction()).toBe('Hi, my name is Julie');
  });
});