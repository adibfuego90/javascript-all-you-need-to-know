/* 1.We can pass Function as a arguments
2.We can return function from another function */

function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  let x = a + b;
  let y = a - b;

  function multiply() {
    let m = func(a, b);
    return x * y * m;
  }
  return multiply;
}

let result = manipulate(34, 43, add);
console.log(result());
