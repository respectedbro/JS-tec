"use strict";
//1
// const func = (a, b) => {
//   "use strict";
//   c = a + b;
//   console.log(c);
// };

const func = (a, b) => {
  const c = a + b;
  console.log(c);
};

func(1, 2);

//2
// const func2 = (b, b) => {
//   "use strict";
//   return b + b;
// };
//
// console.log(func2(1, 2));

const func2 = (b, a) => {
  return b + a;
};

console.log(func2(1, 2));

//3

// function func3() {
//   console.log(this);
// };

function func3() {
  console.log(this);
}
func3();

//4
const obj = {};
delete obj.toString;
delete Object.prototype.toString();
