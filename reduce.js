// The .reduce() method is a powerful way to process an array and return a single value.

// Sum on Array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

console.log(sum);

// Multiply all Numbers

const numbers2 = [2, 3, 4];

const product = numbers2.reduce((total, num) => total * num, 1);
console.log(product);
