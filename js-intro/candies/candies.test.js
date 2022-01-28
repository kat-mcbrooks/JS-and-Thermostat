const searchCandies = require('./candies');

describe('searchCandies', () => {
  it('returns Mars, Maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
  it('returns Mars, Maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
});