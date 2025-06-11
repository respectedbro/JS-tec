const requestURL = "https://jsonplaceholder.typicode.com/posts";
const form = document.getElementById("form");
const respDiv = document.getElementById("response");
const allPostsBtn = document.getElementById("all-posts");
const allPostsDiv = document.getElementById("allPosts");
const deleteForm = document.getElementById("deleteForm");
const updateForm = document.getElementById("updateForm");

const sendRequest = (method, url, body = null) => {
  const headers = {
    "Content-type": "application/json",
  };

  const options = {
    method,
    headers,
  };

  if (body && method !== "GET") {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((err) => {
      const e = new Error("Что-то пошло не так");
      e.data = err;
      throw e;
    });
  });
};

const deletePost = (postId) => {
  return fetch(`${requestURL}/${postId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка при удалении поста");
    }
    return response.json();
  });
};

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const postId = document.getElementById("postId").value;

  deletePost(postId)
    .then(() => {
      respDiv.innerHTML = `Пост ID ${postId} удален`;

      const postElement = document.querySelector(`.post[data-id="${postId}"]`);
      if (postElement) {
        postElement.remove();
        allPostsDiv.innerHTML = allPostsDiv.innerHTML.replace(
          `<h3>Список постов:</h3>`,
          ""
        );
        if (document.querySelectorAll(".post").length === 0) {
          allPostsDiv.innerHTML = "<p>Постов нет</p>";
        }
      }
    })
    .catch((err) => {
      respDiv.innerHTML = `Ошибка: ${err.message}`;
      console.error(err);
    });
});

const updatePost = (postId, updatedData) => {
  return sendRequest("PUT", `${requestURL}/${postId}`, updatedData).then(
    (updatedPost) => {
      const postElement = document.querySelector(`.post[data-id="${postId}"]`);
      if (postElement) {
        postElement.querySelector(".post-title").textContent =
          updatedPost.title;
        postElement.querySelector(".post-body").textContent = updatedPost.body;
      }
      return updatedPost;
    }
  );
};

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const postId = document.getElementById("updateId").value;
  const updatedData = {
    id: parseInt(postId),
    title: document.getElementById("updateTitle").value,
    body: document.getElementById("updateBody").value,
    userId: 1,
  };

  updatePost(postId, updatedData)
    .then((updatedPost) => {
      respDiv.innerHTML = `
                        <h3>Пост обновлен</h3>
                        <p>ID: ${updatedPost.id}</p>
                        <p>Новый заголовок: ${updatedPost.title}</p>
                    `;
    })
    .catch((err) => {
      respDiv.innerHTML = `Ошибка при обновлении: ${err.message}`;
      console.error(err);
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userId = document.getElementById("id");
  const title = document.getElementById("title");
  const text = document.getElementById("text");

  const postData = {
    userId: userId.value,
    title: title.value,
    body: text.value,
  };

  sendRequest("POST", requestURL, postData)
    .then((data) => {
      console.log("ok");
      respDiv.innerHTML = `Ответ от сервера: ваш ID: ${data.id}`;
    })
    .catch((err) => {
      respDiv.innerHTML = `Ошибка: ${err.message}`;
      console.error(err);
    });
});

allPostsBtn.addEventListener("click", () => {
  sendRequest("GET", requestURL)
    .then((posts) => {
      if (posts.length === 0) {
        allPostsDiv.innerHTML = "<p>Постов нет</p>";
        return;
      }
      let list = "<h3>Список постов:</h3>";
      posts.forEach((post) => {
        list += `
                     <br>
                    <div class="post" data-id="${post.id}">
                        <div class="post-title">${post.title} (ID: ${post.id})</div>
                        <div class="post-user">пользователь ${post.userId}</div>
                        <div class="post-body">${post.body}</div>
                    </div>
               <br>
        `;
      });
      allPostsDiv.innerHTML = list;
    })
    .catch((err) => console.log(err));
});
