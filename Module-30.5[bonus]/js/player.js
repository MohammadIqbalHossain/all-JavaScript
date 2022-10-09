function stylePlayer(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '10px';
    player.style.margin = '10px';
    player.style.padding = '20px';
}


const players = document.getElementsByClassName('playes');
for(const player of players){
    stylePlayer(player)
    
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'purple';
    // })
}

function addPlayer(){
    const players = document.getElementById('players');
    const newPlayer = document.createElement('div');
    newPlayer.classList.add('playes');
    newPlayer.innerHTML = `<h2>playe-1</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem dicta, excepturi nemo alias nesciunt quis soluta est, consequatur quos incidunt distinctio quae iste eligendi maiores ex quia, repudiandae pariatur?`;

    
    players.appendChild(newPlayer);
    
    const playersAll = document.getElementsByClassName('playes');
    for(const player of playersAll){
    stylePlayer(player)

    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'purple';
    // })
    
}
   
}



document.getElementById('players').addEventListener('click', function(event){
    
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'red';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})