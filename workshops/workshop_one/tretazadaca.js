let amount = parseInt(prompt("Vnesete suma"));


function isValidAmountForAtm(suma) {
    // console.log(atm)
    if (isNaN(suma) || suma == null) {
      document.querySelector("#atm").innerHTML += "<br> Invalid amount";
      return false;
    }
  
    if (suma % 5 !== 0) {
      document.querySelector("#atm").innerHTML += "<br> Try another amount";
      return false;
    }
    return true;
  }

function checkBanknote(suma) {
  document.querySelector("#atm").innerHTML += `<br>Pobarana suma: ${suma}`;

  if (!isValidAmountForAtm(suma)) {
    document.querySelector("#atm").innerHTML += `<br>Nevalidna suma: ${suma}`;
    return false;
  }

  let banknotes = [2000,1000, 500, 100, 50, 10, 5];

  banknotes.sort((a, b) => {
    return b - a;
  });
  document.querySelector("#atm").innerHTML += `<br> That would be, `;

  banknotes.forEach(function (banknote) {
    let count = Math.floor(suma / banknote);
    suma = suma % banknote;

    document.querySelector("#atm").innerHTML += ` ${count} in ${banknote},`;
  });
}

checkBanknote(amount);
