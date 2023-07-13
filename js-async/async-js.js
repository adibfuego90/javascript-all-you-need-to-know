// Read this article : https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/

// Synchronous Programming - One task at a time

/* function firstTask() {
  console.log("First Task ");
}
function SecondTask() {
  console.log("second Task ");
}
function thirdTask() {
  console.log("third Task ");
}

// execute the function
firstTask();
thirdTask();
SecondTask(); */

/* function longFunction() {
  let start = Date.now();
  while (Date.now() - start < 5000) {}
  return "Hello";
}
console.log("staring ......");

let result = longFunction();
console.log(result);

console.log("Finishing .......");
 */

// Asynchronous Programming - can be run multiple program at a time

/* // setTimeout method

console.log("Start Script");
setTimeout(function () {
  console.log("First Time out");
}, 2000);
console.log("End of Script"); */

/* // CallBack Function
//declare function
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Adibur", age: 20 };
    callback(data);
  }, 3000);
}

// execute function with callback
fetchData(function (data) {
  console.log(data);
});
console.log("Data is being fetched"); */

/* // Callback hell or Pyramid of Doom

getData(function (a) {
  getMoreData(a, function (b) {
    getEvenMoreData(b, function (c) {
      getEvenEvenMoreData(c, function (d) {
        fetFinalData(d, function (finalData) {
          console.log(finalData);
        });
      });
    });
  });
}); */

// ----------------------------------------------------
/* 
// Create a Promise
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello from the Promise!");
    // rej("Not Possible");
  }, 2000);
});
console.log(myPromise);

// Consume a Promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  }); */

// Chain Promise
/* fetch("https://exapmle.com/data")
  .then((res) => res.json())
  .then((data) => processData(data))
  .then((processData) => {
    // do same thing with process data;
  })
  .catch((error) => {
    console.log(error);
  }); */

/* // Error handling with help of try catch block
fetch("https://api.github.com/users/octocat")
  .then((res) => {
    res.json();
  })
  .then((data) => {
    try {
      // process data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => {
    console.log(error);
  }); */

/* // Promise.all method
let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
let promise3 = fetch("https://jsonplaceholder.typicode.com/posts/3");

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}); */

// Async and await keyword

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

getData();
