/* String Literal:

A string literal is a sequence of characters enclosed in double quotes. When you create a string using a literal, the compiler creates a string object in the memory pool called the "string pool" or "string intern pool." If a string with the same content already exists in the pool, the new string reference points to the existing object. */
let str = "My name is String Literal";
console.log(str);

/* String Constructor:
You can create strings using the String class constructor as well. This approach creates a new string object regardless of whether a string with the same content already exists in the pool. This can be useful when you want to ensure that a new object is created, rather than reusing an existing one. */

/* Method -1 */
let a = 10;
let str2 = a.toString(a);
console.log(typeof str2);

/* Method -2  */
let b = 23;
let str3 = String(b);
console.log(str3);
