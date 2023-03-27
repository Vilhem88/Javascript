$(function () {
  let password = "password";
  let passwordInput = $("#password");
  let message = $("#message");
  let h1 = $("h1").hide();

  passwordInput.on("keyup", function () {
   let userInput = passwordInput.val().trim();
    if (userInput == password.slice(0, userInput.length)) {
      if (userInput.length == password.length && userInput == password) {
        h1.show();
        passwordInput.val('')
        message.hide()

      }
    } else{
        message.text('An error occurred ' + userInput + ' is incorrect password')
        passwordInput.val('')
    }   
  });

 
});
