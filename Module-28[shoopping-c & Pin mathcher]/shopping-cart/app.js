
function updatePhoneNum(product, price, isIncresing) {
    console.count('this is cliked');
    console.log('Heloo');
    const productInput = document.getElementById(product + '-input');
    let productValue = productInput.value;
    if (isIncresing) {
        productValue = parseInt(productValue) + 1;
    }
    else if (productValue > 0) {
        productValue = parseInt(productValue) - 1;
    }

    productInput.value = productValue;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productValue * price;

    calculation();
}


document.getElementById('phone-btn').addEventListener('click', function () {
    updatePhoneNum("phone", 1219, true)
})

// document.getElementById('phone-btn').addEventListener('click', function () {
//     updatePhoneNum("phone", 1219, true)
// })

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    updatePhoneNum('phone', 1219, false);
})


document.getElementById('case-btn').addEventListener('click', function () {
    updatePhoneNum('case', 59, true)
})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    updatePhoneNum('case', 59, false)
})

function getProduct(product) {
    const productNum = document.getElementById(product + '-input');
    const productTotal = parseInt(productNum.value);
    return productTotal;
}


function calculation() {
    const phonePrice = getProduct('phone') * 1219;
    const casePrice = getProduct('case') * 59;
    const subtotal = phonePrice + casePrice;
    const tax = subtotal / 10;
    const grandTotal = subtotal + tax;


    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = grandTotal;
}



