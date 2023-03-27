async function getData(api) {
  let response = await fetch(api);
  let data = await response.json();
  return data;
}

// getData(`https://jsonplaceholder.typicode.com/users`)
//   .then((data) => {

//     data.forEach((object) => {
//       let html = `
//     <div class="col">
//       <div class="card shadow-sm">
//         <div class="card-body">
//           <p class="card-text">Name: ${object.name}</p>
//           <p class="card-text">Email: ${object.email}</p>
//           <div class="d-flex justify-content-between align-items-center">
//             <div class="">
//             <p>phone: ${object.phone}</p>
//             </div>
//         </div>
//         `;
//       parent.innerHTML += html;
//     });
//   })

// getData(`https://jsonplaceholder.typicode.com/posts`).then((data) => {});

Promise.all([
  getData(`https://jsonplaceholder.typicode.com/users`),
  getData(`https://jsonplaceholder.typicode.com/posts`),
])
  .then((data) => {
    let getUsersData = data[0];
    let getPostsData = data[1];
    let parent = document.getElementById("parent");

    getUsersData.forEach((user) => {
      let html = `
    <h2 class="mt-5 text-center">${user.name}</h2>
    `;

      let usersPosts = getPostsData.filter(function (post) {
        return post.userId == user.id;
      });

      let postsHtml = "";

      usersPosts.forEach((post) => {
        postsHtml += `
      <div class="border mb-3 text-center p-2">
      <h5 class="card-text">${post.title}</h5>
      <p class="card-text">${post.body}</p>
      </div>
      `;
      });

      parent.innerHTML += html;
      parent.innerHTML += postsHtml;
    });
  })
  .catch((err) => {
    console.log("This is error", err);
  });
