const UserBase = require('./userbase')
const User = require('./user')

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

describe('userbase class', () => {
  it('is constructed with users', () => {
    const userBase = new UserBase(users);
    expect(userBase.users).toEqual(users);
  });
  
  it('counts users', () => {
    const userBase = new UserBase(users);
    expect(userBase.count()).toBe(3);
  });
  
  it('gets all users\' names', () => {
    const userBase = new UserBase(users);
    expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie']);
  });
  
  it('gets all users\' introductions', () => {
    const userBase = new UserBase(users);
    expect(userBase.getIntroductions()).toEqual(
      [
        'Hi, my name is Uma',
        'Hi, my name is Josh',
        'Hi, my name is Ollie'
      ]
    );
  });


})
