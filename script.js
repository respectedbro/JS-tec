//1
const safeDivide = (num1, num2) => {
    try {
        if (num2 === 0) {
            throw new Error('Деление на ноль невозможно');
        }
        return num1 / num2;
    } catch (error) {
        console.log(error);
        return null;
    }
};
console.log(safeDivide(12, 0));

//2

const user = '{name: "Nk"}';
const transfromJSON = (jsonStr) => {
    try {
        return JSON.parse(jsonStr);
    } catch (error) {
        console.log(error.message);
        return null;
    }
};

console.log(transfromJSON(user));

//3

const checkAccess = (age) => {
    try {
        if (age >= 18) {
            return 'залетай';
        }
        throw new Error('Доступ запрещен');
    } catch (error) {
       console.log(error);
        return false;
    }
};

console.log(checkAccess(17));
