$(function () {
  let keyUp = $("#keyUp");

  keyUp.on("keypress", function (e) {});

  //   $(document).on("keypress", function (e) {
  //     if (e.which == 13) {
  //       $("#googleForm").submit();
  //     }
  //   });

  let square = $("#square");
  $(document).on("keyup", function (e) {
    console.log(e.which);
    if (e.which == 37) {
      square.animate({
        marginLeft: "-=4%",
      },100);
    } else if (e.which == 38) {
      // gore
      square.animate({
        marginTop: "-=4%",
      },100);
    } else if (e.which == 39) {
      // desno
      square.animate({
        marginLeft: "+=4%",
      },100);
    } else if (e.which == 40) {
      // dole
      square.animate({
        marginTop: "+=4%",
      },100);
    }
  });
});
