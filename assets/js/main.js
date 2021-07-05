$(document).ready(function($){
  "use strict";
//==============================
// smooth scroll
//==============================


  $(window).on('scroll', function () {
    var wscroll = $(this).scrollTop();
    //fixed-nav
    wscroll > 1 ? $("#header").addClass("fixed") : $("#header").removeClass("fixed");

    // go top appear
    wscroll > 700 ? $("#goTop").fadeIn() : $("#goTop").fadeOut();

  });


  $( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          800:{
            items:3
        },
    
          1000:{
              items:4
          },
          1500:{
            items:5
        }
      }
  })


});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// portfolio popup image
$('.image-link').magnificPopup({type:'image'});
}(jQuery));

