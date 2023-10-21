// Recursive function can call himself

/* // Print 10 time "Hello,Adibur Rahman"
function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log("Hello,Adibur Rahman");
  sayHi(n - 1);
}
sayHi(10); */

/* 
// Add 1-10 number using recursive function
function addNumber(n) {
  if (n === 1) {
    return 1;
  }
  return n + addNumber(n - 1);
}
console.log(addNumber(5));
 */

/* 
// factorial calculation using recursive function
function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5));
 */

// Calculate sum of an array using recursive function

let arr = [23, 3, 4];
function sumOfArr(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumOfArr(arr, lastIndex - 1);
}
console.log(sumOfArr(arr, arr.length - 1));
