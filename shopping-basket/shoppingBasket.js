const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.candies = [];
    // this.discount =
  }
   getTotalPrice() {
    let totalPrice = 0;
    this.candies.map(candy => 
      totalPrice += candy.price
      )
    return totalPrice;  
  }
  
   addItem(candy) {
     this.candies.push(candy)
     return this.candies
    //  totalPrice += candy.getPrice()
  }
}

module.exports = ShoppingBasket;

const candy = new Candy('mars', 3.50);
const basket = new ShoppingBasket;
console.log(basket);
console.log(basket.candies);
console.log(basket.addItem(candy));
console.log(basket.candies);
console.log(basket.getTotalPrice());