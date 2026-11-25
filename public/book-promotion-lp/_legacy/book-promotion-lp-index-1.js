$('.popup-btn').on('click', function(){

          $('.popupform-main-new-popup').addClass('active');

          $('body').addClass('o-hidden');

      $('.overlay-bg-new-popup').fadeIn(500);

      $('.close-btn').on('click', function(){

        $('.popupform-main-new-popup').removeClass('active');

              $('body').removeClass('o-hidden');

        $('.overlay-bg-new-popup').fadeOut(500);

      });

      $('.overlay-bg-new-popup').click(function() {

        $('popupform-main-new-popup').removeClass('active');

              $('body').removeClass('o-hidden');

        $('.overlay-bg-new-popup').fadeOut(500);

        

      });

      });



    $('.close-btn ,.no-thanks').on('click', function(){

    $('.popupform-main-new-popup').removeClass('active');

          $('body').removeClass('o-hidden');

    $('.overlay-bg-new-popup').fadeOut(700);

      });
