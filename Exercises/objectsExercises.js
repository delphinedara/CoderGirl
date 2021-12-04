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

console.log(backpack);


