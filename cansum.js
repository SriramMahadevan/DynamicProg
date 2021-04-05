//PROBLEM STATEMENT
/*
Given an array of size n & a target number, print true if it is possible to sum up the array numbers to the target
1. Numbers are positive
2. One number can be used more than once
*/
function cansum(target,numbers,memo={}) {

    if(target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0 ) return false;

    for (let num of numbers) {
        newTarget = target - num;
        if(cansum(newTarget,numbers,memo)===true) {
            memo[target] = true;
            return true;
        } 
    }

    memo[target] = false;
    return false;
}

console.log(cansum(7,[2,3]));
console.log(cansum(7,[5,3,4,7]));
console.log(cansum(7,[2,4]));
console.log(cansum(8,[2,3,5]));
console.log(cansum(300,[7,14]));
console.log(cansum('abc',['ab','c']));