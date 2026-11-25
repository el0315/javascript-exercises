const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 % 1 !== 0 ||
    num2 % 1 !== 0
  ) {
    return "ERROR";
  }
    const maxNum = num1 > num2 ? num1 : num2;
    const minNum = num1 > num2 ? num2 : num1;
    sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
      sum += i;
    }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
