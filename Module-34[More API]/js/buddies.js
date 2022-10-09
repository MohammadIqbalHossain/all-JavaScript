
const getBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res =>  res.json())
    .then(data => displayBuddies(data))
}

getBuddies();

const displayBuddies = (data) => {
    console.log(data)
    const buddies = document.getElementById('Buddies');
    const buddyResult = data.results;
    for(const buddy of buddyResult){
          const p = document.createElement('p')
          p.innerText = `Name: ${buddy.name.title}  ${buddy.name.first} ${buddy.name.last} __ ${buddy.email}`
         buddies.appendChild(p);
    }
}

