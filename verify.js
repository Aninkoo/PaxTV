window.addEventListener("DOMContentLoaded", 
  function begin() {
    
    if(sessionStorage.length = 0) {
      document.getElementById('Aa').style.display = 'none';
      document.getElementById('Ab').style.display = 'none';
      document.getElementById('Ac').style.display = 'none';
    }
    else {
document.getElementById('Aa').style.display = 'none';
document.getElementById('Ab').style.display = 'none';
document.getElementById('Ac').style.display = 'none';
    }
  })

function myFunction() {
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
  var start = sessionStorage.getItem("Blink");
    console.log(Blink);
  window.open(start,'_self');
};
  

  
