//Function Basics

// traditiona declarations
function plus(a,b){
    var sum = a+b;
    return sum;
}
console.log (plus (2,2));

// definition expression 
var plus = function(a,b) {
    return console.log(a+b);
}
plus(2,2);

//More examples

function sayHello() {
    console.log("Hello, World!");
 }
sayHello();


function hello (name){
    return `Hello, ${name}!`;
}
console.log(hello ("John"));

function plusTwo(num) {
    return num + 2;
 }
 
 let a = 2;
 
 for (let i=0; i < 4; i++) {
    a = plusTwo(a);
 }
 
 console.log(a);

 