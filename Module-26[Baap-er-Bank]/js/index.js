
document.getElementById('submit-btn').addEventListener('click', function(){
    const emailinput = document.getElementById('email-input');
    const emailValue = emailinput.value;
    const passwordInput = document.getElementById('input-pass');
    const passValue = passwordInput.value;

    if(emailValue == 'iqbal@email.com' && passValue == '1234'){
        window.location.href = 'banking.html';
    }
})