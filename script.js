const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome("топот"));

const shortestWordInSentence = (sentence) => {
  const str = sentence.split(" ");
  let shortestWord = str[0];

  str.forEach((word) => {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  });
  return shortestWord;
};

console.log(shortestWordInSentence("тоже хороший вариант"));

function formatPhNumber(num) {
  let strNum = String(num);
  let cleanNum = "";

  for (let num of strNum) {
    if ("0123456789".includes(num)) {
      cleanNum += num;
    }
  }

  const code = cleanNum.slice(1, 4);
  const fst = cleanNum.slice(4, 7);
  const sec = cleanNum.slice(7, 10);

  return `8 (${code}) ${fst}-${sec}`;
}

console.log(formatPhNumber(121212121212));

const minMaxValue = (arr) => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
};

console.log(minMaxValue([5, 2, 8, 1, 4]));

function sortArray(arr) {
  const sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }
  return sortedArr;
}
console.log(sortArray([5, 3, 8, 1]));
console.log(sortArray([-10, 0, 4, -2]));
