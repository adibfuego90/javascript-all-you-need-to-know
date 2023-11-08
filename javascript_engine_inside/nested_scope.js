var x = 45;
function test() {
  var x = 55;
  // console.log(x);
  function nested() {
    var y = 65;
    console.log(x);
  }
  nested();
}
test();

/* When a function is created then always a scope created.
In scope, js first see function scope if they don't find then see the parent and global.*/
