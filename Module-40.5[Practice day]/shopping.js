
// const getProductFromStorage = () => {
//     const products = getCart();
//     for(const product in products){
//         displayCart(product);
//     }
// }



// const addCart = () => {
//     const inputField = document.getElementById('input');
//     const name = inputField.value;

//     displayCart(name);

//     setCart(name)
//     inputField.value = ''
// }


// const displayCart = name => {
//     const ul = document.getElementById('products');
//     const li = document.createElement('li');
//     li.innerText = name;
//     ul.appendChild(li);
// } 


// const getCart = name => {
//     const cart = localStorage.getItem("cart");
//     let cartObj;
//     if(cart){
//         cartObj = JSON.parse(cart);
//     }
//     else{
//         cartObj = {};
//     }
//     return cartObj
// }

// const setCart = name => {
//     const cart = getCart();
//     cart[name] = 1; // I didn't undertood this.
//     const stringified = JSON.stringify(cart);
//     localStorage.setItem('cart', stringified);
// }


// const placeorder = () => {
    
//     document.getElementById('products').textContent = '';
//     localStorage.removeItem('cart');
// }

// getProductFromStorage();


// let name = [];
// const quize = name.map(n => n);
// console.log(quize);

// const forEachOF = name.forEach(v => console.log(v));
// console.log(forEachOF);

// const name = 'Hero';
// const age = 34;
// const person = {name, age};
//  console.log(person);

//  const person = { name : "”Babe”" }
//  console.log(person.name)

//  const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
// const ratName = adventurer?.rat?.name;
// console.log(ratName);

// let person =null;
// console.log(person ? person : "person is null");

// const arr = [34, 33, 432, 43];
// const fil = arr.filter(n => n > 500);
// console.log(fil);

const obj = {a:1};
console.log(Object.keys(obj).length===0);