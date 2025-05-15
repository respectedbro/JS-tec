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
    const cache = {};

    const fib = (n) => {
        if (n in cache) {
            return cache[n];
        }

        if (n <= 1) {
            return n;
        }
        cache[n] = fib(n) + fib(n - 2);
        return cache[n];
    };
    return fib();
}

console.log(fibonacci(10));
