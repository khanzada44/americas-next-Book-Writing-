jQuery(document).ready(function () {
			jQuery("#menu-1-2ff36130").append(
				`<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-587"><a href="https://publisher4states.com/ghost-writing/" class="el-item menu-link">Ghost Writers</a></li>
		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-587"><a href="https://publisher4states.com/design-illustrator/" class="el-item menu-link">Design Illustrations</a></li>`
			);
			var hreeff = jQuery("#menu-item-585").children("div.elementskit-megamenu-panel").find("a").children(
				"img [src='https://publisher4states.com/wp-content/uploads/2023/06/ebook-writing.png']");
			jQuery(hreeff).parent("a").attr("href", "https://publisher4states.com/ghost-writing/");
			jQuery(hreeff).parent("a").parent("figure").siblings("div.el-image-box-content").children(
				"h3.el-image-box-title").children("a").attr("href",
				"https://publisher4states.com/ghost-writing/");
			jQuery(hreeff).parent("a").parent("figure").siblings("div.el-image-box-content").children(
				"h3.el-image-box-title").children("a").text("Gost Writing")
		})


		//slider 


		jQuery('.tech-slider').slick({

			dots: false,

			infinite: true,

			slidesToShow: 5,

			autoplay: true,

			autoplaySpeed: 0,

			speed: 8000,

			arrows: false,

			pauseOnHover: false,

			cssEase: 'linear',

			slidesToScroll: 1,

			responsive: [

				{

					breakpoint: 1024,

					settings: {

						slidesToShow: 4,

						slidesToScroll: 1,

						infinite: true,

						dots: false

					}

				},

				{

					breakpoint: 767,

					settings: {

						slidesToShow: 1,

						slidesToScroll: 1

					}

				},

				{

					breakpoint: 480,

					settings: {

						slidesToShow: 1,

						slidesToScroll: 1

					}

				}

				// You can unslick at a given breakpoint now by adding:

				// settings: "unslick"

				// instead of a settings object

			]

		});
