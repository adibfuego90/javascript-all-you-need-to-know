// Execution context is one kind of object. It use stack data structure.

function a() {
  b();
  console.log("I Am function A");
}

function b() {
  c();
  console.log("I Am function B");
}
function c() {
  console.log("I Am function C");
}

let av = 90;
a();
console.log("I am Global context");

/*  Creation of context : 
 4.Execution of function C context 
 3.Execution of function B Context 
 2.execution of function A context 
 1.Global Context  */

/* Execution of Context :
 1.Execution of function C context 
 2.Execution of function B context 
 3.Execution of Function A Context
 4.Global Context
  */
