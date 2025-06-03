//1
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const func = async () => {
  await delay(2000);
  console.log("Задержка завершена");
};

func();

//2

const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("какая-то ошибка");
    }

    const posts = await response.json();
    console.log(posts);
  } catch (err) {
    console.error("Ошибка: ", err);
  }
};

getData("https://jsonplaceholder.typicode.com/posts");
