window.addEventListener("DOMContentLoaded", 
  function () {
  if (window.location.hash) {
   document.getElementById('Aa').style.display = 'block'
  }
  else {
    document.getElementById('Aa').style.display = 'none';
    document.getElementById('Ab').style.display = 'none';
    document.getElementById('Ac').style.display = 'none';
  }
  })

function ano() {    
   document.getElementById("Aa").addEventListener("click", function countdown() { 
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 5; // change to required time
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
})
}
  


function myFunction() { 
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 4; // change to required time
}
if(countdown.counter >= 0) {
document.getElementById('span1').style.display = 'block';

const words = ['Initiating ...', 'Verifying ...', 'Verifying ...', 'Confirming ...'];

      i = 0;
      const counter = setInterval(foo, 1000);

      function foo() {
        document.getElementById('interval').innerHTML = words[i];
        i++;
        if (i >= 4) clearInterval(counter);
      }

countdown.counter--;
setTimeout(countdown, 1000);
}
else {
document.getElementById('span2').style.display = 'block';
document.getElementById('span1').style.display = 'none';
document.getElementById('Ac').style.display = 'none';
}
}
countdown();



        
        document.getElementById("bot").scrollIntoView({ behavior: "smooth" });
    };

function myStart() {
  if (window.location.hash){
    var start = window.location.hash.substr(1);
  window.open(start,'_self');
};
  }
