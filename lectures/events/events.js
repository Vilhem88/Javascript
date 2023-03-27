let main = document.getElementById("main");

function handleClick(e) {
  e.target.style.color = "red";
}
main.addEventListener("click", handleClick);

let counter = 0;

let button = document.getElementById("awardBtn");

function handleBtnClick(e) {
  counter++;
  alert("Congratulations");

  if (counter == 5) {
    button.removeEventListener("click", handleBtnClick);
  }
}

awardBtn.addEventListener("click", handleBtnClick);

// mouse over

let mouse = document.getElementById("mouseOver");

function handleMouseOver(e) {
  e.target.style.backgroundColor = "blue";
}

function handleMouseLeave(e) {
  e.target.style.backgroundColor = "unset";
}

// mouse.addEventListener("mouseover", handleMouseOver);
mouse.addEventListener("mouseleave", handleMouseLeave);

//------- key up/down/press -----//

let nameInput = document.getElementById("name");
let lastnameInput = document.getElementById("lastname");

function handleKeyUpInput(e) {
  console.log(e);
  let currentVal = e.target.value;
//   alert(`korisnikot do sega ima vneseno, ${currentVal}`);
}
nameInput.addEventListener("keyup", handleKeyUpInput);
// console.log(nameInput, 'name input')

//--------- change events radio.checkbox.select-----//

let age = document.getElementById("age");

function handleChange(e) {
  console.log(e.target.value);
}

age.addEventListener("change", handleChange);

//---------------- Window event listener  --------//

function handleLoad() {
  // alert('Welcome to my page')
}
window.addEventListener("load", handleLoad);

window.addEventListener("resize", handleResize);
function handleResize() {
  console.log("Goleminata se promeni");
}

//  --------- FORMS ----- //

let userForm = document.getElementById("userForm");

function handleSubmit(e) {
  let nameInput = document.getElementById("name").value;
  let lastnameInput = document.getElementById("lastname").value;
  if (nameInput.length < 3) {
    alert("Please enter a valid name");
    e.preventDefault();
  }

  //   alert("The Form is now submitted");
  console.log(nameInput, lastnameInput);
}

let help = document.getElementById("help");

help.addEventListener("click", handleHelpClick);

function handleHelpClick(e) {
  let nameInput = document.getElementById("name").value;

  if (nameInput.length > 3) {
    e.preventDefault();
  }
}

userForm.addEventListener("submit", handleSubmit);

// .......................................//////........./////////........

let clickMe = document.getElementById("click");

function handleClick(e) {
  let h1Tag = document.getElementById("h1Tag").textContent;
  if (h1Tag === "Hello") {
    document.getElementById("h1Tag").innerHTML = "I am new Text";
  } else if (h1Tag === "I am new Text") {
    document.getElementById("h1Tag").innerHTML = "Hello";
  }
}

click.addEventListener("click", handleClick);

let counting = 0
let hover = document.getElementById('hover')
function handleMouseOver(e){

    counting++;
    alert(`mouse is over me ${counting} times`)
}

// hover.addEventListener("mouseover", handleMouseOver)

// -------------------------------------------------------
const newForm =  document.getElementById('formSecond')
const selectAge = document.getElementById('ageYear')
const firstName = document.getElementById('firstname')
const surName = document.getElementById('surname')


function handleSubmitNewForm(e) {
   
    e.preventDefault()
    
    validation()
}

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerHTML = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerHTML = ' ';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

function validation (){
    
    const firstNameValue = firstName.value.trim
    const surNameValue = surName.value.trim

    if(firstNameValue === '' || surNameValue <= 2){
        setError(firstName, 'First name is required')
    }else{

        // setSuccess(firstName)
    }

}


newForm.addEventListener('submit', handleSubmitNewForm)

// console.log(newForm)

