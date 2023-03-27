async function fetchData(api) {
  let response = await fetch(api);
  let data = response.json();
  return data;
}

let parent = document.getElementById("parent");

fetchData("https://reqres.in/api/users?page=1")
  .then((response) => {
    response.data.forEach((object) => {
      let html = `

    <div class="text-center border p-3 col-3 mr-5">
        <p>Click here to open my Account</p>
        <a href="./showUser.html?id=${object.id}">${object.email}</a>
    </div>
    <br>
        
    </div>
    
    `;

      parent.innerHTML += html;
    });
  })
  .catch((error) => {
    console.log("This is an error" + error);
  });
