

function getInputValue(inputId){
    const inputfield = document.getElementById(inputId);
    const inputText = inputfield.value;
    const totalAmount = parseFloat(inputText);
    //clear input value
    inputfield.value = '';
    return totalAmount;
}

function addTotalValue(textId, amount){
    
    //get the deposit area value.
    const depositTotal = document.getElementById(textId);
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);

    //adding parseFolat value 
    const totalAmount = depositTotalAmount + amount;
    
    //add input value to total area.
    depositTotal.innerText = totalAmount;
}
function getCurrentBalance(){
    const previousBalance = document.getElementById('total-balance');
    const previousBalanceText = previousBalance.innerText;
    const totalPeviousBalance = parseFloat(previousBalanceText);
    return totalPeviousBalance;
}

function totalBalance(depositAmount, isAdd){
    //get the balance value.
    const previousBalance = document.getElementById('total-balance');
    // const previousBalanceText = previousBalance.innerText;
    // const totalPeviousBalance = parseFloat(previousBalanceText);
    const totalPeviousBalance = getCurrentBalance()
    
    if(isAdd == true){
        previousBalance.innerText = totalPeviousBalance + depositAmount;
    }else{
        previousBalance.innerText = totalPeviousBalance - depositAmount;
    }
}



//add event listener in the button.
document.getElementById('deposit-btn').addEventListener('click', function(){
    //get deposit input value.
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // const depositAmount = parseFloat(depositInputText);

    
    // //get the deposit area value.
    // const depositTotal = document.getElementById('total-deposite');
    // const depositTotalText = depositTotal.innerText;
    // const depositTotalAmount = parseFloat(depositTotalText);

    // //adding parseFolat value 
    // const totalAmount = depositTotalAmount + depositAmount;
    
    // //add input value to total area.
    // depositTotal.innerText = totalAmount;

    //get the balance value.
    // const previousBalance = document.getElementById('total-balance');
    // const previousBalanceText = previousBalance.innerText;
    // const totalPeviousBalance = parseFloat(previousBalanceText);
    
    // //add current balnce with previous balance 
    // previousBalance.innerText = totalPeviousBalance + depositAmount;

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        addTotalValue('total-deposite', depositAmount)
        totalBalance(depositAmount, true);
    }
    

})

//handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //get withdraw input value and parse float it. 
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const totalInputAmmount = parseFloat(withdrawInputText);

   

    // //get withdraw area innerText and parse float it.
    // const totalWithdrawArea =  document.getElementById('withdraw-total');
    // const withdrawAmmountText = totalWithdrawArea.innerText;
    // const totalWithdrawAmmount = parseFloat(withdrawAmmountText);
    
    // //add both parse floated value.
    // totalWithdrawArea.innerText = totalWithdrawAmmount + totalInputAmmount;

 

    // //update balance after withdeaw.
    // const totalBalance = document.getElementById('total-balance');
    // const balanceText = totalBalance.innerText;
    // const previousTotalBalance = parseFloat(balanceText);
     
    // //substract inserted ammoubt from balnce total.
    // totalBalance.innerText = previousTotalBalance - totalInputAmmount;
    const totalInputAmmount = getInputValue('withdraw-input')
    const currentBalnce  = getCurrentBalance()
    if(totalInputAmmount > 0 && totalInputAmmount < currentBalnce){
        addTotalValue('withdraw-total', totalInputAmmount);
        totalBalance(totalInputAmmount, false);
    }
    if(currentBalnce < totalInputAmmount){
        console.log('Your ammount is insufficient')
    }
     
})

