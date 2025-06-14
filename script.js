//1
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Привет меня зовут ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  introduce() {
    console.log(
      `Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`
    );
  }
}

const user = new Student("alex", 1);
user.introduce();
console.log(Student.prototype);

//2
class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.positoin = position;
  }

  work() {
    console.log(`Я работаю на позиции ${this.positoin}`);
  }

  introduce() {
    console.log(
      `Привет, меня зовут ${this.name}, моя специальность ${this.positoin}`
    );
  }
}

const user1 = new Employee("Ad", "developer");
user1.work();
user1.introduce();

//3
const Vehicle = {
  move() {
    console.log(`${this.name} валит`);
  },
};

const Car = Object.create(Vehicle);

Car.drive = function () {
  console.log(`${this.name} даёт угла`);
};

function createCar(name) {
  const car = Object.create(Car);
  car.name = name;
  return car;
}

const myCar = createCar("Volkswagen");
myCar.move();
myCar.drive();
