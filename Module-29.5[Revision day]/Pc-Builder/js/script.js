document.getElementById('sixteenGB').addEventListener('click', function(){
    // const memoryCost = document.getElementById('memory-cost');
    // const memoryPrice = memoryCost.innerText = 200;
    
    // const bestPrice = document.getElementById('best-price').innerText;
    // const ssdPrice = document.getElementById('ssd2').innerText;
    // const storagePrice = document.getElementById('ssd3').innerText;
    // const deliveryCost = document.getElementById('paid-delivery').innerText;


    // const totalPrice = document.getElementById('total-price');
   
    // totalPrice.innerText = parseFloat(memoryPrice) + parseFloat(bestPrice) + parseFloat(ssdPrice) + parseFloat(storagePrice) + parseFloat(deliveryCost);
    getTextValue('memory-cost', 300)
})

function getTextValue(inputId, price){
    const memoryCost = document.getElementById(inputId);
    memoryCost.innerText = price;
    
    const bestPrice = document.getElementById('best-price').innerText;
    const ssdPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;


    const totalPrice = document.getElementById('total-price');
   
    totalPrice.innerText = parseFloat(bestPrice) + parseFloat(ssdPrice) + parseFloat(storagePrice) + parseFloat(deliveryCost);
}

function handleAllEvent(eventId, cost, price ){
    document.getElementById(eventId).addEventListener('click', function(){
        getTextValue(cost, price);
    })
}


handleAllEvent('eightGB','memory-cost', 0);
handleAllEvent('ssd2', 'storage-cost', 400);
handleAllEvent('ssd1', 'storage-cost', 0);
handleAllEvent('ssd3', 'storage-cost', 500);
handleAllEvent('paid-delivery', 'delivery-cost', 20);
handleAllEvent('free-delivery', 'delivery-cost', 0);

// document.getElementById('eightGB').addEventListener('click', function(){
//   getTextValue('memory-cost', 0)
// })

// document.getElementById('ssd2').addEventListener('click', function(){
//     getTextValue('storage-cost', 400);
// })
// document.getElementById('ssd1').addEventListener('click', function(){
//     getTextValue('storage-cost', 0);
// })
// document.getElementById('ssd3').addEventListener('click', function(){
//     getTextValue('storage-cost', 500);
// })
// document.getElementById('paid-delivery').addEventListener('click', function(){
//     getTextValue('delivery-cost', 20);
// })
// document.getElementById('free-delivery').addEventListener('click', function(){
//     getTextValue('delivery-cost', 0);
// })

document.getElementById('apply-btn').addEventListener('click', function(){
    const coupon = 'Yeah boy!'
    const inputValue = document.getElementById('promo-input');
    const inputNum = inputValue.value;
    const total = document.getElementById('total-price');
    const totalValue = total.innerText;
    if(inputNum == coupon){
       const code = (totalValue * 20)/ 100;
       total.innerText = totalValue - code;
       
    }else{
     alert('You are not geting discound');
    }

})