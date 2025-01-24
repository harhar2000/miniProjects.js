// Create an object with properties storing a bank account number and respective sort code
// Create a method returning the account balance
// Call the method and log the value

const bankAccount = {
  accountNumber: 376782676,
  accountSortCode: 999999,

  getBalance() {
    return 100;
  },
};

console.log(bankAccount.getBalance());

// Create an object with properties storing name, age, address (containing city and postcode) and an array of string hobbies
// Add methords returning the city from address object and hobby from the array.
// Call both methods and log results

const person = {
  name: "Maxine",
  age: 32,
  address: {
    city: "London",
    postcode: "E1 123",
  },
  hobbies: ["writing", "tennis", "cooking"],

  getCity() {
    return this.address.city;
  },
  getHobbies() {
    return this.hobbies;
  },
};

console.log(person.getCity());
console.log(person.getHobbies());

// Create an object for a student cohort with the following properties:
// name, id and an empty array storing the student names
// Write a function taking the object as an argument and return a string containing the cohorts id, name and number of students in the cohort
// Pass the cohort object and log the results

const cohort = {
  name: "may2022",
  id: 1234,
  studentNames: [],
};

function cohortData(cohort = {}) {
  return `${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`;
}

console.log(cohortData(cohort));
