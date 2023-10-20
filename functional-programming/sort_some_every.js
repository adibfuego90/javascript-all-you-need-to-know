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

let objArr = [
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
