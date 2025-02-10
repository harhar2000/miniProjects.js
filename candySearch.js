// Write a function that searches for candies based on a given prefix (first few letters) and a maximum price.
// The function should return a list of candy names that start with the specified prefix and have a price lower than the given maximum.

const candies = [
  { name: "Aero", price: 1.99 },
  { name: "Skitties", price: 2.99 },
  { name: "Mars", price: 1.49 },
  { name: "Maltesers", price: 3.49 },
  { name: "Skittles", price: 1.49 },
  { name: "Starburst", price: 5.99 },
  { name: "Ricola", price: 1.99 },
  { name: "Polkagris", price: 5.99 },
  { name: "Pastila", price: 4.99 },
  { name: "Mentos", price: 8.99 },
  { name: "Raffaello", price: 7.99 },
  { name: "Gummi bears", price: 10.99 },
  { name: "Fraise Tagada", price: 5.99 },
];

function searchCandies(prefix, maxPrice) {
  return candies
    .filter((item) => item.name.startsWith(prefix) && item.price < maxPrice)
    .map((item) => item.name);
}

console.log(searchCandies("Ma", 10)); // Expected output: [ 'Mars', 'Maltesers' ]
console.log(searchCandies("Ma", 2)); // Expected output: [ 'Mars' ] (Maltesers is excluded because price is more than 2)
console.log(searchCandies("S", 10)); // Expected output: [ 'Skitties', 'Skittles', 'Starburst' ]
console.log(searchCandies("S", 4)); // Expected output: [ 'Skitties', 'Skittles' ] (Starburst is excluded because price is more than 4)
