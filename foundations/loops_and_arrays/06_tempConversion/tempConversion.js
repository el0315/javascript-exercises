const convertToCelsius = function (tempF) {
  let rawConverted = (tempF - 32) / (9/5)
  let roundConverted = (Math.round(rawConverted * 10) / 10);
  return roundConverted;
};

const convertToFahrenheit = function (tempC) {
  let rawConverted = (tempC * (9/5)) + 32;
  let roundConverted = Math.round(rawConverted * 10) / 10;
  return roundConverted;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
