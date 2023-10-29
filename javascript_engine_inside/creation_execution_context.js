/* Their are two phase in Javascript context 

1. Creation phase 
2.Execution phase 

- creation phase: Deals with the setup of memory space for variable and function 
- execution phase: In this phase the actual code is run.

- Remember, function declarations are stored in their entirety during the creation phase, while variable declarations are initialized with 'undefined'. This is why you can call a function before it's declared in your code.

However, it's important to note that function expressions (e.g., let myFunction = function() {...}) are not hoisted in the same way as function declarations, so they can't be called before they are defined in your code.
*/

let a = 90; // creation phase : let a; execution phase : a =90;

function add(n, m) {
  return n + m; // creation phase : add function ref; execution phase : execute that ref function
}
add(); // Execution start from here
