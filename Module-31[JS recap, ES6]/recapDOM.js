

const container = document.getElementById('friend-container');
document.getElementById('addBg').addEventListener('click', function(){
    container.style.border = '2px solid lightblue'; 
})

function addFriendBg(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
}

