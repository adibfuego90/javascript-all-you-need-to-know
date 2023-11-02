/* In JavaScript, scope defines the accessibility or visibility of variables, functions, and objects in particular parts of your code during runtime.  */

let a = 90;

function print() {
  let a = 99;
  console.log(a);
}
print();
/* in print function search variable in functional scope and find a which assign value 99. This why print function print 99.
if their is no variable name with a then it search in outer scope in this case the outer scope is global scope. It will print 90. */

/* Remember, JavaScript follows lexical scoping rules, which means that the innermost scope takes precedence over outer scopes when resolving variable names. In this case, the local variable a inside the function print takes precedence over the global variable a. */
