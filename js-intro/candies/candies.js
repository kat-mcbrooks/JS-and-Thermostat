const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Mars', price: 1.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (letters, max_price) => {
  return candies
  .filter(candy => candy.price < max_price)
  .filter(candy => candy.name.startsWith(letters))
  .map(candy => { return candy.name });
  };

console.log(searchCandies('Ma', 10));




module.exports = searchCandies