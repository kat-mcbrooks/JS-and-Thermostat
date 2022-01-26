const UserBase = require('./userbase');
const User = require('./user');

describe('User class', () => {
  it('counts number of users', () => {
    const userBase = new UserBase([]); 
    expect(userBase.count).toBe(3);
  });
  it('gets all names', () => {
    const userBase = new UserBase([]); 
    expect(userBase.getNames()).toEqual([]);
  });
  it('introduces all users by name', () => {
    const userBase = new UserBase([]); 
    expect(userBase.getIntroductions()).toEqual([]);
  });
});