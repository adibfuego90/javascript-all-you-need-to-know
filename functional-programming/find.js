let arr = [11, 22, 3, 4, 3];

/* let result = arr.find(function (value) {
  return value === 11;
});
console.log(result); */

/* let indexNumber = arr.findIndex(function (value) {
  //Return Index number of value
  return value === 3;
});
console.log(indexNumber); */

// Implementation of Find and FindIndex

function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}

let resultValue = myFind(arr, function (value) {
  return value === 11;
});
console.log(resultValue);
