$(function () {
  let race = $("#race");
  let firstCar = $("#firstCar");
  let secondCar = $("#secondCar");
  let results = $("#results").hide();
  let finish = $("#finish").hide();
  let startBtn = $("#startBtn");
  let playAgainBtn = $("#playAgainBtn");

  race.css("background-image", "url(./img/raceTrack.jpg)");

  startBtn.on("click", function (e) {
    e.preventDefault();
    let time1 = Math.random() * 3 * 1000;
    let time2 = Math.random() * 3 * 1000;
    firstCar.animate(
      { "margin-left": $(document).width() - firstCar.width() },
      time1,
      function () {
        results
          .text(
            "First car time " +
              time1 / 1000 +
              "sec. " +
              ": " +
              "Second car time " +
              time2 / 1000 +
              "sec. "
          )
          .show();
        finish.show();
      }
    );
    secondCar.animate(
      { "margin-left": $(document).width() - secondCar.width() },
      time2,
      function () {
        results
          .text(
            "First car time " +
              time1 / 1000 +
              "sec. " +
              ": " +
              "Second car time " +
              time2 / 1000 +
              "sec. "
          )
          .show();
        finish.show();
      }
    );
  });

  playAgainBtn.on("click", function (e) {
    e.preventDefault();
    $(firstCar).css("margin-left", "0px");
    $(secondCar).css("margin-left", "0px");
    results = $("#results").hide();
    finish.hide();
  });
});
