var car = {};
car.color = "red"
car.turnKey = function() {
    console.log('The engine is running');
}
car.mileage = 98765;
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnKey(); // The engine is running
car.lightsOn(); // The lights are on.
