window.addEventListener("DOMContentLoaded", 
function countdown() {
  if (window.location.hash){
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
  }
  else {
    document.getElementById('time').style.display = 'none';
  }
});

function myStart() {
  if (window.location.hash){
    var start = window.location.hash;
    var next = './jan_2024/clickbait_ltns_long_time_no_sex.html'
    var new = 'next+start'
  window.open(new,'_self');
};
}
