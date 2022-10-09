
function showPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => showInUI(data))
}
showPhoto()

function showInUI(data){
    console.log(data);
    const container = document.getElementById('photo')
    for(const photo of data){
       const div = document.createElement('div')
       div.innerHTML = `This is the photo of our man in black ${photo.thumbnailUrl}`
       container.appendChild(div);
    }
}


