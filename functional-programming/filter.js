/* filter method create new Array,not modify existing array! */
let arr = [23, 34, 45, 2, 4, 5, 3, 3];

/* let filterArray = arr.filter(function (v) {
  return v % 2 === 0;
});
console.log(filterArray); */

// implement filter function using callback function

function myFilter(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let oddNumber = myFilter(arr, function (value) {
  return value % 2 !== 0;
});
let gaterThan3 = myFilter(arr, function (value) {
  return value > 3;
});
console.log(oddNumber);
console.log(gaterThan3);
