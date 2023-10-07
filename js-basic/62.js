// Function argument and parameters in js
function add(a, b) {
  //in this line of code 'a'&'b' are parameters
  let result = a + b;
  console.log(result);
}

add(10, 34); //10 & 34 are arguments
add(3445, 34);

// let add array values using function
let arr1 = [23, 45, 323];
let arr2 = [233, 45, 64];

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfArray(arr1);
