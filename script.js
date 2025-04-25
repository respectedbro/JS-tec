// 1
const arr = [1, 2, 3, 4, 5];

const arrDouble = arr.map((item) => {
    return item * 2;
})

console.log(arrDouble);

//2
const arr1 = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const arrFilter = arr1.filter((item, index) => arr1.indexOf(item) === index);
console.log(arrFilter);

//3
const arr3 = [1, 2, 3];

const arrReduce = arr3.reduce((total, sum) => {
    return total + sum;
}, 0)

console.log(arrReduce)

//4
const arr4 = [1, 2, 3, 4, 5, 6];
const reverse = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
}

console.log(reverse);

//5

// если массив или обект лежит в перемненной объявленной через const его нельзя переопределить, но содержимое можно изменять, так как значение не меняется

const str1 = 'sdsfds';
let str2 = 'asdffg';

str1 ='aaas'; // значение нельзя переопределить
str2 = 'sdsdsd'; // можно

const array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

array1.push(10); // можно изменить
array2.push(20); // можно изменить

array1 = [1,2,5,6,9,43]; // нельзя переопределить значение
array2 = [1,2,34,45,66]; // можно