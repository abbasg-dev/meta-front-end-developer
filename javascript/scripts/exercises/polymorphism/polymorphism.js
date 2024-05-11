// Bird is super class
class Bird {
    useWings() {
        console.log("Flying!")
    }
}

// Penguin and Eagle are sub-classes
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings();
/*
    Flying!
    Barely flapping!
*/
kingPenguin.useWings(); // "Diving!"
