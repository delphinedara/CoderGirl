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

//  Create an anonymous function and set it equal to a variable. Your function should:
let random = function(element){
  // If passed a number, return the tripled value.  
  if (typeof(element ==='number') {
      return element *3;
  }

  // If passed a string, return the string "ARRR!"
// If NOT passed a number or string, return the data unchanged.
// Check your solution.
}






