//Create a simple tip calculator
//It needs to accept 2 parametesr
//Make  the tip parameter optional
//Return the total amout and save it to a var


//Solution #1 using if statement
function calculateTip (price,tip=0){
    var totalAmount;
    if (tip !=0){
        totalAmount = price +tip;
    } else {
        totalAmount =price;
    }

    return totalAmount;

}

console.log(calculateTip(100));
console.log(calculateTip(100, 20));
console.log(calculateTip(100, 70));

//solution 2

function tip(totalAmount, tip =10){
    tip=tip/100;
    var tipAmount =totalAmount*tip;
    totalAmount =totalAmount +tipAmount;

    return totalAmount;
}

var totalBill =tip(100,0);
console.log(totalBill);

//Solution # 3
function tip(totalAmount, tip=10, returnTipOnly=false){
    tip = tip/100;
    var tipAmount =totalAmount*tip;
    totalAmount =totalAmount +tipAmount;
    if (returnTipOnly) {
        return tipAmount
    }
    return totalAmount;
}

var totalBill =tip(100,10);
console.log(totalBill);