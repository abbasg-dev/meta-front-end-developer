class StationaryBike {
    constructor(position, gears) {
        this.position = position // right corner
        this.gears = gears // 8
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position // left corner
        this.modes = modes // 5
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs // 7-22
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) // 7-22
console.log(boxingGym.stationaryBike) // {position: "right corner", gears: 8}
console.log(boxingGym.treadmill) // {position: "left corner", modes: 5}
