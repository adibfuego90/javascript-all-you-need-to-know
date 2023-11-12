/* Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope  */

// Within scope

function test() {
  let msg = "I am Adibur rahman";
  function sayHi() {
    console.log(msg);
  }
  sayHi();
}

test();
