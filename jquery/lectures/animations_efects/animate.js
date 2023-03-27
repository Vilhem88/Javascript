$(function () {
  let squareBlue = $("#squareBlue");
  let slideUpBtn = $("#slideUpBtn");
  let squareGray = $("#squareGray");
  let showGrayBtn = $("#showGrayBtn");
  let squareGreen = $("#squareGreen");
  let greenBtn = $("#greenBtn");

  //   console.log("slideUpBtn", squareBlue);
  slideUpBtn.on("click", function (e) {
    e.preventDefault();
    squareBlue.animate(
      {
        height: 0,
        opacity: 0,
      },
      3000
    );
  });

  showGrayBtn.on("click", function (e) {
    e.preventDefault();
    squareGray.animate(
      {
        width: "400px",
        right: 0,
      },
      3000,
      function () {
        alert("The gray square has been shown.");
        showGrayBtn.hide();
      }
    );
  });

  greenBtn.on('click', function(e) {
    e.preventDefault()
    squareGreen.animate({

        // width: '+=10%'
        width: '-=10%'

    },1000)
  })





});
