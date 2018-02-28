/* 
OBJECTS EXERCISE

1. Create three variables, called monkey1, monkey2, and monkey3, and set the 
   value of each to an empty object.

2. For each monkey object, add the following properties:
   * name (a string containing a name for the monkey, like Hermione)
   * species (a string containing a species of monkey, like howler)
   * foodsEaten (an empty array)

3. For each monkey object add the following methods:
   * eatSomething (takes a single parameter, and adds the value of that
     parameter to the foodsEaten array
   * introduce (logs a string introducing itself to the console, including its
     name, species, and what it's eaten)
*/

const monkey1 = {
  name: "Hermione",
  species: "howler",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey1.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey1.name +". I come from the "+ 
    monkey1.species + " family. I have eaten these foods: "+ 
    monkey1.foodsEaten.join(", ") + ".");
  }
};

const monkey2 = {
  name: "Severus",
  species: "pygmy marmoset",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey2.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey2.name +". I come from the "+ 
    monkey2.species + " family. I have eaten these foods: "+ 
    monkey2.foodsEaten.join(", ") + ".");
  }
};

const monkey3 = {
  name: "Jane",
  species: "squirrel monkey",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey3.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey3.name +". I come from the "+ 
    monkey3.species + " family. I have eaten these foods: "+ 
    monkey3.foodsEaten.join(", ") + ".");
  }
};

/*
4. Write JavaScript statements to do the following:
   * have each monkey eat at least two foods
   * log each property of each monkey to the console, using dot notation
   * have each monkey introduce itself
*/

monkey1.eatSomething("banana");
monkey1.eatSomething("kombucha");
console.log(monkey1.name);
console.log(monkey1.species);
console.log(monkey1.foodsEaten);
monkey1.introduce();

monkey2.eatSomething("peach");
monkey2.eatSomething("plum");
console.log(monkey2.name);
console.log(monkey2.species);
console.log(monkey2.foodsEaten);
monkey2.introduce();

monkey3.eatSomething("pineapple");
monkey3.eatSomething("bacon");
console.log(monkey3.name);
console.log(monkey3.species);
console.log(monkey3.foodsEaten);
monkey3.introduce();

/*
5. Open monkey.html in the browser, check the console, and verify that all
   statements produce the output you expect. 

BONUS: Rewrite the statements from Step 4 using square bracket notation, having
   each monkey eat 2 new foods.
*/

monkey1["eatSomething"]("grapes");
monkey1["eatSomething"]("french fries");
console.log(monkey1["name"]);
console.log(monkey1["species"]);
console.log(monkey1["foodsEaten"]);
monkey1["introduce"]();

monkey2["eatSomething"]("salad");
monkey2["eatSomething"]("clementine");
console.log(monkey2["name"]);
console.log(monkey2["species"]);
console.log(monkey2["foodsEaten"]);
monkey2["introduce"]();

monkey3["eatSomething"]("yogurt");
monkey3["eatSomething"]("donuts");
console.log(monkey3["name"]);
console.log(monkey3["species"]);
console.log(monkey3["foodsEaten"]);
monkey3["introduce"]();