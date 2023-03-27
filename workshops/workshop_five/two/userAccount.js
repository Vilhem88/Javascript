let urlParams = new URLSearchParams(window.location.search);
let userID = urlParams.get("id");

async function fetchData(api) {
  let response = await fetch(api);
  let data = response.json();
  return data;
}

let parent = document.getElementById("parent");

fetchData(`https://reqres.in/api/users/${userID}`)
  .then((response) => {
    let user = response.data;
    let html = `
  
      <div class="text-center border p-3 mr-5">
      <img src="${user.avatar}" class="img-fluid" alt="">
      <h3>${user.first_name}</h3>
      <p>${user.email}</p>
      </div>
      <br>
          
      </div>
      
      `;

    parent.innerHTML += html;
  })
  .catch((error) => {
    console.log("This is an error" + error);
  });
