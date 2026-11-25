$(document).ready(function () {
          $('.story-slider').slick({
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
      $(document).ready(function () {
          $('.pricing').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 1500,
              arrows: false,
              dots: true,
              pauseOnHover: false,
              responsive: [{
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2
                  }
              }, {
                  breakpoint: 520,
                  settings: {
                      slidesToShow: 1
                  }
              }]
          });
      });
