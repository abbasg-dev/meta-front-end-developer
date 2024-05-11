var greet = "Hello, ";
var place = "World";

console.log(greet.length); // 7
console.log(greet.charAt(0)); // 'H'

// concat() method joins two strings
console.log("Wo".concat("rl").concat("d")); // World

console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("ho-ho-ho".indexOf('-')); // 2
console.log("ho-ho-ho".lastIndexOf('-')); // 5

// split method chops up the string into an array of sub-strings
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']

console.log(greet.toUpperCase()); // "HELLO, "
console.log(greet.toLowerCase()); // "hello, "
