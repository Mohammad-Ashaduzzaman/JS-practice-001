// loging page commands 
document.getElementById('login-button').addEventListener('click',function(){
    const userIdElement = document.getElementById('user-id');
    const userId= userIdElement.value;
    
    const userPasswordElement = document.getElementById('user-password');
    const userPassword= userPasswordElement.value;

    if (userId==='bankers@bank.org' && userPassword==='secrete') {
        window.location.href = 'account.html';
    }else{
        alert('Invalid user ID or Pass');
    }
});



