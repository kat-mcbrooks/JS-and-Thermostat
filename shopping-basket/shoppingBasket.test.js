// const Candy = require('./candy');
const ShoppingBasket = require('./shoppingBasket')

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
    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it('adds multiple items', () => {
    const basket = new ShoppingBasket;
     basket.addItem(candyDouble);
     basket.addItem(candyDouble);
     basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(14.97);
  });

  it('adds multiple items and can apply discount', () => {
    const basket = new ShoppingBasket;
     basket.addItem(candyDouble);
     basket.addItem(candyDouble);
     basket.addItem(candyDouble);
     basket.applyDiscount(4);
    expect(basket.getTotalPrice()).toEqual(10.97);
  });
});