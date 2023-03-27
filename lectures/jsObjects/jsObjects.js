// new object class

class Person {
  constructor(name, lastname, email) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
  }
}

let newPerson = new Person("Vilhem", "Leshi", "email@example.com");
console.log(newPerson.name);

//ProtoType Function creating an object with function

function Dog(_age, _bread, _parent, _children) {
  this.age = _age;
  this.bread = _bread;
  this.parent = _parent;
  this.children = _children;
}
// Add one more extra property
Dog.prototype.dogNumber = function (_dogNumber) {
  this.dogNumber = _dogNumber;
};

let newDog = new Dog(0.6, "Sheapered", "Tara", "not any yet");
newDog.dogNumber(9872234);

console.log(newDog);

// ------------------------------- Exercise ---------------------------///

var doggies = [];

const addBtn = document.getElementById("addBtn");
const name = document.getElementById("name");
const color = document.getElementById("color");
const bodyTbl = document.getElementById("bodyTbl");

function Doggie(_name, _color) {
  this.name = _name;
  this.color = _color;
}

addBtn.addEventListener("click", handleCreateNewDog);

var counter = 1;
function handleCreateNewDog() {
  if (name.value !== "" && color.value !== "") {
    let newObj = "newDogObject" + counter++;
    newObj = new Doggie();
    newObj.name = name.value;
    newObj.color = color.value;
    doggies.push(newObj);
    listDog(doggies);
    name.value = "";
    color.value = "";
    doggies = [];
  }
}

var idCount = 1;
function listDog(arr) {
  for (var i = 0; i < arr.length; i++) {
    var idTr = (arr[i]+idCount++)
    var newTr = document.createElement("tr");
    newTr.setAttribute('id', idTr)
    var newTd1 = document.createElement("td");
    var newTd2 = document.createElement("td");
    var  newTd3 = document.createElement("td");
    var  newTd4 = document.createElement("td");
    newTd1.innerHTML = arr[i].name;
    newTd2.innerHTML = arr[i].color;
    newTd3.innerHTML = 'delete';
    newTd4.innerHTML = 'edit';
    newTd3.style.color = 'red'
    newTd4.style.color = 'blue'
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd4);
    bodyTbl.appendChild(newTr);
  }

  newTd3.addEventListener('click', deleteTr)
  newTd4.addEventListener('click', editTr(idTr, newTd1,  newTd2))

}

function deleteTr(){
    let lastChild = bodyTbl.length;
    if (lastChild !== 0) {
      bodyTbl.removeChild(bodyTbl.lastChild);
    }
}

function editTr(idTr, newTd1, newTd2){
   
    document.getElementById(idTr)
    console.log( newTd1.innerHTML,  name.value);
    name.value = newTd1.innerHTML
    color.value = newTd2.innerHTML
}