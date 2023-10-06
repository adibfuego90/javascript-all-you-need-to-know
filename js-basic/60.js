// Define a function in javascript

// Declaration function : simple way
function functionName(x, y) {
  return a * b;
}

// Expression function and anonymous function
const multiply = function (x, y) {
  return x * y;
};

// Expression function and function that has name
const add = function added(x, y) {
  return x + y;
};

// Arrow function
const sub = (x, y) => x + y;

// Constructor
const sum = new Function("x", "y", "return x+y");

// Object
const obj = {
  mult(x, y) {
    return x * y;
  },
};
