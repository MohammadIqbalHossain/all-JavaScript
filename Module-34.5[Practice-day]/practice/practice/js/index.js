
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

 
const displayComments = data => {
   
    const containerh2 = document.getElementById('comments')
    // console.log(data)
   for(const comment of data){
      console.log(comment)
      const div = document.createElement('div');
       div.className = 'containerStyle'
      div.innerHTML = `
      <h2>${comment.name}</h2>
      <p>${comment.body}</p>
      <h3>Email: ${comment.email}</h3>
      <button  onclick="loadData('${comment.id}')">see me</button>
      `
      containerh2.appendChild(div);
   }
   
   
}


const loadData = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data))
}

const displayDetail = commentId => {
 
    for(const comment of commentId){
        
    }
  
    
}




















// const displayComments = comment => {
//    console.log(comment)
// //    const containerh2 = document.getElementById('comments')
    
//     comment.forEach = (item => {
//         console.log(item);
//     })
   
// }