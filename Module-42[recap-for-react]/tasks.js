
const isValid = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)){
        document.getElementById('errorMsg').innerText = 'Succesfull';
    }else{
        document.getElementById('errorMsg').innerText = 'Eneter valid email';
    }
}