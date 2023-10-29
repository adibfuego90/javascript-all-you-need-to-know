let a = 90;
let b;

console.log(a); // 90
console.log(b); //undefined

b = 91;
console.log(b); //91

console.log(c); //undefined
var c = 92; // if we use "Let" we will see an error :ReferenceError

/* 
Creation phase : 
a= undefined ;
b= undefined;
c =undefined 
*/

/* 
Execution Phase: 
a=90;
clg(a) -> 90;
clg(b) -> undefined;
b=91;
clg(b) ->91
clg(c) ->undefined;
c=92; 
 */
