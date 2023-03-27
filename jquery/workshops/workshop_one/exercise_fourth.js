$(function () {
  let counter = $("#counter");
  let name = $("#name");
  let price = $("#price");
  let quantity = $("#quantity");
  let amount = $("#amount");
  let paymentBtn = $("#paymentBtn");
  let total = $("#total").hide();
  let invalidAmount = $("#invalidAmount").hide();
  let sum = 0;
  let num = 1;

  counter.text(num++);
  name.text("USB");
  price.text("$ 20");
  quantity.text("30");

  paymentBtn.on("click", function (e) {
    e.preventDefault();
    let quantityToNum = +quantity.text();
    let amountToNum = +amount.val();
    let quantityUpdate = quantityToNum - amountToNum;
    if (quantityToNum < amountToNum) {
      if (quantityToNum == 0) {
        invalidAmount.text("Already SOLD OUT!").show();
        total.hide();
        return false;
      }
      invalidAmount
        .text(
          "Not a valid amount, you are able to buy max " +
            quantityToNum +
            " pcs"
        )
        .show();
      total.hide();
      return false;
    } else {
      quantity.text(quantityUpdate);
      let newPrice = +price.text().split(" ")[1];
      sum = newPrice * amountToNum;
      total.text("Total: $" + sum);
      invalidAmount.hide()
      total.show();
      amount.val("");
    }
  });
});
