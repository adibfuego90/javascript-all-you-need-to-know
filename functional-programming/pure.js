// Pure function returns the same result if given the same arguments
// It does not cause observable side effect

// Pure Function
function sqr(n) {
  return n * n;
} //This function always return same value if arguments is same and no side effect so it's a pure function
/* console.log(sqr(3));
console.log(sqr(3));
console.log(sqr(3)); */

// Not Pure function
let a = 90;
function changeValue() {
  a = 9000;
}
changeValue();
console.log(a); //value of a variable is change when function is called so this function is not a pure function

let point = {
  x: 90,
  y: 900,
};

function printPoint(point) {
  point.x = 100;
  point.y = 1000;
  console.log(point);
} // function change the value of point object this why it's not a pure function

printPoint(point);
console.log(point);
