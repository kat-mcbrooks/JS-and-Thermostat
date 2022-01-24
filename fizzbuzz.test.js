const fizzBuzz = require('./fizzBuzz')

describe("fizzBuzz", () => {
  it("should return FizzBuzz if number divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if number divisible only by 3 ", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return Buzz if number divisible only by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return number if number is not divisible by 3 or 5", () => {
    expect(fizzBuzz(4)).toBe(4);
  });
});
