for (var i = 1; i <= 5; i++) {
    console.log(i);
    /*
        1
        2
        3
        4
        5
    */
}
console.log('Counting completed!'); // Counting completed!

for (var j = 5; j > 0; j--) {
    console.log(j);
    /*
        5
        4
        3
        2
        1
    */
}
console.log('Countdown finished!'); // Countdown finished!

var z = 1;
while (z < 6) { 
	console.log(z);
    /*
        1
        2
        3
        4
        5
    */
	z++; 
}
console.log('Counting completed!'); // Counting completed!

var x = 5;
while (x > 0) { 
	console.log(x);
    /*
        5
        4
        3
        2
        1
    */
	x = x - 1; 
}
console.log('Countdown finished!'); // Countdown finished!

var year = 2018;
while (year < 2023) { 
	console.log(year);
    /*
        2018
        2019
        2020
        2021
        2022
    */
	year++; 
}
console.log('Countdown finished!'); // Countdown finished!

var cubes = 'ABCDEFG';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
