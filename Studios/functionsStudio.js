/* Let's have some fun by creating a process that 
reverses BOTH the order of the entries in an array 
AND the order of characters within the individual elements.*/

//  Part 1 Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Part 2 Reverse Digits
function reversedNum(num) {
    return (num.toString().split("").reverse().join(""))*Math.sign(num);
        
  }

//Part 3 Reverse Character (string and number)

function reverseCharacters(character){
    if (typeof character === 'string') {
        return reverseString(character);
        
    } else if(typeof character ==='number'){
        return reversedNum(character)
    }
    
    }
//Part 4 Complete Reversal

// Create a new function with one parameter, which is the array we want to change. The function should:
function reversal(arr){
    // Define and initialize an empty array
    let newArr =[]; 

     // Loop through the old array.
    for (let i=0; i < arr.length; i++){
        // For each element in the old array, call reverseCharacters to flip the characters or digits.
        let reversedValue = reverseCharacters(arr[i]);

        // Add the reversed string (or number) to the array defined in part 'a'
        newArr.push(reversedValue);
    }
    //Return the final, reversed array.
    return console.log(newArr);
    
}

// Be sure to print the results from each test case in order to verify your code. 
let arr = ['hello', 'world', 123, 'orange'];
console.log(reversal(arr));


