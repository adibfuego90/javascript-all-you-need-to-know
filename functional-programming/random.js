//Sort method
/* let arr = [-1, 0, -23, 23, 11, 34, 45, 56];

let result = arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(result);
 */

// Every method
/* let arr = [12, 3, 3, 1, 5, 6];
let result = arr.every(function (value) {
  return value >= 0;
});
console.log(result); */

// some method
/* let arr = [23, 34, 45, 56, 5768, 7, 7];
let result = arr.some(function (value) {
  return value % 2 === 0;
});
console.log(result); */

/* 
In Functional programming there is 3 main terms : 1. Pure Function 2.First class function 3. Higher Order function 
*/

/* 
// Pure Function:
function add(a, b) {
  return a + b;
}
let result = add(23, 34);
console.log(result);
 */

/* 
// Not Pure Function :
let a = 90;
function rn() {
  a = 900;
}
rn();
console.log(a); //Value of variable has changed so this function is not a pure function */

// First Class Function :
