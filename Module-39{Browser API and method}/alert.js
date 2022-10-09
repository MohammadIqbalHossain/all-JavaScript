
function doSomething(){
    alert('Read the book');
    console.log(alert);
}

function confirmPicnic(){
    const response = confirm('Are you going with us?');
    console.log(response);
    if(response){
        alert('Give me the fee!')
    }
    else{
        console.log('Go to hell.');
    }
}

function takeName(){
    const userName = prompt('Write your name');
    console.log(userName);
    if(userName){
        alert('You are ready to go.')
    }
}