const convertToCelsius = function(farenheit) {
  let celcius = (farenheit - 32) * 5/9 // converst farenheit to celcius

  return temperature = Math.round(celcius * 10)/10 ;//return celcius that has been rounded up to 1 decimal point
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = celcius * (9/5) + 32 ;// converts celcius to fahrenheit
  return temperature = Math.round(fahrenheit *10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
