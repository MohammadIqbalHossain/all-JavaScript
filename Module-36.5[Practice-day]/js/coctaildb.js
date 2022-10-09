const container = document.getElementById('container');
const modal = document.getElementById('modal')
const loadCocktail = async () => {
    spinner('block')
    
    
    const input = document.getElementById('input');
    const inputValue = input.value;
    // console.log(parseFloat(inputValue));

    if(parseInt(inputValue) >= 0 ||  inputValue == "" || parseInt(inputValue) <= 0){
        document.getElementById('error').innerText = "Please enter cocktail name"
        input.value = ''
        container.innerHTML = ''
        spinner('none')
        
       

    }

    else{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
        const response = await fetch(url);
        const data = await response.json();
        displayData(data.drinks)
        input.value = ''
    }
    
    
}

const spinner = displaySyle => {
    document.getElementById('spinner').style.display = displaySyle;
}
const result = displayResult => {
    document.getElementById('container').style.display = displayResult;
}


const displayData = data =>{
    // console.log(data);
    if(!data){
        document.getElementById('found-result').innerText = "Can't find anything"
        spinner('none')
    }
    else{
        document.getElementById('found-result').innerText = ""
    }

    document.getElementById('error').innerText = "";
    container.innerHTML = ''
     data?.forEach(drink => {
       
         const div = document.createElement('div');
         
         div.classList.add('col-lg-4')
         div.classList.add('col-md-6')
         div.innerHTML = `
         <h6>${drink.strDrink}</h6>
         <img width="250px" onclick="getDetails('${drink.idDrink}')" src="${drink.strDrinkThumb}">
         `
         container.appendChild(div)

         spinner('none')
         
     })
    
     
     
     
}


const getDetails = idDrink => {
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.drinks[0]))
}


const displayDetails = data => {
    console.log(data)
    const div = document.createElement('div');
    modal.innerHTML = '';
    div.innerHTML = `
      <h3>Category: ${data.strCategory}</h3>

      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
   
    `
    modal.appendChild(div)
}