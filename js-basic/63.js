// Arguments Object in Javascript

function add(a, b) {
  // console.log(arguments);
  // print arguments value  individual
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
// add(19, 23);

// We declare a unknown parameter function and want calculate sum of given argument
function sumOfUnknown() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
sumOfUnknown(23, 23, 23, 23, 23);
