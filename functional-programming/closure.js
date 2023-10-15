function a() {
  let b = 90;
  return function () {
    console.log(b); //In this code b is closure,because b variable declare in outer function and use in inner function without argument pass
  };
}

let c = a();
console.dir(c); //Use this code to the browser console to see the output
