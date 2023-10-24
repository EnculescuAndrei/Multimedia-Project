var i = 0;
var txt = 'You were woken up by the sound of a new message on your phone.';
var speed = 50;
var speed2 = 4000;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriterOnLoad() {
  i = 0;
  document.getElementById("demo").innerHTML = '';
  typeWriter();
}

function typeWriterSpeed() {
  i = 0;
  document.getElementById("demo").innerHTML = '';
  document.getElementById("demo").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed2);
}


document.addEventListener('click', function (event) {
  i = 0;
  document.getElementById("demo").innerHTML = '';
  document.getElementById("demo").innerHTML += txt.charAt(i);
  i++;
  speed = 0;
  setTimeout(typeWriter, speed);
});