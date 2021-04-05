//PROBLEM STATEMENT
/*
Given an array of size n & a target number, print an array that sums up to the target 
1. Numbers are positive
2. One number can be used more than once
*/
function howsum(target, numbers,memo={}) {
    // console.log(target);
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;

    for(let num of numbers) {
        newTarget  = target - num;
        answer = howsum(newTarget,numbers,memo);
        // console.log(answer);
        if(answer) {
            answer.push(num);
            // [...answer,num]
            memo[target] = answer;
            return answer;
        }
    }
    memo[target] = null;
    return null;
}

console.log(howsum(7,[2,3]));
console.log(howsum(7,[5,3,4,7]));
console.log(howsum(7,[2,4]));
console.log(howsum(8,[2,3,5]));
console.log(howsum(300,[7,14]));