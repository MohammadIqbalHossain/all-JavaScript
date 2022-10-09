
const getMeal = () => {
    
    const inputText = document.getElementById('input');
    const inputValue = inputText.value;
    
    const  url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
     

     fetch(url)
    .then(res => res.json())
    .then(item => displayItems(item.meals))

   

}



const displayItems = item => {
     const searchResult = document.getElementById('result');
     
     item.forEach(item => {
        //  console.log(item)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
               <div onclick="mealDetails('${item.idMeal}')" class="card h-100">
               <img  src="${item.strMealThumb}" class="card-img-top" alt="...">
               <div class="card-body">
               <h5 class="card-title">${item.strMeal}</h5>
               <p class="card-text">${item.strInstructions.slice(0, 200)}</p>
               </div>
           </div>
        `
     searchResult.appendChild(div)
     })
     
}

const mealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]))

}

const displayMealsDetails = details => {
    console.log(details);
    const mealDetails = document.getElementById('meal-details');

    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="${details.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${details.strInstructions.slice(0, 150)}</p>
        <a href="${details.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `
    mealDetails.appendChild(div)
}