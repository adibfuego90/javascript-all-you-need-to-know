// Accessing object properties

// object :
let point = {
  x: 10,
  y: 20,
  z: 30,
};

// way -1 : Dot Notation
console.log(point.x);
console.log(point.y);

// way -2 : Array notation
console.log(point["z"]);

// Note : when you don't know what property user went to find and accessing using variable then we must use array notation
let show = "y";
// console.log(point.show); //undefined
console.log(point[show]);
