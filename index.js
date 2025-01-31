// This = reference to the object where this is used
//      (The object depends on the immediate context)
//      person.name = this.name

const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",

  sayHello() {
    return `Hi, I am ${this.name}`;
  },
};

console.log(person1.sayHello());
