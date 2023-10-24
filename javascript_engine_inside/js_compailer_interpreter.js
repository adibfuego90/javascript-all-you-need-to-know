/* In general it may look as if JavaScript code is being executed line by line because of the parsing phase but the whole code is compiled at once to convert it to machine-readable code before execution. This shows that JavaScript is a Just-In-Time compiled language that uses an interpreter in its first phase. */

let result = a(90, 34);
console.log(result);

function a(a, b) {
  return a + b;
}
