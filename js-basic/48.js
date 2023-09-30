// 2D Array in javascript or multi dimensional array in javascript

// 2D Array

let arr = [
  [90, 98, 98, 95],
  [70, 73, 75, 76],
  [34, 34, 45, 67],
];

// console.log(arr[2][1]); //first one show the main array element as [34,34,45,67]

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log("Element of " + i + ": " + arr[i][j]);
  }
}
