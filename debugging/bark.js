function Dog(name) {
  this.name = name
}
Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()

// gets an error

let Dog = function(name){
  this.name = name;
};

Dog.prototype.bark = function() {
  return `Woof! My name is ${this.name}!`;
};

let doggo = new Dog('Doggo');

doggo.bark();

let roo = new Dog('Roo');

roo.bark();
