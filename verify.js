window.addEventListener("DOMContentLoaded", 
  function () {
  if (window.location.hash) {
   document.getElementById('Aa').style.display = 'block';
   document.getElementById('Ab').style.display = 'none';
   document.getElementById('Ac').style.display = 'none';
   Telegram.WebApp.expand();
  }
  else {
    document.getElementById('Aa').style.display = 'none';
    document.getElementById('Ab').style.display = 'none';
    document.getElementById('Ac').style.display = 'none';
  }
  });

function another() { 
  
  show_8870098().then(() => {
    // You need to add your user reward function here, which will be executed after the user watches the ad.
  nextt();  
  

});
    
}


function nextt() { 
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 3; // change to required time
}
if(countdown.counter >= 0) {
document.getElementById('Ab').style.display = 'block';
document.getElementById('Aa').style.display = 'none';
document.getElementById('count').innerHTML = countdown.counter--;
setTimeout(countdown, 1000);
}
else {
if (window.location.hash){
    var start = window.location.hash.substr(1);
  window.open(start,'_self');
  alert('✔️ You have been verified!');
  Telegram.WebApp.close();
}
}
}
countdown();
}
