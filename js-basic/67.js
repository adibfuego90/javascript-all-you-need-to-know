// Function Scoping in JS

let a = 10; //Global Scope

function x() {
  console.log(a); //10; Because global scope variable can be use every where
  function y() {
    let a = 90;
    console.log(a); //90; function scope ;
  }
  y();
}
x();

// var can be accessed outside block

if (true) {
  var b = 90;
  console.log(b); //we can access "b" from any where
}

console.log(b);

// let and const is block scope not function scope
if (true) {
  oiy;
  let letVar = "I am let variable";
  const constVar = "I am const variable";
}
// console.log(letVar);  //error
// console.log(constVar); //error
