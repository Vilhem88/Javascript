$(function () {
  let firstInput = $("#firstInput");
  let secondInput = $("#secondInput");
  let resultBtn = $("#resultBtn");
  let result = $("#result");
  let operator = $("#operator");
  let sum = "";

  resultBtn.on("click", function (e) {
    e.preventDefault();
    let a = parseInt(firstInput.val());
    let b = operator.find(":selected").val();
    let c = parseInt(secondInput.val());
    if (b == "+") {
      sum = a + c;
    }
    if (b == "-") {
      sum = a - c;
    }
    if (b == "/") {
      sum = a / c;
    }
    if (b == "*") {
      sum = a * c;
    }

    result.text(sum);
  });
});
