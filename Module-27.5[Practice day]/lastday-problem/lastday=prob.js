document.getElementById('double').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputNum = parseFloat(inputText);
    const double = inputNum * 2;
    inputField.value = double;
})

document.getElementById('triple').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const inputNum = parseFloat(inputText);
    const triple = inputNum * 3;
    inputField.value = triple;
})