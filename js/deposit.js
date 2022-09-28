// account page commands 
        // deposit section 
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInputElecment= document.getElementById('user-deposit-amount');
    const userDepositAmountString= depositInputElecment.value;
    const userDepositAmount=parseFloat(userDepositAmountString);

    

    const perviouDepotElecment= document.getElementById('deposit-number');
    const perviouDepotString= perviouDepotElecment.innerText;
    const perviouDepotAmount= parseFloat(perviouDepotString);
    
    const presentDepositAmount = userDepositAmount + perviouDepotAmount;
    perviouDepotElecment.innerText=presentDepositAmount;

    const perviouBalanceElecment= document.getElementById('balance-number');
    const perviouBalanceString= perviouBalanceElecment.innerText;
    const perviouBalanceAmount= parseFloat(perviouBalanceString);

    const presentBalanceAmount = userDepositAmount + perviouBalanceAmount;
    perviouBalanceElecment.innerText= presentBalanceAmount;

    depositInputElecment.value='';

})