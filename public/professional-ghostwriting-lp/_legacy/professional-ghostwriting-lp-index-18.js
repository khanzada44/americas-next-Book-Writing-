$(".hero-banner-bg-here").addClass("hero-banner-bg");
if(window.innerWidth > 767){
	$(".video-here").append(`<video
										src="https://player.vimeo.com/progressive_redirect/playback/642391890/rendition/1080p/file.mp4?loc=external&signature=c61f9a34f6609735814582458f807e0c883c3420a11f562bd4c8cc7ba5e19ceb"
										autoplay muted class="hero-video"></video>`);

}
		var isloading = true;

		function removeLoading() {
			if (isloading) {
				console.log("removing");
				$("head").append(`
		
	<link rel="stylesheet" href="css/slick.css">
	<link rel="stylesheet" href="css/slick-theme.css">
		`)

				$(".about-writer-bg-here").addClass("about-writer-bg");
				$(".dark-memories-here").addClass("dark-memories");
				$(".paul-behaving-here").addClass("paul-behaving");
				$(".alexa-dare-here").addClass("alexa-dare");
				$(".going-dark-here").addClass("going-dark");
				$(".magento-section").addClass("magentto-bg");
				$(".home-cta-bg-here").addClass("home-cta-bg");
				
				$(".sec-brochure-writing").addClass("brocher-writing-bg");
				$('.myLazy').each(function () {
					$(this).attr("src", $(this).attr('data-customsrc'))
				})
				isloading = false
			}
		}
		$(document).mousemove(removeLoading)
		$(document).scroll(removeLoading)
		$(document).on("touchmove", removeLoading)
		// if(window.innerWidth <= 767){
		// 	removeLoading();
		// }
		setTimeout(removeLoading, 10000);
		$(".chat-btn").click(function(){
			$zopim.livechat.window.toggle();
		})

		var initialTextContent = null;
		var $elementWithinIframe = null;

		zE(function() {	
			console.log("here is zendesk chat");
			zE.activate();
			setInterval(() => {
				loopCheckChat();
			}, 2000);
  // Set up a periodic check using setInterval
//   loopCheckChat();

		});

		
function loopCheckChat(){
// console.log('loog chat')
	$iframe = $("#launcher")
			var iframeDoc = $iframe.contents();

  // Step 3: Find the element within the iframe document
   $elementWithinIframe = iframeDoc.find('span[data-testid="launcher-label"]');

//    console.log($elementWithinIframe)
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
			$zopim.livechat.window.toggle();


			// Update the initial text content for future comparisons
			initialTextContent = currentTextContent;
			}
		}, 1000); 
}

		// Adjust the interval (in milliseconds) as needed

  // Example: Changing the text of the element within the iframe
//   $elementWithinIframe.text('New Text');

		// Step 1: Select the iframe element

		

// $zopim(function() {
//     console.log("hello ze ready")
//   });
		// setTimeout(() => {
			
			

		// }, 5000);

// $elementWithinIframe.text('New Text');
