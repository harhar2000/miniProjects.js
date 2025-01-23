//
// Write a function that converts a string to uppercase and a higher-order function transform that takes a string and a transformation function to apply to it.

const uppercaseMessage = (message) => {
  return message.toUpperCase();
};

const transform = (message, transformFunction) => {
  return transformFunction(message);
};

transform("hello", uppercaseMessage);

//
// Write a function converting a message to lowercase and use it with a higher-order function to transform a string into lowercase

function lowercaseMessage(message) {
  return message.toLowerCase();
}

function transformLower(message, lowercaseMessage) {
  return lowercaseMessage(message);
}

console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));

//
// Write functions to send notifications by email and text and a generic function accepting a contact and a notification method,
// Use it to send an email to "sally@gmail.com" and a text to +100000000

function notifyByEmail(email) {
  return `Email sent to ${email}`;
}

function notifyByText(phoneNumber) {
  return `Text sent to ${phoneNumber}`;
}

function notify(contact, methodOfContact) {
  return methodOfContact(contact);
}

console.log(notify("sally@gmail.com", notifyByEmail));
console.log(notify(+100000000, notifyByText));
