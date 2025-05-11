//1
const calcNumbers = numbers => numbers.map(num => num * 2);

const arr = [1, 2, 3, 4, 5];
const res = calcNumbers(arr);
console.log(res);

//2
const user = {
    name: 'userName',
    userSay:  () => {
        setTimeout(() => {
            console.log('Hello');
        }, 1000)
    }

};

user.userSay()

//3

const transformArray = (transformFunc, arr) => {
    return  transformFunc(arr)
}

console.log(transformArray(calcNumbers, arr))


