//1
const user1 = {
    name: 'userName',
    age: 22,
    sayHello() {
        console.log(`${this.name} say hello `);
    }
};

const userSay = user1.sayHello;
userSay();
//this теряет связь с объектом user(привязывается к глобальному window) и становится undefined

//2
const student = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
    delayedGreet: function () {
        //this внутри greet теряет связь с student
        // setTimeout( this.greet, 1000);
        // console.log(this)
        setTimeout(() => this.greet(), 1000);
    }
};

student.greet(); // Hello, Alice
student.delayedGreet(); // Hello, undefined

//3
const person = {
    name: 'Nik'
};
const logPerson = function (city, age) {
    console.log(`меня зовут ${this.name}, я из города ${city}, мой возраст ${age}`);
};


logPerson.call(person, 'Ялта', 33);
logPerson.apply(person, ['Москва', 22]);
const bindLogPerson = logPerson.bind(person);
bindLogPerson('St.Petersburg', 29);

//4 Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()? Объясни, почему так произошло. Как это можно изменить?
//     2 раза выведится bob так как bind привязывается жестко и контекст фиксируется навсегда при первом вызове.
function sayHello() {
    console.log('Hello, ' + this.name);
}

const admin = {
    name: 'Bob'
};

const user = {
    name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin);
sayHelloToAdmin();

const sayHelloToUser = sayHelloToAdmin.bind(user);
sayHelloToUser();

