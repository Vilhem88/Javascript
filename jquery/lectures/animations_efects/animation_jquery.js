$(function () {
  let square = $("#square");
  let fadeInBtn = $("#fadeInBtn");
  let fadeOutBtn = $("#fadeOutBtn");
  let fadeToggleBtn = $("#fadeToggleBtn");
  // console.log(fadeInBtn)
  
  fadeInBtn.on("click", function (e) {
    e.preventDefault();
    square.fadeIn(2000);
  });
  
  fadeOutBtn.on("click", function (e) {
    e.preventDefault();
    square.fadeOut(2000);
  });
  
  fadeToggleBtn.on("click", function (e) {
    e.preventDefault();
    square.fadeToggle(2000);
  });








});



