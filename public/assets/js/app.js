$(document).ready(function () {

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    function nextSlide() {
      $('.carousel').carousel('next');
    }
    
    var carouselInterval = setInterval(nextSlide, 6000);
    
    function pageScroll(pixels){
      window.scrollTo(0, pixels);
    }

    $('.learn-more').on('click', function() {
      console.log("clicked");
      pageScroll(650); 
    });



});
