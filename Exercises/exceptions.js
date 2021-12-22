//Zero Division Throw
// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

function divide (numerator, denominator){
    let result = numerator/denominator;
    if (denominator===0){
      throw Error ('You cannot divide by zero!')
    }
    return result;
  }

//Test Student Labs
// Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined. If the exception is thrown, result should be set to the text "Error thrown"
 

function gradeLabs(labs) {
    for (let i=0; i < labs.length; i++) {
      let lab = labs[i];
      try{
         let result = lab.runLab(3);
         console.log(`${lab.student} code worked: ${result === 27}`);
      } catch(error){
        console.log("Error thrown");
      }
     
    }
  }