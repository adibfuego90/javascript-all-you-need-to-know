// Comparing two object in javascript
let obj1 = {
  a: 10,
  b: 20,
};

let obj2 = {
  a: 10,
  b: 20,
};

// console.log(obj1 === obj2); //false because memory location is not same

/*
// 1st way : 
 if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
} */

//2nd way :
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
