// Return Something from Function in JS

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
  console.log(
    "After using return statement nothing will execute in javascript "
  );
}

let result1 = add(1, 2, 3);
let result2 = add(4, 5, 6);

let sumOfAll = result1 + result2;
console.log(sumOfAll);
