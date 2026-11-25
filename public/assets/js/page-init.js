/*
 * Per-page setup of the main site (was assets/js/custom.js + the lozad and phone scripts).
 * The site now changes pages without a reload (<Link>), so the old "run once on page load"
 * scripts could not set up the new page. window.abwPageInit() is called by
 * components/ScriptChain.jsx after the first load AND after every page change.
 * Every step only touches what is not set up yet, so calling it again is safe.
 */
(function ($) {
  'use strict';
  if (!$) return;

  // clicks: bound once on document, so they also work for elements added later
  var bound = false;
  function bindOnce() {
    if (bound) return;
    bound = true;
    $(document).on('click.abw', '.nav-open', function () {
      $('.nav-bar').toggleClass('active');
    });
    $(document).on('click.abw', '.nav-item .nav-link', function () {
      $('.book-slider.slick-initialized').slick('refresh');
    });
    $(document).on('click.abw', '.chat, .chatt', function () {
      if (window.$zopim && window.$zopim.livechat) window.$zopim.livechat.window.toggle();
    });
  }

  // sliders (same settings as custom.js)
  function sliders() {
    if (!$.fn.slick) return;
    $('.book-slider').not('.slick-initialized').slick({
      dots: false, arrows: true, lazyLoad: 'ondemand', infinite: true, slidesToShow: 3, slidesToScroll: 1,
      responsive: [{ breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }],
    });
    $('.geners, .industry').not('.slick-initialized').slick({
      dots: false, arrows: true, lazyLoad: 'ondemand', infinite: true, slidesToShow: 1, slidesToScroll: 1, fade: true,
    });
    $('.review').not('.slick-initialized').slick({
      dots: false, arrows: true, lazyLoad: 'ondemand', infinite: true, slidesToShow: 1, slidesToScroll: 1, fade: false,
    });
  }

  // lazy images and backgrounds (class="lozad") that are not loaded yet
  function lazy() {
    if (typeof window.lozad !== 'function') return;
    window.lozad('.lozad:not([data-loaded])', { rootMargin: '10px 0px', threshold: 0.1, enableAutoReload: true }).observe();
  }

  // phone fields with the country flag (only fields that do not have it yet)
  function phones() {
    if (!$.fn.intlTelInput) return;
    $("input[name='phone']").each(function () {
      var $i = $(this);
      if ($i.closest('.iti').length) return;
      $i.intlTelInput({
        geoIpLookup: function (cb) {
          $.get('https://ipinfo.io', function () {}, 'jsonp').always(function (r) { cb(r && r.country ? r.country : ''); });
        },
        initialCountry: 'auto',
        separateDialCode: true,
      });
      $i.on('countrychange', function () {
        $i.val('');
        if (!window.intlTelInputUtils || !$.fn.mask) return;
        var c = $i.intlTelInput('getSelectedCountryData');
        var ph = intlTelInputUtils.getExampleNumber(c.iso2, 0, 0);
        ph = intlTelInputUtils.formatNumber(ph, c.iso2, 2).replace('+' + c.dialCode + ' ', '');
        $i.mask(ph.replace(/[0-9+]/g, '0'), { placeholder: ph });
      });
      $i.on('input', function () {
        if (/^1/.test(this.value)) this.value = this.value.replace(/^1/, '');
      });
    });
  }

  window.abwPageInit = function () {
    bindOnce();
    $('.nav-bar').removeClass('active'); // close the mobile menu after a page change
    sliders();
    lazy();
    phones();
  };
})(window.jQuery);
