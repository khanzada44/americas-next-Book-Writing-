function closePopup(){
        $("#bouncepopupform").hide();
    }
    function setButtonURL() {
        $zopim.livechat.window.toggle();
    }
    
    var newsletter_p = setInterval(function() {
    	$("#bouncepopup-overlay").css("display", "block")
    	$("#bouncepopupform").toggle("bounce", {
    		times: 1
    	}, "slow");
    	clearInterval(newsletter_p);
    }, 2000);
    
    $(document).ready(function() {
    	$(".bounce-close").click(function() {
    		$(".bouncepopup-overlay").hide();
    		$("#bouncepopupform").hide();
    	});
    });
