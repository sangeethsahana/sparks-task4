function lw()
{
var i = document.getElementById("in1").value
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://18.217.154.151/cgi-bin/car.py?x=" + i, true);
xhr.send();
xhr.onload= function() {
var i = document.getElementById("in1").value
var output = xhr.responseText;
document.getElementById("d1").innerHTML = output;
}
}


