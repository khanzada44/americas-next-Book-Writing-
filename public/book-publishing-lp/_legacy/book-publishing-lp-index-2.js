$('.nav-tabs-selector').on('change', function (e) {
          $(this).closest(".tab-area").find('.nav-tabs li a').eq($(this).val()).tab('show');
      });
