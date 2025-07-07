const leapYears = function(year) {
  // Check if the year is divisible by 4
  if (year % 4 === 0) {
    // If it is a century year, check if it is divisible by 400
    if (year % 100 === 0) {
      return year % 400 === 0; // Century years are leap years only if divisible by 400
    }
    return true; // Non-century years that are divisible by 4 are leap years
  }
  return false; // All other years are not leap years

};

// Do not edit below this line
module.exports = leapYears;
