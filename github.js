// const got = require('got');
import { got } from 'got'

const handleReceivedResponse = (response) => {
  const responseJSObject = JSON.parse(response.body);
  console.log(responseJSObject);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);