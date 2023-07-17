// Read the Doc For better understanding : https://www.freecodecamp.org/news/how-javascript-implements-oop/

/* let names = {
  fname: " Adibur",
  lname: "Rahman",
};

console.log(names.fname);
console.log(names.hasOwnProperty("AD"));
console.log(names.lname);
// see the main object
console.log(names); // prototype is object so it has own property
 */

/* //Modifying the __proto__ property using the : "Object.create()"
function DogObject(name, age) {
  let dog = Object.create(constructorObject);
  dog.name = name;
  dog.age = age;
  return dog;
}
let constructorObject = {
  speak: function () {
    return "I am a MAN";
  },
};
let bingo = DogObject("Bingo", 23);
console.log(bingo); */

/* //  New Keyword :
function DogObject(name, age) {
  this.name = name;
  this.age = age;
}
DogObject.prototype.speak = function () {
  return "I am a MAN";
};

let jon = new DogObject("jon", 45);
console.log(jon); */

/* 
// Class Keyword :
 class Animal {
  constructor(name, specie) {
    this.name = name;
    this.specie = specie;
  }
  sing() {
    return `${this.name} can sing`;
  }
  dance() {
    return `${this.name} can dance`;
  }
}

let bingo = new Animal("Bingo", "Dog");
console.log(bingo); 

//Try this with class keyword
function Animal(name, specie) {
  this.name = name;
  this.specie = specie;
}
Animal.prototype.sing = function () {
  return `${this.name} can sing well`;
};
Animal.prototype.Dance = function () {
  return `${this.specie} can Dance well`;
};
let bingo = new Animal("Bingo", "Dog");
console.log(bingo); 
*/

// SubClass using class keyword :
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sing() {
    return `${this.name} can Sing`;
  }
  dance() {
    return `${this.name} can Dance`;
  }
}
class Cats extends Animal {
  constructor(name, age, whiskerColor) {
    super(name, age);
    this.whiskerColor = whiskerColor;
  }
  whisker() {
    return `I have ${this.whiskerColor} whisker `;
  }
}
let clara = new Cats("Clara", 34, "Red");

console.log(clara.sing());
console.log(clara.dance());
console.log(clara.whisker());
