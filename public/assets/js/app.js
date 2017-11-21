$(document).ready(function () {

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    function nextSlide() {
      $('.carousel').carousel('next');
    }
    
    // var carouselInterval = setInterval(nextSlide, 6000);
    

    console.log("loaded");


});
