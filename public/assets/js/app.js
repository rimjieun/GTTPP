$(document).ready(function () {

    var heightSlider = $('nav').height();

  $('main').css({ marginTop: heightSlider });

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    function nextSlide() {
      $('.carousel').carousel('next');
    }
    
    var carouselInterval = setInterval(nextSlide, 6000);
    


});
