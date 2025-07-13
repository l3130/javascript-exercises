const getTheTitles = function(books) {
    // Check if the input is an array
    if (!Array.isArray(books)) {
        return [];
    }
    
    // Map through the array of book objects and return their titles
    return books.map(book => book.title);

};

// Do not edit below this line
module.exports = getTheTitles;
