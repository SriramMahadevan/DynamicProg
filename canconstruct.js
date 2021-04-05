function canconstruct(target,words,memo={}) {
    
    if(target in memo) return memo[target];
    if(target === '') return true;

    for (let word of words) {
        if(target.indexOf(word)===0) {
            newTarget=target.slice(word.length);
            if(canconstruct(newTarget,words,memo)===true) {
                memo[newTarget]=true;
                return true;
            }
        }
    }
    memo[target]=false;
    return false;
}

console.log(canconstruct('apple',['a','p','l','e']));

console.log(canconstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','eee','eee','eeeee','eeeeee','eeeeeeeeee']));
console.log(canconstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','eee','eee','eeeee','eeeeee','eeeeeeeeeef']));