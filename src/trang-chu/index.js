// slide 3d
var angle = 0;
var timeOut;
function galleryspin(sign = false) {
  clearTimeout(timeOut);
  spinner = document.querySelector("#spinner");
  if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
  spinner.setAttribute("style",
  "-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
  timeOut = setTimeout(galleryspin, 3000);
}

function changeImage(params) {
    clearTimeout(timeOut);
    galleryspin(params);
}

galleryspin('')
// end slide 3d


// Đồng hồ đếm ngược Home
// Set the date we're counting down to
var countDownDate = new Date("Apr 10, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("home-countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

}, 1000);

// Đồng hồ đếm ngược Home


///slide banner
var counter = 2;
let interval;
const clearAutoNextImage = () => {
    clearInterval(interval);
    intervalImage();
}
const intervalImage = () => {
    interval = setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4) {
            counter = 1;
        }
    }, 5000)
}
intervalImage();