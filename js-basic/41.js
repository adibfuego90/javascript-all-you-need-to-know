// String methods in JavaScript:

// 1. **concat()**: The `concat()` method is used to concatenate (join together) two or more strings and return a new combined string.

let str1 = "Hello, ";
let str2 = "world!";
let combined = str1.concat(str2);

console.log(combined); // Output: "Hello, world!"

// 2. **substr()**: The `substr()` method returns a portion of a string starting from a specified index and of a specified length.

let str3 = "Hello, world!";
let substring = str3.substr(7, 5);

console.log(substring); // Output: "world"

// 3. **charAt()**:  The `charAt()` method returns the character at a specified index in a string.

let str4 = "Hello";
let char = str4.charAt(2);

console.log(char); // Output: "l"

// 4. **startsWith()**: The `startsWith()` method checks if a string starts with a specified substring. It returns `true` if the string starts with the specified substring, otherwise `false`.
let str5 = "Hello, world!";

console.log(str5.startsWith("Hello")); // true
console.log(str5.startsWith("world")); // false

// 5. **endsWith()**: The `endsWith()` method checks if a string ends with a specified substring. It returns `true` if the string ends with the specified substring, otherwise `false`.

let str6 = "Hello, world!";

console.log(str6.endsWith("world!")); // true
console.log(str6.endsWith("Hello")); // false

// 6. **toUpperCase()**: The `toUpperCase()` method converts all characters in a string to uppercase.
let str7 = "Hello, world!";
let upper = str7.toUpperCase();

console.log(upper); // Output: "HELLO, WORLD!"

// 7. **toLowerCase()**:The `toLowerCase()` method converts all characters in a string to lowercase.

let str8 = "Hello, World!";
let lower = str8.toLowerCase();

console.log(lower); // Output: "hello, world!"

// 8. **trim()**:The `trim()` method removes whitespace characters from both the beginning and end of a string.

let str9 = "   Hello, world!   ";
let trimmed = str9.trim();

console.log(trimmed); // Output: "Hello, world!"

// 9. **split()**: The `split()` method is used to split a string into an array of substrings based on a specified delimiter.

let str10 = "apple,banana,orange";
let fruits = str10.split(",");

console.log(fruits); // Output: ["apple", "banana", "orange"]
