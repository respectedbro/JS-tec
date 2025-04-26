// 1
const averageValue = (...nums) => {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length
}

console.log(averageValue(1, 2,3,4))

// 2
const user = {
    name: 'Ad',
    age: 33,
    country: 'Rus'
};

const userInfo = ({name, age, country}) => {
    console.log(name, age, country)
}

userInfo(user)

// 3
const obj = {
    name: 'Ab',
    arr: [1, 2, 3, 4],
    user: {
        age: 20,
        position: 'developer'
    }
};

const {name, arr: [first, ...rest], user: { age, position }} = obj
console.log(name)
console.log(first)
console.log(rest)
console.log(age)
console.log(position)

// 4
const array = [1, 2, 3, 4, 5]

const newArray = [...array]

newArray.unshift(0)
newArray.push('item')

console.log(array)
console.log(newArray)

//5
const object = {
    id: 2,
    name: 'foo',
    position: 'dev'
}

const paramsFunc = ({id, country, ...rest}) => {
    return rest
}

console.log(paramsFunc(object))