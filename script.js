//1
const getCountDown = (count) => {
    console.log(count);
    if (count > 0) {
        setTimeout(() => {
            getCountDown(count - 1);
        }, 1000);
    }

};

getCountDown(10);

//2
const showIntervalMess = (mess) => {
    setInterval(() => {
        console.log(mess);
    }, 1800000);
};

showIntervalMess('Не забудь выпить воды');

//3
const interval = document.getElementById('interval');
const text = document.getElementById('text');
const button = document.querySelector('button');

let timer;
let isRun = false;
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (isRun) {
        clearInterval(timer);
        button.textContent = 'Начать';
        isRun = false;
        console.log('Стоп');
    } else {
        const delay = interval.value;
        const textValue = text.value;

        // console.log(textValue);
        timer =setInterval(() => {
            console.log(textValue);
        }, delay);

        button.textContent = 'Стоп';
        isRun = true;
    }

});