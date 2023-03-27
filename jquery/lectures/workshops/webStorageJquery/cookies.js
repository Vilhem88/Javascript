document.cookie = "name=Wilhem";
document.cookie = "username=WLeshi";
document.cookie = "sport=football";
document.cookie = "state=Germany";
document.cookie = "city=Frankfurt";
document.cookie = "years=34";

let cookies = document.cookie;
let cookiesArray = cookies.split(";");
let cookieObject = {};

for (const cookie of cookiesArray) {
  let formattedCookie = cookie.trim();
  let cookieArray = formattedCookie.split("=");
  cookieObject[cookieArray[0]] = cookieArray[1];
}

console.log("Ova e cookieObject: ", cookieObject);
