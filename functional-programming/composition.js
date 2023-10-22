/* Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until final function executed for the final result */

function A(inp) {
  console.log(inp);
}

function B(n) {
  return n * 5;
}

function C(a, b) {
  return a + b;
}

A(B(C(5, 3)));
