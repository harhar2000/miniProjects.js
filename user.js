// Write a User class with a constructor taking a single parameter name set as a property of the class
// A method returning the name of the user and a method returining a string in the format "Hi, my mame is <name>"

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

const user = new User("Uma");
console.log(user.getName());
console.log(user.getIntroduction());

// Create a UserBase class with a constructor taking an array of User objects and stores it in a property called users
// Methods returning the total number of User objects in the array, returning an array of names of all the users and returning an array of introduction strings for all users

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => user.getName());
  }

  getIntroduction() {
    return this.users.map((user) => user.getIntroduction());
  }
}

const users = [new User("Uma"), new User("Josh"), new User("Ollie")];
const userBase = new UserBase(users);

console.log(userBase.count(3));
console.log(userBase.getNames());
console.log(userBase.getIntroduction());
