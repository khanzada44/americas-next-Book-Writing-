if ($(window).width() > 980) {
    $(".perspectiv-carousel").PicCarousel({
        "height": 400,
        "width": 1000,
        "posterWidth": 195,
        "posterHeight": 282,
        "scale": 0.9,
        "speed": 1000,
        "autoPlay": true,
        "delay": 1000,
        "verticalAlign": "middle",
    });
}
if ($(window).width() < 980 && $(window).width() > 767) {
    $(".perspectiv-carousel").PicCarousel({
        "height": 400,
        "width": 700,
        "posterWidth": 195,
        "posterHeight": 282,
        "scale": 0.9,
        "speed": 1000,
        "autoPlay": true,
        "delay": 1000,
        "verticalAlign": "middle",
    });
}
if ($(window).width() < 768) {
    $(".perspectiv-carousel").PicCarousel({
        "height": 400,
        "width": 300,
        "posterWidth": 195,
        "posterHeight": 282,
        "scale": 0.9,
        "speed": 1000,
        "autoPlay": true,
        "delay": 1000,
        "verticalAlign": "middle",
    });
}
