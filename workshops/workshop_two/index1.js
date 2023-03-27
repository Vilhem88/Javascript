// excercise number one //
var counterDiv = document.getElementById("counterDiv");
var reset = document.getElementById("reset");
counterDiv.addEventListener("click", handleCounterDiv);
reset.addEventListener("click", handleResetBtn);

var counter = 1;
function handleCounterDiv() {
  counterDiv.style.width = "100px";
  counterDiv.style.height = "100px";
  counterDiv.style.background = "red";
  counterDiv.innerHTML = counter++;
}

function handleResetBtn() {
  counter = 1;
  counterDiv.innerHTML = "Click me Here";
}

// excercise number two //
const submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", handleSubmitForm);


function resetInputsClass() {
    let inputs = document.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].classList.remove("error", "success");
    }
  }
    
function handleSubmitForm(e) {
  let hasErrors = false;
  e.preventDefault();
  resetInputsClass();
  let inputs = document.getElementsByTagName("input");
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].value.trim() == "") {
      inputs[index].classList.add("error");
      hasErrors = true;
    } else {
      inputs[index].classList.add("success");
    }
  }

  if (!hasErrors) {
    this.submit();
  }
}

