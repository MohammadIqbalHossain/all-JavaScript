
const SaveProduct = () => {
     
    displayProduct()
}

const displayProduct = () => {
    const nameInputValue = document.getElementById('nameInput').value;
    const priceInputValue = document.getElementById('priceInput').value
    // const stringified = JSON.stringify(nameInputValue, priceInputValue);
    localStorage.setItem("product", JSON.stringify(nameInputValue) + JSON.stringify(priceInputValue));
  

    const productContainer =document.getElementById('product')
    const li = document.createElement('li');
    li.innerText = "Name: " + nameInputValue + ", Price: " + priceInputValue;

    productContainer.appendChild(li);
}

const getData = () => {
    const nameInputValue = document.getElementById('nameInput').value;
    const priceInputValue = document.getElementById('priceInput').value;

  const data = localStorage.getItem(nameInputValue.key);
  console.log(data)
}

getData()


