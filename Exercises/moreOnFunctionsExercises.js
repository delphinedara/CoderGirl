//More on functions

//Convert the following named function to an anonymous function that is stored in a variable.

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }

let reverseFunc = function(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 };
// Calculate the area and volume of a box
function getSize(width, height, depth){
    var area= width * height;
    var volume= width* height *depth;
    var sizes =[area, volume];
    return sizes;
}



//Exercise 1 Part A & B
let arr = ['Elocution', 21, 'Clean teeth', 100] 

let modifyArr =function(a){
    if (typeof a === "number"){
        return a*3;
    } else if (typeof a === "string"){
        return a="ARRY";
    }else{
        return a;
    }
    };

let newArr = arr.map(modifyArr);

console.log(arr);
console.log(newArr);

//Exercise 2






