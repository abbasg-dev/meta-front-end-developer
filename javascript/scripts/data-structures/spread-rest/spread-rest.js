const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
// outputs a single array
console.log(fruitsAndBerries); // ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); // ['onion', 'parsley', 'carrot', 'beetroot']

// convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201
console.log(car1.speed, car2.speed) // 201, 200

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
fruits1.push('limon')
console.log(fruits1, "not", fruits2)
// push() and pop() methods are used to add and remove items from the end of an array
