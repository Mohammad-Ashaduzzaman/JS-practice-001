// account page commands 
        // deposit section 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInputElecment= document.getElementById('user-withdraw-amount');
    const userWithdrawAmountString= withdrawInputElecment.value;
    const userWithdrawAmount=parseFloat(userWithdrawAmountString);

    const perviouWithdrawElecment= document.getElementById('withdraw-number');
    const perviouWithdrawString= perviouWithdrawElecment.innerText;
    const perviouWithdrawAmount= parseFloat(perviouWithdrawString);
    
    const presentWithdrawAmount = userWithdrawAmount + perviouWithdrawAmount;
    perviouWithdrawElecment.innerText=presentWithdrawAmount;

    const perviouBalanceElecment= document.getElementById('balance-number');
    const perviouBalanceString= perviouBalanceElecment.innerText;
    const perviouBalanceAmount= parseFloat(perviouBalanceString);

    const presentBalanceAmount = perviouBalanceAmount-userWithdrawAmount;
    perviouBalanceElecment.innerText= presentBalanceAmount;

    withdrawInputElecment.value='';

})