const User = require('./user');

describe("User", () => {
  it('has a name', () => {
    const user = new User('Mat')
    expect(user.name).toEqual('Mat')
  });

  it('introduces themselves', () => {
    const user = new User('Mat')
    expect(user.getIntroduction()).toEqual('Hi, my name is Mat')
  })
});