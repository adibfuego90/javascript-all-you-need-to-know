// Functional scope
function outer() {
  function inner() {
    let a = 90;
  }
  inner();
}
outer();
// console.log(a); //We can't access a just because

// Sum number 1 t0 100
/* let result = 0;
for (let i = 0; i <= 100; i++) {
  result += i;
}
console.log("result : " + result); */

/* // Using recursive function
function add(n) {
  if (n === 0) {
    return 0;
  }
  return n + add(n - 1);
}
let result = add(100);
console.log(result); */

// Add odd number less than 100
/* let result = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    result += i;
  }
}
console.log(result); */

/* // Other way of do that
let result = 0;
for (let i = 1; i <= 100; i += 2) {
  result += i;
}
console.log(result); */

// Recursive way :
function sumOfOddNumber(n) {
  if (n <= 0) {
    return 0;
  } else {
    if (n % 2 !== 0) {
      return n + sumOfOddNumber(n - 1);
    } else {
      return sumOfOddNumber(n - 1);
    }
  }
}
let result = sumOfOddNumber(7);
console.log(result);
