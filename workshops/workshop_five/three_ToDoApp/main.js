async function getData(api) {
  let response = await fetch(api);
  let data = response.json();
  return data;
}

let users = document.getElementById("users");

getData(`https://jsonplaceholder.typicode.com/users`).then((response) => {
  response.forEach((element) => {
    let html = `
             <div class="text-center"  id="${element.id}">
             <h2>${element.name}</h2>
             <div class="text-center"> 
             </div>
             </div>
       
        `;
    users.innerHTML += html;
  });

  findUser(users);
});

function findUser(arr) {
  for (const user of arr.children) {
    let userId = user.getAttribute("id");
    let singleUser = document.getElementById(userId);
    singleUser.addEventListener("click", () => handleTodoList(+userId));
  }
}

function handleTodoList(userId) {
  getData(`https://jsonplaceholder.typicode.com/todos`).then((response) => {
     let html = response
      .filter((element) => userId == element.userId)
      .map((todo) => [
        `<div>${todo.title}</div>`,
        todo.completed
          ? '<input type="checkbox" checked/>'
          : '<input type="checkbox"/>',
      ])
      .map(
        (todo) =>
          `<div class="text-center border">
         ${todo[0]}
         ${todo[1]}
          </div>`
      )
      .reduce((a, b) => {
        return a + b;
      });
    document.getElementById(userId).children[1].innerHTML = html;
  });
}
