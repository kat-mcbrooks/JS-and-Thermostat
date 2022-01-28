const sayHello = (name) => {
  return `Hello ${name}`;
}

// console.log(sayHello('Sarah'));

const fizzBuzz = (num) => {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  }
  else if (num % 5 == 0) {
    return "Buzz";
  }
  else if (num % 3 == 0) {
    return "Fizz";
  }
  else {
    return num;
  }
  }

  // console.log(fizzBuzz(15));

  const fizzBuzzLoop2 = (num) => {
    for (let i = 1; i <= num; i++) {
      console.log("Fizzbuzz result for " + i + " is " + fizzBuzz(i));
    }
  }
    fizzBuzzLoop2(50);


  const fizzBuzzLoop = (num) => {
    for (let i = 1; i <= num; i++) {
     if( i % 3 == 0 && i % 5 == 0) {
       console.log('FizzBuzz result for ' + i + ' is FizzBuzz');
     }
     else if(i % 3 == 0) {
      console.log('FizzBuzz result for ' + i + ' is Fizz');
     }
     else if (i % 5 == 0) {
      console.log('FizzBuzz result for ' + i + ' is Buzz');
     }else {
      console.log('FizzBuzz result for ' + i + ' is ' + i);
     }
    }
  }

  //console.log(fizzBuzzLoop(50))
const isValidLength = phoneNumber => {
  const validLength = 10;
  if (phoneNumber.length === validLength) {
    return true;
  } 
  else {
    return false;
  }
}
// console.log(isValidLength('00'));
// console.log(isValidLength('0011223344'));

const notifyByEmail = (email) => {
  return 'Email sent to: ' + '<' + email.toUpperCase() + '>'; 
}

const notifyByText = (phone) => {
  return 'Text sent to: ' + '<' + phone + '>';
}
const notify = (method, notifyFunction) => {
  return notifyFunction(method);
}

console.log(notifyByEmail('kbrooks@gmail.com'));
console.log(notify('kbrooks@gmail.com', notifyByEmail));
console.log(notify('07985', notifyByText));
