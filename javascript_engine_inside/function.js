// function declaration
abc();
function abc() {
  console.log("I am function declaration");
}
97;

// abc();

// function expression
a(); // give us error just because hoisting
let a = function () {
  console.log("I am function expression");
};
a();

/* 
creation phase : 
a = undefined;

execution phase : 
a() -> give us an error 
*/
