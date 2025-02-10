// // .filter() lets us extract elements from an array meeting certain conditions
// //  It creates a new array containing elements satisfying a condition without modifying original

// let newArray = array.filter(callbackFunction);

// // array is the original array
// // callbackFunction is a function that runs for each element and returns true to keep element or false to discard

// // The callback function receives three parameters:

// array.filter((element, index, array) => {
//   return condition;
// });

let numbers = [10, 25, 33, 45, 50, 60];

let filteredNumbers = numbers.filter((num) => num > 30);
console.log(filteredNumbers);

// The .filter() method checks each element of the numbers array
// It keeps only the elements where num > 30

let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 45 },
];

let passingStudents = students.filter((student) => student.score >= 60);
console.log(passingStudents);

// Filter based on multiple conditions

let people = [
  { name: "John", age: 28, city: "New York" },
  { name: "Jane", age: 22, city: "Los Angeles" },
  { name: "Mike", age: 35, city: "New York" },
  { name: "Sarah", age: 40, city: "Chicago" },
];

let newYorkResidents = people.filter(
  (person) => person.city === "New York" && person.age > 25
);
console.log(newYorkResidents);

// Write a function taking an array of numbers and returning a new array with only even numbers

function filterEvenNumbers(arr) {
  return arr.filter((numbers) => numbers % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Write a function that filters words longer than 5 letters

function filterLongWords(words) {
  return words.filter((word) => word.length > 5);
}
console.log(filterLongWords(["apple", "banana", "cat", "elephant"]));

// Filter expensive products

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 700 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

function ExpensiveProducts() {
  return products.filter((item) => item.price > 55);
}
console.log(ExpensiveProducts(products));

// Filter Adults

let people2 = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 30 },
];

function filterAdults() {
  return people2.filter((person) => person.age >= 18);
}

console.log(filterAdults(people2));
