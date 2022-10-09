document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const totalDeposite = document.getElementById('total-deposite');
    // totalDeposite.innerText = depositInput.value
    
    const parsePreviousValue = parseFloat(totalDeposite.innerText);
    const parseValue = parseFloat(depositInput.value);

    const newToatalValue = parseValue;
    totalDeposite.innerText = newToatalValue;

    const totalBlanceText = document.getElementById('total-balance');
    const totalBlance = parseFloat(totalBlanceText.innerText);
    // console.log(totalBlance);
    const totalAmmont = totalBlance + newToatalValue;
   totalBlanceText.innerText = totalAmmont;
    
    depositInput.value = ''
})

//code for withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
     const withdrawInput = document.getElementById('withdraw-input');
     const widthrawValue = withdrawInput.value;
     const parseWithdrow = parseFloat(widthrawValue);

     const totalWitdraw = document.getElementById('withdraw-total');
     
     const totalWitdrawValue = totalWitdraw.innerText;
     const parseTotalWithdraw = parseFloat(totalWitdrawValue);
     const totalWitdrawAmmount = parseWithdrow
     totalWitdraw.innerText = totalWitdrawAmmount;
     
     //get the balance total
     const balanceTotal = document.getElementById('total-balance');
     const floatBalance = parseFloat(balanceTotal.innerText);
    //  console.log(floatBalance);
    balanceTotal.innerText = floatBalance - totalWitdrawAmmount ;
     withdrawInput.value = ''
     
})

