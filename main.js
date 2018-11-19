let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray (array) {
    return array[Math.floor(Math.random()*array.length)];
}