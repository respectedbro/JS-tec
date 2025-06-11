// const requestURL = "https://jsonplaceholder.typicode.com/posts";
//
// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//
//     xhr.open(method, url);
//
//     xhr.responseType = "json";
//     xhr.setRequestHeader("Content-Type", "application/json");
//
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };
//
//     xhr.onerror = () => {
//       reject(xhr.response);
//     };
//
//     xhr.send(JSON.stringify(body));
//   });
// }
//
// // sendRequest("GET", requestURL)
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));
//
// const body = {
//   userId: "userId",
//   title: "title1",
//   body: "post-body",
// };
//
// sendRequest("POST", requestURL, body)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//
// const requestURL = "https://jsonplaceholder.typicode.com/posts";
//
// function sendRequest(method, url, body = null) {
//   const headers = {
//     "Content-type": "application/json",
//   };
//
//   return fetch(url, {
//     method,
//     body: JSON.stringify(body),
//     headers,
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return response.json().then((err) => {
//       const e = new Error("Что-то пошло не так");
//       e.data = err;
//       throw e;
//     });
//   });
// }
//
// // sendRequest("GET", requestURL)
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));
//
// const body = {
//   userId: "userId",
//   title: "title1",
//   body: "post-body",
// };
//
// sendRequest("POST", requestURL, body)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
