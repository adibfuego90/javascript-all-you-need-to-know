// Data search in array

let arr = [12, 23, 34, 45, 1, 3, 4];
let find = 112;

let isFound = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log(`The Number is find in index: ` + i);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("Given Number is did bot find in array");
}
