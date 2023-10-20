let arr = [11, 2, 4, 1, 4, -4, -23, 3, 33];

/* arr.sort(); //not working properly 
console.log(arr); */

/* arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {      //Now working properly 
    return -1;
  } else {
    return 0;
  }
});
console.log(arr); */

/* let objArr = [
  { name: "A", age: 21 },
  { name: "B", age: 20 },
  { name: "C", age: 23 },
  { name: "D", age: 34 },
];
objArr.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(objArr);
 */

// is it positive number in array or not?
let arr2 = [23, 34, 23, 4, 5, 56, 7, 8, 9, 2];
let result1 = arr2.every(function (value) {
  return value >= 0;
});
console.log(result1);

// is it even number or not?
let result2 = arr2.every(function (value) {
  return value % 2 === 0;
});
console.log(result2);

//some method : return true if any element satisfied the rule
let result3 = arr2.some(function (value) {
  return value < 0;
});
console.log(result3);
