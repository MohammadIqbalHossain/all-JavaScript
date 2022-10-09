
function setTime(){
    console.log('This will be run at the last');
}


console.log('I am the first one');
console.log('I am the second one');
setTimeout(setTime, 5000);
setTimeout();

setTimeout(function (){
    console.log('I am coding javaScritp');
} , 4000)

setTimeout( () => {
    console.log('This is a Es6 function');
} , 3000)

console.log('I am the third one');
