$(function () {
  let mySelect = $("#mySelect");
  let dogApiUrl = `https://dog.ceo/api/breeds/list/all`;
  let selectedBread;

  $.get(dogApiUrl)
    .then((data) => {
      $.each(data.message, function (bread) {
        let dogOption = `<option class="text-center" value="${bread}">${bread}</option> `;
        mySelect.append(dogOption);
      });
    })
    .catch((err) => {
      console.log("This is an error", err);
    });

  mySelect.on("change", function () {
    selectedBread = $("option:selected").val();
    $.get(`https://dog.ceo/api/breed/${selectedBread}/images`)
      .then((data) => {
        let rowCard = $("#rowCard");
        rowCard.html("");
        $.each(data.message, function (i) {
          let cardHtml = `<div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${data.message[i]}" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"/>
        </div>
      </div>`;
          rowCard.append(cardHtml);
        });
      })
      .catch((err) => {
        console.log("This is an error", err);
      });
  });

  // ------------------------ END ---------------------//
});
