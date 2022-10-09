
const showItem = () => {
    const cart = getCart();
    for(const name in cart){
        displayProducts(name);
    }
}

const addCart = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;

    if(!inputValue){
        return;
    }
    displayProducts(inputValue);



    addToLocalStorange(inputValue)
    input.value = ''
}


const displayProducts = inputValue => {
    const container = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = inputValue;
    container.appendChild(li)
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
       cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

const addToLocalStorange = name => {
    const cart = getCart();
    cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

showItem();