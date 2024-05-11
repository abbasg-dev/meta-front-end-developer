console.log('Hello');

function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog('Hello')

function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

console.log(objectMaker(20));
console.log(doubleIt(10).toString());
console.log(objectMaker(doubleIt(100)));

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

console.log(total);

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);

function addTwoNums(a, b) {
    console.log(a + b)
}

addTwoNums(5,6) // 11

