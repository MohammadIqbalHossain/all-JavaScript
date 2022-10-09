// https://jsonplaceholder.typicode.com/photos
const container = document.getElementById('container');
const modal = document.getElementById('modal')
const loadPhotos =  async() => {
    

        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        displayData(data)
}
   
loadPhotos()


const displayData = data => {
    
    data.forEach(photos => {
        // console.log(photos)
        const div = document.createElement('div');
        div.className = 'mt-4'
        div.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
        <img src="${photos.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="">Title: ${photos.title}</p>
        </div>
        <button onclick="displayDetails('${photos.id}')">Click me</button>
      </div>
        
        `
        container.appendChild(div);
    })
}

const displayDetails = id =>{
    
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    console.log(url)
    fetch(url)
    .then(res => res.json(url))
    .then(data => displayModal(data)) 
} 

const displayModal = data => {
    console.log(data)
    const div = document.createElement('div');
    div.innerHTML = `
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${data.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${data.thumbnailUrl}">
          <img width="200px" src="${data.url}">

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</div>
    `;

    modal.appendChild(div)

}