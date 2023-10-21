// Recursive function can call himself

// Print 10 time "Hello,Adibur Rahman"
function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log("Hello,Adibur Rahman");
  sayHi(n - 1);
}
sayHi(10);
