

var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
   var login = document.getElementById('login-Area');
   login.style.display ="none";
   login.style.transition='all .3s ease-in';
   var depo= document.getElementById('deposit-Area');
   depo.style.display='block';
   depo.style.marginTop='100px'
});