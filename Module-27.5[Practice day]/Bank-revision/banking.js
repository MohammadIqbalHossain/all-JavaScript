//declare a function for geting input value of deposit and withdraw.
function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputAmmont = parseFloat(inputText);
    input.value = '';
    return inputAmmont;
    
}
//function for geting deposit and withdraw text area.
function totalAmmount(ammountId, amount){
    const ammountField = document.getElementById(ammountId);
    const ammountText = ammountField.innerText;
    const ammountNum = parseFloat(ammountText);

    const total = ammountNum + amount;
    ammountField.innerText = total;
       
}

//function for geting balance.
function getBalance(isAdd, amount){
    const balanceField = document.getElementById('total-balance');
    const balanceText = balanceField.innerText;
    const balanceAmmount = parseFloat(balanceText);
    return balanceAmmount;
   

}

function addBalanceTotal(amount, isAdd){
  const balanceField = document.getElementById('total-balance');
  const balanceAmmount = getBalance();
    if(isAdd == true){
        balanceField.innerText = balanceAmmount + amount;
    }else{
        balanceField.innerText = balanceAmmount - amount;
    }
}




document.getElementById('deposit-btn').addEventListener('click', function(){
    const inputAmmountNum = getInputValue('deposit-input', true);
    totalAmmount('total-deposite', inputAmmountNum);
    addBalanceTotal(inputAmmountNum, true);
    
    
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
     const withdrawAmmount = getInputValue('withdraw-input', false);
     totalAmmount('withdraw-total', withdrawAmmount);
     addBalanceTotal(withdrawAmmount, false);
})
