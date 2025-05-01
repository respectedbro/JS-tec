//1
const link = document.getElementById("link");
link.textContent = "Новая ссылка";

//2
const item = document.querySelector(".item");
item.style.cssText = `
display: inline-block;
background-color: blue;
color: red;
`;

//3
const elem = document.createElement("p");
elem.textContent = "Новый параграф";
document.body.append(elem);

//4
const removeElem = (id) => {
  const elem = document.getElementById(id);

  elem.remove();
};

removeElem("elem");

//5
link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));

//6
const newElem = document.createElement("div");
newElem.classList.add("new-elem");
document.body.append(newElem);

//7
newElem.classList.toggle("old-elem");
