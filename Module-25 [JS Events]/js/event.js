//makling bg red
function makeBgRed() {
    document.body.style.background = 'red';
}

// Making bg blue.
let  blueBgButton = document.getElementById('make-bg-blue');
// console.log(blueBgButton);

blueBgButton.onclick = makeBgBlue;

function makeBgBlue(){
    document.body.style.backgroundColor = 'blue';
}

//Making bg green with the anonymous function.
const greenButton = document.getElementById('make-bg-green');

greenButton.onclick = function (){
    document.body.style.background = 'green';
}

//working with direct click event

const hotPinkbtn = document.getElementById('make-bg-hotpink');

hotPinkbtn.addEventListener('click', makeHotPink);

function makeHotPink(){
    document.body.style.background = 'hotpink';
}



//making green with addEventListener

const makebtnGreen = document.getElementById('make-bg-goldenrod');

makebtnGreen.addEventListener('click', function() {
    document.body.style.background = 'goldenrod';
})



//Direct working with addEventListener 

document.getElementById('make-bg-lightBL').addEventListener('click', function (){
    document.body.style.background = 'lightblue';
})



