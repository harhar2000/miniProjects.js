// "Write a JavaScript class Thermostat that manages a thermostat with the following functionalities:

// The thermostat starts at an initial temperature of 20°C.
// It has an up method to increase the temperature and a down method to decrease it.
// The minimum temperature is 10°C.
// A Power Saving Mode (PSM) is enabled by default but can be turned off using setPowerSavingMode(true/false).
// When PSM is ON, the maximum temperature is 25°C.
// When PSM is OFF, the maximum temperature is 32°C.
// A reset method resets the temperature to 20°C.
// A getTemperature method returns the current temperature.
// An energyUsage method categorizes energy usage as follows:
// Below 18°C → "low-usage"
// 18°C to 25°C → "medium-usage"
// Above 25°C → "high-usage"

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.min_Temp = 10;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    // Sets maxTemp to 32, since PSM could be OFF
    // If PSM ON - lower temp to 25. Otherwise increase this.temperature by 1
    let maxTemp = this.MAX_TEMP_PSM_OFF;
    if (this.powerSavingMode) {
      maxTemp = this.MAX_TEMP_PSM_ON;
    }
    if (this.temperature < maxTemp) {
      this.temperature++;
    }
  }
  down() {
    if (this.temperature > this.min_Temp) {
      this.temperature--;
    }
  }
  setPowerSavingMode(state) {
    this.powerSavingMode = state;
    if (this.powerSavingMode && this.temperature > this.MAX_TEMP_PSM_ON) {
      this.temperature = this.MAX_TEMP_PSM_ON;
    }
  }

  reset() {
    this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

const thermostat = new Thermostat();

console.log(thermostat.getTemperature()); // return 20

thermostat.up();
thermostat.up();
console.log(thermostat.getTemperature()); // return 22

thermostat.down();
console.log(thermostat.getTemperature()); // return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0; i < 10; i++) {
  thermostat.up();
}

console.log(thermostat.getTemperature()); // return 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

thermostat.up();
console.log(thermostat.getTemperature()); // return 26

thermostat.reset();
console.log(thermostat.getTemperature()); // should be back to 20
