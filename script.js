// 1. Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr){
    for(var i=0; i<=arr.length; i++){
        if(arr[i] == "food"){
            console.log("Yummy");
        }
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4,1,5,7,2]);