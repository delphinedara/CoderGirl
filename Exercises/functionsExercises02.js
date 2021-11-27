
 //A function with parameters example
 function greeting(name, age, favoriteDrink) {
    console.log(`Hello ${name}, I am ${age} and my favorite drink is ${favoriteDrink}.`)
}
greeting("Misty", 17, "water");


//doMath

function doMath(num){
    num=Number (num);
    if (num) {
        //Is a reall number
        var newNumber =(num+100)/3;
        return newNumber;
    } else {
        //Not a real number
        return false;
    }
}

var customNum = doMath(345);
console.log(customNum);
var customNum = doMath("Caleb");
console.log(customNum);

//Create a function that converst Celcius to Fahrenheit
function cToF(c_num) {
    var fahrenheit = (c_num *1.8) +32;
    return fahrenheit;
}

var zero= cToF(0); console.log(zero);
var twenty= cToF(20); console.log(twenty);
var freezing= cToF(-40); console.log(freezing);
var boiling= cToF(100); console.log(boiling);