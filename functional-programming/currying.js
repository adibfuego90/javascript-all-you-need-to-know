/* Currying in Javascript transforms a function with multiple arguments into a nested series of function, each taking a single argument  */

// simple function :
function add(a, b, c) {
  return a + b + c;
}
let sum = add(15, 10, 5);
console.log(sum);

// Currying Function:
function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let result = currying(15)(10)(5);
console.log(result);
