/* A Callback function is a function passed into another function as an argument, Which is then invoked inside the outer function to complete some kind of action  */

function sample(a, b, cb) {
  let c = a + b;
  let d = a - b;
  let result = cb(c, d);
  return result;
}

let sum = sample(5, 4, function (x, y) {
  return x + y;
});
console.log(sum);
