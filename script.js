//1
const calcArrElems = (arr, idx = 0) => {
  if (idx >= arr.length) {
    return 0;
  }
  return arr[idx] + calcArrElems(arr, idx + 1);
};

console.log(calcArrElems([1, 2, 3, 4, 5]));

//2

const findMaxValue = (arr, idx = 0, max = 0) => {
  if (idx >= arr.length) {
    return max;
  }

  const currMax = arr[idx] > max ? arr[idx] : max;

  return findMaxValue(arr, idx + 1, currMax);
};

console.log(findMaxValue([1, 2, 3, 4, 5]));

//3

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(10));
