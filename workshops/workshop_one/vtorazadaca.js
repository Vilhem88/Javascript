let number = parseInt(prompt("enter a number"));

function colorIt(number) {
  if (isNaN(number)) {
    alert("Input must be a number");
    return;
  }

  let li = document.getElementsByTagName("li");

  let limit = li.length < number ? li.length : number;

  for (let i = 0; i < limit; i++) {
    li[i].style.color = "red";
  }
}

colorIt(number);
