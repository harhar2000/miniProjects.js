// Write a program that starts with an array of numbers. Concatenate an element to the array and log the updated array and its length.
// Define a function taking two arguments: an array and a number. The function should add the number to the array if the length of array is less than 5, returning the updated array.

let array = [1274, 1275, 1276];

array = array.concat(1277);
console.log(array);
console.log(array.length);

function addToArray(array, orderId) {
  if (array.length < 5) {
    return array.concat(orderId);
  }
  return array;
}

console.log(addToArray([1274, 1275], 1276)); // [1274, 1275, 1276]
console.log(addToArray([1274, 1275, 1276, 1277, 1278], 1279)); // [1274, 1275, 1276, 1277, 1278]
console.log(addToArray([], 1274)); // [1274]

module.exports = addToArray;
