/* In Javascript, function can be called before it declare.  */

abc(); // it will return "I'm function"

function abc() {
  console.log("I'm function");
}

abc(); //It also return "I'm function"
