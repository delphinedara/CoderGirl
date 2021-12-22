//Example 1 - person

let person ={
   'firstName': "John",//property
   'lastName': "Doe",
   'favoriteSong': function () {//method
      console.log(" Favorite song is ABC")

   },
   'age':30,
   'dogs': 3
}

// Example 2 - backpack
const backpack ={
   name: "Nike Backpack",
   volume: 30,
   color:"green",
   pocketNumber:15,
   straplength:{
      left:26,
      right:25,
   },
   lidOpen: false,
   toggleLid:function(lidStatus){
      this.lidOpen =lidStatus;
   }
};
   for (item in backpack) {
   console.log(item + ", " + backpack[item]);
   }


/* Objects and the Math Object Exercise 
At our space base, it is a historic day! 
Five non-human animals are ready to run a space mission without our assistance! 
For the exercises, you will use the same five animal objects throughout.*/ 

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() { return Math.floor(Math.random() * 11) }
 };
 
 let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() { return Math.floor(Math.random() * 11) }
 
 };
 
 let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() { return Math.floor(Math.random() * 11) }
 
 };
 let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() { return Math.floor(Math.random() * 11) }
 
 };
 let waterBear = {
   name: "Almina",
   species: " Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() { return Math.floor(Math.random() * 11) }
 
 };
 
 let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear]
 
 //Part B
 function crewReports() {
   for (let i = 0; i < crew.length; i++) {
     console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`)
   }
 
   return;
 }
 crewReports();
 
 //Part C
 
 // Before these animal astronauts can get ready for launch, they need to take a physical fitness test. Define a fitnessTest function that takes an array as a parameter.
 
 
 function fitnessTest(crew) {
   let results = [], numSteps, turns;
   for (let i = 0; i < crew.length; i++) {
     numSteps = 0;
     turns = 0;
     while (numSteps < 20) {
       numSteps += crew[i].move();
       turns++;
     }
     results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
 }
 
 fitnessTest(crew);
 
 




