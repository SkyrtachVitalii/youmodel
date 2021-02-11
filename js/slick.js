$(document).ready(function(){
    $('.slideshow').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        cssEase: 'ease',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 1000,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              cssEase: 'ease',
              autoplay: true,
              autoplaySpeed: 2000,
              easing: 'swing',
              dots: false,
              infinite: true,
              speed: 1000
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              cssEase: 'ease',
              autoplay: true,
              autoplaySpeed: 2000,
              easing: 'swing',
              dots: false,
              infinite: true,
              speed: 1000
            }
          }
        ]
      });
  });

