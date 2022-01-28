const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('initial temperature is 20', () => {
    const thermo = new Thermostat;
    expect(thermo.getTemperature()).toBe(20);
  });
  it('max temperature is 32 when power saving mode is off', () => {
    const thermo = new Thermostat;
    thermo.setPowerSavingMode(false); 
    for (let i = 0 ; i < 15 ; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toBe(32);
  });

  it('can decrease temperature down to the min temp of 10', () => {
    const thermo = new Thermostat;
    for (let i = 0 ; i < 13 ; i++) {
      thermo.down();
    }
    expect(thermo.getTemperature()).toBe(10);
  });

  it('max temperature is 25 when power saving mode is on', () => {
    const thermo = new Thermostat; 
    console.log(thermo.psmode) //just checking that psmode is on/true
    thermo.up();
    thermo.up();
    thermo.up();
    thermo.up();
    thermo.up();
    thermo.up();
    thermo.up();
    expect(thermo.getTemperature()).toBe(25);
  });
  
});