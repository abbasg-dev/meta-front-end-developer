// object is not iterable
const car = {
    speed: 100,
    color: "blue"
}

/*
    for(prop of car) {
        console.log(prop) // Uncaught TypeError: car is not iterable
    }
*/

// arrays are iterable
const colors = ['red', 'orange', 'yellow']

for (var color of colors) {
    console.log(color);
}

const car2 = {
    speed: 200,
    color: "red"
}

// Object.keys() method receives an object as its parameter
console.log(Object.keys(car2)); // ['speed','color']

const car3 = {
    speed: 300,
    color: "yellow"
}
// Object.values() method returns the object's own enumerable property values as an array
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
// Object.entries(), which returns an array listing both the keys and the values
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

function testBracketsDynamicAccess() {
    // Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
