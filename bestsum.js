//PROBLEM STATEMENT
/*
Given an array of size n & a target number, print an array that sums up to the target with minimum number of elements
1. Numbers are positive
2. One number can be used more than once
*/
function bestsum(target, numbers,memo={}) {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;
    var bestArray=null;
    for(let num of numbers) {
        newTarget  = target - num;
        answer = bestsum(newTarget,numbers,memo);
        if(answer!==null) {
            combination = [...answer,num];
            if(bestArray ===null  || bestArray.length > combination.length) {
                bestArray=combination;
            }
        }
    }
    memo[target] = bestArray;
    return bestArray;
}

console.log(bestsum(7,[2,3]));
console.log(bestsum(7,[5,3,4,7]));
console.log(bestsum(7,[2,4]));
console.log(bestsum(8,[2,3,5]));
console.log(bestsum(300,[150,297,1]));