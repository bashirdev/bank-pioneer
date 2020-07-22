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
   var depositValue= updateWithDraw('depoId')

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



//withdraw function 

withdrawBtn.addEventListener('click', function(){
   

     var withdrawNum = updateWithDraw('drawId');
     console.log(withdrawNum);

     updateSpanText()
   
})

function updateWithDraw(id, moneyWitdraw ){

    var amount=document.getElementById(id).value;
    var amountNumber =parseFloat(amount);
    // var total =amount - amountNumber;
    return amountNumber;

    // var withDrawAmout =document.getElementById(id).innerText;
    
    // var amoutWithdraw =parseFloat(withDrawAmout); 

    // document.getElementById(id).innerHTML= moneyWitdraw + amoutWithdraw;
    // document.getElementById(id).innerText -=moneyWitdraw ;

    // withdrawMoney=document.getElementById(id).value='';
}



