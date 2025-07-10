const palindromes = function (str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;

};

// Do not edit below this line
module.exports = palindromes;
