const add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
	
};

const subtract = function(x = 0, y = 0) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return x - y;
	
};

const sum = function(array) {
  if (!Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }
  return array.reduce((accumulator, currentValue) => {
    if (typeof currentValue !== 'number') {
      throw new Error('All elements in the array must be numbers');
    }
    return accumulator + currentValue;
  }, 0);
	
};

const multiply = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a * b;

};

const power = function(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return Math.pow(base, exponent);
	
};

const factorial = function(n) {
  if (typeof n !== 'number' || n < 0) {
    throw new Error('Argument must be a non-negative number');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
