//1 Поверхностное копирование создает новый объект, но копирует только ссылки на вложенные объекты и массивы (не создает их копии)
//Примитивные значения (строки числа) копируются полностью
const student = {
  name: "Ad",
  age: 22,
  address: {
    city: "Moscow",
    street: "street123",
  },
};

const studentCopy = { ...student };
studentCopy.address.city = "St.Petersburg";

console.log(studentCopy.address.city);
console.log(student.address.city);

const studentCopy2 = Object.assign({}, student);
console.log(studentCopy2.address.city);
console.log(student.address.city);

//2
const user = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
  sayHi: () => console.log("Hello, Alice!"),
};

const copyUser = JSON.parse(JSON.stringify(user));

console.log("Оригинальный объект:", user);
console.log("Копия объекта:", copyUser);

// copyUser.sayHi();
//В копии userCopy нет метода sayHi.
//Когда объект содержит функции, они просто пропускаются при преобразовании в JSON строку
//При парсинге метод не восстанавливается и получается ошибка потому что этого свойства просто нет в копии

//3
const deepCopy = (obj) => {
  // Проверяем если obj не null или не объект, возвращаем его как есть
  // примитивы копируются по значению
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // создаём переменную для копии и проверяем является он массивом - создаём пустой массив, если нет создаём обьект
  const copy = Array.isArray(obj) ? [] : {};

  // Перебираем все ключи объекта
  for (let key in obj) {
    //содержит ли объект указанное свойство
    if (obj.hasOwnProperty(key)) {
      //копируем каждое свойство через эту же функцию рекурсивно
      copy[key] = deepCopy(obj[key]);
    }
  }
  //Возвращаем копию
  return copy;
};

const user1 = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

// deepCopy - это функция для глубокого копирования, которую вам предстоить реализовать 🙂
const deepCopyUser = deepCopy(user1);
console.log(deepCopyUser);
deepCopyUser.address.city = "New Wonderland";

console.log(user.address.city); // "Wonderland"
