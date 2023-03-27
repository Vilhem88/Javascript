const arrayNumbers = [1, 20, 3, 7, 80, 10, 58, 60, 100, 25];
const arrayProducers = [
  "Volvo",
  "Honda",
  "Mercedes",
  "BMW",
  "Audi",
  "Mazda",
  "Toyota",
];
// ----------------------------------------------------------------------------------------------------------
const paragraphOne = document.getElementById("paragraphOne");
const paragraphTwo = document.getElementById("paragraphTwo");
// ----------------------------------------------------------------------------------------------------------
const arrLength = document.getElementById("arrLength");
const arrContent = document.getElementById("arrContent");
// ------------------------------------------------------------------------------------------------------------
arrLength.addEventListener("click", handleArrLength);
arrContent.addEventListener("click", handleArrContent);
// ------------------------------------------------------------------------------------------------------------

function handleArrLength(e) {
  let result = document.createElement("div");
  let sumNums = arrayNumbers.length;
  let sumCars = arrayProducers.length;
  result.innerHTML += `The length of the Numbers is ${sumNums}<br>`;
  result.innerHTML += `The length of the Car Producers is ${sumCars}`;
  paragraphOne.appendChild(result);
}

function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function handleArrContent() {
  let content = document.createElement("div");
  let sum = calculateSum(arrayNumbers);
  let numLength = arrayNumbers.length;
  let avg = sum / numLength;
  let producers = arrayProducers.toString();

  content.innerHTML += `The sum of the numbers is ${sum}<br>`;
  content.innerHTML += `The average sum of the numbers is ${avg}<br>`;
  content.innerHTML += `The car Producers are: ${producers} `;
  paragraphTwo.appendChild(content);
}

// --------------------------------------------------- VTORA ZADACA -------------------------------------------------------------------------//

const addFile = document.getElementById("addFile");
const removeFile = document.getElementById("removeFile");
const formFile = document.getElementById("formFile");
// --------------------------------------------------------------------

addFile.addEventListener("click", handleAddNewFile);
removeFile.addEventListener("click", handleRemoveFile);


var max = 0;
var SOME_GENERATED_ID = 0;
function handleAddNewFile() {
  SOME_GENERATED_ID++;
  max++;
  if (max <= 10) {
    let fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("id", ('input' + SOME_GENERATED_ID));
    let newIn = formFile.appendChild(fileInput);
    newIn.style.marginTop = "30px";
  }
  return false;
}

function handleRemoveFile() {
  let lastChild = formFile.length;
  if (lastChild !== 0) {
    formFile.removeChild(formFile.lastChild);
  }
}

// -------------------------------------------------TRETA ZADACA ------------------------------------------------------------------//

const spanEl = document.getElementById("spanEl");
const btnSpan = document.getElementById("btnSpan");
const btnAnchor = document.getElementById("btnAnchor");
const main = document.getElementById("main");
// --------------------------------------------------------------------------------
btnAnchor.addEventListener("click", handleClickAnchor);
btnSpan.addEventListener("click", handleClickSpan);

var count = 0;
var idName = 0;
function handleClickAnchor() {
  count++;
  idName++;
  if (count == 1) {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", spanEl.innerHTML);
    anchor.setAttribute("id", "a" + idName);
    anchor.innerHTML = spanEl.innerHTML;
    main.appendChild(anchor);
    spanEl.innerHTML = "";
  }
}

function handleClickSpan() {
  count++;
  if (count == 2) {
    let anchor = document.getElementById("a" + idName);
    spanEl.innerHTML = anchor.innerHTML;
    anchor.innerHTML = "";
  }
  return false;
}

// ---------------------------------  CETVRTA ZADACA -------------------------------------//

const addImage = document.getElementById("addImage");
const imageContainer = document.getElementById("imageContainer");

addImage.addEventListener("click", handleImageClick);
let imgCount = 0;
function handleImageClick() {
  imgCount++;
  if (imgCount <= 3) {
    let arrImg = [];
    arrImg[0] =
      "https://fastly.picsum.photos/id/209/200/300.jpg?grayscale&hmac=Ji7lTHhJCpcAjEXmpe7MIPXWDAhbqfIfr64RjgORYig";
    arrImg[1] =
      "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI";
    arrImg[2] =
      "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
    let number = Math.floor(Math.random() * arrImg.length);
    let newImg = document.createElement("img");
    newImg.setAttribute("src", arrImg[number]);
    imageContainer.appendChild(newImg);
  }
}

// ---------------------- PETTA ZADACA ------------------//

let text = document.getElementById("text");
let randText = document.getElementById("randText");
let origText = randText.innerText;

text.addEventListener("keyup", handleKeyUp);
function handleKeyUp() {
  randText.innerHTML = origText
    .split(text.value)
    .join(`<span style="color:red">${text.value}</span>`);
}
