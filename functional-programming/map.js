let arr = [1, 2, 4, 5, 12];

/* let sqrArr = arr.map(function (v, i, arr) {
  return arr;
});

console.log(sqrArr); */

function myMap(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] * arr[i];
    newArray.push(temp);
  }
  return newArray;
}
console.log(myMap(arr));
