//1
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.style.color = "red";
});

//2
const square = document.querySelector(".square");

square.addEventListener("mouseover", () => {
  square.style.width = "200px";
  square.style.height = "200px";
});

square.addEventListener("mouseout", () => {
  square.style.width = "100px";
  square.style.height = "100px";
});

//3
const input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  console.log(e.key);
});

//4
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Форма отправлена");
});

//5
const changeThemeBtn = document.querySelector(".change-theme");
const body = document.body;

changeThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});
