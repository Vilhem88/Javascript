$(function () {
  // console.log(users);
  let timer,
    amountToPay,
    totalAmount = 0;

  //exercise 1
  const createCards = (bicycle) => {
    return $(`<div class="col-xs-4 col-sm-4 col-md-4">
        <div class="thumbnail">
            <img src="./bicycles/${bicycle.id}.jpg" />
            <div class="caption">
                <h3>${bicycle.name.split(" ")[0]}</h3>
                <p>${bicycle.phone}</p>
                <p>${bicycle.price} MKD per hour</p>
                <p>
                    <button class="btn btn-primary">Rent this bicycle</button>
                </p>
            </div>
        </div>
    </div>`).on("click", ".btn-primary", () => {
      rentThisBicycle(bicycle);
    });
  };

  users.forEach((bicycle) => $(".page-body .row").append(createCards(bicycle)));

  // exercise 2
  function rentThisBicycle(bicycle) {
    // console.log('here');
    $(".thumbnail button").attr("disabled", true);

    $(".rent-details").animate(
      {
        left: 0,
        opacity: 1,
      },
      500
    );

    // console.log(bicycle); // current object

    $("#rentedFrom").text(bicycle.name);

    let seconds = 0,
      minutes = 0,
      hours = 0;

    // exercise 4
    let timeToStartFrom = JSON.parse(localStorage.getItem("timeRented")) || 0;

    if (localStorage.getItem("timeRented")) {
      timeToStartFrom = (new Date().getTime() - timeToStartFrom) / 1000;
    }

    //logic to calculate price per second (because the init price is per hour)
    let pricePerSecond = bicycle.price / 3600;

    timer = setInterval(() => {
      // increase time each interval iteration
      timeToStartFrom++;

      // calculate current h/m/s
      hours = Math.floor(timeToStartFrom / 3600);
      minutes = Math.floor((timeToStartFrom % 3600) / 60);
      seconds = Math.floor((timeToStartFrom % 3600) % 60);

      //calculate how much you need to pay every second
      amountToPay = (timeToStartFrom * pricePerSecond).toFixed(2);

      $("#hours").text(hours < 10 ? "0" + hours : hours);
      $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
      $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);
      $("#amountToPay").text(amountToPay);
    }, 1000);

    // exercise 4 (step 4)
    let timeRented =
      timeToStartFrom == 0
        ? new Date().getTime()
        : localStorage.getItem("timeRented");

    localStorage.setItem("timeRented", timeRented.toString());

    // exercise 4 (step 1)
    localStorage.setItem("rentedBicycle", JSON.stringify(bicycle));
  }

  //exercise 3
  $("#leaveBicycle").on("click", () => {
    $(".thumbnail button").removeAttr("disabled");

    $(".rent-details").animate(
      {
        left: "-100%",
        opacity: 0,
      },
      500
    );

    clearInterval(timer);

    totalAmount = (parseFloat(totalAmount) + parseFloat(amountToPay)).toFixed(
      2
    );

    //save total to localStorage
    localStorage.setItem("totalAmount", totalAmount);

    //show the total amount in html
    $(".page-header h2").animate(
      {
        opacity: 1,
      },
      500
    );
    $("#totalAmount").text(totalAmount);

    $("#hours").text("00");
    $("#minutes").text("00");
    $("#seconds").text("00");
    $("#amountToPay").text("0.00");

    // exercise 4 (step 3)
    localStorage.removeItem("rentedBicycle");

    localStorage.removeItem("timeRented");
  });

  // exercise 3
  if (localStorage.getItem("totalAmount")) {
    // if totalAmount exists in localStorage, then start from that totalAmount instead of 0
    totalAmount = parseFloat(localStorage.getItem("totalAmount")); // '0.11' - 0.11

    $(".page-header h2").animate(
      {
        opacity: 1,
      },
      500
    );
    $("#totalAmount").text(totalAmount);
  }

  // exercise 4 (step 2)
  if (localStorage.getItem("rentedBicycle")) {
    rentThisBicycle(JSON.parse(localStorage.getItem("rentedBicycle")));
  }
});
