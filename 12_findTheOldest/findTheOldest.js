const findTheOldest = function(array) {
    let age = array.reduce((lastPerson, curPerson) => {
        let lastAge = getAge(lastPerson.yearOfBirth, lastPerson.yearOfDeath)
        let curAge = getAge(curPerson.yearOfBirth, curPerson.yearOfDeath)

        return lastAge < curAge ? curPerson : lastPerson;
    })
    return age;
};

    const getAge = function (birth, death) {
        if(!death){
            death = new Date().getFullYear();
        }
        return death - birth;
    }

// Do not edit below this line
module.exports = findTheOldest;
