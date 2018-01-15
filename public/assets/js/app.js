$(document).ready(function () {

  // var heightSlider = $('nav').height();

  // $('main').css({ paddingTop: heightSlider });

  $('.carousel.carousel-slider').carousel({fullWidth: true});

  function nextSlide() {
    $('.carousel').carousel('next');
  }

  var carouselInterval = setInterval(nextSlide, 8000);



});
