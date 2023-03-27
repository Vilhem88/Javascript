function checkNum(num) {
  return num % 2 == 0
    ? `The Number is even: ${num}`
    : `The Number is odd: ${num}`;
}

console.log(checkNum(12));

var numbers = 100;
let nums = [];
for (var i = 10; i <= numbers; i++) {
  nums.push(i);
}
let result = [];
for (var i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0 && nums[i] % 3 == 0) {
    result.push(nums[i]);
  }
}

let num1 = 13;
let num2 = 15;
let num3 = 20;

let checkMin = Math.min(num1, num2, num3);
let checkMax = Math.max(num1, num2, num3);
console.log(checkMin);
console.log(checkMax);

function isPrime(num) {
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return num;
}

console.log(isPrime(13) + " is Prime");





