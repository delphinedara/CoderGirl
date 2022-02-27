// //Function Basics

// //Examples

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

 //Function Input and Output
 function sumToN(n){
     let sum=0;
     for (let i=0; i<=n; i++){
         sum+=i;
     }
     return sum;
 }
 console.log(sumToN(7));
 console.log(1+2+3+4+5+6+7)

 function plusTwo(num) {
    return num + 2;
 };
 
 let a = 2;
 
 for (let i=0; i < 4; i++) {
    a = plusTwo(a);
    var roundNumber= (i+1);
  
 }
 
 console.log(a);

