// // //Sequential for loop examples

// // for(var i = 0; i<=10; i +=1){
// // console.log(i);
// // }

// var deskItems = [
//     "Cell Phone ",
//     "Laptops ",
//     "Glass",
//     "Cup",
//     "Book",
//     "Pen"
// ];

// // for (i=0;i<deskItems.length;i+=1){
// //     console.log(deskItems[i])
// // };

// // //Enumerative for loops examples
// // for (var i in deskItems){
// //     console.log(i, deskItems[i]);
// // };

// //While loops
// var i =0;
// while (i<=10){
//     console.log(i);
//     i+=1;
// }

// //do while loop

// var popItem = "Cup";
// do{
//  console.log(
//      "array has" +
//      deskItems.length +
//      " items as of now. This loop will go untol we pop Cup"
//      );
//      popItem=deskItems.pop();
// } while (popItem !== "Cup");


// Exercises 
// Construct for loops that accomplish the following tasks:
// Print the numbers 0 - 20, one number per line.
for(var i = 0; i<=20; i +=1){
    console.log(i);
    }
// Print only the ODD values from 3 - 29, one number per line.
for(var i = 3; i<=29; i++){
    if (i%2==1){
        console.log(i);
    }
    }
// Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let i=12; i>-14; i-=2){
    console.log(i);
}
// Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let i=50; i>20; i--){
    if (i%3==0) {console.log(i);}
}
// Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], 
//then construct for loops to accomplish the following tasks:
let str ="Launchcode";
let arr = [1, 5, 'LC101', 'blue', 42];

// Print each element of the array to a new line.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
 }

// Print each character of the string---in reverse order---to a new line.
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log (reverseString("Launchcode"));

var reversedStr="";
for (var i = str.length -1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);

// Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
let arr2= [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
let evenArr =[];
let oddArr =[];
// In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.
// Print the arrays to confirm the results. Print evens first. Example: console.log(evens);
for (i=0 ; i<arr2.length; i++){
    if (arr2[i]%2==0){
        evenArr.push(arr2[i]);
    }else {
        oddArr.push(arr2[i]);  
    }
}
console.log(oddArr);
console.log(evenArr);

//while practice
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
 
let fuelLevel =0;
let numAstronauts=0;
let altitudeShuttle=0;
const input=require('readline-sync');


/*Exercise #4: Construct while loops to do the following:
 a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


 while (fuelLevel<=5000 || fuelLevel>30000 || isNaN(fuelLevel)){
    fuelLevel= input.question ("Enter starting fuel level:");
    
 }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (numAstronauts < 1 || numAstronauts>8 || isNaN(numAstronauts)){
 numAstronauts= input.question ("Enter astronauts number:");}

 
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while(fuelLevel-100*numAstronauts >=0){

altitudeShuttle+=50;
 fuelLevel-=numAstronauts;

}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitudeShuttle}km.`)

if (altitudeShuttle >=2000){
 console.log('Orbit achieved!')
}else {
 console.log("Failed to reach orbit.")
 }