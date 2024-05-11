var light = 'orange';

// if condition
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    console.log("The car is not green, orange, or red");
}

// switch case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
}

// if condition
var age = 27;
if(age >= 65) {
	console.log("You get your income from your pension");
} else if(age < 65 && age >= 18) {
	console.log("Each month you get a salary");
} else if (age < 18) {
	console.log("You get an allowance");
} else {
	console.log("The value of the age variable is not numerical");
}

// switch case
var day = "Sunday";
switch(day) {
	case 'Monday':
       console.log("Swimming");
       break;
	case 'Tuesday':
       console.log("Reading");
       break;
	case 'Wednesday':
		console.log("Playing football");
       break;
	case 'Thursday':
		console.log("Watching movie");
       break;
	case 'Friday':
		console.log("Stargazing");
       break;
	case 'Saturday':
		console.log("Going to gym");
       break;
	case 'Sunday':
		console.log("Preparing for the next week");
       break;
	default:
       console.log("There is no such day");
       break;
}
