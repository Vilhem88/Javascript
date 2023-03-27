$(function () {
  let userForm = $("#userForm");
  let cookies = document.cookie;

  if(cookies.length){
    let cookiesAsObject = createCookieAsObject(cookies)
    if(cookiesAsObject.name){
        $("#name").val(cookiesAsObject.name)
    }
    if(cookiesAsObject.lastName){
        $("#lastName").val(cookiesAsObject.lastName)
    }
    if(cookiesAsObject.address){
        $("#address").val(cookiesAsObject.address)
    }
  }

  userForm.on("submit", function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let lastName = $("#lastName").val();
    let address = $("#address").val();

    document.cookie = `name=${name}`;
    document.cookie = `lastName=${lastName}`;
    document.cookie = `address=${address}`;
  });

  function createCookieAsObject(cookies) {
    let cookiesArray = cookies.split(";");
    let cookieObject = {};

    for (const cookie of cookiesArray) {
      let formattedCookie = cookie.trim();
      let cookieArray = formattedCookie.split("=");
      let key = cookieArray[0];
      let value = cookieArray[1];
      cookieObject[key] = value;
    }
    return cookieObject;
  }
});
