const convertToCelsius = function(n) {
  if (typeof n !== 'number') {
    throw new Error('Input must be a number');
  }
  return Math.round(((n - 32) * 5 / 9) * 10) / 10; // Round to 1 decimal place
};

const convertToFahrenheit = function(n) {
  if (typeof n !== 'number') {
    throw new Error('Input must be a number');
  }
  return Math.round(((n * 9 / 5) + 32) * 10) / 10; // Round to 1 decimal place

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
