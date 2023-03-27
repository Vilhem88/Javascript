$(function () {
  //   let counter = 0;
  //   let interval = setInterval(function () {
  //     console.log("Brainster");
  //     counter++;
  //     if (counter == 10) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);

  let submitBtn = $("#submitBtn");
  let countDownDiv = $("#countDown");

  submitBtn.on("click", function (e) {
    e.preventDefault();
    let countDown = +$("#number").val();
    let id = setInterval(function () {
      countDown--;
      countDownDiv.text(countDown);
      if (countDown == 0) {
        clearInterval(id);
        countDownDiv.text("Boooooom");
      }
    }, 1000);
  });

});
