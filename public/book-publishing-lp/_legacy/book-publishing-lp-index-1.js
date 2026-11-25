$(function() {
          $(".tabs li:first").addClass("current");
          $(".tab-content .one").not(":first").hide();
          $(".tabs li").click(function() {
              $(this).addClass("current").siblings().removeClass("current");
              var index = $(".tabs li").index(this);
              $(".tab-content .one").eq(index).fadeIn().siblings().fadeOut();
          })
      })
      

      $(function() {
          $(".tabs li:first").addClass("current");
          $(".tab-content .one:first").css('display', 'block');
          autoScroll();
          contentHover();
          currentHover();
      
      });
      var i = -1;
      var n = $(".tabs li").length - 1;
      var offset = 3000;
      var timer = null;
      
      function autoScroll() {
          i++;
          if (i > n)
              i = 0;
          slide(i);
          timer = window.setTimeout(autoScroll, offset);
      }
      
      function slide(i) {
          $(".tabs li").eq(i).addClass("current").siblings().removeClass("current");
          $(".tab-content .one").eq(i).fadeIn().siblings().hide();
      }
      
      function currentHover() {
          $(".tabs li").hover(function() {
              if (timer) {
                  clearTimeout(timer);
                  i = $(this).prevAll().length;
                  slide(i);
              }
          }, function() {
              timer = window.setTimeout(autoScroll, offset);
              this.blur();
              return false;
          })
      }
      
      function contentHover() {
          $(".tab-content .one").hover(function() {
              if (timer) {
                  clearTimeout(timer);
                  i = $(this).prevAll().length;
                  slide(i);
              }
          }, function() {
              timer = window.setTimeout(autoScroll, offset);
              this.blur();
              return false;
          })
      }
