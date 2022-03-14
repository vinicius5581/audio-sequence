console.log('hello')
// https://samplelib.com/sample-mp3.html


var sounds = new Array(new Audio("sample-3s.mp3"), new Audio("sample-6s.mp3"), new Audio("sample-9s.mp3"), new Audio("sample-12s.mp3"), new Audio("sample-15s.mp3"));
var i = -1;
playSnd();

function playSnd() {
    i++;
    if (i == sounds.length) return;
    sounds[i].addEventListener('ended', playSnd);
    sounds[i].play();
}