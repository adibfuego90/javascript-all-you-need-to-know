let arr = [23, 34, 45, 56, 35, 100];
/* // Array Insertion
arr[3] = 33; // it will insert but replace existing value
// console.log(arr);

arr.push(200); // push new element in last
// console.log(arr);

arr.unshift(1); // push in first
console.log(arr);

arr.splice(0, 0, 0);
console.log(arr); */

// Array remove
arr[0] = undefined; // it will not remove element just value will not defined
// console.log(arr);

arr.pop(); //last element will popped
// console.log(arr);

arr.shift(); // first element will remove
// console.log(arr);

arr.splice(3, 1); //pop 3 index value
console.log(arr);
