//1
const myFunc = () => {
  const elem = 12121;
  console.log(elem);
};

myFunc();
console.log(elem);
//Локальная переменная elem доступна только внутри функции, при обращении к ней вне функции будет ошибка

//2
if (elem === 121) {
  const elem2 = 121211;
  console.log(elem2);
}
console.log(elem2);
//переменная доступна только внутри блока if, при обращении вне блока будет ошибка

//3
// hoisting это механизм при котором объявления переменных и функций перемещаются в верхнюю часть области действия перед выполнением кода
// hoisting есть у var и function declaration, и если переменную написать без var, let, const (типа a = 10)
console.log(x); // undefined (
var x = 5;

sayHello(); // работает

function sayHello() {
  console.log("Привет!");
}
