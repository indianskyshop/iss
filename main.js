function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function srch() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("Search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("Menu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "inline-block";
      li[i].classList.remove("invis");
    } else {
      li[i].style.display = "none";
    }
  }
}
// Get the modal
var wamodal = document.getElementById("waPop");
var phmodal = document.getElementById("phPop");
var ytmodal = document.getElementById("ytPop");
var mlmodal = document.getElementById("mlPop");

// Get the button that opens the modal
var wabtn = document.getElementById("wabtn");
var phbtn = document.getElementById("phbtn");
var ytbtn = document.getElementById("ytbtn");
var mlbtn = document.getElementById("mlbtn");

// Get the <span> element that closes the modal
var waspan = document.getElementById("waclose");
var phspan = document.getElementById("phclose");
var ytspan = document.getElementById("ytclose");
var mlspan = document.getElementById("mlclose");

// When the user clicks the button, open the modal 
wabtn.onclick = function() {
  wamodal.style.display = "block";
}
phbtn.onclick = function() {
  phmodal.style.display = "block";
}
ytbtn.onclick = function() {
  ytmodal.style.display = "block";
}
mlbtn.onclick = function() {
  mlmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
waspan.onclick = function() {
  wamodal.style.display = "none";
}
phspan.onclick = function() {
  phmodal.style.display = "none";
}
ytspan.onclick = function() {
  ytmodal.style.display = "none";
}
mlspan.onclick = function() {
  mlmodal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == wamodal) {
    wamodal.style.display = "none";
  }
  if (event.target == phmodal) {
    phmodal.style.display = "none";
  }
  if (event.target == ytmodal) {
    ytmodal.style.display = "none";
  }
  if (event.target == mlmodal) {
    mlmodal.style.display = "none";
  }
}
