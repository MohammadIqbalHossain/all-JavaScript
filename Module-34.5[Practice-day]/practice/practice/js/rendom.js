
const loadData = () => {
    fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data => displayData(data.results))
}


loadData()

const displayData = data => {
    const container = document.getElementById('container');
    for(const item of data){
      console.log(item)
      const div = document.createElement('div');
      div.innerHTML =` 
      <img src="${item.picture.large}">
       <h2>Country: ${item.location.country}</h2>
       <h3>Capital: ${item.location.city}</h3>
       <p>${item.location.state}</p>
       <h5>${item.location.postcode}</h5>
    
      `
     container.appendChild(div)
    }
}

