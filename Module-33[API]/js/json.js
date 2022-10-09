
function dataLoad(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => userData(data))
}


function userData(data){
  console.log(data);
  const ul = document.getElementById('users')
  for(const user of data){
    const li = document.createElement('li')
    li.innerHTML = `Name: ${user.name} and their Email: ${user.email} ${user.username}`
    ul.appendChild(li); 
  }
}





function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => allPosts(data))
}


function allPosts(data){
  const container = document.getElementById('posts');
   for(const post of data){
       const div = document.createElement('div');
       div.classList.add('posts')
       div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
       `
      container.appendChild(div)
       
   }
}
loadPosts();

function postLoad(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      id: 34,
      name: 'Iqbal',
      get: 'post'
    }),
    Headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))

}

postLoad()