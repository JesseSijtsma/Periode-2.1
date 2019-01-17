const btn = document.getElementById('btn');
let bars = document.getElementsByClassName('bar');


const slide = ()=>{
  bars[0].classList.toggle('bar--toggle');
  bars[1].classList.toggle('bar--toggle');
  bars[2].classList.toggle('bar--toggle');
  bars[3].classList.toggle('bar--toggle');
  bars[4].classList.toggle('bar--toggle');
}

btn.addEventListener('click', slide);


var i = 0;
var txt = 'Welcome.';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.body.onload = typeWriter();