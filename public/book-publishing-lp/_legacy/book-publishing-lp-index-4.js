$(document).ready(function () {
          $('#featured-content').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1500,
              arrows: false,
              dots: false,
              item: 4,
              pauseOnHover: false,
              responsive: [{
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1
                  }
              }, {
                  breakpoint: 520,
                  settings: {
                      slidesToShow: 1
                  }
              }]
          });
      });
