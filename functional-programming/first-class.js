/* 1.A function can be stored in  a variable
2.A function can be stored in an array
3.A function can be stored in an object
4.We can create function as need
 */

function add(a, b) {
  return a + b;
}

// A function can be stored in  a variable
let sum = add;
// console.log(sum(12, 23));

// A function can be stored in an array
let arr = [];
arr.push(add);
// console.log(arr);
// console.log(arr[0](21, 233));

// A function can be stored in an object
let obj = {
  sum: add,
};
// console.log(obj);
// console.log(obj.sum(1, 2));

// We can create function as need
setTimeout(function () {
  console.log("I am a function");
}, 1000);
