// Inner Function in JS
function something(greet, name) {
  function sayHi() {
    console.log(greet, name);
  }
  sayHi();
}
something("Good Night", "Adib");

function nameSpeak(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }
  let message = greet + " " + getFirstName();
  console.log(message);
}

nameSpeak("Hello", "Adibur rahman");
