// Create an array of names and use the filter method to keep only names shorter than 3 characters.
// Write a function taking a name and return it in uppercase
// Use the map method to apply this function to the array of names and return an array of uppercase names

const names = ["Anna", "Li", "Charlie", "Mary", "Jo"];

const isShorterThanThree = (name) => {
  return name.length < 3;
};

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

const getUppercased = (name) => {
  return name.toUpperCase();
};

const uppercaseNames = names.map(getUppercased);

console.log(uppercaseNames);

// Your friend provided you a list of phone numbers for a special promotion. Some entries are corrupted and not valid phone numbers.
// A valid phone number is no longer than 10 digits. Write a program using filter method to remove invalid entries from the list, keeping only valid phone numbers.
//  Use a helper function to check if a phone number is valid and th en filter the list based on this function.

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "AAAA#####AAAA#87@768767382672",
  "4766687363",
  "4563687363",
];

function isShorterThanTen(numbers) {
  return numbers.length <= 10;
}

const properNumbers = (numbers) => {
  return numbers.filter(isShorterThanTen);
};

const numbersShorterThanTen = properNumbers(numbers);

console.log(numbersShorterThanTen);

// Declare a function 'checkLength' that takes a phone number string as argument and returns true if contains 10 characters or less
// Declare a function 'filterLongNumbers' that takes an array of phone numbers. This function should return only numbers that contain 10 characters or less.
// Should make use of the checkLength function

const numbers1 = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd",
];

function checkLength(number) {
  return number.length <= 10;
}

function filterLongNumbers(numbers1) {
  return numbers1.filter(checkLength);
}

console.log(filterLongNumbers(numbers1));
console.log(filterLongNumbers(["4763687363", "7867867862"]));
console.log(filterLongNumbers([]));

// Write a function that takes a single name as an argument and returns a personalised message for that name in the format:
//"Hi [name]! 50% off our best candies for you today!"
// Then, use Array.map method to generate a list of personalised messages for an array of names.

const namesForMessage = ["Anna", "Laura", "Josh", "Min", "Karla"];

function generateMessage({ name, discount }) {
  return `Hi ${name}! ${discount}% off our best candies for your today`;
}

// Challenge
const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

console.log(namesAndDiscounts.map(generateMessage));
