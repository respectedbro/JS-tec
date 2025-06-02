//1//2
const elem1 = document.querySelector(".div1");
const elem2 = document.querySelector(".div2");
const elem3 = document.querySelector(".div3");

elem1.addEventListener("click", () => {
  console.log("parent");
});
elem2.addEventListener("click", (e) => {
  console.log("child-1");
  e.stopPropagation();
});
elem3.addEventListener("click", () => {
  console.log("child-2");
});

//3
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.addEventListener("input", (e) => {
  if (e.target.tagName === "INPUT") {
    const currentError = document.getElementById(`${e.target.id}Error`);

    if (e.target.value.length > 20) {
      currentError.style.display = "block";
      e.target.style.borderColor = "red";
    } else {
      currentError.style.display = "none";
      e.target.style.borderColor = "";
    }
  }
});
