/*
    'Hello, World!'
    "Hello, World!"
*/
// `Hello, World!`

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) // Hello World !
console.log(greet + " " + place + "!"); // Hello World !

/*
    `Hello,
    World
    !
    `
*/

/*
    "Hello,
    World"
*/
//Uncaught SyntaxError: Invalid or unexpected token

console.log(`${1 + 1 + 1 + 1 + 1} stars!`)
