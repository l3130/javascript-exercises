const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();

    return array.reduce((oldest, person) => {
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        if (!oldest || age > oldest.age) {
            return { ...person, age };
        }
        return oldest;
    }, null);

};

// Do not edit below this line
module.exports = findTheOldest;
