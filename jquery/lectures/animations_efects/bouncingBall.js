$(function () {
  let square = $("#square");
  let ball = $("#ball");
  let playgroundSize = square.height() - ball.height();

  ball.on("click", function () {
    let bouncingTimes = prompt(
      "How many times do you want to bounce the ball?"
    );
    let speed = 1000;

    for (let i = 0; i < bouncingTimes; i++) {
      ball
        .animate(
          {
            marginTop: "-=" + playgroundSize,
          },
          speed
        )
        .animate(
          {
            marginTop: "+=" + playgroundSize,
          },
          speed
        );

      speed -= 70;
      playgroundSize -= 50;
    }
  });
});
