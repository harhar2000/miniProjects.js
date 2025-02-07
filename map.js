// Mapping is the process of transforming an array by applying a function to each element and creating a new array with the transformed values.
// .map() - Creates a new array without modifying the original, applies a function to each original element and returns a new array.

// const newArray = oldArray.map((element, index, array) => {
//   return newValue;
// });

// element -> Current element in array
// index -> (optional) index of current element
// array -> (optional) the original array

// Square Numbers in an array
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

// Convert strings in array to uppercase
const words = ["hello", "world", "javascript"];
const uppercaseWords = words.map((word) => word.toUpperCase());
console.log(uppercaseWords);

// Extract user names
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const userNames = users.map((user) => user.name);
console.log(userNames);

// Apply 10% discount to product objects while keeping their names unchanged
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 },
];

const discountedProducts = products.map((product) => ({
  name: product.name,
  price: product.price * 0.9,
}));
console.log(discountedProducts);

// Write a function taking an array of numbers and returning a new array where each number is doubled

function doubleNumber(numbers) {
  return numbers.map((number) => number * 2);
}
console.log(doubleNumber([1, 2, 3, 4]));

// Write a function taking an array of strings and returning a new array with '!' added to end of each string

function addExclamation(words) {
  return words.map((word) => word + "!");
}
console.log(addExclamation(["hello", "world"]));

// Given an array of objects representing people, return an array of their ages

const people = [
  { name: "John", age: 22 },
  { name: "Sarah", age: 30 },
  { name: "Mike", age: 25 },
];

function extractAges(people) {
  return people.map((people) => people.age);
}

console.log(extractAges(people));

// Given an array of product objects with 'price', return a new array where prices are formatted as strings prefixed with '£'

const items = [
  { name: "TV", price: 300 },
  { name: "Laptop", price: 1000 },
];

function formatPrices(items) {
  return items.map((item) => "£" + item.price);
}

console.log(formatPrices(items));
