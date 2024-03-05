window.addEventListener("DOMContentLoaded", 
function countdown() {
document.getElementById('time').style.display = 'none';
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 5; // change to required time
}
if(countdown.counter >= 0) {
document.getElementById('time').style.display = 'block';
document.getElementById('count').innerHTML = countdown.counter--;
setTimeout(countdown, 1000);
}
else {
document.getElementById('button').style.display = 'block';
document.getElementById('Tcount').style.display = 'none';
}
}
countdown();
});


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
}
}
countdown();



        
        document.getElementById("bot").scrollIntoView({ behavior: "smooth" });
    };
