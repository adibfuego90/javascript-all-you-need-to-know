// String comparison in javascript
/* 
In JavaScript, strings are compared using a concept called lexicographic (also known as lexicographical or alphabetical) ordering. Lexicographic ordering is a way of determining the relative order of strings based on the order of their characters in the Unicode character set.

When comparing strings lexicographically in JavaScript, each character's Unicode code point is compared. The comparison starts from the first character of each string and proceeds until a character difference is found or until one of the strings ends. The string that has a smaller Unicode value at the differing position is considered "less than" the other string.
 */
let a = "Apple";
let b = "apple";
// console.log(a < b);

// console.log("001" == 1);

let str1 = "apple tree";
let str2 = "banana";
console.log(str1 < str2);
