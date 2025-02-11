// Given an array of numbers, return a new array where each number is doubled.

const numbers = [1, 2, 3, 4, 5];

doubled = numbers.map((num) => num * 2);
console.log(doubled);

// Given an array of names, return a new array with each name in uppercase.

const names = ["alice", "bob", "charlie"];

inUppercase = names.map((item) => item.toUpperCase());
console.log(inUppercase);

// Given an array of objects representing users, return an array containing only their emails.
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
];

emails = users.map((user) => user.email);
console.log(emails);

// Convert an array of temperature values in Celsius to Fahrenheit using the formula F = C * 9/5 + 32

const celsiusTemps = [0, 10, 20, 30, 40];

fahrenheit = celsiusTemps.map((temp) => temp * (9 / 5) + 32);
console.log(fahrenheit);

// Given an array of words, return a new array containing the lengths of each word.

const words = ["apple", "banana", "cherry"];
lengths = words.map((word) => word.length);
console.log(lengths);

// Given an array of numbers, return an array containing only the even numbers.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
even = numbers2.filter((num) => num % 2 === 0);
console.log(even);

// Given an array of ages, filter out the ages that are less than 18.
const ages = [12, 17, 18, 21, 15, 30, 25];

lessThan10 = ages.filter((num) => num < 18);
console.log(lessThan10);

// Given an array of words, return only the words that have more than 5 letters.
const words2 = ["apple", "banana", "kiwi", "watermelon"];

moreThan5Long = words2.filter((word) => word.length > 5);
console.log(moreThan5Long);

// Given an array of numbers, filter out the numbers that are greater than 50.

const numbers3 = [10, 55, 23, 78, 45, 67];

greaterThan50 = numbers3.filter((num) => num > 50);
console.log(greaterThan50);

// Given an array of objects representing books, filter out books that are not in stock
const books = [
  { title: "Book A", inStock: true },
  { title: "Book B", inStock: false },
  { title: "Book C", inStock: true },
];

inStock = books.filter((book) => book.inStock === true);
console.log(inStock);
