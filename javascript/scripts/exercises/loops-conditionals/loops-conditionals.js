// for loop with if condition
for	(var i = 1; i <=10; i++) {
	if (i == 1) {
		console.log("Gold medal"); // Gold medal
	} else if (i == 2) {
		console.log("Silver medal"); // Silver medal
	} else if (i == 3) {
		console.log("Bronze medal"); // Bronze medal
	} else {
		console.log(i);
        /*
            4
            5
            6
            7
            8
            9
            10
        */
	}
}
// for loop with switch case
for	(var i = 1; i <=10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal"); // Gold medal
        break;
        case 2:
            console.log("Silver medal"); // Silver medal
        break;
        case 3:
            console.log("Bronze medal"); // Bronze medal
        break;
        default:
            console.log(i);
            /*
                4
                5
                6
                7
                8
                9
                10
            */
        break;
    }
}
