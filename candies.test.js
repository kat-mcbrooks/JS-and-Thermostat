const searchCandies = require('./candies');

describe('searchCandies function', () => {
  it('returns Mars and Malteasers', () => {
    expect(searchCandies('ma', 10)).toEqual([  'Maltesers', 'Mars' ])
  });

  it('returns Mars', () => {
    expect(searchCandies('ma', 2)).toEqual([ 'Mars' ])
  });

  it('returns Skittles, Starburst', () => {
    expect(searchCandies('s', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  });

  it('returns skittles only', () => {
    expect(searchCandies('s', 4)).toEqual([ 'Skitties', 'Skittles' ])
  });

});
