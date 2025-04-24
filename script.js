// 1)
const dig = 2 * 2 + 2;

const rad54 = (54 * Math.PI) / 180;
const rad16 = (16 * Math.PI) / 180;
const result = Math.pow(Math.sin(rad54) * Math.cos(rad16), 2);

const exp =
  (16 * Math.sqrt(13.2 * 71.9)) / 2.4 / 7 ** 4 + 3 ** Math.sqrt(49) * 2 ** 7;

console.log(dig);
console.log(result);
console.log(exp);

// 2
const num1 = 10;
const num2 = 15;
const num3 = -4;

if (num1 % 2 === 0) {
  console.log("чётное");
} else {
  console.log("нечётное");
}

console.log(num2 % 2 === 0 ? "чётное" : "нечётное");

console.log(num3 % 2 === 0 ? "чётное" : "нечётное");

// 3)

const name = "";

console.log(name === "" ? "Hello, Guest!" : `Hello, ${name}!`);
