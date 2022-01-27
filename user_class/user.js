class User {
  constructor(name) {
    this.name = name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`
  }
};

module.exports = User;