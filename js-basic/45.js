// Js array traversing

let arr = [23, 45, 56, 576, 87];

// printing element
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Sum of all element
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(`Sum of\[${arr} \]= ` + sum);

// printing all even element and sum of even number
let sumEven = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("Even Number : \n" + arr[i]);
    sumEven += arr[i];
  }
}
console.log(sumEven);

// All odd number in this arr
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log("All Odd numbers:" + arr[i]);
  }
}
