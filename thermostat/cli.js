
const Thermostat = require('./thermostat')
thermo1 = new Thermostat;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// for (let i= 0 ; i<5 ; i++) 

var recursiveAsyncReadLine = function () {
  rl.question('Enter command', (answer) => {
    if (answer == 'up') {
      thermo1.up(); 
    }
    else if (answer == 'down') {
      thermo1.down();
    }
    else if (answer == 'psm on') {
      thermo1.setPowerSavingMode(true);
    }
    else if (answer == 'psm off') {
      thermo1.setPowerSavingMode(false);
    }
    else if (answer == 'exit') {
      return rl.close();
    }
    console.log(thermo1.psmode);
    console.log(`Temperature is ${thermo1.temperature}`);
    recursiveAsyncReadLine();
  });
}
recursiveAsyncReadLine();