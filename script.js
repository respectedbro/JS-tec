//1
class Counter {
  #count = 0;

  counterPlus() {
    this.#count++;
  }

  counterMinus() {
    this.#count--;
  }

  displayCount() {
    console.log(this.#count);
  }
}

const count = new Counter();

count.counterPlus();
count.counterPlus();
count.counterPlus();
count.counterMinus();
count.displayCount();

//2
class EmailValidator {
  static isValid(email) {
    if (!email.includes("@")) {
      console.log("Введите корректный email");
    }
  }
}

EmailValidator.isValid("example@gmail.com");
EmailValidator.isValid("examplegmail.com");

//3
class Order {
  #total = 0;

  #calculateTotal(price) {
    this.#total += price;
  }

  addPrice(price) {
    this.#calculateTotal(price);
    console.log(`добавлено ${price}`);
  }

  getTotal() {
    return this.#total;
  }
}

const order = new Order();
order.addPrice(1990);
order.addPrice(990);
console.log(`Общая стоимость: ${order.getTotal()}`);
