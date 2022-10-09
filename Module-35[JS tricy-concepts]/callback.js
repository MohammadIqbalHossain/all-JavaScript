
function greetMessage(name, welcomeMessage, time){
    welcomeMessage(name, time)
}

function wishMorning(name, time){
    console.log('good morning', name)
    greetAfternoon(time)
}

function greetAfternoon(time){
    console.log('good afternoon', time)
}

greetMessage('Bablu', wishMorning, '3:00');


const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); }