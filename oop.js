// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor (animal){
    this.name = "name"
    this.color = "silver";
  }
  changeName(newName){
    this.name = newName;
  }
}
 var horse1 = new Unicorn ("Percy")
 console.log(horse1)

 horse1.changeName("*~*This is a unicorn*~*");
 console.log(horse1)

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire{
  constructor(name){
    this.name = name;
    this.pet = "bat";
    this.thirst = true;
  }
  changeDrink(newDrink){
    this.thirst = newDrink;
  }
  changeName(newName){
    this.name = newName
  }
}
var name1 = new Vampire ("Percy");
console.log(name1)

name1.changeName("Vlad");
console.log(name1);

var name2 = new Vampire ("Sam");
console.log(name2);

name2.changeDrink(false);
console.log(name2);


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
class Dragon{
  constructor(){
    this.name = "Temeraire";
    this.rider = "Angie";
    this.color = "Purple";
    this.isHungry = true;
  }
  notHungry(eats){
    this.isHungry = eats
  }
}
var eats1 = new Dragon(true);
console.log(eats1);
console.log(eats1);
console.log(eats1);
console.log(eats1);

eats1.notHungry(false);
console.log(eats1);


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit{
  constructor(name, disposition){
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false
  }
}
if(name = "Frodo"){
  hasRing = true;}
  else hasRing = false;

  if(this.age >= 33){
    isAdult = true;
  }
  if (this.age >= 101){
    isOld = true;
  }
celebrateBirthday(happy){
  this.age + 1 === newAge;
  }

var happy1 = new newAge;
console.log(happy1);
