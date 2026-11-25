var isloading2 = true;

function removeLoading2() {
    if (isloading2) {
        $('.myLazy').each(function() {
            $(this).attr("src", $(this).attr('src'))
        })
        isloading2 = false
    }
}
$(document).mousemove(removeLoading2)
$(document).on("touchmove", removeLoading2)
setInterval(removeLoading2, 5000);
