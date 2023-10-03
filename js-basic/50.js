// Simple array method :

let arr = [23, 34, 45];
let arr2 = [1, 2, 3, 4, 5];

// console.log(arr.join("|")); // output : 23 | 34 | 45

/* let arrJoin = arr.fill("adibTheWebDeveloper");
console.log(arrJoin);
 */

/* let arr3 = arr.concat(arr2);
console.log(arr3); */

// console.log(Array.isArray(arr2));

let array = [34, 43, 45, 54];
let duplicateArray = Array.from(array);
duplicateArray[0] = 0;
console.log(duplicateArray);
