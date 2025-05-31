//1
const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const func = async () => {
    await delay(2000)
    console.log('Задержка завершена');
}

func()

//2

const getData = async (url) => {
    const response = await fetch(url)
    const posts = await response.json()
    console.log(posts);
    console.log(response);
}

console.log(getData('https://jsonplaceholder.typicode.com/posts'));
