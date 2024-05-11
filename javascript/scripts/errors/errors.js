console.log(username); // Uncaught ReferenceError: username is not defined

var a "there's no assignment operator here"; // Uncaught SyntaxError: Unexpected string

"hello".pop() // Uncaught TypeError: "hello".pop is not a function

// JavaScript obliges and "translates" the "regular" number 10 to its binary counter-part
console.log((10).toString(2)); // '1010'
console.log((10).toString(8)); // 12
console.log((10).toString(100)); // Uncaught RangeError: toString() radix argument must be between 2 and 36
