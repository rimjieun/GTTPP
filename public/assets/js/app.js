$(document).ready(function () {

    $('.parallax').parallax();

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    function nextSlide() {
      $('.carousel').carousel('next');
    }
    
    // var carouselInterval = setInterval(nextSlide, 5000);
    

    console.log("loaded");


});
