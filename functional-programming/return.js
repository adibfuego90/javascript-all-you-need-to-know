/* function greet(msg) {
  function greeting(name) {
    return msg + "," + name + "!"; //here msg can be access just because of closure
  }
  return greeting;
}
let a = greet("Hello");
// console.log(a); //a store greeting function
let result = a("Adibur Rahman the web developer & CTO");
console.log(result);
 */

function base(b) {
  return function (p) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= b; //4^3 = 4*4*4
    }
    return result;
  };
}
let base23 = base(4);
console.log(base23(3));
