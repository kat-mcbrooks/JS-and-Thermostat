// const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.candies = [];
    this.discount = 0; 
  }
  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.map(candy => 
      totalPrice += candy.getPrice()
    );
    return totalPrice - this.discount;  
  }
  
   addItem(candy) {
     this.candies.push(candy)
  }
}

module.exports = ShoppingBasket;

// const candy = new Candy('mars', 3.50);
// const basket = new ShoppingBasket;
// console.log(basket);
// console.log(basket.candies);
// console.log(basket.addItem(candy));
// console.log(basket.candies);
// console.log(basket.getTotalPrice());