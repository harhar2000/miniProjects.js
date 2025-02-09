class Candy {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.candy = [];
  }

  addItem(item) {
    this.candy.push(item);
  }

  getTotalPrice() {
    return this.candy
      .map((item) => item.price)
      .reduce((acc, price) => acc + price, 0);
  }
}

// Create a candy object
const candy = new Candy("Mars", 4.99);
console.log(candy.getName()); // Output: Mars
console.log(candy.getPrice()); // Output: 4.99

// Create a shopping basket
const basket = new ShoppingBasket();
console.log(basket.getTotalPrice()); // Output: 0

// Add items
basket.addItem(candy);
console.log(basket.getTotalPrice()); // Output: 4.99

basket.addItem(new Candy("Skittle", 3.99));
basket.addItem(new Candy("Twix", 3.99));
console.log(basket.getTotalPrice());
