setTimeout(function(){
        $('#offerModal').modal('show');
    }, 3000);
        $(function () {
    var $anchors = $('.process-item');

    (function _loop(idx) {
        $anchors.removeClass('active').eq(idx).addClass('active');
        setTimeout(function () {
            _loop((idx + 1) % $anchors.length);
        }, 3000);
    }(0));
});
