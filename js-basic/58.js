// Object Methods In JavaScript
let obj = {
  x: 10,
  y: 20,
  z: 30,
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Create new object using old one
let obj2 = Object.assign({}, obj);
console.log(obj2);
