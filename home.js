document.addEventListener('DOMContentLoaded', function() {
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var topfixed = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= topfixed) {
    navbar.classList.add("topfixed")
  } else {
    navbar.classList.remove("topfixed");
  }
}
})