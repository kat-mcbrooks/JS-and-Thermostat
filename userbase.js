const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {
  constructor(users) {
    this.users = users;
  }

  getNames() {
    return this.users;
  }

  getIntroductions() {
    return this.users
    .map(user => {
      return 'Hi, my name is' + user; 
    });
  }
}
module.exports = UserBase;