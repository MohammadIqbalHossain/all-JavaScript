const mainContainer = document.getElementById('main-container')
const loadData = () => {
    const input = document.getElementById('input');
    const errorMsg = document.getElementById('error')
    const inputValue = input.value;
    
    if(isNaN(inputValue) || inputValue == ""){
        errorMsg.innerText = 'Please give a number'
        input.value = ''
        mainContainer.innerHTML = ""
        
    }
    else if(inputValue <= 0){
        errorMsg.innerText = "Plese give a number"
        input.value = ''
        mainContainer.innerHTML = " ";
    }
    else{
        // mainContainer.innerText = '';
        mainContainer.innerHTML = "";
        input.value = ''
        const url = ` https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.cards))
        errorMsg.innerHTML = '';
        
    }

}

const displayData =  data => {
    // console.log(data)
    mainContainer.innerHTML = ''
    for(const card of data){
      
        // console.log(card);
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('col-md-6')
        div.classList.add("mb-5")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.code}</h5>
          <p class="card-text">${card.suit}</p>
          <a href="#" onclick="loadDetails('${card.code}')" class="btn btn-primary">See deatails</a>
        </div>
      </div>
        `
    mainContainer.appendChild(div)
    }

}


// const loadDetails = code => {
//     // console.log(cardValue)
//     fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
//     .then(res => res.json())
//     .then(data => {
//         const allCards = data.cards;
//         const singleCard = allCards.find(card => card.code === code)
//         const div = document.createElement('div');
//         mainContainer.innerHTML = "";
//         div.innerHTML = `
//             <div class="card" style="width: 18rem;">
//             <img src="${singleCard.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${singleCard.code}</h5>
//             <p class="card-text">${singleCard.suit}</p>
//             <a href="#" onclick="loadDetails('${singleCard.code}')" class="btn btn-primary">See deatails</a>
//             </div>
//         </div>
//         `
//         mainContainer.appendChild(div);
//     })
// }

const loadDetails = cards => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => {
            const allcode = data.cards;
            console.log(allcode)
            const thisCode = allcode.find(code => code.code === cards)
            const div = document.createElement('div');
            mainContainer.innerHTML = '' 
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${thisCode.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${thisCode.code}</h5>
            <p class="card-text">${thisCode.suit}</p>
            <a href="#" onclick="loadDetails('${thisCode.code}')" class="btn btn-primary">See deatails</a>
            </div>
        </div>
        `
        mainContainer.appendChild(div);
        }

    )}

   