let a = 90;
function A() {
  let b = 98;
  function B() {
    let c = 99;
    console.log(c);
  }
  function C() {
    let d = 92;
    console.log(d);
  }
  console.log(b);
  console.log(D(b));
  C();
  B();
}
function D(n) {
  return n + a;
}
A();

/* Scope 
A() -> a,b,B(),C(),D();
B() -> a,b,c,C(),D();
C() -> a,b,d,B(),D();
D() -> a,n,A() 
 */
