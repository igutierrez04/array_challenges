// 1. Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.


function alwaysHungry(arr){
    var foodCount = 0;
    for(var i=0; i<=arr.length; i++){
        if(arr[i] == "food"){
            console.log("Yummy");
            foodCount++;
        } 
    }
    if(foodCount == 0){
        console.log("I'm Hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4,1,5,7,2]);
// this should console log "I'm hungry"

// 2. High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff){
    var filteredArr = [];
    for(var i=0; i <=arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3. Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
        console.log(sum)
        return sum;
    }
    var average = sum / arr.length;
    var count = 0
    if(average < arr[i]){
        count++;
        return count;
    }

    // calculate the average

    // count how many values are greated than the average
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4