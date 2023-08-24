// string length calculation without length() function

const str = "My name is adibur rahman";

let length = 0;

// using while loop
while (true) {
  if (str.charAt(length) === "") {
    break;
  } else {
    length++;
  }
}
console.log(length);

/* for (let i = 0; ; i++) {
  if (str.charAt(i) === "") {
    break;
  } else {
    length++;
  }
}
console.log(length); */

/* ---------------------------------------------------- */
// with buildIn method
console.log(str.length);
