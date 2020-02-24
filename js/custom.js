/* global alert, document, consle */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    'use strict';
  showSlides(slideIndex += n);
}

function showSlides(n) {
    'use strict';
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

$("document").ready(function () {
    'use strict';
    $(".inp").click(function () {
        $(".inp").attr("value"," ");
    });
});