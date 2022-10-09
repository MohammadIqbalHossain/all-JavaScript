const mainContainer = document.getElementById('main-container');
const loadPlayer = () => {
    const input = document.getElementById('input');
    const error =document.getElementById('error');
    const inputValue = input.value;
    
    
    if(isNaN(inputValue) || inputValue == ""){
        error.innerText = "PLease write player name"
    }

    else{
        const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${inputValue}
        `
        // console.log(url);
         fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.players))
    }
}

const displayData = data => {
    console.log(data)
   data.forEach(player => {
       console.log(player.idPlayer)
       const div = document.createElement('div');
       div.innerHTML = ` 
        <h3>${player.strBirthLocation}</h3>
        <img width="200px" src="${player.strCutout}"/>
        
       `
       mainContainer.appendChild(div)
   }
  
   )}

//   const displayDetils = playerId => {
//     console.log(playerId)
//     const div = document.createElement('div');
//     div.innerHTML = `
//      <h3>${playerId}</h3>
//     `
//   }