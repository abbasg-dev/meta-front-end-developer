class Animal { /* ...class code here... */ }

// creating objects from classes

// var myDog = Object.create(Animal)
var myDog = new Animal()

console.log (Animal)

// Inheritance
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

// Encapsulation
console.log("abc".toUpperCase());

// Polymorphism
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

bicycle.bell(); // "Get away, please"
door.bell(); // "Come here, please"

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"

console.log("abc".concat("def")); // 'abcdef'
console.log(["abc"].concat(["def"])); // ['abc', 'def']
console.log(["abc"] + ["def"]); // ["abcdef"]
