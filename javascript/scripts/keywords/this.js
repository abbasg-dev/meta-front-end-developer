// 'this' is the object that the function is a property of
// 1- Gives methods access to their object
// 2- Execute same code for multiple objects
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false