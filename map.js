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
