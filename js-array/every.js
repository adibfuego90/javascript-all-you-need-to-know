/* The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. - MDN */

const isBig = (currentValue) => currentValue < 40;

const arr1 = [23, 34, 56, 67];

console.log(arr1.every(isBig));
