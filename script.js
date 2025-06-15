//1
const user = {};

Object.defineProperty(user, "name", {
  value: "Nik",
  writable: false,
  configurable: false,
  enumerable: true,
});

Object.defineProperty(user, "position", {
  value: "developer",
  writable: false,
  configurable: false,
  enumerable: true,
});

user.name = "alex";
user.position = "driver";
console.log(user);
console.log(user.name);

//2

const employee = {
  name: "Ben",
  age: 30,
  wage: 1000,
  position: "boss",
};

Object.defineProperty(employee, "position", {
  writable: true,
  configurable: true,
  enumerable: false,
});

for (let key in employee) {
  console.log(key);
}
