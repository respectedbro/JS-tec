//1
const form = document.getElementById("form");
const savedInfo = document.querySelector(".saved");

const showContact = () => {
  const saved = localStorage.getItem("contact");

  if (saved) {
    const contact = JSON.parse(saved);
    savedInfo.innerHTML = `
          <p>Имя: ${contact.name}</p>
          <p>Телефон: ${contact.phone}</p>
          <p>Email: ${contact.email}</p>
    `;
  }
};
//
// document.addEventListener('DOMContentLoaded', showContact);

showContact();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formName = document.getElementById("name");
  const formPhone = document.getElementById("phone");
  const formEmail = document.getElementById("email");

  const contact = {
    name: formName.value,
    phone: formPhone.value,
    email: formEmail.value,
  };

  localStorage.setItem("contact", JSON.stringify(contact));

  showContact();
});

//2
const form2 = document.getElementById("form2");
const dataList = document.querySelector(".show-list");
const delBtn = document.querySelector(".del-btn");

const addExpData = (exp) => {
  let expenses = [];

  if (localStorage.getItem("expenses")) {
    expenses = JSON.parse(localStorage.getItem("expenses"));
  }

  expenses.push(exp);

  localStorage.setItem("expenses", JSON.stringify(expenses));
};

const showList = () => {
  dataList.innerHTML = "";
  if (!localStorage.getItem("expenses")) {
    dataList.innerHTML = "<span>Расходов нет</span>";
    return;
  }

  const expenses = JSON.parse(localStorage.getItem("expenses"));
  console.log(expenses);
  expenses.forEach((exp) => {
    dataList.innerHTML = `
                    <p>Описание ${exp.description}</p> 
                    <p> Сумма: ${exp.total}</p> 
                    <p> Дата: ${exp.date}</p> 
    `;
  });
};

const removeStorage = () => {
  localStorage.removeItem("expenses");
  showList();
};

showList();

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = document.getElementById("desc");
  const date = document.getElementById("date");
  const total = document.getElementById("total");

  const accData = {
    description: description.value,
    date: date.value,
    total: total.value,
  };

  addExpData(accData);

  showList();
});

delBtn.addEventListener("click", removeStorage);

//3
const timer = document.querySelector(".timer");
// Получаем элемент счетчика
const counter = document.getElementById('counter');

// Загружаем сохраненное время или начинаем с 0
let seconds = sessionStorage.getItem('pageTime') || 0;

// Обновляем счетчик на странице
counter.textContent = seconds + ' сек';

// Запускаем таймер
const timer = setInterval(function() {
  // Увеличиваем счетчик
  seconds++;

  // Обновляем на странице
  counter.textContent = seconds + ' сек';

  // Сохраняем в sessionStorage
  sessionStorage.setItem('pageTime', seconds);
}, 1000); // 1000 мс = 1 секунда