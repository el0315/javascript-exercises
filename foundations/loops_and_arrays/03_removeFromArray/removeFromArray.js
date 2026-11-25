const removeFromArray = function (arr, ...itemsToRemove) {
  newArray = [];
  for (const item of arr) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
