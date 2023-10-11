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
