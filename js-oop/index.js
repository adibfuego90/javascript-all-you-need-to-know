/* let obj = {
  width: 90,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};
console.log(obj.area()); */

/* // Understand "this" keyword
// 1. when you use this keyword into obj then it ref that obj
let obj = {
  draw: function () {
    console.log(this);
  },
};
obj.draw();

// 2. use this without any object it will ref window object
function myFunc() {
  console.log(this);
}
myFunc(); */
