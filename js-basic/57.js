// Iterate Object Properties in Javascript

let obj = {
  x: 10,
  y: 20,
  z: 30,
};

// console.log("x" in obj); //properties name must be in string

for (let key in obj) {
  // console.log(key);
  console.log(key + ": " + obj[key]);
}
