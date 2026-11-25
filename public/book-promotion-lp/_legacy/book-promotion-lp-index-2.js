function order_now_value(objButton){
      x = objButton.name;
      document.getElementById('lead_area_popup1').value = x;
      // document.getElementById('lead_text').innerHTML = x;
    }
         $( document ).ready(function() {
         //var currentIP;
         var key = '5XpThOAEkfgOvEJ';
         var currentIP = $("meta[name=ip2loc]").attr('content');
         var pgurl = $("meta[name=page_url]").attr('content');
         $.ajax({
         method: 'get',
         url: '//pro.ip-api.com/json/' + currentIP,
         data: {key: key},
         success: function (data) {
         if (data) {
         $('input[name=ip2loc_ip]').val(data.query);
         $('input[name=ip2loc_isp]').val(data.isp);
         $('input[name=ip2loc_org]').val(data.org);
         $('input[name=ip2loc_country]').val(data.country);
         $('input[name=ip2loc_region]').val(data.regionName);
         $('input[name=ip2loc_city]').val(data.city);
         $('input[name=pageurl]').val(pgurl);
         
         
         
         }
         }
         });
         
         });


            $("[data-targetit]").on("click", function (e) {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                var target = $(this).data("targetit");
                $("." + target)
                    .siblings('[class^="box-"]')
                    .hide();
                $("." + target).fadeIn();
                $(".price-slider").slick("setPosition");
            });

            $('.bnr-logo').slick({
			    dots: false,
			    infinite: true,
			    vertical:false,
			    arrows: false,
			    autoplay: true,
				autoplaySpeed: 0,
				speed: 8000,
			    slidesToShow: 4,
			    slidesToScroll: 1,
			    responsive: [{
			        breakpoint: 768,
			        settings: {
			            slidesToShow: 1,
			            vertical:false,
			            dots:true
			        }
			    }, {
			        breakpoint: 480,
			        settings: {
			            slidesToShow: 1,
			            vertical:false,
			            dots:true
			        }
			    }]
			});

			// $('.portfolio-slider').slick({
			// 	dots: true,
			// 	arrows: false,
			// 	infinite: true,
			// 	speed: 300,
			// 	slidesToShow: 1,
			// 	slidesToScroll: 1
			// });

			$('.pricing-slider').slick({
				dots: true,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToShow: 3,
				slidesToScroll: 1,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]
			});

			$('.testi-slider').slick({
				dots: false,
				arrows: false,
				infinite: true,				
				centerMode: true,				
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 0,
				speed: 8000,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]
			});
			$('.portfolio-slider').slick({
				dots: true,
				arrows: true,
				infinite: true,				
				centerMode: true,				
				slidesToShow: 3,
				slidesToScroll: 1,
				// touchThreshold:100,
				// draggable:true,
				autoplay: true,
				prevArrow:"<div class='portfolio-slider-left'><i class='fa fa-arrow-left'></i></div>",
      			nextArrow:"<div class='portfolio-slider-right'><i class='fa fa-arrow-right'></i></div>",

				autoplaySpeed: 1000,
				speed: 1000,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]
			});

			// $('.portfolio-slider').slick({
			// 	dots: false,
			// 	infinite: false,
			// 	centerPadding: "20px",
			// 	speed: 300,
			// 	slidesToShow: 1,
			// 	adaptiveHeight: true
			// });

			$(function() {
				$('*[draggable!=true]','.slick-track').unbind('dragstart');
				$( ".draggable-element" ).draggable();
			});

			$(".draggable-element").on("draggable mouseenter mousedown",function(event){
				event.stopPropagation();
			});

$(document).on('show','.accordion', function (e) {
		//$('.accordion-heading i').toggleClass(' ');
		$(e.target).prev('.accordion-heading').addClass('accordion-opened');
		});
		
		$(document).on('hide','.accordion', function (e) {
		$(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
		//$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
		});
			  $(document).ready(function() {
  $(".fancybox").fancybox();
  });


               if ($(window).width() < 850) {

   $('.serv-main-col').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
    });

  $('.process-list ul').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
    });
  
}
