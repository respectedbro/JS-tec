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
        console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`);
    }
}

const user = new Student('alex', 1);
user.introduce();
console.log(Student.prototype);

//2
class Employee extends Person {
    constructor(name, course, position) {
        super(name, course);
        this.positoin = position;
    }

    work() {
        console.log(`Я работаю на позиции ${this.positoin}`);
    }
}