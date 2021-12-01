// Part A - Put dinner together
let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
let vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
let dessert= ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
//Use a for loop to assemble 6 meals.
// The meals must include one item from each of the source arrays.
// Each ingredient can only be used ONCE.
// Print out each meal.
for(let i=0; i<6; i++){
    let meal =  `Meal ${i}: ${proteins[i]}, ${grain[i]}, ${vegetable[i]}, ${beverage[i]},${dessert[i]} `
    console.log(meal);
    if(meal.includes("kale",0)){
        console.log ("Don't worry, you can have double chocolate tomorrow.");
    }
}

//Part B- Self-destruct system
//Construct a for loop that combines two strings together, alternating the characters from each source.  
//Print the result.
//For now, make sure the two strings contain the same number of characters!

let str1= 'Rutabagas';
let str2 = 'Chemistry';

let newWord= "";
for (let i=0; i<str1.length; i++){
    newWord+=`${str1[i]}${str2[i]}`;

}
console.log(newWord);

//Part C- Refinements
//Bonus Mission
//Modify your code to check each meal for kale. If present, after the meal output add,
//  "Don't worry, you can have double chocolate tomorrow."