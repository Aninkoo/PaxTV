window.addEventListener("DOMContentLoaded", 
function countdown() {
  if (window.location.hash){
function countdown() {
if ( typeof countdown.counter == 'undefined' ) {
countdown.counter = 10; // change to required time
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

var sites = [
        './most_anticipated_new_returning_k-drama_2024_2.html',
        './most_anticipated_new_returning_k-drama_2024.html',
        './clickbait_ltns_long_time_no_sex.html'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        var next = sites[i];
    
    var start = window.location.hash
    let link = next+start
  window.open(link,'_self');
};
}
}
