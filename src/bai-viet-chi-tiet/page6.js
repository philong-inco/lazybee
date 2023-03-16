let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("slide-item");

let timeOut;


function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  timeOut = setTimeout(showSlides, 3000); 
}

function changeImage(numbers) {
    clearTimeout(timeOut);
    slideIndex = numbers;
    showSlides();
}

showSlides();