function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2) {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")

function add(a, b) {
    if (typeof(a) != 'number') {
        throw new Error('invalid first number to add ' + a);
    }
    if (typeof(b) != 'number') {
      throw new Error('invalid second number to add ' + b);
    }
    return a + b;
}

var sum = add(2,3);
console.log(sum);