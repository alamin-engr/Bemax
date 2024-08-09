$(function () {

    "use strict";


 


   
$('.banner_slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow:'.pre-arrow',
    nextArrow:'.next-arrow',
  });



});

$(function () {
  "use strict";

  // Initialize Isotope
  var $portfolioIsotope = $('.portfolio-active').isotope({
      itemSelector: '.portfolio',
      percentPosition: true,
      masonry: {
          columnWidth: '.portfolio' // or set a specific width if needed
      }
  });

  // Filter Items on Click
  $('.portfolio_menu .menu li').click(function () {
      $('.portfolio_menu .menu li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $portfolioIsotope.isotope({
          filter: selector
      });
      return false; // Prevent default link behavior
  });
});



$('.brand_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 800,
  autoplaySpeed: 2000,
  prevArrow:false,
  nextArrow:false,
});