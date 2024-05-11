for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
    /*
        0
        1
    */
}
console.log('--------')
for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
    /*
        0
        1
        2
        3
        4
        5
        6
        7
        8
        9
    */
}
console.log('--------')
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
        /*
            0, 0
            0, 1
            0, 2
            0, 3
            0, 4
            0, 5
            0, 6
            0, 7
            0, 8
            0, 9
            1, 1
            1, 2
            1, 3
            1, 4
            1, 5
            1, 6
            1, 7
            1, 8
            1, 9
        */
    }
}
console.log('--------')
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
        /*
            0 times 0 equals 0
            0 times 1 equals 0
            0 times 2 equals 0
            0 times 3 equals 0
            0 times 4 equals 0
            0 times 5 equals 0
            0 times 6 equals 0
            0 times 7 equals 0
            0 times 8 equals 0
            0 times 9 equals 0
            1 times 0 equals 0
            1 times 1 equals 1
            1 times 2 equals 2
            1 times 3 equals 3
            1 times 4 equals 4
            1 times 5 equals 5
            1 times 6 equals 6
            1 times 7 equals 7
            1 times 8 equals 8
            1 times 9 equals 9
        */
    }
}
console.log('--------')
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) { // looping twice changing the value of j from 10 to 5 reaching 0
        console.log(i + " divided by " + j + " equals " + i / j);
        /*
            100 divided by 10 equals 10
            100 divided by 5 equals 20
            90 divided by 10 equals 9
            90 divided by 5 equals 18
            80 divided by 10 equals 8
            80 divided by 5 equals 16
            70 divided by 10 equals 7
            70 divided by 5 equals 14
            60 divided by 10 equals 6
            60 divided by 5 equals 12
            50 divided by 10 equals 5
            50 divided by 5 equals 10
            40 divided by 10 equals 4
            40 divided by 5 equals 8
            30 divided by 10 equals 3
            30 divided by 5 equals 6
            20 divided by 10 equals 2
            20 divided by 5 equals 4
        */
    }
}
