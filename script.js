// 1
const str = 'JavaScript is fun!';
console.log(str.includes('fun'));

// 2
let age;

if (age === null || age === undefined) {
    console.log(':(');
}
// 3
const firstName = 'John';
const lastName  = 'Doe';
const occupation = 'software developer'

console.log(`Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`)

// 4
console.log(null === undefined) // здесь сравнивается значение и тип null - object, undefined - undefined)
console.log(null == undefined) // без строгого сравнения null и undefined равны только друг другу

// 5

console.log(1 + '1') // если хотя бы один аргумент строка при сложении js неявно приводит число аргумент к строке