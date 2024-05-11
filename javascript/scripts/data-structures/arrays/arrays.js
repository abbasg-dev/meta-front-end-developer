const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
console.log('--------')
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
console.log('--------')
const nums = [0,10,20,30,40,50];
var filterNums = nums.filter(function(nums) {
    return nums > 20;
})
// filter() filters your arrays based on a specific test

console.log(filterNums); // [30,40,50]

var mapArr = [0,10,20,30,40,50].map(function(num) {
    return num / 10
})
console.log(mapArr); // [0,1,2,3,4,5]

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone); // ['speed', 'color']
droneKeys.forEach(function(key) {
    result.push(key, drone[key])
})
console.log(result) // ['speed', 'color', 100, 'yellow']

// new Map(); // creates a new Map object
// set() method is used to add or updates an element to map object with the particular key-value pair

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

console.log(bestBoxers.get(1)); // 'The Champion'

// new Set(); // lets you store unique values of any type

const repetitiveFruits = ['apple','pear','apple','pear','plum','apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // {'apple', 'pear', 'plum'}
