//LinkedIn Learning Course - Javascript: Arrays with Jamie Pittman


// Length property and direct assignment

const pets = ['dog', 'cat', 'rabbit', 'hamster'];
//Use the length property to determine how many objects are in the array
console.log(pets.length);
//Using direct assignment, add 'snake' to the array in index position 2.
pets[2]= 'snake';
console.log(pets);


// Iterate over the scores array using forEach.
// Execute the logScores

const scores = [50, 60, 70, 80, 90, 100];
const logScore = (score) => console.log('Score Over 65', score);
scores.forEach((element) => {
    if (element>65){
        logScore(element);
    }
});

//sort the pet array, alphabetical order
pets.sort();
console.log("Alphabetically", pets);

let grades = [88, 94, 72, 99, 53, 77];

//Sort the following array from highest to lowest
grades.sort((a, b) => b - a);
console.log("Highest to lowest", grades);

//Sort the following array from lowest to highest
grades.sort((a, b) => a - b);
console.log("Lowest to highest", grades);


//reverse() - note this will change the original array
pets.reverse();
console.log(`Reversed pets array: ${pets}`);

//find() returns the first element that passes the testing function
//findIndex() returns the first index that passes the testing function and if no match it returns -1

//find first grade under 80
console.log("the first grade that is under 80: " + grades.find((underEighty) =>underEighty<80 ));

//find index of the first grade that is over 80
console.log("the first grade that is over 80: " + grades.find((overEighty) =>overEighty>80 ));

//Includes , Some , Every
const bowlingScores = [154, 204, 300, 184, 286];

const includesScore = bowlingScores.includes(300)
console.log('Does the array include a 300?', includesScore)

const someScores = bowlingScores.some(score => score < 150)
console.log('Are some of the scores under 150?', someScores)

const everyScore = bowlingScores.every(score => score % 2 === 0)
console.log('Is every score an even number?', everyScore)

  //includes() - does the array inncludes a nurse
const careers = ["teacher", "doctor", "engineer", "nurse", "scientist"];


//Do some of the states in the array start with "New"?
const states = ["California", "New York", "New Jersey", "Alaska", "New Mexico", "Montana"]
const some = states.some(state => state.startsWith("New"));
console.log("Do some states start with 'New'?", some);

//Does every state in the array start with "New"?
const every = states.every(state => state.startsWith("New"));
console.log("Does every state start with 'New'?", every);

//Stacks: push and pop
let ages =[18, 77, 45,26];
ages.push(55);
console.log(`Added 55 to the array, ${ages}`);
ages.pop();
console.log(`Removed 55 to the array, ${ages}`);


/*Queues: shift and unshift - manipulates contents of an array by adding or
removing data to and from the beginning of an array*/
const holidays = ["Labor Day", "Christmas", "Hanakkuh", "Independence Day"];

holidays.unshift("Thanksgiving"); // add Thanksgiving to the array
console.log(holidays);
console.log(" This returns shifted value: " + holidays.shift());
console.log(holidays); //new array should have removed Thanksgiving


/*map - this creates a new array based on the function applied to each element 
in the array you're iterating over */

const grades2 =[88, 18,72, 89, 77];
let bonusGrades = grades.map((element)=>{
    return element + 15;
});
console.log("bonus grade" , bonusGrades);

/* filter - creates a new array based on whether or not elements pass the test provided
by the function provided */

//Filter the following array to include only those grocery items
//that are fruits.
const groceries = [
    { item: 'apples', type: 'fruit' },
    { item: 'cereal', type: 'pantry' },
    { item: 'pork chops', type: 'meat' },
    { item: 'bananas', type: 'fruit' },
    { item: 'broccoli', type: 'vegetable' },
  ];
  //filter the array to only include fruit
  
const fruit =groceries.filter((item) => item.type ==='fruit');
console.log(fruit);

/* reduce - executes a reducer function against each item in an array, 
returning a single value, the value returned is the accumulated value*/
const sales = [2.50, 9, 16.2]
const totalSales = sales.reduce((total,amount) => total + amount);
console.log(totalSales);

/* flatMap - returns a new array by applying a callback function to each itemof the array
and the flattering it one level  */
const wordJumble = ['shampoo', 'conditioner', 'soap'];

//You want to create a word jumble which requires you to split
//the following array of words into individual letters. You want
//a new array, that is flattened to a single level.

//Hint: You will need to use the string method .split()
const splitWords = wordJumble.flatMap((word) => word.split(''));
console.log('New array with single letters', splitWords);
