$(function () {

  let userForm = $("#userForm");

  userForm.on("submit", function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let lname = $("#lname").val();

    let userObj = {
      name: name,
      lastName: lname,
    };

    let userDataStringified =  JSON.stringify(userObj) 
    localStorage.setItem('user',userDataStringified);

    let userDataParse = localStorage.getItem('user')
    let user = JSON.parse(userDataParse); 
    console.log("Ova e userObj", user.lastName );
  });
});
