/* The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. - MDN */

/* const isBig = (currentValue) => currentValue < 40;
const arr1 = [23, 34, 56, 67];
console.log(arr1.every(isBig)); */

/* The following example tests whether all elements in the array are 10 or bigger. */

function isBigEnough(element, index, array) {
  // console.log(index);
  return element >= 10;
}

let a = [12, 23, 34].every(isBigEnough);
console.log(a);

let b = [12, 3, 5, 6].every(isBigEnough);
console.log(b);
