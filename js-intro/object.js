//this is an object
const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// console.log(person.address.city);
// console.log(person.hobbies[1]);

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount:  6 }
];

const generateMessages = (people) => {
  return people.map(person => {
    return 'Hi ' + person.name + '! ' + person.discount + '% off our best candies for you today!';
  });
}
console.log(generateMessages(namesAndDiscounts));
