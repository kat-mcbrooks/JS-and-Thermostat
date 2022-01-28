const addToBatch = (array, num) => {
  if (array.length <= 5 ) {
    return array.concat(num);}
  else return array;
}
//console.log(addToBatch([3, 4, 5], 5));
//console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); 

const checkLength = (phone) => {
  if (phone.length <= 10) {return true;}
}

const filterLongNumbers = (phones) => {
  return phones.filter(checkLength); 
}

const phones = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

// console.log(filterLongNumbers(phones));
const names = ['jake', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
  return names.map(name => {
    return 'Hi ' + name + '! 50% off our best candies for you today!';
  });
}

console.log(generateMessages(names)); 
// const message = (name) => {
//   return ''

// }
