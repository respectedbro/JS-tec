// 1)
const num = +prompt("Введи число");

let message =
  num > 0 ? "число положилетьное" : num < 0 ? "число отрицательное" : "число 0";

console.log(message);

// 2)

const weight = +prompt("Введите вес");
const height = +prompt("Введите рост");

const heightInMet = height / 100;

const res = Math.round(weight / (heightInMet * heightInMet));

confirm(`ИМТ = ${res}`);

// 3)

const month = +prompt("Введите месяц");
let monthName;

switch (month) {
  case 1:
    monthName = "Январь";
    break;
  case 2:
    monthName = "Февраль";
    break;
  case 3:
    monthName = "Март";
    break;
  case 4:
    monthName = "Апрель";
    break;
  case 5:
    monthName = "Май";
    break;
  case 6:
    monthName = "Июнь";
    break;
  case 7:
    monthName = "Июль";
    break;
  case 8:
    monthName = "Август";
    break;
  case 9:
    monthName = "Сентябрь";
    break;
  case 10:
    monthName = "Октябрь";
    break;
  case 11:
    monthName = "Ноябрь";
    break;
  case 12:
    monthName = "Декабрь";
    break;
  default:
    monthName = "Неверный месяц";
}

console.log(monthName);

// 4)
const hour = +prompt("Который час? (0-23):");

switch (true) {
  case hour >= 0 && hour <= 5:
    alert("Ночь");
    break;
  case hour >= 6 && hour <= 11:
    alert("Утро");
    break;
  case hour >= 12 && hour <= 17:
    alert("День");
    break;
  case hour >= 18 && hour <= 23:
    alert("Вечер");
    break;
  default:
    alert("ошибка");
}
