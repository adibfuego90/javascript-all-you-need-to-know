// Functional scope
function outer() {
  function inner() {
    let a = 90;
  }
  inner();
}
outer();
// console.log(a); //We can't access a just because

// Print number 1 t0 100
/* let result = 0;
for (let i = 0; i <= 100; i++) {
  result += i;
}
console.log("result : " + result); */

// Using recursive function
function add(n) {
  if (n === 0) {
    return 0;
  }
  return n + add(n - 1);
}
let result = add(100);
console.log(result);
