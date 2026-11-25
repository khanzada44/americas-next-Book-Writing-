$('.popup-btn').on('click', function(){
         $('.popupform-main-new-popup').addClass('active');
         $('body').addClass('o-hidden');
         $('.overlay-bg').fadeIn(500);
         $('.close-btn').on('click', function(){
         $('.popupform-main-new-popup').removeClass('active');
         $('body').removeClass('o-hidden');
         $('.overlay-bg').fadeOut(500);
         });
         $('.overlay-bg').click(function() {
         $('popupform-main-new-popup').removeClass('active');
         $('body').removeClass('o-hidden');
         $('.overlay-bg').fadeOut(500);
         
         });
         });
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
							
$('.cta-slider').slick({
	dots:false,
	arrows:true,
	autoplaySpeed: 0,
	speed: 5000
});
$('.cl-logo-slider').slick({
			dots: true,
			autoplay: true,
			infinite: true,
			autoplaySpeed: 0,
			speed: 5000,
			autoplay: true,
			
			cssEase: 'linear',
			arrows:false,
			dots:false,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			{
			breakpoint: 1024,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			arrows:false,
			dots:false,
			}
			},
			{
			breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
			},
			{
			breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
			});
$('.resume_inner').slick({
dots: true,
centerMode: true,
centerPadding: '60px',
infinite: true,
arrows: false,
autoplay:true,
autoplaySpeed:2000,
speed: 2000,
slidesToShow: 5,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 5,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
}
]
});
$('.testi-slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  
  speed: 300,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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

$(document).ready(function () {
	$('.example-document .highlight').each(function (index, value) {
		var nr = index + 1;
		$(this).addClass('highlight-' + nr);
		$(this).append('<span class="nr-icon-positioner"><span class="nr-icon nr-icon-' + nr + '" id="nr-icon-doc-' + nr + '">' + nr + '</span></span>')
	});
	$('.example-document u').each(function (index, value) {
		$(this).attr("title", "")
	});
	$('.example-document del').each(function (index, value) {
		$(this).attr("title", "")
	});
	proofreading_example_init()
});

function animate_icon(el) {
	el.animate({
		width: "+=14",
		height: "+=14",
		padding: "+=7",
		top: "-=7",
		right: "-=7"
	}, 200, function () {
		el.animate({
			width: "-=14",
			height: "-=14",
			padding: "-=7",
			top: "+=7",
			right: "+=7",
		}, 200, function () {})
	})
}

function proofreading_example_init() {
	if ($(window).width() > 991) {
		proofreading_example_highlights()
	} else {
		proofreading_example_highlights_mobile()
	}
}

function proofreading_example_highlights_mobile() {
	$('.example-document .highlight').click(function () {
		var nr = $(this).find('.nr-icon').attr('id').replace(/^\D+/g, '');
		$('#explanation-' + nr).addClass('modal');
		$('#explanation-' + nr).modal('show');
		$('#explanation-' + nr).find('.explanation__text').show()
	});
	$('.explanation__header__title').click(function () {
		$('.explanation').modal('hide')
	})
}

function proofreading_example_highlights() {
	$('.example-document .highlight').click(function () {
		var nr = $(this).find('.nr-icon').attr('id').replace(/^\D+/g, '');
		$('.explanation').not('#explanation-' + nr).find('.explanation__text').slideUp(400);
		$('#explanation-' + nr).find('.explanation__text').slideToggle(400);
		$('.explanation').not('#explanation-' + nr).removeClass('expanded');
		$('#explanation-' + nr).toggleClass('expanded')
	});
	$('.explanation').click(function () {
		$('.explanation').not(this).find('.explanation__text').slideUp(400);
		$(this).find('.explanation__text').slideToggle(400);
		$('.explanation').not(this).removeClass('expanded');
		$(this).toggleClass('expanded');
		var nr = $(this).attr('id').replace(/^\D+/g, '');
		var highlight = $('.highlight-' + nr);
		var highlight_icon = highlight.find('.nr-icon');
		animate_icon(highlight_icon)
	})
};
