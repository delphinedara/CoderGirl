//Chapter 11- Studio - Sort Numbers For Real

//Part A: Find the Minimum Value
//Create a function with an array of numbers as its parameter. 
function findMinValue(arr){
    let minValue = undefined;
    for (let i=0; i<arr.length;i++){
        if (minValue ===undefined || minValue>arr[i]){
            minValue=arr[i];
        }

    }
return minValue;
}

// Part B - 
//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

function sortLeastToGreatest(arr){
    let sortedArr =[];

    while (arr.length>0){
        let minValue =  findMinValue(arr);
        let removeIndex =arr.indexOf(minValue);
        arr.splice(removeIndex,1);
        sortedArr.push(minValue);
    }

    return sortedArr;

}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(sortLeastToGreatest(nums3));

//Part C : Number Sorting the Easy Way


//Bonus Mission
//Refactor the sorting function from part B to use recursion
