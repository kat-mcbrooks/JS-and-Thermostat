class UserBase {
  constructor(users) {
    this.users = users;
  };

  count() {
    return this.users.length;
  };

  getNames() {
    return this.users.map(user => user.name)
  };

  getIntroductions() {
    return this.users.map(user => 
      user.GetIntroduction()
      )
  }

} 

module.exports = UserBase;