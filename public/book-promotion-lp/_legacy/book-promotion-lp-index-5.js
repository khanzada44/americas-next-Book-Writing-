var isloading = true;

		function removeLoading() {
			if (isloading) {
				console.log("removing");
				$("head").append(`
				<link rel="stylesheet" type="text/css" href="css/fancybox.css" />
				<link rel="stylesheet" href="css/accordian-jquery-ui.css">
				<link rel="stylesheet" type="text/css" href="css/slick.css" />
				<link rel="stylesheet" type="text/css" href="css/jquery.fancybox.min.css" />
        <link rel="stylesheet" type="text/css" href="css/slick-theme.css" />
		
		`)

			
				$(".cta-sec").addClass('cta-sec-bg')
				$('.myLazy').each(function () {
					$(this).attr("src", $(this).attr('src'))
				})
				isloading = false
			}
		}
		$(document).mousemove(removeLoading)
		$(document).scroll(removeLoading)
		$(document).on("touchmove", removeLoading)
		setTimeout(removeLoading, 10000);
	
				
function loopCheckChat(){

	$iframe = $("#launcher")
			var iframeDoc = $iframe.contents();

  // Step 3: Find the element within the iframe document
  $elementWithinIframe = iframeDoc.find('span[data-testid="launcher-label"]');
  

  // Store the initial text content
   initialTextContent = $elementWithinIframe.text();

  console.log('initial Text',initialTextContent);
	var interval = setInterval(function() {
			// Get the current text content

			var currentTextContent = $elementWithinIframe != null? $elementWithinIframe.text():null;

			// Compare the current text content with the initial content
			if (currentTextContent !== initialTextContent) {
			// Text content has changed, perform desired actions here
			console.log('Text changed!');
			$zopim.livechat.window.show();


			// Update the initial text content for future comparisons
			initialTextContent = currentTextContent;
			}
		}, 1000); 
}
		// zE(function() {	
		// 	zE.activate();
		// 	setInterval(() => {
		// 		loopCheckChat();
		// 	}, 2000);
		// });
		   
function setButtonURL() {
//zE.activate();
$zopim.livechat.window.toggle();
}


setTimeout(function(){
loadZendeskWidget();

}, 5000);
function loadZendeskWidget() {
var script = document.createElement('script');
script.type = 'text/javascript';
script.id = 'ze-snippet';
script.async = true;
script.src = 'https://static.zdassets.com/ekr/snippet.js?key=b5566f55-0fef-4c06-8d31-c9e6ad283a8f';
document.getElementsByTagName('head')[0].appendChild(script);

};
  window.$zopim || function (a, d) {
            var b = $zopim = function (a) {
                    b._.push(a)
                },
                c = b.s = a.createElement(d);
            a = a.getElementsByTagName(d)[0];
            b.set = function (a) {
                b.set._.push(a)
            };
            b._ = [];
            b.set._ = [];
            c.async = !0;
            c.setAttribute("charset", "utf-8");
            c.src = "";
            b.t = +new Date;
            c.type = "text/javascript";
            a.parentNode.insertBefore(c, a)
        }
        (document, "script");

    $zopim(function () {
        function a(a) {
            2 <= a && $zopim.livechat.window.show()
        }
        $zopim.livechat.setOnUnreadMsgs(a)
    });
//   $(document).ready(function(){ $('.phone').inputmask('(999)-999-9999'); });
  $('.chat, .chatt,.chats').click(function(){  $zopim.livechat.window.toggle(); }); 
//End  countInnit


//          zE(function() {

// zE.activate();
// });
    //    zE(function() {
    //     $zopim(function() {
    //       $zopim.livechat.setOnUnreadMsgs(unread);
    //         function unread(number) {
    //         if (number>=1)
    //         {
    //       $zopim.livechat.window.toggle();
    //         }
    //         }
    //     });
    // });

    $(".liveChat").click(function(){
      $zopim.livechat.window.toggle();
    })
