

function getInput(inputId, isIncresing, price){
    const input = document.getElementById(inputId +'-input');
    let inputValue = input.value;
   
    if(isIncresing){
        inputValue = parseInt(inputValue) + 1;
    }
    else if(inputValue > 0){
        inputValue = parseInt(inputValue) - 1;
    }
    
    input.value = inputValue;
    const inputNum = parseInt(inputValue);
    const totalPrice = inputNum * price;
    const showPrice = document.getElementById(inputId + '-total-price');
    showPrice.innerText = totalPrice;

    calculation();
}

function getProduct(textId){
    const totalText = document.getElementById(textId + '-total-price');
    console.log(totalText);
    const totalValue = totalText.innerText;
    const totalNum  =  parseInt(totalValue);
    return totalNum;
}


function calculation(){
    const firstTotal = getProduct('juice1') * 2.49;
    const secondTotal = getProduct('paper') * 1.48;
    const subtotal = firstTotal + secondTotal;
    const subtotalFix = subtotal;
    const tax = subtotalFix / 1.48
    const grandTotal = subtotalFix + tax;

    document.getElementById('subtotal').innerText =  subtotalFix;
    document.getElementById('total-tax').innerText = tax;
    document.getElementById('grand-total').innerText = grandTotal;     
}


document.getElementById('plus-btn').addEventListener('click', function(){
    getInput('juice1',true, 10);
    
})

document.getElementById('minus-btn').addEventListener('click', function(){
   getInput('juice1', false, 10);
})


document.getElementById('paper-juice').addEventListener('click', function(){
    getInput('paper', true, 20);
})

document.getElementById('paper-minus-btn').addEventListener('click', function(){
    getInput('paper', false, 20);
})