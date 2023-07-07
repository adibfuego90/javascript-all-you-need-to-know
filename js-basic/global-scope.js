let age = 90; //global variable : we can use it anywhere

if (true) {
  let age = 99;
  let name = "Adibur rahman";
  console.log("Inside code block:", age, name);
  if (true) {
    console.log("Inside 3nd code block:", age, name);
  }
}
console.log("Outside code block:", age);
