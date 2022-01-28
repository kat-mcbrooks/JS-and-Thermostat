// const got = require('got');
import { got } from 'got'

const handleReceivedResponse = (response) => {
  const responseJSObject = JSON.parse(response.body);
  console.log(responseJSObject);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);
// I think then() is used to callback to handleReceivedResponse so that this is not executed until after the url is visited?
// then() method returns a promise. it takes up to 2 optionals arguments but here, it is just given one argument which i think becomes the onFulfilled value. Syntax as follows:
// p.then(onFulfilled[, onRejected]);

// p.then(value => {
//   // fulfillment
// }, reason => {
//   // rejection
// });