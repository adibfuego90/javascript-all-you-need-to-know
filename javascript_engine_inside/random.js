// Functional scope
function outer() {
  function inner() {
    let a = 90;
  }
  inner();
}
outer();
console.log(a); //We can't access a just because
