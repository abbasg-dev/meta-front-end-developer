/*
    let answer = prompt('What is your name?');

    if (typeof(answer) === 'string') {
        var h1 = document.createElement('h1')
        h1.innerText = answer;
        document.body.innerText = '';
        document.body.appendChild(h1);
    }
*/
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1); // add new child at the end of the children
document.body.appendChild(input);

input.addEventListener('change', function() {
    // console.log(input.value)
    h1.innerText = input.value
})
