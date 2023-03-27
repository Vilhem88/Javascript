$(function () {
  // Your code goes here ...
  let timer = 0;
  let amountToPay = 0;
  let totalAmountToPay = 0;
  let time = 0;

  let lsRentedBicycle = localStorage.getItem("rentedBicycle");

  if (lsRentedBicycle) {
    lsRentedBicycle = JSON.parse(lsRentedBicycle);
    rentBicycle(lsRentedBicycle);
  }

  // total to pay //
  let lsTotalAmountToPay = localStorage.getItem("totalAmountToPay");

  if (lsTotalAmountToPay) {
    totalAmountToPay = +lsTotalAmountToPay;
    $(".page-header .container h2").animate(
      {
        opacity: 1,
      },
      10
    );
    $("#totalAmount").text(totalAmountToPay);
  }

  // SHOW BICYCLES //
  function showBicycles(bicycle) {
    return $(`
    <div class="col-xs-4 col-sm-4 col-md-4">
    <div class="thumbnail">
        <img src="./bicycles/${bicycle.id}.jpg" />
        <div class="caption">
            <h3>${bicycle.name.split(" ")[0]}</h3>
            <p>${bicycle.phone}</p>
            <p>${bicycle.price} 	&euro; / per hour</p>
            <p>
                <a href="#" class="btn btn-primary" role="button">Rent this bicycle</a>
            </p>
        </div>
    </div>
</div> 
`).on("click", ".btn-primary", () => rentBicycle(bicycle));
  }

  users.forEach(function (user) {
    $(".page-body .container .row").append(showBicycles(user));
  });

  // -------------- Rent a Bike -----------------//
  function rentBicycle(bicycle) {
    $(".thumbnail .btn-primary").attr("disabled", true);
    $(".rent-details").animate(
      {
        opacity: 1,
        left: 0,
      },
      100
    );
    $("#rentedFrom").text(bicycle.name);

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let startTimer = 0;
    let timeToStartFrom = JSON.parse(localStorage.getItem("timeRented"));

    if (localStorage.getItem("timeRented")) {
      timeToStartFrom = (new Date().getTime() - (+timeToStartFrom)) / 1000;
    }

    let pricePerSecond = +bicycle.price / 3600;
    timer = setInterval(() => {
      startTimer++;

      hours = Math.floor(startTimer / 3600);
      minutes = Math.floor((startTimer % 3600) / 60);
      seconds = Math.floor((startTimer % 3600) % 60);

      $("#hours").text(hours < 10 ? "0" + hours : hours);
      $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
      $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);
      amountToPay = (startTimer * pricePerSecond).toFixed(2);
      $("#amountToPay").text(amountToPay);
    }, 1000);

    localStorage.setItem("rentedBicycle", JSON.stringify(bicycle));
    localStorage.setItem("timeRented",  timeToStartFrom.toString());
  }

  // Leave a bike / stop the rent //

  $("#leaveBicycle").on("click", function (e) {
    e.preventDefault();
    $(".thumbnail .btn-primary").attr("disabled", false);
    $(".rent-details").animate(
      {
        opacity: 0,
        left: "-100%",
      },
      10
    );
    clearInterval(timer);
    totalAmountToPay = ((+totalAmountToPay) + (+amountToPay)).toFixed(2);
    $(".page-header .container h2").animate(
      {
        opacity: 1,
      },
      10
    );
    $("#totalAmount").text(totalAmountToPay);
    localStorage.setItem("totalAmountToPay", totalAmountToPay);

    $("#hours").text("00");
    $("#minutes").text("00");
    $("#seconds").text("00");
    $("#amountToPay").text("0.00");
    localStorage.removeItem("rentedBicycle");
    localStorage.removeItem("timeRented");
  });
});
