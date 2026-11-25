//***** Sticky Header JS Start Here *****//
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});
//***** Sticky Header JS End Here *****//

//***** Banner Step Form JS Fold1 Start *****//
$(document).on('change','.form-check-input',function(e){
    $(this).closest('.selceted-box').hide();
    $(this).closest('.selceted-box').next().show();
});
$(document).on('click','.next-btn',function(e){
    var value = $(this).closest('.selceted-box').find('.form-check-input')
    if(value.is(':checked')){
        $(this).closest('.selceted-box').hide();
        $(this).closest('.selceted-box').next().show();
    } else{
        alert("please check a value")
    }  
});
$(document).on('click','.previous-btn',function(e){
    $(this).closest('.selceted-box').hide();
    $(this).closest('.selceted-box').prev().show();
});
//***** Banner Step Form JS Fold1 End *****//

//***** Banner Down Brands Slider JS Start Here *****//
$('.badges-brands-item').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});
//***** Banner Down Brands Slider JS End Here *****//

//***** Popup And Flaot Buttons JS Start Here *****//
// $(window).ready(function () {
//     setTimeout(function () {
//         $("#staticBackdrop").modal("show");
//     }, 5000);
// }),

// $(".float-form-clickbtn").click(function () {
//   $(".float-side-form").toggleClass("active");
// });
//***** Popup And Flaot Buttons JS End Here *****//

//***** Footer Disclaimer Click Toggle JS Start Here *****//
// $(document).ready(function(){
//   $(".disclaimer-button").click(function(){
//     $(".disclaimer-button").add(function(){
//     $(".disclaimer-para").toggle();
//   });
// });
//***** Footer Disclaimer Click Toggle JS End Here *****//







