
const getCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countrys(data))
}

getCountries()

const countrys = data => {
    const containerDiv = document.getElementById('countries');
    console.log(data)
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add("countryStyle")
     
        div.innerHTML = `
           <h3>${country.name.common}</h3>
           <p>${country.capital}</p>
           <button onclick="countryDetail('${country.name.common}')">Details</button>
        `

        containerDiv.appendChild(div)
    
    })
}




const countryDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => loadDeatails(data[0]))

}  

const loadDeatails = data => {
    console.log(data)
    const contryDiv = document.getElementById('country-details')
    contryDiv.innerHTML = `
          <h3>${data.altSpellings[1]}</h3>
          <p>${data.capital}</p>
          <img src="${data.flags.png}">
          <p>Population: ${data.population}</p>
    `
}