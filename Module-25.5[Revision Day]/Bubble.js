// Trying to understand the event bubble~!

document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second1 item clicked');
    event.stopImmediatePropagation();
})

document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second2 item clicked');
})

document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second3 item clicked');
})

document.getElementById('container').addEventListener('click', function(){
    console.log('constiner clicked');
})

document.getElementById('items').addEventListener('click', function(){
    console.log('ul clicked');
})

//Event delegation

// const myItems = document.getElementsByClassName('item-2');
// for(const element of myItems){
//     element.addEventListener('click', function(event){
//         // const parent = document.getElementById('list-container');
//         // parent.removeChild(element);
        
//         event.target.parentNode.removeChild(event.target);

//     });
// }

//adding new element

document.getElementById('add-btn').addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = "Added a new pilantropist";
    
    // e.target.parentNode.appendChild(li);

    const parent = document.getElementById('list-container');
    parent.appendChild(li);

})

//This is the use of event delegation.
document.getElementById('list-container').addEventListener('click', function(event){
              
    event.target.parentNode.removeChild(event.target);

})
