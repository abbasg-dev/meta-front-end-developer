function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        // console.log(i+1, arr[i])
        /*
            1 red
            2 orange
            3 yellow
            4 green
            5 blue
            6 purple
            7 pink
        */
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!") // 0 tomato!
        } else {
            console.log(i*100, arr[i])
            /*
                100 orange
                200 yellow
                300 green
                400 blue
                500 purple
                600 pink
            */
        }
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
    /*
        Found the t at 0
        ---No match found at 1
        ---No match found at 2
        Found the t at 3
    */
}
letterFinder("test", "t");