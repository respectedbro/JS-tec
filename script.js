//1
// const getUserData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({
//                 name: 'user',
//                 age: 22,
//                 position: 'dev'
//             });
//         }, 2000);
//     });
// };
//
// getUserData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error('error ', err);
//     });

//2
// const getData1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('data1')
//         }, 3000);
//     });
// };
// const getData2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('data2')
//         }, 5000);
//     });
// };
//
// Promise.all([getData1(), getData2()])
//     .then((res) => {
//         console.log('выполнены: ', res);
//     })
// .catch((err) => {
//     console.log('ошибкаZ', err);
// })


//3
const getRandomTimeout = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



const getData3 = () => {
    const randTimeout = getRandomTimeout(1000, 5000)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(randTimeout);
            resolve('data3')
        }, randTimeout);
    });
};
const getData4 = () => {
    const randTimeout = getRandomTimeout(1000, 5000)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(randTimeout);
            resolve('data4')
        }, randTimeout);
    });
};

Promise.race([getData3(), getData4()])
    .then((res) => {
        console.log('выполнен: ', res);
    })
.catch((err) => {
    console.log('ошибкаZ', err);
})