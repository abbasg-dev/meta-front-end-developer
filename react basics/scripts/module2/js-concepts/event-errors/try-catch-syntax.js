// (5).toUpperCase() // Uncaught TypeError: 5.toUpperCase is not a function

try {
    (5).toUpperCase();
}
catch (e) {
    console.log(`Oops, you can't uppercase a number. Trying to do it resulted in the following`, e);
}
