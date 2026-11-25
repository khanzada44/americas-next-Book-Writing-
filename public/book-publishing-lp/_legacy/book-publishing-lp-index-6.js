$(document).ready(function () {
         
          $("#entry-box_close").click(function () {
              $("#entry-popup").fadeOut();
          });
          $('.open-popup').click(function () {
              $("#entry-popup").css("display", "flex").fadeIn();
          })
      })
      
      $("#entry-box_close").click(function () {
          $("#entry-popup").fadeOut()
      }), window.location.hash || setTimeout(function () {
          $("#entry-popup").css("display", "flex").fadeIn()
      }, 10000)
