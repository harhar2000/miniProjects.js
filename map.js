// Mapping is the process of transforming an array by applying a function to each element and creating a new array with the transformed values.
// .map() - Creates a new array without modifying the original, applies a function to each original element and returns a new array.

// const newArray = oldArray.map((element, index, array) => {
//   return newValue;
// });

// element -> Current element in array
// index -> (optional) index of current element
// array -> (optional) the original array

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

const words = ["hello", "world", "javascript"];
const capitalisedWords = words.map((word) => word.toUpperCase());
console.log(capitalisedWords);
