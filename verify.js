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
  if (window.location.hash){
    var start = window.location.hash.substr(1);
    window.open(start,'_self');
  show_8870098().then(() => {
    // You need to add your user reward function here, which will be executed after the user watches the ad.
    Telegram.WebApp.close();
    alert('✔️ You have been verified!'); 
})
}
}


