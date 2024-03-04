(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: true,
    autoplay:true,
    smartSpeed: 1000,
    autoplayTimeout:3000

  });


  // owlCarousel
  $(".familia_slider").owlCarousel({
    loop: true,
    margin: 30,
    navText: [
      '<i ><img src="assets/img/arrow-left.svg" alt=""></i>',
      '<i ><img src="assets/img/arrow-right.svg" alt=""></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".Experienc_slider").owlCarousel({
    loop: true,
    margin: 60,
    items: 1,
    stagePadding: 300,
    navText: [
      '<i ><img src="assets/img/arrow-left.svg" alt=""></i>',
      '<i ><img src="assets/img/arrow-right.svg" alt=""></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        autoHeight: true,
        margin: 20,
        stagePadding: 40
      },
      767: {
        stagePadding: 170
      },
      992: {
        stagePadding: 170
      },
      1200: {
        stagePadding: 200
      },
      1500: {
        stagePadding: 300
      }
    }
  });




  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="100" 

 
})(jQuery);
