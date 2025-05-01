//1
const person = {
  name: "Nik",
  age: 35,
  occupation: "developer",
  hobbies: ["sport", "gaming", "walk"],
};

for (let key in person) {
  console.log(key, person[key]);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//2
person.weight = 75;
person.hobbies[0] = "relax";
delete person.age;
console.log(person);
