/* let num = 10;
let str = "10";
let result = num + str;
console.log(result); // 1010 -> type coercion 
console.log(typeof result); //string because of type coercion 
 */

// fun with user

let correctNumber = 33;
let userGuess = prompt("Enter a number : ");
if (correctNumber == userGuess) {
  console.log("Congratulation you guess correct number ");
} else {
  console.log("Wrong number" + "Try Again");
}
