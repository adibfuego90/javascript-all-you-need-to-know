// Reverse an array without build in function
let arr = [1, 2, 3, 5];

/* for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
} */
// console.log(arr);

// Using build in function
console.log(arr.reverse());
