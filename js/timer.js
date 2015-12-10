var c = 0;
var d;
function myCounter(){
  document.getElementById("timer").innerHTML = ++c;
}

function timekiller(){
  c = c+150;
}

function endtimer(){
  d=c;
  document.getElementById("endtimer").innerHTML = d;
}