
function getRandomNum(){
    const randomNum = Math.round(Math.random()* 10000);
    const numLengthSum = randomNum + '';
   if(numLengthSum.length == 4){
       return randomNum;
   }else{
    //    console.log('again genarate');
       return getRandomNum();    
   }
     
}

document.getElementById('generate-pin').addEventListener('click', function(){
   
    document.getElementById('input-random-pin').value = getRandomNum();
   
})


document.getElementById('calc-number').addEventListener('click', function(event){
   const number = event.target.innerText;
   let inputValue = document.getElementById('input-num');
    if(isNaN(number)){
        if(number == "C"){
            inputValue.value = "";
        }
        else if(number == "<"){
            inputValue.value = inputValue.value.replace(/[0-9]/g, '');
        }
    }else{
        const previousNum = inputValue.value;
        const currentNum = previousNum + number;
        inputValue.value = currentNum;
    }
})

function verify(){
    const genaratePin = document.getElementById('input-random-pin').value;
    const typedPin = document.getElementById('input-num').value;

    const errorNotify = document.getElementById('error-notify');
    const matchedNotify = document.getElementById('success-notify');

    if(genaratePin == typedPin){
        matchedNotify.style.display = 'block';
        errorNotify.style.display = 'none';
    }
    else{
        errorNotify.style.display = 'block';
        matchedNotify.style.display = 'none';
    }
}

// let count = 0;
// console.log(parseInt("count" + 1))


// const spider = Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9)
// console.log(spider);

// const hello = (!isNaN("10X"))
// console.log(hello)

// const product = 5; 
// const price = "7"; 
// const subTotal = product * price; 
// const tax = subTotal/10; 
// const total = subTotal + tax; 

// console.log(total);

