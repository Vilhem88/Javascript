// Perfect Abundant Deficient Number //

function perfectNumber(someNumber) {
  if (typeof someNumber !== "number") {
    alert("Number must be a number");
    return false;
  }

  let maxDivider = Math.floor(someNumber / 2);
  let sum = 0;
  for (let i = 1; i <= maxDivider; i++) {
    if (someNumber % i === 0) sum += i;
  }

  if (sum === someNumber) {
    console.log("Number is perfect");
    return true;
  } else if (sum > someNumber) {
    console.log("Number is abundant");
    return true;
  } else if (sum < someNumber) {
    console.log("Number is deficient");
    return true;
  }
}

// console.log(perfectNumber(6));
// console.log(perfectNumber(28));
// console.log(perfectNumber(12));
// console.log(perfectNumber(24));
// console.log(perfectNumber(8));

// Largest Product //----------------------------------------------------------------

let product = "1027839564";

function largestProduct(product, lengthOfChars) {
  if (typeof product !== "string") {
    console.log("Vnesete string");
    return false;
  }
  if (lengthOfChars > product.length) {
    console.log("Length of chars must be max ", product.length);
    return false;
  }

  let arrOfDigits = product.split("");
  let endOfArray = arrOfDigits.length - lengthOfChars;
  let maxProduct = 1;

  //   console.log('Ova e arrOfDigits', arrOfDigits)
  //   console.log('Ova e endOfArray', endOfArray)

  for (let i = 0; i <= endOfArray; i++) {
    let product = 1;
    // console.log('Ova prviot for i=>value', i, '=>', arrOfDigits[i] )
    for (let j = 0; j < lengthOfChars; j++) {
      // console.log("Ova e jot i gi zema posledovatelnite tri broja.  Ova e indexot na jot",  j,  ". Od zbirot na indexite na i + j se dobiva indexot ", (i + j), " so vrednost vo maticnata niza",  arrOfDigits[i + j]);
      // console.log('Ova e product | ',product *=  arrOfDigits[i + j])
      product *= arrOfDigits[i + j];
    }

    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}

console.log(largestProduct(product, 5));

function grossProduct(stringOfNumbers, chars) {
  if (typeof stringOfNumbers !== "string") {
    console.log("Vnesete string");
    return false;
  }
  if (chars > stringOfNumbers.length) {
    console.log("Length of chars must be max ", stringOfNumbers.length);
    return false;
  }

  let maxValue = 1;
  let arrayOfNumbers = stringOfNumbers.split("");
  let endOfArray = arrayOfNumbers.length - chars;

  for (let i = 0; i < endOfArray; i++) {
    let product = 1;

    for (let j = 0; j < chars; j++) {
      product *= arrayOfNumbers[i + j];
    }

    if (product > maxValue) {
      maxValue = product;
    }
  }
  return maxValue;
}

console.log(grossProduct(product, 5));
