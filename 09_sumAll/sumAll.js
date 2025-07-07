const sumAll = function(a, b) {
  // Check if both inputs are numbers and greater than or equal to 0
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return 'ERROR';
  }

  // Ensure a is less than or equal to b
  if (a > b) {
    [a, b] = [b, a];
  }

  // Calculate the sum of all integers from a to b
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
