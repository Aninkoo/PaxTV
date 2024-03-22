window.addEventListener("DOMContentLoaded", 
  function () {
  if (window.location.hash) {
   document.getElementById('Aa').style.display = 'block'
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
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 9; // change to required time
}
if(countdown.counter >= 0) {
document.getElementById('Ab').style.display = 'block';
document.getElementById('Aa').style.display = 'none';
document.getElementById('count').innerHTML = countdown.counter--;
setTimeout(countdown, 1000);
}
else {
document.getElementById('Ac').style.display = 'block';
document.getElementById('Ab').style.display = 'none';
}
}
countdown();
}


function myFunction() { 
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 5; // change to required time
}
if(countdown.counter >= 0) {
document.getElementById('span1').style.display = 'block';

const words = ['Initiating ...', 'Verifying ...', 'Verifying ...', 'Confirming ...', 'Confirming ...'];

      i = 0;
      const counter = setInterval(foo, 1000);

      function foo() {
        document.getElementById('interval').innerHTML = words[i];
        i++;
        if (i >= 5) clearInterval(counter);
      }

countdown.counter--;
setTimeout(countdown, 1000);
}
else {
document.getElementById('span2').innerHTML = '👇 Click here and wait 👇';
document.getElementById('span1').style.display = 'none';
document.getElementById('Ac').style.display = 'none';
}
}
countdown();
       document.getElementById("bot").scrollIntoView({ behavior: "smooth" });
    };


function myFun() { 
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 5; // change to required time
}
if(countdown.counter >= 0) {
function myStart() {
  if (window.location.hash){
    var start = window.location.hash.substr(1);
  window.open(start,'_self');
  Telegram.WebApp.close();
};
  };
  countdown.counter--;
setTimeout(countdown, 1000);
}}}
