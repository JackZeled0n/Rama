$(function() {
  "use strict";

    if ($('.hero-carousel').length) {
        $('.hero-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true
        })
    }
  
});


