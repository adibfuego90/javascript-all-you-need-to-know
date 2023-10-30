/* Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope during the creation phase of the execution context. This means that you can use a variable or call a function before it has been declared in your code.

It's important to note that only the declarations are hoisted, not the initializations or assignments. */

let a = 900;

print(a);
let newPrint = print;
newPrint(45);
function print(a) {
  console.log(a);
}

print(a);
