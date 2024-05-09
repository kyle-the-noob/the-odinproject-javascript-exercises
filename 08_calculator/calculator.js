const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
return num1 - num2;
};

const sum = function(arrays) {
  let arraySum = arrays.reduce((a, b) => a + b, 0);
return arraySum;
};

const multiply = function(array) {
  let multiArr = array.reduce((a, b) => a * b);
  return multiArr
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num == 0) {
    return 1
  } else {
  let result = 1;
    while (num > 1) {
      result *= num;
      num--;
    }
    return result;}
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
