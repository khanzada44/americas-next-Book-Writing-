$(document).ready(function () {
    
        $(".platforms .slider").slick({ 
        	dots: !1,
                arrows: !0,
                infinite: !0,
                speed: 1e3,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 4e3,
                adaptiveHeight: !0,
                centerMode: !1,
                responsive: [
                    { breakpoint: 1600, settings: { dots: !1, arrows: !0, slidesToShow: 3, slidesToScroll: 1 } },
                    { breakpoint: 990, settings: { dots: !1, arrows: !0, slidesToShow: 2, slidesToScroll: 1 } },
                    { breakpoint: 767, settings: { dots: !1, arrows: !0, slidesToShow: 1, slidesToScroll: 1 } },
                ],
            });
        $(".genere .slider").slick({ 
        	dots: !1, 
        	arrows: !0, 
        	lazyLoad: "ondemand", 
        	infinite: !0,
        	autoplay: !0, 
        	slidesToShow: 4, 
        	slidesToScroll: 1, 
        	responsive: [
        	{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }] 
        }),
        $(".reviews .slider").slick({ 
        	dots: !1,
                arrows: !0,
                infinite: !0,
                speed: 1e3,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 4e3,
                adaptiveHeight: !0,
                centerMode: !1,
                responsive: [
                    { breakpoint: 1600, settings: { dots: !1, arrows: !0, slidesToShow: 3, slidesToScroll: 1 } },
                    { breakpoint: 990, settings: { dots: !1, arrows: !0, slidesToShow: 2, slidesToScroll: 1 } },
                    { breakpoint: 767, settings: { dots: !1, arrows: !0, slidesToShow: 1, slidesToScroll: 1 } },
                ],
            });
        $(".nav-item .nav-link").click(function () {
            $(".book-slider").slick("refresh");
        });
      window.onload = ()=>{
        // $(selector).countMe(delay,speed)
        $(".aos-animate #num1").countMe(10,1);
        $(".aos-animate #num2").countMe(50, 80);
        $(".aos-animate #num3").countMe(40, 600);
        $(".aos-animate #num4").countMe(20,40);
     }
        AOS.init()
});
