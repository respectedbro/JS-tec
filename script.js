// 1
// let num = 1;
//
// for (let i = num; i <= 10; i++) {
//   console.log(i);
// }

// 2
// let sum = 0;
// let i = 1;
//
// while (i <= 100) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// 3
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}
