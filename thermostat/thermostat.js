class Thermostat {
  constructor() {
    this.temperature = 20
    this.psmode = true // power saving mode begins on/true
  }
  up() { 
    if (this.temperature < 25 && this.psmode) {  // sets max temp to 25 when psmode is on/true
      this.temperature += 1; 
    }
    else if (this.temperature < 32 && !this.psmode) { // sets max temp to 32 when psmode is off/false
      this.temperature += 1; 
    }
  }
  
  down() {
    if (this.temperature > 10) { //sets minimum temp. to 10
      this.temperature -= 1;
    }
  }
  getTemperature() {
    return this.temperature;
  }
  setPowerSavingMode(status) {
     this.psmode = status;
    }
  }
module.exports = Thermostat;