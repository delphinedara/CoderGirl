

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
    let newArr =[]; 
    for (let i=0; i < arr.length; i++){
    let reversedValue = reverseCharacters(arr[i]);
    newArr.push(reversedValue);
    }
    return console.log(newArr);

}

// Be sure to print the results from each test case in order to verify your code. 
let arr = ['hello', 'world', 123, 'orange'];
console.log(reversal(arr));

//Bonus

//Area of rectangle
function calculateRectangleArea(length, width) {

    let area;
    if (!width) {
      area = length * length;
    } else {
      area = length * width;
    }
    return `The areas is ${area} cm^2.`
  }

  