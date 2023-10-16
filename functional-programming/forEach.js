/* let arr = [1, 2, 3, 4, 5, 6];

sum = 0;
arr.forEach(function (value, index, arr) {
  // console.log(value, index, arr);
  sum += value;
});
console.log(sum); 

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
let sum = 0;
myForEach(arr, function (x, index, fullArray) {
  // console.log(x);
  console.log(index);
  sum += x;
});
console.log(sum);

let arr2 = [12, 23, 45, 43];

myForEach(arr2, function (x, i, arr) {
  arr[i] = x + 5;
});
console.log(arr2);

 */
function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
let arr3 = [23, 32, 43, 34];
myForEach(arr3, function (x, i, arr) {
  arr[i] = x - 12;
});
console.log(arr3);
