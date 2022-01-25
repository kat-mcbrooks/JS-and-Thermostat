
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

const searchCandies = (letters, max) => {
  return candies
  .filter(candy => {
    return candy.name.toLowerCase().startsWith(letters.toLowerCase()
    );
  }).filter(candy => { //filtering again to check max price condition on the new filtered array
    return candy.price <= max;
  }).map(candy => {
    // console.log(candy.name);
    return candy.name;
  }); 
}

module.exports = searchCandies;