// Promises handle asynchronicity and regain control over the execution flow of the programme
// They let you control the order in which some operations will run in the code
//  e.g. If your code depends on external server data, promises let you run these operations
//        once you have received the data

// Promises are objects - containers for future data, a representation of future completion or failure
//   of an asynchronous operation. As such, they have three different states:

//  Fulfilled - asynchronous operation completed successfully:
//              for instance, data you requested from an external server came back with no isses.

//  Rejected - asynchronous operation failed:
//             for instance, you sent an invalid request to a server and it answered with an error.

//  Pending - the Promise has yet to to be either rejected or fulfilled:
//            the lapse between sending a request and getting an answer back from your server.

// .then() Handles fulfilled promises (success)
// .catch() Handles rejected promises (errors)

// Both methods are used to handle the outcome of a promise
// Each takes a callback function that runs after the promise completes:
//  then(callback): Runs when 'resolve' is called
//  catch(callback): Runs when 'reject' is called

// .then() and .catch() returns a new Promise

// Fulfilled Promise

const promise = new Promise((resolve, reject) => {
  resolve("Success!");
}).then((result) => {
  console.log(result);
});

// Rejected Promise

const promise2 = new Promise((resolve, reject) => {
  reject("Somethign went wrong");
}).catch((error) => {
  console.error(error);
});
