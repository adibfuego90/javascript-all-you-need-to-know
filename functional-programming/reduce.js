let arr = [2, 45, 6, 6, 7];
/* 
let sum = arr.reduce(function (prev, curr, i, arr) {
  // console.log(arr);
  return prev + curr;
}, 200);

let max = arr.reduce(function (prev, curr) {
  return Math.max(prev, curr);
});
console.log(sum);
console.log(max);
 */

// implementation
function myReduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

let arr2 = [23, 34, 1, 2, 4, 5, 3];

let sum = myReduce(
  arr2,
  function (prev, curr) {
    return prev + curr;
  },
  0
);

console.log(sum);
