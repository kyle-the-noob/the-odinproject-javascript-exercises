const palindromes = function (string) {
    letters = 'abcdefghijklmnopqurtuvwxyz123456789'

    let filteredString = string.toLowerCase()
    .split("")
    .filter(char => letters.includes(char))
    .join("");

    let reversedString = filteredString.split("").reverse().join("");

    if(filteredString === reversedString) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
