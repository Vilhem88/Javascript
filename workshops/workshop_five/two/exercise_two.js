let formSubmit = document.getElementById("formSubmit");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnFormSubmit = document.getElementById("btnFormSubmit");

async function checkUser(api) {
  let data = {
    email: email.value,
    password: password.value,
  };

  let response = await fetch(api, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  data = await response.json();
  return data;
}

btnFormSubmit.addEventListener("click", handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  checkUser("https://reqres.in/api/register")
    .then((response) => {
      if (response.error) {
        return false;
      } else {
        window.location.replace("./main.html");
      }
    })
    .catch((error) => {
      console.log("This is invalid data", error);
    });
}


checkUser("https://reqres.in/api/users?page=1")
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log("This is invalid data", error);
});
