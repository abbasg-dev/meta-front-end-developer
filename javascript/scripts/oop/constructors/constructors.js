function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}

// built-in String constructor
let apple = new String("apple");
console.log(apple); // --> String {'apple'}

let pear = "pear";
console.log(pear); // --> "pear"

// built-in RegExp object. It's used to pattern-match strings
console.log("abcd".match(/e/)); // null
console.log("abcd".match(/b/)); // ['b', index: 1, input: 'abcd', groups: undefined]

// other built-in types
new Date(); // creates today's date and time
new Error(); // creates an error object
new Map(); // creates a new Map object
new Promise(); // handle asynchronous operations
new Set(); // lets you store unique values of any type
new WeakSet(); // lets you store weakly held objects in a collection
new WeakMap(); // lets you store a collection of Key-Value pairs
