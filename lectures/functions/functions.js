// Named functions

function evenNumber(number) {
  if (number % 2 === 0) {
    console.log("even number");
  }
}

let a = 8;
evenNumber(a);

// function expressions

let oddNumber = function (number) {
  if (number % 2 === 1) {
    console.log("odd number");
  }
};

let b = 7;
oddNumber(b);

// Arrow functions

let summary = (a, b, c) => {
  let sum = a + b + c;
  return sum;
};

console.log(summary(3, 2, 6));

let changeColor = (id, color) => {
  let elementChange = document.getElementById(id);
  elementChange.style.color = color;
};

changeColor("heading", "green");

// callback function

function first(cb) {
  setTimeout(function () {
    console.log("A");
    cb();
  }, 3000);
}

function second() {
  console.log("B");
}

first(second);

let niza = [1, 2, 3, 4, 5, 6];

function sumNumber(arr, cb) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  cb(sum);
  return sum;
}

function third(num) {
  console.log("This is the final result ", num);
}

sumNumber(niza, third);
