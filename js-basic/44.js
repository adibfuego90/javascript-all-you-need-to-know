let arr = [12, 34, 45, 56]; //literal method

// array length finding method with using given method
let len = 0;
while (true) {
  if (arr[len] === undefined) {
    break;
  } else {
    len++;
  }
}
console.log(len);

// array index and its element

let ind2 = arr[2];
console.log(ind2);

// Array declare constructor method
let arr2 = Array(23, 34, 5678, 78);
arr2[4] = 5; // new value assign
arr2[0] = 1; //Update existing value
console.log(arr2);
