//1
function hasEvenNumber(arr) {

    let foundEven = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            foundEven = true;
            break; // нужно выйти из цикла при наличии чётного числа
        } else if (arr[i] % 2 !== 0) {

            foundEven = false;
        }
    }
    return foundEven;
}

console.log(hasEvenNumber([1, 3, 4, 5])); // Ожидается: true

//2
function calculateAverage(numbers) {

    let sum = 0;

    for (let i = 0; i <= numbers.length; i++) {
        // debugger //добавляется лишняя итерация так как индексы массива начинаются с 0 должно быть  i < numbers.length; i++
        sum += numbers[i];

    }

    return sum / numbers.length;

}

console.log(calculateAverage([2, 4, 6])); // Ожидается: 4

//4
function findLargestNumber(arr) {

    let largest = 0; // нужно в переменную положить первое значение массива arr[0]
    console.log(largest);

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] > largest) {

            largest = arr[i];
            console.log(largest);
        }

    }

    return largest;

}

console.log(findLargestNumber([-10, -20, -30])); // Ожидается: -10