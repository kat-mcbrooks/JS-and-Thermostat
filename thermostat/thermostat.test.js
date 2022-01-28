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

  it('resets temperature to 20', () => {
    const thermo = new Thermostat;
    thermo.up();
    thermo.up();
    thermo.reset();
    expect(thermo.getTemperature()).toBe(20);
  });

  it('current energy usage is high when temperature > 25', () => {
    const thermo = new Thermostat;
    thermo.setPowerSavingMode(false);
    for (let i = 0; i < 6; i++) {
      thermo.up();
    }
     expect(thermo.getTemperature()).toBe(26);
     expect(thermo.energy_usage()).toEqual('high-usage');
  });

  it('current energy usage is medium when 18 <= temperature <=25', () => {
    const thermo = new Thermostat;
    expect(thermo.energy_usage()).toEqual('medium-usage');
  });

  it('current energy usage is low when temperature < 18', () => {
    const thermo = new Thermostat;
    thermo.down();
    thermo.down();
    thermo.down();
    expect(thermo.getTemperature()).toBe(17);
    expect(thermo.energy_usage()).toEqual('low-usage');
  });
  
  
});