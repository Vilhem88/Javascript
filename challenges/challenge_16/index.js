class Book {
  constructor(_id, _title, _author, _maxPages, _onPage) {
    this.id = _id;
    this.title = _title;
    this.author = _author;
    this.maxPages = _maxPages;
    this.onPage = _onPage;
    this.status = false;
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const maxPages = document.getElementById("maxPages");
const onPage = document.getElementById("onPage");
const submitForm = document.getElementById("submitForm");
const tbBody = document.getElementById("tbBody");

submitForm.addEventListener("submit", handleCreateNewBookObject);

var bookArray = [];
var counterId = 1;
var counter = 1;

function handleCreateNewBookObject(e) {
  e.preventDefault();
  let inputs = document.getElementsByTagName("input");
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].value.trim() == "") {
      return false;
    }
  }
  let book = new Book();
  book.id = counterId++;
  book.title = title.value;
  book.author = author.value;
  book.maxPages = maxPages.value;
  book.onPage = onPage.value;
  bookArray.push(book);
  title.value = "";
  author.value = "";
  maxPages.value = "";
  onPage.value = "";

  let procentage = (book.onPage / book.maxPages) * 100;
  procentage = Math.floor(procentage);

  var tr = document.createElement("tr");
  let th = document.createElement("th");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let div = document.createElement("div");
  let div2 = document.createElement("div");
  let checkBox = document.createElement("input");
  let btnDelete = document.createElement("button");

  // delete button //
  btnDelete.innerText = "delete";
  btnDelete.classList.add("btn-link");
  btnDelete.classList.add("btn");
  btnDelete.classList.add("p-2");
  btnDelete.setAttribute("id", "btn-" + book.id);
  btnDelete.addEventListener("click", function (e) {
    e.preventDefault();
    tr.remove();
    let btnId = e.target.getAttribute("id");
    let objectId = btnId.split("-")[1];
    var index = null;
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].id == objectId) {
        index = i;
      }
    }
    bookArray.splice(index, 1);
  });

  // checkbox //
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", book.id);
  checkBox.addEventListener("change", function (e) {
    let isChecked = e.target.checked;
    let getId = e.target.getAttribute("id");
    let wantedObject = bookArray.find(function (el) {
      return el.id == getId;
    });

    if (isChecked) {
      tr.classList.add("text-danger");
      wantedObject.status = true;
    } else {
      tr.classList.remove("text-danger");
      wantedObject.status = false;
    }
  });

  div2.style.border = "1px solid black";
  div2.style.width = "100%";
  div.style.backgroundColor = "green";
  div.style.width = procentage + "%";
  div.innerHTML = procentage + "%";
  th.innerHTML = counter++;
  td1.innerHTML = book.title;
  td2.innerHTML = book.author;
  td3.innerHTML = book.maxPages;
  td4.innerHTML = book.onPage;
  div2.appendChild(div);
  td5.appendChild(div2);
  td6.append(checkBox, btnDelete);
  tr.append(th, td1, td2, td3, td4, td5, td6);
  tbBody.appendChild(tr);
}
