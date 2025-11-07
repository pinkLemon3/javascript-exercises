const convertToCelsius = function (Fahrenheit) {
  let celsius = Math.round((Fahrenheit - 32) * 5 / 9 * 10) / 10
  return celsius;
};

const convertToFahrenheit = function (Celsius) {
  let fahrenheit = Math.round((Celsius * 9 / 5 + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
