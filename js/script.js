$(function () {

    "use strict";


 


   
$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow:'.pre-arrow',
    nextArrow:'.next-arrow',
  });


  
  

  $('.project-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 2000,
    prevArrow:'.left-arrow',
    nextArrow:'.right-arrow',
  
  });
  

  $('.venobox').venobox();

  $('.testimonial_content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 2000,
    prevArrow:'.left-arrow',
    nextArrow:'.right-arrow',
  });

   

  


});








