// Function Expression in JS

let addition = function (a, b) {
  //Function expression and anonymous function
  return a + b;
};

let another = addition; //It only possible when we use function expression
console.log(another); //Result will be [function: addition]
console.log(another(23, 3)); //result= 26;

// Use case of anonymous function
setTimeout(function () {
  console.log("I will appear within 5 sec"); //This system is called asynchronous programming
}, 5000);
