// const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket')
// double: 
const candyDouble = { 
  getName: () => 'Mars', 
  getPrice: () => 4.99
}

describe('ShoppingBasket', () => {
  it('gets total price begins 0', () => {
    const basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toBe(0);
  });

  it('adds item', () => {
    const basket = new ShoppingBasket;
    basket.addItem(candyDouble);
    console.log(candyDouble);
    console.log(basket.candies);
    console.log(basket.getTotalPrice())
    expect(basket.getTotalPrice()).toEqual(4.99);
  });
});