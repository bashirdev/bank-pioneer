//login button event handler
var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
   var login = document.getElementById('login-Area');
   login.style.display ="none";
   login.style.transition='all .3s ease-in';
   var depo= document.getElementById('deposit-Area');
   depo.style.display='block';
   depo.style.marginTop='100px';
   depo.style.transition='all .3s ease-in'
});

//deposit button event handler
var depositBtn = document.getElementById('depoBtn');
var withdrawBtn =document.getElementById('withBtn');

depositBtn.addEventListener('click' , function(){
    //deposit
   var depositValue= document.getElementById('depoId').value;

   var depositAmount =parseFloat(depositValue);

  updateSpanText('currentDeposit', depositAmount);
 
  updateSpanText('currentBalance', depositAmount );


});

function updateSpanText(id , depositAmount){
    var depositBalance =document.getElementById(id).innerText;
    var currrentBalance =parseFloat(depositBalance);
    document.getElementById(id).innerText =currrentBalance + depositAmount;
    document.getElementById('depoId').value = '';
}





withdrawBtn.addEventListener('click', function(){
    var withdrawMoney=document.getElementById('drawId').value;
    var moneyWitdraw =parseFloat(withdrawMoney);

    var withDrawAmout =document.getElementById('withdrawAmont').innerText;
    
    var amoutWithdraw =parseFloat(withDrawAmout);

    document.getElementById('withdrawAmont').innerHTML= moneyWitdraw + amoutWithdraw;
    document.getElementById('currentBalance').innerText -=moneyWitdraw ;

    withdrawMoney=document.getElementById('drawId').value='';
})



