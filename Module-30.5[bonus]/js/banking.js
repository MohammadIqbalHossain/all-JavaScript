
function getInputValue(fieldID){

    const input = document.getElementById(fieldID);
    const inputText = input.value;
    const inputTextNum = parseFloat(inputText);
    input.value = '';
    return inputTextNum;
}

function updateTotal(fieldID, amount){
  
    const total = document.getElementById(fieldID);
    const totalText = total.innerText;
    const totalValue = parseFloat(totalText);
    const addInput = totalValue + amount; 
    total.innerText = addInput; 
    return addInput; 
}

function getInnerText(){
    const balance = document.getElementById('total-balance');
    const balanceText = balance.innerText;
    const balanceNum = parseFloat(balanceText);
    return balanceNum;
}

function updateBalance(amount, isAdding){

    const balanceNum = getInnerText('total-balance')
    let newBalance;

    if(isAdding == true){
        newBalance = balanceNum + amount;
    }
    if(isAdding == false){
        newBalance = balanceNum - amount;
    }
    document.getElementById('total-balance').innerText = newBalance;
    
}


// function updateBalance() {
//      debugger;
//      const depositValue = updateTotal('deposit-total', amount);
//      const withdrawValue = updateTotal('withdraw-total', amount);
//      const balanceValue = getInnerText();

//      const balanceTotal = depositValue - withdrawValue + balanceValue;

//      document.getElementById('total-balance').innerText = balanceTotal;
// }


document.getElementById('deposit-btn').addEventListener('click', function(){

    const amount =  getInputValue('deposit-input');
    if(amount > 0){
        updateTotal('total-deposite', amount);
        updateBalance(amount, true)
        // updateBalance(amount);
    }
    
})



document.getElementById('withdraw-btn').addEventListener('click', function(){

    const amount = getInputValue('withdraw-input');
    if(amount > 0){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
        // updateBalance()
    }
    
}) 